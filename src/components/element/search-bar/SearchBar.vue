<script setup lang="ts">
import { computed, ref, watch } from 'vue';

import SelectMenu from '@/components/element/menu/SelectMenu.vue';
import TextField from '@/components/element/textfield/TextField.vue';

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
  filteredItems.set(
    props.items?.filter((item) => String(selector(item, props.fields.key)).includes(value)) ?? []
  );
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
      @click="closeMenu.set(false)"
      @focus="closeMenu.set(false)"
      @blur="closeMenu.set(true)"
      type="search"
    />
    <template v-if="search && filteredItems().length > 0 && !closeMenu()">
      <SelectMenu
        :class="$style['search-bar--menu']"
        :options="filteredItems()"
        :fields="props.fields"
        v-model="selected"
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
    width: var(--agh-sys-gadget-searchbar-width-small);
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
