<script setup lang="ts" generic="T extends SelectMenu.AcceptableValue">
import { groupBy, omit } from 'lodash-es';
import { computed, onMounted, ref } from 'vue';
import { Icon } from '@iconify/vue/offline';
import { useResizeObserver } from '@vueuse/core';

import type { ModelRef, VNode } from 'vue';

import ButtonBox from '@/components/element/button/ButtonBox.vue';
import CardBox from '@/components/element/card/CardBox.vue';
import TextField from '@/components/element/textfield/TextField.vue';
import { booleanGetter, valuesGetter } from '@/shared/libs/fn';
import Map$ from '@/shared/libs/map';
import { useSearch } from '@/shared/libs/search';
import { signal } from '@/shared/libs/signal';

import type { SelectMenu } from '@/components/element/menu/SelectMenu.model';
import type { Search } from '@/shared/libs/search';

const slots = defineSlots<{
  default?: (props: {
    index: string | number;
    multiple: boolean;
    option: SelectMenu.Option<T>;
    clearSelection: () => void;
  }) => VNode;
  header?: (props: {
    selection: SelectMenu.Props<T>['modelValue'];
    multiple: boolean;
    useSearch?: boolean;
    searchQuery?: string;
    result?: Map<string | number, T>;
    label?: string;
    clearSelection: () => void;
  }) => VNode;
  footer?: (props: {
    selection: SelectMenu.Props<T>['modelValue'];
    multiple: boolean;
    useSearch?: boolean;
    searchQuery?: string;
    result?: Map<string | number, T>;
    label?: string;
    clearSelection: () => void;
  }) => VNode;
  'clear-selection'?: (props: { clearSelection: () => void }) => VNode;
  'empty-placeholder'?: (props: { groupName?: string | number }) => VNode;
  'no-match-placeholder'?: (props: { groupName?: string | number }) => VNode;
}>();

const props = defineProps<SelectMenu.Props<T>>();

const selection = defineModel<SelectMenu.Props<T>['modelValue']>({
  required: true
});
const searchQuery = defineModel<string>('query', {
  default: ''
});

const wrapperRef$ = ref<HTMLElement>();

const options = computed(
  () =>
    new Map$(
      Array.isArray(props.options)
        ? props.options.map((option, index) => [index, option])
        : props.options
    )
);
const selectedFields = computed(() =>
  props.multiple
    ? new Map$(
        Array.isArray(selection.value)
          ? new Map<number, T>(selection.value.map((option, index) => [index, option]))
          : selection.value instanceof Map
            ? new Map(selection.value)
            : new Map<string | number, T>()
      ).map((option) => [fieldParser(option).key, options])
    : fieldParser(selection.value as T).key
);

const { result, reset: clearSearch } = useSearch(options, {
  query: searchQuery,
  getters:
    props.fields?.searchKeys ??
    ((props.fields?.key ?? props.fields?.title)
      ? [props.fields?.key ?? '', props.fields?.title ?? ''].filter(Boolean)
      : [(option: unknown) => String(option)]),
  options: props.useSearch
    ? ({
        caseSensitive: props.caseSensitive,
        phraseSearch: props.phraseSearch,
        strict: props.strict,
        segmentPattern: props.segmentPattern,
        relevanceSearch: props.relevanceSearch,
        threshold: props.threshold,
        sortBy: props.sortBy,
        limit: props.limit
      } as Search.Options)
    : undefined
});

const datasets = computed(() =>
  options.value
    .map((option, key) => [
      key,
      {
        payload: option,
        field: fieldParser(option)
      }
    ])
    .map(({ payload, field }, key) => [
      key,
      {
        payload,
        field,
        get selected() {
          return props.multiple && selectedFields.value instanceof Map
            ? selectedFields.value.has(field.key)
            : selectedFields.value === field.key;
        },
        get matched() {
          return result.value.has(key);
        }
      } as SelectMenu.Option<T>
    ])
);

const groups = computed(() =>
  groupBy(
    datasets.value
      .filter(({ matched }) => (props.useSearch && props.showAll) || matched)
      .toArray('entries'),
    '[1].field.group'
  )
);

