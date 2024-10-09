<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { groupBy, isEqual, map, maxBy, minBy } from 'lodash-es';
import { computed, onMounted, provide, ref } from 'vue';
import { usePageLeave, watchDebounced } from '@vueuse/core';

import type { Graphics } from 'pixi.js';
import type { Ref, VNode } from 'vue';
import type { ContainerInst } from 'vue3-pixi';

import { Flow } from '@/components/flow/Flow.model';
import { Math$ } from '@/shared';

import type { Vec2 } from '@/shared/types/vector';

const props = withDefaults(defineProps<Flow.UI.Screen.Viewport.Props>(), {
  scale: 1,
  gap: () => ({
    x: 120,
    y: 48
  })
});

const pageLeave = usePageLeave();

const nodes: Ref<Map<Flow.Entity.Node.Model['id'], Flow.Entity.Node.Model>> = ref(new Map());
const edges: Ref<Map<Flow.Entity.Edge.Model['id'], Flow.Entity.Edge.Model>> = ref(new Map());
const isPanning = ref<boolean | 'ready'>(false);
const bufferedMovement = ref<Vec2>({ x: 0, y: 0 });
const viewportRef$ = ref<ContainerInst>();
const viewportOffset = ref<Vec2>({
  x: 0,
  y: 0
});
const stageOffset = ref<Vec2>({
  x: 0,
  y: 0
});

const offset = computed<Vec2>(() => ({
  x: props.initialScale === 'cover' ? (props.width - viewportBoundingBox.value.width) / 2 : 0,
  y: props.initialScale !== 'contain' ? (props.height - viewportBoundingBox.value.height) / 2 : 0
}));
const gap = computed<Vec2>(() => ({
  x: Number(props.gap) || (props.gap as Vec2).x,
  y: Number(props.gap) || (props.gap as Vec2).y
}));

const calcReactiveViewportSize = (dimension: 'width' | 'height') =>
  Math.max(
    ((nodes, axis: keyof Vec2) =>
      dimension === 'width'
        ? nodes.reduce(
            (size: number, nodes: Flow.Entity.Node.Model[], index: number): number =>
              size +
              Math.max(...map(nodes, `boundingBox.${dimension}`)) +
              (index === 0 ? 2 : 1) * gap.value[axis],
            0
          )
        : Math.max(
            ...nodes.map((nodes) =>
              nodes.reduce(
                (size: number, node: Flow.Entity.Node.Model, index: number): number =>
                  size + node.boundingBox[dimension] + (index === 0 ? 2 : 1) * gap.value[axis],
                dimension === 'height' ? 2 * gap.value[axis] : 0
              )
            )
          ))(
      Object.values(groupBy([...(nodes.value?.values() ?? [])], 'relativePosition.x')),
      dimension === 'width' ? 'x' : 'y'
    ),
    props[dimension]
  );

const calcAbsoluteViewportSize = (dimension: 'width' | 'height') =>
  Math.max(
    Math.abs(
      ((nodes, axis: keyof Vec2) =>
        ((node) => (node?.position[axis] ?? 0) + (node?.boundingBox[dimension] ?? 0))(
          maxBy(nodes, `position.${axis}`)
        ) -
        ((node) => (node?.position[axis] ?? 0) + (node?.boundingBox[dimension] ?? 0))(
          minBy(nodes, `position.${axis}`)
        ))([...(nodes.value?.values() ?? [])], dimension === 'width' ? 'x' : 'y')
    ),
    props[dimension]
  );

const viewportBoundingBox = computed(
  () =>
    Object.fromEntries(
      (['width', 'height'] as const).map((dimension) => [
        dimension,
        props.autoLayout ? calcReactiveViewportSize(dimension) : calcAbsoluteViewportSize(dimension)
      ])
    ) as Record<'width' | 'height', number>
);

const nodeBoundary = computed(() =>
  ((coord) => ({
    min: {
      x: minBy(coord, 'x')?.x ?? 0,
      y: minBy(coord, 'y')?.y ?? 0
    },
    max: {
      x: maxBy(coord, 'x')?.x ?? 0,
      y: maxBy(coord, 'y')?.y ?? 0
    }
  }))([...(nodes.value?.values() ?? [])].map((node) => node.position))
);

