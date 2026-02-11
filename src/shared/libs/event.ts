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
  let pendingEvent: E | undefined = undefined;
  let hasPending = false;

  const scheduleReset = () => {
    globalThis.clearTimeout(clickDebounceTimer);
    clickDebounceTimer = globalThis.setTimeout(() => {
      triggered.set(false);

      if (flush === 'post' || (flush === 'sync' && !syncWithDebounce)) {
        callback?.call({}, pendingEvent as E);
        pendingEvent = undefined;
        return;
      }

      if (flush === 'sync' && syncWithDebounce && hasPending) {
        const event = pendingEvent as E;
        pendingEvent = undefined;
        hasPending = false;
        callback?.call({}, event);

        // Start a new debounce window for subsequent events.
        triggered.set(true);
        scheduleReset();
      }
    }, debounce);
  };

  const onTrigger = (event: E) => {
    if (!triggered() && flush === 'pre') {
      callback?.call({}, event);
    } else if (flush === 'sync') {
      if (syncWithDebounce) {
        if (!triggered()) {
          callback?.call({}, event);
        } else {
          pendingEvent = event;
          hasPending = true;
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
      pendingEvent = event;
      scheduleReset();
    }
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
