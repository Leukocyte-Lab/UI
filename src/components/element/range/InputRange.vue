<script setup lang="ts">
import { ref, computed } from 'vue';
import { useEventDebounceSignal } from '@/shared/libs/event';

import type { InputRange } from './InputRange.model';

const props = withDefaults(defineProps<InputRange.Props>(), {
  max: 100,
  min: 0,
  step: 1,
  thunbColor: 'var(--agh-ref-color-cyan-600)',
  trackColor: 'var(--agh-sys-color-cyan-surface-dim)',
  progressColor: 'var(--agh-ref-color-cyan-400)'
});

const emits = defineEmits<InputRange.Emits>();

const inputRangeRef$ = ref<HTMLInputElement | null>(null);

const progress = computed(() => (Number(props.modelValue) / Number(props.max)) * 100);

const { onTrigger } = useEventDebounceSignal(
  (event) => {
    if (props.disabled) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      const tempSliderValue = Number((event.target as HTMLInputElement).value);

      emits('update:modelValue', tempSliderValue);
    }
  },
  props.eventSignalOptions ?? {
    flush: 'post'
  }
);
</script>

<template>
  <input
    ref="inputRangeRef$"
    @input="onTrigger"
    type="range"
    v-bind="props"
    :value="props.modelValue"
    :style="{
      background: `linear-gradient(to right, ${props.progressColor} ${progress}%,${props.trackColor} ${progress}%)`
    }"
  />
</template>

<style module scoped lang="scss">
input[type='range'] {
  appearance: none;
  cursor: pointer;
  width: 100%;
  outline: none;
  border-radius: var(--agh-ref-border-radius-900);
}

input[type='range']:disabled {
  opacity: 0.5;
}

input[type='range']:focus {
  outline: none;
}

input[type='range']::-webkit-slider-runnable-track {
  border-radius: var(--agh-ref-border-radius-900);
  height: 14px;
}

input[type='range']::-webkit-slider-thumb {
  appearance: none;
  background-color: v-bind(thunbColor);
  border-radius: var(--agh-ref-border-radius-900);
  height: 32px;
  width: 13px;
  margin-top: -9px;
}

input[type='range']::-moz-range-track {
  border-radius: var(--agh-ref-border-radius-900);
  height: 14px;
}

input[type='range']::-moz-range-thumb {
  appearance: none;
  background-color: v-bind(thunbColor);
  border-radius: var(--agh-ref-border-radius-900);
  height: 32px;
  width: 13px;
  margin-top: -9px;
}
</style>
