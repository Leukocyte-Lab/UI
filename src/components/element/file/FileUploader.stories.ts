import { fn } from '@storybook/test';

import type { Meta, StoryObj } from '@storybook/vue3';

import FileUploader from './FileUploader.vue';

const meta: Meta<typeof FileUploader> = {
  title: 'Components / Element / FileUploader',
  component: FileUploader,
  tags: ['autodocs'],
  argTypes: {
    required: {
      control: 'boolean',
      description: 'FileUploader required (optional)'
    },
    disabled: {
      control: 'boolean',
      description: 'FileUploader disabled (optional)'
    },
    accept: {
      control: 'object',
      description: 'Accept file type(s) (optional)'
    },
    multiple: {
      control: 'boolean',
      description: 'Upload multiple file (optional)'
    },
    readAs: {
      control: 'select',
      options: ['formData', 'stream', 'base64', 'binary', 'buffer', 'text'],
      description: 'Read file as (optional)'
    },
    icon: {
      control: 'text',
      description: 'FileUploader icon (optional)'
    },
    onUpload: {
      action: 'onUpload',
      description: 'File upload start'
    },
    onSuccess: {
      action: 'onSuccess',
      description: 'File upload success'
    },
    onAbort: {
      action: 'onAbort',
      description: 'File upload abort'
    },
    onDelete: {
      action: 'onDelete',
      description: 'File upload delete'
    },
    onError: {
      action: 'onError',
      description: 'File upload error'
    }
  },
  args: {
    onUpload: fn(),
    onSuccess: fn(),
    onAbort: fn(),
    onDelete: fn(),
    onError: fn()
  }
};

export default meta;

type FileUploader$ = StoryObj<typeof FileUploader>;

export const DefaultFileUploader: FileUploader$ = {
  args: {
    accept: '*',
    multiple: false,
    readAs: 'formData'
  }
};

export const MultiFileUploader: FileUploader$ = {
  args: {
    ...DefaultFileUploader.args,
    multiple: true
  }
};

export const LimitedFileUploader: FileUploader$ = {
  args: {
    ...MultiFileUploader.args,
    accept: ['jpg', 'jpeg', 'png', 'svg']
  }
};
