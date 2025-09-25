<script setup lang="ts" generic="T extends DataTable.AcceptedTypes">
import { computed, ref, useTemplateRef, watch } from 'vue';
import { useResizeObserver } from '@vueuse/core';

import DataTableCell from '@/components/layout/table/data-table/DataTableCell.vue';
import DataTableRow from '@/components/layout/table/data-table/DataTableRow.vue';
import { Map$, Math$, signal } from '@/shared';
import { useEventDebounceSignal } from '@/shared/libs/event';

import type { DataTable } from '@/components/layout/table/data-table/DataTable.model';

type LargeDataTableWrapperProps = {
  totalItems?: number;
  visibleSize?: number;
  nested?: boolean;
  defaultRowHeight?: number;
};

const slots = defineSlots<DataTable.Component.Wrapper.Slots<T>>();

const props = defineProps<DataTable.Component.Wrapper.Props<T> & LargeDataTableWrapperProps>();

const emits = defineEmits<DataTable.Component.Wrapper.Emits<T>>();

const wrapperRef$ = useTemplateRef('wrapperRef$');
const cursor = ref(0);
const gapSize = ref(0);
const itemHeightSet = ref(new Set<number>());
const itemHeightMap = ref(new Map$<number, number>(new Map$()));

const visualItemHeight = computed(() => {
  const value = Math.min(...itemHeightSet.value);
  return Number.isFinite(value) ? value : (props.defaultRowHeight ?? 32);
});
const threshold = computed(() => props.visibleSize ?? 20);
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
const visibleItems = computed(() =>
  items.value.filter(({ index }) => index >= cursor.value && index < cursor.value + threshold.value)
);
const totalItems = computed(() => props.totalItems ?? items.value.size);
const visualPrefixHeight = computed(() => {
  const itemNeedEstimate = itemHeightMap.value.filter((_, index) => index < cursor.value);
  const height =
    visualItemHeight.value * Math.max(cursor.value - itemNeedEstimate.size, 0) +
    [...itemNeedEstimate.values()].reduce((a, b) => a + b, 0);
  const gap = gapSize.value * cursor.value;

  return height + gap;
});
const visualSuffixHeight = computed(() => {
  const remainingItems = totalItems.value - (cursor.value + threshold.value);
  const height = visualItemHeight.value * remainingItems;
  const gap = gapSize.value * remainingItems;
  return height + gap;
});

const overflowed = signal(false);

const computeOverflowed = () => {
  if (wrapperRef$.value) {
    const { scrollHeight, clientHeight } = wrapperRef$.value;
    overflowed.set(scrollHeight > clientHeight + 1);
  }
};

const computeGapSize = () => {
  if (wrapperRef$.value) {
    gapSize.value =
      parseFloat(globalThis.getComputedStyle(wrapperRef$.value).getPropertyValue('row-gap')) || 0;
  }
};

const scrollHandler = (event: Event) => {
  const target = event.target as HTMLElement;
  const scrollTop = target.scrollTop;

  Array.prototype.forEach.call(target.children, (element: HTMLElement, index) => {
    itemHeightMap.value.set(index + cursor.value, element.getBoundingClientRect().height);
    itemHeightSet.value.add(element.getBoundingClientRect().height);
  });

  const expectedIndex =
    Math.floor((scrollTop - visualPrefixHeight.value) / (visualItemHeight.value + gapSize.value)) +
    cursor.value;

  cursor.value = Math$.clamp(expectedIndex, 0, totalItems.value - threshold.value);
};

const { onTrigger } = useEventDebounceSignal(scrollHandler, {
  debounce: 10,
  flush: 'sync',
  syncWithDebounce: true
});

useResizeObserver(
  wrapperRef$,
  () => {
    computeGapSize();
    computeOverflowed();
  },
  {
    window
  }
);

watch(overflowed, (value) => emits('overflowed', value), {
  immediate: true
});
</script>

<template>
  <div
    ref="wrapperRef$"
    @scroll.capture="onTrigger"
    :class="[
      $style['table-wrapper'],
      $style.wrapper,
      $style.flex,
      $style.vertical,
      {
        [$style.overflowed]: overflowed()
      }
    ]"
  >
    <template v-for="[key, { item, index }] in visibleItems" :key>
      <slot :columns="props.columns" :item="item" :row-index="index" :row-key="key" name="row">
        <DataTableRow
          @select:row="(event) => emits('select:row', event)"
          :columns="props.columns"
          :item="item"
          :row-index="index"
          :row-key="key"
        >
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
    --scrollbar-padding: var(
      --table-scrollbar-padding,
      var(--wrapper-container-gap, var(--agh-ref-spacing-100))
    );

    @include scrollbar.use($offset: var(--scrollbar-padding));

    overflow-y: auto;
    margin: calc(var(--scrollbar-padding) * -1) 0;
    padding: var(--scrollbar-padding) 0;

    &.overflowed {
      padding-right: var(--scrollbar-padding);
    }

    > :first-child {
      margin-top: calc(v-bind('visualPrefixHeight') * 1px);
    }

    > :last-child {
      margin-bottom: calc(v-bind('visualSuffixHeight') * 1px);
    }
  }
}
</style>
