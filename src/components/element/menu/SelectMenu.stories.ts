import SelectMenu from './SelectMenu.vue';

import type { Meta, StoryFn } from '@storybook/vue3';

export default {
  title: 'Components / Element / Menu / SelectMenu',
  component: SelectMenu,
  tags: ['autodocs'],
  argTypes: {
    options: {
      control: 'object',
      description: 'Data to be displayed in the menu.'
    },
    modelValue: {
      control: 'text',
      description: 'SelectMenu value, use by `v-model`.'
    },
    multiple: {
      control: 'boolean',
      description: 'Whether the menu allows multiple selections.'
    }
  }
} satisfies Meta<typeof SelectMenu>;

const Template: StoryFn<typeof SelectMenu> = (args) => ({
  components: { SelectMenu },
  setup() {
    return { args };
  },
  template: '<SelectMenu v-model="args.modelValue" v-bind="args" />'
});

export const DefaultSelectMenu = Template.bind({});
DefaultSelectMenu.args = {
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
  multiple: false
};

export const SingleSelectMenu = Template.bind({});
SingleSelectMenu.args = {
  ...DefaultSelectMenu.args,
  modelValue: {
    name: 'APT-40',
    description: 'APT-40 is a threat group that has been attributed to the Chinese government.',
    category: 'APT Group Simulation Data',
    recentlyUsed: '2021-01-01T00:00:00Z'
  }
};

export const SingleWithSubtitleSelectMenu = Template.bind({});
SingleWithSubtitleSelectMenu.args = {
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
    content: '{{ $.recentlyUsed | date : yyyy/MM/dd HH:mm }}'
  }
};

export const GroupSingleSelectMenu = Template.bind({});
GroupSingleSelectMenu.args = {
  ...SingleSelectMenu.args,
  groupBy: 'category'
};

export const GroupWithSubtitleSingleSelectMenu = Template.bind({});
GroupWithSubtitleSingleSelectMenu.args = {
  ...SingleWithSubtitleSelectMenu.args,
  groupBy: 'category'
};

export const MultiSelectMenu = Template.bind({});
MultiSelectMenu.args = {
  ...DefaultSelectMenu.args,
  modelValue: [
    {
      name: 'APT-40',
      description: 'APT-40 is a threat group that has been attributed to the Chinese government.',
      category: 'APT Group Simulation Data',
      recentlyUsed: '2021-01-01T00:00:00Z'
    },
    {
      name: 'Apache Techniques'
    }
  ],
  label: 'Playbook',
  multiple: true
};

export const MultiWithSubtitleSelectMenu = Template.bind({});
MultiWithSubtitleSelectMenu.args = {
  ...MultiSelectMenu.args,
  modelValue: [
    {
      name: 'APT-40',
      description: 'APT-40 is a threat group that has been attributed to the Chinese government.',
      category: 'APT Group Simulation Data',
      recentlyUsed: '2021-01-01T00:00:00Z'
    },
    {
      name: 'Apache Techniques'
    }
  ],
  fields: {
    key: 'name',
    title: '{{ $.name }}',
    content: '{{ $.recentlyUsed | date : yyyy/MM/dd HH:mm }}'
  },
  multiple: true
};

export const GroupMultiSelectMenu = Template.bind({});
GroupMultiSelectMenu.args = {
  ...MultiSelectMenu.args,
  multiple: true,
  groupBy: 'category'
};

export const GroupWithSubtitleMultiSelectMenu = Template.bind({});
GroupWithSubtitleMultiSelectMenu.args = {
  ...MultiWithSubtitleSelectMenu.args,
  multiple: true,
  groupBy: 'category'
};

export const GroupOverflowWithSubtitleMultiSelectMenu = Template.bind({});
GroupOverflowWithSubtitleMultiSelectMenu.args = {
  ...MultiWithSubtitleSelectMenu.args,
  options: [
    ...MultiWithSubtitleSelectMenu.args.options!,
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
  multiple: true,
  groupBy: 'category'
};

export const IconWithSubtitleSelectMenu = Template.bind({});
IconWithSubtitleSelectMenu.args = {
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
};
