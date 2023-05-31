<script setup lang="ts">
const props = defineProps<{
  height?: number;
  width?: number;
}>();
</script>

<template>
  <svg
    :class="$style['poly-wrapper']"
    :width="props.width"
    :height="props.height"
    preserveAspectRatio="xMinYMin"
    color-profile="sRGB"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <slot name="defs" />
    </defs>
    <slot name="path" />
  </svg>
</template>

<style module scoped lang="scss">
.poly-wrapper {
  overflow: visible;
}
</style>
