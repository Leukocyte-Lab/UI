<script setup lang="ts">
import { Icon } from '@iconify/vue/offline';

import BaseLink from '@/components/base/BaseLink.vue';

import { useEventDebounceSignal } from '@/shared/libs/event';

import type { ButtonBox } from '@/components/element/button/ButtonBox.model';

const props = withDefaults(defineProps<ButtonBox.Props>(), {
  disabled: false,
  variant: 'rounded',
  level: 'primary',
  size: 'small'
});

const emits = defineEmits<{
  (e: 'click', event: MouseEvent): void;
}>();

const { triggered, onTrigger } = useEventDebounceSignal<MouseEvent>((event) => {
  if (props.disabled) {
    event.preventDefault();
    event.stopPropagation();
  } else {
    emits('click', event);
  }
});
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
      $style[props.size],
      props.disabled ? [$style['disabled']] : [$style['clickable']],
      {
        [$style['clicked']]: props.clicked || triggered()
      }
    ]"
    :aria-disabled="props.disabled"
    :aria-label="props.label"
    @click="onTrigger"
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
  <template v-if="props.variant === 'extendable-rect'">
    <div :class="$style['button-placeholder']" />
  </template>
</template>

<style module scoped lang="scss">
@use '@/assets/styles/modules/behavior.module' as behavior;
@use '@/assets/styles/modules/metallic.module' as metallic;

