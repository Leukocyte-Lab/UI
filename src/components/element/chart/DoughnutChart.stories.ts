import type { Meta, StoryObj, StoryFn } from '@storybook/vue3';

import DoughnutChart from './DoughnutChart.vue';

const meta: Meta<typeof DoughnutChart> = {
  title: 'Components / Chart / DoughnutChart',
  component: DoughnutChart,
  tags: ['autodocs']
};

export default meta;

type DoughnutChart$ = StoryObj<typeof DoughnutChart>;

const Template: StoryFn<typeof DoughnutChart> = (args) => ({
  components: { DoughnutChart },
  setup() {
    return { args };
  },
  template: `
  <DoughnutChart
    :datasets="args.datasets"
    :axises="args.axises"
    :options="args.options"
    style="width: 240px; height: 240px;"
  >
    <div style="display: flex; height: 100%; flex-direction: column; place-items: center; place-content: center;">
      <h1>140 GB</h1>
      <p>Left</p>
    </div>
  </DoughnutChart>
  `
});

export const DefaultDoughnutChart: DoughnutChart$ = {
  render: Template,

  args: {
    datasets: [
      {
        name: 'Nginx Techniques',
        storage: '72.1 GB',
        recentlyUsed: '2021-07-01T00:00:00.000Z'
      },
      {
        name: 'IIS Techniques',
        storage: '48.0 GB',
        recentlyUsed: '2021-07-01T00:00:00.000Z'
      },
      {
        name: 'FIN-2023',
        storage: '28.0 GB',
        recentlyUsed: '2021-07-01T00:00:00.000Z'
      },
      {
        name: 'Others',
        storage: '63.9 GB',
        recentlyUsed: ''
      },
      {
        name: 'Free',
        storage: '98.0 GB',
        recentlyUsed: ''
      }
    ],
    axises: {
      x: {
        label: 'Name',
        accessor: '{{ $.name }}',
        selector: '$.name',
        type: 'string'
      },
      y: {
        label: 'Value',
        accessor: '{{ $.storage }}',
        selector: '$.storage',
        type: 'number',
        max: 'auto'
      },
      z: {
        label: 'Recently Used',
        accessor: '{{ $.recentlyUsed | date : yyyy/MM/dd }}',
        selector: '$.recentlyUsed',
        type: 'date'
      }
    },
    options: {
      title: '{{ $.name }}',
      round: true,
      offset: {
        x: 20,
        y: 20
      }
    }
  }
};