const overflowed = signal(false);

const computeOverflowed = () => {
  if (wrapperRef$.value) {
    const { scrollHeight, clientHeight } = wrapperRef$.value!;
    overflowed.set(scrollHeight > clientHeight + 1);
  }
};

const clearSelection = () => {
  if (props.multiple) {
    selection.value = Array.isArray(props.options) ? [] : new Map();
  } else {
    selection.value = undefined;
  }
};

const fieldParser = (option: T): SelectMenu.Option<T>['field'] => ({
  ...Object.fromEntries(
    Object.entries(omit(props.fields, ['key', 'searchKeys', 'disabled'])).map(([field, getter]) => [
      field,
      valuesGetter(option, getter, true)
    ])
  ),
  key: props.fields?.key ? valuesGetter(option, props.fields.key) : String(option),
  group: props.groupBy ? (valuesGetter(option, props.groupBy, true) ?? '') : '',
  disabled: props.fields?.disabled
    ? (booleanGetter(option, props.fields.disabled, true) ?? false) || false
    : false
});

const toggleSelection = (index: string | number, option: SelectMenu.Option<T>) => {
  if (props.multiple) {
    if (!option.field.disabled) {
      if (props.options instanceof Map) {
        if (!option.selected) {
          (selection as ModelRef<Map<string | number, T>>).value.set(index, option.payload);
        } else {
          (selection as ModelRef<Map<string | number, T>>).value.delete(option.field.key);
        }
      } else {
        if (!option.selected) {
          (selection as ModelRef<T[]>).value = datasets.value
            .filter((option, key) => index === key || option.selected)
            .toArray('values')
            .map(({ payload }) => payload);
        } else {
          (selection as ModelRef<T[]>).value = datasets.value
            .filter((option, key) => index !== key && option.selected)
            .toArray('values')
            .map(({ payload }) => payload);
        }
      }
    }
  } else {
    if (!option.field.disabled) {
      selection.value = option.payload;
    }
  }
};

const reset = () => {
  clearSearch();
  clearSelection();
};

useResizeObserver(wrapperRef$, computeOverflowed, {
  window
});

onMounted(() => {
  computeOverflowed();
});

defineExpose({
  reset,
  clearSearch,
  clearSelection
});
</script>

