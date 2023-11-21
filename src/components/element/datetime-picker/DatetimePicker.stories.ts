import DatetimePicker from './DatetimePicker.vue';

import type { Meta, StoryFn } from '@storybook/vue3';

export default {
  title: 'Components / Element / DatetimePicker',
  component: DatetimePicker,
  tags: ['autodocs']
} satisfies Meta<typeof DatetimePicker>;

const Template: StoryFn<typeof DatetimePicker> = (args) => ({
  components: { DatetimePicker },
  setup() {
    return { args };
  },
  template: `<DatetimePicker v-bind="args">${args}</DatetimePicker>`
});

export const DefaultDatetimePicker = Template.bind({});
DefaultDatetimePicker.args = {
  minYear: 1950,
  maxYear: 2050,
  modelValue: '',
  weekStart: 'Sunday',
  enableTime: true,
  type: 'single'
};

export const MultiDatetimePicker = Template.bind({});
MultiDatetimePicker.args = {
  minYear: 1950,
  maxYear: 2050,
  modelValue: '',
  start: new Date(2023, 10, 5),
  end: new Date(2023, 10, 20),
  weekStart: 'Monday',
  enableTime: true,
  type: 'multiple'
};
