import { diceCoefficient } from 'dice-coefficient';
import { isUndefined, omitBy } from 'lodash-es';
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
    limit?: number;
    sortBy?: 'relevance' | 'default' | 'remain';
  } & (
    | {
        phraseSearch?: false;
        strict?: never;
        segmentPattern?: never;
      }
    | {
        phraseSearch?: true;
        strict?: boolean;
        segmentPattern?: RegExp;
      }
  ) &
    (
      | {
          relevanceSearch?: false;
          relevancePolicy?: never;
          threshold?: never;
        }
      | {
          relevanceSearch: true;
          relevancePolicy?: 'average' | 'max' | 'min' | number[];
          threshold?: number;
        }
    );

  export type BaseExpose = {
    query: Ref<string>;
    reset: Callback;
    search: (value: string) => boolean | number;
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
    phraseSearch: false,
    relevanceSearch: false,
    relevancePolicy: 'max' as const,
    threshold:
      Math.min(...[toValue(options)?.relevancePolicy ?? '0'].flat().filter(Boolean).map(Number)) ||
      0.5,
    sortBy: 'default',
    limit: Infinity,
    strict: false,
    segmentPattern: /-|_|\t|\v|\r|\\/gm,
    ...(omitBy(toValue(options), isUndefined) as Search.Options)
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
              .map((value) => search(value)),
            relevance: values
              .filter((value) => value !== null && value !== undefined)
              .map((value) => diceCoefficient(value, $query.value))
              .reduce((acc, curr) => (acc + curr >= $options.value.threshold ? curr : 0), 0)
          }
        ])
        .filter(({ matched }) => $options.value.relevanceSearch || matched.some(Boolean))
        .map(({ data, matched, relevance }, key) => [
          key,
          {
            data,
            weight: $options.value.relevanceSearch
              ? typeof $options.value.relevancePolicy === 'string'
                ? $options.value.relevancePolicy === 'average'
                  ? matched.map(Number).reduce((acc, curr) => acc + curr, 0) /
                    Math.max(matched.length, 1)
                  : Math[$options.value.relevancePolicy](...matched.map(Number))
                : matched
                    .map(Number)
                    .reduce(
                      (acc, curr, index) =>
                        acc + curr * (($options.value.relevancePolicy as number[])[index] ?? 0),
                      0
                    )
              : matched.map(Number).join(''),
            relevance
          }
        ])
        .filter(({ weight }) =>
          $options.value.relevanceSearch ? (Number(weight) || 0) >= $options.value.threshold : true
        );

      const result = (
        $options.value.sortBy === 'remain'
          ? Array.from(res)
          : $options.value.sortBy === 'relevance'
            ? Array.from(res).sort(([, a], [, b]) => b.relevance - a.relevance)
            : Array.from(res).sort(([, a], [, b]) =>
                typeof b.weight === 'number'
                  ? b.weight - (Number(a.weight) || 0)
                  : b.weight.localeCompare(String(a.weight))
              )
      ).filter((_, index) => index < $options.value.limit);

      return Array.isArray($datasets.value)
        ? result.map(([, { data }]) => data)
        : (new Map(result.map(([key, { data }]) => [key, data])) as Map<K, T>);
    }
  });

  const handleCase = (value: string) =>
    ($options.value?.caseSensitive ? value : value.toLocaleLowerCase()).trim();

  const search = (value: string): boolean | number => {
    if ($options.value.phraseSearch) {
      const queryPhrases = handleCase($query.value).split(' ');
      const valuePhrases = [
        handleCase(value),
        ...handleCase(value).replace($options.value.segmentPattern, ' ').split(' ')
      ];

      return queryPhrases[$options.value.strict ? 'every' : 'some']((phrase) =>
        valuePhrases.some((v) => v.includes(phrase))
      );
    } else if ($options.value.relevanceSearch) {
      return diceCoefficient(value, $query.value);
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
