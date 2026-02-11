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
    totalItems: {
      control: 'number',
      description: 'Total number of items to be managed by the LargeDataTableWrapper. If not provided, it will be inferred from the items prop. Must be provided for precise behavior if using with pagination or infinite scrolling.'
    },
    visibleSize: {
      control: 'number',
      description: 'Number of items visible in the viewport at any given time. The default value is `50`.'
    },
    bufferSize: {
      control: 'number',
      description: 'Number of items to buffer on either side of the visible items for smoother scrolling experience. The default value is `10`.'
    },
    defaultRowHeight: {
      control: 'number',
      description: 'Default height (in pixels) for each row in the table. This is used for initial layout calculations before actual measurements are taken. The default value is `32`.'
    },
    lazyUpdate: {
      control: 'boolean',
      description: 'Whether to enable lazy updates for item measurements and visibility status. When enabled, updates will be deferred until the next available frame (using `requestIdleCallback` if available, otherwise fallback to `requestAnimationFrame`), improving performance during rapid scroll or resize events. The default value is `false`.'
    },
    variantHeightMode: {
      control: 'boolean',
      description: 'Whether to enable variant height mode, which allows rows to have different heights. When enabled, the component will measure the height of each row and adjust the layout accordingly. This mode may have a performance impact during initial rendering and rapid scroll events due to the need for measuring each row, so it is recommended to use it only when necessary. If not explicitly set, this mode is automatically enabled when multiple distinct row heights are detected (`itemHeightSet.size > 1`).'
    },

    // Inherited Props from DataTable
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
    placeholder: {
      description: 'Slot to render a placeholder when there are no items to display in the DataTable.',
      table: {
        type: { summary: '(props: Placeholder.Props) => VNode' }
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
    },
    'onRequest:items': {
      action: 'onRequest:items',
      description: 'Emitted when the LargeDataTableWrapper requests more items to be loaded, typically during scrolling.',
      table: {
        type: { summary: `($event: OnlyOneOf<{ before: ItemCursor<T>; after: ItemCursor<T>; size: number }, 'before' | 'after'>) => void` }
      }
    }
  },
  args: {
    useSearch: false,
    'onSelect:row': fn(),
    onOverflowed: fn(),
    'onRequest:items': fn()
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
      'font-family': 'monospace'
    }
  }
};
