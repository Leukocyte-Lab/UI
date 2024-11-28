import type { Meta, StoryObj } from '@storybook/vue3';

import BadgeBox from './BadgeBox.vue';

const meta: Meta<typeof BadgeBox> = {
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
};

export default meta;

type BadgeBox$ = StoryObj<typeof BadgeBox>;

export const DefaultBadgeBox: BadgeBox$ = {
  args: {
    label: 'T1071.001',
    content: 'Web Protocols',
    delimiter: '.',
    variant: 'capsule',
    color: 'default'
  }
};

export const CapsuleBadgeBox: BadgeBox$ = {
  args: {
    label: 'T1071.001',
    content: 'Web Protocols',
    delimiter: '.',
    variant: 'capsule',
    color: 'purple'
  }
};

export const CapsuleBadgeBoxWithIcon: BadgeBox$ = {
  args: {
    label: 'T1071.001',
    content: 'Web Protocols',
    icon: 'fa6-solid:skull',
    delimiter: '.',
    variant: 'capsule',
    color: 'purple'
  }
};

export const CapsuleLabelOnlyBadgeBox: BadgeBox$ = {
  args: {
    label: 'T1071.001',
    variant: 'capsule',
    delimiter: '.',
    color: 'purple'
  }
};

export const CapsuleLabelOnlyBadgeBoxWithIcon: BadgeBox$ = {
  args: {
    label: 'T1071.001',
    icon: 'fa6-solid:skull',
    variant: 'capsule',
    delimiter: '.',
    color: 'purple'
  }
};

export const CapsuleContentOnlyBadgeBox: BadgeBox$ = {
  args: {
    content: 'Web Protocols',
    variant: 'capsule',
    color: 'purple'
  }
};

export const TabBadgeBox: BadgeBox$ = {
  args: {
    label: 'ArgusHack',
    content: '172.17.43.169',
    variant: 'tab',
    color: 'cyan'
  }
};
