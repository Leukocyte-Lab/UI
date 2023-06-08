import ProgressBar from './ProgressBar.vue';

import type { Meta, StoryFn } from '@storybook/vue3';

export default {
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
  }
} satisfies Meta<typeof ProgressBar>;

const Template: StoryFn<typeof ProgressBar> = (args) => ({
  components: { ProgressBar },
  setup() {
    return { args };
  },
  template: '<ProgressBar v-bind="args" style="width: 480px; height: 24px;" />'
});

export const DefaultProgressBar = Template.bind({});
DefaultProgressBar.args = {
  value: 0.75,
  variant: 'concave'
};

export const ConvexProgressBar = Template.bind({});
ConvexProgressBar.args = {
  value: 0.75,
  variant: 'convex'
};
