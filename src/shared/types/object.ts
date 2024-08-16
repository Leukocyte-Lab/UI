export type ObjectLike<T = unknown> = Record<string, T>;

export type IterableObjectLike<T = unknown> = Record<string | number | symbol, T>;

export type EmptyObject = ObjectLike<never>;
