import { omit } from 'lodash-es';
import { fn } from '@storybook/test';

import type { Meta, StoryFn, StoryObj } from '@storybook/vue3';

import TextField from './TextField.vue';

const meta: Meta<typeof TextField> = {
  title: 'Components / Element / TextField',
  component: TextField,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      description: 'TextField type (optional)',
      options: [
        'text',
        'password',
        'email',
        'number',
        'tel',
        'url',
        'search',
        'date',
        'time',
        'datetime-local',
        'month',
        'week',
        'color'
      ],
      defaultValue: 'text'
    },
    modelValue: {
      control: 'text',
      description: 'TextField value, use by `v-model`.'
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
    invalidMessage: {
      control: 'object',
      description: 'TextField invalid message (optional)'
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

type TextField$ = StoryObj<typeof TextField>;

export const DefaultTextField: TextField$ = {
  args: {
    placeholder: 'Placeholder',
    modelValue: 'Default Value',
    label: 'Label',
    required: false,
    disabled: false,
    readonly: false,
    type: 'text'
  }
};

export const IconTextField: TextField$ = {
  args: {
    placeholder: 'Placeholder',
    modelValue: 'Default Value',
    required: false,
    disabled: false,
    readonly: false,
    icon: 'fa6-solid:rotate-left',
    type: 'text',
    iconClick: () => console.log('test')
  }
};

export const EmptyRequiredTextField: TextField$ = {
  args: {
    placeholder: 'Placeholder',
    modelValue: '',
    label: 'Label',
    required: true,
    disabled: false,
    readonly: false,
    type: 'text'
  }
};

export const NoLabelTextField: TextField$ = {
  args: {
    placeholder: 'Placeholder',
    modelValue: 'Default Value',
    required: false,
    disabled: false,
    readonly: false,
    type: 'text'
  }
};

export const NoLabelRequiredTextField: TextField$ = {
  args: {
    placeholder: 'Placeholder',
    modelValue: 'Default Value',
    required: true,
    disabled: false,
    readonly: false,
    type: 'text'
  }
};

export const DisabledTextField: TextField$ = {
  args: {
    modelValue: 'Default Value',
    disabled: true
  }
};

export const InvalidTextField: TextField$ = {
  args: {
    modelValue: '256.256.256.256',
    pattern: '^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)(\\.|$)){4}$',
    required: true
  }
};

export const InvalidWithCustomErrorMessageTextField: TextField$ = {
  args: {
    modelValue: '256.256.256.256',
    pattern: '^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)(\\.|$)){4}$',
    required: true,
    invalidMessage: {
      patternMismatch: 'Invalid IP Address',
      valueMissing: 'IP Address is required'
    }
  }
};

export const SearchTextField: TextField$ = {
  args: {
    type: 'search'
  }
};

export const DisabledSearchTextField: TextField$ = {
  args: {
    ...SearchTextField.args,
    disabled: true
  }
};

export const FindTextField: TextField$ = {
  args: {
    type: 'search',
    iconAlign: 'left'
  }
};

export const DisabledFindTextField: TextField$ = {
  args: {
    ...FindTextField.args,
    disabled: true
  }
};
