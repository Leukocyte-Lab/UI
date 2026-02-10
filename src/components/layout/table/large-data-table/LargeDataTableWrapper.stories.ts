import { fn } from 'storybook/test';

import type { StoryObj } from '@storybook/vue3-vite';

import LargeDataTableWrapper from './LargeDataTableWrapper.vue';
import { logs } from './logs.json';

import { parser } from '@/shared/libs/parser';

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

export const RealData: LargeDataTableWrapper$ = {
  args: {
    items: logs.reduce(
      (map, log, index) =>
        map.set(index, {
          id: `#${String(index).padStart(4, '0')}`,
          ...log
        }),
      new Map()
    ),
    columns: [
      {
        key: 'id',
        label: 'ID',
        width: 1,
        valuesGetter: (log: any) => log.id
      },
      {
        key: 'timestamp',
        label: 'Timestamp',
        width: 3,
        valuesGetter: (log: any) => parser(log, `{{ timestamp | date : yyyy-MM-dd HH:mm:ss }}`)
      },
      {
        key: 'service',
        label: 'Service',
        width: 2,
        valuesGetter: (log: any) => `[${log.level}] ${log.service}`
      },
      {
        key: 'message',
        label: 'Message',
        width: 9,
        valuesGetter: (log: any) => log.message
      }
    ],
    style: {
      width: '800px',
      minWidth: '640px',
      height: '480px',
      'white-space': 'pre-wrap',
      'word-break': 'break-all',
      'font-family': 'monospaces'
    }
  }
};
