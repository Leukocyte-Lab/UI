<script setup lang="ts">
import { useEventDebounceSignal } from '@/shared/libs/event';

import type { SwitchButton } from './SwitchButton.model';

const props = withDefaults(defineProps<SwitchButton.Props>(), {
  disabled: false
});

const emits = defineEmits<{
  (e: 'update:modelValue', value: boolean): void;
}>();

const { onTrigger } = useEventDebounceSignal(
  (event) => {
    if (props.disabled) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      emits('update:modelValue', !props.modelValue);
    }
  },
  props.eventSignalOptions ?? {
    flush: 'post'
  }
);
</script>

<template>
  <div :class="[$style['switch'], props.modelValue && $style['switch_active']]" @click="onTrigger">
    <div :class="[$style['slider'], props.modelValue && $style['slider_active']]"></div>
  </div>
</template>

<style module lang="scss" scoped>
.switch {
  background-color: var(--agh-ref-color-grayscale-300);
  width: var(--agh-sys-gadget-switch-width-full);
  height: calc(var(--agh-sys-gadget-switch-circle-height-full) + var(--agh-ref-spacing-25) * 2);
  border-radius: var(--agh-ref-border-radius-900);
  cursor: pointer;
  position: relative;

  &_active {
    background-color: var(--agh-ref-color-blue-500);
  }

  .slider {
    width: var(--agh-sys-gadget-switch-circle-width-full);
    height: var(--agh-sys-gadget-switch-circle-height-full);
    background-color: var(--agh-ref-color-grayscale-100);
    box-shadow: var(--agh-sys-effects-shadow-gadget);
    border-radius: 50%;
    position: absolute;
    top: var(--agh-ref-spacing-25);
    left: var(--agh-ref-spacing-25);
    transition: transform 0.4s;

    &_active {
      transform: translateX(calc((var(--agh-sys-gadget-switch-width-full) - var(--agh-sys-gadget-switch-circle-width-full)) - (var(--agh-ref-spacing-25) * 2)));
    }
  }
}
</style>
