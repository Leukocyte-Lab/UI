import String$ from '../string';
import { describe, expect, test } from 'vitest';

const testKebabCase = () => {
  test('toKebabCase should convert to kebab case', () => {
    expect(String$.toKebabCase('myStringCase')).toBe('my-string-case');
  });
};

const testUpperCase = () => {
  test('toUpperCase should convert string to upper case', () => {
    expect(String$.toUpperCase('hello world')).toBe('HELLO WORLD');
  });

  test('toUpperCase should handle different modes', () => {
    expect(String$.toUpperCase('hello world', 'every')).toBe('HELLO WORLD');
    expect(String$.toUpperCase('hello world', 'eachFirst')).toBe('Hello World');
    expect(String$.toUpperCase('hello world', 'onlyFirst')).toBe('Hello world');
  });
};

const testHumanizeByte = () => {
  test('humanizeByte should convert bytes to human-readable format', () => {
    expect(String$.humanizeByte(1024)).toBe('1.00 KB');
    expect(String$.humanizeByte(2048, 1000)).toBe('2.05 KB');
    expect(String$.humanizeByte(1024 * 1024)).toBe('1.00 MB');
  });
};

describe('string.ts', () => {
  testKebabCase();
  testUpperCase();
  testHumanizeByte();
});
