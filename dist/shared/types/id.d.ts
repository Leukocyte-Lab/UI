import type { HexUUID, UUID } from '@/shared/libs/uuid';
export type HasUUID<T> = T & {
    id: UUID;
};
export type HasHexUUID<T> = T & {
    id: HexUUID;
};
export type HasID<T> = T & {
    id: string;
};
