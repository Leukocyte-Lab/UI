<script setup lang="ts">
import { Icon } from '@iconify/vue/offline';

import type { AttackMatrix } from './AttackMatrix.model';

const props = withDefaults(defineProps<AttackMatrix.Props>(), {
  disabled: false,
  showDetected: true
});
</script>

<template>
  <div :class="[$style['matrix'], props.disabled && $style['matrix-disabled']]">
    <div :class="$style['line']"></div>
    <div :class="$style['container']">
      <div :class="$style['card']" v-for="(item, index) in props.items" :key="index">
        <div :class="$style['body']">
          <div :class="$style['title']">{{ item.label }}</div>
          <div :class="$style['description']">{{ item.description }}</div>
        </div>
        <div :class="$style['detected']" v-if="props.showDetected">
          <div :class="$style['label']">
            <Icon icon="fa6-solid:user" />
            Detected
          </div>
          <div :class="$style['fraction']">
            <div :class="$style['numerator']">{{ item.detected?.count }}</div>
            <div :class="$style['denominator']">/</div>
            <div :class="$style['denominator']">{{ item.detected?.total }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style module scoped lang="scss">
.matrix {
  display: flex;
  gap: var(--agh-ref-spacing-600);

  .line {
    background-color: var(--agh-ref-color-cyan-300);
    border-radius: var(--agh-ref-border-radius-900);
    width: var(--agh-ref-border-width-400);
  }

  .container {
    display: flex;
    flex-direction: column;
    gap: var(--agh-ref-spacing-300);

    .card {
      padding: var(--agh-ref-spacing-200) var(--agh-ref-spacing-300);
      display: flex;
      flex-direction: column;
      gap: var(--agh-ref-spacing-100);
      background-color: var(--agh-ref-color-grayscale-100);
      border-radius: var(--agh-ref-border-radius-300);
      box-shadow: var(--agh-sys-effects-shadow-gadget);

      .body {
        display: flex;
        flex-direction: column;
        gap: var(--agh-ref-spacing-50);

        .title {
          color: var(--agh-ref-color-grayscale-1000);
          font: var(--agh-sys-typeface-label-default-medium);
        }

        .description {
          color: var(--agh-ref-color-grayscale-1100);
          font: var(--agh-sys-typeface-label-hl-medium);
        }
      }

      .detected {
        display: flex;
        justify-content: space-between;
        align-items: center;

        .label {
          display: flex;
          gap: var(--agh-ref-spacing-50);
          align-items: center;
          color: var(--agh-ref-color-grayscale-900);
          font: var(--agh-sys-typeface-label-default-small);
        }

        .fraction {
          display: flex;
          align-items: center;
          gap: var(--agh-ref-spacing-50);

          .denominator {
            color: var(--agh-ref-color-grayscale-700);
            font: var(--agh-sys-typeface-number-default-small);
          }

          .numerator {
            color: var(--agh-ref-color-grayscale-900);
            font: var(--agh-sys-typeface-number-hl-small);
          }
        }
      }
    }

    .card:first-child {
      border: var(--agh-ref-border-width-100) solid var(--agh-ref-color-cyan-300);
    }
  }

  &-disabled {
    .line {
      background-color: var(--agh-ref-color-grayscale-300);
      opacity: var(--agh-ref-opacity-300);
    }

    .container {
      .card {
        background-color: var(--agh-ref-color-grayscale-300);
        opacity: var(--agh-ref-opacity-300);
      }

      .card:first-child {
        border: 0;
      }
    }
  }
}
</style>
