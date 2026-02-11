<script setup lang="ts" generic="T extends LargeDataTable.AcceptedTypes">
import { computed, markRaw, nextTick, ref, shallowRef, triggerRef, useTemplateRef, watch } from 'vue';
import { useResizeObserver } from '@vueuse/core';

import { ItemCarrier } from './LargeDataTable.helpers';

import DataTableCell from '@/components/layout/table/data-table/DataTableCell.vue';
import DataTableRow from '@/components/layout/table/data-table/DataTableRow.vue';
import { useEventDebounceSignal } from '@/shared/libs/event';
import Map$ from '@/shared/libs/map';
import Math$ from '@/shared/libs/math';
import { signal } from '@/shared/libs/signal';

import type { LargeDataTable } from '@/components/layout/table/large-data-table/LargeDataTable.model';
import type { Callback } from '@/shared/types/callback';

const slots = defineSlots<LargeDataTable.Component.Wrapper.Slots<T>>();

const props = defineProps<LargeDataTable.Component.Wrapper.Props<T>>();

const emits = defineEmits<LargeDataTable.Component.Wrapper.Emits<T>>();

// Chrome's max element height is ~33,554,432px (2^25). Use a safe limit.
const MAX_SCROLL_HEIGHT = 16_777_216; // 2^24, safe margin under browser limit

const wrapperRef$ = useTemplateRef('wrapperRef$');
const cursor = ref(0);
const gapSize = ref(0);
const itemHeightSet = ref(new Set<number>());
const itemCarrier = shallowRef<ItemCarrier>(new ItemCarrier());
const firstSizeChangedItemIndex = ref<number>(-1);

const visualItemHeight = computed(() => {
  if (itemHeightSet.value.size === 0) {
    return props.defaultRowHeight ?? 32;
  }
  const value = Math$.geoavg(...itemHeightSet.value);
  return Number.isFinite(value) ? value : (props.defaultRowHeight ?? 32);
});
const threshold = computed(() => props.visibleSize ?? 50);
const bufferSize = computed(() => props.bufferSize ?? 10);
const items = computed(() =>
  new Map$(
    props.items instanceof Map
      ? props.items
      : new Map([...props.items].map((item, index) => [index, item]))
  ).mapWithIndex((item, key, index) => [
    index,
    markRaw({
      index,
      item: item as LargeDataTable.ItemType<T>,
      key: key as LargeDataTable.KeyType<T>,
      get attrs() {
        return itemCarrier.value.getAttrs(index);
      },
      get status() {
        return itemCarrier.value.getStatus(index);
      }
    })
  ])
);
const totalItems = computed(() => props.totalItems ?? items.value.size);
const visibleItems = computed(() => items.value.filter(({ status }) => status.visible));
const activeItems = computed(() => {
  const result = new Map$<number, LargeDataTable.ItemCarrier.Model<T>>();
  for (let i = cursor.value; i < Math.min(cursor.value + threshold.value, items.value.size); i++) {
    const item = items.value.get(i);
    if (item) result.set(i, item);
  }
  return markRaw(result);
});
const visualHeight = computed(() =>
  items.value.reduce(
    ({ prefix, subfix, active }, { status, attrs, index }) => {
      if (index < cursor.value) {
        if (status.measured) {
          prefix += attrs.height + gapSize.value;
        } else {
          prefix += visualItemHeight.value + gapSize.value;
        }
      } else if (index >= cursor.value + threshold.value) {
        if (status.measured) {
          subfix += attrs.height + gapSize.value;
        } else {
          subfix += visualItemHeight.value + gapSize.value;
        }
      } else {
        active += status.measured ? attrs.height : visualItemHeight.value;
      }

      return { prefix, subfix, active, total: prefix + subfix + active };
    },
    { prefix: 0, subfix: 0, active: 0, total: 0 }
  )
);
const scrollRatio = computed(() => {
  if (visualHeight.value.total > MAX_SCROLL_HEIGHT) {
    return MAX_SCROLL_HEIGHT / (visualHeight.value.total - visualHeight.value.active);
  } else {
    return 1;
  }
});
const visualPrefixHeight = computed(() => visualHeight.value.prefix * scrollRatio.value);
const visualSuffixHeight = computed(() => visualHeight.value.subfix * scrollRatio.value);
const updateFunction = computed(() =>
  props.lazyUpdate && 'requestIdleCallback' in globalThis
    ? (cb: Callback) => globalThis.requestIdleCallback(cb)
    : (cb: Callback) => globalThis.requestAnimationFrame(cb)
);

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

