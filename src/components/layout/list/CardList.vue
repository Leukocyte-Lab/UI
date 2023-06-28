<script setup lang="ts">
import { computed, onMounted, onUpdated, ref, watch } from 'vue';
import {
  filter,
  first,
  flatMap,
  groupBy,
  intersectionWith,
  isEmpty,
  isEqual,
  isMatch,
  map,
  orderBy,
  uniq
} from 'lodash-es';
import { computedEager, useResizeObserver } from '@vueuse/core';
import { vOnClickOutside } from '@vueuse/components';

import { signal } from '@/shared/libs/signal';

import BaseList from '@/components/base/BaseList.vue';
import ButtonBox from '@/components/element/button/ButtonBox.vue';
import CardBox from '@/components/element/card/CardBox.vue';
import TextField from '@/components/element/textfield/TextField.vue';
import SelectMenu from '@/components/element/menu/SelectMenu.vue';

import type { ObjectLike } from '@/shared/types/object';
import type { Signal } from '@/shared/libs/signal';
import type { CardList } from './CardList.model';
import { selector } from '@/shared/libs/selector';

defineSlots<{
  default: (props: {
    item: CardList.Props['items'][number];
    index: number;
    selected: boolean;
  }) => JSX.Element;
  footer?: (props: {}) => JSX.Element;
  placeholder?: (props: {}) => JSX.Element;
}>();

const props = withDefaults(defineProps<CardList.Props>(), {
  items: () => [],
  modelValue: ''
});

const emits = defineEmits<{
  (e: 'update:modelValue', option: string): void;
  (e: 'update:sort', option: CardList.SortOption): void;
  (e: 'update:filter', option: CardList.FilterOption[]): void;
  (e: 'update:selected', option: ObjectLike): void;
}>();

const wrapperRef$ = ref<HTMLElement>();

const sortFields = {
  key: 'detail',
  title: '{{ $.label }}',
  content: '{{ $.detail }}',
  icon: 'icon'
};

const filterFields = {
  key: 'value',
  title: '{{ $.value }}'
};

const filterOptions = computedEager<CardList.FilterOption[]>(() =>
  flatMap(
    (props.filterOptions ?? []).map((option) =>
      uniq(map(props.items, option.field)).map((value) => ({ ...option, value }))
    )
  )
);

const localSearch = ref<string>(props.modelValue ?? '');
const search = computed({
  get: () => props.modelValue ?? localSearch.value,
  set: (value) => {
    emits('update:modelValue', value ?? '');

    if (!props.modelValue) {
      localSearch.value = value ?? '';
    }
  }
});

const localSort = ref<CardList.SortOption | undefined>(first(props.sortOptions));
const sort = computed({
  get: () => props.sort ?? localSort.value,
  set: (value) => {
    if (value) {
      closeSortMenu.set(true);
      emits('update:sort', value);

      if (!props.sort) {
        localSort.value = value;
      }
    }
  }
});

const localFilter = ref<CardList.FilterOption[]>([]);
const filters = computed({
  get: () => props.filter ?? localFilter.value,
  set: (value) => {
    emits('update:filter', value ?? []);

    if (!props.filter) {
      localFilter.value = value ?? [];
    }
  }
});

const localSelected = ref<ObjectLike | undefined>();
const selected = computed({
  get: () => props.selected ?? localSelected.value,
  set: (value) => {
    if (value) {
      emits('update:selected', value);

      if (!props.selected) {
        localSelected.value = value;
      }
    }
  }
});

const items = ref<ObjectLike[]>(props.items);

const closeFilterMenu = signal(true);
const closeSortMenu = signal(true);
const overflowed = signal(false);

const computeOverflowed = () => {
  if (wrapperRef$.value) {
    const { scrollHeight, clientHeight } = wrapperRef$.value!;
    overflowed.set(scrollHeight > clientHeight + 1);
  }
};

const toggleMenu = (menuSignal: Signal<boolean>) => menuSignal.update((state) => !state);

const onSelect = (item: ObjectLike) => {
  selected.value = item;
};

const computeItems = () => {
  const markSelected = props.items.map(
    (item: ObjectLike) =>
      ({
        ...item,
        selected: selector(item, props.fields.key) === selector(selected.value, props.fields.key)
      } as ObjectLike)
  );
  const searchItems = filter(markSelected, (item) =>
    selector(item, props.fields.key).includes(search.value)
  );
  const sortedItems = orderBy(
    searchItems,
    [sort.value?.field ?? props.fields.key],
    [sort.value?.direction ?? 'asc']
  );
  const filteredItems = isEmpty(filters.value)
    ? sortedItems
    : intersectionWith(
        ...map(groupBy(filters.value, 'field'), (filters) =>
          flatMap(
            filters.map((rule) =>
              sortedItems.filter((item) => isMatch(item, { [rule.field]: rule.value }))
            )
          )
        ),
        isEqual
      );

  items.value = filteredItems;
};

useResizeObserver(wrapperRef$, computeOverflowed, {
  window
});

onMounted(() => {
  computeItems();
  computeOverflowed();
});

onUpdated(() => {
  computeItems();
  computeOverflowed();
});

watch([sort, filters, search, selected], () => {
  computeItems();
  computeOverflowed();
});
</script>

