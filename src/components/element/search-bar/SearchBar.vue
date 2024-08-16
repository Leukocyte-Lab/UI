<script setup lang="ts">
import { ref, watch } from 'vue';

import SelectMenu from '@/components/element/menu/SelectMenu.vue';
import TextField from '@/components/element/textfield/TextField.vue';
import { valuesGetter } from '@/shared/libs/fn';
import { useSearch } from '@/shared/libs/search';
import { signal } from '@/shared/libs/signal';

import type { SearchBar } from './SearchBar.model';
import type { ObjectLike } from '@/shared/types/object';

const props = withDefaults(defineProps<Readonly<SearchBar.Props>>(), {
  items: () => [],
  modelValue: ''
});

const emits = defineEmits<{
  (e: 'update:modelValue', option: any): void;
  (e: 'select', option: ObjectLike): void;
}>();
const selected = ref<ObjectLike>();

const closeMenu = signal(false);

const onSelect = (option?: ObjectLike) => {
  if (!option) return;

  emits('update:modelValue', valuesGetter(option, props.fields.key));
  emits('select', option);
  closeMenu.set(true);
};

const { result, query } = useSearch(props.items, {
  getters: props.fields.searchKeys ?? [],
  options: { strict: true }
});

watch(selected, onSelect);
</script>

<template>
  <div :class="$style['search-bar--container']">
    <TextField
      v-model="query"
      @blur="closeMenu.set(true)"
      @click="closeMenu.set(false)"
      @focus="closeMenu.set(false)"
      :class="$style['search-bar--input']"
      :disabled="props.disabled"
      type="search"
    />
    <template v-if="query && result.length > 0 && !closeMenu()">
      <SelectMenu
        v-model="selected"
        :class="$style['search-bar--menu']"
        :fields="props.fields"
        :options="result"
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
