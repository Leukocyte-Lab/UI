import type { Meta, StoryObj } from '@storybook/vue3-vite';

import LoadingIcon from './LoadingIcon.vue';

const meta: Meta<typeof LoadingIcon> = {
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
};

export default meta;

type LoadingIcon$ = StoryObj<typeof LoadingIcon>;

export const DefaultLoadingIcon: LoadingIcon$ = {
  args: {
    style: {
      width: '48px',
      height: '48px'
    },
    status: 'loading'
  }
};

export const WaitingLoadingIcon: LoadingIcon$ = {
  args: {
    style: {
      width: '48px',
      height: '48px'
    },
    status: 'waiting'
  }
};

export const SucceededLoadingIcon: LoadingIcon$ = {
  args: {
    style: {
      width: '48px',
      height: '48px'
    },
    status: 'succeeded'
  }
};

export const FailedLoadingIcon: LoadingIcon$ = {
  args: {
    style: {
      width: '48px',
      height: '48px'
    },
    status: 'failed'
  }
};
