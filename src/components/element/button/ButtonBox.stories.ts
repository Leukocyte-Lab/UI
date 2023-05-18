import ButtonBox from './ButtonBox.vue';

import type { Meta, StoryFn } from '@storybook/vue3';

export default {
  title: 'Components / Element / ButtonBox',
  component: ButtonBox,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text', description: 'Button label (optional)' },
    icon: { control: 'text', description: 'Button icon (optional)' },
    link: { control: 'text', description: 'Button link (optional)' },
    disabled: {
      control: 'boolean',
      description: 'Button disabled (optional)',
      defaultValue: false
    },
    variant: {
      control: 'select',
      description: 'Button variant (optional)',
      options: ['rounded', 'square', 'circle', 'rect', 'file'],
      defaultValue: 'rounded'
    },
    level: {
      control: 'radio',
      description: 'Button level (optional)',
      options: ['primary', 'secondary'],
      defaultValue: 'primary'
    },
    onClick: { action: 'clicked' }
  }
} satisfies Meta<typeof ButtonBox>;

const Template: StoryFn<typeof ButtonBox> = (args) => ({
  components: { ButtonBox },
  setup() {
    return { args };
  },
  template: '<ButtonBox v-bind="args" />'
});

export const RoundedButtonBox = Template.bind({});
RoundedButtonBox.args = {
  label: 'View Docs'
};

export const PrimaryRectButtonBox = Template.bind({});
PrimaryRectButtonBox.args = {
  label: 'Back to Project',
  icon: 'fa6-solid:door-closed',
  variant: 'rect',
  level: 'primary'
};

export const SecondaryRectButtonBox = Template.bind({});
SecondaryRectButtonBox.args = {
  label: 'Back to Project',
  icon: 'fa6-solid:door-closed',
  variant: 'rect',
  level: 'secondary'
};

export const SquareButtonBox = Template.bind({});
SquareButtonBox.args = {
  label: 'Full Report Download',
  icon: 'fa6-solid:file-arrow-down',
  variant: 'square'
};

export const CircleButtonBox = Template.bind({});
CircleButtonBox.args = {
  icon: 'fa6-solid:plus',
  variant: 'circle'
};
