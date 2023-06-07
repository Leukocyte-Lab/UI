<script setup lang="ts">
import { computed, onUpdated, ref } from 'vue';
import { computedEager, useElementSize } from '@vueuse/core';
import { delay } from 'lodash-es';

import Math$ from '@/shared/libs/math';

import { useChart } from './chart';

import { signal } from '@/shared/libs/signal';

import BasePoly from '@/components/base/BasePoly.vue';
import RoundEffect from '@/components/effect/RoundEffect.vue';
import CardBox from '@/components/element/card/CardBox.vue';

import type { Chart } from '@/components/element/chart/chart.model';
import type { Vector } from '@/shared/types/vector';

const props = withDefaults(defineProps<Chart.Props>(), {
  options: () => ({
    offset: {
      x: 0,
      y: 0
    },
    radius: 0
  })
});

const wrapperRef$ = ref<HTMLElement>();
const { width, height } = useElementSize(wrapperRef$);
const { axises, datasets } = useChart({
  type: 'radar',
  data: props.datasets,
  axises: props.axises
});

const radius = computedEager(() =>
  Math$.clamp(
    Math$.min(width.value - props.options.offset.x, height.value - props.options.offset.y) / 2,
    0,
    Infinity
  )
);
const center = computedEager<Vector<'x' | 'y'>>(() => ({
  x: width.value / 2,
  y: height.value / 2
}));

const bgPolyPath = computed(() =>
  radius.value > 0 && axises.value?.x?.metrics
    ? `
      ${axises.value.x.metrics
        .map(
          (axis, index) =>
            `${index === 0 ? 'M' : 'L'} ${
              center.value.x + radius.value * Math$.cos(Math$.rad(axis.normalized * 360 - 90))
            } ${center.value.y + radius.value * Math$.sin(Math$.rad(axis.normalized * 360 - 90))}`
        )
        .join(' ')} Z
      `
    : ''
);

const plotPolyPaths = computed(() =>
  bgPolyPath.value && datasets.value
    ? datasets.value.map((dataset) => ({
        ...dataset,
        path: `${dataset.series
          .map(
            (plot, index) =>
              `${index === 0 ? 'M' : 'L'} ${
                center.value.x +
                radius.value *
                  plot.y.normalized *
                  Math$.cos(Math$.rad(plot.x.normalized * 360 - 90))
              } ${
                center.value.y +
                radius.value *
                  plot.y.normalized *
                  Math$.sin(Math$.rad(plot.x.normalized * 360 - 90))
              }`
          )
          .join(' ')} Z`
      }))
    : []
);

const axisPath = computedEager(() =>
  radius.value > 0 && axises.value.x.metrics
    ? `M ${center.value.x} ${center.value.y}
      ${axises.value.x.metrics
        .map(
          (axis) =>
            `L ${
              center.value.x + radius.value * Math$.cos(Math$.rad(axis.normalized * 360 - 90))
            } ${center.value.y + radius.value * Math$.sin(Math$.rad(axis.normalized * 360 - 90))}
            M ${center.value.x} ${center.value.y}`
        )
        .join('\n')}
      Z`
    : ''
);

const bgFill = signal('');

const computeBgFill = () => {
  if (wrapperRef$.value) {
    delay(
      () =>
        bgFill.set(
          globalThis.getComputedStyle(wrapperRef$.value!).getPropertyValue('--chart-bg-fill-svg')
        ),
      30
    );
  }
};

onUpdated(() => {
  computeBgFill();
});
</script>

