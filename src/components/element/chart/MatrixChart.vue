<script setup lang="ts">
import { onMounted, ref, toRefs } from 'vue';
import { useCssVar } from '@vueuse/core';
import { delay } from 'lodash-es';

import Math$ from '@/shared/libs/math';
import { signal } from '@/shared/libs/signal';

import type { Chart } from '@/components/element/chart/chart.model';
import { useChart } from './chart';

const props = withDefaults(defineProps<Chart.Props>(), {
  options: () => ({
    offset: {
      x: 0,
      y: 0
    },
    radius: 0
  })
});

const TotalCells = 5;

const { axises, datasets } = useChart({
  type: 'matrix',
  data: toRefs(props).datasets,
  axises: toRefs(props).axises
});

const filledCells = (percentage: number) => Math$.round((percentage / 100) * TotalCells);

const containerRef$ = ref<HTMLElement>();

const columnNum = ref<number>();

const columnSpacing = signal('');

const handleResize = () => {
  if (containerRef$.value && containerRef$.value.firstElementChild) {
    const totalWidth = containerRef$.value?.clientWidth + parseInt(columnSpacing());
    const itemWidth =
      containerRef$.value.firstElementChild?.clientWidth + parseInt(columnSpacing());
    columnNum.value = Math$.floor(totalWidth / itemWidth);
  }
  if (!columnNum.value) {
    delay(handleResize, 1);
  }
};

const computeColumnSpacing = () => {
  if (containerRef$.value) {
    columnSpacing.set(
      useCssVar('--chart-container-gap-spacing', containerRef$, {
        observe: true
      }).value
    );

    if (!columnSpacing()) {
      delay(computeColumnSpacing, 1);
    }
  }
};

onMounted(() => {
  computeColumnSpacing();
  handleResize();
  window.addEventListener('resize', handleResize);
});
</script>

<template>
  <div ref="containerRef$" :class="$style['chart-container']">
    <div
      :class="[
        $style['matrix-container'],
        columnNum && (index + 1) % columnNum !== 0 && $style['matrix-container-border']
      ]"
      v-for="(item, index) in datasets[0].series"
      :key="index"
    >
      <div :class="$style['label']">
        {{ item.data.name }}
      </div>
      <div :class="$style['box-container']">
        <div
          :class="[
            $style['square'],
            i <= filledCells(item.data.percentage as number)
              ? $style['square-cyan']
              : $style['square-grayscale']
          ]"
          v-for="i in TotalCells"
          :key="i"
        ></div>
      </div>
    </div>
  </div>
</template>

<style module scoped lang="scss">
@use '@/assets/styles/modules/behavior.module' as behavior;
@use '@/assets/styles/modules/chart.module' as chart;

.chart {
  &-container {
    --chart-container-gap-spacing: var(--agh-ref-spacing-200);
    --matrix-container-gap-spacing: var(--agh-ref-spacing-200);

    display: flex;
    flex-wrap: wrap;
    width: fit-content;
    height: fit-content;
    gap: var(--chart-container-gap-spacing);

    .matrix {
      &-container {
        display: flex;
        place-items: center;
        gap: var(--agh-ref-spacing-300);
        margin-bottom: var(--agh-ref-spacing-400);
        padding-right: var(--agh-ref-spacing-500);

        &-border {
          border-right: 1px solid var(--agh-ref-color-grayscale-500);
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
