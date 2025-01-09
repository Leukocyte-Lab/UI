<script setup lang="ts" generic="T extends DropDown.AcceptableValue">
import { pick } from 'lodash-es';
import { computed, nextTick, ref, watch } from 'vue';
import { vOnClickOutside } from '@vueuse/components';

import type { VNode } from 'vue';
import type { ComponentExposed } from 'vue-component-type-helpers';

import ButtonBox from '@/components/element/button/ButtonBox.vue';
import SelectMenu from '@/components/element/menu/SelectMenu.vue';
import TextField from '@/components/element/textfield/TextField.vue';
import { valuesGetter } from '@/shared/libs/fn';
import { signal, toggleSignal } from '@/shared/libs/signal';

import type { DropDown } from '@/components/element/dropdown/DropDown.model';

const slots = defineSlots<{
  default?: (props: {
    index: string | number;
    multiple: boolean;
    option: DropDown.Option<T>;
    clearSelection: () => void;
  }) => VNode;
  header?: (props: {
    selection: DropDown.Props<T>['modelValue'];
    multiple: boolean;
    useSearch?: boolean;
    searchQuery?: string;
    result?: Map<string | number, T>;
    label?: string;
    clearSelection: () => void;
  }) => VNode;
  footer?: (props: {
    selection: DropDown.Props<T>['modelValue'];
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

const props = withDefaults(defineProps<DropDown.Props<T>>(), {
  level: 'primary',
  variant: 'rounded',
  size: 'medium',
  multiple: false,
  labelShowAs: 'auto',
  menuPosition: 'bottom-right'
});

const emits = defineEmits<DropDown.Emits<T>>();

const selection = defineModel<DropDown.Props<T>['modelValue']>({
  required: true
});
const query = defineModel<string>('query', {
  default: ''
});
const newOptionValue = defineModel<string>('newOptionValue', {
  default: ''
});

const selectMenuRef$ = ref<ComponentExposed<typeof SelectMenu>>();
const textFieldRef$ = ref<ComponentExposed<typeof TextField>>();
const createItemValidityState = ref<ValidityState>();

const onShowMenu = signal(false);
const onCreate = signal(false);
const onCreateInProgress = signal(false);

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
            (props.fields?.title
              ? valuesGetter(props.modelValue as T, props.fields.title, true)
              : props.fields?.key
                ? valuesGetter(props.modelValue as T, props.fields.key, true)
                : String(props.modelValue))) ??
          props.label ??
          props.placeholder))
);
const icon = computed(
  () =>
    ((props.variant.includes('square') || props.labelShowAs === 'icon') &&
    !props.multiple &&
    selection.value
      ? props.modelValue && props.fields?.icon
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

const clickOutsideHandler = () => {
  if (props.useCreate && !onCreateInProgress()) {
    onShowMenu.set(false);
    onCreate.set(false);
    newOptionValue.value = '';
  } else {
    onShowMenu.set(false);
  }
};

const createItemHandler = () => {
  if (createItemValidityState.value?.valid && newOptionValue.value !== '') {
    onCreateInProgress.set(true);
    emits(
      'create',
      newOptionValue.value,
      // onFinish
      (option) => {
        reset();
        onShowMenu.set(false);
        onCreate.set(false);
        onCreateInProgress.set(false);
        newOptionValue.value = '';
        selection.value = option;
      },
      // onError
      () => {
        onCreateInProgress.set(false);
        setTimeout(() => {
          textFieldRef$.value?.inputRef$?.focus();
          textFieldRef$.value?.inputRef$?.dispatchEvent(
            new Event('input', {
              bubbles: true
            })
          );
        }, 100);
      }
    );
  }
};

const createItemValidityStateHandler = (validity: ValidityState) => {
  createItemValidityState.value = validity;
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

watch(
  onCreate,
  (state) => {
    if (state) {
      clearSearch();
      onShowMenu.set(false);
      newOptionValue.value = '';

      // eslint-disable-next-line promise/catch-or-return
      Promise.allSettled([
        nextTick(),
        new Promise<void>((resolve) => {
          setTimeout(() => {
            resolve();
          }, 100);
        })
      ]).finally(() => {
        onShowMenu.set(false);
        nextTick(() => {
          textFieldRef$.value?.inputRef$?.focus();
        });
      });
    }
  },
  { immediate: true, flush: 'post' }
);

watch(
  () => props.useCreate && props.createInProgress,
  (state) => {
    if (state !== undefined) {
      onCreateInProgress.set(state);
    }
  },
  {
    immediate: true
  }
);

defineExpose({
  reset,
  clearSearch,
  clearSelection,
  onShowMenu
});
</script>

<template>
  <div
    v-on-click-outside="clickOutsideHandler"
    :class="[
      $style['dropdown-container'],
      $style.wrapper,
      $style.behavior,
      $style.flex,
      $style[size],
      {
        [$style.extend]: props.useCreate,
        [$style.loading]: props.useCreate && onCreateInProgress()
      },
      onCreate() ? $style.horizontal : $style.vertical
    ]"
  >
    <template v-if="onCreate() && props.useCreate">
      <TextField
        ref="textFieldRef$"
        v-model="newOptionValue"
        v-bind="
          pick(props as DropDown.TextFieldInheritProps, [
            'type',
            'autocomplete',
            'autofocus',
            'maxlength',
            'minlength',
            'pattern',
            'max',
            'min',
            'spellcheck',
            'invalidMessage'
          ])
        "
        @keydown.enter.capture="createItemHandler"
        @keydown.escape="clickOutsideHandler"
        @validation="createItemValidityStateHandler"
        :class="$style['dropdown-textfield']"
        :disabled="props.disabled || onCreateInProgress()"
        :event-signal-options="props.eventSignalOptions ?? { flush: 'sync', debounce: 100 }"
        :placeholder="props.createPlaceholder"
      />
      <div
        :class="[
          $style['dropdown-textfield-toolbox'],
          $style.wrapper,
          $style.flex,
          $style.horizontal
        ]"
      >
        <ButtonBox
          @click="clickOutsideHandler"
          :class="$style.button"
          :disabled="onCreateInProgress()"
          icon="fa6-solid:xmark"
          level="secondary"
          size="small"
          variant="square"
        />
        <ButtonBox
          @click="createItemHandler"
          :class="$style.button"
          :clicked="onCreateInProgress()"
          :disabled="createItemValidityState?.valid !== true || !newOptionValue"
          :icon="onCreateInProgress() ? '' : 'fa6-solid:check'"
          :loading="onCreateInProgress()"
          size="small"
          variant="square"
        />
      </div>
    </template>
    <template v-else>
      <ButtonBox
        @click="toggleSignal(onShowMenu)"
        :bobble="bobbleCount"
        :class="[$style['dropdown-button'], $style[size], $style[props.variant]]"
        :clicked="onShowMenu()"
        :disabled="props.disabled"
        :icon
        :label
        :level="props.level"
        :size="props.size"
        :variant="props.variant"
      />
    </template>
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
        :clearable="props.clearable"
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
        <template v-if="slots['no-match-placeholder']" #no-match-placeholder="{ groupName }">
          <slot :group-name="groupName" name="no-match-placeholder" />
        </template>
        <template
          v-if="slots.header"
          #header="{ selection, multiple, useSearch, searchQuery, result, label }"
        >
          <slot
            :clear-selection="clearSelection"
            :label="label"
            :multiple="multiple"
            :result="result"
            :search-query="searchQuery"
            :selection="selection"
            :use-search="useSearch"
            name="header"
          />
        </template>
        <template v-if="slots.default" #default="{ index, multiple, option }">
          <slot
            :clear-selection="clearSelection"
            :index="index"
            :multiple="multiple"
            :option="option"
          />
        </template>
        <template
          v-if="slots.footer || props.useCreate"
          #footer="{ selection, multiple, useSearch, searchQuery, result, label }"
        >
          <slot
            :clear-selection="clearSelection"
            :label="label"
            :multiple="multiple"
            :result="result"
            :search-query="searchQuery"
            :selection="selection"
            :use-search="useSearch"
            name="footer"
          />
          <template v-if="props.useCreate">
            <ButtonBox
              @click="onCreate.set(true)"
              :class="[
                $style.button,
                {
                  [$style.active]: onCreate()
                }
              ]"
              :label="props.alterStr?.create || 'Add New'"
              icon="fa6-solid:plus"
              variant="text"
            />
          </template>
        </template>
      </SelectMenu>
    </template>
  </div>
