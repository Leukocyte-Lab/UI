<script setup lang="ts">
import { computedEager } from '@vueuse/core';
import { Icon } from '@iconify/vue/offline';

import BaseLink from '@/components/base/BaseLink.vue';
import BasePoly from '@/components/base/BasePoly.vue';

import { useEventDebounceSignal } from '@/shared/libs/event';

import { ButtonBox } from '@/components/element/button/ButtonBox.model';

const props = withDefaults(defineProps<ButtonBox.Props>(), {
  variant: 'rounded',
  level: 'primary',
  size: 'medium',
  color: 'blue',
  mode: 'normal',
  disabled: false,
  bobble: false,
  loading: false
});

const emits = defineEmits<ButtonBox.Emits>();

const color = computedEager<keyof typeof ButtonBox.Color>(() =>
  props.mode === ButtonBox.Mode.danger
    ? ButtonBox.Color.red
    : ButtonBox.Color[props.color] ?? ButtonBox.Color.blue
);

const { triggered, onTrigger } = useEventDebounceSignal<MouseEvent>(
  (event) => {
    if (props.disabled || props.loading) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      emits('click', event);
    }
  },
  props.eventSignalOptions ?? {
    flush: 'pre'
  }
);
</script>

<template>
  <BaseLink
    :link="props.link"
    :class="[
      $style['button-container'],
      $style['behavior'],
      $style[props.variant],
      $style[props.level],
      $style[props.size],
      $style[props.mode],
      $style[color],
      props.disabled ? [$style['disabled']] : [$style['clickable']],
      {
        [$style['clicked']]: props.clicked || triggered()
      }
    ]"
    :aria-disabled="props.disabled"
    :aria-label="props.label"
    @click.capture="onTrigger"
    v-bind="props.disabled ? { disabled: '', ...$attrs } : $attrs"
    role="button"
    tabindex="0"
  >
    <template v-if="props.label">
      <span :class="[$style['button-content']]">{{ props.label }}</span>
    </template>
    <template v-if="props.bobble">
      <span
        :class="[
          $style['button-bobble'],
          $style[typeof props.bobble],
          {
            [$style['capsule']]:
              typeof props.bobble !== 'boolean' && String(props.bobble).length > 2
          },
          $style[
            typeof props.bobble === 'boolean' ||
            !['rounded', 'rect', 'text'].includes(props.variant)
              ? 'dot'
              : 'badge'
          ]
        ]"
      >
        <template v-if="props.bobble !== true">{{ props.bobble }}</template>
      </span>
    </template>
    <template v-if="props.icon">
      <span :class="[$style['button-icon']]">
        <Icon :icon="props.icon" />
      </span>
    </template>

    <template v-if="props.loading">
      <BasePoly :class="[$style['loading-icon'], $style[props.size]]" viewBox="0 0 16 16">
        <template #path>
          <path
            :class="$style['main-progress']"
            d="M16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8ZM2.4 8C2.4 11.0928 4.90721 13.6 8 13.6C11.0928 13.6 13.6 11.0928 13.6 8C13.6 4.90721 11.0928 2.4 8 2.4C4.90721 2.4 2.4 4.90721 2.4 8Z"
          />
          <path
            d="M8 1.2C8 0.537258 8.54024 -0.00921593 9.19554 0.0898279C10.457 0.280494 11.6608 0.771147 12.7023 1.52787C14.0691 2.52089 15.0864 3.92112 15.6085 5.52787C16.1305 7.13462 16.1305 8.8654 15.6084 10.4721C15.2106 11.6965 14.5252 12.801 13.6167 13.6968C13.1448 14.1621 12.3865 14.0375 11.9969 13.5013C11.6074 12.9652 11.7387 12.2216 12.1797 11.7269C12.6931 11.1512 13.0849 10.4723 13.3259 9.7305C13.6914 8.60578 13.6914 7.39423 13.3259 6.26951C12.9605 5.14478 12.2483 4.16462 11.2916 3.46951C10.6606 3.01106 9.94456 2.69212 9.19086 2.52808C8.54328 2.38714 8 1.86274 8 1.2Z"
            :class="$style['sub-progress']"
          />
        </template>
      </BasePoly>
    </template>
  </BaseLink>
