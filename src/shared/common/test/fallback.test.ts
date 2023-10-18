import { describe, expect, test } from 'vitest';
import { useFallback } from '../fallback';

const testFallback = () => {
  test('should return the value if it is not undefined or null', () => {
    expect(useFallback('Hello', 'Fallback')).toBe('Hello');
    expect(useFallback(42, 0)).toBe(42);
  });

  test('should return the fallback value if the value is undefined or null', () => {
    expect(useFallback(undefined, 'Fallback')).toBe('Fallback');
    expect(useFallback(null, 0)).toBe(0);
  });
};

describe('fallback.ts', () => {
  testFallback();
});
