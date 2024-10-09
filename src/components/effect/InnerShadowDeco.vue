<script setup lang="ts">
const props = defineProps<{
  height: number;
  width: number;
}>();
</script>

<template>
  <filter
    id="effects--inner-shadow--deco"
    :height="props.height"
    :width="props.width"
    color-interpolation-filters="sRGB"
    filterUnits="userSpaceOnUse"
    x="0"
    y="0"
  >
    <feFlood flood-opacity="0" result="BackgroundImageFix" />
    <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
    <feColorMatrix
      in="SourceAlpha"
      result="hardAlpha"
      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
    />
    <feOffset dx="1" dy="1" />
    <feGaussianBlur stdDeviation="1" />
    <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
    <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0" />
    <feBlend in2="shape" result="effect-innerShadow-1" />
    <feColorMatrix
      in="SourceAlpha"
      result="hardAlpha"
      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
    />
    <feOffset dx="2" dy="3" />
    <feGaussianBlur stdDeviation="1.5" />
    <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
    <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.11 0" />
    <feBlend in2="effect-innerShadow-1" result="effect-innerShadow2" />
    <feColorMatrix
      in="SourceAlpha"
      result="hardAlpha"
      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
    />
    <feOffset dx="5" dy="6" />
    <feGaussianBlur stdDeviation="2" />
    <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
    <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0" />
    <feBlend in2="effect-innerShadow2" result="effect-innerShadow3" />
    <feColorMatrix
      in="SourceAlpha"
      result="hardAlpha"
      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
    />
    <feOffset dx="8" dy="10" />
    <feGaussianBlur stdDeviation="2.5" />
    <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
    <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.02 0" />
    <feBlend in2="effect-innerShadow3" result="effect-innerShadow4" />
  </filter>
</template>
