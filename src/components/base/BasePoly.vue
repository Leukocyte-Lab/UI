<script setup lang="ts">
const props = defineProps<{
  height?: number;
  width?: number;
}>();
</script>

<template>
  <svg
    :class="$style['poly-wrapper']"
    :height="props.height"
    :width="props.width"
    color-profile="sRGB"
    preserveAspectRatio="xMinYMin"
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
