import type { Meta, StoryObj } from '@storybook/vue3';

import ProgressBar from './ProgressBar.vue';

const meta: Meta<typeof ProgressBar> = {
  title: 'Components / Progress / ProgressBar',
  component: ProgressBar,
  tags: ['autodocs'],
  argTypes: {
    value: {
      control: { type: 'range', min: 0, max: 1, step: 0.01 },
      description: 'The value of the progress bar. Must be between 0 and 1.'
    },
    variant: {
      control: 'radio',
      description: 'The variant of the progress bar.',
      options: ['concave', 'convex']
    },
    thickness: {
      control: { type: 'number', min: 0 },
      description: 'The thickness of the progress bar.'
    }
  },
  args: {
    style: 'width: 240px; height: 24px;'
  }
};

export default meta;

type ProgressBar$ = StoryObj<typeof ProgressBar>;

export const DefaultProgressBar: ProgressBar$ = {
  args: {
    value: 0.75,
    variant: 'concave'
  }
};

export const ConvexProgressBar: ProgressBar$ = {
  args: {
    value: 0.75,
    variant: 'convex'
  }
};
