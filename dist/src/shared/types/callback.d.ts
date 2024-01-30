export type Callback<Args extends any[] = any[], T = any> = (...args: Args) => T;
export type EventCallback<E extends Event> = (event: E) => void;
export type PromiseCallback<Args extends any[] = any[], T = any> = (...args: Args) => Promise<T>;
