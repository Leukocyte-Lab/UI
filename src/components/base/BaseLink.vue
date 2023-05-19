<script setup lang="ts">
import { computedEager } from '@vueuse/core';

const props = defineProps<{
  link?: string;
  external?: boolean;
}>();

const isExternal = computedEager(() => props.external ?? /^http(s?):\/\//.test(props.link || ''));
</script>

<template>
  <component
    :is="props.link ? (isExternal ? 'a' : 'RouterLink') : 'div'"
    v-bind="props.link ? { [isExternal ? 'href' : 'to']: props.link } : {}"
  >
    <slot />
  </component>
</template>
