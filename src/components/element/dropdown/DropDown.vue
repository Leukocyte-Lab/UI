<script setup lang="ts" generic="T extends DropDown.AcceptableValue">
import { computed, ref, watch } from 'vue';
import { vOnClickOutside } from '@vueuse/components';

import type { VNode } from 'vue';
import type { ComponentExposed } from 'vue-component-type-helpers';

import ButtonBox from '@/components/element/button/ButtonBox.vue';
import SelectMenu from '@/components/element/menu/SelectMenu.vue';
import { valuesGetter } from '@/shared/libs/fn';
import { signal, toggleSignal } from '@/shared/libs/signal';

import type { DropDown } from '@/components/element/dropdown/DropDown.model';

const slots = defineSlots<{
  'clear-selection'?: (props: { clearSelection: () => void }) => VNode;
  'empty-placeholder'?: (props: { groupName: string | number }) => VNode;
}>();

const props = withDefaults(defineProps<DropDown.Props<T>>(), {
  level: 'primary',
  variant: 'rounded',
  size: 'medium',
  multiple: false,
  labelShowAs: 'auto',
  menuPosition: 'bottom-right'
});

const selection = defineModel<DropDown.Props<T>['modelValue']>({
  required: true
});
const query = defineModel<string>('query', {
  default: ''
});

const selectMenuRef$ = ref<ComponentExposed<typeof SelectMenu>>();

const onShowMenu = signal(false);

const bobbleCount = computed(() =>
  props.multiple && selection.value
    ? Array.isArray(selection.value)
      ? selection.value.length
      : selection.value instanceof Map
        ? selection.value.size
        : false
    : false
);
const optionsCount = computed(() =>
  Array.isArray(props.options)
    ? props.options.length
    : props.options instanceof Map
      ? props.options.size
      : 0
);
const label = computed(() =>
  props.labelShowAs === 'icon'
    ? undefined
    : (props.labelShowAs !== 'auto' ? props[props.labelShowAs] : undefined) ||
      (props.multiple
        ? (bobbleCount.value || 0) > 0
          ? (props.label ?? props.placeholder)
          : (props.placeholder ?? props.label)
        : ((props.modelValue &&
            (props.fields.title
              ? valuesGetter(props.modelValue as T, props.fields.title, true)
              : props.fields.key
                ? valuesGetter(props.modelValue as T, props.fields.key, true)
                : undefined)) ??
          props.label ??
          props.placeholder))
);
const icon = computed(
  () =>
    ((props.variant.includes('square') || props.labelShowAs === 'icon') &&
    !props.multiple &&
    selection.value
      ? props.modelValue && props.fields.icon
        ? valuesGetter(props.modelValue as T, props.fields.icon, true)
        : undefined
      : undefined) || (onShowMenu() ? 'fa6-solid:chevron-up' : 'fa6-solid:chevron-down')
);

const clearSearch = () => {
  selectMenuRef$.value?.clearSearch();
  query.value = '';
};

const clearSelection = () => {
  selectMenuRef$.value?.clearSelection();
  selection.value = props.multiple ? [] : undefined;
};

const reset = () => {
  clearSearch();
  clearSelection();
};

watch([selection, () => props.multiple], ([selection, multiple]) => {
  if (!multiple && selection) {
    onShowMenu.set(false);
  }
});

watch(onShowMenu, (state) => {
  if (state && !props.persist) {
    clearSearch();
  }
});

defineExpose({
  reset,
  clearSearch,
  clearSelection,
  onShowMenu
});
</script>

<template>
  <div
    v-on-click-outside="() => onShowMenu.set(false)"
    :class="[$style['dropdown-container'], $style[size]]"
  >
    <ButtonBox
      @click="toggleSignal(onShowMenu)"
      :bobble="bobbleCount"
      :class="[$style['dropdown-button'], $style[size]]"
      :clicked="onShowMenu()"
      :disabled="props.disabled"
      :icon
      :label
      :level="props.level"
      :size="props.size"
      :variant="props.variant"
    />
    <template v-if="optionsCount > 0 && onShowMenu()">
      <!-- @vue-ignore // ? NOTE: SelectMenu will handle generic type ? // -->
      <SelectMenu
        ref="selectMenuRef$"
        v-model="selection"
        v-model:query="query"
        @select:fields="selectedFields = $event"
        :alter-str="props.alterStr"
        :case-sensitive="props.caseSensitive"
        :class="[$style['dropdown-menu'], $style[props.menuPosition]]"
        :fields="props.fields"
        :group-by="props.groupBy"
        :label="props.label"
        :limit="props.limit"
        :multiple="props.multiple"
        :options="props.options"
        :phrase-search="props.phraseSearch"
        :relevant-search="props.relevantSearch"
        :segment-pattern="props.segmentPattern"
        :show-all="props.showAll"
        :sort-by="props.sortBy"
        :strict="props.strict"
        :threshold="props.threshold"
        :use-search="props.useSearch"
      >
        <template
          v-if="slots['clear-selection']"
          #clear-selection="{ clearSelection: clearMenuSelection }"
        >
          <slot :clear-selection="clearMenuSelection" name="clear-selection" />
        </template>
        <template v-if="slots['empty-placeholder']" #empty-placeholder="{ groupName }">
          <slot :group-name="groupName" name="empty-placeholder" />
        </template>
      </SelectMenu>
    </template>
  </div>
</template>

<style module scoped lang="scss">
.dropdown {
  &-container {
    position: relative;
    display: flex;
    flex-direction: column;
    width: fit-content;
    height: fit-content;

    &.large {
      width: 100%;
      min-width: var(--agh-sys-list-dropdown-small);

      > .dropdown {
        &-menu,
        &-button {
          width: 100%;
        }
      }
    }
  }

  &-button {
    width: fit-content;
    padding: var(--agh-ref-spacing-50) var(--agh-ref-spacing-200);

    &.large {
      justify-content: space-between;
    }
  }

  &-menu {
    position: absolute;
    z-index: 10;
    max-height: var(--dropdown-max-height, var(--agh-sys-list-dropdown-small)) !important;

    &.top-left,
    &.top-right {
      bottom: calc(100% + var(--agh-ref-spacing-200));
    }

    &.bottom-left,
    &.bottom-right {
      top: calc(100% + var(--agh-ref-spacing-200));
    }

    &.top-left,
    &.bottom-left {
      right: 0;
    }

    &.top-right,
    &.bottom-right {
      left: 0;
    }
  }
}
</style>
