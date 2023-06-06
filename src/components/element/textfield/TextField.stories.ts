import TextField from './TextField.vue';

import type { Meta, StoryFn } from '@storybook/vue3';

export default {
  title: 'Components / Element / TextField',
  component: TextField,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      description: 'TextField type (optional)',
      options: ['text', 'password', 'email', 'number', 'tel', 'url', 'search', 'date', 'time', 'datetime-local', 'month', 'week', 'color'],
      defaultValue: 'text'
    },
    value: {
      control: 'text',
      description: 'TextField value'
    },
    label: {
      control: 'text',
      description: 'TextField label (optional)'
    },
    name: {
      control: 'text',
      description: 'TextField name (optional)'
    },
    placeholder: {
      control: 'text',
      description: 'TextField placeholder (optional)'
    },
    disabled: {
      control: 'boolean',
      description: 'TextField disabled (optional)'
    },
    readonly: {
      control: 'boolean',
      description: 'TextField readonly (optional)'
    },
    required: {
      control: 'boolean',
      description: 'TextField required (optional)'
    },
    spellcheck: {
      control: 'boolean',
      description: 'TextField spellcheck (optional)'
    },
    autofocus: {
      control: 'boolean',
      description: 'TextField autofocus (optional)'
    },
    autocomplete: {
      control: 'select',
      description: 'TextField autocomplete (optional)',
      options: ['on', 'off'],
      defaultValue: 'off'
    },
    size: {
      control: 'number',
      description: 'TextField size (optional)'
    },
    maxlength: {
      control: 'number',
      description: 'TextField maxlength (optional)'
    },
    minlength: {
      control: 'number',
      description: 'TextField minlength (optional)'
    },
    pattern: {
      control: 'text',
      description: 'TextField pattern (optional)'
    },
    tabindex: {
      control: 'number',
      description: 'TextField tabindex (optional)'
    },
    inputmode: {
      control: 'select',
      description: 'TextField inputmode (optional)',
      options: ['none', 'text', 'decimal', 'numeric', 'tel', 'search', 'email', 'url'],
      defaultValue: 'text'
    },
    "onUpdate:modelValue": { action: 'update' }
  }
} satisfies Meta<typeof TextField>;

const Template: StoryFn<typeof TextField> = (args) => ({
  components: { TextField },
  setup() {
    return { args };
  },
  template: '<TextField v-model="args.value" v-bind="args" />'
});

export const DefaultTextField = Template.bind({});
DefaultTextField.args = {
  required: true,
  placeholder: 'Placeholder',
  value: '',
  label: 'Label',
  disabled: false,
  readonly: false,
  type: 'text'
};
