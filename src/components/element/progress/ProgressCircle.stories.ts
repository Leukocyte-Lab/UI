import type { Meta, StoryObj } from '@storybook/vue3-vite';

import ProgressCircle from './ProgressCircle.vue';

const meta: Meta<typeof ProgressCircle> = {
  title: 'Components / Progress / ProgressCircle',
  component: ProgressCircle,
  tags: ['autodocs'],
  argTypes: {
    value: {
      control: { type: 'range', min: 0, max: 1, step: 0.01 },
      description: 'The value of the progress circle. Must be between 0 and 1.'
    },
    variant: {
      control: 'radio',
      description: 'The variant of the progress circle.',
      options: ['concave', 'convex']
    },
    thickness: {
      control: { type: 'number', min: 0 },
      description: 'The thickness of the progress circle.'
    }
  }
};

export default meta;

type ProgressCircle$ = StoryObj<typeof ProgressCircle>;

export const DefaultProgressCircle: ProgressCircle$ = {
  args: {
    style: {
      width: '125px',
      height: '125px'
    },
    value: 0.75,
    variant: 'concave'
  }
};

export const ConvexProgressCircle: ProgressCircle$ = {
  args: {
    style: {
      width: '125px',
      height: '125px'
    },
    value: 0.75,
    variant: 'convex'
  }
};
