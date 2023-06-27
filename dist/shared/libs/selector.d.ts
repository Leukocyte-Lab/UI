import type { ObjectLike } from '../../shared/types/object';
import type { Optional, Nullable, ValueOf } from '../../shared/types/optional';
export declare const selector: <T extends ObjectLike = ObjectLike>(datasets: Optional<T>, selector: Optional<string | number>) => Nullable<ObjectLike | ValueOf<T>>;
export type Selector = typeof selector;
