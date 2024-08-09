import type { Meta, StoryObj } from '@storybook/vue3';

import DatetimePicker from './DatetimePicker.vue';

const meta: Meta<typeof DatetimePicker> = {
  title: 'Components / Element / DatetimePicker',
  component: DatetimePicker,
  tags: ['autodocs']
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
