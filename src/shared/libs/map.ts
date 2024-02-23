import type { IterableObjectLike } from '@/shared/types/object';

export interface MapProxy<K extends string | number | symbol, V> extends Map<K, V> {
  find<T extends V>(
    predicate: (value: V, key: K, map: Map<K, V>) => value is T,
    thisArg?: any
  ): [K, T] | undefined;
  find(predicate: (value: V, key: K, map: Map<K, V>) => unknown, thisArg?: any): [K, V] | undefined;
  findKey(predicate: (value: V, key: K, map: Map<K, V>) => unknown, thisArg?: any): K | undefined;
  findValue<T extends V>(
    predicate: (value: V, key: K, map: Map<K, V>) => value is T,
    thisArg?: any
  ): T | undefined;
  findValue(predicate: (value: V, key: K, map: Map<K, V>) => unknown, thisArg?: any): V | undefined;

  toArray<R extends 'entries' | 'keys' | 'values'>(
    returnType?: R
  ): R extends 'entries' ? [K, V][] : R extends 'keys' ? K[] : V[];
  toObject(): Record<K, V>;
}

class MapProxyInstance<K extends string | number | symbol, V>
  extends Map<K, V>
  implements MapProxy<K, V>
{
  constructor(entries?: readonly (readonly [K, V])[] | null) {
    super(entries);
  }

  public find<T extends V>(
    predicate: (value: V, key: K, map: Map<K, V>) => value is T,
    thisArg?: any
  ): [K, T] | undefined;

  public find(
    predicate: (value: V, key: K, map: Map<K, V>) => unknown,
    thisArg?: any
  ): [K, V] | undefined;

  public find(
    predicate: (value: V, key: K, map: Map<K, V>) => unknown,
    thisArg?: any
  ): [K, V] | undefined {
    for (const [key, value] of this) {
      if (predicate.call(thisArg, value, key, this)) {
        return [key, value];
      }
    }

    return undefined;
  }

  public findKey(
    predicate: (value: V, key: K, map: Map<K, V>) => unknown,
    thisArg?: any
  ): K | undefined {
    for (const [key, value] of this) {
      if (predicate.call(thisArg, value, key, this)) {
        return key;
      }
    }

    return undefined;
  }

  public findValue<T extends V>(
    predicate: (value: V, key: K, map: Map<K, V>) => value is T,
    thisArg?: any
  ): T | undefined;

  public findValue(
    predicate: (value: V, key: K, map: Map<K, V>) => unknown,
    thisArg?: any
  ): V | undefined;

  public findValue(
    predicate: (value: V, key: K, map: Map<K, V>) => unknown,
    thisArg?: any
  ): V | undefined {
    for (const [key, value] of this) {
      if (predicate.call(thisArg, value, key, this)) {
        return value;
      }
    }

    return undefined;
  }

  public toArray<R extends 'entries'>(returnType?: R): [K, V][];
  public toArray<R extends 'keys'>(returnType: R): K[];
  public toArray<R extends 'values'>(returnType: R): V[];
  public toArray<R extends 'entries' | 'keys' | 'values'>(returnType?: R): [K, V][] | K[] | V[] {
    switch (returnType) {
      case 'entries':
        return Array.from(this.entries());
      case 'keys':
        return Array.from(this.keys());
      case 'values':
        return Array.from(this.values());
      default:
        return Array.from(this.entries());
    }
  }

  public toObject(): Record<K, V> {
    return Object.fromEntries(this.entries()) as Record<K, V>;
  }

  public static fromObject<T>(
    iterable: IterableObjectLike<T>
  ): MapProxyInstance<string | number | symbol, T> {
    return new MapProxyInstance(Object.entries(iterable));
  }
}

export default MapProxyInstance;
