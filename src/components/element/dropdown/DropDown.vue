<script setup lang="ts" generic="T extends DropDown.AcceptableValue">
import { computed, watch } from 'vue';
import { vOnClickOutside } from '@vueuse/components';

import ButtonBox from '@/components/element/button/ButtonBox.vue';
import SelectMenu from '@/components/element/menu/SelectMenu.vue';
import { valuesGetter } from '@/shared/libs/fn';
import { signal } from '@/shared/libs/signal';

import type { DropDown } from '@/components/element/dropdown/DropDown.model';

const props = withDefaults(defineProps<DropDown.Props<T>>(), {
  level: 'primary',
  variant: 'rounded',
  size: 'medium',
  multiple: false
});

const selection = defineModel<DropDown.Props<T>['modelValue']>({
  required: true
});
const query = defineModel<string>('query', {
  default: ''
});

const closeMenu = signal(true);

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
  props.multiple
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
      props.placeholder)
);

watch([selection, () => props.multiple], ([selection, multiple]) => {
  if (!multiple && selection) {
    closeMenu.set(true);
  }
});
</script>

<template>
  <div
    v-on-click-outside="() => closeMenu.set(true)"
    :class="[$style['dropdown-container'], $style[size]]"
  >
    <ButtonBox
      @click="closeMenu.update((state) => !state)"
      :bobble="bobbleCount"
      :class="[$style['dropdown-button'], $style[size]]"
      :clicked="!closeMenu()"
      :disabled="props.disabled"
      :icon="closeMenu() ? 'fa6-solid:chevron-down' : 'fa6-solid:chevron-up'"
      :label="label"
      :level="props.level"
      :size="props.size"
      :variant="props.variant"
    />
    <template v-if="selection && optionsCount > 0 && !closeMenu()">
      <!-- @vue-ignore // ? NOTE: SelectMenu will handle generic type ? // -->
      <SelectMenu
        v-model="selection"
        v-model:query="query"
        :class="$style['dropdown-menu']"
        :fields="props.fields"
        :group-by="props.groupBy"
        :label="props.label"
        :multiple="props.multiple"
        :options="props.options"
        :show-all="props.showAll"
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
    top: calc(100% + var(--agh-ref-spacing-200));
    z-index: 10;
    max-height: var(--dropdown-max-height, var(--agh-sys-list-dropdown-small)) !important;
  }
}
</style>
