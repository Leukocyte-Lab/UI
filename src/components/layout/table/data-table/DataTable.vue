<script setup lang="ts" generic="T extends DataTable.AcceptedTypes">
import DataTableCell from './DataTableCell.vue';
import DataTableHeader from './DataTableHeader.vue';
import DataTableRow from './DataTableRow.vue';
import DataTableWrapper from './DataTableWrapper.vue';

import { signal } from '@/shared';

import type { DataTable } from './DataTable.model';

const slots = defineSlots<DataTable.Slots<T>>();

const props = defineProps<DataTable.Props<T>>();

const emits = defineEmits<DataTable.Emits<T>>();

const overflowed = signal(false);

const rowSelectionHandler = (payload: DataTable.Component.Row.Payload<DataTable.ItemType<T>>) => {
  emits('select:row', payload);
  emits('select:item', payload.item);
};

const columnSelectionHandler = (column: DataTable.Column<DataTable.ItemType<T>>) => {
  emits('select:column', column);
};

const overflowHandler = (value: boolean) => {
  overflowed.set(value);
};
</script>

<template>
  <div :class="[$style['table-container'], $style.wrapper, $style.flex, $style.vertical]">
    <template v-if="!props.hideHeader">
      <slot :columns="props.columns" :use-search="props.useSearch" name="header">
        <DataTableHeader :columns="props.columns" :overflowed="overflowed()" :use-search="props.useSearch">
          <template #row="rowProps">
            <slot v-bind="rowProps" name="row">
              <DataTableRow v-bind="rowProps">
                <template #default="cellProps">
                  <slot @select:column="columnSelectionHandler" v-bind="cellProps" name="cell">
                    <DataTableCell @select:column="columnSelectionHandler" v-bind="cellProps" />
                  </slot>
                </template>
              </DataTableRow>
            </slot>
          </template>
        </DataTableHeader>
      </slot>
    </template>
    <slot
      @overflowed="overflowHandler"
      @select:row="rowSelectionHandler"
      :columns="props.columns"
      :items="props.items"
      :use-search="props.useSearch"
      name="wrapper"
    >
      <DataTableWrapper @overflowed="overflowHandler" :columns="props.columns" :items="props.items" :use-search="props.useSearch">
        <template #row="rowProps">
          <slot @select:row="rowSelectionHandler" v-bind="rowProps" name="row">
            <DataTableRow @select:row="rowSelectionHandler" v-bind="rowProps">
              <template #default="cellProps">
                <slot v-bind="cellProps" name="cell">
                  <DataTableCell @select:column="columnSelectionHandler" v-bind="cellProps" />
                </slot>
              </template>
            </DataTableRow>
          </slot>
        </template>
      </DataTableWrapper>
    </slot>
  </div>
</template>

<style module scoped lang="scss">
@use '@/assets/styles/modules/wrapper.module' as wrapper;

.table {
  &-container {
    --wrapper-container-gap: var(--table-container-gap, var(--agh-ref-spacing-100));
    --wrapper-gap: var(--wrapper-container-gap);

    overflow: hidden;
  }
}
</style>
