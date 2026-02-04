import { fn } from 'storybook/test';

import type { Meta, StoryObj } from '@storybook/vue3-vite';

import TextArea from './TextArea.vue';

const meta: Meta<typeof TextArea> = {
  title: 'Components / Element / TextArea',
  component: TextArea,
  tags: ['autodocs'],
  argTypes: {
    modelValue: {
      control: 'text',
      description: 'TextArea value, use by `v-model`.'
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
    'onUpdate:modelValue': { action: 'update' },
    'onValidation': { action: 'validation' }
  },
  args: {
    'onUpdate:modelValue': fn(),
    onValidation: fn()
  }
};

export default meta;

type TextArea$ = StoryObj<typeof TextArea>;

export const DefaultTextArea: TextArea$ = {

  args: {
    placeholder: 'Placeholder',
    modelValue: 'Default Value',
    required: false,
    disabled: false,
    readonly: false
  }
};

export const PlaceholderTextArea: TextArea$ = {

  args: {
    ...DefaultTextArea.args,
    modelValue: ''
  }
};

export const InvalidTextArea: TextArea$ = {

  args: {
    modelValue: '',
    required: true
  }
};

export const DisabledTextArea: TextArea$ = {

  args: {
    modelValue: 'Default Value',
    disabled: true
  }
};
