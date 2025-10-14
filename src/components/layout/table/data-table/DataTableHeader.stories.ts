import { fn } from 'storybook/test';

import type { StoryFn, StoryObj } from '@storybook/vue3-vite';

import DataTableHeader from './DataTableHeader.vue';

import type { GenericMeta } from '.storybook/types/GenericMeta';

const meta: GenericMeta<typeof DataTableHeader> = {
  title: 'Components / Layout / DataTable / DataTableHeader',
  component: DataTableHeader,
  tags: ['autodocs'],
  argTypes: {
    // Props
    columns: {
      control: 'object',
      description: 'Columns to control DataTable behavior.'
    },
    useSearch: {
      control: 'boolean',
      description: 'Whether to enable the search functionality.'
    },
    toolbar: {
      description: 'Slot to customize the toolbar section of the DataTableHeader.'
    },
    row: {
      description: 'Slot to customize the rendering of each row in the DataTable.',
      table: {
        type: { summary: 'DataTable.Component.Row.Slots<T>' }
      }
    },

    // Emits
    'onSelect:column': {
      action: 'onSelect:column',
      description: 'Emitted when a column is clicked.',
      table: {
        type: { summary: '($event: Column<ItemType<T>>) => void' }
      }
    }
  },
  args: {
    useSearch: false,
    'onSelect:column': fn()
  }
};

export default meta;

type DataTableHeader$ = StoryObj<typeof DataTableHeader>;

export const Default: DataTableHeader$ = {
  args: {
    columns: [
      { key: 'name', label: 'Name', width: 1, valuesGetter: (item: any) => item.name },
      { key: 'prop-1', label: 'Prop 1', width: 2, valuesGetter: (item: any) => item.value.prop1 },
      { key: 'prop-2', label: 'Prop 2', width: 2, valuesGetter: (item: any) => item.value.prop2 }
    ],
    style: { width: '100%', minWidth: '480px' }
  }
};
