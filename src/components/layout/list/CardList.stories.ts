import CardList from './CardList.vue';

import type { Meta, StoryFn } from '@storybook/vue3';

export default {
  title: 'Components / Layout / CardList',
  component: CardList,
  tags: ['autodocs'],
  argTypes: {
    items: {
      control: 'object',
      description: 'Data to be displayed in the CardList.'
    },
    fields: {
      control: 'object',
      description: 'Fields to control CardList behavior.'
    },
    sortOptions: {
      control: 'object',
      description: 'Fields to control sort options behavior. (optional)'
    },
    filterOptions: {
      control: 'object',
      description: 'Fields to control filter options behavior. (optional)'
    },
    modelValue: {
      control: 'text',
      description: 'CardList value, use by `v-model`.'
    },
    selected: {
      control: 'object',
      description: 'Selected item, use by `v-model:selected`. (optional)'
    },
    sort: {
      control: 'object',
      description: 'Sort option, use by `v-model:sort`. (optional)'
    },
    filter: {
      control: 'object',
      description: 'Filter option, use by `v-model:filter`. (optional)'
    },
    groupBy: {
      control: 'text',
      description: 'Group by field name. (optional)'
    },
    'onUpdate:modelValue': {
      action: 'search'
    },
    'onUpdate:sort': {
      action: 'sort'
    },
    'onUpdate:filter': {
      action: 'filter'
    },
    'onUpdate:selected': {
      action: 'selected'
    }
  }
} satisfies Meta<typeof CardList>;

const Template: StoryFn<typeof CardList> = (args) => ({
  components: { CardList },
  setup() {
    return { args };
  },
  template: `<CardList v-model="args.modelValue" v-bind="args" style="width: 472px; height: 720px;" >
    <template v-slot="slotProps">
      <div data-demo-content>
        <h1>{{ slotProps.item.name }}</h1>
        <br />
        <p>{{ slotProps.item.category }}</p>
      </div>
    </template>
  </CardList>`
});

export const DefaultCardList = Template.bind({});
DefaultCardList.args = {
  items: [
    {
      name: 'APT-38',
      description:
        'APT-38 is a threat group that has been attributed to the North Korean government.',
      category: 'APT Group Simulation Data',
      recentlyUsed: '2021-01-07T00:00:00Z',
      installed: 'Installed'
    },
    {
      name: 'APT-39',
      description: 'APT-39 is a threat group that has been attributed to the Iranian government.',
      category: 'APT Group Simulation Data',
      recentlyUsed: '2021-01-02T00:00:00Z',
      installed: 'Installed'
    },
    {
      name: 'APT-40',
      description: 'APT-40 is a threat group that has been attributed to the Chinese government.',
      category: 'APT Group Simulation Data',
      recentlyUsed: '2021-01-01T00:00:00Z',
      installed: 'Not Install'
    },
    {
      name: 'Nginx Techniques',
      description:
        'Nginx is a web server that can also be used as a reverse proxy, load balancer, mail proxy and HTTP cache.',
      category: 'Technique Simulation Data',
      recentlyUsed: '2021-01-03T00:00:00Z',
      installed: 'Installed'
    },
    {
      name: 'Apache Techniques',
      description:
        'Apache is a web server that can also be used as a reverse proxy, load balancer, mail proxy and HTTP cache.',
      category: 'Technique Simulation Data',
      recentlyUsed: '2021-01-04T00:00:00Z',
      installed: 'Not Install'
    }
  ],
  fields: {
    key: 'name',
    title: '{{ $.name }}'
  },
  sortOptions: [
    {
      label: 'Sort by Time',
      detail: 'Latest First',
      direction: 'desc',
      field: 'recentlyUsed',
      icon: 'fa6-solid:arrow-down-wide-short'
    },
    {
      label: 'Sort by Time',
      detail: 'Oldest First',
      direction: 'asc',
      field: 'recentlyUsed',
      icon: 'fa6-solid:arrow-up-wide-short'
    },
    {
      label: 'Sort by Name',
      detail: 'Ascending (A to Z)',
      direction: 'asc',
      field: 'name',
      icon: 'fa6-solid:arrow-down-a-z'
    },
    {
      label: 'Sort by Name',
      detail: 'Descending (Z to A)',
      direction: 'desc',
      field: 'name',
      icon: 'fa6-solid:arrow-up-z-a'
    }
  ],
  filterOptions: [
    {
      field: 'category',
      label: 'Category'
    },
    {
      field: 'installed',
      label: 'Installation Status'
    }
  ],
  groupBy: 'installed'
};

export const SimpleCardList = Template.bind({});
SimpleCardList.args = {
  ...DefaultCardList.args,
  groupBy: undefined
}
