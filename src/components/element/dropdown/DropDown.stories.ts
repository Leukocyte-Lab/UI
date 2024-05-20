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
  template: '<DropDown v-model="args.modelValue" v-bind="args" style="width: 420px;" />'
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
    name: 'APT-38'
  },
  variant: 'rounded',
  size: 'medium',
  level: 'primary'
};

export const SecondaryDropDown = Template.bind({});
SecondaryDropDown.args = {
  ...DefaultDropDown.args,
  level: 'secondary'
};

export const TertiaryDropDown = Template.bind({});
TertiaryDropDown.args = {
  ...DefaultDropDown.args,
  level: 'tertiary'
};

export const RectDropDown = Template.bind({});
RectDropDown.args = {
  ...DefaultDropDown.args,
  variant: 'rect'
};

export const SecondaryRectDropDown = Template.bind({});
SecondaryRectDropDown.args = {
  ...DefaultDropDown.args,
  variant: 'rect',
  level: 'secondary'
};

export const TertiaryRectDropDown = Template.bind({});
TertiaryRectDropDown.args = {
  ...DefaultDropDown.args,
  variant: 'rect',
  level: 'tertiary'
};

export const DefaultDropDownWithSearch = Template.bind({});
DefaultDropDownWithSearch.args = {
  ...DefaultDropDown.args,
  useSearch: true
};

export const DefaultGroupDropDown = Template.bind({});
DefaultGroupDropDown.args = {
  ...DefaultDropDown.args,
  groupBy: 'category'
};

export const DefaultGroupDropDownWithSearch = Template.bind({});
DefaultGroupDropDownWithSearch.args = {
  ...DefaultDropDownWithSearch.args,
  groupBy: 'category'
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

export const MultiGroupDropDown = Template.bind({});
MultiGroupDropDown.args = {
  ...MultiDropDown.args,
  groupBy: 'category'
};

export const MultiGroupDropDownWithSearch = Template.bind({});
MultiGroupDropDownWithSearch.args = {
  ...MultiDropDownWithSearch.args,
  groupBy: 'category'
};

export const LargeDropDown = Template.bind({});
LargeDropDown.args = {
  ...DefaultDropDown.args,
  size: 'large'
};

export const LargeSecondaryDropDown = Template.bind({});
LargeSecondaryDropDown.args = {
  ...DefaultDropDown.args,
  size: 'large',
  level: 'secondary'
};

export const LargeTertiaryDropDown = Template.bind({});
LargeTertiaryDropDown.args = {
  ...DefaultDropDown.args,
  size: 'large',
  level: 'tertiary'
};

export const LargeRectDropDown = Template.bind({});
LargeRectDropDown.args = {
  ...DefaultDropDown.args,
  size: 'large',
  variant: 'rect'
};

export const LargeRectSecondaryDropDown = Template.bind({});
LargeRectSecondaryDropDown.args = {
  ...DefaultDropDown.args,
  size: 'large',
  variant: 'rect',
  level: 'secondary'
};

export const LargeRectTertiaryDropDown = Template.bind({});
LargeRectTertiaryDropDown.args = {
  ...DefaultDropDown.args,
  size: 'large',
  variant: 'rect',
  level: 'tertiary'
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
};

export const WithSubtitleDropDownWithSearch = Template.bind({});
WithSubtitleDropDownWithSearch.args = {
  ...WithSubtitleDropDown.args,
  useSearch: true
};

export const DisabledDropDown = Template.bind({});
DisabledDropDown.args = {
  ...DefaultDropDown.args,
  disabled: true
};
