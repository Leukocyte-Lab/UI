import { fn } from '@storybook/test';

import type { Meta, StoryObj } from '@storybook/vue3';

import DropDown from './DropDown.vue';

import type { DropDown as DropDownNS } from './DropDown.model';

type GenericMeta<C> = Omit<Meta<C>, 'component'> & {
  component: Record<keyof C, unknown>;
};

const meta: GenericMeta<typeof DropDown<DropDownNS.AcceptableValue>> = {
  title: 'Components / Element / DropDown',
  component: DropDown,
  tags: ['autodocs'],
  argTypes: {
    options: {
      control: 'object',
      description: 'Data to be displayed in the menu.'
    },
    modelValue: {
      control: 'object',
      description: 'DropDown value, use by `v-model`.'
    },
    query: {
      if: {
        arg: 'useSearch',
        eq: true
      },
      control: 'text',
      description: 'Search query.'
    },
    label: {
      control: 'text',
      description: 'DropDown label (optional)'
    },
    placeholder: {
      control: 'text',
      description: 'DropDown placeholder (optional)'
    },
    groupBy: {
      control: 'text',
      description: 'DropDown groupBy (optional)'
    },
    labelShowAs: {
      control: 'radio',
      description: 'DropDown label show as (optional)',
      options: ['auto', 'label', 'placeholder'],
      defaultValue: 'auto'
    },
    menuPosition: {
      control: 'radio',
      description: 'DropDown menu position (optional)',
      options: ['top-left', 'top-right', 'bottom-left', 'bottom-right'],
      defaultValue: 'bottom-right'
    },
    level: {
      control: 'select',
      description: 'Dropdown level (optional)',
      options: ['primary', 'secondary', 'tertiary'],
      defaultValue: 'primary'
    },
    variant: {
      control: 'radio',
      description: 'Dropdown variant (optional)',
      options: ['rounded', 'rect'],
      defaultValue: 'rounded'
    },
    size: {
      control: 'radio',
      description: 'Dropdown size (optional)',
      options: ['small', 'medium', 'large', 'huge'],
      defaultValue: 'medium'
    },
    disabled: {
      control: 'boolean',
      description: 'DropDown disabled (optional)'
    },
    persist: {
      control: 'boolean',
      description: 'Persist query (optional)'
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
    labelShowAs: 'auto',
    menuPosition: 'bottom-right',
    'onUpdate:modelValue': fn(),
    'onUpdate:query': fn()
  }
};

export default meta;

type DropDown$ = StoryObj<typeof DropDown>;

export const DefaultDropDown: DropDown$ = {
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
    placeholder: 'Select an Option',
    variant: 'rounded',
    size: 'medium',
    level: 'primary'
  }
};

export const DefaultDropDownWithDefaultSelected: DropDown$ = {
  args: {
    ...DefaultDropDown.args,
    modelValue: {
      name: 'APT-38',
      description:
        'APT-38 is a threat group that has been attributed to the North Korean government.',
      category: 'APT Group Simulation Data',
      recentlyUsed: '2021-01-01T00:00:00Z'
    }
  }
};

export const SecondaryDropDown: DropDown$ = {
  args: {
    ...DefaultDropDown.args,
    level: 'secondary'
  }
};

export const TertiaryDropDown: DropDown$ = {
  args: {
    ...DefaultDropDown.args,
    level: 'tertiary'
  }
};

export const RectDropDown: DropDown$ = {
  args: {
    ...DefaultDropDown.args,
    variant: 'rect'
  }
};

export const SecondaryRectDropDown: DropDown$ = {
  args: {
    ...DefaultDropDown.args,
    variant: 'rect',
    level: 'secondary'
  }
};

export const TertiaryRectDropDown: DropDown$ = {
  args: {
    ...DefaultDropDown.args,
    variant: 'rect',
    level: 'tertiary'
  }
};

export const DefaultDropDownWithSearch: DropDown$ = {
  args: {
    ...DefaultDropDown.args,
    fields: {...DefaultDropDown.args!.fields!,
      searchKeys: ['name', 'description']
    },
    useSearch: true
  }
};

export const DefaultGroupDropDown: DropDown$ = {
  args: {
    ...DefaultDropDown.args,
    groupBy: 'category'
  }
};

