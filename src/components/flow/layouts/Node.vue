<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { ref, onMounted, reactive, computed, inject } from 'vue';
import { External } from 'vue3-pixi';
import { computedInject, useElementSize } from '@vueuse/core';

import type { VNode } from 'vue';

import { Flow } from '../Flow.model';

const props = withDefaults(defineProps<Flow.UI.Layout.Node.Props>(), {});

const debugOptions = inject(Flow.UI.Debugger.InjectionKey);

const edges = computedInject(Flow.Entity.Edge.InjectionKey, (edges) => edges?.value);
const nodes = computedInject(Flow.Entity.Node.InjectionKey, (nodes) => nodes?.value);

defineSlots<{
  default: () => VNode;
}>();

const wrapperRef$ = ref<HTMLElement>();
const boundingBox = reactive(useElementSize(wrapperRef$));

const node = computed(() => nodes.value?.get(props.id));

const createNode = () => {
  const node: Flow.Entity.Node.Model = {
    id: props.id,
    position: !props.relative
      ? props.position ?? {
          x: props.positionX ?? 0,
          y: props.positionY ?? 0
        }
      : {
          x: 0,
          y: 0
        },
    relativePosition: props.relative
      ? props.position ?? {
          x: props.positionX ?? 0,
          y: props.positionY ?? 0
        }
      : undefined,
    boundingBox,
    get edges() {
      return new Map([...(edges.value ?? [])].filter(([, edge]) => edge.from.id === props.id));
    }
  };

  nodes.value?.set(props.id, node);

  props.to?.forEach((nodeId) => {
    const edge: Flow.Entity.Edge.Model = {
      id: `${props.id}->${nodeId}`,
      from: node,
      get to() {
        return new Map([...(nodes.value ?? [])].filter(([, node]) => node.id === nodeId));
      }
    };

    edges.value?.set(edge.id, edge);
  });
};

onMounted(() => {
  createNode();
});
</script>

<template>
  <Container
    :x="node?.position.x"
    :y="node?.position.y"
    :width="boundingBox.width"
    :height="boundingBox.height"
    :position="node?.position"
  >
    <template v-if="debugOptions?.showBoundingBox">
      <Graphics
        @render="
          (graphics) => {
            graphics.clear();
            graphics.beginFill(0xde3249);
            graphics.drawRect(0, 0, boundingBox.width, boundingBox.height);
            graphics.endFill();
          }
        "
      />
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
          #${props.id}

          x: ${node?.position.x}
          y: ${node?.position.y}
          width: ${boundingBox.width}
          height: ${boundingBox.height}
        `"
      />
    </template>
    <External>
      <div
        ref="wrapperRef$"
        :class="[
          $style['flow-node-container'],
          $style.wrapper,
          $style.flex,
          $style.vertical,
          {
            [$style['debugger--show-bounding-box']]: debugOptions?.showBoundingBox
          }
        ]"
        :style="{
          transform: `translate3d(${node?.position.x ?? 0}px, ${node?.position.y ?? 0}px, 0)`
        }"
      >
        <slot />
      </div>
    </External>
  </Container>
</template>

<style module lang="scss">
@use '@/assets/styles/modules/wrapper.module' as wrapper;

.flow {
  &-node {
    &-container {
      position: absolute !important;
      width: fit-content;
      height: fit-content;

      &.debugger {
        &--show-bounding-box {
          &:not(:hover) {
            opacity: 0.1;
          }
        }
      }
    }
  }
}
</style>
