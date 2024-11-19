import type { Meta, StoryObj } from '@storybook/vue3';

import StackBarChart from './StackBarChart.vue';

const meta: Meta<typeof StackBarChart> = {
  title: 'Components / Chart / StackBarChart',
  component: StackBarChart,
  tags: ['autodocs']
};

export default meta;

type StackBarChart$ = StoryObj<typeof StackBarChart>;

export const DefaultStackBarChart: StackBarChart$ = {
  args: {
    style: {
      width: '420px'
    },
    datasets: [
      {
        name: 'WAF',
        value: 50,
        action: {
          count: 25,
          total: 50
        }
      },
      {
        name: 'SEG',
        value: 38,
        action: {
          count: 19,
          total: 50
        }
      },
      {
        name: 'DLP',
        value: 16,
        action: {
          count: 8,
          total: 50
        }
      },
      {
        name: 'EDR',
        value: 14,
        action: {
          count: 7,
          total: 50
        }
      },
      {
        name: 'IPS/IDS',
        value: 8,
        action: {
          count: 4,
          total: 50
        }
      },
      {
        name: 'FW',
        value: 6,
        action: {
          count: 3,
          total: 50
        }
      },
      {
        name: 'NDR',
        value: 2,
        action: {
          count: 1,
          total: 50
        }
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
        accessor: '{{ $.value | number }}%',
        selector: '$.value',
        type: 'number',
        max: 'auto'
      },
      z: {
        label: 'Actions',
        accessor: '{{ $.action.count }}/{{ $.action.total }}',
        selector: '$.action',
        type: 'string'
      }
    },
    options: {
      title: '{{ $.name }}',
      offset: {
        x: 0,
        y: 0
      }
    }
  }
};

export const EmptyStackBarChart: StackBarChart$ = {
  args: {
    style: {
      width: '420px'
    },
    datasets: [],
    axises: {
      x: {
        label: 'Name',
        accessor: '{{ $.name }}',
        selector: '$.name',
        type: 'string'
      },
      y: {
        label: 'Value',
        accessor: '{{ $.value | number }}%',
        selector: '$.value',
        type: 'number',
        max: 'auto'
      },
      z: {
        label: 'Actions',
        accessor: '{{ $.action.count }}/{{ $.action.total }}',
        selector: '$.action',
        type: 'string'
      }
    },
    options: {
      title: '{{ $.name }}',
      offset: {
        x: 0,
        y: 0
      }
    }
  }
};
