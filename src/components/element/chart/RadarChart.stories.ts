import RadarChart from './RadarChart.vue';

import type { Meta, StoryFn } from '@storybook/vue3';

export default {
  title: 'Components / Chart / RadarChart',
  component: RadarChart,
  tags: ['autodocs'],
  argTypes: {
    onClick: { action: 'clicked' }
  }
} satisfies Meta<typeof RadarChart>;

const Template: StoryFn<typeof RadarChart> = (args) => ({
  components: { RadarChart },
  setup() {
    return { args };
  },
  template: '<RadarChart v-bind="args" style="width: 900px; height: 320px;" />'
});

export const DefaultRadarChart = Template.bind({});
DefaultRadarChart.args = {
  datasets: [
    {
      label: 'project-analysis',
      series: [
        {
          name: 'Reconnaissance',
          value: 3
        },
        {
          name: 'Weaponization',
          value: 8
        },
        {
          name: 'Delivery',
          value: 6
        },
        {
          name: 'Exploitation',
          value: 7
        },
        {
          name: 'Installation',
          value: 7
        },
        {
          name: 'Command & Control',
          value: 6
        },
        {
          name: 'Actions on Objectives',
          value: 5
        }
      ]
    },
    {
      label: 'project-analysis-overlay',
      series: [
        {
          name: 'Reconnaissance',
          value: 1
        },
        {
          name: 'Weaponization',
          value: 4
        },
        {
          name: 'Delivery',
          value: 5
        },
        {
          name: 'Exploitation',
          value: 6
        },
        {
          name: 'Installation',
          value: 7
        },
        {
          name: 'Command & Control',
          value: 4
        },
        {
          name: 'Actions on Objectives',
          value: 1
        }
      ]
    }
  ],
  axises: {
    x: {
      label: 'Cyber Kill Chain',
      accessor: '{{ $.name }}',
      selector: '$.name',
      type: 'string'
    },
    y: {
      label: 'Count',
      accessor: '{{ $.value | number }}',
      selector: '$.value',
      type: 'number',
      max: 10
    }
  },
  options: {
    round: true,
    offset: {
      x: 5,
      y: 50
    }
  }
};
