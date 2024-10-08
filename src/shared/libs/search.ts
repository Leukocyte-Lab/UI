import { computed, toRef, toValue } from 'vue';

import type { ComputedRef, MaybeRef, Ref } from 'vue';

import { valuesGetter } from '@/shared/libs/fn';
import Map$ from '@/shared/libs/map';

import type { Callback } from '@/shared/types/callback';
import type { GetterFn } from '@/shared/types/fn';
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
        phraseSearch?: true;
        strict?: boolean;
        segmentPattern?: RegExp;
      }
  );

  export type BaseExpose = {
    query: Ref<string>;
    reset: Callback;
    search: (value: string) => boolean;
  };
}

function useSearch<T extends string | number>(
  datasets: MaybeRef<T[]>,
  args?: {
    getters?: never;
    query?: MaybeRef<string>;
    options?: MaybeRef<Search.Options>;
  }
): {
  result: ComputedRef<T[]>;
} & Search.BaseExpose;
function useSearch<T extends string | number, K extends string | number | symbol>(
  datasets: MaybeRef<Map<K, T>>,
  args?: {
    getters?: never;
    query?: MaybeRef<string>;
    options?: MaybeRef<Search.Options>;
  }
): {
  result: ComputedRef<Map<K, T>>;
} & Search.BaseExpose;
function useSearch<T extends ObjectLike>(
  datasets: MaybeRef<T[]>,
  args: {
    getters: MaybeRef<Search.ValuesGetter<T, string>[]>;
    query?: MaybeRef<string>;
    options?: MaybeRef<Search.Options>;
  }
): {
  result: ComputedRef<T[]>;
} & Search.BaseExpose;
function useSearch<T extends ObjectLike, K extends string | number | symbol>(
  datasets: MaybeRef<Map<K, T>>,
  args: {
    getters: MaybeRef<Search.ValuesGetter<T, string>[]>;
    query?: MaybeRef<string>;
    options?: MaybeRef<Search.Options>;
  }
): {
  result: ComputedRef<Map<K, T>>;
} & Search.BaseExpose;
function useSearch<T extends Search.AcceptableValue, K extends string | number | symbol>(
  datasets: MaybeRef<T[]>,
  args?: {
    query?: MaybeRef<string>;
    getters?: MaybeRef<Search.ValuesGetter<T, string>[]>;
    options?: MaybeRef<Search.Options>;
  }
): {
  result: ComputedRef<T[]>;
} & Search.BaseExpose;
function useSearch<T extends Search.AcceptableValue, K extends string | number | symbol>(
  datasets: MaybeRef<Map<K, T>>,
  args?: {
    query?: MaybeRef<string>;
    getters?: MaybeRef<Search.ValuesGetter<T, string>[]>;
    options?: MaybeRef<Search.Options>;
  }
): {
  result: ComputedRef<Map<K, T>>;
} & Search.BaseExpose;
function useSearch<T extends Search.AcceptableValue, K extends string | number | symbol>(
  datasets: MaybeRef<T[]> | MaybeRef<Map<K, T>>,
  {
    query,
    getters,
    options
  }: {
    query?: MaybeRef<string>;
    getters?: MaybeRef<Search.ValuesGetter<T, string>[]>;
    options?: MaybeRef<Search.Options>;
  } = {}
): {
  result: ComputedRef<T[] | Map<K, T>>;
} & Search.BaseExpose {
  const $query = toRef(query || '');
  const $datasets = computed(() => toValue(datasets) ?? []);
  const $getters = computed(() => toValue(getters) ?? ['']);
  const $options = computed(() => ({
    caseSensitive: false,
    phraseSearch: true,
    strict: false,
    segmentPattern: /-|_|\t|\v|\r|\\/gm,
    ...toValue(options)
  }));

  const result = computed(() => {
    if (!$query.value) {
      return $datasets.value;
    } else {
      const res = (
        Array.isArray($datasets.value)
          ? new Map$($datasets.value.map((data, index) => [index, data]))
          : new Map$($datasets.value)
      )
        .map((data, key) => [
          key,
          {
            data,
            values: $getters.value.map((getter) => valuesGetter(data, getter, true))
          }
        ])
        .map(({ data, values }, key) => [
          key,
          {
            data,
            matched: values
              .filter((value) => value !== null && value !== undefined)
              .map((value) => search(value))
          }
        ])
        .filter(({ matched }) => matched.some(Boolean))
        .map(({ data, matched }, key) => [
          key,
          {
            data,
            weight: matched.map(Number).join('')
          }
        ]);

      const sorted = Array.from(res).sort(([, a], [, b]) => b.weight.localeCompare(a.weight));

      return Array.isArray($datasets.value)
        ? sorted.map(([, { data }]) => data)
        : (new Map(sorted.map(([key, { data }]) => [key, data])) as Map<K, T>);
    }
  });

  const handleCase = (value: string) =>
    ($options.value?.caseSensitive ? value : value.toLocaleLowerCase()).trim();

  const search = (value: string) => {
    const queryPhrases = handleCase($query.value).split(' ');

    if ($options.value.phraseSearch) {
      const valuePhrases = [
        handleCase(value),
        ...handleCase(value).replace($options.value.segmentPattern, ' ').split(' ')
      ];

      return queryPhrases[$options.value.strict ? 'every' : 'some']((phrase) =>
        valuePhrases.some((v) => v.includes(phrase))
      );
    } else {
      return handleCase(value).includes(handleCase($query.value));
    }
  };

  const reset = () => {
    $query.value = '';
  };

  return {
    query: $query,
    result,
    reset,
    search
  };
}

export { useSearch };
