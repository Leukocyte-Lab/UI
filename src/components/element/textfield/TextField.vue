<script setup lang="ts">
import { useEventDebounceSignal } from '@/shared/libs/event';

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
    autocomplete: 'off',
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
      emits('update:modelValue', (event.target as HTMLInputElement).value);
    }
  },
  {
    flush: 'post'
  }
);
</script>

<template>
  <input v-bind="props" @input="onTrigger" />
</template>
