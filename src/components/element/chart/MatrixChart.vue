<script setup lang="ts">
import { delay } from 'lodash-es';
import { computed, onMounted, ref } from 'vue';
import { useCssVar, useResizeObserver } from '@vueuse/core';

import { useChart } from './chart';

import Math$ from '@/shared/libs/math';
import { signal } from '@/shared/libs/signal';

import type { Chart } from '@/components/element/chart/chart.model';

const props = defineProps<Chart.Props>();

const $datasets = computed(() => props.datasets);
const $axises = computed(() => props.axises);
const { axises, datasets } = useChart({
  type: 'matrix',
  data: $datasets,
  axises: $axises
});

const TotalCells = computed(() => axises.value.y.step as number);

const formatDatasets = computed(() =>
  datasets.value[0]?.series.map((item) => {
    return {
      ...item,
      y: {
        ...item.y,
        normalized: Math$.round(item.y.normalized * TotalCells.value)
      }
    };
  })
);

const containerRef$ = ref<HTMLElement>();

const columnNum = ref<number>();

const borderWidth = signal('');

const handleResize = () => {
  if (containerRef$.value && containerRef$.value.firstElementChild) {
    const { firstElementChild, clientWidth } = containerRef$.value;
    const totalWidth = clientWidth;
    const itemWidth = firstElementChild?.clientWidth;

    columnNum.value = Math$.floor(totalWidth / itemWidth);
  }
};

const computeBorderWidth = () => {
  if (containerRef$.value) {
    borderWidth.set(
      useCssVar('--matrix-border-width', containerRef$, {
        observe: true
      }).value
    );

    if (!borderWidth()) {
      delay(computeBorderWidth, 1);
    }
  }
};

useResizeObserver(containerRef$, handleResize, { window });

onMounted(() => {
  computeBorderWidth();
  handleResize();
});
</script>

<template>
  <div ref="containerRef$" :class="$style['chart-container']">
    <div
      v-for="(item, index) in formatDatasets"
      :key="index"
      :class="[
        $style['matrix-container'],
        columnNum && index % columnNum !== 0 && $style['matrix-container-border']
      ]"
    >
      <label :class="$style['label']">
        {{ item.x.value }}
      </label>
      <div :class="$style['box-container']">
        <div
          v-for="i in TotalCells"
          :key="i"
          :class="[
            $style['square'],
            i <= item.y.normalized ? $style['square-cyan'] : $style['square-grayscale']
          ]"
        />
      </div>
    </div>
  </div>
</template>

<style module scoped lang="scss">
@use '@/assets/styles/modules/behavior.module' as behavior;
@use '@/assets/styles/modules/chart.module' as chart;

.chart {
  &-container {
    --matrix-border-width: var(--agh-ref-border-width-50);

    display: flex;
    flex-wrap: wrap;
    width: fit-content;
    height: fit-content;

    .matrix {
      &-container {
        display: flex;
        place-items: center;
        gap: var(--agh-ref-spacing-300);
        margin-bottom: var(--agh-ref-spacing-400);
        padding-right: var(--agh-ref-spacing-500);
        padding-left: var(--agh-ref-spacing-200);

        &-border {
          margin-left: calc(var(--matrix-border-width) * -1);
          border-left: var(--matrix-border-width) solid var(--agh-ref-color-grayscale-500);
        }

        .label {
          font: var(--agh-sys-typeface-label-default-medium);
          color: var(--agh-ref-color-grayscale-700);
          width: var(--agh-sys-label-sizing-width-medium);
          overflow-wrap: break-word;
        }

        .box {
          &-container {
            display: flex;
            gap: var(--agh-ref-spacing-200);

            .square {
              border-radius: var(--agh-ref-border-radius-100);
              width: var(--agh-sys-gadget-matrix-square-width-medium);
              height: var(--agh-sys-gadget-matrix-square-height-medium);

              &-cyan {
                background-color: var(--agh-ref-color-cyan-500);
              }

              &-grayscale {
                background-color: var(--agh-ref-color-grayscale-300);
              }
            }
          }
        }
      }
    }
  }
}
</style>
