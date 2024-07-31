<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { Icon } from '@iconify/vue/offline';

import { useEventDebounceSignal } from '@/shared/libs/event';
import { promoteInvalidMessage } from '@/shared/libs/validation';
import { signal } from '@/shared/libs/signal';

import type { TextField } from '@/components/element/textfield/TextField.model';

const props = withDefaults(defineProps<TextField.Props>(), {
  type: 'text',
  required: false,
  disabled: false,
  readonly: false,
  spellcheck: false,
  autocomplete: 'off',
  iconAlign: 'right'
});

const emits = defineEmits<TextField.Emits>();

const { onTrigger } = useEventDebounceSignal(
  (event) => {
    if (props.disabled) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      focused.set(true);
      checkValidity();
      emits('update:modelValue', (event.target as HTMLInputElement).value);
    }
  },
  props.eventSignalOptions ?? {
    flush: 'post'
  }
);

const inputRef$ = ref<HTMLInputElement>();
const errMsg = signal('');
const focused = signal(props.modelValue !== '');

const checkValidity = () => {
  errMsg.set(
    inputRef$.value
      ? inputRef$.value?.validity.valid
        ? ''
        : promoteInvalidMessage(inputRef$.value.validity, props.invalidMessage ?? {}) ??
          inputRef$.value.validationMessage
      : ''
  );

  if (inputRef$.value?.validity) {
    emits('validation', inputRef$.value.validity);
  }
};

onMounted(() => {
  checkValidity();
});

defineExpose({
  checkValidity
});
</script>

<template>
  <div
    :class="[
      $style['textfield-container'],
      {
        [$style[`icon-align--${props.iconAlign}`]]: props.icon || type === 'search',
        [$style['no-label']]: !props.label
      }
    ]"
  >
    <template v-if="props.label || props.required">
      <label :class="[$style['textfield-label']]">
        <template v-if="props.label">
          <p :class="[$style['textfield-label--value']]">{{ props.label }}</p>
        </template>
        <p :class="[$style['textfield-label--notation']]">
          <Icon :class="$style.icon" icon="fa6-solid:asterisk" />
          <span>Required</span>
        </p>
      </label>
    </template>
    <input
      ref="inputRef$"
      :class="[
        $style['textfield-input'],
        {
          [$style['focused']]: focused()
        }
      ]"
      v-bind="props"
      :value="props.modelValue"
      @input="onTrigger"
    />
    <template v-if="type === 'search'">
      <Icon
        :class="[$style['textfield-icon'], $style['textfield-icon-search'], $style['icon']]"
        :icon="type === 'search' ? 'fa6-solid:magnifying-glass' : ''"
      />
    </template>
    <template v-if="props.icon">
      <div :class="[$style['textfield-icon'], $style['icon']]" @click="props.iconClick">
        <Icon :icon="props.icon ?? ''" />
      </div>
    </template>
    <template v-if="errMsg() && focused()">
      <div :class="[$style['textfield-msg']]">
        <Icon :class="[$style['textfield-icon']]" :icon="'fa6-solid:circle-xmark'" />
        <span :class="[$style['textfield-msg--value']]">{{ errMsg() }}</span>
      </div>
    </template>
  </div>
</template>

