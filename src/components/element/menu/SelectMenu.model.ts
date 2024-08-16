import type { Signal } from '@/shared/libs/signal';
import type { GetterFn } from '@/shared/types/fn';
import type { ObjectLike } from '@/shared/types/object';

export namespace SelectMenu {
  export type AcceptableValue = ObjectLike | string | number;

  export type ValuesGetter<T extends AcceptableValue, R> = GetterFn<R, [T], true> | string;

  export type Fields<T extends AcceptableValue> = {
    key: GetterFn<string, [T]> | string;
    searchKeys?: ValuesGetter<T, string>[];
    title?: ValuesGetter<T, string>;
    content?: ValuesGetter<T, string>;
    icon?: ValuesGetter<T, string>;
    disabled?: ValuesGetter<T, boolean>;
  };

  export type Option<T extends AcceptableValue> = {
    selected: Signal<boolean>;
    field: {
      key: string;
      title?: string;
      content?: string;
      icon?: string;
      group?: string;
      disabled?: boolean;
    };
    payload: T;
  };

  export type Props<T extends AcceptableValue> = {
    fields: Fields<T>;
    groupBy?: ValuesGetter<T, string>;
    label?: string;
    useSearch?: boolean;
  } & (
    | {
      options: T[] | Map<string | number, T>;
      modelValue?: T | T[] | Map<string | number, T>;
      multiple?: boolean;
    }
    | {
        options: T[] | Map<string | number, T>;
        modelValue?: T;
        multiple: false;
      }
    | ({ multiple: true } & (
        | {
            options: T[];
            modelValue?: T[];
          }
        | {
            options: Map<string | number, T>;
            modelValue?: Map<string | number, T>;
          }
      ))
  );
}
