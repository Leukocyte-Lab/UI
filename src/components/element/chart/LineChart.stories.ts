import LineChart from './LineChart.vue';

import type { Meta, StoryFn } from '@storybook/vue3';

export default {
  title: 'Components / Chart / LineChart',
  component: LineChart,
  tags: ['autodocs']
} satisfies Meta<typeof LineChart>;

const Template: StoryFn<typeof LineChart> = (args) => ({
  components: { LineChart },
  setup() {
    return { args };
  },
  template: '<LineChart v-bind="args" style="width: 900px; height: 320px;" />'
});

export const DefaultLineChart = Template.bind({});
DefaultLineChart.args = {
  datasets: [
    {
      terminatedAt: '2021-03-01T00:00:00.000Z',
      detection: { rate: 70 },
      playbook: {
        id: 'f0da1aae-ba67-4b06-90da-c210c97d9ca5',
        name: 'HCI-2022'
      }
    },
    {
      terminatedAt: '2021-03-02T00:00:00.000Z',
      detection: { rate: 65 },
      playbook: {
        id: 'f0da1aae-ba67-4b06-90da-c210c97d9ca7',
        name: 'TCI-2022'
      }
    },
    {
      terminatedAt: '2021-03-03T00:00:00.000Z',
      detection: { rate: 85 },
      playbook: {
        id: 'f0da1aae-ba67-4b06-90da-c210c97d9ca5',
        name: 'HCI-2022'
      }
    },
    {
      terminatedAt: '2021-03-04T00:00:00.000Z',
      detection: { rate: 35 },
      playbook: {
        id: 'f0da1aae-ba67-4b06-90da-c210c97d9ca9',
        name: 'APT-38'
      }
    },
    {
      terminatedAt: '2021-03-05T00:00:00.000Z',
      detection: { rate: 40 },
      playbook: {
        id: 'f0da1aae-ba67-4b06-90da-c210c97d9ca5',
        name: 'HCI-2022'
      }
    },
    {
      terminatedAt: '2021-03-06T00:00:00.000Z',
      detection: { rate: 50 },
      playbook: {
        id: 'f0da1aae-ba67-4b06-90da-c210c97d9ca5',
        name: 'HCI-2022'
      }
    }
  ],
  axises: {
    x: {
      label: 'Execution Time',
      accessor: "{{ $.terminatedAt | date : yyyy/MM/dd'\n'HH:mm:ss }}",
      selector: '$.terminatedAt',
      type: 'string'
    },
    y: {
      label: 'Detection Rate',
      accessor: '{{ $.detection.rate | number }}%',
      selector: '$.detection.rate',
      type: 'number',
      max: 100,
      min: 0,
      step: 20
    }
  },
  options: {
    title: '{{ $.playbook.name }}',
    curve: 'smooth',
    radius: 0.5,
    grid: 'xy',
    offset: {
      x: 30,
      y: 30
    }
  }
};
