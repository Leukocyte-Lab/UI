import '@/assets/styles/main.scss';

import cssVariablesTheme from '@etchteam/storybook-addon-css-variables-theme';
import { addCollection } from '@iconify/vue/offline';
import * as FontAwesomeBrands from '@iconify-json/fa6-brands';
import * as FontAwesomeRegular from '@iconify-json/fa6-regular';
import * as FontAwesomeSolid from '@iconify-json/fa6-solid';

import type { Preview } from '@storybook/vue3';

import { fixVModel } from './decorators/vmodel.decorator';
import { cssVariables } from './helpers/css-variables';

addCollection(FontAwesomeSolid.icons);
addCollection(FontAwesomeRegular.icons);
addCollection(FontAwesomeBrands.icons);

const MetallicLightTheme = cssVariables(
  () => import('@leukocyte-lab/theme/metallic/bright/variables.css?inline')
);
const MetallicDarkTheme = cssVariables(
  () => import('@leukocyte-lab/theme/metallic/dark/variables.css?inline')
);

const preview: Preview = {
  parameters: {
    layout: 'centered',
    cssVariables: {
      files: {
        'Light Theme': MetallicLightTheme,
        'Dark Theme': MetallicDarkTheme
      },
      defaultTheme: 'Light Theme'
    },
    docs: {
      argTypes: {
        sort: 'requiredFirst'
      }
    }
  },
  decorators: [
    cssVariablesTheme,
    fixVModel
  ]
};

export default preview;