<template>
  <CardBox
    :class="[
      $style['menu-container'],
      $style.wrapper,
      $style.flex,
      $style.vertical,
      props.groupBy && $style['classify']
    ]"
    :radius="'var(--agh-ref-border-radius-500)'"
  >
    <template v-if="props.label || props.multiple || props.useSearch || slots.header">
      <header
        :class="[
          $style['menu-header'],
          $style.wrapper,
          $style.flex,
          $style.horizontal,
          $style.wrap
        ]"
      >
        <slot
          :clear-selection="clearSelection"
          :label="props.label"
          :multiple="props.multiple"
          :result
          :search-query
          :selection
          :use-search="props.useSearch"
          name="header"
        >
          <template v-if="props.label || props.multiple">
            <h1 :class="$style['title']">
              {{ props.label }}
            </h1>
            <template v-if="props.multiple || props.clearable">
              <slot :clear-selection="clearSelection" name="clear-selection">
                <ButtonBox
                  @click="clearSelection"
                  :class="$style['button']"
                  :icon="'fa6-solid:eraser'"
                  :label="props.alterStr?.clearSelection || 'Clear Selection'"
                  :variant="'text'"
                />
              </slot>
            </template>
          </template>
          <template v-if="props.useSearch">
            <TextField
              v-model="searchQuery"
              :class="$style['menu-search']"
              inputmode="search"
              type="search"
            />
          </template>
        </slot>
      </header>
    </template>
    <div
      ref="wrapperRef$"
      :class="[
        $style['menu-wrapper'],
        $style.wrapper,
        $style.flex,
        $style.vertical,
        overflowed() && $style['overflowed']
      ]"
    >
      <template v-for="(group, name) in groups" :key="name">
        <div
          :class="[
            $style['menu-group'],
            $style.wrapper,
            $style.flex,
            $style.vertical,
            props.groupBy && $style['classify']
          ]"
        >
          <template v-if="props.groupBy && name">
            <label :class="$style['menu-group-label']">{{ name }}</label>
          </template>
          <template
            v-for="[index, { selected, matched, field, payload }] in group"
            :key="`option-${field.key}`"
          >
            <template v-if="matched">
              <div
                @click="!field.disabled && toggleSelection(index, { selected, field, payload })"
                :class="[
                  $style['menu-option'],
                  $style.wrapper,
                  $style.flex,
                  $style.horizontal,
                  $style['behavior'],
                  field.disabled ? [$style['disabled']] : $style['clickable'],
                  selected && $style['selected'],
                  props.multiple && $style['multiple']
                ]"
              >
                <slot
                  :clear-selection="clearSelection"
                  :index="index"
                  :multiple="props.multiple"
                  :option="{ selected, matched, field, payload }"
                >
                  <template v-if="props.multiple">
                    <Icon
                      :class="$style['menu-option-icon']"
                      :icon="selected ? 'fa6-solid:square-check' : 'fa6-regular:square'"
                    />
                  </template>
                  <template v-if="props.fields?.icon">
                    <Icon :class="$style['menu-option-icon']" :icon="field.icon ?? ''" />
                  </template>
                  <div :class="$style['menu-option-group']">
                    <p :class="$style['menu-field']">
                      {{ field.title || field.key }}
                    </p>
                    <template v-if="field.content">
                      <p :class="$style['menu-field']">
                        {{ field.content }}
                      </p>
                    </template>
                  </div>
                </slot>
              </div>
            </template>
          </template>
          <div :class="$style['menu-group-placeholder']">
            <slot :group-name="name" name="no-match-placeholder">
              <p>{{ props.alterStr?.noMatched || 'No Matched Data' }}</p>
            </slot>
          </div>
        </div>
      </template>
    </div>
    <template v-if="options.size === 0">
      <div :class="$style['menu-placeholder']">
        <slot name="empty-placeholder">
          <p>{{ props.alterStr?.noData || 'No Data' }}</p>
        </slot>
      </div>
    </template>
    <template v-else-if="props.useSearch && !props.showAll && result.size === 0">
      <div :class="$style['menu-placeholder']">
        <slot name="no-match-placeholder">
          <p>{{ props.alterStr?.noMatched || 'No Matched Data' }}</p>
        </slot>
      </div>
    </template>
    <slot
      :clear-selection="clearSelection"
      :label="props.label"
      :multiple="props.multiple"
      :result
      :search-query
      :selection
      :use-search="props.useSearch"
      name="footer"
    />
  </CardBox>
</template>

<style module scoped lang="scss">
@use '@/assets/styles/modules/wrapper.module' as wrapper;
@use '@/assets/styles/modules/behavior.module' as behavior;
@use '@/assets/styles/modules/scrollbar.module' as scrollbar;

