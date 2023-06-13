import type { ObjectLike } from '@/shared/types/object';
import type { Optional } from '@/shared/types/optional';
export declare const templateRegExp: RegExp;
export declare const parser: <T extends ObjectLike = ObjectLike>(datasets: Optional<T>, str: string) => any;
export type Parser = typeof parser;