export const DefaultGroupDropDownWithSearch: DropDown$ = {
  args: {
    ...DefaultDropDownWithSearch.args,
    groupBy: 'category'
  }
};

export const MultiDropDown: DropDown$ = {
  args: {
    ...DefaultDropDown.args,
    label: 'Multi Select',
    placeholder: 'Choose Options',
    multiple: true
  }
};

export const MultiDropDownWithSearch: DropDown$ = {
  args: {
    ...MultiDropDown.args,
    fields: {...MultiDropDown.args!.fields!,
      searchKeys: ['name', 'description']
    },
    useSearch: true
  }
};

export const MultiGroupDropDown: DropDown$ = {
  args: {
    ...MultiDropDown.args,
    groupBy: 'category'
  }
};

export const MultiGroupDropDownWithSearch: DropDown$ = {
  args: {
    ...MultiDropDownWithSearch.args,
    groupBy: 'category'
  }
};

export const DropDownWithCustomText: DropDown$ = {
  args: {
    ...MultiDropDownWithSearch.args,
    query: 'apt',
    useSearch: true,
    persist: true,
    showAll: true,
    groupBy: 'category',
    alterStr: {
      clearSelection: 'Clear All',
      noData: 'No Data Found'
    }
  }
};

export const DropDownWithCustomSlots: DropDown$ = {
  render: (args) => ({
    components: { DropDown },
    setup() {
      return { args };
    },
    template: `
      <DropDown v-bind="args">
        <template #empty-placeholder="{ groupName }">
          <div>No matched data found for group:<br /><em><strong>{{ groupName }}</strong></em></div>
        </template>
        <template #clear-selection="{ clearSelection }">
          <button @click="clearSelection">Clear Selection</button>
        </template>
      </DropDown>
    `
  }),
  args: {
    ...MultiDropDownWithSearch.args,
    query: 'apt',
    persist: true,
    multiple: true,
    useSearch: true,
    showAll: true,
    groupBy: 'category'
  }
};

export const LargeDropDown: DropDown$ = {
  args: {
    ...DefaultDropDown.args,
    size: 'large'
  }
};

export const LargeSecondaryDropDown: DropDown$ = {
  args: {
    ...DefaultDropDown.args,
    size: 'large',
    level: 'secondary'
  }
};

export const LargeTertiaryDropDown: DropDown$ = {
  args: {
    ...DefaultDropDown.args,
    size: 'large',
    level: 'tertiary'
  }
};

export const LargeRectDropDown: DropDown$ = {
  args: {
    ...DefaultDropDown.args,
    size: 'large',
    variant: 'rect'
  }
};

export const LargeRectSecondaryDropDown: DropDown$ = {
  args: {
    ...DefaultDropDown.args,
    size: 'large',
    variant: 'rect',
    level: 'secondary'
  }
};

export const LargeRectTertiaryDropDown: DropDown$ = {
  args: {
    ...DefaultDropDown.args,
    size: 'large',
    variant: 'rect',
    level: 'tertiary'
  }
};

export const LargeDropDownWithSearch: DropDown$ = {
  args: {
    ...LargeDropDown.args,
    fields: {...LargeDropDown.args!.fields!,
      searchKeys: ['name', 'description']
    },
    useSearch: true
  }
};

export const WithSubtitleDropDown: DropDown$ = {
  args: {
    ...DefaultDropDown.args,
    fields: {
      key: 'name',
      title: '{{ $.name }}',
      content: '{{ $.recentlyUsed | date : yyyy/MM/dd HH:mm }}'
    }
  }
};

export const WithSubtitleDropDownWithSearch: DropDown$ = {
  args: {
    ...WithSubtitleDropDown.args,
    fields: {...WithSubtitleDropDown.args!.fields!,
      searchKeys: ['name', 'description']
    },
    useSearch: true
  }
};

export const IconWithSubtitleSelectMenu: DropDown$ = {
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
    },

    modelValue: {
      action: 'Sort by Time',
      direction: 'Latest First',
      icon: 'fa6-solid:arrow-down-wide-short'
    },
    placeholder: 'Sort By',
    variant: 'square',
    labelShowAs: 'placeholder'
  }
};


export const DisabledDropDown: DropDown$ = {
  args: {
    ...DefaultDropDown.args,
    disabled: true
  }
};
