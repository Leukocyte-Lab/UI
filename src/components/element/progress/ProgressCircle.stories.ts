import ProgressCircle from './ProgressCircle.vue';

import type { Meta, StoryFn } from '@storybook/vue3';

export default {
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
} satisfies Meta<typeof ProgressCircle>;

const Template: StoryFn<typeof ProgressCircle> = (args) => ({
  components: { ProgressCircle },
  setup() {
    return { args };
  },
  template: '<ProgressCircle v-bind="args" style="width: 125px; height: 125px;" />'
});

export const DefaultProgressCircle = Template.bind({});
DefaultProgressCircle.args = {
  value: 0.75,
  variant: 'concave'
};

export const ConvexProgressCircle = Template.bind({});
ConvexProgressCircle.args = {
  value: 0.75,
  variant: 'convex'
};
