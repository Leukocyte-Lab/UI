import type { Meta, StoryFn } from '@storybook/vue3-vite';

import InputRange from './InputRange.vue';

const meta: Meta<typeof InputRange> = {
  title: 'Components / Element / Range',
  component: InputRange,
  tags: ['autodocs'],
  argTypes: {
    disabled: {
      control: 'boolean',
      description: 'Range disabled (optional)'
    }
  }
};

const Template: StoryFn<typeof InputRange> = (args) => ({
  components: { InputRange },
  setup() {
    return { args };
  },
  template: '<InputRange v-model="args.modelValue" v-bind="args" />'
});

export default meta;

export const DefaultInputRange = Template.bind({});

DefaultInputRange.args = {
  modelValue: 0,
  eventSignalOptions: {
    flush: 'sync'
  },
  disabled: false
};
