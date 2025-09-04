import '@/assets/styles/main.scss';

import { addCollection } from '@iconify/vue/offline';
import * as FontAwesomeBrands from '@iconify-json/fa6-brands';
import * as FontAwesomeRegular from '@iconify-json/fa6-regular';
import * as FontAwesomeSolid from '@iconify-json/fa6-solid';

import type { Preview } from '@storybook/vue3-vite';

import { themeVariablesLoader } from './decorators/theme-variables-loader.decorator';
import { fixVModel } from './decorators/vmodel.decorator';
import { cssVariables } from './helpers/css-variables';

addCollection(FontAwesomeSolid.icons);
addCollection(FontAwesomeRegular.icons);
addCollection(FontAwesomeBrands.icons);

const MetallicLightTheme = cssVariables(
  () => import('@leukocyte-lab/theme/metallic/bright/variables.css?inline')
);
const MetallicDarkTheme = cssVariables(
  () => import('@leukocyte-lab/theme/metallic/dark/variables.css?inline'),
  {
    'background-color': '#000',
    'color': '#fff'
  }
);

const preview: Preview = {
  parameters: {
    layout: 'centered',
    docs: {
      toc: true,
      argTypes: {
        sort: 'requiredFirst'
      }
    }
  },
  decorators: [
    themeVariablesLoader({
      themes: {
        Light: MetallicLightTheme,
        Dark: MetallicDarkTheme
      },
      defaultTheme: 'Light'
    }),
    fixVModel
  ]
};

export default preview;
