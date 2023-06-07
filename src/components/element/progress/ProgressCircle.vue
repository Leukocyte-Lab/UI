<script setup lang="ts">
import { onUpdated, ref } from 'vue';
import { computedEager, useElementSize } from '@vueuse/core';
import { delay } from 'lodash-es';

import Math$ from '@/shared/libs/math';
import { signal } from '@/shared/libs/signal';

import BasePoly from '@/components/base/BasePoly.vue';
import InnerShadowDeco from '@/components/effect/InnerShadowDeco.vue';

import type { Progress } from '@/components/element/progress/progress.model';
import type { Vector } from '@/shared/types/vector';

const props = withDefaults(defineProps<Progress.Props>(), {
  value: 0,
  variant: 'concave',
  thickness: 12
});

const wrapperRef$ = ref<HTMLElement>();
const { width, height } = useElementSize(wrapperRef$);

const radius = computedEager(() =>
  Math$.clamp(Math$.min(width.value, height.value) / 2 - props.thickness / 2, 0, Infinity)
);
const radiant = computedEager(() => radius.value * 2 * Math$.PI);
const center = computedEager<Vector<'x' | 'y'>>(() => ({
  x: width.value / 2,
  y: height.value / 2
}));

const valueFill = signal('');

const computeValueFill = () => {
  if (wrapperRef$.value && props.variant === 'convex') {
    delay(
      () =>
        valueFill.set(
          globalThis
            .getComputedStyle(wrapperRef$.value!)
            .getPropertyValue('--progress-value-fill-gradient')
        ),
      30
    );
  }
};

onUpdated(() => {
  computeValueFill();
});
</script>

<template>
  <div ref="wrapperRef$" :class="[$style['progress-container'], $style[props.variant]]">
    <BasePoly :height="height" :width="width">
      <template #defs>
        <!-- eslint-disable-next-line vue/no-v-text-v-html-on-component -->
        <g v-html="valueFill()" />
        <InnerShadowDeco :height="height" :width="width" />
        <circle
          id="progress-groove-outer"
          :cx="center.x"
          :cy="center.y"
          :r="radius + props.thickness / 2"
        />
        <circle
          id="progress-groove-inner"
          :cx="center.x"
          :cy="center.y"
          :r="radius - props.thickness / 2"
        />
        <mask id="progress-groove-mask">
          <use href="#progress-groove-outer" fill="#fff" />
          <use href="#progress-groove-inner" fill="#000" />
        </mask>
      </template>
      <template #path>
        <g :class="[$style['progress-groove'], $style[props.variant]]">
          <use href="#progress-groove-outer" mask="url(#progress-groove-mask)" />
        </g>
        <g :class="[$style['progress-value'], $style[props.variant]]">
          <circle
            :cx="center.x"
            :cy="center.y"
            :r="radius"
            :stroke-dashoffset="(props.value + 0.25) * radiant"
            :stroke-dasharray="`${props.value * radiant} ${(1 - props.value) * radiant}`"
            :stroke-width="props.thickness"
            fill="transparent"
          />
        </g>
        <clipPath id="progress-content-clip">
          <use href="#progress-groove-inner" />
        </clipPath>
        <g clip-path="url(#progress-content-clip)">
          <foreignObject
            :height="radius * 2"
            :width="radius * 2"
            :x="center.x - radius"
            :y="center.y - radius"
          >
            <div :class="$style['progress-content-wrapper']">
              <label>{{ (props.value * 100).toFixed(0) }}%</label>
            </div>
          </foreignObject>
        </g>
      </template>
    </BasePoly>
  </div>
</template>

<style module scoped lang="scss">
@use '@/assets/styles/modules/progress.module' as progress;

.progress {
  &-container {
    --progress-content-fill: var(--agh-ref-color-cyan-500);

    &.concave {
      --progress-groove-fill: var(--agh-ref-color-grayscale-200);
      --progress-value-fill: var(--agh-ref-color-cyan-500);
      --progress-filter: url('#effects--inner-shadow--deco');
    }

    &.convex {
      --progress-groove-fill: var(--agh-ref-color-grayscale-100);
      --progress-value-fill: url('#agh-ref-color-cyan-gradient-500');
      --progress-value-fill-gradient: var(--agh-ref-color-cyan-gradient-500-svg);
      --progress-filter: var(--agh-sys-effects-shadow-gadget-filter);
    }
  }
}
</style>
