<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import ButtonBox from '@/components/element/button/ButtonBox.vue';

import type { Flow } from '@/components/flow/Flow.model';

const props = withDefaults(defineProps<Flow.UI.Layout.Toolbar.Props>(), {
  direction: 'horizontal',
  position: 'bottom-right'
});
</script>

<template>
  <div
    :class="[
      $style['flow-toolbar'],
      $style.wrapper,
      $style.flex,
      $style[props.direction],
      $style[props.position]
    ]"
  >
    <ButtonBox icon="fa6-solid:arrows-up-down-left-right" variant="square" level="secondary" />
    <ButtonBox icon="fa6-solid:expand" variant="square" level="secondary" />
  </div>
</template>

<style module scoped lang="scss">
@use '@/assets/styles/modules/wrapper.module' as wrapper;

.flow {
  &-toolbar {
    --wrapper-gap: var(--agh-ref-spacing-300);

    display: inline-flex !important;
    position: absolute !important;
    place-content: center;
    place-items: center;

    $vertical: 'top' 'center' 'bottom';
    $horizontal: 'left' 'center' 'right';

    @each $direction in $vertical {
      @each $position in $horizontal {
        &.#{$direction}-#{$position} {
          @if $position == 'center' {
            left: 0;
            width: 100%;

          } @else {
            #{$position}: 0;
          }
          #{$direction}: 0;
        }
      }
    }
  }
}
</style>
