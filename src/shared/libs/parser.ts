import { formatInTimeZone, getTimezoneOffset } from 'date-fns-tz';
import { flatMap, join, last, take,uniq } from 'lodash-es';
import XRegExp from 'xregexp';

import type { NamedGroupsArray } from 'xregexp';

import { selector } from './selector';

import { useI18n } from '@/middleware/i18n/i18n.service';

import type { ObjectLike } from '@/shared/types/object';
import type { Optional } from '@/shared/types/optional';

const tailingRegExp = XRegExp.build(`[^\\{\\}]*`, {}, 'gmx');
const filterRegExp = XRegExp.build(`[^\\|\\(\\)\\{\\}: \t]+`, {}, 'gmx');
const argsRegExp = XRegExp.build(`[^\\|\\(\\)\\{\\}]+`, {}, 'gmx');
const pipeRegExp = XRegExp.build(
  `
    \\|[ \t]*
      ({{filter}})
      ([ \t]*:[ \t]*({{args}}))*
      ({{tailing}})
  `,
  {
    filter: filterRegExp,
    args: argsRegExp,
    tailing: tailingRegExp
  },
  'gmx'
);
const selectorRegExp = XRegExp.build(`[^\\:\\|\\(\\)\\{\\}\v \t]+`, {}, 'gmx');
const operatorRegExp = XRegExp.build(
  `
    [ \\(]*[ \t]*
      ({{selector}})
    ([ \t](?=\\))*)?[ \\)]*
    ({{tailing}})
  `,
  {
    selector: selectorRegExp,
    tailing: tailingRegExp
  },
  'gmx'
);

export const templateRegExp = XRegExp.build(
  `
    (\\{\\{[ \t]*
      ({{operator}})
    [ \t](?=\\})*\\}\\})
  `,
  { operator: operatorRegExp },
  'gmx'
);

export const parser = <T extends ObjectLike = ObjectLike>(
  datasets: Optional<T>,
  str: string
): any =>
  str
    ? XRegExp.replace(
        str,
        templateRegExp,
        (...args) => {
          const groups = last(args) as NamedGroupsArray | undefined;
          const pipe = XRegExp.exec(groups?.tailing ?? '', pipeRegExp)?.groups;
          const data = selector<any>(datasets, groups?.selector);

          let result = data ?? '';

          try {
            if (pipe) {
              const params = (pipe?.args ?? '').trim().split(/\s:\s/);

              const i18n = useI18n();

              switch (pipe.filter) {
                case 'date': {
                  const timeZone = (
                    params?.[1]
                      ? selector(datasets, String(params?.[1])) ?? params?.[1]
                      : i18n.timeZone.value
                  ) as string;
                  result = formatInTimeZone(
                    new Date(data as Date),
                    isNaN(getTimezoneOffset(timeZone))
                      ? Intl.DateTimeFormat().resolvedOptions().timeZone
                      : (timeZone as string),
                    String(params?.[0] ?? 'yyyy-MM-dd')
                  );

                  break;
                }
                case 'number':
                  result = Number(data ?? 0);
                  break;
                case 'json':
                  result = JSON.parse(data);
                  break;
                case 'stringify':
                  result = JSON.stringify(data);
                  break;
                case 'trim':
                  result = (data as string).trim();
                  break;
                case 'upper':
                  result = (data as string).toUpperCase();
                  break;
                case 'lower':
                  result = (data as string).toLowerCase();
                  break;
                case 'capitalize':
                  result = (data as string).replace(/\b\w/g, (l) => l.toUpperCase());
                  break;
                case 'join':
                  result = join(data, params?.[0]);
                  break;
                case 'take':
                  result = take(data, Number(params?.[0]));
                  break;
                case 'last':
                  result = last(data);
                  break;
                case 'flat':
                  result = flatMap(data);
                  break;
                case 'uniq':
                  result = uniq(data);
                  break;
                case 'wrap':
                  if (!params?.[0]) break;
                  result = data.map((data: any) => ({ [params[0]]: data }));
                  break;
                default:
                  break;
              }
            }

            const tail = (pipe?.tailing ?? groups?.tailing ?? '').replace(/^\)/, '');

            if (tail) {
              result = parser({ ...datasets, result }, `{{ result${tail} }}`);
            }
          } catch (error) {
            return error;
          }

          if (templateRegExp.test(result)) {
            result = parser(datasets, result);
          }

          return result;
        },
        'all'
      )
    : '';

export type Parser = typeof parser;
