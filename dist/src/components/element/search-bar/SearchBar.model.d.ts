import type { SelectMenu as SelectMenuNS } from '../../../components/element/menu/SelectMenu.model';
import type { TextField as TextFieldNS } from '../../../components/element/textfield/TextField.model';
import type { Search } from '../../../shared/libs/search';
import type { GetterFn } from '../../../shared/types/fn';
import type { ObjectLike } from '../../../shared/types/object';
export declare namespace SearchBar {
    type AcceptableValue = SelectMenuNS.AcceptableValue;
    type ValuesGetter<T extends AcceptableValue, R> = GetterFn<R, [T], true> | string;
    type Fields<T extends AcceptableValue = ObjectLike> = {
        key: GetterFn<string, [T]> | string;
        searchKeys: ValuesGetter<T, string>[];
        title?: ValuesGetter<T, string>;
        content?: ValuesGetter<T, string>;
        icon?: ValuesGetter<T, string>;
        disabled?: ValuesGetter<T, boolean>;
    };
    type Option<T extends AcceptableValue = ObjectLike> = SelectMenuNS.Option<T>;
    type Props<T extends AcceptableValue = ObjectLike> = Pick<TextFieldNS.Props, 'autofocus' | 'disabled' | 'readonly' | 'placeholder' | 'spellcheck' | 'eventSignalOptions' | 'icon' | 'iconAlign' | 'tabindex'> & Search.Options & {
        fields: Fields<T>;
        groupBy?: ValuesGetter<T, string>;
        modelValue?: string;
    } & ({
        autocomplete?: false;
        options?: T[] | Map<string | number, T>;
    } | {
        autocomplete: true;
        options: T[] | Map<string | number, T>;
    });
    type Emits<T extends AcceptableValue = ObjectLike> = {
        (e: 'select', option: T): void;
        (e: 'search', option: Props<T>['options']): void;
    };
}
