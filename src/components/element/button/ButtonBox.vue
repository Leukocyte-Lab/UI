<script setup lang="ts">
import { Icon } from '@iconify/vue/offline';

import BaseLink from '@/components/base/BaseLink.vue';
import BasePoly from '@/components/base/BasePoly.vue';

import { useEventDebounceSignal } from '@/shared/libs/event';

import type { ButtonBox } from '@/components/element/button/ButtonBox.model';

const props = withDefaults(defineProps<ButtonBox.Props>(), {
  disabled: false,
  bobble: false,
  variant: 'rounded',
  level: 'primary',
  size: 'medium',
  color: 'general',
  loading: false
});

const emits = defineEmits<{
  (e: 'click', event: MouseEvent): void;
}>();

const colorMap = {
  general: 'blue',
  danger: 'red'
};

const { triggered, onTrigger } = useEventDebounceSignal<MouseEvent>((event) => {
  if (props.disabled || props.loading) {
    event.preventDefault();
    event.stopPropagation();
  } else {
    emits('click', event);
  }
});
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
      $style[colorMap[props.color]],
      props.disabled ? [$style['disabled']] : [$style['clickable']],
      {
        [$style['clicked']]: props.clicked || triggered()
      }
    ]"
    :aria-disabled="props.disabled"
    :aria-label="props.label"
    @click="onTrigger"
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

    $colors: 'default', 'cyan', 'blue', 'green', 'orange', 'red';
    $sizes: 'small', 'medium', 'large', 'huge';

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
    }

    &.square {
      @include metallic.box($has-stroke: false);

      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;

      --box-border-width: var(--agh-ref-border-width-50);
      --box-box-shadow: var(--agh-sys-effects-shadow-gadget);
      --box-box-shadow-clicked: var(--agh-sys-effects-inner-shadow-button-small);
      --button-text-shadow: var(--agh-sys-effects-shadow-gadget-filter);
      --box-border-radius: var(--agh-ref-border-radius-400);

      padding: var(--agh-ref-spacing-100);
      #{$self}-icon {
        width: var(--agh-ref-spacing-600);
        height: var(--agh-ref-spacing-600);
        display: flex;
        justify-content: center;
        align-items: center;
      }

      #{$self}-content {
        display: none;
        position: absolute;
        justify-content: flex-end;
        align-items: center;
        width: calc(var(--agh-ref-spacing-600) * 3);
        height: fit-content;
        right: calc(100% + var(--agh-ref-spacing-200));
        color: var(--agh-ref-color-grayscale-1100);
        text-align: right;
        font: var(--agh-sys-typeface-label-default-medium);
        filter: none;
      }

      &:hover,
      &:focus-visible {
        #{$self}-content {
          display: flex;
        }
      }
    }

    &.text-square {
      @include metallic.box($has-stroke: false);

      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      margin-left: calc(var(--agh-ref-spacing-600) * 3);

      --box-border-width: var(--agh-ref-border-width-50);
      --box-box-shadow: var(--agh-sys-effects-shadow-gadget);
      --box-box-shadow-clicked: var(--agh-sys-effects-inner-shadow-button-small);
      --button-text-shadow: var(--agh-sys-effects-shadow-gadget-filter);
      --box-border-radius: var(--agh-ref-border-radius-400);

      padding: var(--agh-ref-spacing-100);

      #{$self}-icon {
        width: var(--agh-ref-spacing-600);
        height: var(--agh-ref-spacing-600);
        display: flex;
        justify-content: center;
        align-items: center;
      }

      #{$self}-content {
        position: absolute;
        justify-content: flex-end;
        align-items: center;
        width: calc(var(--agh-ref-spacing-600) * 3);
        height: fit-content;
        right: calc(100% + var(--agh-ref-spacing-200));
        color: var(--agh-ref-color-grayscale-1100);
        text-align: right;
        font: var(--agh-sys-typeface-label-default-medium);
        filter: none;
      }
    }

    &.circle {
      @include metallic.box($has-stroke: false);

      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      padding: var(--agh-ref-spacing-400);

      --box-border-width: var(--agh-ref-border-width-50);
      --box-box-shadow: var(--agh-sys-effects-shadow-gadget);
      --box-box-shadow-clicked: var(--agh-sys-effects-inner-shadow-button-small);
      --button-text-shadow: var(--agh-sys-effects-shadow-gadget-filter);
      --box-border-radius: 50%;

      #{$self}-content {
        display: none;
        position: absolute;
        justify-content: flex-end;
        align-items: center;
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

      gap: var(--agh-ref-spacing-100);
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
    }

    &.extendable-rect {
      @include metallic.box($has-stroke: true);

      --box-border-width: var(--agh-ref-border-width-50);
      --box-box-shadow: var(--agh-sys-effects-shadow-gadget);
      --box-box-shadow-clicked: var(--agh-sys-effects-inner-shadow-button-small);
      --button-text-shadow: var(--agh-sys-effects-shadow-gadget-filter);
      --box-border-radius: var(--agh-ref-border-radius-400);
      --button-extendable-rect-icon-size: var(--button-icon-size, var(--agh-ref-icon-size-400));

      display: flex;
      flex-direction: row;
      align-items: center;
      padding: var(--agh-ref-spacing-200);
      gap: 0;
      width: var(--agh-ref-spacing-900);
      height: var(--agh-ref-spacing-900);
      justify-content: flex-start;
      transition:
        padding 0.3s ease-in,
        width 0.3s ease-in-out,
        opacity 0.3s ease-in;
      max-width: var(--button-max-width, fit-content);

      &:hover {
        width: 100%;

        #{$self}-content {
          width: 100%;
          opacity: 1;
          padding-right: var(--agh-ref-spacing-100);
          pointer-events: auto;
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

      #{$self}-content {
        width: 0;
        opacity: 0;
        white-space: nowrap;
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
        width: var(--button-extendable-rect-icon-size);
        height: var(--button-extendable-rect-icon-size);
      }

      #{$self}-bobble {
        &.badge {
          border-radius: var(--agh-ref-border-radius-200);
        }
      }
    }

    &.rounded,
    &.rect {
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

    &.text {
      display: flex;
      flex-direction: row-reverse;
      place-content: center;
      gap: var(--agh-ref-spacing-100);

      &.disabled {
        color: var(--agh-ref-color-grayscale-400);
      }

      #{$self}-bobble {
        &.badge {
          order: -1;
        }
      }
    }

    &.disabled {
      box-shadow: none !important;

      #{$self}-content,
      #{$self}-icon,
      #{$self}-bobble {
        opacity: var(--button-disabled-opacity);
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

    @each $size in $sizes {
      &.#{$size} {
        font: var(--agh-sys-typeface-label-hl-#{$size});
      }

      &-icon {
        font: var(--agh-sys-typeface-label-hl-#{$size});
      }
    }

    @each $color in $colors {
      &.#{$color} {
        --box-fill-gradient: var(--agh-ref-color-blue-gradient-500);
        --box-fill-gradient-hover: var(--agh-ref-color-blue-gradient-200);
        --box-fill-gradient-clicked: var(--agh-ref-color-blue-gradient-700);
        --box-fill-disabled: color-mix(
          in srgb,
          var(--agh-ref-color-blue-300) calc(100% * var(--agh-ref-opacity-100)),
          white
        );
        --box-text-color: var(--agh-ref-color-grayscale-100);
        --box-text-color-disabled: var(--agh-ref-color-blue-600);
        --button-disabled-opacity: var(--agh-ref-opacity-300);

        @if $color != 'default' {
          --box-fill-gradient: var(--agh-ref-color-#{$color}-gradient-500);
          --box-fill-gradient-hover: var(--agh-ref-color-#{$color}-gradient-200);
          --box-fill-gradient-clicked: var(--agh-ref-color-#{$color}-gradient-700);
          --box-fill-disabled: color-mix(
            in srgb,
            var(--agh-ref-color-#{$color}-300) calc(100% * var(--agh-ref-opacity-100)),
            white
          );

          &:not(
              .rounded.secondary,
              .rect.secondary,
              .square.secondary,
              .text-square.secondary,
              .circle.secondary
            ) {
            --box-border-gradient: var(--agh-ref-color-border-#{$color}-500);
          }

          &:not(.secondary) {
            --box-border-gradient-hover: var(--agh-ref-color-border-#{$color}-200);
          }

          --box-text-color: var(--agh-ref-color-grayscale-100);
          --box-text-color-disabled: var(--agh-ref-color-#{$color}-600);
          --button-disabled-opacity: var(--agh-ref-opacity-300);

          &.text {
            color: var(--agh-ref-color-#{$color}-500);

            &:hover,
            &:focus-visible {
              color: var(--agh-ref-color-#{$color}-400);
            }

            &.clicked {
              color: var(--agh-ref-color-#{$color}-600);
            }
          }

          &.secondary {
            --box-fill-gradient: var(--agh-ref-color-white-gradient-500);
            --box-fill-gradient-hover: linear-gradient(
              var(--agh-sys-color-#{$color}-surface-normal),
              var(--agh-sys-color-#{$color}-surface-normal)
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

              &.rounded {
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

              &.rect,
              &.extendable-rect {
                --box-fill-disabled: var(--agh-ref-color-grayscale-300);

                &,
                #{$self}-icon {
                  color: var(--agh-ref-color-grayscale-150);
                }
              }
            }

            #{$self}-content {
              background-image: var(--agh-ref-color-#{$color}-gradient-500);
              background-size: 100%;
              -webkit-background-clip: text;
              -moz-background-clip: text;
              -webkit-text-fill-color: transparent;
              -moz-text-fill-color: transparent;
            }

            #{$self}-icon {
              color: var(--agh-ref-color-#{$color}-500);
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
              --box-fill-disabled: var(--agh-ref-color-grayscale-120);

              #{$self}-icon {
                color: var(--agh-ref-color-#{$color}-400);
              }

              &.disabled {
                #{$self}-icon {
                  filter: none;
                  color: color-mix(
                    in srgb,
                    var(--agh-ref-color-#{$color}-400) calc(100% * var(--agh-ref-opacity-300)),
                    white
                  );
                }
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
  }

  &-content {
    font: var(--button-font);
    font-weight: var(--button-font-weight);
    filter: var(--button-text-shadow);
  }

  &-bobble {
    border-radius: 50%;
    background-color: var(--agh-ref-color-blue-100);
    color: var(--agh-ref-color-blue-500);

    &.dot {
      position: absolute;
      top: calc(var(--bobble-size) / 2 * -1);
      right: calc(var(--bobble-size) / 2 * -1);
    }

    &.boolean {
      --bobble-size: var(--agh-ref-spacing-100);

      height: var(--bobble-size);
      width: var(--bobble-size);
    }

    &.number {
      --bobble-size: var(--agh-ref-spacing-500);

      display: flex;
      place-content: center;
      place-items: center;
      height: var(--bobble-size);
      width: var(--bobble-size);
      font: var(--agh-sys-typeface-label-hl-tiny);
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
