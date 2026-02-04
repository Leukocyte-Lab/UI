import type { Meta, StoryObj } from '@storybook/vue3-vite';

import MatrixChart from './MatrixChart.vue';

const meta: Meta<typeof MatrixChart> = {
  title: 'Components / Chart / MatrixChart',
  component: MatrixChart,
  tags: ['autodocs']
};

export default meta;

type MatrixChart$ = StoryObj<typeof MatrixChart>;

export const DefaultMatrixChart: MatrixChart$ = {
  args: {
    datasets: [
      {
        label: 'project-analysis',
        series: [
          {
            name: 'Reconnaissance',
            value: 20
          },
          {
            name: 'Weaponization',
            value: 55
          },
          {
            name: 'Delivery',
            value: 78
          },
          {
            name: 'Exploitation',
            value: 34
          },
          {
            name: 'Installation',
            value: 69
          },
          {
            name: 'Command & Control',
            value: 53
          },
          {
            name: 'Actions on Objectives',
            value: 99
          }
        ]
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
        label: 'Percentage',
        accessor: '{{ $.value | number }}%',
        selector: '$.value',
        type: 'number',
        step: 5,
        max: 100,
        min: 0
      }
    }
  }
};
