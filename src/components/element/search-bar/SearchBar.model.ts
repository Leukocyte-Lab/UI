import type { SelectMenu as SelectMenuNS } from '@/components/element/menu/SelectMenu.model';
import type { TextField as TextFieldNS } from '@/components/element/textfield/TextField.model';
import type { Search } from '@/shared/libs/search';
import type { GetterFn } from '@/shared/types/fn';
import type { ObjectLike } from '@/shared/types/object';

export namespace SearchBar {
  export type AcceptableValue = SelectMenuNS.AcceptableValue;

  export type ValuesGetter<T extends AcceptableValue, R> = GetterFn<R, [T], true> | string;

  export type Fields<T extends AcceptableValue = ObjectLike> = {
    key: GetterFn<string, [T]> | string;
    searchKeys: ValuesGetter<T, string>[];
    title?: ValuesGetter<T, string>;
    content?: ValuesGetter<T, string>;
    icon?: ValuesGetter<T, string>;
    disabled?: ValuesGetter<T, boolean>;
  };

  export type Option<T extends AcceptableValue = ObjectLike> = SelectMenuNS.Option<T>;
  export type Props<T extends AcceptableValue = ObjectLike> = Pick<
    TextFieldNS.Props,
    | 'autofocus'
    | 'disabled'
    | 'readonly'
    | 'placeholder'
    | 'spellcheck'
    | 'eventSignalOptions'
    | 'icon'
    | 'iconAlign'
    | 'tabindex'
  > & {
    fields: Fields<T>;
    groupBy?: ValuesGetter<T, string>;
    modelValue?: string; // query, use by `v-model`
    searchOptions?: Search.Options;
  } & (
      | {
          autocomplete?: false;
          options?: T[] | Map<string | number, T>;
        }
      | {
          autocomplete: true;
          options: T[] | Map<string | number, T>;
        }
    );

  export type Emits<T extends AcceptableValue = ObjectLike> = {
    (e: 'select', option: T): void;
    (e: 'search', option: Props<T>['options']): void;
  };
}
