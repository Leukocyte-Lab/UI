<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { computed, reactive,ref } from 'vue';
import { Application } from 'vue3-pixi';
import { isClient, useElementSize } from '@vueuse/core';

import type { Cursor } from 'pixi.js';
import type { VNode } from 'vue';

import { FlowKit } from '@/components/flow';
import { Flow } from '@/components/flow/Flow.model';
import { signal } from '@/shared/libs/signal';
import { uuid } from '@/shared/libs/uuid';

const props = withDefaults(defineProps<Flow.UI.Screen.Window.Props>(), {
  devtools: false,
  toolbar: true,
  toolbarDirection: 'horizontal',
  toolbarPosition: 'bottom-right',
  zoomable: true,
  autoLayout: true,
  initialScale: 1,
  acceleration: 'default'
});

defineSlots<{
  default: () => VNode;
}>();

const wrapperRef$ = ref<HTMLElement>();
const viewportRef$ = ref<{
  isPanning: boolean | 'ready';
}>();
const cursorMode = signal<Cursor>('default');

const wrapperBoundingBox = reactive(useElementSize(wrapperRef$));

const scale = computed({
  get() {
    return Number(props.initialScale) || 1; // TODO: Calculate initial scale based on the size of the flow
  },
  set(value) {
    scale.value = value;
  }
});
</script>

<template>
  <div
    ref="wrapperRef$"
    :id="`flow-${uuid()}`"
    :class="[$style['flow-container'], $style.behavior, $style[cursorMode()]]"
  >
    <Application
      :antialias="true"
      :background-alpha="0"
      :class="$style['flow-viewport']"
      :height="wrapperBoundingBox.height"
      :power-preference="acceleration"
      :resize-to="wrapperRef$"
      :resolution="4"
      :width="wrapperBoundingBox.width"
    >
      <template v-if="props.devtools && isClient">
        <FlowKit.Helper.DevTool />
      </template>
      <FlowKit.Screen.Viewport
        ref="viewportRef$"
        :auto-layout="props.autoLayout"
        :cursor-mode="cursorMode"
        :debug-options="props.debugOptions"
        :height="wrapperBoundingBox.height"
        :initial-scale="props.initialScale"
        :scale="scale"
        :width="wrapperBoundingBox.width"
      >
        <slot />
      </FlowKit.Screen.Viewport>
    </Application>
    <template v-if="props.toolbar">
      <FlowKit.Layout.Toolbar :disabled="viewportRef$?.isPanning === true" />
    </template>
  </div>
</template>

<style>
* {
  box-sizing: border-box;
}
</style>

<style module scoped lang="scss">
@use '@/assets/styles/modules/behavior.module' as behavior;

.flow {
  &-container {
    display: flex;
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  &-viewport {
    position: absolute;
    top: 0;
    left: 0;
  }
}
</style>
