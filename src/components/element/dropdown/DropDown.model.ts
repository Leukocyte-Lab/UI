import type { ButtonBox as ButtonBoxNS } from '@/components/element/button/ButtonBox.model';
import type { SelectMenu as SelectMenuNS } from '@/components/element/menu/SelectMenu.model';
import type { TextField as TextFieldNS } from '@/components/element/textfield/TextField.model';
import type { Search } from '@/shared/libs/search';
import type { GetterFn } from '@/shared/types/fn';
import type { ObjectLike } from '@/shared/types/object';

export namespace DropDown {
  export type AcceptableValue = SelectMenuNS.AcceptableValue;

  export type ValuesGetter<T extends AcceptableValue, R> = GetterFn<R, [T], true> | string;

  export type Fields<T extends AcceptableValue = ObjectLike> = {
    key?: GetterFn<string, [T]> | string;
    searchKeys?: ValuesGetter<T, string>[];
    title?: ValuesGetter<T, string>;
    content?: ValuesGetter<T, string>;
    icon?: ValuesGetter<T, string>;
    disabled?: ValuesGetter<T, boolean>;
  };

  export type AlterStr = {
    create?: string;
  };

  export type Option<T extends AcceptableValue = ObjectLike> = SelectMenuNS.Option<T>;
  export type Props<T extends AcceptableValue = ObjectLike> = {
    level?: keyof typeof ButtonBoxNS.Level;
    size?: keyof typeof ButtonBoxNS.Size;
    variant?: keyof typeof ButtonBoxNS.Variant;
    placeholder?: string;
    disabled?: boolean;
    fields?: Fields<T>;
    groupBy?: ValuesGetter<T, string>;
    label?: string;
    persist?: boolean;
    alterStr?: SelectMenuNS.AlterStr & AlterStr;
    labelShowAs?: 'auto' | 'label' | 'placeholder' | 'icon';
    menuPosition?: `${'top' | 'bottom'}-${'left' | 'right'}`;
  } & (
    | { useSearch?: false }
    | ({ useSearch: true; showAll?: boolean; query?: string } & Search.Options)
  ) &
    (
      | { useCreate?: false }
      | ({ useCreate: true; createPlaceholder?: string; type?: Exclude<TextFieldNS.Type, 'password' | 'search'>; createInProgress?: boolean } & Omit<
          TextFieldNS.Props,
          | 'type'
          | 'modelValue'
          | 'label'
          | 'placeholder'
          | 'disabled'
          | 'readonly'
          | 'required'
          | 'name'
          | 'size'
          | 'icon'
        >)
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

  export type Emits = {
    (e: 'create', value: string): void;
  }
}
