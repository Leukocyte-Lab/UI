import { DecoratorHelpers } from '@storybook/addon-themes';

import type { DecoratorFunction } from 'storybook/internal/csf';

import type { CssVariables } from '.storybook/helpers/css-variables';

const { initializeThemeState, pluckThemeFromContext } = DecoratorHelpers;

export const themeVariablesLoader = ({
  themes,
  defaultTheme
}: {
  themes: Record<string, CssVariables>;
  defaultTheme: string;
}): DecoratorFunction => {
  initializeThemeState(Object.keys(themes), defaultTheme);

  return (story, context) => {
    const selectedTheme = pluckThemeFromContext(context);
    const { themeOverride } = context.parameters.themes ?? {};

    const selected = themeOverride || selectedTheme || defaultTheme;

    return {
      components: { story },
      setup() {
        themes[selected]?.use();
      },
      template: `<v-app><story /></v-app>`
    };
  };
};
