import { pick } from 'lodash-es';

import type { Meta, StoryFn, StoryObj } from '@storybook/vue3';

import SearchBar from './SearchBar.vue';

import bindArgs from '@/../.storybook/helpers/bind-args';

const meta: Meta<typeof SearchBar> = {
  title: 'Components / Element / SearchBar',
  component: SearchBar,
  tags: ['autodocs'],
  argTypes: {
    items: {
      control: 'object',
      description: 'Data to be displayed in the menu.'
    },
    modelValue: {
      control: 'text',
      description: 'SearchBar value, use by `v-model`.'
    },
    disabled: {
      control: 'boolean',
      description: 'SearchBar disabled (optional)'
    },
    'onUpdate:modelValue': {
      action: 'search'
    },
    onSelect: {
      action: 'selected'
    }
  }
};

export default meta;

type SearchBar$ = StoryObj<typeof SearchBar>;

const Template: StoryFn<typeof SearchBar> = (args) => ({
  components: { SearchBar },
  setup() {
    return { args };
  },
  template: `
    <SearchBar
      v-model="args.modelValue"
      :items="args.items"
      :fields="args.fields"
      ${bindArgs(pick(args, ['disabled']))}
    />
    `
})

export const DefaultSearchBar: SearchBar$ = {
  render: Template,
  args: {
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
        name: 'Nginx test Techniques',
        description:
          'Nginx is a web server that can also be used as a reverse proxy, load balancer, mail proxy and HTTP cache.',
        category: 'Technique Simulation Data',
        recentlyUsed: '2021-01-01T00:00:00Z'
      },
      {
        name: 'Apache test Techniques',
        description:
          'Apache is a web server that can also be used as a reverse proxy, load balancer, mail proxy and HTTP cache.',
        category: 'Technique Simulation Data',
        framework: {
          technique: 'T1012s'
        },
        recentlyUsed: '2021-01-01T00:00:00Z'
      }
    ],
    fields: {
      key: 'name',
      title: '{{ $.name }}',
      content: '{{ $.category }}',
      searchKeys: ['name', 'category']
    }
  }
};

export const DisabledSearchBar: SearchBar$ = {
  render: Template,
  args: {
    ...DefaultSearchBar.args,
    disabled: true
  }
};
