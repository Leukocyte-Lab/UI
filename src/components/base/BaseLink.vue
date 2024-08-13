<script setup lang="ts">
import { computedEager } from '@vueuse/core';

const props = withDefaults(
  defineProps<{
    link?: string;
    external?: boolean;
  }>(),
  {
    external: undefined
  }
);

const isExternal = computedEager(() =>
  props.external ?? /^(https?:\/\/)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_+.~#?&//=]*)$/.test(props.link || '')
);
</script>

<template>
  <component
    :is="props.link ? (isExternal ? 'a' : 'RouterLink') : 'div'"
    v-bind="
      props.link
        ? {
          [isExternal ? 'href' : 'to']: props.link,
          ...(isExternal
            ? {
              target: '_blank',
              rel: 'noopener noreferrer'
            }
            : {})
        }
        : {}
    "
  >
    <slot />
  </component>
</template>
