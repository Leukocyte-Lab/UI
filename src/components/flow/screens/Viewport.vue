<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { computed, provide, ref } from 'vue';
import { groupBy, maxBy, minBy, map } from 'lodash-es';
import { watchDebounced } from '@vueuse/core';

import type { Ref, VNode } from 'vue';

import { Flow } from '@/components/flow/Flow.model';

import type { Vec2 } from '@/shared/types/vector';

const props = withDefaults(defineProps<Flow.UI.Screen.Viewport.Props>(), {
  scale: 1,
  gap: () => ({
    x: 80,
    y: 24
  })
});

const nodes: Ref<Map<Flow.Entity.Node.Model['id'], Flow.Entity.Node.Model>> = ref(new Map());
const edges: Ref<Map<Flow.Entity.Edge.Model['id'], Flow.Entity.Edge.Model>> = ref(new Map());

defineSlots<{
  default: () => VNode;
}>();

defineExpose({
  nodes,
  edges
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
    node.boundingBox.width / 2,
  y:
    (props.autoLayout
      ? (viewportBoundingBox.value?.height ?? 0) / 2 +
        (node.relativePosition?.y ?? node.position.y) *
          (node.boundingBox.height + (Number(props.gap) || (props.gap as Vec2).y))
      : node.position.y) -
    node.boundingBox.height / 2
});

watchDebounced(
  nodes,
  (nodes) => nodes.forEach((node) => (nodes.get(node.id)!.position = calcNodePosition(node))),
  { deep: true, debounce: 100, maxWait: 500 }
);

provide(Flow.Entity.Node.InjectionKey, nodes);
provide(Flow.Entity.Edge.InjectionKey, edges);
provide(Flow.UI.Debugger.InjectionKey, props.debugOptions ?? {});
</script>

<template>
  <Container
    :width="viewportBoundingBox.width"
    :height="viewportBoundingBox.height"
    :scale="props.scale"
  >
    <slot />
  </Container>
</template>

<style module scoped lang="scss"></style>
