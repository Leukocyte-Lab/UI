import type { EventCallback } from '@/shared/types/callback';

import { signal } from '@/shared/libs/signal';

export const useClickSignal = (callback?: EventCallback<MouseEvent>, debounce: number = 300) => {
  const clicked = signal(false);
  let clickDebounceTimer: ReturnType<typeof setTimeout> | undefined = undefined;

  const onClick = (event: MouseEvent) => {
    if (!clicked()) {
      callback?.call({}, event);
    }

    clicked.set(true);
    globalThis.clearTimeout(clickDebounceTimer);

    clickDebounceTimer = globalThis.setTimeout(() => {
      clicked.set(false);
    }, debounce);
  };

  return {
    clicked,
    onClick
  };
};
