import TextArea from './TextArea.vue';

import type { Meta, StoryFn } from '@storybook/vue3';

export default {
  title: 'Components / Element / TextArea',
  component: TextArea,
  tags: ['autodocs'],
  argTypes: {
    modelValue: {
      control: 'text',
      description: 'TextArea value, use by `v-model`.'
    },
    label: {
      control: 'text',
      description: 'TextArea label (optional)'
    },
    name: {
      control: 'text',
      description: 'TextArea name (optional)'
    },
    placeholder: {
      control: 'text',
      description: 'TextArea placeholder (optional)'
    },
    disabled: {
      control: 'boolean',
      description: 'TextArea disabled (optional)'
    },
    readonly: {
      control: 'boolean',
      description: 'TextArea readonly (optional)'
    },
    required: {
      control: 'boolean',
      description: 'TextArea required (optional)'
    },
    spellcheck: {
      control: 'boolean',
      description: 'TextArea spellcheck (optional)'
    },
    autofocus: {
      control: 'boolean',
      description: 'TextArea autofocus (optional)'
    },
    autocomplete: {
      control: 'select',
      description: 'TextArea autocomplete (optional)',
      options: ['on', 'off'],
      defaultValue: 'off'
    },
    size: {
      control: 'number',
      description: 'TextArea size (optional)'
    },
    maxlength: {
      control: 'number',
      description: 'TextArea maxlength (optional)'
    },
    minlength: {
      control: 'number',
      description: 'TextArea minlength (optional)'
    },
    tabindex: {
      control: 'number',
      description: 'TextArea tabindex (optional)'
    },
    invalidMessage: {
      control: 'object',
      description: 'TextArea invalid message (optional)'
    },
    'onUpdate:modelValue': { action: 'update' }
  }
} satisfies Meta<typeof TextArea>;

const Template: StoryFn<typeof TextArea> = (args) => ({
  components: { TextArea },
  setup() {
    return { args };
  },
  template: '<TextArea v-model="args.modelValue" v-bind="args" />'
});

export const DefaultTextArea = Template.bind({});
DefaultTextArea.args = {
  placeholder: 'Placeholder',
  modelValue: 'Default Value',
  required: false,
  disabled: false,
  readonly: false
};

export const PlaceholderTextArea = Template.bind({});
PlaceholderTextArea.args = {
  ...DefaultTextArea.args,
  modelValue: ''
};

export const InvalidTextArea = Template.bind({});
InvalidTextArea.args = {
  modelValue: '',
  required: true
};

export const DisabledTextArea = Template.bind({});
DisabledTextArea.args = {
  modelValue: 'Default Value',
  disabled: true
};
