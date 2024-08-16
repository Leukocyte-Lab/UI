<script setup lang="ts" generic="T extends SelectMenu.AcceptableValue">
import { groupBy, isEqual, omit } from 'lodash-es';
import { computed, type ModelRef, onMounted, ref, watch } from 'vue';
import { Icon } from '@iconify/vue/offline';
import { useResizeObserver } from '@vueuse/core';

import ButtonBox from '@/components/element/button/ButtonBox.vue';
import CardBox from '@/components/element/card/CardBox.vue';
import TextField from '@/components/element/textfield/TextField.vue';
import { booleanGetter, valuesGetter } from '@/shared/libs/fn';
import Map$ from '@/shared/libs/map';
import { useSearch } from '@/shared/libs/search';
import { signal, toggleSignal } from '@/shared/libs/signal';

import type { SelectMenu } from '@/components/element/menu/SelectMenu.model';

const TRIGGER_SYMBOL = Symbol('TRIGGER');

const props = withDefaults(defineProps<SelectMenu.Props<T>>(), {
  multiple: false
});

const selection = defineModel<SelectMenu.Props<T>['modelValue']>({
  required: true
});

const wrapperRef$ = ref<HTMLElement>();

const selectedFields = computed(
  () =>
    new Map(
      [...[selection.value ?? []].flat().entries()].map(([, option]) => [
        typeof option === 'object' && !Array.isArray(options) && !(option instanceof Map)
          ? fieldParser(option).key
          : option,
        option
      ])
    )
);
const options = computed(() =>
  Array.isArray(props.options)
    ? new Map(props.options.map((option, index) => [index, option]))
    : new Map(props.options)
);

const { result, query: search } = useSearch(options, {
  getters: props.fields.searchKeys ?? []
});

const datasets = computed(() =>
  new Map$(result.value as Map<string | number, T>)
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
        selected: signal(selectedFields.value.has(field.key))
      } as SelectMenu.Option<T>
    ])
    .map((payload, key) => [
      key,
      {
        get [TRIGGER_SYMBOL]() {
          return payload.selected();
        },
        ...payload
      }
    ])
);

const groups = computed(() => groupBy(datasets.value.toArray('entries'), '[1].field.group'));

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
  key: valuesGetter(option, props.fields.key),
  group: props.groupBy ? (valuesGetter(option, props.groupBy, true) ?? '') : '',
  disabled: props.fields.disabled
    ? (booleanGetter(option, props.fields.disabled, true) ?? false) || false
    : false
});

const switchSignals = (index: string | number, value: boolean) => {
  datasets.value.forEach((dataset, key) =>
    dataset.selected.set(!(Number(key === index) ^ Number(value)))
  );
};

watch(
  [datasets, selection],
  ([datasets, current], [, pre]) => {
    if (isEqual(current, pre)) {
      return;
    }

    datasets.forEach((option, key) => {
      if (props.multiple) {
        if (selection.value instanceof Map) {
          if (option.selected() && !option.field.disabled) {
            (selection as ModelRef<Map<string | number, T>, string>).value.set(key, option.payload);
          } else {
            (selection as ModelRef<Map<string | number, T>, string>).value.delete(key);
          }
        }
      } else {
        if (option.selected() && !option.field.disabled) {
          selection.value = option.payload;
        }
      }
    });

    if (Array.isArray(selection.value)) {
      (selection as ModelRef<T[], string>).value = datasets
        .filter((option) => option.selected() && !option.field.disabled)
        .map(({ payload }, key) => [key, payload])
        .toArray('values');
    }
  },
  {
    deep: true,
    immediate: true
  }
);

useResizeObserver(wrapperRef$, computeOverflowed, {
  window
});

onMounted(() => {
  computeOverflowed();
});
</script>