// Feature detection for scrollend event
const supportsScrollEnd = 'onscrollend' in document.createElement('div');

const scrollHandler = (event: Event) => {
  const target = event.target as HTMLElement;
  const visibleHeight = target.clientHeight;
  const scrollTop = target.scrollTop;
  const realScrollTop = scrollTop - visualPrefixHeight.value;
  const visualScrollTop = realScrollTop + visualPrefixHeight.value / scrollRatio.value;

  const needUpdate = Array.prototype.reduce.call(
    target.querySelectorAll(':scope > [data-table-row]'),
    (needUpdate, element: HTMLElement, index, { length }) => {
      const itemIndex = index + cursor.value;

      const dimensionChanged = calcItemDimension(element, itemIndex, index, length);
      const statusChanged = calcItemStatus(itemIndex, visualScrollTop, visibleHeight);
      return needUpdate || dimensionChanged || statusChanged;
    },
    false
  );

  if (needUpdate || visibleItems.value.size <= bufferSize.value) {
    updateFunction.value(() => {
      calcCursorByScrollTop(visualScrollTop, visibleHeight);
    });
  }

  if (needUpdate) {
    updateFunction.value(() => {
      triggerRef(items);
    });
  }
  
  // Fallback for browsers without scrollend support
  if (!supportsScrollEnd && visibleItems.value.size <= bufferSize.value) {
    triggerScroll(target, scrollTop);
  }
};

const scrollEndHandler = (event: Event) => {
  const target = event.target as HTMLElement;
  const scrollTop = target.scrollTop;

  if (visibleItems.value.size <= bufferSize.value) {
    triggerScroll(target, scrollTop);
  }
}

// Calc Dimension and position of item, and determine if it needs to update the dimension and position of the item and the following items. Return true if the item or any of the following items need to update, otherwise return false.
const calcItemDimension = (
  element: HTMLElement,
  itemIndex: number,
  index: number,
  length: number
): boolean => {
  const elementRect = element.getBoundingClientRect();
  const { measured } = itemCarrier.value.getStatus(itemIndex);
  const { height } = itemCarrier.value.getAttrs(itemIndex);

  const elHeight = ItemCarrier.convertToSamePrecision(elementRect.height);

  const heightChanged = measured && elHeight !== height;
  const dimensionChanged =
    itemIndex > 0 &&
    measured &&
    firstSizeChangedItemIndex.value !== -1 &&
    itemIndex >= firstSizeChangedItemIndex.value;

  if (!measured || heightChanged || dimensionChanged) {
    itemCarrier.value.setAttrs(itemIndex, {
      height: elHeight
    });

    itemHeightSet.value.add(elHeight);

    if (itemIndex > 0) {
      const { measured } = itemCarrier.value.getStatus(itemIndex - 1);
      const { bottom } = itemCarrier.value.getAttrs(itemIndex - 1);

      itemCarrier.value.setAttrs(itemIndex, {
        top: (measured ? bottom : (visualItemHeight.value + gapSize.value) * itemIndex * scrollRatio.value)
      });
    }

    itemCarrier.value.setStatus(itemIndex, {
      measured: true
    });

    if (heightChanged && firstSizeChangedItemIndex.value === -1) {
      firstSizeChangedItemIndex.value = itemIndex;
    }
  }

  if (firstSizeChangedItemIndex.value !== -1 && index === length - 1) {
    firstSizeChangedItemIndex.value = -1;
  }

  return !measured || heightChanged || dimensionChanged;
};

