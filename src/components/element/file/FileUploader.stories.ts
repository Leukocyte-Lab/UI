import FileUploader from './FileUploader.vue';

import type { Meta, StoryFn } from '@storybook/vue3';

export default {
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
      control: 'array',
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
  }
} satisfies Meta<typeof FileUploader>;

const Template: StoryFn<typeof FileUploader> = (args) => ({
  components: { FileUploader },
  setup() {
    return { args };
  },
  template: '<FileUploader v-bind="args" style="width: 1200px; height: 320px;" />'
});

export const DefaultFileUploader = Template.bind({});
DefaultFileUploader.args = {
  accept: '*',
  multiple: false,
  readAs: 'formData'
};

export const MultiFileUploader = Template.bind({});
MultiFileUploader.args = {
  ...DefaultFileUploader.args,
  multiple: true
};

export const LimitedFileUploader = Template.bind({});
LimitedFileUploader.args = {
  ...MultiFileUploader.args,
  accept: ['jpg', 'jpeg', 'png', 'svg']
};
