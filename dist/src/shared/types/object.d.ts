export type ObjectLike<T = any> = Record<string, T>;
export type Dictionary<T = any> = ObjectLike<T>;
export type IterableObjectLike<T = any> = Record<string | number | symbol, T>;
