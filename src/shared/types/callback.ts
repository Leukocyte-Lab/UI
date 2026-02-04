export type Callback<Args extends unknown[] = unknown[], T = unknown> = (
  ...args: Args
) => T;

export type EventCallback<E extends Event> = (
  event: E
) => void;

export type PromiseCallback<Args extends unknown[] = unknown[], T = unknown> = (
  ...args: Args
) => Promise<T>;
