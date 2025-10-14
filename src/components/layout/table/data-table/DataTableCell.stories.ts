import { fn } from 'storybook/test';

import type { StoryFn, StoryObj } from '@storybook/vue3-vite';

import DataTableCell from './DataTableCell.vue';

import type { GenericMeta } from '.storybook/types/GenericMeta';

const meta: GenericMeta<typeof DataTableCell> = {
  title: 'Components / Layout / DataTable / DataTableCell',
  component: DataTableCell,
  tags: ['autodocs'],
  argTypes: {
    // Props
    item: {
      control: 'object',
      description: 'Data to be displayed in the DataTableCell.'
    },
    value: {
      control: 'text',
      description: 'Value to be displayed in the DataTableCell.'
    },
    column: {
      control: 'object',
      description: 'Columns to control DataTable behavior.'
    },
    isHeader: {
      control: 'boolean',
      description: 'Whether the cell is a header cell.'
    },
    isSelected: {
      control: 'boolean',
      description: 'Whether the cell is selected.'
    },

    // Emits
    'onSelect:row': {
      action: 'onSelect:row',
      description: 'Emitted when a row is clicked.',
      table: {
        type: { summary: '($event: Row.Payload<ItemType<T>>) => void' }
      }
    },
    'onSelect:column': {
      action: 'onSelect:column',
      description: 'Emitted when a column is clicked.',
      table: {
        type: { summary: '($event: Column<ItemType<T>>) => void' }
      }
    }
  },
  args: {
    isHeader: false,
    isSelected: false,
    'onSelect:row': fn(),
    'onSelect:column': fn()
  }
};

export default meta;

type DataTableCell$ = StoryObj<typeof DataTableCell>;

export const Default: DataTableCell$ = {
  args: {
    item: { id: 'item-1', name: 'Item 1', value: { prop1: 'Value 1 - Prop 1', prop2: 'Value 1 - Prop 2' } },
    column: { key: 'name', label: 'Name', valuesGetter: (item: any) => item.name },
    value: 'Value 1 - Prop 1'
  }
};
