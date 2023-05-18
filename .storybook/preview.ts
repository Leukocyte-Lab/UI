import cssVariablesTheme from '@etchteam/storybook-addon-css-variables-theme';

import { cssVariables } from './helpers/css-variables';

import type { Preview } from '@storybook/vue3';

const metallicLightTheme = cssVariables('../theme/Metallic-Bright/css/variables.css');
const metallicDarkTheme = cssVariables('../theme/Metallic-Dark/css/variables.css');

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    layout: 'centered',
    cssVariables: {
      files: {
        'Light Theme': metallicLightTheme,
        'Dark Theme': metallicDarkTheme
      },
      defaultTheme: 'Light Theme'
    }
  },
  decorators: [cssVariablesTheme]
};

export default preview;
