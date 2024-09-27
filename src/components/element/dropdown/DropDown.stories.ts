import { fn } from '@storybook/test';

import type { Meta, StoryObj } from '@storybook/vue3';

import DropDown from './DropDown.vue';


const meta: Meta<typeof DropDown> = {
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
    }
  },
  args: {
    'onUpdate:modelValue': fn()
  }
};

export default meta;

type DropDown$ = StoryObj<typeof DropDown>;

export const DefaultDropDown: DropDown$ = {
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
      name: 'APT-38'
    },
    variant: 'rounded',
    size: 'medium',
    level: 'primary'
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

export const DisabledDropDown: DropDown$ = {
  args: {
    ...DefaultDropDown.args,
    disabled: true
  }
};
