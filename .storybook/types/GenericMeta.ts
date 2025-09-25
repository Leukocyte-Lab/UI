import type { Meta } from '@storybook/vue3-vite';

export type GenericMeta<C> = Omit<Meta<C>, 'component'> & {
  component: Record<keyof C, unknown>;
};
