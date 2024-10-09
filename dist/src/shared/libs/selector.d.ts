import type { ObjectLike } from '../../shared/types/object';
import type { Nullable, Optional, ValueOf } from '../../shared/types/optional';
export declare const selector: <T extends ObjectLike = ObjectLike>(datasets: Optional<T>, selector: Optional<string | number>) => Nullable<ValueOf<T> | ObjectLike>;
export type Selector = typeof selector;
