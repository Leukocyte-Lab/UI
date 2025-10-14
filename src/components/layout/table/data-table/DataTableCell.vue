<script setup lang="ts" generic="T extends DataTable.ItemType<DataTable.AcceptedTypes>">
import { computed } from 'vue';

import type { DataTable } from './DataTable.model';

const slots = defineSlots<DataTable.Component.Cell.Slots<T>>();

const props = defineProps<DataTable.Component.Cell.Props<T>>();

const emits = defineEmits<DataTable.Component.Cell.Emits<T>>();

const width = computed(() => props.column.width || 'auto');

const clickHandler = () => {
  if (!props.isHeader && !props.isSelected) {
    emits('select:row', {
      item: props.item,
      rowIndex: props.rowIndex,
      rowKey: props.rowKey
    });
  }
  emits('select:column', props.column);
};
</script>

<template>
  <div
    @click="clickHandler"
    :class="[
      $style['table-cell'],
      $style.wrapper,
      $style.flex,
      $style.vertical,
      {
        [$style.selected]: props.isSelected,
        [$style.header]: props.isHeader
      }
    ]"
  >
    <p>{{ props.value }}</p>
  </div>
</template>

<style module scoped lang="scss">
@use '@/assets/styles/modules/wrapper.module' as wrapper;

.table {
  &-cell {
    flex: v-bind(width);
    font: var(--table-row-content-typeface, var(--agh-sys-typeface-label-default-small));

    &.header {
      font: var(--table-header-content-typeface, var(--agh-sys-typeface-label-hl-small));
    }
  }
}
</style>
