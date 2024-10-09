import type { Meta, StoryFn, StoryObj } from '@storybook/vue3';

import CardBox from './CardBox.vue';

import bindArgs from '@/../.storybook/helpers/bind-args';

const meta: Meta<typeof CardBox> = {
  title: 'Components / Element / CardBox',
  component: CardBox,
  tags: ['autodocs'],
  argTypes: {
    link: {
      control: 'text',
      description: 'Card link (optional)'
    },
    color: {
      control: 'select',
      description: 'Card color (optional)',
      options: ['default', 'cyan', 'blue', 'green', 'orange', 'red'],
      defaultValue: 'default'
    },
    variant: {
      control: 'radio',
      description: 'Card variant (optional)',
      options: ['metallic', 'flat', 'dash'],
      defaultValue: 'metallic'
    },
    purpose: {
      control: 'radio',
      description: 'Card purpose (optional)',
      options: ['container', 'box'],
      defaultValue: 'box'
    },
    strokeWeight: {
      control: 'radio',
      description: 'Card stroke weight (optional)',
      options: ['bold', 'normal', 'thin']
    },
    radius: {
      control: 'text',
      description:
        'Card radius (optional), default `var(--agh-ref-border-radius-500)` when `purpose` is `container`, otherwise `var(--agh-ref-border-radius-300)`'
    },
    hasStroke: {
      control: 'boolean',
      description: 'Card stroke (optional)',
      defaultValue: true
    },
    clickable: {
      control: 'boolean',
      description: 'Is card clickable (optional)',
      defaultValue: false
    },
    active: {
      control: 'boolean',
      description: 'Is card active (optional)',
      defaultValue: false
    }
  }
};

export default meta;

type CardBox$ = StoryObj<typeof CardBox>;

const Template: StoryFn<typeof CardBox> = (args) => ({
  components: { CardBox },
  setup() {
    return { args };
  },
  template: `
  <CardBox ${bindArgs(args)}>
    <div style="padding: 1em;">
      <h1>This is a CardBox</h1>
      <br />
      <p>Put something inside the slot to see it !</p>
    </div>
  </CardBox>
  `
})

export const DefaultCardBox: CardBox$ = {
  render: Template,
  args: {
    variant: 'metallic',
    purpose: 'box',
    color: 'default',
    hasStroke: true,
    clickable: false,
    strokeWeight: 'normal'
  }
};

export const MetallicDefaultCardBox: CardBox$ = {
  render: Template,
  args: {
    ...DefaultCardBox.args
  }
};

export const FlatDefaultCardBox: CardBox$ = {
  render: Template,
  args: {
    ...DefaultCardBox.args,
    variant: 'flat'
  }
};

export const DashDefaultCardBox: CardBox$ = {
  render: Template,
  args: {
    ...DefaultCardBox.args,
    variant: 'dash'
  }
};

export const MetallicCyanCardBox: CardBox$ = {
  render: Template,
  args: {
    ...MetallicDefaultCardBox.args,
    color: 'cyan'
  }
};

export const FlatCyanCardBox: CardBox$ = {
  render: Template,
  args: {
    ...FlatDefaultCardBox.args,
    color: 'cyan'
  }
};

export const DashCyanCardBox: CardBox$ = {
  render: Template,
  args: {
    ...DashDefaultCardBox.args,
    color: 'cyan'
  }
};

export const MetallicBlueCardBox: CardBox$ = {
  render: Template,
  args: {
    ...MetallicDefaultCardBox.args,
    color: 'blue'
  }
};

export const FlatBlueCardBox: CardBox$ = {
  render: Template,
  args: {
    ...FlatDefaultCardBox.args,
    color: 'blue'
  }
};

export const DashBlueCardBox: CardBox$ = {
  render: Template,
  args: {
    ...DashDefaultCardBox.args,
    color: 'blue'
  }
};

export const MetallicGreenCardBox: CardBox$ = {
  render: Template,
  args: {
    ...MetallicDefaultCardBox.args,
    color: 'green'
  }
};

export const FlatGreenCardBox: CardBox$ = {
  render: Template,
  args: {
    ...FlatDefaultCardBox.args,
    color: 'green'
  }
};

export const DashGreenCardBox: CardBox$ = {
  render: Template,
  args: {
    ...DashDefaultCardBox.args,
    color: 'green'
  }
};

export const MetallicOrangeCardBox: CardBox$ = {
  render: Template,
  args: {
    ...MetallicDefaultCardBox.args,
    color: 'orange'
  }
};

export const FlatOrangeCardBox: CardBox$ = {
  render: Template,
  args: {
    ...FlatDefaultCardBox.args,
    color: 'orange'
  }
};

export const DashOrangeCardBox: CardBox$ = {
  render: Template,
  args: {
    ...DashDefaultCardBox.args,
    color: 'orange'
  }
};

export const MetallicRedCardBox: CardBox$ = {
  render: Template,
  args: {
    ...MetallicDefaultCardBox.args,
    color: 'red'
  }
};

export const FlatRedCardBox: CardBox$ = {
  render: Template,
  args: {
    ...FlatDefaultCardBox.args,
    color: 'red'
  }
};

export const DashRedCardBox: CardBox$ = {
  render: Template,
  args: {
    ...DashDefaultCardBox.args,
    color: 'red'
  }
};
