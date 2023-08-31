<script setup lang="ts">
import { computed } from 'vue';
import { vOnClickOutside } from '@vueuse/components';

import SelectMenu from '@/components/element/menu/SelectMenu.vue';
import ButtonBox from '@/components/element/button/ButtonBox.vue';

import { selector } from '@/shared/libs/selector';
import { signal } from '@/shared/libs/signal';

import type { DropDown } from '@/components/element/dropdown/DropDown.model';
import type { ObjectLike } from '@/shared/types/object';

const props = withDefaults(defineProps<DropDown.Props>(), {
  items: () => [],
  level: 'primary',
  size: 'small',
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
    :class="[$style['dropdown-container'], $style[size]]"
    v-on-click-outside="() => closeMenu.set(true)"
  >
    <ButtonBox
      :disabled="props.disabled"
      :label="
        props.multiple ? props.label : selector(props.modelValue, props.fields.key) ?? props.label
      "
      :icon="closeMenu() ? 'fa6-solid:chevron-down' : 'fa6-solid:chevron-up'"
      :clicked="!closeMenu()"
      :level="props.level"
      :size="props.size"
      :variant="props.size === 'small' ? 'rounded' : 'rect'"
      :class="[$style['dropdown-button'], $style[size]]"
      @click="closeMenu.update((state) => !state)"
      type="search"
    />
    <template v-if="items.length > 0 && !closeMenu()">
      <SelectMenu
        :class="$style['dropdown-menu']"
        :options="items"
        :label="props.label"
        :fields="props.fields"
        :multiple="props.multiple"
        v-model="selected"
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

    &.large {
      width: 100%;
      justify-content: space-between;

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
    max-height: var(--dropdown-max-height, var(--agh-sys-gadget-searchbar-width-small)) !important;
  }
}
</style>
