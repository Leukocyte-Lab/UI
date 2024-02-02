<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { computed, provide, ref, onMounted } from 'vue';
import { usePageLeave, watchDebounced } from '@vueuse/core';
import { groupBy, maxBy, minBy, map } from 'lodash-es';

import type { Ref, VNode } from 'vue';

import { Flow } from '@/components/flow/Flow.model';

import { Math$ } from '@/shared';

import type { Vec2 } from '@/shared/types/vector';
import type { ContainerInst } from 'vue3-pixi';
import type { FederatedMouseEvent } from 'pixi.js';
import type { FederatedPointerEvent } from 'pixi.js';

const props = withDefaults(defineProps<Flow.UI.Screen.Viewport.Props>(), {
  scale: 1,
  gap: () => ({
    x: 80,
    y: 48
  })
});

const nodes: Ref<Map<Flow.Entity.Node.Model['id'], Flow.Entity.Node.Model>> = ref(new Map());
const edges: Ref<Map<Flow.Entity.Edge.Model['id'], Flow.Entity.Edge.Model>> = ref(new Map());
const panning = ref(false);
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
          (index === 0 ? 0 : Number(props.gap) || (props.gap as Vec2)[axis]),
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

const handlePan = ($event: FederatedMouseEvent | FederatedPointerEvent) => {
  if (
    $event.type === 'pointerup' ||
    $event.type === 'mouseup' ||
    $event.type === 'pointerout' ||
    $event.type === 'mouseout'
  ) {
    panning.value = false;

    props.cursorMode.set('default');
  } else if ($event.type === 'pointerdown' || $event.type === 'mousedown') {
    panning.value = true;

    props.cursorMode.set('move');
  } else if ($event.type === 'pointermove' || $event.type === 'mousemove') {
    if (panning.value && viewportRef$.value) {
      const stage = viewportRef$.value;

      stage.position.x = Math$.clamp(
        stage.position.x + $event.movementX,
        props.width * -1,
        (viewportBoundingBox.value.width - props.width) / 4
      );
      stage.position.y = Math$.clamp(
        stage.position.y + $event.movementY,
        (props.height - viewportBoundingBox.value.height) / 4,
        (viewportBoundingBox.value.height - props.height) / 4
      );

      stageOffset.value = {
        x: stage.position.x,
        y: stage.position.y
      };
    }
  }
};

onMounted(() => {
  resizeStage();
});

watchDebounced(
  nodes,
  (nodes) => {
    nodes.forEach((node) => {
      nodes.get(node.id)!.position = calcNodePosition(node);
      nodes.get(node.id)!.isPanning = panning.value;
    });
    resizeStage();
  },
  { deep: true, debounce: 100, maxWait: 500 }
);

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
      panning.value = false;
    }
  },
  { debounce: 100, maxWait: 500 }
);

defineSlots<{
  default: () => VNode;
}>();

defineExpose({
  nodes,
  edges,
  panning
});

provide(Flow.Entity.Node.InjectionKey, nodes);
provide(Flow.Entity.Edge.InjectionKey, edges);
provide(Flow.UI.Debugger.InjectionKey, props.debugOptions ?? {});
</script>

<template>
  <Container
    ref="viewportRef$"
    :width="viewportBoundingBox.width"
    :height="viewportBoundingBox.height"
    @mousedown="handlePan"
    @mouseup="handlePan"
    @mousemove="handlePan"
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

<style module scoped lang="scss"></style>
