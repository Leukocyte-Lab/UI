import type { Search } from '../../../shared/libs/search';
import type { GetterFn } from '../../../shared/types/fn';
import type { ObjectLike } from '../../../shared/types/object';
export declare namespace SelectMenu {
    type AcceptableValue = ObjectLike | string | number;
    type ValuesGetter<T extends AcceptableValue, R> = GetterFn<R, [T], true> | string;
    type Fields<T extends AcceptableValue = ObjectLike> = {
        key: GetterFn<string, [T]> | string;
        searchKeys?: ValuesGetter<T, string>[];
        title?: ValuesGetter<T, string>;
        content?: ValuesGetter<T, string>;
        icon?: ValuesGetter<T, string>;
        disabled?: ValuesGetter<T, boolean>;
    };
    type Option<T extends AcceptableValue = ObjectLike> = {
        selected: boolean;
        matched?: boolean;
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
    type AlterStr = {
        clearSelection?: string;
        noData?: string;
    };
    type Props<T extends AcceptableValue = ObjectLike> = {
        fields: Fields<T>;
        groupBy?: ValuesGetter<T, string>;
        label?: string;
        alterStr?: AlterStr;
    } & ({
        useSearch?: false;
    } | ({
        useSearch: true;
        showAll?: boolean;
        query?: string;
    } & Search.Options)) & ({
        options: T[] | Map<string | number, T>;
        modelValue?: T | T[] | Map<string | number, T>;
        multiple?: boolean;
    } | {
        options: T[] | Map<string | number, T>;
        modelValue?: T;
        multiple: false;
    } | ({
        multiple: true;
    } & ({
        options: T[];
        modelValue: T[];
    } | {
        options: Map<string | number, T>;
        modelValue: Map<string | number, T>;
    })));
}
