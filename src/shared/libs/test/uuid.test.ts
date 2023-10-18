import {
  uuid,
  Hex2UUID,
  UUID2Hex,
  NilUUID,
  HexUUIDValidator,
  UUIDValidator,
  type UUID,
  type HexUUID
} from '../uuid';
import { describe, expect, test } from 'vitest';

const testUUID = (UUID: UUID) => {
  test('should generate a valid UUID', () => {
    expect(UUID).toMatch(UUIDValidator);
  });
};

const testHex2UUID = (HexUUID: HexUUID) => {
  test('should convert a valid HexUUID to UUID', () => {
    const convertedUUID = Hex2UUID(HexUUID);
    expect(convertedUUID).toMatch(UUIDValidator);
  });
};

const testUUID2Hex = (UUID: UUID) => {
  test('should convert a UUID to HexUUID', () => {
    const convertedHexUUID = UUID2Hex(UUID);
    expect(convertedHexUUID).toMatch(HexUUIDValidator);
  });
};

const testNilUUID = () => {
  test('should validate NilUUID', () => {
    expect(() => {
      uuid(NilUUID);
    }).not.toThrow();
  });
};

const testErrorUUID = () => {
  test('should throw an error on invalid UUID', () => {
    const invalidUUID = 'invalid-uuid';
    expect(() => {
      uuid(invalidUUID);
    }).toThrow('Invalid UUID format');
  });
  test('should throw an error on invalid HexUUID', () => {
    const invalidHexUUID = 'invalid-hex-uuid';
    expect(() => {
      Hex2UUID(invalidHexUUID);
    }).toThrow('Invalid HexUUID format');
  });
};
describe('uuid.ts', () => {
  const UUID = uuid();
  const HexUUID = UUID.replace(/-/gm, '');
  testUUID(UUID);
  testHex2UUID(HexUUID);
  testUUID2Hex(UUID);
  testNilUUID();
  testErrorUUID();
});
