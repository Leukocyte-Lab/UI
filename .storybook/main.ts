import type { StorybookConfig } from '@storybook/vue3-vite';

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-a11y',
    '@etchteam/storybook-addon-css-variables-theme',
    '@chromatic-com/storybook'
  ],
  framework: {
    name: '@storybook/vue3-vite',
    options: {
      docgen: { plugin: 'vue-component-meta', tsconfig: 'tsconfig.app.json' }
    }
  }
};
export default config;
