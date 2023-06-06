<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { Icon } from '@iconify/vue/offline';

import { useEventDebounceSignal } from '@/shared/libs/event';
import { promoteInvalidMessage } from '@/shared/libs/validation';
import { signal } from '@/shared/libs/signal';

import type { TextField } from './text-field.model';

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
