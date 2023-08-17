import LoadingIcon from './LoadingIcon.vue';

import type { Meta, StoryFn } from '@storybook/vue3';

export default {
  title: 'Components / Icon / LoadingIcon',
  component: LoadingIcon,
  tags: ['autodocs'],
  argTypes: {
    status: {
      control: 'radio',
      description: 'The status of the loading icon.',
      options: ['waiting', 'loading', 'succeeded', 'failed']
    }
  }
} satisfies Meta<typeof LoadingIcon>;

const Template: StoryFn<typeof LoadingIcon> = (args) => ({
  components: { LoadingIcon },
  setup() {
    return { args };
  },
  template: '<LoadingIcon v-bind="args" style="width: 48px; height: 48px;" />'
});

export const DefaultLoadingIcon = Template.bind({});
DefaultLoadingIcon.args = {
  status: 'loading'
};

export const WaitingLoadingIcon = Template.bind({});
WaitingLoadingIcon.args = {
  status: 'waiting'
};

export const SucceededLoadingIcon = Template.bind({});
SucceededLoadingIcon.args = {
  status: 'succeeded'
};

export const FailedLoadingIcon = Template.bind({});
FailedLoadingIcon.args = {
  status: 'failed'
};
