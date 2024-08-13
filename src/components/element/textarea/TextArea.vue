<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { Icon } from '@iconify/vue/offline';

import CardBox from '@/components/element/card/CardBox.vue';
import { useEventDebounceSignal } from '@/shared/libs/event';
import { signal } from '@/shared/libs/signal';
import { promoteInvalidMessage } from '@/shared/libs/validation';

import type { TextArea } from '@/components/element/textarea/TextArea.model';

const props = withDefaults(defineProps<TextArea.Props>(), {
  type: 'text',
  required: false,
  disabled: false,
  readonly: false,
  spellcheck: false,
  autocomplete: 'off',
  iconAlign: 'right'
});

const emits = defineEmits<TextArea.Emits>();

const { onTrigger } = useEventDebounceSignal(
  (event) => {
    if (props.disabled) {
      event.preventDefault();
      event.stopPropagation();
    } else {
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
    emits('validation', inputRef$.value.validity)
  }
};

onMounted(() => {
  checkValidity();
});
</script>

<template>
  <CardBox
    :class="[$style['textarea-container']]"
    radius="var(--agh-ref-border-radius-400)"
    variant="flat"
  >
    <textarea
      ref="inputRef$"
      @input="onTrigger"
      :class="[$style['textarea-input']]"
      v-bind="props"
      :value="props.modelValue"
    />

    <template v-if="errMsg()">
      <label :class="[$style['textarea-label']]" :for="props.name">
        <Icon :class="[$style['textarea-label--icon']]" :icon="'fa6-solid:circle-xmark'" />
        <span :class="[$style['textarea-label--value']]">{{ errMsg() }}</span>
      </label>
    </template>
  </CardBox>
</template>

<style module lang="scss" scoped>
@use '@/assets/styles/modules/scrollbar.module' as scrollbar;

.textarea {
  &-container {
    --box-border-width: var(--agh-ref-border-width-50);
    --box-box-shadow: var(--agh-sys-effects-inner-shadow-text-area) !important;

    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    position: relative;
    width: 100%;
    height: 100%;
    box-sizing: border-box;

    &:has(.textarea-input:invalid) {
      background-image: none !important;
      background-color: var(--agh-sys-color-red-surface-normal);
    }

    &.icon-align {
      &--left,
      &--right {
        --icon-offset: calc(
          var(--agh-ref-spacing-100) + var(--agh-ref-spacing-200) + var(--agh-ref-icon-size-100)
        );
      }

      &--left {
        flex-direction: row;

        .textarea {
          &-input {
            padding-left: var(--icon-offset);
          }
        }
      }

      &--right {
        .textarea {
          &-input {
            padding-right: var(--icon-offset);
          }
        }
      }
    }

    > .textarea-label {
      &--icon {
        position: absolute;
        color: var(--agh-ref-color-grayscale-500);
        padding: var(--agh-ref-spacing-100) var(--agh-ref-spacing-200);
      }
    }
  }

  &-input {
    @include scrollbar.use($offset: var(--agh-ref-spacing-300));

    display: flex;
    box-sizing: border-box;
    appearance: none;
    position: relative;
    width: 100%;
    height: 100%;
    padding: var(--agh-ref-spacing-300) var(--agh-ref-spacing-500);
    background: none;
    border: none;
    border-right: var(--agh-ref-spacing-300) solid transparent;
    border-radius: var(--box-border-radius);
    color: var(--agh-ref-color-grayscale-900);
    caret-color: var(--agh-ref-color-blue-500);
    resize: none;
    overflow-y: auto;
    font: var(--agh-sys-typeface-content-default-xlarge);

    &::placeholder {
      color: var(--agh-ref-color-grayscale-500);
    }

    &:hover,
    &:focus {
      &:not(:disabled, :invalid) {
        outline: none;
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
      caret-color: var(--agh-ref-color-red-500);
    }
  }

  &-label {
    position: absolute;
    bottom: var(--agh-ref-spacing-300);
    left: var(--agh-ref-spacing-500);
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
