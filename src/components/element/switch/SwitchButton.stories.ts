import SwitchButton from './SwitchButton.vue';

import type { Meta, StoryFn } from '@storybook/vue3';

export default {
  title: 'Components / Element / SwitchButton',
  component: SwitchButton,
  tags: ['autodocs']
} satisfies Meta<typeof SwitchButton>;

const Template: StoryFn<typeof SwitchButton> = (args) => ({
  components: { SwitchButton },
  setup() {
    return { args };
  },
  template: '<SwitchButton v-model="args.modelValue" v-bind="args" />'
});

export const DefaultSwitchButton = Template.bind({});
DefaultSwitchButton.args = {
  modelValue: false,
  disabled: false
};
