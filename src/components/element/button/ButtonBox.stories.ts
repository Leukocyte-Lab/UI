import { fn } from '@storybook/test';

import type { Meta, StoryObj } from '@storybook/vue3';

import ButtonBox from './ButtonBox.vue';

const meta: Meta<typeof ButtonBox> = {
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
    onClick: {
      action: 'onClick',
      description: 'Button click event'
    }
  },
  args: {
    onClick: fn()
  }
};

export default meta;

type ButtonBox$ = StoryObj<typeof ButtonBox>;

export const DefaultRoundedButtonBox: ButtonBox$ = {
  args: {
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
  }
};

export const PrimaryRoundedButtonBox: ButtonBox$ = {
  args: {
    label: 'View Docs',
    level: 'primary',
    variant: 'rounded'
  }
};

export const SecondaryRoundedButtonBox: ButtonBox$ = {
  args: {
    label: 'View Docs',
    level: 'secondary',
    variant: 'rounded'
  }
};

export const TertiaryRoundedButtonBox: ButtonBox$ = {
  args: {
    label: 'View Docs',
    level: 'tertiary',
    variant: 'rounded'
  }
};

export const PrimaryRoundedWithIconButtonBox: ButtonBox$ = {
  args: {
    label: 'View Docs',
    level: 'primary',
    variant: 'rounded',
    icon: 'fa6-solid:angle-right'
  }
};

export const SecondaryRoundedWithIconButtonBox: ButtonBox$ = {
  args: {
    label: 'View Docs',
    level: 'secondary',
    variant: 'rounded',
    icon: 'fa6-solid:angle-right'
  }
};

export const TertiaryRoundedWithIconButtonBox: ButtonBox$ = {
  args: {
    label: 'View Docs',
    level: 'tertiary',
    variant: 'rounded',
    icon: 'fa6-solid:angle-right'
  }
};

export const PrimaryRoundedWithLoadingButtonBox: ButtonBox$ = {
  args: {
    label: 'View Docs',
    level: 'primary',
    variant: 'rounded',
    loading: true
  }
};

export const SecondaryRoundedWithLoadingButtonBox: ButtonBox$ = {
  args: {
    label: 'View Docs',
    level: 'secondary',
    variant: 'rounded',
    loading: true
  }
};

export const TertiaryRoundedWithLoadingButtonBox: ButtonBox$ = {
  args: {
    label: 'View Docs',
    level: 'tertiary',
    variant: 'rounded',
    loading: true
  }
};

export const PrimaryRoundedWithDotButtonBox: ButtonBox$ = {
  args: {
    label: 'View Docs',
    level: 'primary',
    variant: 'rounded',
    bobble: true
  }
};

export const PrimaryRoundedWithBobbleButtonBox: ButtonBox$ = {
  args: {
    label: 'View Docs',
    level: 'primary',
    variant: 'rounded',
    bobble: 3
  }
};

export const SecondaryRoundedWithBobbleButtonBox: ButtonBox$ = {
  args: {
    label: 'View Docs',
    level: 'secondary',
    variant: 'rounded',
    bobble: '9+'
  }
};

export const TertiaryRoundedWithBobbleButtonBox: ButtonBox$ = {
  args: {
    label: 'View Docs',
    level: 'tertiary',
    variant: 'rounded',
    bobble: 'New'
  }
};

export const PrimaryRectButtonBox: ButtonBox$ = {
  args: {
    label: 'Back to Project',
    icon: 'fa6-solid:door-closed',
    variant: 'rect',
    level: 'primary'
  }
};

export const SecondaryRectButtonBox: ButtonBox$ = {
  args: {
    label: 'Back to Project',
    icon: 'fa6-solid:door-closed',
    variant: 'rect',
    level: 'secondary'
  }
};

export const TertiaryRectButtonBox: ButtonBox$ = {
  args: {
    label: 'Back to Project',
    icon: 'fa6-solid:door-closed',
    variant: 'rect',
    level: 'tertiary'
  }
};

export const PrimaryRectWithDotButtonBox: ButtonBox$ = {
  args: {
    label: 'Select Coupon',
    icon: 'fa6-solid:angle-down',
    variant: 'rect',
    level: 'primary',
    bobble: true
  }
};

export const PrimaryRectWithBobbleButtonBox: ButtonBox$ = {
  args: {
    label: 'Select Coupon',
    icon: 'fa6-solid:angle-down',
    variant: 'rect',
    level: 'primary',
    bobble: 3
  }
};

