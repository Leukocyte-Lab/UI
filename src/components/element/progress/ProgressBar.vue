<script setup lang="ts">
import type { Progress } from '@/components/element/progress/progress.model';

const props = withDefaults(defineProps<Progress.Props>(), {
  value: 0,
  variant: 'concave',
  thickness: 12
});
</script>

<template>
  <div :class="[$style['progress-container'], $style[props.variant]]">
    <div :class="[$style['progress-groove'], $style[props.variant]]">
      <div :class="$style['progress-value']" :style="{ width: `${props.value * 100}%` }"></div>
    </div>
  </div>
</template>

<style module scoped lang="scss">
@use '@/assets/styles/modules/progress.module' as progress;

.progress {
  &-container {
    --progress-content-fill: var(--agh-ref-color-cyan-500);

    &.concave {
      --progress-groove-fill: var(--agh-ref-color-grayscale-100);
      --progress-value-fill: var(--agh-ref-color-cyan-500);
      --progress-shadow: var(--agh-sys-effects-inner-shadow-deco);
    }

    &.convex {
      --progress-groove-fill: var(--agh-ref-color-grayscale-100);
      --progress-value-fill: var(--agh-ref-color-cyan-gradient-500);
      --progress-shadow: var(--agh-sys-effects-shadow-gadget);
    }
  }
}
</style>