<template>
  <CardBox
    :class="$style['list-container']"
    purpose="container"
    radius="var(--agh-ref-border-radius-600)"
  >
    <div :class="$style['list-toolbar']">
      <TextField v-model="search" :class="$style['list-toolbar-search']" type="search" />
      <template v-if="props.filterOptions && !isEmpty(props.filterOptions)">
        <div
          :class="$style['list-toolbar-tool']"
          @keydown.esc="closeFilterMenu.set(true)"
          @keydown.enter="closeFilterMenu.set(true)"
          v-on-click-outside="() => closeFilterMenu.set(true)"
        >
          <ButtonBox
            :class="$style['list-toolbar-button']"
            :clicked="!closeFilterMenu()"
            @click="toggleMenu(closeFilterMenu)"
            icon="fa6-solid:filter"
            variant="text"
          />
          <template v-if="filters.length > 0">
            <span :class="$style['list-toolbar-button-deco']">
              {{ filters.length }}
            </span>
          </template>
          <template v-if="!closeFilterMenu()">
            <SelectMenu
              :class="$style['list-toolbar-menu']"
              :fields="filterFields"
              :options="filterOptions"
              :multiple="true"
              v-model="filters"
              label="Filter"
              group-by="label"
            />
          </template>
        </div>
      </template>
      <template v-if="props.sortOptions && !isEmpty(props.sortOptions)">
        <div
          :class="$style['list-toolbar-tool']"
          @keydown.esc="closeSortMenu.set(true)"
          @keydown.enter="closeSortMenu.set(true)"
          v-on-click-outside="() => closeSortMenu.set(true)"
        >
          <ButtonBox
            :class="$style['list-toolbar-button']"
            :icon="sort?.icon ?? 'fa6-solid:arrow-down-wide-short'"
            :clicked="!closeSortMenu()"
            @click="toggleMenu(closeSortMenu)"
            variant="text"
          />
          <template v-if="!closeSortMenu()">
            <SelectMenu
              :class="$style['list-toolbar-menu']"
              :fields="sortFields"
              :options="props.sortOptions"
              v-model="sort"
            />
          </template>
        </div>
      </template>
    </div>
    <div
      ref="wrapperRef$"
      :class="[
        $style['list-wrapper'],
        {
          [$style['overflowed']]: overflowed()
        }
      ]"
    >
      <BaseList :items="items" :group-by="props.groupBy">
        <template #placeholder>
          <!-- @slot Use this placeholder slot to display the placeholder when items are empty -->
          <slot name="placeholder" />
        </template>
        <template v-slot:group="slotProps">
          <label :class="$style['list-item-label']">{{ slotProps.group }}</label>
        </template>
        <template v-slot="slotProps">
          <CardBox
            :class="$style['list-item']"
            :color="slotProps.item.selected ? 'blue' : 'default'"
            :clickable="true"
            @click="onSelect(slotProps.item)"
            radius="var(--agh-ref-border-radius-400)"
          >
            <!-- @slot Use this default slot to access item in items -->
            <slot
              name="default"
              :item="slotProps.item"
              :index="slotProps.index"
              :selected="slotProps.item.selected"
            />
          </CardBox>
        </template>
      </BaseList>
    </div>
    <!-- @slot Use this footer slot -->
    <slot name="footer" />
  </CardBox>
</template>

<style module scoped lang="scss">
@use '@/assets/styles/modules/scrollbar.module' as scrollbar;

.list {
  &-container {
    position: relative;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    padding: var(--agh-ref-spacing-500);
    height: fit-content;
    width: fit-content;
    gap: var(--agh-ref-spacing-500);
  }

  &-toolbar {
    display: flex;
    flex-direction: row;
    gap: var(--agh-ref-spacing-300);
    place-items: center;

    &-search {
      width: 100%;
    }

    &-tool {
      position: relative;
    }

    &-button {
      --button-icon-size: var(--agh-ref-icon-size-300);

      &-deco {
        box-sizing: border-box;
        position: absolute;
        display: flex;
        place-content: center;
        place-items: center;
        right: calc(var(--agh-ref-icon-size-100) * -0.4);
        bottom: calc(var(--agh-ref-icon-size-100) * -0.25);
        font: var(--agh-sys-typeface-label-hl-small);
        font-size: calc(var(--agh-ref-icon-size-100) * 0.6);
        line-height: 1;
        height: calc(var(--agh-ref-icon-size-100) * 0.8);
        width: calc(var(--agh-ref-icon-size-100) * 0.8);
        background-color: var(--agh-ref-color-blue-500);
        color: var(--agh-ref-color-grayscale-100);
        border-radius: 50%;
        border-width: var(--agh-ref-border-width-200);
        background-clip: content-box, padding-box;
      }
    }

    &-menu {
      position: absolute;
      z-index: 100;
      margin-top: var(--agh-ref-spacing-100);
      left: 0;
    }
  }

  &-wrapper {
    @include scrollbar.use($offset: var(--agh-ref-spacing-300));

    position: relative;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    overflow-y: auto;
    margin: calc(var(--agh-ref-spacing-400) * -1);
    margin-top: 0;
    padding: var(--agh-ref-spacing-400);
    padding-top: 0;
    gap: var(--agh-ref-spacing-400);

    &.overflowed {
      margin-right: 0;
    }
  }

  &-item {
    position: relative;
    box-sizing: border-box;
    width: 100%;

    &-label {
      padding-bottom: var(--agh-ref-spacing-100);
      border-bottom: var(--agh-ref-border-width-100) solid var(--agh-ref-color-grayscale-400);
      color: var(--agh-ref-color-grayscale-900);
      font: var(--agh-sys-typeface-label-hl-large);
    }
  }
}
</style>
