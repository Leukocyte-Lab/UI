
import type { Meta, StoryObj } from '@storybook/vue3-vite';

import SwitchButton from './SwitchButton.vue';


const meta: Meta<typeof SwitchButton> = {
  title: 'Components / Element / SwitchButton',
  component: SwitchButton,
  tags: ['autodocs']
};

export default meta;

type SwitchButton$ = StoryObj<typeof SwitchButton>;

export const DefaultSwitchButton: SwitchButton$ = {
  args: {
    modelValue: false,
    disabled: false
  }
};