// Calc visibility status of item, and determine if it needs to update the visibility status of the item. Return true if the visibility status of the item needs to update, otherwise return false.
const calcItemStatus = (
  itemIndex: number,
  visualScrollTop: number,
  visibleHeight: number
): boolean => {
  const { visible, measured } = itemCarrier.value.getStatus(itemIndex);

  if (!measured) {
    throw new Error(
      `Item at index ${itemIndex} has not been measured yet. Cannot calculate status.`
    );
  }

  const { top, bottom } = itemCarrier.value.getAttrs(itemIndex);

  if (bottom < visualScrollTop) {
    if (visible) {
      itemCarrier.value.setStatus(itemIndex, { visible: false });
      return true;
    }
  } else if (top > visualScrollTop + visibleHeight) {
    if (visible) {
      itemCarrier.value.setStatus(itemIndex, { visible: false });
      return true;
    }
  } else if (bottom > visualScrollTop && top < visualScrollTop + visibleHeight) {
    if (!visible) {
      itemCarrier.value.setStatus(itemIndex, { visible: true });
      return true;
    }
  } else {
    if (!visible) {
      itemCarrier.value.setStatus(itemIndex, { visible: true });
      return true;
    }
  }

  return false;
};

const calcCursorByScrollTop = (visualScrollTop: number, visibleHeight: number): boolean => {
  if (visibleItems.value.size <= threshold.value - bufferSize.value) {
    const firstVisibleItemIndex = items.value.reduce(
      ({ height, index }, { status, attrs, index: itemIndex }) => {
        const itemHeight = status.measured ? attrs.height : visualItemHeight.value;
        height += itemHeight + gapSize.value;

        if (index === 0 && height >= visualScrollTop && height < visualScrollTop + visibleHeight) {
          return { height, index: itemIndex };
        } else {
          return { height, index };
        }
      },
      { height: 0, index: 0 }
    ).index;

    const newCursor = Math.max(0, firstVisibleItemIndex - bufferSize.value);

    if (newCursor !== cursor.value) {
      cursor.value = newCursor;
      return true;
    } else {
      return false;
    }
  }

  return false;
};

const triggerScroll = (el: HTMLElement, startPos: number = 0) => {
  nextTick(() => {
    el.scrollTo({ top: startPos + 1 });
    el.scrollTo({ top: startPos - 1 });
    el.scrollTo({ top: startPos });
  });
}

const { onTrigger: onTriggerScroll } = useEventDebounceSignal(scrollHandler, {
  debounce: 10,
  flush: 'sync',
  syncWithDebounce: true
});

const { onTrigger: onTriggerScrollEnd } = useEventDebounceSignal(scrollEndHandler, {
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

watch(
  [threshold, totalItems],
  ([threshold, totalItems]) => {
    itemCarrier.value = new ItemCarrier({ 
      visibleSize: threshold, 
      totalItems,
      bufferSize: props.bufferSize
    });
  },
  {
    immediate: true
  }
);

watch(overflowed, (value) => emits('overflowed', value), {
  immediate: true
});

const resetScroll = watch(
  wrapperRef$,
  (el) => {
    if (el) {
      triggerScroll(el);
      resetScroll.stop();
    }
  },
  {
    immediate: true,
    flush: 'post'
  }
);
</script>

<template>
  <div
    ref="wrapperRef$"
    @scroll.capture="onTriggerScroll"
    @scrollend.capture="supportsScrollEnd ? onTriggerScrollEnd : undefined"
    :class="[
      $style['table-wrapper'],
      $style.wrapper,
      $style.flex,
      $style.vertical,
      overflowed() && $style.overflowed
    ]"
  >
    <template v-for="[key, { item, index }] in activeItems" :key="key">
      <slot :columns="props.columns" :item="item" :row-index="index" :row-key="key" name="row">
        <DataTableRow
          @select:row="(event) => emits('select:row', event)"
          :columns="props.columns"
          :item="item"
          :row-index="index"
          :row-key="key"
          data-table-row
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
