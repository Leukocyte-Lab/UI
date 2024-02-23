import type { IterableObjectLike } from '../../shared/types/object';
export interface MapProxy<K extends string | number | symbol, V> extends Map<K, V> {
    find<T extends V>(predicate: (value: V, key: K, map: Map<K, V>) => value is T, thisArg?: any): [K, T] | undefined;
    find(predicate: (value: V, key: K, map: Map<K, V>) => unknown, thisArg?: any): [K, V] | undefined;
    findKey(predicate: (value: V, key: K, map: Map<K, V>) => unknown, thisArg?: any): K | undefined;
    findValue<T extends V>(predicate: (value: V, key: K, map: Map<K, V>) => value is T, thisArg?: any): T | undefined;
    findValue(predicate: (value: V, key: K, map: Map<K, V>) => unknown, thisArg?: any): V | undefined;
    toArray<R extends 'entries' | 'keys' | 'values'>(returnType?: R): R extends 'entries' ? [K, V][] : R extends 'keys' ? K[] : V[];
    toObject(): Record<K, V>;
}
declare class MapProxyInstance<K extends string | number | symbol, V> extends Map<K, V> implements MapProxy<K, V> {
    constructor(entries?: readonly (readonly [K, V])[] | null);
    find<T extends V>(predicate: (value: V, key: K, map: Map<K, V>) => value is T, thisArg?: any): [K, T] | undefined;
    find(predicate: (value: V, key: K, map: Map<K, V>) => unknown, thisArg?: any): [K, V] | undefined;
    findKey(predicate: (value: V, key: K, map: Map<K, V>) => unknown, thisArg?: any): K | undefined;
    findValue<T extends V>(predicate: (value: V, key: K, map: Map<K, V>) => value is T, thisArg?: any): T | undefined;
    findValue(predicate: (value: V, key: K, map: Map<K, V>) => unknown, thisArg?: any): V | undefined;
    toArray<R extends 'entries'>(returnType?: R): [K, V][];
    toArray<R extends 'keys'>(returnType: R): K[];
    toArray<R extends 'values'>(returnType: R): V[];
    toObject(): Record<K, V>;
    static fromObject<T>(iterable: IterableObjectLike<T>): MapProxyInstance<string | number | symbol, T>;
}
export default MapProxyInstance;
