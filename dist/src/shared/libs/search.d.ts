import type { ComputedRef, MaybeRef, Ref } from 'vue';
import type { Callback } from '../../shared/types/callback';
import type { GetterFn } from '../../shared/types/fn';
import type { ObjectLike } from '../../shared/types/object';
export declare namespace Search {
    type AcceptableValue = ObjectLike | string | number;
    type ValuesGetter<T extends AcceptableValue, R> = GetterFn<R, [T], true> | string;
    type Options = {
        caseSensitive?: boolean;
        limit?: number;
        sortBy?: 'relevance' | 'default' | 'remain';
    } & ({
        phraseSearch?: false;
        strict?: never;
        segmentPattern?: never;
    } | {
        phraseSearch?: true;
        strict?: boolean;
        segmentPattern?: RegExp;
    }) & ({
        relevanceSearch?: false;
        relevancePolicy?: never;
        threshold?: never;
    } | {
        relevanceSearch: true;
        relevancePolicy?: 'average' | 'max' | 'min' | number[];
        threshold?: number;
    });
    type BaseExpose = {
        query: Ref<string>;
        reset: Callback;
        search: (value: string) => boolean | number;
    };
}
declare function useSearch<T extends string | number>(datasets: MaybeRef<T[]>, args?: {
    getters?: never;
    query?: MaybeRef<string>;
    options?: MaybeRef<Search.Options>;
}): {
    result: ComputedRef<T[]>;
} & Search.BaseExpose;
declare function useSearch<T extends string | number, K extends string | number | symbol>(datasets: MaybeRef<Map<K, T>>, args?: {
    getters?: never;
    query?: MaybeRef<string>;
    options?: MaybeRef<Search.Options>;
}): {
    result: ComputedRef<Map<K, T>>;
} & Search.BaseExpose;
declare function useSearch<T extends ObjectLike>(datasets: MaybeRef<T[]>, args: {
    getters: MaybeRef<Search.ValuesGetter<T, string>[]>;
    query?: MaybeRef<string>;
    options?: MaybeRef<Search.Options>;
}): {
    result: ComputedRef<T[]>;
} & Search.BaseExpose;
declare function useSearch<T extends ObjectLike, K extends string | number | symbol>(datasets: MaybeRef<Map<K, T>>, args: {
    getters: MaybeRef<Search.ValuesGetter<T, string>[]>;
    query?: MaybeRef<string>;
    options?: MaybeRef<Search.Options>;
}): {
    result: ComputedRef<Map<K, T>>;
} & Search.BaseExpose;
declare function useSearch<T extends Search.AcceptableValue>(datasets: MaybeRef<T[]>, args?: {
    query?: MaybeRef<string>;
    getters?: MaybeRef<Search.ValuesGetter<T, string>[]>;
    options?: MaybeRef<Search.Options>;
}): {
    result: ComputedRef<T[]>;
} & Search.BaseExpose;
declare function useSearch<T extends Search.AcceptableValue, K extends string | number | symbol>(datasets: MaybeRef<Map<K, T>>, args?: {
    query?: MaybeRef<string>;
    getters?: MaybeRef<Search.ValuesGetter<T, string>[]>;
    options?: MaybeRef<Search.Options>;
}): {
    result: ComputedRef<Map<K, T>>;
} & Search.BaseExpose;
export { useSearch };
