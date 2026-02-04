import type { Meta } from '@storybook/vue3-vite';
import type { Component } from 'vue';
export type GenericMeta<C extends Component | ((...args: any[]) => any)> = Omit<Meta<C>, 'component'> & {
    component: C;
};
