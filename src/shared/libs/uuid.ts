import { v4 as UUIDv4 } from 'uuid';

export type UUID = string & {
  readonly _UUID: unique symbol;
};
export type HexUUID = string & {
  readonly _HexUUID?: unique symbol;
};

const UUIDValidator =
  /^[0-9a-f]{8}-[0-9a-f]{4}-[0-5][0-9a-f]{3}-[089ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
const HexUUIDValidator =
  /^[0-9a-f]{12}[0-5][0-9a-f]{3}[089ab][0-9a-f]{3}[0-9a-f]{12}$/i;

export const uuid: {
  (): UUID;
  (str: string, skipCheck?: boolean): UUID;
} = (str?: string, skipCheck?: boolean): UUID => {
  if (str) {
    if (UUIDValidator.test(str) || skipCheck) {
      return str as UUID;
    } else {
      throw new Error(`Invalid UUID format: ${str}`);
    }
  }
  return UUIDv4() as UUID;
};

export const NilUUID = uuid('00000000-0000-0000-0000-000000000000');

export function Hex2UUID(id: HexUUID, skipCheck = false): UUID {
  if (!skipCheck && !HexUUIDValidator.test(id)) {
    throw new Error(`Invalid HexUUID format: ${id}`);
  }

  return uuid(
    `${id.slice(0, 8)}-${id.slice(8, 12)}-${id.slice(12, 16)}-${id.slice(
      16,
      20
    )}-${id.slice(20, 32)}`,
    skipCheck
  );
}

export function UUID2Hex(id: UUID, skipCheck = false): HexUUID {
  return uuid(id, skipCheck).replace(/-/gm, '');
}

export default uuid;
