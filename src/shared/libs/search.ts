import { computed, ref, type ComputedRef, type Ref } from 'vue';
import { isEmpty } from 'lodash-es';

import { selector } from './selector';
import MapProxyInstance, { type MapProxy } from './map';

import type { Nullable, Optional, ValueOf } from '@/shared/types/optional';
import type { ObjectLike } from '@/shared/types/object';

export const useSearch = <T extends ObjectLike = ObjectLike>(
  initialDatasets: Optional<T>[] | Map<any, Optional<T>>,
  initialQuery: string,
  initialKeys: string[]
) => {
  const datasets = ref(initialDatasets) as Ref<Optional<T>[]> | Ref<Map<any, Optional<T>>>;
  const query = ref<string>(initialQuery);
  const keys = ref<string[]>(initialKeys);

  const handlePhraseSearch = (value: string) => {
    const phrases = query.value.toLocaleLowerCase().split(' ');
    return phrases.every((phrase) => value.includes(phrase));
  };

  const results = computed(() => {
    if (isEmpty(datasets.value) || isEmpty(keys.value)) {
      return null;
    }

    if (datasets.value instanceof Map) {
      const proxyData = new MapProxyInstance(datasets.value);

      return proxyData.filter((data) =>
        keys.value.some((key) =>
          handlePhraseSearch(String(selector<T>(data, key)).toLocaleLowerCase())
        )
      );
    } else {
      return datasets.value.filter((data) =>
        keys.value.some((key) =>
          handlePhraseSearch(String(selector<T>(data, key)).toLocaleLowerCase())
        )
      );
    }
  });

  return {
    results
  };
};
