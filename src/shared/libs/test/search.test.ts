import { ref } from 'vue';
import { describe, expect, it } from 'vitest';
import { useSearch } from '../search';
import type { MapProxy, ObjectLike, Optional } from '@/shared';

const mockArrayData = [
  { id: 1, name: 'Alice', os: 'Windows' },
  { id: 2, name: 'Bob', os: 'Linux' },
  { id: 3, name: 'Charlie and Ben', os: 'macOS' }
];

const mockMapData = new Map([
  [1, { id: 1, name: 'Alice', os: 'Windows' }],
  [2, { id: 2, name: 'Bob', os: 'Linux' }],
  [3, { id: 3, name: 'Charlie', os: 'macOS' }]
]);

function compareMaps<K, V>(map1: Map<K, V>, map2: Map<K, V>) {
  if (map1.size !== map2.size) {
    return false;
  }

  for (const [key, value] of map1) {
    if (typeof value === 'object' && typeof map2.get(key) === 'object') {
      return JSON.stringify(value) === JSON.stringify(map2.get(key));
    }
    if (!map2.has(key) || map2.get(key) !== value) {
      return false;
    }
  }

  return true;
}

describe('useSearch', () => {
  it('should filter array data correctly', () => {
    const { results } = useSearch(mockArrayData, 'alice', ['name']);

    expect(results.value).toEqual([{ id: 1, name: 'Alice', os: 'Windows' }]);
  });

  it('should filter map data correctly', () => {
    const { results } = useSearch(mockMapData, 'linux', ['os']);

    const expected = new Map([[2, { id: 2, name: 'Bob', os: 'Linux' }]]);

    if (results.value) {
      expect(
        compareMaps(
          results.value as MapProxy<
            any,
            Optional<{
              id: number;
              name: string;
              os: string;
            }>
          >,
          expected
        )
      ).toBe(true);
    }
  });

  it('should perform phrase search correctly', () => {
    const { results } = useSearch(mockArrayData, 'charlie ben', ['name', 'os']);

    expect(results.value).toEqual([{ id: 3, name: 'Charlie and Ben', os: 'macOS' }]);
  });

  it('should return null if datasets or keys are empty', () => {
    const { results } = useSearch([], 'Alice', ['name']);
    expect(results.value).toBeNull();

    const { results: results2 } = useSearch(mockArrayData, 'Alice', []);
    expect(results2.value).toBeNull();
  });
});
