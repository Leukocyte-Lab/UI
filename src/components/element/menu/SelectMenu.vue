<script setup lang="ts">
import { filter, flatMap, fromPairs, groupBy, map, omit, toPairs } from 'lodash-es';
import { onMounted, ref } from 'vue';
import { Icon } from '@iconify/vue/offline';
import { computedEager, useResizeObserver } from '@vueuse/core';

import ButtonBox from '@/components/element/button/ButtonBox.vue';
import CardBox from '@/components/element/card/CardBox.vue';
import TextField from '@/components/element/textfield/TextField.vue';
import { parser } from '@/shared/libs/parser';
import { selector } from '@/shared/libs/selector';
import { signal } from '@/shared/libs/signal';

import type { SelectMenu } from '@/components/element/menu/SelectMenu.model';
import type { Signal } from '@/shared/libs/signal';
import type { ObjectLike } from '@/shared/types/object';

const props = withDefaults(defineProps<SelectMenu.Props>(), {
  multiple: false
});

const emits = defineEmits<{
  (e: 'update:modelValue', option: ObjectLike): void;
  (e: 'update:modelValue', options: ObjectLike[]): void;
}>();

const wrapperRef$ = ref<HTMLElement>();
const search = ref('');

const groups = computedEager(() =>
  fromPairs(
    toPairs(groupBy(props.options, props.groupBy ?? '')).map(([group, options]) => [
      group === 'undefined' ? '' : group,
      options.map((option) =>
        signal<ObjectLike>({
          ...option,
          matched:
            String(selector(option, props.fields.key)).includes(search.value) ||
            String(selector(option, props.fields.title)).includes(search.value),
          selected: Boolean(
            props.multiple
              ? map(props.modelValue, props.fields.key).includes(selector(option, props.fields.key))
              : selector(option, props.fields.key) ===
                  selector(props.modelValue as ObjectLike, props.fields.key)
          )
        })
      )
    ])
  )
);

const overflowed = signal(false);

const computeOverflowed = () => {
  if (wrapperRef$.value) {
    const { scrollHeight, clientHeight } = wrapperRef$.value!;
    overflowed.set(scrollHeight > clientHeight + 1);
  }
};

const onSelect = (option: Signal<ObjectLike>) => {
  option.update((option) => ({
    ...option,
    selected: !option.selected
  }));

  if (props.multiple) {
    emits(
      'update:modelValue',
      flatMap(
        map(groups.value, (options) =>
          options.map((option) => option()).filter((option) => option.selected)
        )
      )
    );
  } else {
    emits('update:modelValue', option());
  }
};

const clickSelection = () => {
  if (props.multiple) {
    emits('update:modelValue', []);
  } else {
    emits('update:modelValue', {});
  }
};

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
            @click="clickSelection()"
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
      <template v-for="(options, group) in groups" :key="group">
        <div
          :class="[
            $style['menu-group'],
            {
              [$style['classify']]: props.groupBy
            }
          ]"
        >
          <template v-if="group">
            <label :class="$style['menu-group-label']" name="">{{ group }}</label>
          </template>
          <template v-for="(option, index) in options" :key="`option-${index}`">
            <template v-if="search !== '' ? option().matched : true">
              <div
                @click="selector(option(), props.fields.disabled) ? null : onSelect(option)"
                :class="[
                  $style['menu-option'],
                  $style['behavior'],
                  selector(option(), props.fields.disabled)
                    ? [$style['disabled']]
                    : $style['clickable'],
                  {
                    [$style['selected']]: option().selected,
                    [$style['multiple']]: props.multiple
                  }
                ]"
              >
                <template v-if="props.multiple">
                  <Icon
                    :class="$style['menu-option-icon']"
                    :icon="option().selected ? 'fa6-solid:square-check' : 'fa6-regular:square'"
                  />
                </template>
                <template v-if="props.fields.icon">
                  <Icon
                    :class="$style['menu-option-icon']"
                    :icon="String(selector(option(), props.fields.icon))"
                  />
                </template>
                <div :class="$style['menu-option-group']">
                  <template v-if="!props.fields.title">
                    <p :class="$style['menu-field']">
                      {{ selector(option(), props.fields.key) }}
                    </p>
                  </template>
                  <template
                    v-for="field in omit(props.fields, ['key', 'icon', 'disabled', 'searchKeys'])"
                    :key="`option-field-${field}`"
                  >
                    <template v-if="field">
                      <p :class="$style['menu-field']">
                        {{ parser(option(), String(field)) }}
                      </p>
                    </template>
                  </template>
                </div>
              </div>
            </template>
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
