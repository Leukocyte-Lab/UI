import AttackMatrix from './AttackMatrix.vue';

import type { Meta, StoryFn } from '@storybook/vue3';

export default {
  title: 'Components / Exclusive / AttackMatrix',
  component: AttackMatrix,
  tags: ['autodocs']
} satisfies Meta<typeof AttackMatrix>;

const Template: StoryFn<typeof AttackMatrix> = (args) => ({
  components: { AttackMatrix },
  setup() {
    return { args };
  },
  template: `<AttackMatrix  v-bind="args" />`
});

export const DefaultAttackMatrix = Template.bind({});
DefaultAttackMatrix.args = {
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
};
