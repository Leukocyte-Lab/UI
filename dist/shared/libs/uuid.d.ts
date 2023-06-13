import { v4 as UUIDv4 } from 'uuid';
export type UUID = ReturnType<typeof UUIDv4> & {
    readonly _UUID: unique symbol;
};
export type HexUUID = ReturnType<typeof UUIDv4> & {
    readonly _HexUUID?: unique symbol;
};
export declare const uuid: {
    (): UUID;
    (str: string, skipCheck?: boolean): UUID;
};
export declare const NilUUID: UUID;
export declare function Hex2UUID(id: HexUUID, skipCheck?: boolean): UUID;
export declare function UUID2Hex(id: UUID, skipCheck?: boolean): HexUUID;
export default uuid;