export const SecondaryRectWithBobbleButtonBox: ButtonBox$ = {
  args: {
    label: 'Select Coupon',
    icon: 'fa6-solid:angle-down',
    variant: 'rect',
    level: 'secondary',
    bobble: '99+'
  }
};

export const TertiaryRectWithBobbleButtonBox: ButtonBox$ = {
  args: {
    label: 'Select Coupon',
    icon: 'fa6-solid:angle-down',
    variant: 'rect',
    level: 'tertiary',
    bobble: 'New'
  }
};

export const ExtendableRectButtonBox: ButtonBox$ = {
  args: {
    label: 'Back to Project',
    icon: 'fa6-solid:door-closed',
    variant: 'extendable-rect',
    level: 'primary'
  }
};

export const TextButtonBox: ButtonBox$ = {
  args: {
    label: 'Mark as read',
    icon: 'fa6-solid:check-double',
    variant: 'text'
  }
};

export const TextButtonWithDotBox: ButtonBox$ = {
  args: {
    icon: 'fa6-solid:filter',
    variant: 'text',
    bobble: true
  }
};

export const TextButtonWithBobbleBox: ButtonBox$ = {
  args: {
    label: 'Mark as read',
    icon: 'fa6-solid:check-double',
    variant: 'text',
    bobble: '99+'
  }
};

export const PrimarySquareButtonBox: ButtonBox$ = {
  args: {
    label: 'Full Report Download',
    icon: 'fa6-solid:file-arrow-down',
    variant: 'square',
    level: 'primary'
  }
};

export const SecondarySquareButtonBox: ButtonBox$ = {
  args: {
    label: 'Full Report Download',
    icon: 'fa6-solid:file-arrow-down',
    variant: 'square',
    level: 'secondary'
  }
};

export const TertiarySquareButtonBox: ButtonBox$ = {
  args: {
    label: 'Full Report Download',
    icon: 'fa6-solid:file-arrow-down',
    variant: 'square',
    level: 'tertiary'
  }
};

export const PrimarySquareWithBobbleButtonBox: ButtonBox$ = {
  args: {
    label: 'Full Report Download',
    icon: 'fa6-solid:file-arrow-down',
    variant: 'square',
    level: 'primary',
    bobble: 3
  }
};

export const SecondarySquareWithBobbleButtonBox: ButtonBox$ = {
  args: {
    label: 'Full Report Download',
    icon: 'fa6-solid:file-arrow-down',
    variant: 'square',
    level: 'secondary',
    bobble: '9+'
  }
};

export const TertiarySquareWithBobbleButtonBox: ButtonBox$ = {
  args: {
    label: 'Full Report Download',
    icon: 'fa6-solid:file-arrow-down',
    variant: 'square',
    level: 'tertiary',
    bobble: 10
  }
};

export const PrimarySquareWithDotButtonBox: ButtonBox$ = {
  args: {
    label: 'Full Report Download',
    icon: 'fa6-solid:file-arrow-down',
    variant: 'square',
    level: 'primary',
    bobble: true
  }
};

export const SecondarySquareWithDotButtonBox: ButtonBox$ = {
  args: {
    label: 'Full Report Download',
    icon: 'fa6-solid:file-arrow-down',
    variant: 'square',
    level: 'secondary',
    bobble: true
  }
};

export const TertiarySquareWithDotButtonBox: ButtonBox$ = {
  args: {
    label: 'Full Report Download',
    icon: 'fa6-solid:file-arrow-down',
    variant: 'square',
    level: 'tertiary',
    bobble: true
  }
};

export const TextSquareButtonBox: ButtonBox$ = {
  args: {
    label: 'Full Report Download',
    icon: 'fa6-solid:file-arrow-down',
    variant: 'text-square'
  }
};

export const PrimaryCircleButtonBox: ButtonBox$ = {
  args: {
    icon: 'fa6-solid:plus',
    variant: 'circle',
    level: 'primary'
  }
};

export const SecondaryCircleButtonBox: ButtonBox$ = {
  args: {
    icon: 'fa6-solid:plus',
    variant: 'circle',
    level: 'secondary'
  }
};

export const TertiaryCircleButtonBox: ButtonBox$ = {
  args: {
    icon: 'fa6-solid:plus',
    variant: 'circle',
    level: 'tertiary'
  }
};
