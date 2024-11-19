<script setup lang="ts">
import { computed, ref } from 'vue';
import { useElementSize } from '@vueuse/core';

import { useChart } from './chart';

import BasePoly from '@/components/base/BasePoly.vue';
import CardBox from '@/components/element/card/CardBox.vue';
import Math$ from '@/shared/libs/math';

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
  type: 'doughnut',
  data: props.datasets,
  axises: props.axises
});

const radius = computed(() =>
  Math$.clamp(
    Math$.min(width.value - props.options.offset.x, height.value - props.options.offset.y) / 2,
    0,
    Infinity
  )
);
const gap = computed(() => props.options.gap ?? (props.options.round ? 30 : 15));
const radiant = computed(() => radius.value * 2 * Math$.PI);
const center = computed<Vector<'x' | 'y'>>(() => ({
  x: width.value / 2,
  y: height.value / 2
}));
const totals = computed(() =>
  datasets.value.map((dataset) => dataset.series.reduce((acc, cur) => acc + cur.y.normalized, 0))
);
const normalizedDatasets = computed(() =>
  datasets.value.map((dataset, index) => ({
    ...dataset,
    series: dataset.series
      .map((plot) => ({
        ...plot,
        y: {
          ...plot.y,
          normalized: Math$.clamp(
            plot.y.normalized / totals.value[index] - gap.value / radiant.value,
            0,
            1
          )
        }
      }))
      .filter((plot) => plot.y.normalized > gap.value / radiant.value / 2)
      .map((plot, _, plots) => ({
        ...plot,
        y: {
          ...plot.y,
          normalized: plot.y.normalized / plots.reduce((acc, cur) => acc + cur.y.normalized, 0)
        }
      }))
      .map((plot, _, plots) => ({
        ...plot,
        y: {
          ...plot.y,
          normalized: Math$.clamp(
            plot.y.normalized / plots.reduce((acc, cur) => acc + cur.y.normalized, 0) -
              gap.value / radiant.value,
            0,
            1
          )
        }
      }))
      .map((plot, index, plots) => ({
        ...plot,
        y: {
          ...plot.y,
          offset: plots.slice(0, index).reduce((acc, cur) => acc + cur.y.normalized, 0)
        }
      }))
      .map((plot, index) => ({
        ...plot,
        x: {
          ...plot.x,
          label: Math$.cos(
            Math$.rad(
              (plot.y.offset + plot.y.normalized / 2 + (gap.value / radiant.value) * index) * 360 -
                90
            )
          )
        },
        y: {
          ...plot.y,
          label: Math$.sin(
            Math$.rad(
              (plot.y.offset + plot.y.normalized / 2 + (gap.value / radiant.value) * index) * 360 -
                90
            )
          )
        }
      }))
  }))
);
</script>

<template>
  <div ref="wrapperRef$" :class="$style['chart-container']">
    <BasePoly :height="height" :width="width">
      <template #path>
        <g :class="[$style['chart-group-plots']]">
          <template v-for="dataset in normalizedDatasets" :key="dataset.label">
            <template v-for="(plot, plotIndex) in dataset.series" :key="`plot-${plotIndex}`">
              <g :class="$style['chart-area']">
                <circle
                  :class="[
                    $style['behavior'],
                    $style['chart-area'],
                    $style['doughnut'],
                    $style['plot'],
                    $style['clickable'],
                    {
                      [$style['round']]: props.options.round
                    }
                  ]"
                  :cx="center.x"
                  :cy="center.y"
                  :r="radius"
                  :stroke-dasharray="`${plot.y.normalized * radiant} ${
                    (1 - plot.y.normalized) * radiant
                  }`"
                  :stroke-dashoffset="
                    plot.y.offset * radiant * -1 - gap * plotIndex + 0.25 * radiant
                  "
                  pointer-events="visibleStroke"
                />
                <foreignObject
                  :class="[$style['chart-area'], $style['legend-container']]"
                  :x="center.x + radius * plot.x.label - 260 * Number(plot.x.label < 0)"
                  :y="center.y + radius * plot.y.label - 240 * Number(plot.y.label < 0)"
                  height="240"
                  width="260"
                >
                  <CardBox
                    :class="[$style['chart-area'], $style['legend-wrapper']]"
                    :radius="'var(--agh-ref-border-radius-500)'"
                  >
                    <template v-if="props.options.title">
                      <h1
                        :class="[$style['chart-area'], $style['legend-title'], $style['doughnut']]"
                      >
                        <span>{{ plot.x.value }}</span>
                      </h1>
                      <hr>
                    </template>
                    <template v-for="(axis, axisKey) in axises" :key="axisKey">
                      <template v-if="!/(x)/.test(axisKey) && axis && plot[axisKey]">
                        <div
                          :class="[
                            $style['chart-area'],
                            $style['legend-group'],
                            $style['doughnut']
                          ]"
                        >
                          <label :class="[$style['chart-area'], $style['legend-label']]">{{
                            axis.label
                          }}</label>
                          <p :class="[$style['chart-area'], $style['legend-value']]">
                            {{ plot[axisKey]!.value }}
                          </p>
                        </div>
                      </template>
                    </template>
                  </CardBox>
                </foreignObject>
              </g>
            </template>
          </template>
        </g>
        <clipPath id="chart-content-clip">
          <circle :cx="center.x" :cy="center.y" :r="radius - 10" />
        </clipPath>
        <g clip-path="url(#chart-content-clip)">
          <foreignObject
            :class="$style['chart-content-wrapper']"
            :height="radius * 2"
            :width="radius * 2"
            :x="center.x - radius"
            :y="center.y - radius"
          >
            <!-- @slot Use this default doughnut chart slot -->
            <slot />
          </foreignObject>
        </g>
      </template>
    </BasePoly>
  </div>
</template>

<style module scoped lang="scss">
@use '@/assets/styles/modules/behavior.module' as behavior;
@use '@/assets/styles/modules/chart.module' as chart;

.chart {
  &-container {
    --chart-axis-label-fill: var(--agh-ref-color-grayscale-500);
    --chart-axis-stroke-fill: var(--agh-ref-color-grayscale-100);
    --chart-axis-stroke-width: var(--agh-ref-border-width-50);
    --chart-area-plot-fill: var(--agh-ref-color-grayscale-300);
    --chart-area-plot-fill-1: var(--agh-ref-color-cyan-800);
    --chart-area-plot-fill-2: var(--agh-ref-color-cyan-700);
    --chart-area-plot-fill-3: var(--agh-ref-color-cyan-600);
    --chart-area-plot-fill-4: var(--agh-ref-color-cyan-500);
    --chart-area-plot-stroke-fill: var(--agh-ref-color-cyan-600);
    --chart-area-plot-stroke-width: calc(var(--agh-ref-border-width-500) * 2);
    --chart-area-plot-stroke-fill-effect: var(--agh-ref-effects-solid-cyan-filter);
  }
}
</style>
