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
  const triggered = signal(false);
  let clickDebounceTimer: ReturnType<typeof setTimeout> | undefined = undefined;

  const onTrigger = (event: E) => {
    if (!triggered() && flush === 'pre') {
      callback?.call({}, event);
    } else if (flush === 'sync') {
      if (syncWithDebounce) {
        if (!triggered()) {
          callback?.call({}, event);
        } else {
          return;
        }
      } else {
        callback?.call({}, event);
        return;
      }
    } else {
      event.preventDefault();
      event.stopPropagation();
    }

    if (flush !== 'sync' || syncWithDebounce) {
      triggered.set(true);

      if (flush === 'sync' ? syncWithDebounce && !triggered() : true) {
        globalThis.clearTimeout(clickDebounceTimer);
      }
    }

    clickDebounceTimer = globalThis.setTimeout(() => {
      triggered.set(false);

      if (flush === 'post' || flush === 'sync') {
        callback?.call({}, event);
      }
    }, debounce);
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

  const onTrigger = (...args: T) => {
    if (!triggered() && flush === 'pre') {
      callback?.call({}, ...args);
    } else if (flush === 'sync') {
      if (syncWithDebounce) {
        if (!triggered()) {
          callback?.call({}, ...args);
        } else {
          return;
        }
      } else {
        callback?.call({}, ...args);
        return;
      }
    }

    if (flush !== 'sync' || syncWithDebounce) {
      triggered.set(true);
      globalThis.clearTimeout(clickDebounceTimer);
    }

    clickDebounceTimer = globalThis.setTimeout(() => {
      triggered.set(false);

      if (flush === 'post' || flush === 'sync') {
        callback?.call({}, ...args);
      }
    }, debounce);
  };

  return {
    triggered,
    onTrigger
  };
};