.button {
  $self: &;

  &-container {
    position: relative;
    display: flex;
    width: fit-content;
    height: fit-content;
    place-items: center;
    vertical-align: middle;
    outline: none;
    text-decoration: none;
    box-sizing: border-box;

    &.rounded,
    &.square,
    &.circle,
    &.rect,
    &.extendable-rect {
      --box-border-width: var(--agh-ref-border-width-50);
      --box-box-shadow: var(--agh-sys-effects-shadow-gadget);
      --box-box-shadow-clicked: var(--agh-sys-effects-inner-shadow-button-small);
      --button-text-shadow: var(--agh-sys-effects-shadow-gadget-filter);
    }

    &:not(.rounded.secondary, .rect.secondary) {
      &.rounded,
      &.rect,
      &.extendable-rect {
        @include metallic.box($has-stroke: true);
      }

      &.square,
      &.circle {
        @include metallic.box($has-stroke: false);
      }

      &.rounded,
      &.square,
      &.circle,
      &.rect,
      &.extendable-rect {
        --box-fill-gradient: var(--agh-ref-color-blue-gradient-500);
        --box-border-gradient: var(--agh-ref-color-border-blue-500);
        --box-fill-gradient-hover: var(--agh-ref-color-blue-gradient-200);
        --box-fill-gradient-click: var(--agh-ref-color-blue-gradient-700);
        --box-fill-disabled: color-mix(
          in srgb,
          var(--agh-ref-color-blue-300) calc(100% * var(--agh-ref-opacity-100)),
          white
        );
        --box-border-gradient-hover: var(--agh-ref-color-border-blue-200);
        --box-text-color: var(--agh-ref-color-grayscale-100);
        --box-text-color-disabled: var(--agh-ref-color-blue-600);
        --button-disabled-opacity: var(--agh-ref-opacity-300);
      }
    }

    &.square {
      --box-border-radius: var(--agh-ref-border-radius-400);

      padding: var(--agh-ref-spacing-100);

      #{$self}-icon {
        font-size: var(--button-icon-size, calc(var(--agh-ref-spacing-600) / 1.2));
      }
    }

    &.circle {
      --box-border-radius: 50%;

      padding: var(--agh-ref-spacing-400);

      #{$self}-icon {
        font-size: var(--button-icon-size, var(--agh-ref-spacing-600));
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
        font: var(--agh-sys-typeface-label-default-medium);
        filter: none;
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
      --box-border-radius: var(--agh-ref-border-radius-900);
      --button-font: var(--agh-sys-type-content-large);
      --button-font-weight: var(--agh-ref-typeface-weight-900);

      gap: var(--agh-ref-spacing-200);

      &.small {
        padding: var(--agh-ref-spacing-75) var(--agh-ref-spacing-500);
        font: var(--agh-sys-typeface-label-hl-medium);
      }

      &.large {
        padding: var(--agh-ref-spacing-100) var(--agh-ref-spacing-500);
        font: var(--agh-sys-typeface-label-hl-large);
      }

      &.secondary.disabled {
        --box-fill-disabled: color-mix(
          in srgb,
          var(--agh-ref-color-grayscale-600) calc(100% * var(--agh-ref-opacity-100)),
          white
        );

        &,
        #{$self}-icon {
          color: color-mix(
            in srgb,
            var(--agh-ref-color-grayscale-800) calc(100% * var(--agh-ref-opacity-300)),
            white
          );
        }
      }

      #{$self}-icon {
        font-size: var(--button-icon-size, var(--agh-ref-icon-size-100));
      }
    }

    &.rect,
    &.extendable-rect {
      --box-border-radius: var(--agh-ref-border-radius-400);
      --button-font: var(--agh-sys-type-content-large);
      --button-font-weight: var(--agh-ref-typeface-weight-700);

      gap: var(--agh-ref-spacing-100);
      padding: var(--agh-ref-spacing-200) var(--agh-ref-spacing-300);

      &.small {
        font: var(--agh-sys-typeface-label-hl-medium);
      }

      &.large {
        width: 100%;
        font: var(--agh-sys-typeface-label-hl-large);
      }

      &.secondary.disabled {
        --box-fill-disabled: var(--agh-ref-color-grayscale-300);

        &,
        #{$self}-icon {
          color: var(--agh-ref-color-grayscale-150);
        }
      }

      #{$self}-icon {
        font-size: var(--button-icon-size, var(--agh-ref-icon-size-200));
      }
    }

    &.rounded,
    &.rect,
    &.extendable-rect {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;

      #{$self}-icon {
        display: flex;
        justify-content: center;
        align-items: center;
      }

      &.secondary {
        --box-fill-gradient: var(--agh-ref-color-white-gradient-500);
        --box-fill-gradient-hover: linear-gradient(
          var(--agh-sys-color-blue-surface-normal),
          var(--agh-sys-color-blue-surface-normal)
        );
        --box-border-gradient: var(--agh-ref-color-border-white-500);

        &:not(.disabled) {
          @include metallic.box($has-stroke: true);
        }

        &.disabled {
          @include metallic.box($has-stroke: false);

          #{$self}-content,
          #{$self}-icon {
            background-image: none;
            -webkit-text-fill-color: initial;
            -moz-text-fill-color: initial;
            filter: none;
          }
        }

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

    &.extendable-rect {
      position: absolute;
      padding: var(--agh-ref-spacing-200);
      padding-right: calc(var(--fake-width) - var(--agh-ref-spacing-200));
      gap: 0;
      width: var(--button-extendable-rect-icon-size);
      justify-content: flex-start;
      transition: padding 0.3s ease-in, width 0.3s ease-in-out, opacity 0.3s ease-in;
      max-width: var(--button-max-width, fit-content);

      &,
      & + #{$self}-placeholder {
        --button-extendable-rect-icon-size: var(--button-icon-size, var(--agh-ref-icon-size-400));
        --fake-width: calc(
          var(--agh-ref-spacing-200) * 2 + var(--button-extendable-rect-icon-size)
        );
      }

      & + #{$self}-placeholder {
        height: var(--fake-width);
        width: var(--fake-width);
        pointer-events: none;
      }

      &:hover {
        padding: var(--agh-ref-spacing-200);
        width: calc(100% - var(--agh-ref-spacing-200) * 2);

        #{$self}-content {
          width: 100%;
          opacity: 1;
          padding-right: var(--agh-ref-spacing-100);
          pointer-events: auto;
        }
      }

      #{$self}-content {
        width: 0;
        opacity: 0;
        white-space: nowrap;
        transition: padding 0.3s ease-in, width 0.3s ease-in-out, opacity 0.3s ease-in;
        will-change: padding, width, opacity;
        pointer-events: none;
      }

      #{$self}-icon {
        font-size: var(--button-extendable-rect-icon-size);
        width: var(--button-extendable-rect-icon-size);
        height: var(--button-extendable-rect-icon-size);
      }
    }

    &.text {
      display: flex;
      flex-direction: row-reverse;
      place-content: center;
      gap: var(--agh-ref-spacing-100);
      color: var(--agh-ref-color-blue-500);
      font: var(--agh-sys-typeface-label-hl-medium);

      &:hover,
      &:focus-visible {
        color: var(--agh-ref-color-blue-400);
      }

      &.clicked {
        color: var(--agh-ref-color-blue-600);
      }

      &.disabled {
        color: var(--agh-ref-color-grayscale-400);
      }

      #{$self}-icon {
        font-size: var(--button-icon-size, var(--agh-ref-icon-size-100));
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
    filter: var(--button-text-shadow);
  }

  &-icon {
    display: flex;
    place-content: center;
    place-items: center;
  }
}
</style>
