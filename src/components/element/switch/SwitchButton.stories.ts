import { pick } from 'lodash-es';

import type { Meta, StoryFn, StoryObj } from '@storybook/vue3';

import bindArgs from '@/../.storybook/helpers/bind-args';

import SwitchButton from './SwitchButton.vue';

const meta: Meta<typeof SwitchButton> = {
  title: 'Components / Element / SwitchButton',
  component: SwitchButton,
  tags: ['autodocs']
};

export default meta;

type SwitchButton$ = StoryObj<typeof SwitchButton>;

const Template: StoryFn<typeof SwitchButton> = (args) => ({
  components: { SwitchButton },
  setup() {
    return { args };
  },
  template: `
  <SwitchButton
    ${bindArgs(pick(args, 'disabled'))}
    :event-signal-options="args.eventSignalOptions"
    v-model="args.modelValue"
  />`
});

export const DefaultSwitchButton: SwitchButton$ = {
  render: Template,
  args: {
    modelValue: false,
    disabled: false
  }
};
