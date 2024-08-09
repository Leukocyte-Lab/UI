import TabGroup from './TabGroup.vue';

import type { Meta, StoryFn } from '@storybook/vue3';

const meta: Meta<typeof TabGroup> = {
  title: 'Components / Layout / TabGroup',
  component: TabGroup,
  tags: ['autodocs'],
  argTypes: {
    tabs: {
      control: 'object',
      description: 'Tabs for the TabGroup.'
    },
    modelValue: {
      control: 'object',
      description: 'TabGroup value, use by `v-model`.'
    },
    'onUpdate:modelValue': {
      action: 'selected'
    }
  }
};

export default meta;

const Template: StoryFn<typeof TabGroup> = (args) => ({
  components: { TabGroup },
  setup() {
    return { args };
  },
  template: `
    <TabGroup
      :tabs="args.tabs"
      :level="args.level"
      v-model="args.modelValue"
    />
  `
});

const UseSlotTemplate: StoryFn<typeof TabGroup> = (args) => ({
  components: { TabGroup },
  setup() {
    return { args };
  },
  template: `
    <TabGroup
      :tabs="args.tabs"
      :level="args.level"
      v-model="args.modelValue"
    >
      <template #tab-1="{ tab, id, index }">
        <div>
          <pre>#{{ id }} - {{ index }}</pre>
          <h1>{{ tab.name }}</h1>
          <p>{{ tab.content }}</p>
        </div>
      </template>
      <template #tab-2="{ tab, id, index }">
        <div>
          <pre>#{{ id }} - {{ index }}</pre>
          <h1>{{ tab.name }}</h1>
          <p>{{ tab.content }}</p>
        </div>
      </template>
      <template #tab-3="{ tab, id, index }">
        <div>
          <pre>#{{ id }} - {{ index }}</pre>
          <h1>{{ tab.name }}</h1>
          <p>{{ tab.content }}</p>
        </div>
      </template>
    </TabGroup>
  `
});

export const DefaultTabGroup = {
  render: Template,

  args: {
    tabs: [
      { id: 'tab-1', name: 'Tab 1', content: 'Tab 1 content' },
      { id: 'tab-2', name: 'Tab 2', content: 'Tab 2 content' },
      { id: 'tab-3', name: 'Tab 3', content: 'Tab 3 content' }
    ],
    modelValue: { id: 'tab-1', name: 'Tab 1', content: 'Tab 1 content' }
  }
};

export const DefaultTabGroupWithoutParentModel = {
  args: {
    tabs: [
      { id: 'tab-1', name: 'Tab 1', content: 'Tab 1 content' },
      { id: 'tab-2', name: 'Tab 2', content: 'Tab 2 content' },
      { id: 'tab-3', name: 'Tab 3', content: 'Tab 3 content' }
    ]
  }
};

export const DefaultTabGroupWithIcon = {
  render: Template,

  args: {
    tabs: [
      { id: 'tab-1', name: 'Reminder', icon: 'fa6-solid:list', content: 'Tab 1 content' },
      { id: 'tab-2', name: 'Schedule', icon: 'fa6-solid:calendar', content: 'Tab 2 content' },
      { id: 'tab-3', name: 'Settings', icon: 'fa6-solid:gears', content: 'Tab 3 content' }
    ],
    modelValue: { id: 'tab-1', name: 'Reminder', icon: 'fa6-solid:list', content: 'Tab 1 content' }
  }
};

export const SecondaryTabGroup = {
  render: Template,

  args: {
    ...DefaultTabGroupWithIcon.args,
    level: 'secondary'
  }
};

export const DefaultTabGroupWithSlot = {
  render: UseSlotTemplate,

  args: {
    ...DefaultTabGroupWithIcon.args
  }
};
