<script setup lang="ts">
import { ref, toRefs } from 'vue';
import { computedEager, useElementSize } from '@vueuse/core';

import { useChart } from './chart';

import { parser } from '@/shared/libs/parser';

import BasePoly from '@/components/base/BasePoly.vue';
import CardBox from '@/components/element/card/CardBox.vue';

import type { Chart } from '@/components/element/chart/chart.model';

const props = withDefaults(defineProps<Chart.Props>(), {
  options: () => ({
    offset: {
      x: 0,
      y: 0
    },
    curve: 'straight',
    radius: 0
  })
});

const wrapperRef$ = ref<HTMLElement>();
const { width, height } = useElementSize(wrapperRef$);
const { axises, datasets } = useChart({
  type: 'line',
  data: toRefs(props).datasets,
  axises: toRefs(props).axises
});

const axisPath = computedEager(() =>
  axises.value?.x?.metrics &&
  axises.value?.y?.metrics &&
  height.value &&
  height.value - props.options.offset.y > 0 &&
  width.value &&
  width.value - props.options.offset.x > 0
    ? `
  M ${props.options.offset.x} 0
  L ${props.options.offset.x} ${height.value - props.options.offset.y}
  L ${width.value} ${height.value - props.options.offset.y}
  ${
    props.options.grid?.includes('x')
      ? `${axises.value.x.metrics
          .map(
            (metric) => `
              M ${
                metric.normalized * (width.value - props.options.offset.x) + props.options.offset.x
              } 0
              V ${height.value - props.options.offset.y}
            `
          )
          .join('')}`
      : ''
  }
  ${
    props.options.grid?.includes('y')
      ? `${axises.value.y.metrics
          .map(
            (metric) => `
              M ${props.options.offset.x} ${
              (1 - metric.normalized) * (height.value - props.options.offset.y)
            }
              H ${width.value}
            `
          )
          .join('\n')}`
      : ''
  }
`
    : ''
);

const plotPolyPaths = computedEager(() =>
  axisPath.value && datasets
    ? datasets.value.map((dataset) => ({
        ...dataset,
        path: `
            ${dataset.series
              .map((plot, index) =>
                index === 0
                  ? `M ${
                      plot.x.normalized * (width.value - props.options.offset.x) +
                      props.options.offset.x
                    } ${(1 - plot.y.normalized) * (height.value - props.options.offset.y)}`
                  : props.options.curve === 'smooth'
                  ? index === 1
                    ? `C ${
                        dataset.series[index - 1].x.normalized *
                          (width.value - props.options.offset.x) +
                        props.options.offset.x +
                        (width.value / dataset.series.length) * props.options.radius!
                      } ${
                        (1 - dataset.series[index - 1].y.normalized) *
                        (height.value - props.options.offset.y)
                      } ${
                        plot.x.normalized * (width.value - props.options.offset.x) +
                        props.options.offset.x -
                        (width.value / dataset.series.length) * props.options.radius!
                      } ${(1 - plot.y.normalized) * (height.value - props.options.offset.y)} ${
                        plot.x.normalized * (width.value - props.options.offset.x) +
                        props.options.offset.x
                      } ${(1 - plot.y.normalized) * (height.value - props.options.offset.y)}`
                    : `S ${
                        plot.x.normalized * (width.value - props.options.offset.x) +
                        props.options.offset.x -
                        (width.value / dataset.series.length) * props.options.radius!
                      } ${(1 - plot.y.normalized) * (height.value - props.options.offset.y)} ${
                        plot.x.normalized * (width.value - props.options.offset.x) +
                        props.options.offset.x
                      } ${(1 - plot.y.normalized) * (height.value - props.options.offset.y)}`
                  : `L ${
                      plot.x.normalized * (width.value - props.options.offset.x) +
                      props.options.offset.x
                    } ${(1 - plot.y.normalized) * (height.value - props.options.offset.y)}`
              )
              .join('\n')}`
      }))
    : []
);
</script>

