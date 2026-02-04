import type { GetterFn } from '../../shared/types/fn';
import type { ObjectLike } from '../../shared/types/object';
export declare const simpleGetter: <T, Options, Getter extends GetterFn<T, [Options]>>(options: Options, getter: Getter) => T;
export declare const valuesGetter: <Options extends ObjectLike | string | number, Getter extends GetterFn<string, [Options], Nullable> | string, Nullable = false>(options: Options, getter: Getter, nullable?: Nullable) => string | (Nullable extends true ? null | undefined : never);
export declare const booleanGetter: <Options extends ObjectLike | string | number, Getter extends GetterFn<boolean, [Options], Nullable> | string, Nullable = false>(options: Options, getter: Getter, nullable?: Nullable) => boolean | "" | (Nullable extends true ? null | undefined : never);
