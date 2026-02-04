import { fn } from 'storybook/test';

import type { Meta, StoryObj } from '@storybook/vue3-vite';

import SelectMenu from './SelectMenu.vue';

import type { SelectMenu as SelectMenuNS } from './SelectMenu.model';

type GenericMeta<C> = Omit<Meta<C>, 'component'> & {
  component: Record<keyof C, unknown>;
};

const meta: GenericMeta<typeof SelectMenu<SelectMenuNS.AcceptableValue>> = {
  title: 'Components / Element / Menu / SelectMenu',
  component: SelectMenu,
  tags: ['autodocs'],
  argTypes: {
    options: {
      control: 'object',
      description: 'Data to be displayed in the menu.'
    },
    fields: {
      control: 'object',
      description: 'Fields to control options displayed in the menu.'
    },
    modelValue: {
      control: 'object',
      description: 'SelectMenu value, use by `v-model`.'
    },
    query: {
      if: {
        arg: 'useSearch',
        eq: true
      },
      control: 'text',
      description: 'Search query.'
    },
    multiple: {
      control: 'boolean',
      description: 'Whether the menu allows multiple selections.'
    },
    groupBy: {
      control: 'text',
      description: 'Group options by a field.'
    },
    label: {
      control: 'text',
      description: 'Label for the menu.'
    },
    useSearch: {
      control: 'boolean',
      description: 'Enable search functionality.'
    },
    showAll: {
      if: {
        arg: 'useSearch',
        eq: true
      },
      control: 'boolean',
      description: 'Always show all options when search is enabled.'
    },
    'onUpdate:modelValue': {
      action: 'selected'
    },
    'onUpdate:query': {
      action: 'search'
    }
  },
  args: {
    modelValue: undefined,
    'onUpdate:modelValue': fn(),
    'onUpdate:query': fn()
  }
};

export default meta;

type DefaultMenu$ = StoryObj<typeof SelectMenu>;

export const DefaultSelectMenu: DefaultMenu$ = {
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
        recentlyUsed: '2021-01-01T00:00:00Z',
        disabled: true
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
      title: '{{ $.name }}',
      disabled: 'disabled'
    },
    multiple: false
  }
};

export const SimpleArrayMenu: DefaultMenu$ = {
  args: {
    options: ['Option 1', 'Option 2', 'Option 3']
  }
};

export const SimpleArrayWithMultiSelectMenu: DefaultMenu$ = {
  args: {
    options: ['Option 1', 'Option 2', 'Option 3'],
    label: 'Options',
    multiple: true
  }
};

export const SimpleArrayWithSearchMenu: DefaultMenu$ = {
  args: {
    options: ['Option 1', 'Option 2', 'Option 3'],
    useSearch: true
  }
};

export const SingleSelectMenu: DefaultMenu$ = {
  args: {
    ...DefaultSelectMenu.args,
    modelValue: {
      name: 'APT-40',
      description: 'APT-40 is a threat group that has been attributed to the Chinese government.',
      category: 'APT Group Simulation Data',
      recentlyUsed: '2021-01-01T00:00:00Z'
    }
  }
};

export const SingleSelectMenuWithSearch: DefaultMenu$ = {
  args: {
    ...SingleSelectMenu.args,
    fields: {
      ...SingleSelectMenu.args!.fields!,
      searchKeys: ['name', 'description']
    },
    useSearch: true,
    showAll: false
  }
};

export const SingleSelectMenuWithSearchWithPredefinedQuery: DefaultMenu$ = {
  args: {
    ...SingleSelectMenu.args,
    fields: {
      ...SingleSelectMenu.args!.fields!,
      searchKeys: ['name', 'description']
    },
    query: 'apt',
    useSearch: true,
    showAll: false
  }
};

export const SingleWithSubtitleSelectMenu: DefaultMenu$ = {
  args: {
    ...DefaultSelectMenu.args,
    modelValue: {
      name: 'APT-40',
      description: 'APT-40 is a threat group that has been attributed to the Chinese government.',
      category: 'APT Group Simulation Data',
      recentlyUsed: '2021-01-01T00:00:00Z'
    },
    fields: {
      key: 'name',
      title: '{{ $.name }}',
      content: '{{ $.category }}'
    }
  }
};

export const GroupSingleSelectMenu: DefaultMenu$ = {
  args: {
    ...SingleSelectMenu.args,
    groupBy: 'category'
  }
};

