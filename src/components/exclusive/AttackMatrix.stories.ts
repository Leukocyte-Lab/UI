import type { Meta, StoryObj } from '@storybook/vue3-vite';

import AttackMatrix from './AttackMatrix.vue';

const meta: Meta<typeof AttackMatrix> = {
  title: 'Components / Exclusive / AttackMatrix',
  component: AttackMatrix,
  tags: ['autodocs']
};

export default meta;

type AttackMatrix$ = StoryObj<typeof AttackMatrix>;

export const DefaultAttackMatrix: AttackMatrix$ = {
  args: {
    items: [
      {
        label: 'T1059',
        description: 'Command and Scripting Interpreter',
        detected: {
          count: 1,
          total: 21
        }
      },
      {
        label: 'T1059.002',
        description: 'Apple Script',
        detected: {
          count: 1,
          total: 21
        }
      }
    ],
    disabled: false,
    showDetected: true
  }
};
