import { flatMap, fromPairs, get, toPairs } from 'lodash-es';
import cssGradient2SVG from 'gradient2svg';

import Math$ from '@/shared/libs/math';
import String$ from '@/shared/libs/string';
import { useFallback } from '@/shared/common/fallback';

export const tokenStates = ['default', 'hover', 'focus', 'active', 'disabled', 'click'] as const;

export const tokenTypes = [
  'sizing',
  'width',
  'height',
  'maxWidth',
  'maxHeight',
  'minWidth',
  'minHeight',
  'spacing',
  'gap',
  'padding',
  'margin',
  'color',
  'borderColor',
  'borderGradient',
  'textColor',
  'fill',
  'gradient',
  'borderRadius',
  'borderWidth',
  'boxShadow',
  'filter',
  'opacity',
  'fontFamilies',
  'fontWeights',
  'fontSizes',
  'lineHeight',
  'letterSpacing',
  'paragraphSpacing',
  'textCase',
  'textDecoration',
  'typography',
  'asset',
  'composition',
  'dimension',
  'border',
  'fillGradient'
] as const;

export namespace Token {
  export type Type = (typeof tokenTypes)[number];
  export type State = (typeof tokenStates)[number];
  export type Value = string | number;
  export type Props = {
    [state in State]: {
      [type in Type]?: Value;
    };
  };
  export type Variables = Record<string, string>;
}

const gradientTransfer = (
  variables: Token.Variables,
  gradient: string,
  factor: number = 1
) => {
  const variable = get(variables, String(gradient).replace(/var\((.*)\)/g, `$1`));

  return variable
    ? /linear-gradient/.test(variable)
      ? variable.replace(/(\d+.?(\d+)?)deg/, (_substring: string, ...args: any[]) => {
          const degree = Number(args[0]);
          const direction = `to ${
            Number(Math$.sin(Math$.rad(degree)).toFixed(2)) === 0
              ? ''
              : Number(Math$.sin(Math$.rad(degree)).toFixed(2)) * factor > 0
              ? 'bottom'
              : 'top'
          } ${
            Number(Math$.cos(Math$.rad(degree)).toFixed(2)) === 0
              ? ''
              : Number(Math$.cos(Math$.rad(degree)).toFixed(2)) * factor > 0
              ? 'left'
              : 'right'
          }`;

          return direction;
        })
      : /gradient/.test(variable)
      ? variable
      : `linear-gradient(90deg, ${variable}, ${variable})`
    : '';
};

export const tokenResolver = (variables: Token.Variables, token?: Token.Props) =>
  new Proxy<Token.Props>((token ?? {}) as Token.Props, {
    get: (tokenTarget, state: Token.State, receiver) =>
      typeof tokenTarget[state] === 'object' || typeof tokenTarget[state] === 'undefined'
        ? new Proxy(tokenTarget[state] ?? {}, {
            get: (stateTarget, type: Token.Type, receiver) => {
              if (
                type === 'fillGradient' &&
                !stateTarget.fillGradient &&
                !tokenTarget.default?.fillGradient
              ) {
                const fill = String(stateTarget.fill ?? tokenTarget.default?.fill ?? '');

                return fill ? gradientTransfer(variables, fill) : '';
              }

              if (
                type === 'borderGradient' &&
                !stateTarget.borderGradient &&
                !tokenTarget.default?.borderGradient
              ) {
                const borderColor = String(
                  stateTarget.borderColor ?? tokenTarget.default?.borderColor ?? ''
                );

                return borderColor ? gradientTransfer(variables, borderColor, -1) : '';
              }

              return typeof stateTarget[type] === 'undefined'
                ? tokenTarget.default?.[type] ?? ''
                : Reflect.get(stateTarget, type, receiver);
            }
          })
        : Reflect.get(tokenTarget, state, receiver)
  });

export const tokenTransformer = (
  namespace: string,
  token: Token.Props
): Record<string, Token.Value> =>
  fromPairs(
    flatMap(
      tokenStates.map((state) =>
        tokenTypes.map((type) => [
          `--${namespace}-${String$.toKebabCase(type)}${
            state === 'default' ? '' : `-${String$.toKebabCase(state)}`
          }`,
          useFallback(get(token, `${state}.${type}`),
            (/weight|gap|(padd|marg)ing|opacity|radius|(spac|siz)(ing|e)/i.test(type) ? 0 : 'none'))
        ])
      )
    )
  );

export const tokenStringify = (token: Record<string, Token.Value>): string =>
  toPairs(token)
    .map(([key, value]) => `${key}: ${value};`)
    .join('');

export const tokenVarResolver = (element: Element, token: string) =>
  element instanceof Element ? globalThis.getComputedStyle(element).getPropertyValue(token) : '';

export const tokenBoxShadowToFilter = (element: Element, token: string): string => {
  const boxShadow = tokenVarResolver(element, token);

  if (!boxShadow || boxShadow === 'none') return '';

  return boxShadow
    .replace(/\),/g, ') ,')
    .split(' , ')
    .map((shadow) => `drop-shadow(${shadow.trim().replace(/^((?:\S+\s+){3})(\S+\s+)/, '$1')})`)
    .join(' ');
};

export const tokenGradientToSVGdefs = (element: Element, token: string): string => {
  const gradient = tokenVarResolver(element, token);

  if (!gradient || gradient === 'none') return '';

  return `${cssGradient2SVG(gradient)?.replace(
    /^<((linear|radial)Gradient)/g,
    `<$1 id="${token.replace(/^--/g, '')}"`
  )}`;
};