export const GroupWithSubtitleSingleSelectMenu: DefaultMenu$ = {
  args: {
    ...SingleWithSubtitleSelectMenu.args,
    fields: {
      key: 'name',
      title: '{{ $.name }}',
      content: 'Last Used: {{ $.recentlyUsed | date : yyyy/MM/dd }}'
    },
    groupBy: 'category'
  }
};

export const MultiSelectMenu: DefaultMenu$ = {
  args: {
    ...DefaultSelectMenu.args,
    modelValue: [
      {
        name: 'APT-40',
        description: 'APT-40 is a threat group that has been attributed to the Chinese government.',
        category: 'APT Group Simulation Data',
        recentlyUsed: '2021-01-01T00:00:00Z'
      }
    ],
    label: 'Playbook',
    multiple: true
  }
};

export const MultiSelectMenuWithSearch: DefaultMenu$ = {
  args: {
    ...MultiSelectMenu.args,
    fields: {
      ...MultiSelectMenu.args!.fields!,
      searchKeys: ['name', 'description']
    },
    useSearch: true,
    showAll: false
  }
};

export const MultiWithSubtitleSelectMenu: DefaultMenu$ = {
  args: {
    ...MultiSelectMenu.args,
    modelValue: [
      {
        name: 'APT-40',
        description: 'APT-40 is a threat group that has been attributed to the Chinese government.',
        category: 'APT Group Simulation Data',
        recentlyUsed: '2021-01-01T00:00:00.000Z'
      },
      {
        name: 'Apache Techniques',
        description:
          'Apache is a web server that can also be used as a reverse proxy, load balancer, mail proxy and HTTP cache.',
        category: 'Technique Simulation Data',
        recentlyUsed: '2021-01-01T00:00:00.000Z'
      }
    ],
    fields: {
      key: 'name',
      title: '{{ $.name }}',
      content: '{{ $.category }}'
    },
    multiple: true
  }
};

export const GroupMultiSelectMenu: DefaultMenu$ = {
  args: {
    ...MultiSelectMenu.args,
    multiple: true,
    groupBy: 'category'
  }
};

export const GroupWithSubtitleMultiSelectMenu: DefaultMenu$ = {
  args: {
    ...MultiWithSubtitleSelectMenu.args,
    fields: {
      key: 'name',
      title: '{{ $.name }}',
      content: 'Last Used: {{ $.recentlyUsed | date : yyyy/MM/dd }}'
    },
    multiple: true,
    groupBy: 'category'
  }
};

export const GroupOverflowWithSubtitleMultiSelectMenu: DefaultMenu$ = {
  args: {
    ...MultiWithSubtitleSelectMenu.args,
    options: [
      ...MultiWithSubtitleSelectMenu.args!.options!,
      {
        name: 'APT-41',
        description: 'APT-41 is a threat group that has been attributed to the Chinese government.',
        category: 'APT Group Simulation Data',
        recentlyUsed: '2021-01-01T00:00:00Z'
      },
      {
        name: 'APT-42',
        description: 'APT-42 is a threat group that has been attributed to the Chinese government.',
        category: 'APT Group Simulation Data',
        recentlyUsed: '2021-01-01T00:00:00Z'
      },
      {
        name: 'APT-43',
        description: 'APT-43 is a threat group that has been attributed to the Chinese government.',
        category: 'APT Group Simulation Data',
        recentlyUsed: '2021-01-01T00:00:00Z'
      },
      {
        name: 'APT-44',
        description: 'APT-44 is a threat group that has been attributed to the Chinese government.',
        category: 'APT Group Simulation Data',
        recentlyUsed: '2021-01-01T00:00:00Z'
      },
      {
        name: 'APT-45',
        description: 'APT-45 is a threat group that has been attributed to the Chinese government.',
        category: 'APT Group Simulation Data',
        recentlyUsed: '2021-01-01T00:00:00Z'
      }
    ],

    fields: {
      key: 'name',
      title: '{{ $.name }}',
      content: 'Last Used: {{ $.recentlyUsed | date : yyyy/MM/dd }}'
    },
    multiple: true,
    groupBy: 'category'
  }
};

export const GroupOverflowWithSubtitleMultiSelectWithSearchMenu: DefaultMenu$ = {
  args: {
    ...GroupOverflowWithSubtitleMultiSelectMenu.args,
    fields: {
      ...GroupOverflowWithSubtitleMultiSelectMenu.args!.fields!,
      searchKeys: ['name', 'description']
    },
    useSearch: true,
    showAll: false
  }
};

