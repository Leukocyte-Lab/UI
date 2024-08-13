<script setup lang="ts">
import { computed, ref, watch } from 'vue';

import SelectMenu from '@/components/element/menu/SelectMenu.vue';
import TextField from '@/components/element/textfield/TextField.vue';
import { useSearch } from '@/shared/libs/search';
import { selector } from '@/shared/libs/selector';
import { signal } from '@/shared/libs/signal';

import type { SearchBar } from './SearchBar.model';
import type { ObjectLike } from '@/shared/types/object';

const props = withDefaults(defineProps<SearchBar.Props>(), {
  items: () => [],
  modelValue: ''
});

const emits = defineEmits<{
  (e: 'update:modelValue', option: any): void;
  (e: 'select', option: ObjectLike): void;
}>();

const search = computed({
  get: () => props.modelValue,
  set: (value) => {
    computeFilteredItems(value);
    return emits('update:modelValue', value);
  }
});

const selected = ref<ObjectLike>();

const closeMenu = signal(false);
const filteredItems = signal<ObjectLike[]>([]);

const onSelect = (option?: ObjectLike) => {
  if (!option) return;

  emits('update:modelValue', selector(option, props.fields.key));
  emits('select', option);
  closeMenu.set(true);
};

const computeFilteredItems = (value: string) => {
  if (props.fields.searchKeys) {
    const { results } = useSearch(props.items, value, props.fields.searchKeys);
    filteredItems.set((results.value as ObjectLike[]) ?? []);
  }
};

watch(search, computeFilteredItems);
watch(selected, onSelect);
</script>

<template>
  <div :class="$style['search-bar--container']">
    <TextField
      v-model="search"
      :class="$style['search-bar--input']"
      :disabled="props.disabled"
      type="search"
      @click="closeMenu.set(false)"
      @focus="closeMenu.set(false)"
      @blur="closeMenu.set(true)"
    />
    <template v-if="search && filteredItems().length > 0 && !closeMenu()">
      <SelectMenu
        v-model="selected"
        :class="$style['search-bar--menu']"
        :options="filteredItems()"
        :fields="props.fields"
      />
    </template>
  </div>
</template>

<style module scoped lang="scss">
.search-bar {
  &--container {
    position: relative;
    display: flex;
    flex-direction: column;
    width: var(--agh-sys-gadget-searchbar-width-large);
  }

  &--input {
    width: 100%;
  }

  &--menu {
    position: absolute;
    top: calc(100% + var(--agh-ref-spacing-200));
  }
}
</style>
