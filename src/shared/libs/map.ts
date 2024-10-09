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

  map<U extends string | number | symbol, S>(
    callbackfn: (value: V, key: K, map: Map<K, V>) => [U, S],
    thisArg?: any
  ): MapProxy<U, S>;

  filter(predicate: (value: V, key: K, map: Map<K, V>) => unknown, thisArg?: any): MapProxy<K, V>;

  toArray<R extends 'entries' | 'keys' | 'values'>(
    returnType?: R
  ): R extends 'entries' ? [K, V][] : R extends 'keys' ? K[] : V[];
  toObject(): Record<K, V>;

  groupBy<K extends string | number | symbol, T>(
    items: Iterable<T>,
    keySelector: (item: T, index: number) => K
  ): MapProxy<K, T[]>;
}

class MapProxyInstance<K extends string | number | symbol, V>
  extends Map<K, V>
  implements MapProxy<K, V>
{
  constructor(entries?: Map<K, V> | readonly (readonly [K, V])[] | null) {
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

  public map<U extends string | number | symbol, S>(
    callbackfn: (value: V, key: K, map: Map<K, V>) => [U, S],
    thisArg?: any
  ): MapProxy<U, S> {
    const result = new MapProxyInstance<U, S>();

    for (const [key, value] of this) {
      const [newKey, newValue] = callbackfn.call(thisArg, value, key, this);
      result.set(newKey, newValue);
    }

    return result;
  }

  public filter(
    predicate: (value: V, key: K, map: Map<K, V>) => unknown,
    thisArg?: any
  ): MapProxy<K, V> {
    const result = new MapProxyInstance<K, V>();

    for (const [key, value] of this) {
      if (predicate.call(thisArg, value, key, this)) {
        result.set(key, value);
      }
    }

    return result;
  }

  public groupBy<K extends string | number | symbol, T>(
    items: Iterable<T>,
    keySelector: (item: T, index: number) => K
  ): MapProxy<K, T[]> {
    const dictionary = new MapProxyInstance<K, T[]>();

    let index = 0;
    for (const item of items) {
      const key = keySelector(item, index);
      const group = dictionary.get(key) ?? [];
      group.push(item);
      dictionary.set(key, group);
      index++;
    }

    return dictionary;
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
    return new MapProxyInstance<string | number | symbol, T>(Object.entries(iterable));
  }
}

export default MapProxyInstance;
