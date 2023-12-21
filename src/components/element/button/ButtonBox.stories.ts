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
      options: ['rounded', 'square', 'text-square', 'circle', 'rect', 'extendable-rect', 'text'],
      defaultValue: 'rounded'
    },
    level: {
      control: 'radio',
      description: 'Button level (optional)',
      options: ['primary', 'secondary'],
      defaultValue: 'primary'
    },
    color: {
      control: 'radio',
      description: 'Button color (optional)',
      options: ['general', 'danger'],
      defaultValue: 'primary'
    },
    size: {
      control: 'radio',
      description: 'Button size (optional)',
      options: ['small', 'large', 'huge'],
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
  size: 'small',
  color: 'danger',
  disabled: false,
  loading: false
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

export const ExtendableRectButtonBox = Template.bind({});
ExtendableRectButtonBox.args = {
  label: 'Back to Project',
  icon: 'fa6-solid:door-closed',
  variant: 'extendable-rect',
  level: 'primary'
};

export const TextButtonBox = Template.bind({});
TextButtonBox.args = {
  label: 'Mark as read',
  icon: 'fa6-solid:check-double',
  variant: 'text'
};

export const PrimarySquareButtonBox = Template.bind({});
PrimarySquareButtonBox.args = {
  label: 'Full Report Download',
  icon: 'fa6-solid:file-arrow-down',
  variant: 'square',
  level: 'primary'
};

export const SecondarySquareButtonBox = Template.bind({});
SecondarySquareButtonBox.args = {
  label: 'Full Report Download',
  icon: 'fa6-solid:file-arrow-down',
  variant: 'square',
  level: 'secondary'
};

export const TextSquareButtonBox = Template.bind({});
TextSquareButtonBox.args = {
  label: 'Full Report Download',
  icon: 'fa6-solid:file-arrow-down',
  variant: 'text-square'
};

export const PrimaryCircleButtonBox = Template.bind({});
PrimaryCircleButtonBox.args = {
  icon: 'fa6-solid:plus',
  variant: 'circle',
  level: 'primary'
};

export const SecondaryCircleButtonBox = Template.bind({});
SecondaryCircleButtonBox.args = {
  icon: 'fa6-solid:plus',
  variant: 'circle',
  level: 'secondary'
};
