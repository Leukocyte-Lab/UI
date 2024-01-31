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
      options: ['primary', 'secondary', 'tertiary'],
      defaultValue: 'primary'
    },
    color: {
      control: 'select',
      description: 'Button color (optional)',
      options: ['purple', 'blue', 'cyan', 'green', 'orange', 'red'],
      defaultValue: 'blue'
    },
    mode: {
      control: 'radio',
      description: 'Button mode (optional)',
      options: ['normal', 'danger'],
      defaultValue: 'normal'
    },
    size: {
      control: 'radio',
      description: 'Button size (optional)',
      options: ['small', 'medium', 'large', 'huge'],
      defaultValue: 'medium'
    },
    loading: {
      control: 'boolean',
      description: 'Button loading (optional)',
      defaultValue: false
    },
    bobble: {
      control: 'text',
      description: 'Button bobble, boolean, string or number (optional)'
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
  size: 'medium',
  color: 'blue',
  mode: 'normal',
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

export const TertiaryRoundedButtonBox = Template.bind({});
TertiaryRoundedButtonBox.args = {
  label: 'View Docs',
  level: 'tertiary',
  variant: 'rounded',
  icon: ''
};

export const PrimaryRoundedWithIconButtonBox = Template.bind({});
PrimaryRoundedWithIconButtonBox.args = {
  label: 'View Docs',
  level: 'primary',
  variant: 'rounded',
  icon: 'fa6-solid:angle-right'
};

export const SecondaryRoundedWithIconButtonBox = Template.bind({});
SecondaryRoundedWithIconButtonBox.args = {
  label: 'View Docs',
  level: 'secondary',
  variant: 'rounded',
  icon: 'fa6-solid:angle-right'
};

export const TertiaryRoundedWithIconButtonBox = Template.bind({});
TertiaryRoundedWithIconButtonBox.args = {
  label: 'View Docs',
  level: 'tertiary',
  variant: 'rounded',
  icon: 'fa6-solid:angle-right'
};

export const PrimaryRoundedWithLoadingButtonBox = Template.bind({});
PrimaryRoundedWithLoadingButtonBox.args = {
  label: 'View Docs',
  level: 'primary',
  variant: 'rounded',
  loading: true
};

export const SecondaryRoundedWithLoadingButtonBox = Template.bind({});
SecondaryRoundedWithLoadingButtonBox.args = {
  label: 'View Docs',
  level: 'secondary',
  variant: 'rounded',
  loading: true
};

export const TertiaryRoundedWithLoadingButtonBox = Template.bind({});
TertiaryRoundedWithLoadingButtonBox.args = {
  label: 'View Docs',
  level: 'tertiary',
  variant: 'rounded',
  loading: true
};

export const PrimaryRoundedWithDotButtonBox = Template.bind({});
PrimaryRoundedWithDotButtonBox.args = {
  label: 'View Docs',
  level: 'primary',
  variant: 'rounded',
  bobble: true
};

export const PrimaryRoundedWithBobbleButtonBox = Template.bind({});
PrimaryRoundedWithBobbleButtonBox.args = {
  label: 'View Docs',
  level: 'primary',
  variant: 'rounded',
  bobble: 3
};

export const SecondaryRoundedWithBobbleButtonBox = Template.bind({});
SecondaryRoundedWithBobbleButtonBox.args = {
  label: 'View Docs',
  level: 'secondary',
  variant: 'rounded',
  bobble: '9+'
};

export const TertiaryRoundedWithBobbleButtonBox = Template.bind({});
TertiaryRoundedWithBobbleButtonBox.args = {
  label: 'View Docs',
  level: 'tertiary',
  variant: 'rounded',
  bobble: 'New'
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

export const TertiaryRectButtonBox = Template.bind({});
TertiaryRectButtonBox.args = {
  label: 'Back to Project',
  icon: 'fa6-solid:door-closed',
  variant: 'rect',
  level: 'tertiary'
};

export const PrimaryRectWithDotButtonBox = Template.bind({});
PrimaryRectWithDotButtonBox.args = {
  label: 'Select Coupon',
  icon: 'fa6-solid:angle-down',
  variant: 'rect',
  level: 'primary',
  bobble: true
};

export const PrimaryRectWithBobbleButtonBox = Template.bind({});
PrimaryRectWithBobbleButtonBox.args = {
  label: 'Select Coupon',
  icon: 'fa6-solid:angle-down',
  variant: 'rect',
  level: 'primary',
  bobble: 3
};

export const SecondaryRectWithBobbleButtonBox = Template.bind({});
SecondaryRectWithBobbleButtonBox.args = {
  label: 'Select Coupon',
  icon: 'fa6-solid:angle-down',
  variant: 'rect',
  level: 'secondary',
  bobble: '99+'
};

export const TertiaryRectWithBobbleButtonBox = Template.bind({});
TertiaryRectWithBobbleButtonBox.args = {
  label: 'Select Coupon',
  icon: 'fa6-solid:angle-down',
  variant: 'rect',
  level: 'tertiary',
  bobble: 'New'
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

export const TextButtonWithDotBox = Template.bind({});
TextButtonWithDotBox.args = {
  icon: 'fa6-solid:filter',
  variant: 'text',
  bobble: true
};

export const TextButtonWithBobbleBox = Template.bind({});
TextButtonWithBobbleBox.args = {
  label: 'Mark as read',
  icon: 'fa6-solid:check-double',
  variant: 'text',
  bobble: '99+'
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

export const TertiarySquareButtonBox = Template.bind({});
TertiarySquareButtonBox.args = {
  label: 'Full Report Download',
  icon: 'fa6-solid:file-arrow-down',
  variant: 'square',
  level: 'tertiary'
};

export const PrimarySquareWithBobbleButtonBox = Template.bind({});
PrimarySquareWithBobbleButtonBox.args = {
  label: 'Full Report Download',
  icon: 'fa6-solid:file-arrow-down',
  variant: 'square',
  level: 'primary',
  bobble: 3
};

export const SecondarySquareWithBobbleButtonBox = Template.bind({});
SecondarySquareWithBobbleButtonBox.args = {
  label: 'Full Report Download',
  icon: 'fa6-solid:file-arrow-down',
  variant: 'square',
  level: 'secondary',
  bobble: '9+'
};

export const TertiarySquareWithBobbleButtonBox = Template.bind({});
TertiarySquareWithBobbleButtonBox.args = {
  label: 'Full Report Download',
  icon: 'fa6-solid:file-arrow-down',
  variant: 'square',
  level: 'tertiary',
  bobble: 10
};

export const PrimarySquareWithDotButtonBox = Template.bind({});
PrimarySquareWithDotButtonBox.args = {
  label: 'Full Report Download',
  icon: 'fa6-solid:file-arrow-down',
  variant: 'square',
  level: 'primary',
  bobble: true
};

export const SecondarySquareWithDotButtonBox = Template.bind({});
SecondarySquareWithDotButtonBox.args = {
  label: 'Full Report Download',
  icon: 'fa6-solid:file-arrow-down',
  variant: 'square',
  level: 'secondary',
  bobble: true
};

export const TertiarySquareWithDotButtonBox = Template.bind({});
TertiarySquareWithDotButtonBox.args = {
  label: 'Full Report Download',
  icon: 'fa6-solid:file-arrow-down',
  variant: 'square',
  level: 'tertiary',
  bobble: true
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

export const TertiaryCircleButtonBox = Template.bind({});
TertiaryCircleButtonBox.args = {
  icon: 'fa6-solid:plus',
  variant: 'circle',
  level: 'tertiary'
};