export const SelectMenuWithCustomText: DefaultMenu$ = {
  args: {
    ...MultiWithSubtitleSelectMenu.args,
    fields: {
      key: 'name',
      title: '{{ $.name }}',
      content: 'Last Used: {{ $.recentlyUsed | date : yyyy/MM/dd }}'
    },
    query: 'apt',
    multiple: true,
    useSearch: true,
    showAll: true,
    groupBy: 'category',
    alterStr: {
      clearSelection: 'Clear All Selections',
      noData: 'No Data Found'
    }
  }
};

export const SelectMenuWithCustomGadgetSlots: DefaultMenu$ = {
  args: {
    ...MultiWithSubtitleSelectMenu.args,
    fields: {
      key: 'name',
      title: '{{ $.name }}',
      content: 'Last Used: {{ $.recentlyUsed | date : yyyy/MM/dd }}'
    },
    query: 'apt',
    multiple: true,
    useSearch: true,
    showAll: true,
    groupBy: 'category'
  },
  parameters: {
    slots: {
      'empty-placeholder': {
        template: `
          <template #empty-placeholder="{ groupName }">
            <div>No data here!</div>
          </template>`
      },
      'clear-selection': {
        template: `
          <template #clear-selection="{ clearSelection }">
            <button @click="clearSelection">Clear Selection</button>
          </template>
        `
      },
      'no-match-placeholder': {
        template: `
          <template #no-match-placeholder="{ groupName }">
            <div style="padding: 16px; border: 1px dashed #888; border-radius: 8px;">
              <p>No matched data found for group:</p><br />
              <em><strong>{{ groupName }}</strong></em>
            </div>
          </template>
        `
      }
    }
  }
};

export const SelectMenuWithCustomLayoutSlots: DefaultMenu$ = {
  args: {
    ...MultiWithSubtitleSelectMenu.args,
    fields: {
      key: 'name',
      title: '{{ $.name }}',
      content: 'Last Used: {{ $.recentlyUsed | date : yyyy/MM/dd }}'
    },
    query: 'apt',
    multiple: true,
    useSearch: true,
    showAll: true,
    groupBy: 'category'
  },
  parameters: {
    slots: {
      header: {
        template: `
          <template #header="{ selection, multiple, useSearch, searchQuery, result, label, clearSelection }">
            <label>{{ label }}</label>
            <p>
              <span
                >{{ String(selection.size ?? selection.length).padStart(2, '0') }}
                Selected</span
              >
              <button @click="clearSelection">⟳</button>
            </p>
            <template v-if="useSearch">
              <input v-model="args.query" type="search" placeholder="Search..." />
            </template>
          </template>
        `
      },
      default: {
        template: `
          <template #default="{ option }">
            {{ option.selected ? '😀' : '🫥' }}
            <div>
              <strong>{{ option.payload.name }}</strong>
              <p>{{ option.payload.category }}</p>
            </div>
          </template>
        `
      },
      footer: {
        template: `
          <template #footer="{ label }">
            <button
              @click="args.options.push({
                name: \`APT-\${(Math.random() * 100).toFixed(0).padStart(2, '0')}\`,
                description: \`APT-\${(Math.random() * 100).toFixed(0)} is a threat group that has been attributed to the Chinese government.\`,
                category: 'APT Group Simulation Data',
                recentlyUsed: '2021-01-01T00:00:00Z'
              })"
              style="
                appearance: none;
                padding: 8px;
                background-color: #000;
                color: #fff;
                border: 0;
              "
            >
              Add more {{ label }}
            </button>
          </template>
        `
      },
      'no-match-placeholder': {
        template: `
          <template #no-match-placeholder="{ groupName }">
            <div style="padding: 16px; border: 1px dashed #888; border-radius: 8px;">
              <p>No matched data found for group:</p><br />
              <em><strong>{{ groupName }}</strong></em>
            </div>
          </template>
        `
      }
    }
  }
};

export const IconWithSubtitleSelectMenu: DefaultMenu$ = {
  args: {
    options: [
      {
        action: 'Sort by Time',
        direction: 'Latest First',
        icon: 'fa6-solid:arrow-down-wide-short'
      },
      {
        action: 'Sort by Time',
        direction: 'Oldest First',
        icon: 'fa6-solid:arrow-up-wide-short'
      },
      {
        action: 'Sort by Name',
        direction: 'Ascending (A to Z)',
        icon: 'fa6-solid:arrow-down-a-z'
      },
      {
        action: 'Sort by Name',
        direction: 'Descending (Z to A)',
        icon: 'fa6-solid:arrow-up-z-a'
      }
    ],
    fields: {
      key: 'direction',
      title: '{{ $.action }}',
      content: '{{ $.direction }}',
      icon: 'icon'
    }
  }
};
