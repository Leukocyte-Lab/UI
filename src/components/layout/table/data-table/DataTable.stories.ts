import { fn } from 'storybook/test';

import type { StoryFn, StoryObj } from '@storybook/vue3-vite';

import DataTable from './DataTable.vue';

import type { GenericMeta } from '.storybook/types/GenericMeta';

const meta: GenericMeta<typeof DataTable> = {
  title: 'Components / Layout / DataTable / DataTable',
  component: DataTable,
  tags: ['autodocs'],
  argTypes: {
    // Props
    items: {
      control: 'object',
      description: 'Data to be displayed in the DataTable.'
    },
    columns: {
      control: 'object',
      description: 'Columns to control DataTable behavior.'
    },
    hideHeader: {
      control: 'boolean',
      description: 'Whether to hide the header slot/component.'
    },
    useSearch: {
      control: 'boolean',
      description: 'Whether to enable the search functionality.'
    },

    // Slots
    header: {
      description: 'Slot to customize the header section of the DataTable.',
      table: {
        type: { summary: 'DataTable.Component.Header.Props<T>' }
      }
    },
    footer: {
      description: 'Slot to customize the footer section of the DataTable.',
      table: {
        type: { summary: 'DataTable.Component.Footer.Props<T>' }
      }
    },
    wrapper: {
      description: 'Slot to customize the wrapper section of the DataTable.',
      table: {
        type: { summary: 'DataTable.Component.Wrapper.Props<T>' }
      }
    },
    row: {
      description: 'Slot to customize the rendering of each row in the DataTable.',
      table: {
        type: { summary: 'DataTable.Component.Row.Slots<T>' }
      }
    },
    cell: {
      description: 'Slot to customize the rendering of each cell in the DataTable.',
      table: {
        type: { summary: 'DataTable.Component.Cell.Props<T>' }
      }
    },
    placeholder: {
      description: 'Slot to customize the placeholder content when there is no data or no matched results.',
      table: {
        type: { summary: 'DataTable.Component.Placeholder.Props' }
      }
    },

    // Emits
    'onSelect:row': {
      action: 'onSelect:row',
      description: 'Emitted when a row is clicked.',
      table: {
        type: { summary: '($event: Row.Payload<ItemType<T>>) => void' }
      }
    },
    'onSelect:item': {
      action: 'onSelect:item',
      description: 'Emitted when an item is selected (row click).',
      table: {
        type: { summary: '($event: ItemType<T>) => void' }
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
    hideHeader: false,
    useSearch: false,
    'onSelect:row': fn(),
    'onSelect:item': fn(),
    'onSelect:column': fn()
  }
};

export default meta;

type DataTable$ = StoryObj<typeof DataTable>;

export const Default: DataTable$ = {
  args: {
    items: [
      { id: 'item-1', name: 'Item 1', value: { prop1: 'Value 1 - Prop 1', prop2: 'Value 1 - Prop 2' } },
      { id: 'item-2', name: 'Item 2', value: { prop1: 'Value 2 - Prop 1', prop2: 'Value 2 - Prop 2' } },
      { id: 'item-3', name: 'Item 3', value: { prop1: 'Value 3 - Prop 1', prop2: 'Value 3 - Prop 2' } },
      { id: 'item-4', name: 'Item 4', value: { prop1: 'Value 4 - Prop 1', prop2: 'Value 4 - Prop 2' } },
      { id: 'item-5', name: 'Item 5', value: { prop1: 'Value 5 - Prop 1', prop2: 'Value 5 - Prop 2' } },
      { id: 'item-6', name: 'Item 6', value: { prop1: 'Value 6 - Prop 1', prop2: 'Value 6 - Prop 2' } },
      { id: 'item-7', name: 'Item 7', value: { prop1: 'Value 7 - Prop 1', prop2: 'Value 7 - Prop 2' } },
      { id: 'item-8', name: 'Item 8', value: { prop1: 'Value 8 - Prop 1', prop2: 'Value 8 - Prop 2' } },
      { id: 'item-9', name: 'Item 9', value: { prop1: 'Value 9 - Prop 1', prop2: 'Value 9 - Prop 2' } },
      { id: 'item-10', name: 'Item 10', value: { prop1: 'Value 10 - Prop 1', prop2: 'Value 10 - Prop 2' } }
    ],
    columns: [
      { key: 'name', label: 'Name', width: 1, valuesGetter: (item: any) => item.name },
      { key: 'prop-1', label: 'Prop 1', width: 2, valuesGetter: (item: any) => item.value.prop1 },
      { key: 'prop-2', label: 'Prop 2', width: 2, valuesGetter: (item: any) => item.value.prop2 }
    ],
    style: { width: '100%', minWidth: '480px', height: '240px' }
  }
};
