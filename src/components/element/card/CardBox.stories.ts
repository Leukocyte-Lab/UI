import CardBox from './CardBox.vue';

import type { Meta, StoryFn } from '@storybook/vue3';

export default {
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
    hasStroke: {
      control: 'boolean',
      description: 'Card stroke (optional)',
      defaultValue: true
    },
    strokeWeight: {
      control: 'radio',
      description: 'Card stroke weight (optional)',
      options: ['bold', 'normal', 'thin']
    },
    radius: {
      control: 'string',
      description: 'Card radius (optional)',
      defaultValue: 'var(--agh-ref-border-radius-300)'
    },
    clickable: {
      control: 'boolean',
      description: 'Is card clickable (optional)',
      defaultValue: false
    }
  }
} satisfies Meta<typeof CardBox>;

const Template: StoryFn<typeof CardBox> = (args) => ({
  components: { CardBox },
  setup() {
    return { args };
  },
  template: `<CardBox v-bind="args">${args.default}</CardBox>`
});

export const DefaultCardBox = Template.bind({});
DefaultCardBox.args = {
  default: `<div data-demo-content>
    <h1>This is a CardBox</h1>
    <br />
    <p>put something in the slot to see it</p>
  </div>`.replace(/\n/g, ''),
  variant: 'metallic',
  purpose: 'box',
  color: 'default',
  hasStroke: true,
  clickable: false,
  strokeWeight: 'normal',
  radius: 'var(--agh-ref-border-radius-300)'
};

export const MetallicDefaultCardBox = Template.bind({});
MetallicDefaultCardBox.args = {
  ...DefaultCardBox.args,
};

export const FlatDefaultCardBox = Template.bind({});
FlatDefaultCardBox.args = {
  ...DefaultCardBox.args,
  variant: 'flat'
};

export const DashDefaultCardBox = Template.bind({});
DashDefaultCardBox.args = {
  ...DefaultCardBox.args,
  variant: 'dash'
};

export const MetallicCyanCardBox = Template.bind({});
MetallicCyanCardBox.args = {
  ...MetallicDefaultCardBox.args,
  color: 'cyan'
};

export const FlatCyanCardBox = Template.bind({});
FlatCyanCardBox.args = {
  ...FlatDefaultCardBox.args,
  color: 'cyan'
};

export const DashCyanCardBox = Template.bind({});
DashCyanCardBox.args = {
  ...DashDefaultCardBox.args,
  color: 'cyan'
};

export const MetallicBlueCardBox = Template.bind({});
MetallicBlueCardBox.args = {
  ...MetallicDefaultCardBox.args,
  color: 'blue'
};

export const FlatBlueCardBox = Template.bind({});
FlatBlueCardBox.args = {
  ...FlatDefaultCardBox.args,
  color: 'blue'
};

export const DashBlueCardBox = Template.bind({});
DashBlueCardBox.args = {
  ...DashDefaultCardBox.args,
  color: 'blue'
};

export const MetallicGreenCardBox = Template.bind({});
MetallicGreenCardBox.args = {
  ...MetallicDefaultCardBox.args,
  color: 'green'
};

export const FlatGreenCardBox = Template.bind({});
FlatGreenCardBox.args = {
  ...FlatDefaultCardBox.args,
  color: 'green'
};

export const DashGreenCardBox = Template.bind({});
DashGreenCardBox.args = {
  ...DashDefaultCardBox.args,
  color: 'green'
};

export const MetallicOrangeCardBox = Template.bind({});
MetallicOrangeCardBox.args = {
  ...MetallicDefaultCardBox.args,
  color: 'orange'
};

export const FlatOrangeCardBox = Template.bind({});
FlatOrangeCardBox.args = {
  ...FlatDefaultCardBox.args,
  color: 'orange'
};

export const DashOrangeCardBox = Template.bind({});
DashOrangeCardBox.args = {
  ...DashDefaultCardBox.args,
  color: 'orange'
};

export const MetallicRedCardBox = Template.bind({});
MetallicRedCardBox.args = {
  ...MetallicDefaultCardBox.args,
  color: 'red'
};

export const FlatRedCardBox = Template.bind({});
FlatRedCardBox.args = {
  ...FlatDefaultCardBox.args,
  color: 'red'
};

export const DashRedCardBox = Template.bind({});
DashRedCardBox.args = {
  ...DashDefaultCardBox.args,
  color: 'red'
};
