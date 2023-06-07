<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { Icon } from '@iconify/vue/offline';

import { useEventDebounceSignal } from '@/shared/libs/event';
import { promoteInvalidMessage } from '@/shared/libs/validation';
import { signal } from '@/shared/libs/signal';

import type { TextField } from '@/components/element/textfield/text-field.model';

const props = withDefaults(
  defineProps<
    TextField.Props & {
      modelValue: string;
    }
  >(),
  {
    value: '',
    type: 'text',
    required: false,
    disabled: false,
    readonly: false,
    spellcheck: false,
    autocomplete: 'off'
  }
);

const emits = defineEmits<{
  (e: 'update:modelValue', value: string): void;
}>();

const { onTrigger } = useEventDebounceSignal(
  (event) => {
    if (props.disabled) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      computeErrMsg();
      emits('update:modelValue', (event.target as HTMLInputElement).value);
    }
  },
  {
    flush: 'post'
  }
);

const inputRef$ = ref<HTMLInputElement>();
const errMsg = signal('');

const computeErrMsg = () =>
  errMsg.set(
    inputRef$.value
      ? inputRef$.value?.validity.valid
        ? ''
        : promoteInvalidMessage(inputRef$.value.validity, props.invalidMessage ?? {}) ??
          inputRef$.value.validationMessage
      : ''
  );

onMounted(() => {
  computeErrMsg()
});
</script>

<template>
  <div :class="$style['textfield-container']">
    <input ref="inputRef$" :class="[$style['textfield-input']]" v-bind="props" @input="onTrigger" />
    <template v-if="errMsg()">
      <label :for="props.name" :class="[$style['textfield-label']]">
        <Icon :class="[$style['textfield-label--icon']]" :icon="'fa6-solid:circle-xmark'" />
        <span :class="[$style['textfield-label--value']]">{{ errMsg() }}</span>
      </label>
    </template>
  </div>
</template>

<style module lang="scss" scoped>
.textfield {
  &-container {
    position: relative;
    display: inline-block;
    width: fit-content;
    height: fit-content;
  }

  &-input {
    appearance: none;
    position: relative;
    padding: var(--agh-ref-spacing-100) var(--agh-ref-spacing-300);
    background-color: var(--agh-ref-color-grayscale-120);
    border: var(--agh-sys-border-gadget-textfield);
    border-radius: var(--agh-ref-border-radius-300);
    color: var(--agh-ref-color-grayscale-800);
    caret-color: var(--agh-ref-color-blue-500);
    font: var(--agh-sys-typeface-label-default-medium);

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

    &:invalid {
      outline: none;
      background-color: var(--agh-sys-color-red-surface-normal);
      border-color: var(--agh-ref-color-red-500);
      box-shadow: var(--agh-ref-effects-solid-red);
      caret-color: var(--agh-ref-color-red-500);
    }
  }

  &-label {
    position: absolute;
    top: calc(100% + var(--agh-ref-spacing-200));
    left: 0;
    display: inline-flex;
    place-items: center;
    padding: var(--agh-ref-spacing-50) var(--agh-ref-spacing-200);
    gap: var(--agh-ref-spacing-100);
    font: var(--agh-sys-typeface-content-default-medium);
    background-color: var(--agh-ref-color-red-500);
    color: var(--agh-ref-color-grayscale-100);
    border-radius: var(--agh-ref-border-radius-300);
    box-shadow: var(--agh-sys-effects-shadow-gadget);
    z-index: 100;

    &--icon {
      font: var(--agh-ref-typeface-family-icon-default);
      flex-shrink: 0;
    }

    &--value {
      white-space: nowrap;
    }
  }
}
</style>
