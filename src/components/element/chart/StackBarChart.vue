<script setup lang="ts">
import { computed } from 'vue';
import { Icon } from '@iconify/vue/offline';

import { useChart } from './chart';

import CardBox from '@/components/element/card/CardBox.vue';

import type { Chart } from '@/components/element/chart/chart.model';

const props = withDefaults(defineProps<Chart.Props>(), {
  options: () => ({
    offset: {
      x: 0,
      y: 0
    }
  })
});

const $datasets = computed(() => props.datasets);
const $axises = computed(() => props.axises);
const gap = computed(() =>
  props.options.gap ? `${props.options.gap}px` : 'var(--agh-ref-spacing-25)'
);
const { datasets } = useChart({
  type: 'doughnut',
  data: $datasets,
  axises: $axises
});

const data = computed(() =>
  [...(datasets.value[0]?.series ?? [])].sort((a, b) => b.y.normalized - a.y.normalized)
);
</script>

<template>
  <div :class="[$style['chart-container'], $style.wrapper, $style.flex, $style.vertical]">
    <div :class="[$style['chart-instance'], $style.wrapper, $style.flex, $style.horizontal]">
      <template v-for="(plot, index) in data" :key="`plot-${index}`">
        <div
          :class="[$style['chart-plot'], $style.behavior, $style.clickable]"
          :style="{
            '--plot-value': plot.y.normalized,
            '--anchor-name': `--plot-anchor-${index}`
          }"
        >
          <CardBox
            :class="[$style['chart-plot-tooltip'], $style.wrapper, $style.flex, $style.vertical]"
            purpose="box"
            radius="var(--agh-ref-border-radius-400)"
          >
            <h1 :class="[$style.wrapper, $style.flex, $style.horizontal]">
              <span>{{ plot.x.value }}</span>
              <span>{{ String(plot.y.value).padStart(3, '0') }}</span>
            </h1>
            <hr>
            <ul :class="[$style.wrapper, $style.flex, $style.vertical]">
              <template v-for="(axis, axisKey) in axises" :key="axisKey">
                <template v-if="axis && plot[axisKey] && !['x', 'y'].includes(axisKey)">
                  <li :class="[$style.wrapper, $style.flex, $style.horizontal]">
                    <p :class="[$style['chart-area'], $style['legend-value']]">
                      {{
                        String(plot[axisKey]!.value)
                          .split('/')
                          .map((num) => num.padStart(2, '0'))
                          .join('/')
                      }}
                    </p>
                    <label :class="[$style['chart-area'], $style['legend-label']]">{{
                      axis.label
                    }}</label>
                  </li>
                </template>
              </template>
            </ul>
          </CardBox>
        </div>
      </template>
    </div>
    <div
      :class="[
        $style['chart-legend-wrapper'],
        $style.wrapper,
        $style.flex,
        $style.horizontal,
        $style.wrap
      ]"
    >
      <template v-for="(plot, index) in datasets[0]?.series" :key="`plot-${index}`">
        <label :class="[$style['chart-legend'], $style.wrapper, $style.flex, $style.horizontal]">
          <Icon :class="$style.icon" icon="fa6-solid:square" />
          <span>{{ plot.x.value }}</span>
          <span>{{ String(plot.y.value).padStart(3, '0') }}</span>
        </label>
      </template>
    </div>
  </div>
</template>

<style module scoped lang="scss">
@use 'sass:list';
@use '@/assets/styles/modules/behavior.module' as behavior;
@use '@/assets/styles/modules/wrapper.module' as wrapper;

hr {
  flex-shrink: 0;
  width: 100%;
  height: var(--agh-ref-border-width-50);
  margin: 0;
  border: 0;
  background-color: var(--agh-ref-color-grayscale-300);

  &.vertical {
    height: 100%;
    width: var(--agh-ref-border-width-50);
    margin: 0;
    background: none;
    background-color: var(--agh-ref-color-grayscale-300);
  }
}

