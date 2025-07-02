import { fn } from '@storybook/test';

import type { Meta, StoryObj } from '@storybook/vue3';

import DatetimePicker from './DatetimePicker.vue';

const meta: Meta<typeof DatetimePicker> = {
  title: 'Components / Element / DatetimePicker',
  component: DatetimePicker,
  tags: ['autodocs'],
  argTypes: {
    minYear: {
      control: 'number',
      description: 'Minimum year for the date picker'
    },
    maxYear: {
      control: 'number',
      description: 'Maximum year for the date picker'
    },
    weekStart: {
      control: 'select',
      description: 'Day to start the week',
      options: ['Sunday', 'Monday'],
      defaultValue: 'Sunday'
    },
    enableTime: {
      control: 'boolean',
      description: 'Enable time selection in the date picker',
      defaultValue: false
    },
    type: {
      control: 'select',
      description: 'Type of date selection',
      options: ['single', 'multiple'],
      defaultValue: 'single'
    },
    start: {
      control: 'date',
      description: 'Start date for the date range (for multiple selection)'
    },
    end: {
      control: 'date',
      description: 'End date for the date range (for multiple selection)'
    },
    modelValue: {
      control: 'date',
      description: 'DatetimePicker value, use by `v-model`.'
    },
  },
  args: {
    'onUpdate:modelValue': fn(),
    'onUpdate:start': fn(),
    'onUpdate:end': fn(),
    'onConfirm': fn()
  }
};

export default meta;

type DatetimePicker$ = StoryObj<typeof DatetimePicker>;

export const DefaultDatetimePicker: DatetimePicker$ = {
  args: {
    minYear: 1950,
    maxYear: 2050,
    weekStart: 'Sunday',
    enableTime: true,
    type: 'single'
  }
};

export const MultiDatetimePicker: DatetimePicker$ = {
  args: {
    minYear: 1950,
    maxYear: 2050,
    start: new Date(2023, 10, 5),
    end: new Date(2023, 10, 20),
    weekStart: 'Monday',
    enableTime: true,
    type: 'multiple'
  }
};
