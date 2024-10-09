export type ObjectLike<T = any> = Record<string, T>;
export type IterableObjectLike<T = any> = Record<string | number | symbol, T>;
export type EmptyObject = ObjectLike<never>;