<template>
  <div ref="wrapperRef$" :class="$style['chart-container']">
    <BasePoly :height="height" :width="width">
      <template #defs>
        <RoundEffect :id="'chart-area-bg-round'" :radius="6" />
        <RoundEffect :id="'chart-area-plot-round'" :radius="3" />
        <!-- eslint-disable-next-line vue/no-v-text-v-html-on-component -->
        <g v-html="bgFill()" />
        <mask id="chart-area-bg-mask">
          <path
            :d="bgPolyPath"
            :class="[
              $style['chart-area'],
              $style['radar'],
              $style['bg'],
              {
                [$style['round']]: props.options.round
              }
            ]"
            fill="#fff"
          />
        </mask>
      </template>
      <template #path>
        <path
          :d="bgPolyPath"
          :class="[
            $style['chart-area'],
            $style['radar'],
            $style['bg'],
            {
              [$style['round']]: props.options.round
            }
          ]"
        />
        <g
          id="chart-group-axises"
          :class="[$style['chart-group-axises']]"
          mask="url(#chart-area-bg-mask)"
        >
          <path :d="axisPath" :class="[$style['chart-axis'], $style['radar'], $style['path']]" />
        </g>
        <template v-if="axises">
          <g :class="[$style['chart-group-axises-label']]">
            <template v-for="metric in axises.x.metrics" :key="metric.value">
              <foreignObject
                :x="
                  center.x +
                  radius * Math$.cos(Math$.rad(metric.normalized * 360 - 90)) -
                  (metric.normalized % 0.5 === 0
                    ? radius / 2
                    : metric.normalized > 0.5
                    ? radius
                    : 0)
                "
                :y="
                  center.y +
                  radius * 1.1 * Math$.sin(Math$.rad(metric.normalized * 360 - 90)) -
                  radius / 6
                "
                :height="radius / 3"
                :width="radius"
                :class="[$style['chart-axis'], $style['radar'], $style['label-wrapper']]"
              >
                <p
                  class="font-bold"
                  :class="[
                    $style['chart-axis'],
                    $style['radar'],
                    $style['label'],
                    metric.normalized % 0.5 === 0
                      ? $style['font-align--center']
                      : metric.normalized < 0.5
                      ? $style['font-align--left']
                      : $style['font-align--right'],
                    metric.normalized % 0.5 === 0
                      ? $style['box-align--center']
                      : metric.normalized < 0.5
                      ? $style['box-align--left']
                      : $style['box-align--right']
                  ]"
                >
                  {{ metric.value }}
                </p>
              </foreignObject>
            </template>
          </g>
        </template>
        <g :class="[$style['chart-group-plots']]">
          <template v-for="plot in plotPolyPaths" :key="plot.label">
            <g :class="[$style['chart-area'], $style['radar'], $style['plot']]">
              <path
                :d="plot.path"
                :class="[
                  {
                    [$style['round']]: props.options.round
                  }
                ]"
              />
            </g>
          </template>
        </g>
        <template v-for="dataset in datasets" :key="dataset.label">
          <g :class="[$style['chart-area-label']]">
            <template v-for="(plot, index) in dataset.series" :key="`plot-${index}`">
              <g :class="$style['chart-area']">
                <circle
                  :class="[
                    $style['behavior'],
                    $style['chart-area'],
                    $style['point'],
                    $style['plot'],
                    $style['clickable']
                  ]"
                  :cx="
                    center.x +
                    radius * plot.y.normalized * Math$.cos(Math$.rad(plot.x.normalized * 360 - 90))
                  "
                  :cy="
                    center.y +
                    radius * plot.y.normalized * Math$.sin(Math$.rad(plot.x.normalized * 360 - 90))
                  "
                  r="10"
                />
                <circle
                  :class="[$style['chart-area'], $style['radar'], $style['point'], $style['plot']]"
                  :cx="
                    center.x +
                    radius * plot.y.normalized * Math$.cos(Math$.rad(plot.x.normalized * 360 - 90))
                  "
                  :cy="
                    center.y +
                    radius * plot.y.normalized * Math$.sin(Math$.rad(plot.x.normalized * 360 - 90))
                  "
                  r="5"
                />
                <foreignObject
                  :x="
                    center.x +
                    radius * plot.y.normalized * Math$.cos(Math$.rad(plot.x.normalized * 360 - 90)) - 130
                  "
                  :y="
                    center.y +
                    radius * plot.y.normalized * Math$.sin(Math$.rad(plot.x.normalized * 360 - 90))
                  "
                  height="200"
                  width="260"
                  :class="[$style['chart-area'], $style['legend-container']]"
                >
                  <CardBox
                    :class="[$style['chart-area'], $style['legend-wrapper']]"
                    :radius="'var(--agh-ref-border-radius-500)'"
                  >
                    <template v-if="props.options.title">
                      <h1 :class="[$style['chart-area'], $style['legend-title'], $style['radar']]">
                        <span>{{ plot.x.value }}</span>
                        <span :class="$style['legend-value']">{{ plot.y.value }}</span>
                      </h1>
                      <hr />
                    </template>
                    <template v-for="(axis, axisKey) in axises" :key="axisKey">
                      <template v-if="!/(x|y)/.test(axisKey) && axis && plot[axisKey]">
                        <div :class="[$style['chart-area'], $style['legend-group'], $style['radar']]">
                          <p :class="[$style['chart-area'], $style['legend-value']]">
                            {{ plot[axisKey]!.value }}
                          </p>
                          <label :class="[$style['chart-area'], $style['legend-label']]">{{
                            axis.label
                          }}</label>
                        </div>
                      </template>
                    </template>
                  </CardBox>
                </foreignObject>
              </g>
            </template>
          </g>
        </template>
      </template>
    </BasePoly>
  </div>
</template>

<style module scoped lang="scss">
@use '@/assets/styles/modules/behavior.module' as behavior;
@use '@/assets/styles/modules/chart.module' as chart;

.chart {
  &-container {
    --chart-bg-fill-svg: var(--agh-ref-color-cyan-gradient-500-svg);
    --chart-bg-fill: url("#agh-ref-color-cyan-gradient-500");
    --chart-axis-label-fill: var(--agh-ref-color-grayscale-500);
    --chart-axis-stroke-fill: var(--agh-ref-color-grayscale-100);
    --chart-axis-stroke-width: var(--agh-ref-border-width-50);
    --chart-area-plot-fill: var(--agh-ref-color-grayscale-100);
    --chart-area-plot-stroke-fill: var(--agh-ref-color-cyan-600);
    --chart-area-plot-stroke-width: var(--agh-ref-border-width-100);
    --chart-area-plot-stroke-fill-effect: var(--agh-ref-effects-solid-cyan-filter);
  }
}
</style>
