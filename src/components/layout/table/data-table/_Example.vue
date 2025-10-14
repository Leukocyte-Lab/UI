<script setup lang="ts">
import DataTable from './DataTable.vue';
</script>

<template>
  <DataTable
    :columns="[
      { key: 'name', label: 'Name', valuesGetter: (item) => item.name },
      { key: 'prop-1', label: 'Prop 1', valuesGetter: (item) => item.value.prop1 },
      { key: 'prop-2', label: 'Prop 2', valuesGetter: (item) => item.value.prop2 }
    ]"
    :items="[
      {
        id: 'item-1',
        name: 'Item 1',
        value: { prop1: 'Value 1 - Prop 1', prop2: 'Value 1 - Prop 2' }
      },
      {
        id: 'item-2',
        name: 'Item 2',
        value: { prop1: 'Value 2 - Prop 1', prop2: 'Value 2 - Prop 2' }
      },
      {
        id: 'item-3',
        name: 'Item 3',
        value: { prop1: 'Value 3 - Prop 1', prop2: 'Value 3 - Prop 2' }
      }
    ]"
  />
</template>

<style module scoped lang="scss">
@use '@/assets/styles/modules/wrapper.module' as wrapper;
</style>
