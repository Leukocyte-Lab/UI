<script setup lang="ts">
const props = defineProps<{
  id: string;
  radius: number;
}>();
</script>

<template>
  <filter :id="props.id">
    <feGaussianBlur
      :stdDeviation="props.radius"
      in="SourceGraphic"
      result="blur"
    />
    <feColorMatrix
      in="blur"
      mode="matrix"
      values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 20 -10"
      result="mask"
    />
    <feComposite in="SourceGraphic" in2="mask" operator="in" />
  </filter>
</template>
