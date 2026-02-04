<script setup lang="ts" generic="T extends DataTable.ItemType<DataTable.AcceptedTypes>">
import { computed } from 'vue';

import DataTableCell from './DataTableCell.vue';

import { simpleGetter } from '@/shared/libs/fn';

import type { DataTable } from './DataTable.model';

const slots = defineSlots<DataTable.Component.Row.Slots<T>>();

const props = defineProps<DataTable.Component.Row.Props<T>>();

const emits = defineEmits<DataTable.Component.Row.Emits<T>>();

// Precompute cell values for all columns to avoid redundant getter calls
const rowValues = computed(() =>
  props.columns.map((column) => simpleGetter(props.item as T, column.valuesGetter))
);

const clickHandler = () => {
  if (!props.isHeader) {
    emits('select:row', {
      item: props.item,
      rowIndex: props.rowIndex,
      rowKey: props.rowKey
    });
  }
};
</script>

<template>
  <div
    @click="clickHandler"
    :class="[
      $style['table-row'],
      $style.wrapper,
      $style.flex,
      $style.horizontal,
      props.isSelected && $style.selected,
      props.isHeader && $style.header
    ]"
  >
    <template v-for="(column, index) in columns" :key="`table-column-${index}`">
      <template v-if="props.isHeader">
        <slot :column="column" :is-header="true" :value="column.label">
          <DataTableCell :column="column" :is-header="true" :value="column.label" />
        </slot>
      </template>
      <template v-else>
        <slot
          :column="column"
          :is-selected="props.isSelected"
          :item="props.item"
          :row-index="props.rowIndex"
          :row-key="props.rowKey"
          :value="rowValues[index]"
        >
          <DataTableCell
            :column="column"
            :is-selected="props.isSelected"
            :item="props.item"
            :row-index="props.rowIndex"
            :row-key="props.rowKey"
            :value="rowValues[index]"
          />
        </slot>
      </template>
    </template>
  </div>
</template>

<style module scoped lang="scss">
@use '@/assets/styles/modules/wrapper.module' as wrapper;

.table {
  &-row {
    background-color: var(--table-color-bg, var(--agh-ref-color-grayscale-150));
    padding: var(--table-padding-row, 0.5rem 1rem);
    border-radius: var(--table-border-radius, var(--agh-ref-border-radius-300));
    place-items: center;

    &.header {
      background-color: transparent;
    }
  }
}
</style>
