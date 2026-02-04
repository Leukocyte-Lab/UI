import type { StorybookConfig } from '@storybook/vue3-vite';

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-a11y',
    '@chromatic-com/storybook',
    '@storybook/addon-docs',
    '@storybook/addon-themes',
    'storybook-addon-vue-slots',
    '@storybook/addon-vitest'
  ],
  framework: {
    name: '@storybook/vue3-vite',
    options: {
      docgen: { plugin: 'vue-component-meta', tsconfig: 'tsconfig.app.json' }
    }
  }
};
export default config;
