import type { Component } from 'vue';
import type { Meta } from '@storybook/vue3-vite';
export type GenericMeta<C extends Component | ((...args: any[]) => any)> = Omit<Meta<C>, 'component'> & {
    component: C;
};
