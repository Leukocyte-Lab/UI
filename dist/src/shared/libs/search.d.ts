import { type ComputedRef } from 'vue';
import { type MapProxy } from './map';
import type { Optional } from '../../shared/types/optional';
import type { ObjectLike } from '../../shared/types/object';
export declare const useSearch: <T extends ObjectLike = ObjectLike>(initialDatasets: Map<any, Optional<T>> | Optional<T>[], initialQuery: string, initialKeys: string[]) => {
    results: ComputedRef<Optional<T>[] | MapProxy<any, Optional<T>> | null>;
};