<template>
  <CardBox
    :class="[
      $style['menu-container'],
      {
        [$style['classify']]: props.groupBy
      }
    ]"
    :radius="'var(--agh-ref-border-radius-500)'"
  >
    <template v-if="props.label || props.multiple">
      <header :class="$style['menu-header']">
        <h1 :class="$style['title']">
          {{ props.label }}
        </h1>
        <template v-if="props.multiple">
          <ButtonBox
            @click="clearSelection"
            :class="$style['button']"
            :icon="'fa6-solid:eraser'"
            :label="'Clear Selection'"
            :variant="'text'"
          />
        </template>
      </header>
    </template>
    <template v-if="props.useSearch">
      <TextField v-model="search" :class="$style['menu-search']" type="search" />
    </template>
    <div
      ref="wrapperRef$"
      :class="[
        $style['menu-wrapper'],
        {
          [$style['overflowed']]: overflowed()
        }
      ]"
    >
      <template v-for="(group, name) in groups" :key="group">
        <div
          :class="[
            $style['menu-group'],
            {
              [$style['classify']]: props.groupBy
            }
          ]"
        >
          <template v-if="props.groupBy && name">
            <label :class="$style['menu-group-label']">{{ name }}</label>
          </template>
          <template v-for="[index, { selected, field }] in group" :key="`option-${index}`">
            <div
              @click="
                !field.disabled &&
                  (props.multiple ? toggleSignal(selected) : switchSignals(index, true))
              "
              :class="[
                $style['menu-option'],
                $style['behavior'],
                field.disabled ? [$style['disabled']] : $style['clickable'],
                {
                  [$style['selected']]: selected(),
                  [$style['multiple']]: props.multiple
                }
              ]"
            >
              <template v-if="props.multiple">
                <Icon
                  :class="$style['menu-option-icon']"
                  :icon="selected() ? 'fa6-solid:square-check' : 'fa6-regular:square'"
                />
              </template>
              <template v-if="props.fields.icon">
                <Icon :class="$style['menu-option-icon']" :icon="field.icon ?? ''" />
              </template>
              <div :class="$style['menu-option-group']">
                <template
                  v-for="(context, key) in omit(field, ['key', 'icon', 'disabled', 'group'])"
                  :key="`option-field-${key}`"
                >
                  <template v-if="context">
                    <p :class="$style['menu-field']">
                      {{ context }}
                    </p>
                  </template>
                </template>
              </div>
            </div>
          </template>
          <div :class="$style['menu-group-placeholder']">
            <p>No Data</p>
          </div>
        </div>
      </template>
    </div>
  </CardBox>
</template>

<style module scoped lang="scss">
@use '@/assets/styles/modules/behavior.module' as behavior;
@use '@/assets/styles/modules/scrollbar.module' as scrollbar;

.menu {
  &-container {
    position: relative;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    width: var(--agh-sys-list-dropdown-small);
    height: fit-content;
    max-height: calc(var(--agh-sys-list-dropdown-small) * 2);
    padding: 0 var(--agh-ref-spacing-100);
    box-shadow: var(--agh-sys-effects-shadow-pop-up);
    overflow: hidden;

    > :first-child {
      margin-top: var(--agh-ref-spacing-100);
    }

    &.classify {
      padding: 0 var(--agh-ref-spacing-300);

      > .menu-header {
        margin-bottom: var(--agh-ref-spacing-400);
        padding: 0;
      }

      > :first-child {
        margin-top: var(--agh-ref-spacing-300);
      }
    }
  }

  &-header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: var(--agh-ref-spacing-200);
    padding: var(--agh-ref-spacing-100);

    > .title {
      font: var(--agh-sys-typeface-label-hl-large);
    }

    > .button {
      font: var(--agh-sys-typeface-label-hl-medium);
    }
  }

  &-search {
    width: 100%;
    height: 28px; // TODO: Missing token
    margin-bottom: var(--agh-ref-spacing-400);
  }

  &-wrapper {
    @include scrollbar.use($offset: var(--agh-ref-spacing-200));

    position: relative;
    display: flex;
    flex-direction: column;
    overflow-y: auto;

    &.overflowed {
      border-right: var(--agh-ref-border-width-200) solid transparent;
      padding-right: var(--agh-ref-spacing-200);
    }
  }

  &-option {
    position: relative;
    display: flex;
    flex-direction: row;
    place-items: center;
    padding: var(--agh-ref-spacing-200) var(--agh-ref-spacing-300);
    gap: var(--agh-ref-spacing-200);
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
      display: flex;
      flex-direction: column;
      gap: var(--agh-ref-spacing-50);
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
    position: relative;
    display: flex;
    flex-direction: column;
    gap: var(--agh-ref-spacing-50);

    &::before {
      content: '';
      background-color: var(--agh-ref-color-grayscale-400);
      margin: var(--agh-ref-spacing-400) 0;
      height: var(--agh-ref-border-width-50);
      width: 100%;
    }

    &:first-of-type {
      &::before {
        display: none;
      }
    }

    &:last-child {
      margin-bottom: calc(var(--agh-ref-spacing-100) - var(--box-border-width));

      &.classify {
        margin-bottom: var(--agh-ref-spacing-300);
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
