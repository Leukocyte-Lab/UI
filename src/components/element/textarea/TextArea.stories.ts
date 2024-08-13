import { omit } from 'lodash-es';
import { fn } from '@storybook/test';

import type { Meta, StoryFn, StoryObj } from '@storybook/vue3';

import TextArea from './TextArea.vue';

import bindArgs from '@/../.storybook/helpers/bind-args';

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

const Template: StoryFn<typeof TextArea> = (args) => ({
  components: { TextArea },
  setup() {
    return { args };
  },
  template: `
    <TextArea
      ${bindArgs(omit(
    args,
    [
      'eventSignalOptions',
      'invalidMessage',
      'modelValue',
      'onUpdate:modelValue',
      'onValidation',
    ]
  ))}
      v-model="args.modelValue"
      @validation="args.onValidation"
    />
  `
});

export const DefaultTextArea: TextArea$ = {
  render: Template,

  args: {
    placeholder: 'Placeholder',
    modelValue: 'Default Value',
    required: false,
    disabled: false,
    readonly: false
  }
};

export const PlaceholderTextArea: TextArea$ = {
  render: Template,

  args: {
    ...DefaultTextArea.args,
    modelValue: ''
  }
};

export const InvalidTextArea: TextArea$ = {
  render: Template,

  args: {
    modelValue: '',
    required: true
  }
};

export const DisabledTextArea: TextArea$ = {
  render: Template,

  args: {
    modelValue: 'Default Value',
    disabled: true
  }
};
