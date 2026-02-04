import type { DecoratorFunction } from 'storybook/internal/csf';
import type { CssVariables } from '.storybook/helpers/css-variables';
export declare const themeVariablesLoader: ({ themes, defaultTheme }: {
    themes: Record<string, CssVariables>;
    defaultTheme: string;
}) => DecoratorFunction;
