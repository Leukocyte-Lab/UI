<script setup lang="ts">
import { computed } from 'vue';
import { vOnClickOutside } from '@vueuse/components';

import ButtonBox from '@/components/element/button/ButtonBox.vue';
import SelectMenu from '@/components/element/menu/SelectMenu.vue';
import { valuesGetter } from '@/shared/libs/fn';
import { parser } from '@/shared/libs/parser';
import { selector } from '@/shared/libs/selector';
import { signal } from '@/shared/libs/signal';

import type { DropDown } from '@/components/element/dropdown/DropDown.model';
import type { ObjectLike } from '@/shared/types/object';

const props = withDefaults(defineProps<DropDown.Props>(), {
  items: () => [],
  level: 'primary',
  variant: 'rounded',
  size: 'medium',
  multiple: false
});

const emits = defineEmits<{
  (e: 'update:modelValue', option: ObjectLike): void;
  (e: 'update:modelValue', options: ObjectLike[]): void;
}>();

const selected = computed({
  get: () => props.modelValue,
  set: (value) => {
    if (!props.multiple) {
      closeMenu.set(true);
    }

    return emits(
      'update:modelValue',
      props.multiple ? (value as ObjectLike) : (value as ObjectLike[])
    );
  }
});

const closeMenu = signal(true);
</script>

<template>
  <div
    v-on-click-outside="() => closeMenu.set(true)"
    :class="[$style['dropdown-container'], $style[size]]"
  >
    <ButtonBox
      @click="closeMenu.update((state) => !state)"
      :bobble="props.multiple ? (selected?.length ?? false) : false"
      :class="[$style['dropdown-button'], $style[size]]"
      :clicked="!closeMenu()"
      :disabled="props.disabled"
      :icon="closeMenu() ? 'fa6-solid:chevron-down' : 'fa6-solid:chevron-up'"
      :label="
        props.multiple
          ? (selected?.length ?? 0) > 0
            ? (props.label ?? props.placeholder)
            : (props.placeholder ?? props.label)
          : ((props.modelValue &&
            (props.fields.title
              ? valuesGetter(props.modelValue, props.fields.title, true)
              : props.fields.key
                ? valuesGetter(props.modelValue, props.fields.key, true)
                : undefined)) ??
            props.label ??
            props.placeholder)
      "
      :level="props.level"
      :size="props.size"
      :variant="props.variant"
    />
    <template v-if="items.length > 0 && !closeMenu()">
      <SelectMenu
        v-model="selected"
        :class="$style['dropdown-menu']"
        :fields="props.fields"
        :group-by="props.groupBy"
        :label="props.label"
        :multiple="props.multiple"
        :options="items"
        :use-search="props.useSearch"
      />
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
    top: calc(100% + var(--agh-ref-spacing-200));
    z-index: 10;
    max-height: var(--dropdown-max-height, var(--agh-sys-list-dropdown-small)) !important;
  }
}
</style>
