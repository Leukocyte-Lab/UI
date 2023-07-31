import Switch from './Switch.vue';

import type { Meta, StoryFn } from '@storybook/vue3';

export default {
  title: 'Components / Element / Switch',
  component: Switch,
  tags: ['autodocs']
} satisfies Meta<typeof Switch>;

const Template: StoryFn<typeof Switch> = (args) => ({
  components: { Switch },
  setup() {
    return { args };
  },
  template: '<Switch v-model="args.modelValue" v-bind="args" />'
});

export const DefaultSwitch = Template.bind({});
DefaultSwitch.args = {
  modelValue: false,
  disabled: false
};
