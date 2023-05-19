import ButtonBox from './ButtonBox.vue';

import type { Meta, StoryFn } from '@storybook/vue3';

export default {
  title: 'Components / Element / ButtonBox',
  component: ButtonBox,
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: 'Button label (optional)'
    },
    link: {
      control: 'text',
      description: 'Button link (optional)'
    },
    icon: {
      control: 'text',
      description: 'Button icon (optional)'
    },
    disabled: {
      control: 'boolean',
      description: 'Button disabled (optional)',
      defaultValue: false
    },
    variant: {
      control: 'select',
      description: 'Button variant (optional)',
      options: ['rounded', 'square', 'circle', 'rect'],
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

export const DefaultRoundedButtonBox = Template.bind({});
DefaultRoundedButtonBox.args = {
  label: 'Button',
  link: 'https://ui.argushack.com',
  icon: 'fa6-solid:arrow-right',
  variant: 'rounded',
  level: 'primary',
  disabled: false
};

export const PrimaryRoundedButtonBox = Template.bind({});
PrimaryRoundedButtonBox.args = {
  label: 'View Docs',
  level: 'primary',
  variant: 'rounded',
  icon: ''
};

export const SecondaryRoundedButtonBox = Template.bind({});
SecondaryRoundedButtonBox.args = {
  label: 'View Docs',
  level: 'secondary',
  variant: 'rounded',
  icon: ''
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
