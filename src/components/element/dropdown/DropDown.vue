<script setup lang="ts">
import { computed } from 'vue';

import SelectMenu from '@/components/element/menu/SelectMenu.vue';
import ButtonBox from '@/components/element/button/ButtonBox.vue';

import { selector } from '@/shared/libs/selector';
import { signal } from '@/shared/libs/signal';

import type { DropDown } from '@/components/element/dropdown/DropDown.model';

const props = withDefaults(defineProps<DropDown.Props>(), {
  items: () => [],
  level: 'primary'
});

const emits = defineEmits<{
  (e: 'update:modelValue', option: any): void;
}>();

const selected = computed({
  get: () => props.modelValue,
  set: (value) => {
    closeMenu.set(true);
    return emits('update:modelValue', value);
  }
});

const closeMenu = signal(true);
</script>

<template>
  <div :class="$style['dropdown--container']">
    <ButtonBox
      :disabled="props.disabled"
      :label="selector(props.modelValue, props.fields.key)"
      :icon="closeMenu() ? 'fa6-solid:chevron-up' : 'fa6-solid:chevron-down'"
      :clicked="!closeMenu()"
      :level="props.level"
      :class="$style['dropdown--input']"
      @click="closeMenu.update((state) => !state)"
      type="search"
    />
    <template v-if="items.length > 0 && !closeMenu()">
      <SelectMenu
        :class="$style['dropdown--menu']"
        :options="items"
        :fields="props.fields"
        v-model="selected"
      />
    </template>
  </div>
</template>

<style module scoped lang="scss">
.dropdown {
  &--container {
    position: relative;
    display: flex;
    flex-direction: column;
    width: fit-content;
  }

  &--input {
    width: 100%;
    width: fit-content;
    padding: var(--agh-ref-spacing-50) var(--agh-ref-spacing-200);
  }

  &--menu {
    position: absolute;
    top: calc(100% + var(--agh-ref-spacing-200));
  }
}
</style>
