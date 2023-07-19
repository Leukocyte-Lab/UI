<script setup lang="ts">
import BaseLink from '@/components/base/BaseLink.vue';

import type { BadgeBox } from './BadgeBox.model';

const props = withDefaults(defineProps<BadgeBox.Props>(), {
  variant: 'capsule',
  color: 'default'
});
</script>

<template>
  <BaseLink
    :link="props.link"
    :class="[$style['badge-container'], $style[props.variant], $style[`color-${props.color}`]]"
  >
    <template v-if="props.label">
      <label :class="$style['badge-label']">
        <template v-if="props.delimiter && props.variant === 'capsule'">
          <template v-for="(text, index) in props.label.split(props.delimiter)" :key="index">
            <span>{{ text }}</span>
          </template>
        </template>
        <template v-else>{{ props.label }}</template>
      </label>
    </template>
    <template v-if="props.content">
      <p :class="$style['badge-content']">{{ props.content }}</p>
    </template>
  </BaseLink>
</template>

<style module scoped lang="scss">
.badge {
  &-container {
    position: relative;
    display: inline-flex;
    width: fit-content;
    height: fit-content;
    box-sizing: border-box;

    $colors: 'default', 'cyan', 'blue', 'green', 'orange', 'red', 'purple';

    @each $color in $colors {
      &.color-#{$color} {
        --fill-primary: var(--agh-ref-color-grayscale-200);
        --fill-secondary: var(--agh-ref-color-grayscale-700);
        --text-primary: var(--agh-ref-color-grayscale-700);
        --text-secondary: var(--agh-ref-color-grayscale-100);

        &.tab {
          --text-secondary: var(--agh-ref-color-grayscale-700);
        }

        @if $color != 'default' {
          --fill-primary: var(--agh-ref-color-#{$color}-100);
          --fill-secondary: var(--agh-ref-color-#{$color}-600);
          --text-primary: var(--agh-ref-color-#{$color}-800);

          &.tab {
            --text-secondary: var(--agh-ref-color-#{$color}-700);
          }
        }

        background-color: var(--fill-primary);
        color: var(--text-primary);
      }
    }

    &.capsule {
      flex-direction: row;
      place-items: center;
      place-content: center;
      border-radius: var(--agh-ref-border-radius-900);
      gap: var(--agh-ref-spacing-100);

      .badge {
        &-label,
        &-content {
          border-radius: var(--agh-ref-border-radius-900);
          font: var(--agh-sys-typeface-label-hl-medium);
        }

        &-label {
          padding: var(--agh-ref-spacing-75) var(--agh-ref-spacing-300);

          &:first-child:not(:last-child) {
            background-color: var(--fill-secondary);
            color: var(--text-secondary);
          }

          span {
            &:last-child:not(:first-child) {
              font: var(--agh-sys-typeface-label-hl-small);

              &::before {
                content: v-bind('`"${props.delimiter}"`');
              }
            }
          }
        }

        &-content {
          margin-right: var(--agh-ref-spacing-300);

          &:first-child {
            margin: 0;
            padding: var(--agh-ref-spacing-75) var(--agh-ref-spacing-300);
          }
        }
      }
    }

    &.tab {
      flex-direction: column;
      padding: var(--agh-ref-spacing-100) var(--agh-ref-spacing-200);
      border-radius: var(--agh-ref-border-radius-300);
      gap: var(--agh-ref-spacing-100);

      .badge {
        &-label {
          font: var(--agh-sys-typeface-label-hl-small);
          color: var(--text-primary);
        }

        &-content {
          font: var(--agh-sys-typeface-label-default-small);
          color: var(--text-secondary);
        }
      }
    }
  }
}
</style>
