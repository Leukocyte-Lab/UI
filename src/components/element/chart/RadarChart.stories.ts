import RadarChart from './RadarChart.vue';

import type { Meta, StoryFn } from '@storybook/vue3';

export default {
  title: 'Components / Chart / RadarChart',
  component: RadarChart,
  tags: ['autodocs']
} satisfies Meta<typeof RadarChart>;

const Template: StoryFn<typeof RadarChart> = (args) => ({
  components: { RadarChart },
  setup() {
    return { args };
  },
  template: '<RadarChart v-bind="args" style="width: 320px; height: 320px;" />'
});

export const DefaultRadarChart = Template.bind({});
DefaultRadarChart.args = {
  datasets: [
    {
      label: 'project-analysis',
      series: [
        {
          name: 'Reconnaissance',
          techniques: 3,
          total: 10,
          value: 30
        },
        {
          name: 'Weaponization',
          techniques: 8,
          total: 12,
          value: 96
        },
        {
          name: 'Delivery',
          techniques: 6,
          total: 10,
          value: 60
        },
        {
          name: 'Exploitation',
          techniques: 7,
          total: 15,
          value: 70
        },
        {
          name: 'Installation',
          techniques: 7,
          total: 14,
          value: 70
        },
        {
          name: 'Command & Control',
          techniques: 6,
          total: 10,
          value: 60
        },
        {
          name: 'Actions on Objectives',
          techniques: 5,
          total: 10,
          value: 50
        }
      ]
    },
    {
      label: 'project-analysis-overlay',
      series: [
        {
          name: 'Reconnaissance',
          techniques: 1,
          total: 10,
          value: 10
        },
        {
          name: 'Weaponization',
          techniques: 4,
          total: 12,
          value: 32
        },
        {
          name: 'Delivery',
          techniques: 5,
          total: 10,
          value: 50
        },
        {
          name: 'Exploitation',
          techniques: 6,
          total: 15,
          value: 60
        },
        {
          name: 'Installation',
          techniques: 7,
          total: 14,
          value: 70
        },
        {
          name: 'Command & Control',
          techniques: 4,
          total: 10,
          value: 40
        },
        {
          name: 'Actions on Objectives',
          techniques: 1,
          total: 10,
          value: 10
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
      accessor: '{{ $.value | number }}%',
      selector: '$.value',
      type: 'number',
      max: 'auto'
    },
    z: {
      label: 'Techniques',
      accessor: '{{ $.techniques }}',
      selector: '$.techniques',
      type: 'string'
    }
  },
  options: {
    title: '{{ $.name }}',
    round: true,
    offset: {
      x: 5,
      y: 50
    }
  }
};

export const ExtremumRadarChart = Template.bind({});
ExtremumRadarChart.args = {
  datasets: [
    {
      label: 'project-analysis',
      series: [
        {
          name: 'Reconnaissance',
          techniques: 3,
          total: 10,
          value: 100
        },
        {
          name: 'Weaponization',
          techniques: 8,
          total: 12,
          value: 100
        },
        {
          name: 'Delivery',
          techniques: 6,
          total: 10,
          value: 100
        },
        {
          name: 'Exploitation',
          techniques: 7,
          total: 15,
          value: 100
        },
        {
          name: 'Installation',
          techniques: 7,
          total: 14,
          value: 100
        },
        {
          name: 'Command & Control',
          techniques: 6,
          total: 10,
          value: 100
        },
        {
          name: 'Actions on Objectives',
          techniques: 5,
          total: 10,
          value: 100
        }
      ]
    },
    {
      label: 'project-analysis-overlay',
      series: [
        {
          name: 'Reconnaissance',
          techniques: 1,
          total: 10,
          value: 0
        },
        {
          name: 'Weaponization',
          techniques: 4,
          total: 12,
          value: 0
        },
        {
          name: 'Delivery',
          techniques: 5,
          total: 10,
          value: 0
        },
        {
          name: 'Exploitation',
          techniques: 6,
          total: 15,
          value: 0
        },
        {
          name: 'Installation',
          techniques: 7,
          total: 14,
          value: 0
        },
        {
          name: 'Command & Control',
          techniques: 4,
          total: 10,
          value: 0
        },
        {
          name: 'Actions on Objectives',
          techniques: 1,
          total: 10,
          value: 0
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
      accessor: '{{ $.value | number }}%',
      selector: '$.value',
      type: 'number',
      max: 'auto'
    },
    z: {
      label: 'Techniques',
      accessor: '{{ $.techniques }}',
      selector: '$.techniques',
      type: 'string'
    }
  },
  options: {
    title: '{{ $.name }}',
    round: true,
    offset: {
      x: 5,
      y: 50
    }
  }
};

export const EmptyRadarChart = Template.bind({});
EmptyRadarChart.args = {
  datasets: [],
  axises: {
    ...DefaultRadarChart.args.axises
  },
  options: {
    ...DefaultRadarChart.args.options
  }
};