const calcNodePosition = (node: Flow.Entity.Node.Model): Vec2 => ({
  x:
    (props.autoLayout
      ? (node.relativePosition?.x ?? node.position.x) * (node.boundingBox.width + gap.value.x)
      : node.position.x) +
    node.boundingBox.width / 2 +
    (offset.value?.x ?? 0),
  y:
    (props.autoLayout
      ? (viewportBoundingBox.value?.height ?? 0) / 2 +
        (node.relativePosition?.y ?? node.position.y) * (node.boundingBox.height + gap.value.y)
      : node.position.y) -
    node.boundingBox.height / 2 +
    (offset.value?.y ?? 0)
});

const resizeStage = () => {
  const stage = viewportRef$.value;

  if (stage) {
    stage.scale.x = Number(props.initialScale) || 1;
    stage.scale.y = Number(props.initialScale) || 1;
  }
};

const handlePan = ($event: MouseEvent) => {
  if (
    $event.type === 'pointerup' ||
    $event.type === 'mouseup' ||
    $event.type === 'pointerout' ||
    $event.type === 'mouseout'
  ) {
    const bufferedMovementDistance = Math$.Vector.delta(
      Math$.Vector.ORIGIN_2D,
      bufferedMovement.value
    );

    if (bufferedMovementDistance > 1) {
      handleTailingMovement();
    }

    isPanning.value = false;
    props.cursorMode.set('default');
  } else if ($event.type === 'pointerdown' || $event.type === 'mousedown') {
    isPanning.value = 'ready';
    props.cursorMode.set('move');
  } else if ($event.type === 'pointermove' || $event.type === 'mousemove') {
    const stage = viewportRef$.value;
    const movement = {
      x: $event.movementX * (props.width / document.documentElement.clientWidth),
      y: $event.movementY * (props.height / document.documentElement.clientHeight)
    };

    if (isPanning.value === 'ready') {
      const instantMovementDistance = Math$.Vector.delta(Math$.Vector.ORIGIN_2D, movement);
      const bufferedMovementDistance = Math$.Vector.delta(
        Math$.Vector.ORIGIN_2D,
        bufferedMovement.value
      );

      if (instantMovementDistance > 5 || bufferedMovementDistance > 5) {
        isPanning.value = true;
        bufferedMovement.value = Math$.Vector.ORIGIN_2D;
      } else {
        bufferedMovement.value = Math$.Vector.add(bufferedMovement.value, movement);
      }
    }

    if (isPanning.value === true && stage) {
      bufferedMovement.value = movement;

      handleMovement(movement);
    }
  }
};

const handleMovement = (movement: Vec2) => {
  const stage = viewportRef$.value;
  const overMoveThreshold = 50;

  if (stage) {
    const origin = {
      x: stage.position.x + movement.x,
      y: stage.position.y + movement.y
    };
    const clamped = {
      x: Math$.clamp(origin.x, props.width - viewportBoundingBox.value.width, 0),
      y: Math$.clamp(
        origin.y,
        (props.height - viewportBoundingBox.value.height) / 2,
        (viewportBoundingBox.value.height - props.height) / 2
      )
    };

    if (Math$.Vector.delta(origin, clamped) > 0.01) {
      bufferedMovement.value = Math$.Vector.clamp(
        Math$.Vector.delta(clamped, origin, true),
        {
          x: -overMoveThreshold,
          y: -overMoveThreshold
        },
        {
          x: overMoveThreshold,
          y: overMoveThreshold
        }
      );
    } else {
      bufferedMovement.value = Math$.Vector.times(movement, 9);
    }

    if (Math$.Vector.delta(origin, clamped) > overMoveThreshold) {
      stage.position = {
        x: Math$.clamp(
          origin.x,
          props.width - viewportBoundingBox.value.width - overMoveThreshold,
          overMoveThreshold
        ),
        y: Math$.clamp(
          origin.y,
          (props.height - viewportBoundingBox.value.height) / 2 - overMoveThreshold,
          (viewportBoundingBox.value.height - props.height) / 2 + overMoveThreshold
        )
      };
    } else {
      stage.position = origin;
    }

    stageOffset.value = stage.position;
    viewportOffset.value = {
      x: stage.position.x,
      y: stage.position.y
    };
  }
};