<template>
  <div ref="wrapperRef$" :class="$style['chart-container']">
    <BasePoly :height="height" :width="width">
      <template #defs> </template>
      <template #path>
        <g id="chart-group-axises" :class="[$style['chart-group-axises']]">
          <path :d="axisPath" :class="[$style['chart-axis'], $style['line'], $style['path']]" />
        </g>
        <template v-if="axises && width && height">
          <g :class="[$style['chart-group-axises-label']]">
            <template v-if="axises.x && axises.x.metrics">
              <template v-for="(metric, index) in axises.x.metrics" :key="`axis-x--${index}`">
                <text
                  :x="metric.normalized * (width - props.options.offset.x) + props.options.offset.x"
                  :y="height - props.options.offset.y + 20"
                  :class="[$style['chart-axis'], $style['label']]"
                  :text-anchor="
                    index === 0 ? 'start' : index === axises.x.metrics.length - 1 ? 'end' : 'middle'
                  "
                >
                  {{ metric.value }}
                </text>
              </template>
            </template>
            <template v-if="axises.y && axises.y.metrics">
              <template v-for="(metric, index) in axises.y.metrics" :key="`axis-y--${index}`">
                <text
                  :x="props.options.offset.x - 10"
                  :y="(1 - metric.normalized) * (height - props.options.offset.y) + 5"
                  :class="[$style['chart-axis'], $style['label']]"
                  text-anchor="end"
                >
                  {{ metric.value }}
                </text>
              </template>
            </template>
          </g>
        </template>
        <g :class="[$style['chart-group-plots']]">
          <template v-for="plot in plotPolyPaths" :key="plot.label">
            <g :class="[$style['chart-area'], $style['line'], $style['plot']]">
              <path :d="plot.path" />
            </g>
          </template>
          <template v-for="dataset in datasets">
            <template
              v-for="(plot, index) in dataset.series"
              :key="`chart-plot-${dataset.label}-plot-${index}`"
            >
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
                    plot.x.normalized * (width - props.options.offset.x) + props.options.offset.x
                  "
                  :cy="(1 - plot.y.normalized) * (height - props.options.offset.y)"
                  r="50"
                />
                <circle
                  :class="[$style['chart-area'], $style['point'], $style['plot']]"
                  :cx="
                    plot.x.normalized * (width - props.options.offset.x) + props.options.offset.x
                  "
                  :cy="(1 - plot.y.normalized) * (height - props.options.offset.y)"
                  r="5"
                />
                <foreignObject
                  :x="
                    plot.x.normalized * (width - props.options.offset.x) +
                    props.options.offset.x -
                    140
                  "
                  :y="
                    (1 - plot.y.normalized) * (height - props.options.offset.y) -
                    (plot.y.normalized >= 0.5 ? 0 : 220)
                  "
                  height="220"
                  width="280"
                  :class="[$style['chart-area'], $style['legend-container']]"
                >
                  <CardBox
                    :class="[$style['chart-area'], $style['legend-wrapper']]"
                    :radius="'var(--agh-ref-border-radius-500)'"
                  >
                    <template v-if="props.options.title">
                      <h1 :class="[$style['chart-area'], $style['legend-title']]">
                        {{ parser(plot.data, props.options.title) }}
                      </h1>
                      <hr />
                    </template>
                    <template v-for="(axis, axisKey) in axises" :key="axisKey">
                      <template v-if="axis && plot[axisKey]">
                        <div :class="[$style['chart-area'], $style['legend-group']]">
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
    --chart-axis-stroke-fill: var(--agh-ref-color-grayscale-300);
    --chart-axis-stroke-width: var(--agh-ref-border-width-50);
    --chart-area-plot-stroke-fill: var(--agh-ref-color-cyan-500);
    --chart-area-plot-stroke-width: var(--agh-ref-border-width-100);
    --chart-area-plot-stroke-fill-effect: var(--agh-ref-effects-solid-cyan-filter);
  }
}
</style>
