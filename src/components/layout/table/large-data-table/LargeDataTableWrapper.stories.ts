import { fn } from 'storybook/test';

import type { StoryFn, StoryObj } from '@storybook/vue3-vite';

import LargeDataTableWrapper from './LargeDataTableWrapper.vue';

import type { GenericMeta } from '.storybook/types/GenericMeta';

const meta: GenericMeta<typeof LargeDataTableWrapper> = {
  title: 'Components / Layout / LargeDataTable / LargeDataTableWrapper',
  component: LargeDataTableWrapper,
  tags: ['autodocs'],
  argTypes: {
    // Props
    items: {
      control: false,
      description: 'Data to be displayed in the LargeDataTableWrapper.'
    },
    columns: {
      control: 'object',
      description: 'Columns to control LargeDataTableWrapper behavior.'
    },
    useSearch: {
      control: 'boolean',
      description: 'Whether to enable the search functionality.'
    },

    // Slots
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

    // Emits
    'onSelect:row': {
      action: 'onSelect:row',
      description: 'Emitted when a row is clicked.',
      table: {
        type: { summary: '($event: Row.Payload<ItemType<T>>) => void' }
      }
    },
    onOverflowed: {
      action: 'onOverflowed',
      description: 'Emitted when the table overflows horizontally.',
      table: {
        type: { summary: '($event: boolean) => void' }
      }
    }
  },
  args: {
    useSearch: false,
    'onSelect:row': fn(),
    onOverflowed: fn()
  }
};

export default meta;

type LargeDataTableWrapper$ = StoryObj<typeof LargeDataTableWrapper>;

export const Default: LargeDataTableWrapper$ = {
  args: {
    items: new Map(
      Array(100_000)
        .fill(null)
        .map((_, index, { length }) => ({
          id: `item-${String(index + 1).padStart(Math.log10(length) + 1, '0')}`,
          name: `Item ${String(index + 1).padStart(Math.log10(length) + 1, '0')}`,
          value: {
            prop1: `Value ${String(index + 1).padStart(Math.log10(length) + 1, '0')} - Prop 1`,
            prop2: `Value ${String(index + 1).padStart(Math.log10(length) + 1, '0')} - Prop 2`
          }
        }))
        .map((item) => [item.id, item])
    ),
    columns: [
      { key: 'name', label: 'Name', width: 1, valuesGetter: (item: any) => item.name },
      { key: 'prop-1', label: 'Prop 1', width: 2, valuesGetter: (item: any) => item.value.prop1 },
      { key: 'prop-2', label: 'Prop 2', width: 2, valuesGetter: (item: any) => item.value.prop2 }
    ],
    style: { width: '100%', minWidth: '640px', height: '480px' }
  }
};

export const HalfMillion: LargeDataTableWrapper$ = {
  args: {
    items: new Map(
      Array(500_000)
        .fill(null)
        .map((_, index, { length }) => ({
          id: `item-${String(index + 1).padStart(Math.log10(length) + 1, '0')}`,
          name: `Item ${String(index + 1).padStart(Math.log10(length) + 1, '0')}`,
          value: {
            prop1: `Value ${String(index + 1).padStart(Math.log10(length) + 1, '0')} - Prop 1`,
            prop2: `Value ${String(index + 1).padStart(Math.log10(length) + 1, '0')} - Prop 2`
          }
        }))
        .map((item) => [item.id, item])
    ),
    columns: [
      { key: 'name', label: 'Name', width: 1, valuesGetter: (item: any) => item.name },
      { key: 'prop-1', label: 'Prop 1', width: 2, valuesGetter: (item: any) => item.value.prop1 },
      { key: 'prop-2', label: 'Prop 2', width: 2, valuesGetter: (item: any) => item.value.prop2 }
    ],
    style: { width: '100%', minWidth: '640px', height: '480px' }
  }
};

export const OneMillion: LargeDataTableWrapper$ = {
  args: {
    items: new Map(
      Array(1_000_000)
        .fill(null)
        .map((_, index, { length }) => ({
          id: `item-${String(index + 1).padStart(Math.log10(length) + 1, '0')}`,
          name: `Item ${String(index + 1).padStart(Math.log10(length) + 1, '0')}`,
          value: {
            prop1: `Value ${String(index + 1).padStart(Math.log10(length) + 1, '0')} - Prop 1`,
            prop2: `Value ${String(index + 1).padStart(Math.log10(length) + 1, '0')} - Prop 2`
          }
        }))
        .map((item) => [item.id, item])
    ),
    columns: [
      { key: 'name', label: 'Name', width: 1, valuesGetter: (item: any) => item.name },
      { key: 'prop-1', label: 'Prop 1', width: 2, valuesGetter: (item: any) => item.value.prop1 },
      { key: 'prop-2', label: 'Prop 2', width: 2, valuesGetter: (item: any) => item.value.prop2 }
    ],
    style: { width: '100%', minWidth: '640px', height: '480px' }
  }
};

export const FiveMillion: LargeDataTableWrapper$ = {
  args: {
    items: new Map(
      Array(5_000_000)
        .fill(null)
        .map((_, index, { length }) => ({
          id: `item-${String(index + 1).padStart(Math.log10(length) + 1, '0')}`,
          name: `Item ${String(index + 1).padStart(Math.log10(length) + 1, '0')}`,
          value: {
            prop1: `Value ${String(index + 1).padStart(Math.log10(length) + 1, '0')} - Prop 1`,
            prop2: `Value ${String(index + 1).padStart(Math.log10(length) + 1, '0')} - Prop 2`
          }
        }))
        .map((item) => [item.id, item])
    ),
    columns: [
      { key: 'name', label: 'Name', width: 1, valuesGetter: (item: any) => item.name },
      { key: 'prop-1', label: 'Prop 1', width: 2, valuesGetter: (item: any) => item.value.prop1 },
      { key: 'prop-2', label: 'Prop 2', width: 2, valuesGetter: (item: any) => item.value.prop2 }
    ],
    style: { width: '100%', minWidth: '640px', height: '480px' }
  }
};
