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
  bufferSize?: number;
};

const slots = defineSlots<DataTable.Component.Wrapper.Slots<T>>();

const props = defineProps<DataTable.Component.Wrapper.Props<T> & LargeDataTableWrapperProps>();

const emits = defineEmits<DataTable.Component.Wrapper.Emits<T>>();

// Chrome's max element height is ~33,554,432px (2^25). Use a safe limit.
const MAX_SCROLL_HEIGHT = 16_777_216; // 2^24, safe margin under browser limit

const wrapperRef$ = useTemplateRef('wrapperRef$');
// Track the first rendered item index directly
const renderStartIndex = ref(0);
const gapSize = ref(0);
const itemHeightSet = ref(new Set<number>());
const itemHeightMap = ref(new Map$<number, number>(new Map$()));

const visualItemHeight = computed(() => {
  const value = Math.min(...itemHeightSet.value);
  return Number.isFinite(value) ? value : (props.defaultRowHeight ?? 32);
});
const itemHeightWithGap = computed(() => visualItemHeight.value + gapSize.value);
const threshold = computed(() => props.visibleSize ?? 50);
const bufferSize = computed(() => props.bufferSize ?? 10);
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

// Precompute a stable, index-addressable view of items so that cursor/threshold
// changes only touch the sliced window instead of walking the whole Map.
const itemEntries = computed(() => Array.from(items.value.entries()));

const totalItems = computed(() => props.totalItems ?? items.value.size);

// Calculate the theoretical total height if we rendered all items
const theoreticalTotalHeight = computed(() => totalItems.value * itemHeightWithGap.value);

// Determine if we need to use scroll ratio mode (when total height exceeds browser limit)
const useScrollRatio = computed(() => theoreticalTotalHeight.value > MAX_SCROLL_HEIGHT);

// The effective max scrollable height (capped at browser limit)
const effectiveMaxHeight = computed(() =>
  useScrollRatio.value ? MAX_SCROLL_HEIGHT : theoreticalTotalHeight.value
);

// Total render window size (visible + buffers on both ends)
const renderWindowSize = computed(() => threshold.value + bufferSize.value * 2);

// End index for rendering
const renderEndIndex = computed(() => 
  Math.min(renderStartIndex.value + renderWindowSize.value, totalItems.value)
);

// Actual number of items to render
const totalRenderCount = computed(() => renderEndIndex.value - renderStartIndex.value);

const visibleItems = computed(
  () =>
    new Map(
      itemEntries.value.slice(renderStartIndex.value, renderEndIndex.value)
    )
);

// Prefix height: virtual space for items BEFORE renderStartIndex
const visualPrefixHeight = computed(() => {
  if (useScrollRatio.value) {
    // In scroll ratio mode, map position proportionally within max height
    const ratio = renderStartIndex.value / Math.max(totalItems.value, 1);
    const renderedHeight = totalRenderCount.value * itemHeightWithGap.value;
    const virtualSpace = Math.max(0, effectiveMaxHeight.value - renderedHeight);
    return Math.floor(ratio * virtualSpace);
  }
  // Normal mode: exact pixel calculation for items not rendered
  return renderStartIndex.value * itemHeightWithGap.value;
});

// Suffix height: virtual space for items AFTER renderEndIndex
const visualSuffixHeight = computed(() => {
  const remainingItems = totalItems.value - renderEndIndex.value;
  
  if (useScrollRatio.value) {
    // In scroll ratio mode, map position proportionally within max height
    const ratio = remainingItems / Math.max(totalItems.value, 1);
    const renderedHeight = totalRenderCount.value * itemHeightWithGap.value;
    const virtualSpace = Math.max(0, effectiveMaxHeight.value - renderedHeight);
    return Math.floor(ratio * virtualSpace);
  }
  // Normal mode: exact pixel calculation
  return remainingItems * itemHeightWithGap.value;
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

  // Update height measurements for rendered items (skip spacer divs at start and end)
  const startIndex = renderStartIndex.value;
  const children = Array.from(target.children).slice(1, -1); // Skip spacer divs
  children.forEach((element, index) => {
    const itemIndex = startIndex + index;
    const height = (element as HTMLElement).getBoundingClientRect().height;
    itemHeightMap.value.set(itemIndex, height);
    itemHeightSet.value.add(height);
  });

  // Calculate the scroll position relative to the rendered items
  // scrollTop = prefixHeight + offset within rendered items
  const prefixHeight = visualPrefixHeight.value;
  const suffixHeight = visualSuffixHeight.value;
  const renderedHeight = totalRenderCount.value * itemHeightWithGap.value;
  const scrollWithinRendered = scrollTop - prefixHeight;
  
  // Check if scroll position is completely outside the rendered area
  // This happens when user jumps via scrollbar to a distant position
  const isOutsideRenderedArea = scrollWithinRendered < 0 || scrollWithinRendered > renderedHeight;
  
  let visibleStartIndex: number;
  
  if (isOutsideRenderedArea) {
    // User jumped to a position outside rendered area - calculate from global position
    // Use ratio-based calculation to find approximate position
    const totalScrollableHeight = prefixHeight + renderedHeight + suffixHeight;
    const scrollRatio = totalScrollableHeight > 0 ? scrollTop / totalScrollableHeight : 0;
    visibleStartIndex = Math.floor(scrollRatio * totalItems.value);
  } else {
    // Normal case: calculate which item index corresponds to this scroll position
    // The rendered items start at renderStartIndex, so we add that offset
    const renderedItemHeight = itemHeightWithGap.value;
    const offsetWithinRendered = Math.floor(scrollWithinRendered / renderedItemHeight);
    visibleStartIndex = renderStartIndex.value + offsetWithinRendered;
  }

  // Calculate desired render start (visible start minus buffer)
  const desiredRenderStart = Math.max(0, visibleStartIndex - bufferSize.value);
  
  // Use hysteresis: only update if we've scrolled past the buffer zone
  // This prevents jittery updates when scrolling within the buffer
  // But always update immediately if we jumped outside the rendered area
  const scrolledPastTop = visibleStartIndex < renderStartIndex.value + Math.floor(bufferSize.value / 2);
  const scrolledPastBottom = visibleStartIndex > renderStartIndex.value + bufferSize.value + Math.floor(bufferSize.value / 2);
  
  if (isOutsideRenderedArea || scrolledPastTop || scrolledPastBottom) {
    renderStartIndex.value = Math$.clamp(
      desiredRenderStart,
      0,
      Math.max(0, totalItems.value - renderWindowSize.value)
    );
  }
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
      overflowed() && $style.overflowed
    ]"
  >
    <template v-if="visualPrefixHeight">
      <!-- Virtual spacer for items before render window -->
      <div :style="{ height: `${visualPrefixHeight}px`, flexShrink: 0 }" aria-hidden="true" />
    </template>
    <template v-for="[key, { item, index }] in visibleItems" :key="key">
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
    <template v-if="visualSuffixHeight">
      <!-- Virtual spacer for items after render window -->
      <div :style="{ height: `${visualSuffixHeight}px`, flexShrink: 0 }" aria-hidden="true" />
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
  }
}
</style>
