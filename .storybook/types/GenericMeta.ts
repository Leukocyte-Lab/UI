import type { Component } from 'vue';
import type { Meta } from '@storybook/vue3-vite';

// Using a relaxed constraint to support Vue generic components
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type GenericMeta<C extends Component | ((...args: any[]) => any)> = Omit<Meta<C>, 'component'> & {
  component: C;
};
