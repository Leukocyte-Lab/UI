<script setup lang="ts" generic="T extends DataTable.ItemType<DataTable.AcceptedTypes>">
import DataTableCell from './DataTableCell.vue';

import { simpleGetter } from '@/shared/libs/fn';

import type { DataTable } from './DataTable.model';

const slots = defineSlots<DataTable.Component.Row.Slots<T>>();

const props = defineProps<DataTable.Component.Row.Props<T>>();

const emits = defineEmits<DataTable.Component.Row.Emits<T>>();

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
      {
        [$style.selected]: props.isSelected,
        [$style.header]: props.isHeader
      }
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
          :value="simpleGetter(props.item, column.valuesGetter)"
        >
          <DataTableCell
            :column="column"
            :is-selected="props.isSelected"
            :item="props.item"
            :row-index="props.rowIndex"
            :row-key="props.rowKey"
            :value="simpleGetter(props.item, column.valuesGetter)"
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
