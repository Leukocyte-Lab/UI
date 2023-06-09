<script setup lang="ts">
import { computedEager } from '@vueuse/core';
import { flatMap, fromPairs, groupBy, map, omit, toPairs } from 'lodash-es';
import { Icon } from '@iconify/vue/offline';

import { signal } from '@/shared/libs/signal';
import { parser } from '@/shared/libs/parser';
import { selector } from '@/shared/libs/selector';

import CardBox from '@/components/element/card/CardBox.vue';

import type { Signal } from '@/shared/libs/signal';
import type { ObjectLike } from '@/shared/types/object';

namespace SelectMenu {
  export type Fields = {
    key: string;
    title?: string;
    content?: string;
    icon?: string;
  };
  export type Props = {
    options: ObjectLike<any>[];
    fields: Fields;
    value?: ObjectLike<any> | ObjectLike<any>[];
    groupBy?: string;
    label?: string;
    multiple?: boolean;
  };
}

const props = withDefaults(
  defineProps<
    SelectMenu.Props & {
      modelValue?: SelectMenu.Props['value'];
    }
  >(),
  {
    multiple: false
  }
);

const emits = defineEmits<{
  (e: 'update:modelValue', option: ObjectLike): void;
  (e: 'update:modelValue', options: ObjectLike[]): void;
}>();

const groups = computedEager(() =>
  fromPairs(
    toPairs(groupBy(props.options, props.groupBy ?? '')).map(([group, options]) => [
      group === 'undefined' ? '' : group,
      options.map((option) =>
        signal<ObjectLike<any>>({
          ...option,
          selected: Boolean(
            props.multiple
              ? map(props.value, props.fields.key).includes(selector(option, props.fields.key))
              : selector(option, props.fields.key) ===
                  selector(props.value as ObjectLike<any>, props.fields.key)
          )
        })
      )
    ])
  )
);

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
</script>

<template>
  <CardBox
    :class="[
      $style['menu-container'],
      {
        [$style['group']]: props.groupBy
      }
    ]"
    :radius="'var(--agh-ref-border-radius-500)'"
  >
    <template v-if="props.label || props.multiple">
      <header :class="$style['menu-header']">
        <h1 :class="$style['title']">{{ props.label }}</h1>
        <template v-if="props.multiple">
          <ButtonBox
            :class="$style['button']"
            :label="'Clear Selection'"
            :icon="'fa6-solid:eraser'"
            :variant="'text'"
            @click="clickSelection()"
          />
        </template>
      </header>
    </template>
    <template v-for="(options, group) in groups" :key="group">
      <div :class="$style['menu-wrapper']">
        <template v-if="group">
          <label :class="$style['menu-group-label']" name="">{{ group }}</label>
        </template>
        <template v-for="(option, index) in options" :key="`option-${index}`">
          <div
            :class="[
              $style['menu-option'],
              $style['behavior'],
              $style['clickable'],
              {
                [$style['selected']]: option().selected,
                [$style['multiple']]: props.multiple
              }
            ]"
            @click="onSelect(option)"
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
                :icon="selector(option(), props.fields.icon)"
              />
            </template>
            <div :class="$style['menu-option-group']">
              <template v-if="!props.fields.title">
                <p :class="$style['menu-field']">
                  {{ selector(option(), props.fields.key) }}
                </p>
              </template>
              <template
                v-for="field in omit(props.fields, ['key', 'icon'])"
                :key="`option-field-${field}`"
              >
                <template v-if="field">
                  <p :class="$style['menu-field']">
                    {{ parser(option(), field) }}
                  </p>
                </template>
              </template>
            </div>
          </div>
        </template>
      </div>
    </template>
  </CardBox>
</template>

<style module scoped lang="scss">
@use '@/assets/styles/modules/behavior.module' as behavior;

.menu {
  &-container {
    position: relative;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    width: var(--agh-sys-gadget-searchbar-width-small);
    height: fit-content;
    max-height: calc(var(--agh-sys-gadget-searchbar-width-small) * 2);
    padding: var(--agh-ref-spacing-100);
    box-shadow: var(--agh-sys-effects-shadow-pop-up);
    overflow: hidden;

    &.group {
      padding: var(--agh-ref-spacing-300);
    }
  }

  &-wrapper {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: var(--agh-ref-spacing-50);

    &:before {
      content: '';
      background-color: var(--agh-ref-color-grayscale-400);
      margin: var(--agh-ref-spacing-400) 0;
      height: var(--agh-ref-border-width-50);
      width: 100%;
    }

    &:first-of-type {
      &:before {
        display: none;
      }
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

    &:hover,
    &.hover {
      background-color: var(--agh-ref-color-grayscale-200);
      border-color: var(--agh-ref-color-grayscale-300);
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
    &-label {
      margin-bottom: var(--agh-ref-spacing-100);
      color: var(--agh-ref-color-grayscale-600);
      font: var(--agh-sys-typeface-label-hl-small);
    }
  }
}
</style>
