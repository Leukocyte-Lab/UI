import BadgeBox from './BadgeBox.vue';

import type { Meta, StoryFn } from '@storybook/vue3';

export default {
  title: 'Components / Element / BadgeBox',
  component: BadgeBox,
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: 'Badge label'
    },
    content: {
      control: 'text',
      description: 'Badge content (optional)'
    },
    delimiter: {
      control: 'text',
      description: 'Badge delimiter, only applied on label (optional)'
    },
    color: {
      control: 'select',
      description: 'Badge color (optional)',
      options: ['default', 'cyan', 'blue', 'green', 'orange', 'red', 'purple'],
      defaultValue: 'default'
    },
    variant: {
      control: 'radio',
      description: 'Badge variant (optional)',
      options: ['capsule', 'tab'],
      defaultValue: 'capsule'
    },
    link: {
      control: 'text',
      description: 'Badge link (optional)'
    }
  }
} satisfies Meta<typeof BadgeBox>;

const Template: StoryFn<typeof BadgeBox> = (args) => ({
  components: { BadgeBox },
  setup() {
    return { args };
  },
  template: '<BadgeBox v-bind="args" />'
});

export const DefaultBadgeBox = Template.bind({});
DefaultBadgeBox.args = {
  label: 'T1071.001',
  content: 'Web Protocols',
  delimiter: '.',
  variant: 'capsule',
  color: 'default'
};

export const CapsuleBadgeBox = Template.bind({});
CapsuleBadgeBox.args = {
  label: 'T1071.001',
  content: 'Web Protocols',
  delimiter: '.',
  variant: 'capsule',
  color: 'purple'
};

export const CapsuleLabelOnlyBadgeBox = Template.bind({});
CapsuleLabelOnlyBadgeBox.args = {
  label: 'T1071.001',
  variant: 'capsule',
  delimiter: '.',
  color: 'purple'
};

export const CapsuleContentOnlyBadgeBox = Template.bind({});
CapsuleContentOnlyBadgeBox.args = {
  content: 'Web Protocols',
  variant: 'capsule',
  color: 'purple'
};

export const TabBadgeBox = Template.bind({});
TabBadgeBox.args = {
  label: 'ArgusHack',
  content: '172.17.43.169',
  variant: 'tab',
  color: 'cyan'
};
