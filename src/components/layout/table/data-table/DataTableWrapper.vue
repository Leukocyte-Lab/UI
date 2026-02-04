<script setup lang="ts" generic="T extends DataTable.AcceptedTypes">
import { computed, ref, watch } from 'vue';
import { useResizeObserver } from '@vueuse/core';

import DataTableCell from './DataTableCell.vue';
import DataTableRow from './DataTableRow.vue';

import { Map$, signal } from '@/shared';

import type { DataTable } from './DataTable.model';

const slots = defineSlots<DataTable.Component.Wrapper.Slots<T>>();

const props = defineProps<DataTable.Component.Wrapper.Props<T>>();

const emits = defineEmits<DataTable.Component.Wrapper.Emits<T>>();

const wrapperRef$ = ref<HTMLElement>();

const items = computed(() =>
  new Map$(
    props.items instanceof Map
      ? props.items
      : new Map([...props.items].map((item, index) => [index, item]))
  ).mapWithIndex((item, key, index) => [
    key,
    {
      item: item as DataTable.ItemType<T>,
      index,
      key
    }
  ])
);

const overflowed = signal(false);

const computeOverflowed = () => {
  if (wrapperRef$.value) {
    const { scrollHeight, clientHeight } = wrapperRef$.value;
    overflowed.set(scrollHeight > clientHeight + 1);
  }
};

useResizeObserver(wrapperRef$, computeOverflowed, {
  window
});

watch(overflowed, (value) => emits('overflowed', value), {
  immediate: true
});
</script>

<template>
  <div
    ref="wrapperRef$"
    :class="[
      $style['table-wrapper'],
      $style.wrapper,
      $style.flex,
      $style.vertical,
      overflowed() && $style.overflowed
    ]"
  >
    <template v-for="[key, { item, index }] in items" :key>
      <slot :columns="props.columns" :item="item" :row-index="index" :row-key="key" name="row">
        <DataTableRow @select:row="(event) => emits('select:row', event)" :columns="props.columns" :item="item" :row-index="index" :row-key="key">
          <template #default="cellProps">
            <slot v-bind="cellProps" name="cell">
              <DataTableCell v-bind="cellProps" />
            </slot>
          </template>
        </DataTableRow>
      </slot>
    </template>
  </div>
</template>

<style module scoped lang="scss">
@use '@/assets/styles/modules/wrapper.module' as wrapper;
@use '@/assets/styles/modules/scrollbar.module' as scrollbar;

.table {
  &-wrapper {
    --wrapper-gap: var(--table-wrapper-gap, var(--agh-ref-spacing-100));
    --scrollbar-padding: var(--table-scrollbar-padding, var(--wrapper-container-gap, var(--agh-ref-spacing-100)));

    @include scrollbar.use($offset: var(--scrollbar-padding));

    overflow-y: auto;
    margin: calc(var(--scrollbar-padding) * -1) 0;
    padding: var(--scrollbar-padding) 0;

    &.overflowed {
      padding-right: var(--scrollbar-padding);
    }
  }
}
</style>
