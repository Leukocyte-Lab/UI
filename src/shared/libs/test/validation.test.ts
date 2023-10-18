import { promoteInvalidMessage, type InvalidMessage } from '../validation';
import { describe, expect, test } from 'vitest';

const testPromoteInvalidMessageWhenValidityIsValid = (validity: ValidityState) => {
  test('should return null when validity is valid', () => {
    const result = promoteInvalidMessage(validity);
    expect(result).toBeNull();
  });
};

const testPromoteInvalidMessageWhenValidityIsInValid = (validity: ValidityState) => {
  test('should return a custom error message when a specific validity flag is invalid', () => {
    const customMessages: Partial<InvalidMessage> = {
      valueMissing: 'This field is required.'
    };

    const result = promoteInvalidMessage(validity, customMessages);
    expect(result).toBe('This field is required.');
  });

  test('should return null when no custom message is provided for an invalid flag', () => {
    const result = promoteInvalidMessage(validity);
    expect(result).toBeNull();
  });
};

describe('promoteInvalidMessage function', () => {
  const validity = {
    badInput: false,
    customError: false,
    patternMismatch: false,
    rangeOverflow: false,
    rangeUnderflow: false,
    stepMismatch: false,
    tooLong: false,
    tooShort: false,
    typeMismatch: false,
    valid: true,
    valueMissing: false
  };
  testPromoteInvalidMessageWhenValidityIsValid(validity);
  testPromoteInvalidMessageWhenValidityIsInValid({ ...validity, valueMissing: true, valid: false });
});
