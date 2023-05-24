<script setup lang="ts">
import BaseLink from '@/components/base/BaseLink.vue';

import { useClickSignal } from '@/shared/libs/click';

namespace CardBox {
  export type BaseProps = {
    link?: string;
    variant?: Variant;
    color?: Color;
    hasStroke?: boolean;
    strokeWeight?: StrokeWeight;
    purpose?: Purpose;
    radius?: string;
    clickable?: boolean;
  };

  export type Variant = 'metallic' | 'flat' | 'dash';
  export type Color = 'default' | 'cyan' | 'blue' | 'green' | 'orange' | 'red' | 'purple';
  export type StrokeWeight = 'bold' | 'normal' | 'thin';
  export type Purpose = 'box' | 'container';

  export type Props = BaseProps;
}

const props = withDefaults(defineProps<CardBox.Props>(), {
  variant: 'metallic',
  color: 'default',
  hasStroke: true,
  clickable: false,
  strokeWeight: 'normal',
  purpose: 'box',
  radius: 'var(--agh-ref-border-radius-300)'
});

const { clicked, onClick } = useClickSignal();
</script>

<template>
  <BaseLink
    ref="wrapperRef$"
    :link="props.link"
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
        [$style['clicked']]: clicked()
      }
    ]"
    @click="onClick"
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
    --box-border-radius: v-bind('props.radius');

    position: relative;
    width: fit-content;
    height: fit-content;
    vertical-align: middle;
    outline: none;
    text-decoration: none;

    $colors: 'default', 'cyan', 'blue', 'green', 'orange', 'red', 'purple';

    @each $color in $colors {
      &.color-#{$color} {
        $fill: var(--agh-ref-color-grayscale-100);
        $fill-hover: var(--agh-ref-color-grayscale-200);
        $fill-gradient: var(--agh-ref-color-white-gradient-500);
        $fill-gradient-hover: var(--agh-ref-color-white-gradient-700);
        $border-gradient: var(--agh-ref-color-border-white-500);

        @if $color != 'default' {
          $fill: var(--agh-ref-color-#{$color}-500);
          $fill-hover: var(--agh-ref-color-#{$color}-700);
          $fill-gradient: var(--agh-ref-color-#{$color}-gradient-500);
          $fill-gradient-hover: var(--agh-ref-color-#{$color}-gradient-700);
          $border-gradient: var(--agh-ref-color-border-#{$color}-500);

          --box-text-color: var(--agh-ref-color-grayscale-100);
        }

        &.metallic {
          --box-fill-gradient: #{$fill-gradient};
          --box-fill-gradient-hover: #{$fill-gradient-hover};
        }

        &.flat {
          --box-fill-gradient: linear-gradient(#{$fill}, #{$fill});
          --box-fill-gradient-hover: linear-gradient(#{$fill-hover}, #{$fill-hover});
        }

        &.metallic,
        &.flat {
          --box-border-gradient: #{$border-gradient};

          &:not(.has-stroke) {
            @include metallic.box;
          }

          &.has-stroke {
            @include metallic.box($has-stroke: true);
          }
        }

        &.dash {
          border: var(--box-border-width) dashed #{$fill};
          border-radius: var(--box-border-radius);
        }
      }
    }

    &.color-default {
      &.dash {
        border: var(--box-border-width) dashed var(--agh-ref-color-grayscale-500);
      }
    }

    $stroke-sets: (
        'class': 'bold',
        'weight': var(--agh-ref-border-width-200)
      ),
      (
        'class': 'normal',
        'weight': var(--agh-ref-border-width-100)
      ),
      (
        'class': 'thin',
        'weight': var(--agh-ref-border-width-50)
      );

    @each $strokeSet in $stroke-sets {
      &.stroke-#{map.get($strokeSet, 'class')} {
        --box-border-width: #{map.get($strokeSet, 'weight')};
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
  }
}
</style>
