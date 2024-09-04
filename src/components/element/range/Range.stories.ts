import type { Meta, StoryFn, StoryObj } from '@storybook/vue3';

import Range from './Range.vue';

const meta: Meta<typeof Range> = {
  title: 'Components / Element / Range',
  component: Range,
  tags: ['autodocs'],
  argTypes: {
    disabled: {
      control: 'boolean',
      description: 'Range disabled (optional)'
    }
  }
};

const Template: StoryFn<typeof Range> = (args) => ({
  components: { Range },
  setup() {
    return { args };
  },
  template: '<Range v-model="args.modelValue" v-bind="args" />'
});

export default meta;

export const DefaultRange = Template.bind({});

DefaultRange.args = {
  modelValue: 0,
  eventSignalOptions: {
    flush: 'sync'
  },
  disabled: false
};