.chart {
  &-container {
    --wrapper-gap: var(--agh-ref-spacing-200);
  }

  &-instance {
    --wrapper-gap: v-bind('gap');

    width: 100%;
    height: var(--agh-ref-spacing-300);

    &:empty {
      border-radius: var(--agh-ref-border-radius-200);
      background: repeating-linear-gradient(
          90deg,
          var(--agh-ref-color-grayscale-400) 0%,
          var(--agh-ref-color-grayscale-400) 14.0357%,
          transparent 14.5357%
        )
        repeat;
      opacity: var(--agh-ref-opacity-400);
    }
  }

  &-plot,
  &-legend {
    $color-list: cyan, green, blue, purple, orange;

    @for $i from 0 through 4 {
      @for $color-index from 1 through list.length($color-list) {
        $color: list.nth($color-list, $color-index);

        &:nth-child(#{$i * 5 + $color-index}) {
          --plot-accent: var(--agh-ref-color-#{$color}-#{5 - $i}00);
        }
      }
    }
  }

  &-plot {
    flex: var(--plot-value);
    height: 100%;
    background-color: var(--plot-accent);
    anchor-name: var(--anchor-name);

    &:first-of-type {
      border-radius: var(--agh-ref-border-radius-200) 0 0 var(--agh-ref-border-radius-200);
    }

    &:last-of-type {
      border-radius: 0 var(--agh-ref-border-radius-200) var(--agh-ref-border-radius-200) 0;
    }

    &:not(:hover) {
      > .chart-plot-tooltip {
        display: none;
      }
    }

    &-tooltip {
      // TODO: Use token from design system after it's available
      --tooltip-width: var(--chart-tooltip-width, 150px);
      --wrapper-gap: var(--agh-ref-spacing-100);

      width: var(--tooltip-width) !important;
      position: fixed !important;
      position-anchor: var(--anchor-name);
      z-index: 1;
      left: anchor(left);
      top: calc(anchor(bottom) + var(--agh-ref-spacing-200));
      position-try-options: flip-block, flip-inline;
      position-try: flip-block, flip-inline;
      padding: var(--agh-ref-spacing-200) var(--agh-ref-spacing-300);

      > h1 {
        --wrapper-gap: var(--agh-ref-spacing-300);

        place-content: space-between;
        place-items: center;

        span {
          &:first-of-type {
            font: var(--agh-sys-typeface-label-hl-small);
            font-weight: var(--agh-ref-typeface-weight-600);
            color: var(--agh-ref-color-grayscale-800);
          }

          &:last-of-type {
            font: var(--agh-sys-typeface-number-hl-small);
            color: var(--agh-ref-color-grayscale-1000);
          }
        }
      }

      ul {
        --wrapper-gap: var(--agh-ref-spacing-100);

        li {
          --wrapper-gap: var(--agh-ref-spacing-50);

          label,
          p {
            color: var(--agh-ref-color-grayscale-700);
            font: var(--agh-sys-typeface-label-default-small);
          }
        }
      }
    }
  }

  &-legend {
    &-wrapper {
      --wrapper-gap: var(--agh-ref-spacing-200) var(--agh-ref-spacing-300);

      overflow: hidden;

      &:empty {
        display: none !important;
      }
    }

    --wrapper-gap: var(--agh-ref-spacing-75);

    place-items: center;

    &::after {
      content: '';
      position: absolute;
      left: calc((var(--agh-ref-spacing-300) + var(--agh-ref-border-width-50)) / 2 * -1);
      width: var(--agh-ref-border-width-50);
      height: 100%;
      background-color: var(--agh-ref-color-grayscale-300);
    }

    > .icon {
      color: var(--plot-accent);
      font-size: var(--agh-ref-spacing-100);
      flex: 0 0 var(--agh-ref-spacing-75);
    }

    > span {
      &:first-of-type {
        color: var(--agh-ref-color-grayscale-800);
        font: var(--agh-sys-typeface-label-default-small);
      }

      &:last-of-type {
        color: var(--agh-ref-color-grayscale-1000);
        font: var(--agh-sys-typeface-label-hl-tiny);
      }
    }
  }
}
</style>
