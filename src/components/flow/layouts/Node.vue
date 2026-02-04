<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { computed, inject,onMounted, reactive, ref } from 'vue';
import { External } from 'vue3-pixi';
import { computedInject, useElementSize } from '@vueuse/core';

import type { Graphics } from 'pixi.js';
import type { VNode } from 'vue';

import { FlowKit } from '..';
import { Flow } from '../Flow.model';

import Map$ from '@/shared/libs/map';

const debugOptions = inject(Flow.UI.Debugger.InjectionKey);

const props = withDefaults(defineProps<Flow.UI.Layout.Node.Props>(), {
  activeEdgesOn: 'from',
  active: false,
  blur: false
});

const allEdges = computedInject(Flow.Entity.Edge.InjectionKey, (edges) => edges?.value);
const nodes = computedInject(Flow.Entity.Node.InjectionKey, (nodes) => nodes?.value);

defineSlots<{
  default: () => VNode;
}>();

const wrapperRef$ = ref<HTMLElement>();
const boundingBox = reactive(useElementSize(wrapperRef$));

const node = computed(() => nodes.value?.get(props.id));
const edges = computed(
  () =>
    new Map$(
      [...(node.value?.edges ?? [])].map(([id, edge]) => [
        id,
        {
          ...edge,
          active:
            props.activeEdgesOn === 'to' || props.activeEdgesOn === 'both'
              ? (props.activeNodeId !== undefined && edge.to?.id === props.activeNodeId) ||
                (props.activeEdgesOn === 'both' ? props.active : false)
              : props.active
        }
      ])
    )
);

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
    offset: {
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
      return new Map(
        [...(allEdges.value ?? [])].filter(
          ([, edge]) => edge.from.id === props.id || edge.to?.id === props.id
        )
      );
    }
  };

  nodes.value?.set(props.id, node);

  props.to?.forEach((nodeId) => {
    const edge: Flow.Entity.Edge.Model = {
      id: `${props.id}->${nodeId}`,
      from: node,
      get to() {
        return nodes.value?.get(nodeId);
      }
    };

    allEdges.value?.set(edge.id, edge);
  });
};

onMounted(() => {
  createNode();
});
</script>

<template>
  <template v-if="debugOptions?.showBoundingBox">
    <Container :position="node?.position">
      <Graphics
        @render="
          (graphics: Graphics) => {
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
          offset-x: ${node?.offset.x}
          offset-y: ${node?.offset.y}
          width: ${boundingBox.width}
          height: ${boundingBox.height}
        `"
      />
    </Container>
  </template>
  <template v-for="[id, edge] in edges" :key="id">
    <template v-if="edge.from.id === node?.id">
      <Container :position="node?.position" :z-index="edge.active ? 10000 : 0">
        <FlowKit.Layout.Edge
          :active="edge.active"
          :arrow-size="props.arrowSize"
          :blur="props.blur"
          :edge="edge"
          :priority="props.priority"
          :radius="props.radius"
          :stroke-color="props.strokeColor"
          :stroke-opacity="props.strokeOpacity"
          :stroke-width="props.strokeWidth"
        />
      </Container>
    </template>
  </template>
  <External>
    <div
      ref="wrapperRef$"
      :class="[
        $style['flow-node-container'],
        $style.wrapper,
        $style.flex,
        $style.vertical,
        node?.isPanning && $style.panning,
        debugOptions?.showBoundingBox && $style['debugger--show-bounding-box']
      ]"
      :style="{
        transform: `translate3d(${(node?.position.x ?? 0) + (node?.offset.x ?? 0)}px, ${(node?.position.y ?? 0) + (node?.offset.y ?? 0)}px, 0.000001px)`
      }"
    >
      <slot />
    </div>
  </External>
</template>

<style module lang="scss">
@use '@/assets/styles/modules/wrapper.module' as wrapper;

.flow {
  &-node {
    &-container {
      position: absolute !important;
      width: fit-content;
      height: fit-content;

      &.panning {
        pointer-events: none;
      }

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
