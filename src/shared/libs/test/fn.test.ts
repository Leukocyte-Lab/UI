import { describe, expect, expectTypeOf, it } from 'vitest';

import { valuesGetter } from '@/shared/libs/fn';

describe('fn::valuesGetter', () => {
  it('should handle simple getter on object', () => {
    const options = { 'one': 1, 'two': 2, 'three': 3 };
    const getter = 'one';
    expect(valuesGetter(options, getter)).toBe('1');
  });

  it('should handle non-object type', () => {
    const options = 'one';
    const getter = 'one';
    expect(valuesGetter(options, getter)).toBe('one');

    const options2 = 1;
    const getter2 = 'one';
    expect(valuesGetter(options2, getter2)).toBe('1');
  });

  it('should handle lodash-styled query getter', () => {
    const options = { 'one': { 'two': [2] } };
    const getter = 'one.two[0]';
    expect(valuesGetter(options, getter)).toBe('2');
  });

  it('should handle JSONPath-styed getter', () => {
    const options = { 'one': { 'two': [2] } };
    const getter = '$.one.two[0]';
    expect(valuesGetter(options, getter)).toBe('2');
  });

  it('should handle DI function getter', () => {
    const options = { 'one': 1, 'two': 2, 'three': 3 };
    const getter = (options: Record<string, number>) => options['one'];
    expect(getter(options)).toBe(1);
  });
});
