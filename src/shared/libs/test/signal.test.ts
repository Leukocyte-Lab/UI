import { describe, expect, expectTypeOf, it } from 'vitest';

import type { ShallowRef } from 'vue';

import { computed, debug, signal, toggleSignal } from '@/shared/libs/signal';

describe('signal', () => {
  const onTrigger = signal(false);

  it('should be defined', () => {
    expect(onTrigger()).toBeDefined();
  });
  it('should preserve value', () => {
    expect(onTrigger()).toBe(false);
  });
  it('should set value', () => {
    onTrigger.set(true);
    expect(onTrigger()).toBe(true);
  });
  it('should update value', () => {
    onTrigger.update((value) => {
      expect(value).toBe(true);
      return !value;
    });
    expect(onTrigger()).toBe(false);
  });
})

describe('object signal', () => {
  const datasets = signal<Record<string, number>>({ 'one': 1, 'two': 2, 'three': 3 });

  it('should be defined', () => {
    expect(datasets()).toBeDefined();
  });
  it('should preserve value', () => {
    expect(datasets()).toEqual({ 'one': 1, 'two': 2, 'three': 3 });
  });
  it('should set value', () => {
    datasets.set({ 'four': 4, 'five': 5, 'six': 6 });
    expect(datasets()).toEqual({ 'four': 4, 'five': 5, 'six': 6 });
  });
  it('should update value', () => {
    datasets.update((value) => {
      expect(value).toEqual({ 'four': 4, 'five': 5, 'six': 6 });
      return { 'seven': 7, 'eight': 8, 'nine': 9 };
    });
    expect(datasets()).toEqual({ 'seven': 7, 'eight': 8, 'nine': 9 });
  });
  it('should mutate value (trigger ref)', () => {
    datasets.mutate((value) => {
      expect(value).toEqual({ 'seven': 7, 'eight': 8, 'nine': 9 });
      value['ten'] = 10;
      delete value['seven'];
    });
    expect(datasets()).toEqual({ 'eight': 8, 'nine': 9, 'ten': 10 });
  });
  it('should be shallow clone', () => {
    const value = datasets();
    datasets.mutate((value) => {
      value['eleven'] = 11;
    });
    expect(datasets()).toEqual(value);
  });
  it('should be readonly on returned instance', () => {
    const value = datasets();
    // @ts-expect-error - should not be able to mutate readonly object
    value['twelve'] = 12;
    expect(value).toEqual({ 'eight': 8, 'nine': 9, 'ten': 10, 'eleven': 11 });
    expect(datasets()).toEqual({ 'eight': 8, 'nine': 9, 'ten': 10, 'eleven': 11 });
  });
});

describe('collection signal', () => {
  const collection = signal<Record<string, number>[]>([{ 'one': 1 }, { 'two': 2 }, { 'three': 3 }]);

  it('should be defined', () => {
    expect(collection()).toBeDefined();
  });
  it('should preserve value', () => {
    expect(collection()).toEqual([{ 'one': 1 }, { 'two': 2 }, { 'three': 3 }]);
  });
  it('should set value (replace current)', () => {
    collection.set([{ 'four': 4 }, { 'five': 5 }, { 'six': 6 }]);
    expect(collection()).toEqual([{ 'four': 4 }, { 'five': 5 }, { 'six': 6 }])
  });
  it('should update value (replace current)', () => {
    collection.update((value) => {
      expect(value).toEqual([{ 'four': 4 }, { 'five': 5 }, { 'six': 6 }])
      return [{ 'seven': 7 }, { 'eight': 8 }, { 'nine': 9 }] as const;
    });
    expect(collection()).toEqual([{ 'seven': 7 }, { 'eight': 8 }, { 'nine': 9 }]);
  });
  it('should mutate value (trigger ref)', () => {
    collection.mutate((value) => {
      expect(value).toEqual([{ 'seven': 7 }, { 'eight': 8 }, { 'nine': 9 }]);
      value.push({ 'ten': 10 });
      value.shift();
    });
    expect(collection()).toEqual([{ 'eight': 8 }, { 'nine': 9 }, { 'ten': 10 }]);
  });
})

describe('map signal', () => {
  const map = signal(new Map([['one', 1], ['two', 2], ['three', 3]]));

  it('should be defined', () => {
    expect(map()).toBeDefined();
  });
  it('should preserve value', () => {
    expect(map()).toEqual(new Map([['one', 1], ['two', 2], ['three', 3]]));
  });
  it('should set value (replace current)', () => {
    map.set(new Map([['four', 4], ['five', 5], ['six', 6]]));
    expect(map()).toEqual(new Map([['four', 4], ['five', 5], ['six', 6]]));
  });
  it('should update value (replace current)', () => {
    map.update((value) => {
      expect(value).toEqual(new Map([['four', 4], ['five', 5], ['six', 6]]));
      return new Map([['seven', 7], ['eight', 8], ['nine', 9]]);
    });
    expect(map()).toEqual(new Map([['seven', 7], ['eight', 8], ['nine', 9]]));
  });
  it('should mutate value (trigger ref)', () => {
    map.mutate((value) => {
      expect(value).toEqual(new Map([['seven', 7], ['eight', 8], ['nine', 9]]));
      value.set('ten', 10);
    });
    expect(map()).toEqual(new Map([['seven', 7], ['eight', 8], ['nine', 9], ['ten', 10]]));
  });
})

describe('computed', () => {
  const onTrigger = signal(false);

  it('should keep reactivity', () => {
    const value = computed(() => onTrigger());
    expect(value()).toBe(false);
    onTrigger.set(true);
    expect(value()).toBe(true);
  });
})

describe('toggleSignal', () => {
  const onTrigger = signal(false);

  it('should toggle boolean signal', () => {
    expect(onTrigger()).toBe(false);
    toggleSignal(onTrigger);
    expect(onTrigger()).toBe(true);
  });
})

describe('debug', () => {
  const value = signal(false);

  it('should return ref', () => {
    expectTypeOf(debug(value)).toEqualTypeOf<ShallowRef<boolean>>();
  });
  it('should return ref value', () => {
    expect(debug(value).value).toBe(false);
    value.set(true);
    expect(debug(value).value).toBe(true);
  });
})
