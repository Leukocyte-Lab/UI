<script setup lang="ts" generic="T extends DataTable.AcceptedTypes">

import DataTableCell from './DataTableCell.vue';
import DataTableRow from './DataTableRow.vue';

import type { DataTable } from './DataTable.model';
import SearchBar from '@/components/element/search-bar/SearchBar.vue';

const slots = defineSlots<DataTable.Component.Header.Slots<T>>();

const props = defineProps<DataTable.Component.Header.Props<T>>();

const emits = defineEmits<DataTable.Component.Header.Emits<T>>();

const columnSelectionHandler = (column: DataTable.Column<DataTable.ItemType<T>>) => {
  emits('select:column', column);
};
</script>

<template>
  <header
    :class="[
      $style['table-header'],
      $style.wrapper,
      $style.flex,
      $style.vertical,
      {
        [$style.overflowed]: overflowed
      }
    ]"
  >
    <slot name="toolbar">
      <div :class="[$style.toolbar, $style.wrapper, $style.flex, $style.horizontal]">
        <template v-if="props.useSearch">
          <SearchBar />
        </template>
      </div>
    </slot>
    <slot :class="$style['table-row']" :columns="props.columns" :is-header="true" name="row">
      <DataTableRow :class="$style['table-row']" :columns="props.columns" :is-header="true">
        <template #default="cellProps">
          <slot @select:column="columnSelectionHandler" v-bind="cellProps" name="cell">
            <DataTableCell @select:column="columnSelectionHandler" v-bind="cellProps" />
          </slot>
        </template>
      </DataTableRow>
    </slot>
  </header>
</template>

<style module scoped lang="scss">
@use '@/assets/styles/modules/wrapper.module' as wrapper;

.table {
  &-header {
    border-bottom: 1px solid var(--table-color-border, var(--agh-ref-color-grayscale-400));

    &.overflowed {
      > :deep(.table-row) {
        margin-right: calc(var(--table-scrollbar-padding, var(--wrapper-container-gap, var(--agh-ref-spacing-100))) * 2) !important;
      }
    }
  }
}
</style>
