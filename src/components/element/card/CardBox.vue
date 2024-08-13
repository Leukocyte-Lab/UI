<script setup lang="ts">
import { computed } from 'vue';

import BaseLink from '@/components/base/BaseLink.vue';
import { useEventDebounceSignal } from '@/shared/libs/event';

import type { CardBox } from '@/components/element/card/CardBox.model';

const props = withDefaults(defineProps<CardBox.Props>(), {
  variant: 'metallic',
  color: 'default',
  hasStroke: true,
  clickable: false,
  strokeWeight: 'normal',
  purpose: 'box',
  active: false
});

const radius = computed(
  () => props.radius ?? `var(--agh-ref-border-radius-${props.purpose === 'box' ? 300 : 500})`
);

const { triggered, onTrigger } = useEventDebounceSignal<MouseEvent>((event) => {
  if (!props.clickable) {
    event.stopPropagation();
  }
});
</script>

<template>
  <BaseLink
    ref="wrapperRef$"
    @click.passive="onTrigger"
    :class="[
      $style['card-container'],
      $style['behavior'],
      $style[props.variant],
      $style[`color-${props.color}`],
      $style[`stroke-${props.strokeWeight}`],
      $style[`purpose-${props.purpose}`],
      {
        [$style['clickable']]: props.link || props.clickable,
        [$style['has-stroke']]: props.hasStroke,
        [$style['clicked']]: (triggered() && props.clickable) || props.active
      }
    ]"
    :link="props.link"
  >
    <!-- @slot Use this default card slot -->
    <slot />
  </BaseLink>
</template>

<style module scoped lang="scss">
@use 'sass:map';
@use '@/assets/styles/modules/behavior.module' as behavior;
@use '@/assets/styles/modules/metallic.module' as metallic;

.card {
  $self: &;

  &-container {
    --box-border-radius: v-bind('radius');

    position: relative;
    width: fit-content;
    height: fit-content;
    vertical-align: middle;
    outline: none;
    text-decoration: none;

    $colors: 'default', 'cyan', 'blue', 'green', 'orange', 'red';

    @each $color in $colors {
      &.color-#{$color} {
        $fill: var(--agh-ref-color-grayscale-120);
        $fill-hover: var(--agh-ref-color-grayscale-100);
        $fill-clicked: var(--agh-ref-color-grayscale-100);
        $fill-gradient: var(--agh-ref-color-white-gradient-500);
        $fill-gradient-hover: var(--agh-ref-color-white-gradient-700);
        $fill-gradient-clicked: var(--agh-ref-color-white-gradient-500);
        $border-gradient: var(--agh-ref-color-border-white-500);
        $border-gradient-clicked: var(--agh-ref-color-border-white-500);

        @if $color != 'default' {
          $fill-clicked: var(--agh-ref-color-#{$color}-500);
          $fill-hover: var(--agh-ref-color-#{$color}-400);
          $fill-gradient: var(--agh-ref-color-#{$color}-gradient-600);
          $fill-gradient-hover: var(--agh-ref-color-#{$color}-gradient-500);
          $fill-gradient-clicked: var(--agh-ref-color-#{$color}-gradient-700);
          $border-gradient-clicked: var(--agh-ref-color-border-#{$color}-500);

          --box-text-color: var(--agh-ref-color-grayscale-100);
        }

        &.metallic,
        &.flat {
          --box-border-gradient: #{$border-gradient};

          &.clicked:not(.color-default) {
            --box-border-gradient: #{$border-gradient-clicked};
          }

          &:not(.has-stroke) {
            @include metallic.box;
          }

          &.has-stroke {
            @include metallic.box($has-stroke: true);
          }
        }

        &.metallic {
          --box-fill-gradient: #{$fill-gradient};
          --box-fill-gradient-hover: #{$fill-gradient-hover};
          --box-fill-gradient-clicked: #{$fill-gradient-clicked};
          --box-border-gradient: #{$border-gradient-clicked};
        }

        &.flat {
          --box-fill-gradient: linear-gradient(#{$fill}, #{$fill});
          --box-fill-gradient-hover: linear-gradient(#{$fill-hover}, #{$fill-hover});
          --box-fill-gradient-clicked: linear-gradient(#{$fill-clicked}, #{$fill-clicked});
          --box-text-color: var(--agh-ref-color-grayscale-1000);
          --box-box-shadow-clicked: var(--box-box-shadow);

          &:not(.clickable),
          &:hover {
            --box-border-gradient: #{$border-gradient-clicked};
          }

          &:not(.color-default) {
            --box-text-color-hover: var(--agh-ref-color-grayscale-100);

            &:not(.clickable) {
              --box-text-color: var(--agh-ref-color-grayscale-100);
            }
          }

          &:not(.clickable) {
            --box-fill-gradient: linear-gradient(#{$fill-clicked}, #{$fill-clicked});
          }

          &.clicked:not(.color-default) {
            --box-text-color: var(--agh-ref-color-grayscale-100);
          }
        }

        &.dash {
          border: var(--box-border-width) dashed #{$fill-clicked};
          border-radius: var(--box-border-radius);
        }
      }
    }

    &.color-default {
      &.dash {
        border: var(--box-border-width) dashed var(--agh-ref-color-grayscale-500);
      }
    }

    &.purpose {
      &-box {
        --box-box-shadow: var(--agh-sys-effects-shadow-card);
      }

      &-container {
        --box-box-shadow: var(--agh-sys-effects-shadow-container);
      }
    }

    $stroke-sets: (
        'class': 'bold',
        'weight': 200
      ),
      (
        'class': 'normal',
        'weight': 100
      ),
      (
        'class': 'thin',
        'weight': 50
      );

    @each $strokeSet in $stroke-sets {
      &.stroke-#{map.get($strokeSet, 'class')} {
        &.purpose {
          /* stylelint-disable custom-property-pattern */
          &-box {
            --box-border-width: var(--agh-ref-border-width-#{map.get($strokeSet, 'weight')});
          }

          &-container {
            --box-border-width: var(--agh-ref-border-width-#{map.get($strokeSet, 'weight') * 2});
          }
          /* stylelint-enable custom-property-pattern */
        }
      }
    }
  }
}
</style>
