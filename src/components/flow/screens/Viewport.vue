<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { provide, ref } from 'vue';

import type { Ref, VNode } from 'vue';

import { Flow } from '@/components/flow/Flow.model';

const props = withDefaults(defineProps<Flow.UI.Screen.Viewport.Props>(), {
  scale: 1
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

provide(Flow.Entity.Node.InjectionKey, nodes);
provide(Flow.Entity.Edge.InjectionKey, edges);
provide(Flow.UI.Debugger.InjectionKey, props.debugOptions ?? {});
</script>

<template>
  <Container :width="props.width" :height="props.height" :scale="props.scale" :pivot="0.5">
    <slot />
  </Container>
</template>

<style module scoped lang="scss"></style>
