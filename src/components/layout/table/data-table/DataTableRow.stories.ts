import { fn } from 'storybook/test';

import type { StoryFn, StoryObj } from '@storybook/vue3-vite';

import DataTableRow from './DataTableRow.vue';

import type { GenericMeta } from '.storybook/types/GenericMeta';

const meta: GenericMeta<typeof DataTableRow> = {
  title: 'Components / Layout / DataTable / DataTableRow',
  component: DataTableRow,
  tags: ['autodocs'],
  argTypes: {
    // Props
    item: {
      control: 'object',
      description: 'Data to be displayed in the DataTableRow.'
    },
    columns: {
      control: 'object',
      description: 'Columns to control DataTable behavior.'
    },

    // Emits
    'onSelect:row': {
      action: 'onSelect:row',
      description: 'Emitted when a row is clicked.',
      table: {
        type: { summary: '($event: Row.Payload<ItemType<T>>) => void' }
      }
    }
  },
  args: {
    'onSelect:row': fn()
  }
};

export default meta;

type DataTableRow$ = StoryObj<typeof DataTableRow>;

export const Default: DataTableRow$ = {
  args: {
    item: { id: 'item-1', name: 'Item 1', value: { prop1: 'Value 1 - Prop 1', prop2: 'Value 1 - Prop 2' } },
    columns: [
      { key: 'name', label: 'Name', width: 1, valuesGetter: (item: any) => item.name },
      { key: 'prop-1', label: 'Prop 1', width: 2, valuesGetter: (item: any) => item.value.prop1 },
      { key: 'prop-2', label: 'Prop 2', width: 2, valuesGetter: (item: any) => item.value.prop2 }
    ],
    style: { width: '100%', minWidth: '480px' }
  }
};
