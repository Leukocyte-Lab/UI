import DropDown from './DropDown.vue';

import type { Meta, StoryFn } from '@storybook/vue3';

export default {
  title: 'Components / Element / DropDown',
  component: DropDown,
  tags: ['autodocs'],
  argTypes: {
    items: {
      control: 'object',
      description: 'Data to be displayed in the menu.'
    },
    modelValue: {
      control: 'object',
      description: 'DropDown value, use by `v-model`.'
    },
    level: {
      control: 'radio',
      description: 'Button level (optional)',
      options: ['primary', 'secondary'],
      defaultValue: 'primary'
    },
    size: {
      control: 'radio',
      description: 'Button size (optional)',
      options: ['small', 'large'],
      defaultValue: 'primary'
    },
    disabled: {
      control: 'boolean',
      description: 'DropDown disabled (optional)'
    },
    'onUpdate:modelValue': {
      action: 'selected'
    }
  }
} satisfies Meta<typeof DropDown>;

const Template: StoryFn<typeof DropDown> = (args) => ({
  components: { DropDown },
  setup() {
    return { args };
  },
  template: '<DropDown v-model="args.modelValue" v-bind="args" />'
});

export const DefaultDropDown = Template.bind({});
DefaultDropDown.args = {
  items: [
    {
      name: 'APT-38',
      description:
        'APT-38 is a threat group that has been attributed to the North Korean government.',
      category: 'APT Group Simulation Data',
      recentlyUsed: '2021-01-01T00:00:00Z'
    },
    {
      name: 'APT-39',
      description: 'APT-39 is a threat group that has been attributed to the Iranian government.',
      category: 'APT Group Simulation Data',
      recentlyUsed: '2021-01-01T00:00:00Z'
    },
    {
      name: 'APT-40',
      description: 'APT-40 is a threat group that has been attributed to the Chinese government.',
      category: 'APT Group Simulation Data',
      recentlyUsed: '2021-01-01T00:00:00Z'
    },
    {
      name: 'Nginx Techniques',
      description:
        'Nginx is a web server that can also be used as a reverse proxy, load balancer, mail proxy and HTTP cache.',
      category: 'Technique Simulation Data',
      recentlyUsed: '2021-01-01T00:00:00Z'
    },
    {
      name: 'Apache Techniques',
      description:
        'Apache is a web server that can also be used as a reverse proxy, load balancer, mail proxy and HTTP cache.',
      category: 'Technique Simulation Data',
      recentlyUsed: '2021-01-01T00:00:00Z'
    }
  ],
  fields: {
    key: 'name',
    title: '{{ $.name }}'
  },
  modelValue: {
    name: 'APT-38',
  }
};

export const DefaultDropDownWithSearch = Template.bind({});
DefaultDropDownWithSearch.args = {
  ...DefaultDropDown.args,
  useSearch: true
};

export const MultiDropDown = Template.bind({});
MultiDropDown.args = {
  ...DefaultDropDown.args,
  label: 'Multi Select',
  multiple: true
};

export const MultiDropDownWithSearch = Template.bind({});
MultiDropDownWithSearch.args = {
  ...MultiDropDown.args,
  useSearch: true
};

export const LargeDropDown = Template.bind({});
LargeDropDown.args = {
  ...DefaultDropDown.args,
  size: 'large'
};

export const LargeDropDownWithSearch = Template.bind({});
LargeDropDownWithSearch.args = {
  ...LargeDropDown.args,
  useSearch: true
};

export const WithSubtitleDropDown = Template.bind({});
WithSubtitleDropDown.args = {
  ...DefaultDropDown.args,
  fields: {
    key: 'name',
    title: '{{ $.name }}',
    content: '{{ $.recentlyUsed | date : yyyy/MM/dd HH:mm }}'
  }
}

export const WithSubtitleDropDownWithSearch = Template.bind({});
WithSubtitleDropDownWithSearch.args = {
  ...WithSubtitleDropDown.args,
  useSearch: true
}

export const DisabledDropDown = Template.bind({});
DisabledDropDown.args = {
  ...DefaultDropDown.args,
  disabled: true
};
