import { computed, toRef, toValue } from 'vue';

import type { ComputedRef, MaybeRef, Ref } from 'vue';

import { valuesGetter } from '@/shared/libs/fn';
import Map$ from '@/shared/libs/map';

import type { Callback } from '@/shared/types/callback';
import type { GetterFn } from '@/shared/types/fn';
import type { Dictionary } from '@/shared/types/map';
import type { ObjectLike } from '@/shared/types/object';

export namespace Search {
  export type AcceptableValue = ObjectLike | string | number;

  export type ValuesGetter<T extends AcceptableValue, R> = GetterFn<R, [T], true> | string;

  export type Options = {
    caseSensitive?: boolean;
  } & (
    | {
        phraseSearch?: false;
        strict?: never;
      }
    | {
        phraseSearch: true;
        strict?: boolean;
      }
  );

  export type BaseExpose = {
    reset: Callback;
    search: (value: string) => boolean;
  };
}

function useSearch<T extends string | number>(args: {
  datasets?: MaybeRef<T[]>;
  initQuery?: MaybeRef<string>;
  getters?: never;
  options?: Search.Options;
}): {
  query: Ref<string>;
  result: ComputedRef<T[]>;
} & Search.BaseExpose;
function useSearch<T extends string | number>(args: {
  datasets?: MaybeRef<Map<unknown, T>>;
  initQuery?: MaybeRef<string>;
  getters?: never;
  options?: Search.Options;
}): {
  query: Ref<string>;
  result: ComputedRef<Map<unknown, T>>;
} & Search.BaseExpose;
function useSearch<T extends ObjectLike>(args: {
  datasets?: MaybeRef<T[]>;
  initQuery?: MaybeRef<string>;
  getters?: Search.ValuesGetter<T, string>[];
  options?: Search.Options;
}): {
  query: Ref<string>;
  result: ComputedRef<T[]>;
} & Search.BaseExpose;
function useSearch<T extends ObjectLike>(args: {
  datasets?: MaybeRef<Dictionary<T, keyof T>>;
  initQuery?: MaybeRef<string>;
  getters?: Search.ValuesGetter<T, string>[];
  options?: Search.Options;
}): {
  query: Ref<string>;
  result: ComputedRef<Dictionary<T, keyof T>>;
} & Search.BaseExpose;
function useSearch<T extends Search.AcceptableValue>({
  datasets,
  initQuery,
  getters,
  options = {
    caseSensitive: false,
    phraseSearch: true,
    strict: false
  }
}: {
  datasets?: MaybeRef<T[]> | MaybeRef<Dictionary<T, keyof T>>;
  initQuery?: MaybeRef<string>;
  getters?: Search.ValuesGetter<T, string>[];
  options?: Search.Options;
}): {
  query: Ref<string>;
  result: ComputedRef<T[] | Dictionary<T, keyof T>>;
} & Search.BaseExpose {
  const query = toRef(initQuery || '');
  const data = computed(() => toValue(datasets) ?? []);

  const result = computed(() => {
    if (!query.value) {
      return data.value;
    } else {
      const res = (
        Array.isArray(data.value)
          ? new Map$(data.value.map((payload, index) => [index, payload]))
          : new Map$(data.value)
      )
        .map((payload, key) => [
          key,
          {
            payload,
            values: (getters ?? ['']).map((getter) => valuesGetter(payload, getter, true))
          }
        ])
        .map(({ payload, values }, key) => [
          key,
          {
            payload,
            matched: values
              .filter((value) => value !== null && value !== undefined)
              .map((value) => search(value))
          }
        ])
        .filter(({ matched }) => matched.some(Boolean))
        .map(({ payload, matched }, key) => [
          key,
          {
            payload,
            weight: matched.map(Number).join('')
          }
        ]);

      const sorted = Array.from(res).sort(([, a], [, b]) => b.weight.localeCompare(a.weight));

      return Array.isArray(data.value)
        ? sorted.map(([, { payload }]) => payload)
        : new Map(sorted.map(([key, { payload }]) => [key, payload])) as Dictionary<T, keyof T>;
    }
  });

  const handleCase = (value: string) =>
    (options?.caseSensitive ? value : value.toLocaleLowerCase()).trim();

  const search = (value: string) => {
    if (options.phraseSearch) {
      const queryPhrases = handleCase(query.value).split(' ');
      const valuePhrases = handleCase(value)
        .replace(/-|_|\b|\t|\v|\r|\\/gm, ' ')
        .split(' ');

      return queryPhrases[options.strict ? 'every' : 'some']((phrase) =>
        valuePhrases.includes(phrase)
      );
    } else {
      return value.includes(query.value);
    }
  };

  const reset = () => {
    query.value = '';
  };

  return {
    query,
    result,
    reset,
    search
  };
}

export { useSearch };
