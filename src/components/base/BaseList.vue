<script setup lang="ts">
import { computedEager } from '@vueuse/core';
import { fromPairs, toPairs, groupBy } from 'lodash-es';

import type { BaseList } from '@/components/base/BaseList.model';
import type { VNode } from 'vue';

defineSlots<{
  default: (props: { item: BaseList.Props['items'][number]; index: number }) => VNode;
  group?: (props: { group: string | number; items: BaseList.Props['items'] }) => VNode;
  placeholder?: (props: {}) => VNode;
}>();

const props = defineProps<BaseList.Props>();

const groups = computedEager(() =>
  fromPairs(
    toPairs(groupBy(props.items, props.groupBy ?? '')).map(([group, options]) => [
      group === 'undefined' ? '' : group,
      options
    ])
  )
);
</script>

<template>
  <template v-if="!props.items || props.items.length === 0">
    <!-- @slot Use this placeholder slot to display the placeholder when items are empty -->
    <slot name="placeholder" />
  </template>
  <template v-for="(items, group) in groups" :key="`list-group-${group}`">
    <template v-if="group">
      <!-- @slot Use this ågroup slot to access group in grouped items -->
      <slot name="group" :group="group" :items="items" />
    </template>
    <template v-for="(item, index) in items" :key="`list-item-${index}`">
      <!-- @slot Use this default slot to access item in items -->
      <slot name="default" :item="item" :index="index" />
    </template>
  </template>
</template>
