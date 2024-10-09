import type { ButtonBox as ButtonBoxNS } from '@/components/element/button/ButtonBox.model';
import type { SelectMenu as SelectMenuNS } from '@/components/element/menu/SelectMenu.model';
import type { Search } from '@/shared/libs/search';
import type { GetterFn } from '@/shared/types/fn';
import type { ObjectLike } from '@/shared/types/object';

export namespace DropDown {
  export type AcceptableValue = SelectMenuNS.AcceptableValue;

  export type ValuesGetter<T extends AcceptableValue, R> = GetterFn<R, [T], true> | string;

  export type Fields<T extends AcceptableValue = ObjectLike> = {
    key: GetterFn<string, [T]> | string;
    searchKeys?: ValuesGetter<T, string>[];
    title?: ValuesGetter<T, string>;
    content?: ValuesGetter<T, string>;
    icon?: ValuesGetter<T, string>;
    disabled?: ValuesGetter<T, boolean>;
  };

  export type Option<T extends AcceptableValue = ObjectLike> = SelectMenuNS.Option<T>;
  export type Props<T extends AcceptableValue = ObjectLike> = {
    level?: keyof typeof ButtonBoxNS.Level;
    size?: keyof typeof ButtonBoxNS.Size;
    variant?: keyof typeof ButtonBoxNS.Variant;
    placeholder?: string;
    disabled?: boolean;
    fields: Fields<T>;
    groupBy?: ValuesGetter<T, string>;
    label?: string;
    persist?: boolean;
    alterStr?: SelectMenuNS.AlterStr;
    labelShowAs?: 'auto' | 'label' | 'placeholder' | 'icon';
    menuPosition?: `${'top' | 'bottom'}-${'left' | 'right'}`;
  } & (
    | { useSearch?: false }
    | ({ useSearch: true; showAll?: boolean; query?: string } & Search.Options)
  ) &
    (
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
              modelValue: T[];
            }
          | {
              options: Map<string | number, T>;
              modelValue: Map<string | number, T>;
            }
        ))
    );
}
