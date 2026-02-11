import type { IterableObjectLike } from '../../shared/types/object';
export interface MapProxy<K extends string | number | symbol, V> extends Map<K, V> {
    find<T extends V>(predicate: (value: V, key: K, map: Map<K, V>) => value is T, thisArg?: any): [K, T] | undefined;
    find(predicate: (value: V, key: K, map: Map<K, V>) => unknown, thisArg?: any): [K, V] | undefined;
    findKey(predicate: (value: V, key: K, map: Map<K, V>) => unknown, thisArg?: any): K | undefined;
    findValue<T extends V>(predicate: (value: V, key: K, map: Map<K, V>) => value is T, thisArg?: any): T | undefined;
    findValue(predicate: (value: V, key: K, map: Map<K, V>) => unknown, thisArg?: any): V | undefined;
    findLast<T extends V>(predicate: (value: V, key: K, map: Map<K, V>) => value is T, thisArg?: any): [K, T] | undefined;
    findLast(predicate: (value: V, key: K, map: Map<K, V>) => unknown, thisArg?: any): [K, V] | undefined;
    findLastKey(predicate: (value: V, key: K, map: Map<K, V>) => unknown, thisArg?: any): K | undefined;
    findLastValue<T extends V>(predicate: (value: V, key: K, map: Map<K, V>) => value is T, thisArg?: any): T | undefined;
    findLastValue(predicate: (value: V, key: K, map: Map<K, V>) => unknown, thisArg?: any): V | undefined;
    map<U extends string | number | symbol, S>(callbackfn: (value: V, key: K, map: Map<K, V>) => [U, S], thisArg?: any): MapProxy<U, S>;
    reduce<U>(callbackfn: (previousValue: U, currentValue: V, currentKey: K, map: Map<K, V>) => U, initialValue: U, thisArg?: any): U;
    reduceRight<U>(callbackfn: (previousValue: U, currentValue: V, currentKey: K, map: Map<K, V>) => U, initialValue: U, thisArg?: any): U;
    filter(predicate: (value: V, key: K, map: Map<K, V>) => unknown, thisArg?: any): MapProxy<K, V>;
    toArray<R extends 'entries' | 'keys' | 'values'>(returnType?: R): R extends 'entries' ? [K, V][] : R extends 'keys' ? K[] : V[];
    toObject(): Record<K, V>;
    groupBy<K extends string | number | symbol, T>(items: Iterable<T>, keySelector: (item: T, index: number) => K): MapProxy<K, T[]>;
}
declare class MapProxyInstance<K extends string | number | symbol, V> extends Map<K, V> implements MapProxy<K, V> {
    constructor(entries?: Map<K, V> | readonly (readonly [K, V])[] | null);
    find<T extends V>(predicate: (value: V, key: K, map: Map<K, V>) => value is T, thisArg?: any): [K, T] | undefined;
    find(predicate: (value: V, key: K, map: Map<K, V>) => unknown, thisArg?: any): [K, V] | undefined;
    findKey(predicate: (value: V, key: K, map: Map<K, V>) => unknown, thisArg?: any): K | undefined;
    findValue<T extends V>(predicate: (value: V, key: K, map: Map<K, V>) => value is T, thisArg?: any): T | undefined;
    findValue(predicate: (value: V, key: K, map: Map<K, V>) => unknown, thisArg?: any): V | undefined;
    findLast<T extends V>(predicate: (value: V, key: K, map: Map<K, V>) => value is T, thisArg?: any): [K, T] | undefined;
    findLast(predicate: (value: V, key: K, map: Map<K, V>) => unknown, thisArg?: any): [K, V] | undefined;
    findLastKey(predicate: (value: V, key: K, map: Map<K, V>) => unknown, thisArg?: any): K | undefined;
    findLastValue<T extends V>(predicate: (value: V, key: K, map: Map<K, V>) => value is T, thisArg?: any): T | undefined;
    findLastValue(predicate: (value: V, key: K, map: Map<K, V>) => unknown, thisArg?: any): V | undefined;
    map<U extends string | number | symbol, S>(callbackfn: (value: V, key: K, map: Map<K, V>) => [U, S], thisArg?: any): MapProxy<U, S>;
    mapWithIndex<U extends string | number | symbol, S>(callbackfn: (value: V, key: K, index: number, map: Map<K, V>) => [U, S], thisArg?: any): MapProxy<U, S>;
    filter(predicate: (value: V, key: K, map: Map<K, V>) => unknown, thisArg?: any): MapProxy<K, V>;
    groupBy<K extends string | number | symbol, T>(items: Iterable<T>, keySelector: (item: T, index: number) => K): MapProxy<K, T[]>;
    reduce<U>(callbackfn: (previousValue: U, currentValue: V, currentKey: K, map: Map<K, V>) => U, initialValue: U, thisArg?: any): U;
    reduceRight<U>(callbackfn: (previousValue: U, currentValue: V, currentKey: K, map: Map<K, V>) => U, initialValue: U, thisArg?: any): U;
    toArray<R extends 'entries'>(returnType?: R): [K, V][];
    toArray<R extends 'keys'>(returnType: R): K[];
    toArray<R extends 'values'>(returnType: R): V[];
    toObject(): Record<K, V>;
    static fromObject<T>(iterable: IterableObjectLike<T>): MapProxyInstance<string | number | symbol, T>;
}
export default MapProxyInstance;
