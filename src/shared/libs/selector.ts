import { JSONPath } from 'jsonpath-plus';
import { get, isEmpty } from 'lodash-es';

import type { ObjectLike } from '@/shared/types/object';
import type { Nullable, Optional, ValueOf } from '@/shared/types/optional';

export const selector = <T extends ObjectLike = ObjectLike>(
  datasets: Optional<T>,
  selector: Optional<string | number>
): Nullable<ValueOf<T> | ObjectLike> =>
  isEmpty(datasets) || isEmpty(selector)
    ? null
    : (typeof selector === 'string' && /^\$\./.test(selector)
        ? JSONPath({
            path: selector,
            json: datasets as unknown as any[]
          })
        : get(datasets, selector!)) ?? null;

export type Selector = typeof selector;