<style module lang="scss" scoped>
.textfield {
  &-container {
    display: flex;
    flex-direction: column;
    place-content: center;
    position: relative;
    width: fit-content;
    height: fit-content;
    gap: var(--agh-ref-spacing-200);

    &.no-label {
      flex-direction: column-reverse;
    }

    &,
    & *:not(svg) {
      box-sizing: border-box;
    }

    &.icon-align {
      &--left,
      &--right {
        --icon-offset: calc(
          var(--agh-ref-spacing-100) + var(--agh-ref-spacing-200) + var(--agh-ref-icon-size-100)
        );
      }

      &--left {
        .textfield {
          &-input {
            padding-left: var(--icon-offset);
          }
        }
      }

      &--right {
        .textfield {
          &-icon {
            right: 0;
          }

          &-input {
            padding-right: var(--icon-offset);
          }
        }
      }
    }

    > .textfield {
      &-icon {
        color: var(--agh-ref-color-grayscale-700);
        position: absolute;
        padding: var(--agh-ref-spacing-100) var(--agh-ref-spacing-200);
        box-sizing: content-box !important;
        cursor: pointer;
        &-search {
          color: var(--agh-ref-color-grayscale-500);
        }
      }
    }
  }

  &-label {
    display: flex;
    flex-direction: row;
    place-content: space-between;
    position: relative;
    width: 100%;
    height: fit-content;

    &--value {
      color: var(--agh-ref-color-grayscale-700);
      font: var(--agh-sys-typeface-label-default-large);
    }

    &--notation {
      color: var(--agh-ref-color-red-500);
      font: var(--agh-sys-typeface-label-default-small);

      > .icon {
        font-size: calc(var(--agh-ref-icon-size-100) * 0.5);
        vertical-align: 0.5em;
      }
    }
  }

  &-input {
    appearance: none;
    position: relative;
    width: 100%;
    height: 100%;
    padding: var(--agh-ref-spacing-100) var(--agh-ref-spacing-300);
    background-color: var(--agh-ref-color-grayscale-120);
    border: var(--agh-sys-border-gadget-textfield);
    border-radius: var(--agh-ref-border-radius-300);
    color: var(--agh-ref-color-grayscale-800);
    caret-color: var(--agh-ref-color-blue-500);
    font: var(--agh-sys-typeface-label-default-medium);

    &::placeholder {
      color: var(--agh-ref-color-grayscale-400);
    }

    &:hover,
    &:focus {
      &:not(:disabled, :invalid) {
        outline: none;
        border-color: var(--agh-ref-color-blue-500);
        box-shadow: var(--agh-ref-effects-solid-cyan);
      }
    }

    &:disabled {
      background-color: var(--agh-ref-color-grayscale-300);
      border-color: var(--agh-ref-color-grayscale-300);
      color: var(--agh-ref-color-grayscale-900);
      opacity: var(--agh-ref-opacity-500);
      cursor: not-allowed;
    }

    &:invalid.focused {
      outline: none;
      background-color: var(--agh-sys-color-red-surface-normal);
      border-color: var(--agh-ref-color-red-500);
      box-shadow: var(--agh-ref-effects-solid-red);
      caret-color: var(--agh-ref-color-red-500);
    }

    &[type='search'] {
      height: var(--agh-sys-gadget-searchbar-height-small);
      padding: var(--agh-ref-spacing-75) var(--agh-ref-spacing-200);
      border-radius: var(--agh-ref-border-radius-900);
      color: var(--agh-ref-color-grayscale-900);

      &::-webkit-search-cancel-button {
        display: none;
      }

      &:not(:disabled, :hover, :focus) {
        border-color: var(--agh-ref-color-grayscale-300);
        background-color: var(--agh-ref-color-grayscale-100);
      }

      &:not(:hover, :focus),
      &:disabled {
        box-shadow: var(--agh-sys-effects-inner-shadow-deco);
      }

      &:disabled {
        background-color: var(--agh-ref-color-grayscale-600);
      }
    }
  }

  &-icon {
    font: var(--agh-ref-typeface-family-icon-default);
    flex-shrink: 0;
  }

  &-msg {
    position: absolute;
    top: calc(100% + var(--agh-ref-spacing-200));
    left: 0;
    display: inline-flex;
    place-items: center;
    padding: var(--agh-ref-spacing-50) var(--agh-ref-spacing-200);
    gap: var(--agh-ref-spacing-200);
    font: var(--agh-sys-typeface-content-default-medium);
    background-color: var(--agh-ref-color-red-500);
    color: var(--agh-ref-color-grayscale-100);
    border-radius: var(--agh-ref-border-radius-300);
    box-shadow: var(--agh-sys-effects-shadow-gadget);
    z-index: 100;
    max-width: 100%;
  }
}
</style>