const handleTailingMovement = () => {
  const bufferedMovementDistance = Math$.Vector.delta(
    Math$.Vector.ORIGIN_2D,
    bufferedMovement.value
  );

  if (bufferedMovementDistance > 0.01) {
    bufferedMovement.value = {
      x: bufferedMovement.value.x * 0.1,
      y: bufferedMovement.value.y * 0.1
    };

    const stage = viewportRef$.value;

    if (stage) {
      handleMovement(bufferedMovement.value);
    }

    requestAnimationFrame(handleTailingMovement);
  } else {
    handleMovement(bufferedMovement.value);
    bufferedMovement.value = Math$.Vector.ORIGIN_2D;
  }
};

const handleGlobalEvents = () => {
  document.addEventListener('mouseup', handlePan);
  document.addEventListener('pointerup', handlePan);
  document.addEventListener('mousemove', handlePan);
  document.addEventListener('pointermove', handlePan);
};

const nodeCalcOnTick = () => {
  nodes.value.forEach((node) => {
    const newPosition = calcNodePosition(node);

    if (
      isPanning.value ||
      Math$.Vector.delta(Math$.Vector.ORIGIN_2D, bufferedMovement.value) > 0 ||
      !isEqual(node.position, newPosition)
    ) {
      nodes.value.get(node.id)!.position = newPosition;
      resizeStage();
    }

    if (node.isPanning !== isPanning.value) {
      nodes.value.get(node.id)!.isPanning = Boolean(isPanning.value);
    }
  });

  requestAnimationFrame(nodeCalcOnTick);
};

onMounted(() => {
  resizeStage();
  nodeCalcOnTick();
  handleGlobalEvents();
});

watchDebounced(
  stageOffset,
  (offset) => {
    nodes.value?.forEach((node) => (nodes.value!.get(node.id)!.offset = offset));
  },
  { deep: true, debounce: 10, maxWait: 500 }
);

watchDebounced(
  pageLeave,
  (state) => {
    if (state) {
      isPanning.value = false;
    }
  },
  { debounce: 10, maxWait: 500 }
);

defineSlots<{
  default: () => VNode;
}>();

defineExpose({
  nodes,
  edges,
  isPanning
});

provide(Flow.Entity.Node.InjectionKey, nodes);
provide(Flow.Entity.Edge.InjectionKey, edges);
provide(Flow.UI.Screen.Viewport.Gap, gap);
provide(Flow.UI.Screen.Viewport.Size, viewportBoundingBox);
provide(Flow.UI.Screen.Viewport.Offset, offset);
provide(Flow.UI.Screen.Viewport.NodeBoundary, nodeBoundary);
provide(Flow.UI.Debugger.InjectionKey, props.debugOptions ?? {});
</script>

<template>
  <Container
    ref="viewportRef$"
    @mousedown="handlePan"
    @pointerdown="handlePan"
    :height="viewportBoundingBox.height"
    :sort-dirty="true"
    :sortable-children="true"
    :width="viewportBoundingBox.width"
  >
    <template v-if="viewportRef$">
      <Graphics
        @render="
          (graphics: Graphics) => {
            graphics.clear();
            graphics.beginFill(
              debugOptions?.showBoundingBox ? '0x56f071' : '0xffffff',
              debugOptions?.showBoundingBox ? 1 : 0.0001
            );
            graphics.drawRect(
              viewportOffset.x * -1,
              viewportOffset.y * -1,
              props.width,
              props.height
            );
            graphics.endFill();
          }
        "
      />
      <template v-if="debugOptions?.showBoundingBox">
        <Text
          :style="{
            fontSize: 10,
            fontFamily: 'monospace',
            whiteSpace: 'pre',
            padding: 10,
            leading: 1.2,
            breakWords: true,
            trim: true
          }"
          :text="`
          #stage-interactive-area

          offset-x: ${offset.x}
          offset-y: ${offset.y}
          stage-offset-x: ${viewportOffset.x}
          stage-offset-y: ${viewportOffset.y}
          width: ${props.width}
          height: ${props.height}
        `"
          :x="viewportOffset.x * -1"
          :y="viewportOffset.y * -1"
        />
      </template>
    </template>
    <slot />
  </Container>
</template>
