
import type { Meta, StoryObj } from '@storybook/vue3';

import SearchBar from './SearchBar.vue';

import type { SearchBar as SearchBarNS } from './SearchBar.model';

type GenericMeta<C> = Omit<Meta<C>, 'component'> & {
  component: Record<keyof C, unknown>;
};

const meta: GenericMeta<typeof SearchBar<SearchBarNS.AcceptableValue>> = {
  title: 'Components / Element / SearchBar',
  component: SearchBar,
  tags: ['autodocs'],
  argTypes: {
    options: {
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
    autocomplete: {
      control: 'boolean',
      description: 'SearchBar autocomplete (optional)'
    },
    'onUpdate:modelValue': {
      action: 'query'
    },
    'onSearch': {
      action: 'search'
    },
    onSelect: {
      action: 'select'
    }
  }
};

export default meta;

type SearchBar$ = StoryObj<typeof SearchBar>;

export const DefaultSearchBar: SearchBar$ = {
  args: {
    options: [
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

export const DefaultSearchBarWithAutoComplete: SearchBar$ = {
  args: {
    ...DefaultSearchBar.args,
    autocomplete: true
  }
};

export const DisabledSearchBar: SearchBar$ = {
  args: {
    ...DefaultSearchBar.args,
    disabled: true
  }
};
