import type { WatchOptionsBase } from 'vue';

import { signal } from '@/shared/libs/signal';

import type { Callback, EventCallback } from '@/shared/types/callback';

export type EventSignalOptions = {
  debounce?: number;
  flush?: WatchOptionsBase['flush'];
  syncWithDebounce?: boolean;
};

export const useEventDebounceSignal = <E extends Event>(
  callback?: EventCallback<E>,
  { debounce = 300, flush = 'pre', syncWithDebounce }: EventSignalOptions = {}
) => {
  const { triggered, onTrigger: trigger } = useDebounceSignal<[E]>(
    (event) => {
      callback?.call({}, event);
    },
    { debounce, flush, syncWithDebounce }
  );

  const onTrigger = (event: E) => {
    if (flush === 'post') {
      event.preventDefault();
      event.stopPropagation();
    }

    trigger(event);
  };

  return {
    triggered,
    onTrigger
  };
};

export const useDebounceSignal = <T extends unknown[]>(
  callback?: Callback<T>,
  { debounce = 300, flush = 'pre', syncWithDebounce }: EventSignalOptions = {}
) => {
  const triggered = signal(false);
  let clickDebounceTimer: ReturnType<typeof setTimeout> | undefined = undefined;
  let pendingArgs: T | undefined = undefined;
  let hasPending = false;

  const scheduleReset = () => {
    globalThis.clearTimeout(clickDebounceTimer);
    clickDebounceTimer = globalThis.setTimeout(() => {
      triggered.set(false);

      if (flush === 'post' || (flush === 'sync' && !syncWithDebounce)) {
        callback?.call({}, ...(pendingArgs as T));
        pendingArgs = undefined;
        return;
      }

      if (flush === 'sync' && syncWithDebounce && hasPending) {
        const args = pendingArgs as T;
        pendingArgs = undefined;
        hasPending = false;
        callback?.call({}, ...args);

        // Start a new debounce window for subsequent events.
        triggered.set(true);
        scheduleReset();
      }
    }, debounce);
  };

  const onTrigger = (...args: T) => {
    if (!triggered() && flush === 'pre') {
      callback?.call({}, ...args);
    } else if (flush === 'sync') {
      if (syncWithDebounce) {
        if (!triggered()) {
          callback?.call({}, ...args);
        } else {
          pendingArgs = args;
          hasPending = true;
          return;
        }
      } else {
        callback?.call({}, ...args);
        return;
      }
    }

    if (flush !== 'sync' || syncWithDebounce) {
      triggered.set(true);
      pendingArgs = args;
      scheduleReset();
    }
  };

  return {
    triggered,
    onTrigger
  };
};
