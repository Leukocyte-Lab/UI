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
  },
  parameters: {
    slots: {
      default: {
        template: `
          <div style="padding: 1em;">
            <h1>This is a CardBox</h1>
            <br />
            <p>Put something inside the slot to see it !</p>
          </div>
        `
      }
    }
  }
};

export default meta;

type CardBox$ = StoryObj<typeof CardBox>;

export const DefaultCardBox: CardBox$ = {
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
  args: {
    ...DefaultCardBox.args
  }
};

export const FlatDefaultCardBox: CardBox$ = {
  args: {
    ...DefaultCardBox.args,
    variant: 'flat'
  }
};

export const DashDefaultCardBox: CardBox$ = {
  args: {
    ...DefaultCardBox.args,
    variant: 'dash'
  }
};

export const MetallicCyanCardBox: CardBox$ = {
  args: {
    ...MetallicDefaultCardBox.args,
    color: 'cyan'
  }
};

export const FlatCyanCardBox: CardBox$ = {
  args: {
    ...FlatDefaultCardBox.args,
    color: 'cyan'
  }
};

export const DashCyanCardBox: CardBox$ = {
  args: {
    ...DashDefaultCardBox.args,
    color: 'cyan'
  }
};

export const MetallicBlueCardBox: CardBox$ = {
  args: {
    ...MetallicDefaultCardBox.args,
    color: 'blue'
  }
};

export const FlatBlueCardBox: CardBox$ = {
  args: {
    ...FlatDefaultCardBox.args,
    color: 'blue'
  }
};

export const DashBlueCardBox: CardBox$ = {
  args: {
    ...DashDefaultCardBox.args,
    color: 'blue'
  }
};

export const MetallicGreenCardBox: CardBox$ = {
  args: {
    ...MetallicDefaultCardBox.args,
    color: 'green'
  }
};

export const FlatGreenCardBox: CardBox$ = {
  args: {
    ...FlatDefaultCardBox.args,
    color: 'green'
  }
};

export const DashGreenCardBox: CardBox$ = {
  args: {
    ...DashDefaultCardBox.args,
    color: 'green'
  }
};

export const MetallicOrangeCardBox: CardBox$ = {
  args: {
    ...MetallicDefaultCardBox.args,
    color: 'orange'
  }
};

export const FlatOrangeCardBox: CardBox$ = {
  args: {
    ...FlatDefaultCardBox.args,
    color: 'orange'
  }
};

export const DashOrangeCardBox: CardBox$ = {
  args: {
    ...DashDefaultCardBox.args,
    color: 'orange'
  }
};

export const MetallicRedCardBox: CardBox$ = {
  args: {
    ...MetallicDefaultCardBox.args,
    color: 'red'
  }
};

export const FlatRedCardBox: CardBox$ = {
  args: {
    ...FlatDefaultCardBox.args,
    color: 'red'
  }
};

export const DashRedCardBox: CardBox$ = {
  args: {
    ...DashDefaultCardBox.args,
    color: 'red'
  }
};
