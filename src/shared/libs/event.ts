import type { WatchOptionsBase } from 'vue';

import { signal } from '@/shared/libs/signal';

import type { EventCallback } from '@/shared/types/callback';

export type EventSignalOptions = {
  debounce?: number;
  flush?: WatchOptionsBase['flush'];
}

export const useEventDebounceSignal = <E extends Event>(
  callback?: EventCallback<E>,
  { debounce = 300, flush = 'pre' }: EventSignalOptions = {}
) => {
  const triggered = signal(false);
  let clickDebounceTimer: ReturnType<typeof setTimeout> | undefined = undefined;

  const onTrigger = (event: E) => {
    if (!triggered() && flush === 'pre' || flush === 'sync') {
      callback?.call({}, event);
    } else {
      event.preventDefault();
      event.stopPropagation();
    }

    triggered.set(true);
    globalThis.clearTimeout(clickDebounceTimer);

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