.menu {
  &-container {
    --menu-padding: var(--agh-ref-spacing-100);
    --wrapper-gap: var(--menu-padding);

    &:has(> header > .menu-search):not(.classify) {
      --wrapper-gap: 0;
    }

    width: var(--agh-sys-list-dropdown-small);
    height: fit-content;
    max-height: calc(var(--agh-sys-list-dropdown-small) * 2);
    box-shadow: var(--agh-sys-effects-shadow-pop-up);
    overflow: hidden;

    > :first-child {
      margin-top: var(--menu-padding);
    }

    &.classify {
      --menu-padding: var(--agh-ref-spacing-300);

      > .menu-header {
        &:has(> .title) {
          padding: var(--agh-ref-spacing-100) var(--menu-padding);
        }

        &:has(> .menu-search) {
          & + * {
            padding-top: calc(var(--menu-padding)) !important;
          }
        }
      }
    }
  }

  &-header {
    --wrapper-gap: var(--agh-ref-spacing-200);

    place-items: center;
    place-content: space-between;
    padding: calc(var(--agh-ref-spacing-100) - var(--menu-padding)) var(--menu-padding);

    &:has(> .title) {
      padding: var(--agh-ref-spacing-100) calc(var(--menu-padding) * 2);

      &:has(> .menu-search) {
        & + * {
          padding-top: calc(var(--menu-padding)) !important;
        }
      }
    }

    &:has(> .menu-search) {
      & + * {
        padding-top: calc(var(--agh-ref-spacing-100) + var(--menu-padding)) !important;
      }
    }

    > .title {
      font: var(--agh-sys-typeface-label-hl-large);
      display: inline-flex;
      width: fit-content;
    }

    > .button {
      font: var(--agh-sys-typeface-label-hl-medium);
      display: inline-flex !important;
      text-align: right;
    }
  }

  &-search {
    flex-shrink: 0;
    width: 100%;
    height: 28px; // TODO: Missing token
    margin-bottom: calc(var(--agh-ref-spacing-100) * -1);
  }

  &-placeholder {
    color: var(--agh-ref-color-grayscale-600);
    font: var(--agh-sys-typeface-label-default-large);
    padding: var(--menu-padding) calc(var(--menu-padding) * 2);
  }

  &-wrapper {
    --menu-bottom-offset: var(--box-border-width);

    @include scrollbar.use($offset: var(--agh-ref-spacing-200));

    overflow-y: auto;
    padding: 0 var(--menu-padding);

    &.overflowed {
      border-right: calc(var(--agh-ref-border-width-200) + var(--agh-ref-spacing-200) / 2) solid
        transparent;
      padding-right: calc(var(--agh-ref-spacing-200) + var(--menu-padding));
    }

    &:has(+ *) {
      --menu-bottom-offset: 0px;
    }

    & + * {
      margin-top: calc(var(--wrapper-gap) * -1);
    }
  }

  &-option {
    --wrapper-gap: var(--agh-ref-spacing-200);

    place-items: center;
    padding: var(--agh-ref-spacing-200) var(--agh-ref-spacing-300);
    border: transparent solid var(--agh-ref-border-width-50);
    border-radius: var(--agh-ref-border-radius-400);

    & + .menu-group-placeholder {
      display: none;
    }

    &.disabled {
      opacity: var(--agh-ref-opacity-300);
    }

    &:not(.disabled, .selected) {
      &:hover,
      &.hover {
        background-color: var(--agh-ref-color-grayscale-200);
        border-color: var(--agh-ref-color-grayscale-300);
      }
    }

    &.selected {
      background-color: var(--agh-sys-color-blue-surface-dim);
      border-color: var(--agh-ref-color-blue-300);

      &.multiple {
        color: var(--agh-ref-color-blue-500);

        .menu {
          &-field {
            color: var(--agh-ref-color-blue-400);

            &:first-of-type {
              color: var(--agh-ref-color-blue-500);
            }
          }
        }
      }
    }

    &-group {
      --wrapper-gap: var(--agh-ref-spacing-50);
    }
  }

  &-field {
    color: var(--agh-ref-color-grayscale-800);
    font: var(--agh-sys-typeface-label-default-small);

    &:first-of-type {
      flex-shrink: 0;
      color: var(--agh-ref-color-grayscale-1000);
      font: var(--agh-sys-typeface-label-hl-medium);
    }
  }

  &-group {
    --wrapper-gap: var(--agh-ref-spacing-50);

    &::before {
      content: '';
      background-color: var(--agh-ref-color-grayscale-400);
      margin-bottom: var(--menu-padding);
      height: var(--agh-ref-border-width-50);
      width: 100%;
    }

    &:first-of-type {
      &::before {
        display: none;
      }
    }

    &:last-child {
      margin-bottom: calc(var(--agh-ref-spacing-100) - var(--menu-bottom-offset));

      &.classify {
        margin-bottom: calc(var(--agh-ref-spacing-300) - var(--menu-bottom-offset));
      }
    }

    &-label {
      margin-bottom: var(--agh-ref-spacing-100);
      color: var(--agh-ref-color-grayscale-600);
      font: var(--agh-sys-typeface-label-hl-small);
    }

    &-placeholder {
      color: var(--agh-ref-color-grayscale-600);
      font: var(--agh-sys-typeface-label-default-large);
    }
  }
}
</style>
