import type { ObjectLike } from '@/shared/types/object';
export declare const exist: <T extends ObjectLike>(datasets: T, keys: string) => boolean;
export type Exist = typeof exist;
