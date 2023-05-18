<script setup lang="ts">
import { Icon } from '@iconify/vue/offline';

import BaseLink from '@/components/base/BaseLink.vue';

import { signal } from '@/shared/libs/signal';

namespace ButtonBox {
  export type BaseProps = {
    label?: string;
    icon?: string;
    link?: string;
    disabled?: boolean;
    variant?: Variant;
    level?: Level;
  };

  export type Variant = 'rounded' | 'square' | 'circle' | 'rect' | 'file';
  export type Level = 'primary' | 'secondary';

  export type Props = BaseProps;
}

const props = withDefaults(defineProps<ButtonBox.Props>(), {
  disabled: false,
  variant: 'rounded',
  level: 'primary'
});

const clicked = signal(false);

let clickDebounceTimer: ReturnType<typeof setTimeout> | undefined = undefined;

const onClick = (event: MouseEvent) => {
  if (props.disabled || clicked()) {
    event.preventDefault();
    event.stopPropagation();
  } else {
    clicked.set(true);
    clearTimeout(clickDebounceTimer);

    clickDebounceTimer = setTimeout(() => {
      clicked.set(false);
    }, 300);
  }
};
</script>

<template>
  <BaseLink
    ref="wrapperRef$"
    :link="props.link"
    :class="[
      $style['button-container'],
      $style['behavior'],
      $style[props.variant],
      $style[props.level],
      props.disabled ? [$style['disabled']] : [$style['clickable']],
      {
        [$style['clicked']]: clicked()
      }
    ]"
    :aria-disabled="props.disabled"
    :aria-label="props.label"
    @click="onClick"
    v-bind="props.disabled ? { disabled: '' } : {}"
    role="button"
    tabindex="0"
  >
    <template v-if="props.label">
      <span :class="[$style['button-content']]">{{ props.label }}</span>
    </template>
    <template v-if="props.icon">
      <span :class="[$style['button-icon']]">
        <Icon :icon="props.icon" />
      </span>
    </template>
  </BaseLink>
</template>

<style module scoped lang="scss">
@use '@/assets/styles/modules/behavior.module' as behavior;
@use '@/assets/styles/modules/metallic.module' as metallic;

.button {
  $self: &;

  &-container {
    position: relative;
    width: fit-content;
    height: fit-content;
    vertical-align: middle;
    outline: none;

    &.rounded,
    &.square,
    &.circle,
    &.rect {
      --box-box-shadow: var(--agh-ref-effects-shadow-200);
    }

    &:not(.rect.secondary) {
      @include metallic.box;

      &.rounded,
      &.square,
      &.circle,
      &.rect {
        --box-fill-gradient: var(--agh-ref-color-blue-gradient-500);
        --box-fill-gradient-hover: var(--agh-ref-color-blue-gradient-200);
        --box-fill-gradient-click: var(--agh-ref-color-blue-gradient-700);
        --box-fill-disabled: var(--agh-ref-color-blue-300-opacity);
        --box-text-color: var(--agh-ref-color-grayscale-100);
        --box-text-color-disabled: var(--agh-ref-color-blue-600);
        --button-text-shadow: var(--agh-ref-effects-shadow-200);
        --button-disabled-opacity: var(--agh-ref-opacity-300);
      }
    }

    &.square {
      --box-border-radius: var(--agh-ref-border-radius-400);

      padding: var(--agh-ref-spacing-100);

      #{$self}-icon {
        font-size: calc(var(--agh-ref-spacing-600) / 1.2);
      }
    }

    &.circle {
      --box-border-radius: 50%;

      padding: var(--agh-ref-spacing-400);

      #{$self}-icon {
        font-size: var(--agh-ref-spacing-600);
      }
    }

    &.square,
    &.circle {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;

      #{$self}-content {
        display: none;
        justify-content: flex-end;
        align-items: center;
        position: absolute;
        width: calc(var(--agh-ref-spacing-600) * 3);
        height: fit-content;
        right: calc(100% + var(--agh-ref-spacing-200));
        color: var(--agh-ref-color-grayscale-1100);
        text-align: right;
        font: var(--agh-sys-type-content-small);
      }

      #{$self}-icon {
        width: var(--agh-ref-spacing-600);
        height: var(--agh-ref-spacing-600);
        display: flex;
        justify-content: center;
        align-items: center;
      }

      &:hover,
      &:focus-visible {
        #{$self}-content {
          display: flex;
        }
      }
    }

    &.rounded {
      --box-border-radius: var(--agh-ref-border-radius-500);
      --button-font: var(--agh-sys-type-content-large);
      --button-font-weight: var(--agh-ref-typeface-weight-900);

      padding: var(--agh-ref-spacing-75) var(--agh-ref-spacing-500);
    }

    &.rect {
      --box-border-radius: var(--agh-ref-border-radius-400);
      --button-font: var(--agh-sys-type-content-large);
      --button-font-weight: var(--agh-ref-typeface-weight-700);

      padding: var(--agh-ref-spacing-200) var(--agh-ref-spacing-300);
    }

    &.rounded,
    &.rect {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      gap: var(--agh-ref-spacing-200);

      #{$self}-icon {
        width: var(--agh-ref-spacing-500);
        height: var(--agh-ref-spacing-500);
        font-size: calc(var(--agh-ref-spacing-500) / 1.2);
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }

    &.rect {
      &.secondary {
        --box-fill-gradient: var(--agh-ref-color-white-gradient-500);
        --box-border-gradient: var(--agh-ref-color-border-white-500);
        --box-border-width: var(--agh-ref-border-width-100);

        @include metallic.box($has-stroke: true);

        #{$self}-content {
          background-image: var(--agh-ref-color-blue-gradient-500);
          background-size: 100%;
          -webkit-background-clip: text;
          -moz-background-clip: text;
          -webkit-text-fill-color: transparent;
          -moz-text-fill-color: transparent;
        }

        #{$self}-icon {
          color: var(--agh-ref-color-blue-500);
        }
      }
    }

    &.disabled {
      box-shadow: none !important;

      #{$self}-content,
      #{$self}-icon {
        opacity: var(--button-disabled-opacity);
      }
    }
  }

  &-content,
  &-icon {
    font: var(--button-font);
    font-weight: var(--button-font-weight);
    text-shadow: var(--button-text-shadow);
  }
}
</style>
