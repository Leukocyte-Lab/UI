import MatrixChart from './MatrixChart.vue';

import type { Meta, StoryFn } from '@storybook/vue3';

export default {
  title: 'Components / Chart / MatrixChart',
  component: MatrixChart,
  tags: ['autodocs']
} satisfies Meta<typeof MatrixChart>;

const Template: StoryFn<typeof MatrixChart> = (args) => ({
  components: { MatrixChart },
  setup() {
    return { args };
  },
  template: '<MatrixChart v-bind="args" />'
});

export const DefaultMatrixChart = Template.bind({});
DefaultMatrixChart.args = {
  datasets: [
    {
      label: 'project-analysis',
      series: [
        {
          name: 'Reconnaissance',
          percentage: 20
        },
        {
          name: 'Weaponization',
          percentage: 55
        },
        {
          name: 'Delivery',
          percentage: 78
        },
        {
          name: 'Exploitation',
          percentage: 34
        },
        {
          name: 'Installation',
          percentage: 69
        },
        {
          name: 'Command & Control',
          percentage: 53
        },
        {
          name: 'Actions on Objectives',
          percentage: 99
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
