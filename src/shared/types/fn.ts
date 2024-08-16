export type GetterFn<T, Args extends unknown[] = unknown[], Nullable = false> = ((...args: Args) => T | (Nullable extends true ? (undefined | null) : never));
