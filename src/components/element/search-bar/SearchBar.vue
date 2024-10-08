<script setup lang="ts" generic="T extends SearchBar.AcceptableValue">
import { computed, ref, watch } from 'vue';

import SelectMenu from '@/components/element/menu/SelectMenu.vue';
import TextField from '@/components/element/textfield/TextField.vue';
import { Map$ } from '@/shared';
import { valuesGetter } from '@/shared/libs/fn';
import { useSearch } from '@/shared/libs/search';
import { signal } from '@/shared/libs/signal';

import type { SearchBar } from './SearchBar.model';
import type { ObjectLike } from '@/shared/types/object';

const props = defineProps<SearchBar.Props<T>>();

const emits = defineEmits<SearchBar.Emits<T>>();

const query = defineModel<string>({
  default: ''
});

const options = computed(
  () =>
    new Map$(
      Array.isArray(props.options)
        ? props.options.map((option, index) => [index, option])
        : props.options
    )
);

const closeMenu = signal(false);

const onSelect = (option?: T) => {
  if (!option) return;

  query.value = valuesGetter(option, props.fields.title ?? props.fields.key, true) ?? '';
  emits('select', option);
  closeMenu.set(true);
};

const { result } = useSearch(options, {
  query,
  getters: props.fields.searchKeys ?? [],
  options: props.searchOptions
});

const typeRef = ref<T>(); // ? NOTE: This is used to make SelectMenu generic type work

watch(result, (result) => {
  emits('search', Array.isArray(props.options) ? [...result.values()] : result);
});
</script>

<template>
  <div :class="$style['search-bar--container']">
    <TextField
      v-model="query"
      @blur="closeMenu.set(true)"
      @click="closeMenu.set(false)"
      @focus="closeMenu.set(false)"
      :autofocus="props.autofocus"
      :class="$style['search-bar--input']"
      :disabled="props.disabled"
      :event-signal-options="props.eventSignalOptions"
      :icon="props.icon"
      :icon-align="props.iconAlign"
      :placeholder="props.placeholder"
      :readonly="props.readonly"
      :spellcheck="props.spellcheck"
      :tabindex="props.tabindex"
      inputmode="search"
      type="search"
    />
    <template v-if="props.autocomplete && query && result.size > 0 && !closeMenu()">
      <!-- @vue-ignore // ? NOTE: SelectMenu will handle generic type ? // -->
      <SelectMenu
        @update:model-value="onSelect"
        :class="$style['search-bar--menu']"
        :fields="props.fields"
        :group-by="props.groupBy"
        :model-value="typeRef"
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