</template>

<style module scoped lang="scss">
@use '@/assets/styles/modules/behavior.module' as behavior;
@use '@/assets/styles/modules/metallic.module' as metallic;
@import '@/assets/styles/libs/animate';

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

    $colors: 'purple', 'blue', 'cyan', 'green', 'orange', 'red';
    $font-size: ('small', var(--agh-sys-typeface-label-hl-small), var(--agh-ref-icon-size-100))
      ('medium', var(--agh-sys-typeface-label-hl-medium), var(--agh-ref-icon-size-100))
      ('large', var(--agh-sys-typeface-label-hl-large), var(--agh-ref-icon-size-200))
      ('huge', var(--agh-sys-typeface-label-hl-huge), var(--agh-ref-icon-size-400));

    &.rounded {
      @include metallic.box($has-stroke: true);

      --box-border-width: var(--agh-ref-border-width-50);
      --box-box-shadow: var(--agh-sys-effects-shadow-gadget);
      --box-box-shadow-clicked: var(--agh-sys-effects-inner-shadow-button-small);
      --button-text-shadow: var(--agh-sys-effects-shadow-gadget-filter);
      --box-border-radius: var(--agh-ref-border-radius-900);

      gap: var(--agh-ref-spacing-200);
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;

      #{$self}-icon {
        display: flex;
        justify-content: center;
        align-items: center;
      }

      &.small {
        padding: var(--agh-ref-spacing-50) var(--agh-ref-spacing-300);
      }

      &.medium {
        padding: var(--agh-ref-spacing-75) var(--agh-ref-spacing-500);
      }

      &.large {
        padding: var(--agh-ref-spacing-100) var(--agh-ref-spacing-500);
      }

      &.huge {
        padding: var(--agh-ref-spacing-100) var(--agh-ref-spacing-700);
      }
    }

    &.circle,
    &.square,
    &.text-square {
      @include metallic.box($has-stroke: false);

      --box-border-width: var(--agh-ref-border-width-50);
      --box-box-shadow: var(--agh-sys-effects-shadow-gadget);
      --box-box-shadow-clicked: var(--agh-sys-effects-inner-shadow-button-small);
      --button-text-shadow: var(--agh-sys-effects-shadow-gadget-filter);
      --box-border-radius: var(--agh-ref-border-radius-400);

      position: relative;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      padding: var(--agh-ref-spacing-100);

      @each $class, $font-token, $icon-token in $font-size {
        &.#{$class} {
          --button-size: var(--button-icon-size, calc(#{$icon-token} * 1.5));

          &,
          #{$self}-content {
            font-size: var(--button-icon-size, #{$icon-token});
          }

          @if $class == 'small' {
            --button-size: var(--button-icon-size, #{$icon-token});
          } @else if $class == 'huge' {
            #{$self}-content {
              font-size: var(--button-icon-size, calc(#{$icon-token} * 0.75));
            }
          }
        }
      }

      &,
      #{$self}-content {
        font: var(--button-font, var(--agh-sys-typeface-label-default-medium));
      }

      #{$self}-icon {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: var(--button-size);
        width: var(--button-size);
        height: var(--button-size);
      }

      #{$self}-content {
        display: none;
        position: absolute;
        justify-content: flex-end;
        align-items: center;
        width: calc(var(--button-size) * 4);
        height: fit-content;
        right: calc(100% + var(--button-size) / 2);
        color: var(--agh-ref-color-grayscale-1100);
        text-align: right;
        font: var(--button-font, var(--agh-sys-typeface-label-default-medium));
        filter: none;
      }

      &.small {
        --box-border-radius: var(--agh-ref-border-radius-300);

        #{$self}-content {
          right: calc(100% + var(--button-size) / 1.5);
          width: calc(var(--button-size) * 10);
        }
      }

      &.large,
      &.huge {
        padding: var(--agh-ref-spacing-200);
      }

      &.huge {
        --box-border-radius: var(--agh-ref-border-radius-500);
      }

      &:hover,
      &:focus-visible {
        #{$self}-content {
          display: flex;
        }
      }
    }

    &.text-square {
      margin-left: calc(var(--button-size) * 4);

      #{$self}-content {
        display: flex;
      }
    }

    &.circle {
      --box-border-width: var(--agh-ref-border-width-50);
      --box-box-shadow: var(--agh-sys-effects-shadow-gadget);
      --box-box-shadow-clicked: var(--agh-sys-effects-inner-shadow-button-small);
      --button-text-shadow: var(--agh-sys-effects-shadow-gadget-filter);
      --box-border-radius: 50% !important;

      #{$self}-icon {
        width: auto;
        height: auto;
      }

      &.small {
        padding: var(--agh-ref-spacing-100);
        width: calc(var(--agh-sys-button-plus-button-width-small) * 0.75);
        height: calc(var(--agh-sys-button-plus-button-height-small) * 0.75);

        #{$self}-icon {
          font-size: var(--agh-ref-icon-size-400);
        }

        #{$self}-bobble {
          &.dot {
            bottom: -7.5%;
            right: -7.5%;
          }
        }
      }

      &.medium {
        padding: var(--agh-ref-spacing-200);
        width: var(--agh-sys-button-plus-button-width-small);
        height: var(--agh-sys-button-plus-button-height-small);

        #{$self}-icon {
          font-size: var(--agh-ref-icon-size-400);
        }
      }

      &.large {
        padding: var(--agh-ref-spacing-400);
        width: var(--agh-sys-button-plus-button-width-large);
        height: var(--agh-sys-button-plus-button-height-large);

        #{$self}-icon {
          font-size: var(--agh-ref-icon-size-800);
        }

        #{$self}-bobble {
          &.dot {
            bottom: 5%;
            right: 5%;
          }
        }
      }

      &.huge {
        padding: var(--agh-ref-spacing-400);
        width: calc(var(--agh-sys-button-plus-button-width-large) * 1.25);
        height: calc(var(--agh-sys-button-plus-button-height-large) * 1.25);

        #{$self}-icon {
          font-size: var(--agh-ref-icon-size-1000);
        }

        #{$self}-bobble {
          &.dot {
            bottom: 7.5%;
            right: 7.5%;
          }
        }
      }

      #{$self}-bobble {
        &.dot {
          top: auto;
          bottom: 0;
          right: 0;
        }
      }

      &:hover,
      &:focus-visible {
        #{$self}-content {
          display: flex;
        }
      }
    }

    &.rect {
      @include metallic.box($has-stroke: true);

      --box-border-width: var(--agh-ref-border-width-50);
      --box-box-shadow: var(--agh-sys-effects-shadow-gadget);
      --box-box-shadow-clicked: var(--agh-sys-effects-inner-shadow-button-small);
      --button-text-shadow: var(--agh-sys-effects-shadow-gadget-filter);
      --box-border-radius: var(--agh-ref-border-radius-400);

      padding: var(--agh-ref-spacing-200) var(--agh-ref-spacing-300);
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;

      #{$self}-icon {
        display: flex;
        justify-content: center;
        align-items: center;
      }

      #{$self}-bobble {
        &.badge {
          border-radius: var(--agh-ref-border-radius-200);
        }
      }

      &.small {
        padding: var(--agh-ref-spacing-100) var(--agh-ref-spacing-200);
        gap: var(--agh-ref-spacing-100);
      }

      &.medium {
        padding: var(--agh-ref-spacing-200) var(--agh-ref-spacing-300);
        gap: var(--agh-ref-spacing-200);
      }

      &.large {
        padding: var(--agh-ref-spacing-300) var(--agh-ref-spacing-400);
        gap: var(--agh-ref-spacing-300);
      }

      &.huge {
        padding: var(--agh-ref-spacing-400) var(--agh-ref-spacing-600);
        gap: var(--agh-ref-spacing-400);
      }

      &.large,
      &.huge {
        width: auto;
        min-width: fit-content;
      }
    }

    &.extendable-rect {
      @include metallic.box($has-stroke: true);

      --box-border-width: var(--agh-ref-border-width-50);
      --box-box-shadow: var(--agh-sys-effects-shadow-gadget);
      --box-box-shadow-clicked: var(--agh-sys-effects-inner-shadow-button-small);
      --button-text-shadow: var(--agh-sys-effects-shadow-gadget-filter);

      display: flex;
      flex-direction: row;
      align-items: center;
      flex-shrink: 0;
      gap: 0;
      justify-content: flex-start;
      transition:
        gap 0.3s ease-in,
        padding 0.3s ease-in,
        width 0.3s ease-in-out,
        opacity 0.3s ease-in;
      max-width: var(--button-max-width, fit-content);

      @each $class, $font-token, $icon-token in $font-size {
        &.#{$class} {
          &,
          #{$self}-content {
            font: var(--button-font, $font-token);
          }

          #{$self}-icon {
            font-size: var(--button-icon-size, calc(#{$icon-token} * 1.75));
          }
        }
      }

      &.small {
        --button-extendable-rect-icon-size: var(--button-icon-size, var(--agh-ref-icon-size-300));
        --box-border-radius: var(--button-border-radius, var(--agh-ref-border-radius-300));

        min-width: var(--agh-ref-spacing-800);
        width: var(--agh-ref-spacing-800);
        height: var(--agh-ref-spacing-800);
        padding: var(--agh-ref-spacing-200);
      }

      &.medium {
        --button-extendable-rect-icon-size: var(--button-icon-size, var(--agh-ref-icon-size-400));
        --box-border-radius: var(--button-border-radius, var(--agh-ref-border-radius-400));

        min-width: var(--agh-ref-spacing-900);
        width: var(--agh-ref-spacing-900);
        height: var(--agh-ref-spacing-900);
        padding: var(--agh-ref-spacing-200);

        &:hover {
          gap: var(--agh-ref-spacing-50);
        }
      }

      &.large {
        --button-extendable-rect-icon-size: var(--button-icon-size, var(--agh-ref-icon-size-600));
        --box-border-radius: var(--button-border-radius, var(--agh-ref-border-radius-500));

        min-width: var(--agh-ref-icon-size-950);
        width: var(--agh-ref-icon-size-950);
        height: var(--agh-ref-icon-size-950);
        padding: var(--agh-ref-spacing-300);

        &:hover {
          gap: var(--agh-ref-spacing-75);
        }
      }

      &.huge {
        --button-extendable-rect-icon-size: var(--button-icon-size, var(--agh-ref-icon-size-800));
        --box-border-radius: var(--button-border-radius, var(--agh-ref-border-radius-600));

        min-width: var(--agh-ref-icon-size-1100);
        width: var(--agh-ref-icon-size-1100);
        height: var(--agh-ref-icon-size-1100);
        padding: var(--agh-ref-spacing-400);

        &:hover {
          gap: var(--agh-ref-spacing-100);
        }
      }

      &:hover {
        width: 100%;

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
        padding-right: 0;
        transition:
          padding 0.3s ease-in,
          width 0.3s ease-in-out,
          opacity 0.3s ease-in;
        will-change: padding, width, opacity;
        pointer-events: none;
      }

      #{$self}-icon {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: var(--button-extendable-rect-icon-size);
        width: var(--button-extendable-rect-icon-size);
        height: var(--button-extendable-rect-icon-size);
      }

      #{$self}-bobble {
        &.badge {
          border-radius: var(--agh-ref-border-radius-200);
        }
      }
    }

    &.text {
      display: flex;
      flex-direction: row-reverse;
      place-content: center;
      gap: var(--agh-ref-spacing-100);

      &.disabled {
        &,
        #{$self}-content,
        #{$self}-icon {
          color: var(--agh-ref-color-grayscale-400) !important;
        }
      }

      #{$self}-bobble {
        &.badge {
          order: -1;
        }
      }

      &.small,
      &.medium {
        #{$self}-bobble {
          &.dot {
            top: -50%;
            right: -50%;
            z-index: 0;
          }
        }
      }

      &.large,
      &.huge {
        #{$self}-bobble {
          &.dot {
            top: -25%;
            right: -25%;
            z-index: 0;
          }
        }
      }
    }

    &.disabled {
      box-shadow: none !important;

      &.primary,
      &.tertiary {
        #{$self}-content,
        #{$self}-icon,
        #{$self}-bobble {
          filter: none;
        }

        &.extendable-rect {
          #{$self}-icon,
          #{$self}-bobble {
            opacity: var(--button-disabled-opacity);
          }

          &:hover {
            #{$self}-content {
              opacity: var(--button-disabled-opacity);
            }
          }
        }
      }

      &.primary {
        &:not(.extendable-rect, .text) {
          #{$self}-content,
          #{$self}-icon,
          #{$self}-bobble {
            opacity: var(--button-disabled-opacity);
          }
        }
      }

      &.tertiary {
        &:not(.extendable-rect, .text) {
          #{$self}-content {
            opacity: var(--button-disabled-opacity);
          }
        }

        &:not(.extendable-rect, .text, .square, .text-square, .circle) {
          #{$self}-icon,
          #{$self}-bobble {
            opacity: var(--button-disabled-opacity);
          }
        }
      }
    }

    .loading {
      &-icon {
        flex-shrink: 0;
        animation: rotate 1.5s linear infinite;

        .main-progress {
          fill: #d9d9d9;
        }

        .sub-progress {
          fill: var(--agh-ref-color-grayscale-100);
        }

        &.small {
          width: var(--agh-sys-gadget-progress-circle-width-tiny);
          height: var(--agh-sys-gadget-progress-circle-width-tiny);
        }

        &.medium {
          width: var(--agh-sys-gadget-progress-circle-width-tiny);
          height: var(--agh-sys-gadget-progress-circle-width-tiny);
        }

        &.large {
          width: var(--agh-sys-gadget-progress-circle-width-tiny);
          height: var(--agh-sys-gadget-progress-circle-width-tiny);
        }

        &.huge {
          width: var(--agh-sys-gadget-progress-circle-width-small);
          height: var(--agh-sys-gadget-progress-circle-width-small);
        }
      }
    }

    &.rounded,
    &.rect,
    &.text {
      @each $class, $font-token, $icon-token in $font-size {
        &.#{$class} {
          &,
          #{$self}-content {
            font: var(--button-font, #{$font-token});
          }

          #{$self}-icon {
            font-size: var(--button-icon-size, #{$icon-token});
          }
        }
      }
    }

    @each $color in $colors {
      &.#{$color} {
        --box-fill-gradient: var(--agh-ref-color-#{$color}-gradient-500);
        --box-fill-gradient-hover: var(--agh-ref-color-#{$color}-gradient-200);
        --box-fill-gradient-clicked: var(--agh-ref-color-#{$color}-gradient-700);
        --box-fill-disabled: color-mix(
          in srgb,
          var(--agh-ref-color-#{$color}-300) calc(100% * var(--agh-ref-opacity-100)),
          white
        );
        --box-text-color: var(--agh-ref-color-grayscale-100);
        --box-text-color-disabled: var(--agh-ref-color-#{$color}-600);
        --button-disabled-opacity: var(--agh-ref-opacity-300);

        &.large,
        &.huge {
          --box-fill-gradient-hover: var(--agh-ref-color-#{$color}-gradient-600);
        }

        #{$self}-bobble {
          --button-bobble-background-color: var(--agh-ref-color-#{$color}-100);
          --button-bobble-color: var(--agh-ref-color-#{$color}-500);
        }

        &.circle {
          --box-fill-gradient: var(--agh-ref-color-#{$color}-gradient-600);
          --box-fill-gradient-hover: var(--agh-ref-color-#{$color}-gradient-500);
          --box-fill-gradient-clicked: var(--agh-ref-color-#{$color}-gradient-700);

          &.large,
          &.huge {
            --box-fill-gradient: var(--agh-ref-color-#{$color}-gradient-700);
            --box-fill-gradient-clicked: var(--agh-ref-color-#{$color}-gradient-600);
          }
        }

        &:not(
            .rounded.secondary,
            .rounded.tertiary,
            .rect.secondary,
            .rect.tertiary,
            .square.secondary,
            .square.tertiary,
            .text-square.secondary,
            .text-square.tertiary,
            .circle.secondary,
            .circle.tertiary
          ) {
          --box-border-gradient: var(--agh-ref-color-border-#{$color}-500);
        }

        &:not(.secondary, .tertiary) {
          --box-border-gradient-hover: var(--agh-ref-color-border-#{$color}-200);
        }

        &.text {
          color: var(--agh-ref-color-#{$color}-500);

          &:hover,
          &:focus-visible {
            color: var(--agh-ref-color-#{$color}-400);
          }

          &.clicked {
            color: var(--agh-ref-color-#{$color}-600);
          }

          &.disabled {
            color: var(--agh-ref-color-grayscale-400);
          }
        }

        &.secondary,
        &.tertiary {
          --box-fill-gradient: var(--agh-ref-color-white-gradient-500);
          --box-fill-gradient-hover: linear-gradient(
            var(--agh-sys-color-#{$color}-surface-normal),
            var(--agh-sys-color-#{$color}-surface-normal)
          );
          --box-fill-gradient-clicked: var(--agh-ref-color-white-gradient-500);
          --box-border-gradient: var(--agh-ref-color-border-white-500);

          &:not(.disabled) {
            &:not(.rounded, .rect, .square, .text-square, .circle, .text) {
              @include metallic.box($has-stroke: true);
            }

            &:not(.square, .text-square, .circle, .text) {
              #{$self}-content {
                background-image: var(--agh-ref-color-#{$color}-gradient-500);
                background-size: 100%;
                -webkit-background-clip: text;
                -moz-background-clip: text;
                -webkit-text-fill-color: transparent;
                -moz-text-fill-color: transparent;
              }
            }

            &:not(.text, .square, .text-square, .circle) {
              #{$self}-icon {
                color: var(--agh-ref-color-#{$color}-500);
              }
            }
          }

          &.square,
          &.text-square,
          &.circle {
            --box-fill-gradient: var(--agh-ref-color-#{$color}-gradient-100);
            --box-fill-gradient-hover: linear-gradient(
              var(--agh-sys-color-#{$color}-surface-dim),
              var(--agh-sys-color-#{$color}-surface-dim)
            );
            --box-fill-gradient-clicked: linear-gradient(
              var(--agh-sys-color-#{$color}-surface-dim),
              var(--agh-sys-color-#{$color}-surface-dim)
            );
            --box-fill-disabled: color-mix(
              in srgb,
              var(--agh-ref-color-#{$color}-100) calc(100% * var(--agh-ref-opacity-300)),
              white
            );

            #{$self}-icon {
              color: var(--agh-ref-color-#{$color}-400);
            }
          }

          .loading {
            &-icon {
              .main-progress {
                fill: #d9d9d9;
              }

              .sub-progress {
                fill: var(--agh-ref-color-#{$color}-500);
              }
            }
          }
        }

        &.secondary {
          &.disabled {
            &:not(.text) {
              @include metallic.box($has-stroke: false);

              #{$self}-content,
              #{$self}-icon {
                color: var(--agh-ref-color-grayscale-400);
                background-image: none !important;
                -webkit-text-fill-color: initial !important;
                -moz-text-fill-color: initial !important;
                filter: none !important;
              }
            }
          }

          &.rounded,
          &.rect,
          &.extendable-rect {
            --box-fill-disabled: var(--agh-ref-color-grayscale-200);

            &.disabled {
              &,
              #{$self}-content,
              #{$self}-icon {
                color: var(--agh-ref-color-grayscale-400);
              }
            }
          }

          &.square,
          &.text-square,
          &.circle {
            &.disabled {
              #{$self}-icon {
                color: color-mix(
                  in srgb,
                  var(--agh-ref-color-#{$color}-600) calc(100% * var(--agh-ref-opacity-300)),
                  white
                );
              }
            }
          }
        }

        &.tertiary {
          &.rounded,
          &.rect,
          &.extendable-rect {
            &:not(.disabled) {
              --box-fill-gradient: none;
              --box-border-gradient: none;
              --box-box-shadow: none;
              --box-box-shadow-clicked: none;
              --box-fill-gradient-hover: linear-gradient(
                var(--agh-sys-color-#{$color}-surface-normal),
                var(--agh-sys-color-#{$color}-surface-normal)
              );
              --box-fill-gradient-clicked: linear-gradient(
                var(--agh-sys-color-#{$color}-surface-vivid),
                var(--agh-sys-color-#{$color}-surface-vivid)
              );
              --box-fill-disabled: var(--agh-ref-color-#{$color}-200);

              border: var(--box-border-width) solid var(--agh-ref-color-#{$color}-500);
              color: var(--agh-ref-color-#{$color}-500);
            }
          }

          &:not(.text, .disabled) {
            #{$self}-content {
              background-image: none !important;
              -webkit-text-fill-color: initial !important;
              -moz-text-fill-color: initial !important;
              filter: none !important;
            }

            #{$self}-content,
            #{$self}-icon {
              color: var(--agh-ref-color-#{$color}-500);
              filter: none;
            }
          }

          &.square,
          &.text-square,
          &.circle {
            --box-fill-gradient: none;
            --box-border-gradient: none;
            --box-fill-disabled: var(--agh-ref-color-grayscale-150);
            --box-box-shadow: none;
            --box-fill-gradient-hover: linear-gradient(
              var(--agh-ref-color-grayscale-250),
              var(--agh-ref-color-grayscale-250)
            );

            border: var(--agh-ref-border-width-50) solid var(--agh-ref-color-grayscale-250);

            &:hover,
            &:focus-visible,
            &.clicked,
            &.active,
            &.disabled {
              border-color: transparent;
            }

            #{$self}-content,
            #{$self}-icon {
              color: var(--agh-ref-color-grayscale-600);
            }

            &.clicked,
            &.active {
              #{$self}-icon {
                color: var(--agh-ref-color-#{$color}-300);
              }
            }

            &.disabled {
              #{$self}-icon {
                color: var(--agh-ref-color-grayscale-300);
              }
            }
          }
        }

        .loading {
          &-icon {
            .main-progress {
              fill: var(--agh-ref-color-#{$color}-500);
            }
          }
        }
      }
    }
  }

  &-content {
    filter: var(--button-text-shadow);
  }

  &-bobble {
    border-radius: var(--agh-ref-border-radius-900);
    background-color: var(--button-bobble-background-color);
    color: var(--button-bobble-color);

    &.dot {
      position: absolute;
    }

    &.capsule {
      padding: 0 var(--agh-ref-spacing-100);
    }

    &.boolean {
      --bobble-size: var(--agh-ref-spacing-200);

      height: var(--bobble-size);
      width: var(--bobble-size);

      &.dot {
        top: calc(var(--bobble-size) / 4 * -1);
        right: calc(var(--bobble-size) / 4 * -1);
      }
    }

    &.string,
    &.number {
      --bobble-size: var(--agh-ref-spacing-500);

      display: flex;
      place-content: center;
      place-items: center;
      height: var(--bobble-size);
      min-width: var(--bobble-size);
      font: var(--agh-sys-typeface-label-hl-tiny);

      &.dot {
        top: calc(var(--bobble-size) / 2 * -1);
        right: calc(var(--bobble-size) / 2 * -1);
      }
    }
  }

  &-icon {
    display: flex;
    place-content: center;
    place-items: center;
    filter: var(--button-text-shadow);
  }
}
</style>
