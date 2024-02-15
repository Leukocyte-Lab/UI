<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { computed, provide, ref, onMounted } from 'vue';
import { usePageLeave, watchDebounced } from '@vueuse/core';
import { onTick } from 'vue3-pixi';
import { groupBy, maxBy, minBy, map } from 'lodash-es';

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

const nodes: Ref<Map<Flow.Entity.Node.Model['id'], Flow.Entity.Node.Model>> = ref(new Map());
const edges: Ref<Map<Flow.Entity.Edge.Model['id'], Flow.Entity.Edge.Model>> = ref(new Map());
const isPanning = ref<boolean | 'ready'>(false);
const bufferedMovement = ref<Vec2>({ x: 0, y: 0 });
const pageLeave = usePageLeave();
const viewportRef$ = ref<ContainerInst>();

const offset = computed<Vec2>(() => ({
  x: props.initialScale === 'cover' ? (props.width - viewportBoundingBox.value.width) / 2 : 0,
  y: props.initialScale !== 'contain' ? (props.height - viewportBoundingBox.value.height) / 2 : 0
}));
const stageOffset = ref<Vec2>({
  x: 0,
  y: 0
});

const calcReactiveViewportSize = (dimension: 'width' | 'height') =>
  Math.max(
    ((nodes, axis: keyof Vec2) =>
      Object.values(groupBy(nodes, `relativePosition.${axis}`)).reduce(
        (size, nodes, index) =>
          size +
          Math.max(...map(nodes, `boundingBox.${dimension}`)) +
          (index === 0 ? 2 : 1) * (Number(props.gap) || (props.gap as Vec2)[axis]),
        0
      ))([...(nodes.value?.values() ?? [])], dimension === 'width' ? 'x' : 'y'),
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
      ? (node.relativePosition?.x ?? node.position.x) *
        (node.boundingBox.width + (Number(props.gap) || (props.gap as Vec2).x))
      : node.position.x) +
    node.boundingBox.width / 2 +
    (offset.value?.x ?? 0),
  y:
    (props.autoLayout
      ? (viewportBoundingBox.value?.height ?? 0) / 2 +
        (node.relativePosition?.y ?? node.position.y) *
          (node.boundingBox.height + (Number(props.gap) || (props.gap as Vec2).y))
      : node.position.y) -
    node.boundingBox.height / 2 +
    (offset.value?.y ?? 0)
});

const resizeStage = () => {
  const stage = viewportRef$.value;

  if (stage) {
    stage.scale.x = 1 * (Number(props.initialScale) || 1);
    stage.scale.y = 1 * (Number(props.initialScale) || 1);
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
      {
        x: 0,
        y: 0
      },
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
      const instantMovementDistance = Math$.Vector.delta(
        {
          x: 0,
          y: 0
        },
        movement
      );
      const bufferedMovementDistance = Math$.Vector.delta(
        {
          x: 0,
          y: 0
        },
        bufferedMovement.value
      );

      if (instantMovementDistance > 5 || bufferedMovementDistance > 5) {
        isPanning.value = true;
        bufferedMovement.value = {
          x: 0,
          y: 0
        };
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
      x: Math$.clamp(
        origin.x,
        props.width - viewportBoundingBox.value.width,
        (viewportBoundingBox.value.width - props.width) / 4
      ),
      y: Math$.clamp(
        origin.y,
        (props.height - viewportBoundingBox.value.height) / 4,
        (viewportBoundingBox.value.height - props.height) / 4
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
          (viewportBoundingBox.value.width - props.width) / 4 + overMoveThreshold
        ),
        y: Math$.clamp(
          origin.y,
          (props.height - viewportBoundingBox.value.height) / 4 - overMoveThreshold,
          (viewportBoundingBox.value.height - props.height) / 4 + overMoveThreshold
        )
      };
    } else {
      stage.position = origin;
    }

    stageOffset.value = stage.position;
  }
};

const handleTailingMovement = () => {
  const bufferedMovementDistance = Math$.Vector.delta(
    {
      x: 0,
      y: 0
    },
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
  }
};

const handleGlobalEvents = () => {
  document.addEventListener('mouseup', handlePan);
  document.addEventListener('pointerup', handlePan);
  document.addEventListener('mousedown', handlePan);
  document.addEventListener('pointerdown', handlePan);
  document.addEventListener('mousemove', handlePan);
  document.addEventListener('pointermove', handlePan);
};

const nodeCalcOnTick = () => {
  nodes.value.forEach((node) => {
    nodes.value.get(node.id)!.position = calcNodePosition(node);
    nodes.value.get(node.id)!.isPanning = Boolean(isPanning.value);
  });
  resizeStage();

  requestAnimationFrame(nodeCalcOnTick);
};

onMounted(() => {
  resizeStage();
  handleGlobalEvents();
  nodeCalcOnTick();
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
provide(Flow.UI.Screen.Viewport.Size, viewportBoundingBox);
provide(Flow.UI.Screen.Viewport.NodeBoundary, nodeBoundary);
provide(Flow.UI.Debugger.InjectionKey, props.debugOptions ?? {});
</script>

<template>
  <Container
    ref="viewportRef$"
    :width="viewportBoundingBox.width"
    :height="viewportBoundingBox.height"
  >
    <Graphics
      @render="
        (graphics) => {
          graphics.clear();
          graphics.beginFill(
            debugOptions?.showBoundingBox ? '0x56f071' : '0xffffff',
            debugOptions?.showBoundingBox ? 1 : 0.0001
          );
          graphics.drawRect(stageOffset.x * -1, stageOffset.y * -1, props.width, props.height);
          graphics.endFill();
        }
      "
    />
    <template v-if="debugOptions?.showBoundingBox">
      <Text
        :x="stageOffset.x * -1"
        :y="stageOffset.y * -1"
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
          stage-offset-x: ${stageOffset.x}
          stage-offset-y: ${stageOffset.y}
          width: ${props.width}
          height: ${props.height}
        `"
      />
    </template>
    <slot />
  </Container>
</template>