</template>

<style module scoped lang="scss">
@use '@/assets/styles/modules/wrapper.module' as wrapper;
@use '@/assets/styles/modules/behavior.module' as behavior;

.dropdown {
  &-container {
    --wrapper-gap: var(--agh-ref-spacing-200);

    width: fit-content;
    height: fit-content;
    place-items: center;

    &.large,
    &.extend {
      width: 100%;
      min-width: var(--agh-sys-list-dropdown-small);

      > .dropdown {
        &-menu,
        &-button,
        &-textfield {
          width: 100%;
        }

        &-button {
          justify-content: space-between;
        }
      }
    }

    &.loading {
      > * {
        pointer-events: none;
      }
    }
  }

  &-button {
    width: fit-content;
    padding: var(--agh-ref-spacing-50) var(--agh-ref-spacing-200);

    &.rect {
      padding: var(--agh-ref-spacing-200) var(--agh-ref-spacing-300);
    }
  }

  &-textfield {
    :deep(input) {
      border-radius: var(--agh-ref-border-radius-400);
      padding: var(--agh-ref-spacing-200) var(--agh-ref-spacing-300);
      color: var(--agh-ref-color-blue-500);
      font: var(
        --button-font,
        var(--dropdown-textfield-font, var(--agh-sys-typeface-label-hl-medium))
      );
      padding-right: calc(var(--agh-ref-spacing-200) * 3 + var(--agh-ref-spacing-600) * 2);
    }

    &-toolbox {
      position: absolute !important;
      right: var(--agh-ref-spacing-200);
    }
  }

  &-menu {
    position: absolute !important;
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

    .button {
      width: 100%;
      padding: calc(var(--agh-ref-spacing-300) - var(--agh-ref-border-width-50))
        calc(var(--menu-padding) + var(--agh-ref-spacing-300));
      place-content: start;
      border-top: var(--agh-ref-border-width-50) solid var(--agh-ref-color-grayscale-500);

      &:hover {
        border-color: transparent;
        background-color: var(--agh-ref-color-blue-500) !important;
        color: var(--agh-ref-color-grayscale-100) !important;
      }

      &.active {
        background-color: var(--agh-ref-color-blue-600) !important;
        color: var(--agh-ref-color-grayscale-100) !important;
      }
    }
  }
}
</style>
