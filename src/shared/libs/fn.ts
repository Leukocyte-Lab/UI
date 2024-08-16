import { parser } from '@/shared/libs/parser';
import { selector } from '@/shared/libs/selector';

import type { GetterFn } from '@/shared/types/fn';
import type { ObjectLike } from '@/shared/types/object';

export const valuesGetter = <
  Options extends ObjectLike | string | number,
  Getter extends GetterFn<string, [Options], Nullable> | string,
  Nullable = false
>(
  options: Options,
  getter: Getter,
  nullable?: Nullable
) => {
  if (typeof getter === 'function') {
    const res = getter(options);
    if (res === undefined || res === null) {
      return nullable ? res : '';
    } else {
      return String(res);
    }
  } else {
    if (typeof options === 'object' && options !== null) {
      return (
        String([selector(options, getter) || ''].flat(Infinity).join(' ')) ||
        String(parser(options, getter) || '')
      );
    } else {
      return String(options);
    }
  }
};

export const booleanGetter = <
  Options extends ObjectLike | string | number,
  Getter extends GetterFn<boolean, [Options], Nullable> | string,
  Nullable = false
>(
  options: Options,
  getter: Getter,
  nullable?: Nullable
) => {
  if (typeof getter === 'function') {
    const res = getter(options);
    if (res === undefined || res === null) {
      return nullable ? res : '';
    } else {
      return Boolean(res);
    }
  } else {
    if (typeof options === 'object' && options !== null) {
      return (
        Boolean(selector(options, getter))
      );
    } else {
      return Boolean(options);
    }
  }
};
