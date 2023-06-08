import { shallowRef, triggerRef, computed as _computed } from 'vue';

import type { ComputedGetter } from 'vue';

export type Signal<T> = {
  (): T;
  set: (value: T) => void;
  update: (updater: (value: T) => T) => void;
  mutate: (mutator: (value: T) => void) => void;
}

export const signal = <T extends any>(initialValue: T): Signal<T> => {
  const $ref = shallowRef<T>(initialValue);
  const state = () => $ref.value;

  state.set = (value: T) => {
    $ref.value = value;
  };
  state.update = (updater: (value: T) => T) => {
    $ref.value = updater($ref.value);
  };
  state.mutate = (mutator: (value: T) => void) => {
    mutator($ref.value);
    triggerRef($ref);
  };

  return state;
};

export const computed = <T>(getter: ComputedGetter<T>): (() => T) => {
  const state = _computed(getter);

  return () => state.value;
};
