import { describe, expect, expectTypeOf, it } from 'vitest';
import { ref } from 'vue';

import type { Ref } from 'vue';

import { useSearch } from '@/shared/libs/search';

const simpleArrayData = [
  'An apple a day keeps the doctor away',
  'An Apple a day keeps the BSOD away',
  'A Windows a day keeps Steve Jobs away',
  'A Windows a day keeps SRE away',
  'A Linux a day keeps system crashes away',
  'A NeXT a day keeps Steve away'
];

const simpleMapData = new Map([
  ['66b099fa-ed0d-474d-94fd-8df0173abbfc', 'An apple a day keeps the doctor away'],
  ['2721265e-98c2-4738-9d70-5c9f099b0e94', 'An Apple a day keeps the BSOD away'],
  ['dd6f9ffb-604f-4242-8f85-da5b5ea342a8', 'A Windows a day keeps Steve Jobs away'],
  ['d4c4f0a2-3d5b-4b7f-8c4f-5d5e0f6b6d4b', 'A Windows a day keeps SRE away'],
  ['c7b6e3f7-3a6a-4b2e-8a6b-5a6e3f7a6b2e', 'A Linux a day keeps system crashes away']
]);

const complexArrayData = [
  {
    id: '66b099fa-ed0d-474d-94fd-8df0173abbfc',
    message: 'An apple a day keeps the doctor away',
    speaker: {
      name: 'Alice',
      year: 2021
    }
  },
  {
    id: '2721265e-98c2-4738-9d70-5c9f099b0e94',
    message: 'An Apple a day keeps the BSOD away',
    speaker: { name: 'Bob', year: 2022 }
  },
  {
    id: 'dd6f9ffb-604f-4242-8f85-da5b5ea342a8',
    message: 'A Windows a day keeps Steve Jobs away',
    speaker: { name: 'Charlie', year: 2021 }
  },
  {
    id: 'd4c4f0a2-3d5b-4b7f-8c4f-5d5e0f6b6d4b',
    message: 'A Windows a day keeps SRE away',
    speaker: { name: 'Steve Jobs never says', year: 2024 }
  },
  {
    id: 'c7b6e3f7-3a6a-4b2e-8a6b-5a6e3f7a6b2e',
    message: 'A Linux a day keeps system crashes away',
    speaker: { name: 'Steve', year: 2021 }
  }
];

const complexMapData = new Map([
  [
    '66b099fa-ed0d-474d-94fd-8df0173abbfc',
    {
      id: '66b099fa-ed0d-474d-94fd-8df0173abbfc',
      message: 'An apple a day keeps the doctor away',
      speaker: {
        name: 'Alice',
        year: 2021
      }
    }
  ],
  [
    '2721265e-98c2-4738-9d70-5c9f099b0e94',
    {
      id: '2721265e-98c2-4738-9d70-5c9f099b0e94',
      message: 'An Apple a day keeps the BSOD away',
      speaker: { name: 'Bob', year: 2022 }
    }
  ],
  [
    'dd6f9ffb-604f-4242-8f85-da5b5ea342a8',
    {
      id: 'dd6f9ffb-604f-4242-8f85-da5b5ea342a8',
      message: 'A Windows a day keeps Steve Jobs away',
      speaker: { name: 'Charlie', year: 2021 }
    }
  ],
  [
    'd4c4f0a2-3d5b-4b7f-8c4f-5d5e0f6b6d4b',
    {
      id: 'd4c4f0a2-3d5b-4b7f-8c4f-5d5e0f6b6d4b',
      message: 'A Windows a day keeps SRE away',
      speaker: { name: 'Steve Jobs never says', year: 2024 }
    }
  ],
  [
    'c7b6e3f7-3a6a-4b2e-8a6b-5a6e3f7a6b2e',
    {
      id: 'c7b6e3f7-3a6a-4b2e-8a6b-5a6e3f7a6b2e',
      message: 'A Linux a day keeps system crashes away',
      speaker: { name: 'Steve', year: 2021 }
    }
  ]
]);

describe('useSearch with simple array data', () => {
  it('should search correctly', () => {
    const { result } = useSearch(structuredClone(simpleArrayData), {
      query: 'Apple',
      options: {
        phraseSearch: false
      }
    });

    expect(result.value).toEqual([
      'An apple a day keeps the doctor away',
      'An Apple a day keeps the BSOD away'
    ]);
    expectTypeOf(result.value).toEqualTypeOf<typeof simpleArrayData>();
  });

  it('should search correctly with case sensitive', () => {
    const { result } = useSearch(structuredClone(simpleArrayData), {
      query: 'Apple',
      options: { caseSensitive: true }
    });

    expect(result.value).toEqual(['An Apple a day keeps the BSOD away']);
    expectTypeOf(result.value).toEqualTypeOf<typeof simpleArrayData>();
  });

  it('should search correctly when keeps reactivity', () => {
    const datasets = ref(structuredClone(simpleArrayData));
    const query = ref('Apple');
    const { result } = useSearch(datasets, { query });

    expect(result.value).toEqual([
      'An apple a day keeps the doctor away',
      'An Apple a day keeps the BSOD away'
    ]);
    expectTypeOf(result.value).toEqualTypeOf<typeof simpleArrayData>();

    datasets.value.push('Apple is a fruit');
    expect(result.value).toEqual([
      'An apple a day keeps the doctor away',
      'An Apple a day keeps the BSOD away',
      'Apple is a fruit'
    ]);
    expectTypeOf(result.value).toEqualTypeOf<typeof simpleArrayData>();

    datasets.value = ['A Windows a day keeps Steve Jobs away', 'A Windows a day keeps SRE away'];
    expect(result.value).toEqual([]);
    expectTypeOf(result.value).toEqualTypeOf<typeof simpleArrayData>();

    query.value = 'Windows';
    expect(result.value).toEqual([
      'A Windows a day keeps Steve Jobs away',
      'A Windows a day keeps SRE away'
    ]);
    expectTypeOf(result.value).toEqualTypeOf<typeof simpleArrayData>();
  });

  it('should search correctly with strict mode (reactivity)', () => {
    const options = ref({});
    const { result } = useSearch(structuredClone(simpleArrayData), {
      query: 'steve jobs',
      options
    });

    expect(result.value).toEqual([
      'A Windows a day keeps Steve Jobs away',
      'A NeXT a day keeps Steve away'
    ]);
    expectTypeOf(result.value).toEqualTypeOf<typeof simpleArrayData>();

    options.value = { strict: true };

    expect(result.value).toEqual(['A Windows a day keeps Steve Jobs away']);
    expectTypeOf(result.value).toEqualTypeOf<typeof simpleArrayData>();
  });

  it('should handle composable query', () => {
    const datasets = ref(structuredClone(simpleArrayData));
    const { result, query, reset } = useSearch(datasets);

    expect(result.value).toEqual(datasets.value);
    expectTypeOf(result.value).toEqualTypeOf<typeof simpleArrayData>();
    expect(query.value).toEqual('');
    expectTypeOf(query).toEqualTypeOf<Ref<string>>();

    query.value = 'Apple';

    expect(result.value).toEqual([
      'An apple a day keeps the doctor away',
      'An Apple a day keeps the BSOD away'
    ]);
    expectTypeOf(result.value).toEqualTypeOf<typeof simpleArrayData>();

    datasets.value.push('Apple is a fruit');
    expect(result.value).toEqual([
      'An apple a day keeps the doctor away',
      'An Apple a day keeps the BSOD away',
      'Apple is a fruit'
    ]);
    expectTypeOf(result.value).toEqualTypeOf<typeof simpleArrayData>();

    datasets.value = ['A Windows a day keeps Steve Jobs away', 'A Windows a day keeps SRE away'];
    expect(result.value).toEqual([]);
    expectTypeOf(result.value).toEqualTypeOf<typeof simpleArrayData>();

    query.value = 'Windows';
    expect(result.value).toEqual([
      'A Windows a day keeps Steve Jobs away',
      'A Windows a day keeps SRE away'
    ]);
    expectTypeOf(result.value).toEqualTypeOf<typeof simpleArrayData>();

    query.value = 'something not exists';
    expect(result.value).toEqual([]);

    reset();
    expect(result.value).toEqual(datasets.value);
    expectTypeOf(result.value).toEqualTypeOf<typeof simpleArrayData>();
    expect(query.value).toEqual('');
    expectTypeOf(query).toEqualTypeOf<Ref<string>>();
  });
});

describe('useSearch with simple map data', () => {
  it('should search correctly', () => {
    const { result } = useSearch(structuredClone(simpleMapData), { query: 'Apple' });

    expect(result.value).toEqual(
      new Map([
        ['66b099fa-ed0d-474d-94fd-8df0173abbfc', 'An apple a day keeps the doctor away'],
        ['2721265e-98c2-4738-9d70-5c9f099b0e94', 'An Apple a day keeps the BSOD away']
      ])
    );
    expectTypeOf(result.value).toEqualTypeOf<typeof simpleMapData>();
  });

  it('should search correctly with case sensitive', () => {
    const { result } = useSearch(structuredClone(simpleMapData), {
      query: 'Apple',
      options: { caseSensitive: true }
    });

    expect(result.value).toEqual(
      new Map([['2721265e-98c2-4738-9d70-5c9f099b0e94', 'An Apple a day keeps the BSOD away']])
    );
    expectTypeOf(result.value).toEqualTypeOf<typeof simpleMapData>();
  });

  it('should search correctly when keeps reactivity', () => {
    const datasets = ref(structuredClone(simpleMapData));
    const query = ref('Apple');
    const { result } = useSearch(datasets, { query });

    expect(result.value).toEqual(
      new Map([
        ['66b099fa-ed0d-474d-94fd-8df0173abbfc', 'An apple a day keeps the doctor away'],
        ['2721265e-98c2-4738-9d70-5c9f099b0e94', 'An Apple a day keeps the BSOD away']
      ])
    );
    expectTypeOf(result.value).toEqualTypeOf<typeof simpleMapData>();

    datasets.value.set('0ff650bb-3da7-44f4-9a72-d03979023508', 'Apple is a fruit');
    expect(result.value).toEqual(
      new Map([
        ['66b099fa-ed0d-474d-94fd-8df0173abbfc', 'An apple a day keeps the doctor away'],
        ['2721265e-98c2-4738-9d70-5c9f099b0e94', 'An Apple a day keeps the BSOD away'],
        ['0ff650bb-3da7-44f4-9a72-d03979023508', 'Apple is a fruit']
      ])
    );
    expectTypeOf(result.value).toEqualTypeOf<typeof simpleMapData>();

    datasets.value = new Map([
      ['dd6f9ffb-604f-4242-8f85-da5b5ea342a8', 'A Windows a day keeps Steve Jobs away'],
      ['d4c4f0a2-3d5b-4b7f-8c4f-5d5e0f6b6d4b', 'A Windows a day keeps SRE away']
    ]);
    expect(result.value).toEqual(new Map());
    expectTypeOf(result.value).toEqualTypeOf<typeof simpleMapData>();
  });
});

describe('useSearch with complex array data', () => {
  it('should search correctly', () => {
    const { result } = useSearch(structuredClone(complexArrayData), {
      query: 'Apple',
      getters: ['message']
    });

    expect(result.value).toEqual([
      {
        id: '66b099fa-ed0d-474d-94fd-8df0173abbfc',
        message: 'An apple a day keeps the doctor away',
        speaker: {
          name: 'Alice',
          year: 2021
        }
      },
      {
        id: '2721265e-98c2-4738-9d70-5c9f099b0e94',
        message: 'An Apple a day keeps the BSOD away',
        speaker: { name: 'Bob', year: 2022 }
      }
    ]);
    expectTypeOf(result.value).toEqualTypeOf<typeof complexArrayData>();
  });

  it('should search correctly with case sensitive', () => {
    const { result } = useSearch(structuredClone(complexArrayData), {
      query: 'Apple',
      getters: ['message'],
      options: { caseSensitive: true }
    });

    expect(result.value).toEqual([
      {
        id: '2721265e-98c2-4738-9d70-5c9f099b0e94',
        message: 'An Apple a day keeps the BSOD away',
        speaker: { name: 'Bob', year: 2022 }
      }
    ]);
    expectTypeOf(result.value).toEqualTypeOf<typeof complexArrayData>();
  });

  it('should search multi fields correctly', () => {
    const { result } = useSearch(structuredClone(complexArrayData), {
      query: 'steve',
      getters: ['message', 'speaker.name']
    });

    expect(result.value).toEqual([
      {
        id: 'dd6f9ffb-604f-4242-8f85-da5b5ea342a8',
        message: 'A Windows a day keeps Steve Jobs away',
        speaker: { name: 'Charlie', year: 2021 }
      },
      {
        id: 'd4c4f0a2-3d5b-4b7f-8c4f-5d5e0f6b6d4b',
        message: 'A Windows a day keeps SRE away',
        speaker: { name: 'Steve Jobs never says', year: 2024 }
      },
      {
        id: 'c7b6e3f7-3a6a-4b2e-8a6b-5a6e3f7a6b2e',
        message: 'A Linux a day keeps system crashes away',
        speaker: { name: 'Steve', year: 2021 }
      }
    ]);
    expectTypeOf(result.value).toEqualTypeOf<typeof complexArrayData>();
  });

  it('should search multi fields with ordered correctly', () => {
    const { result } = useSearch(structuredClone(complexArrayData), {
      query: 'steve',
      getters: ['speaker.name', 'message']
    });

    expect(result.value).toEqual([
      {
        id: 'd4c4f0a2-3d5b-4b7f-8c4f-5d5e0f6b6d4b',
        message: 'A Windows a day keeps SRE away',
        speaker: { name: 'Steve Jobs never says', year: 2024 }
      },
      {
        id: 'c7b6e3f7-3a6a-4b2e-8a6b-5a6e3f7a6b2e',
        message: 'A Linux a day keeps system crashes away',
        speaker: { name: 'Steve', year: 2021 }
      },
      {
        id: 'dd6f9ffb-604f-4242-8f85-da5b5ea342a8',
        message: 'A Windows a day keeps Steve Jobs away',
        speaker: { name: 'Charlie', year: 2021 }
      }
    ]);
    expectTypeOf(result.value).toEqualTypeOf<typeof complexArrayData>();
  });

  it('should search multi fields with advanced getters correctly', () => {
    const { result } = useSearch(structuredClone(complexArrayData), {
      query: 'windows 113',
      getters: ['message', ({ speaker }) => String(speaker.year - 1911)]
    });

    expect(result.value).toEqual([
      {
        id: 'd4c4f0a2-3d5b-4b7f-8c4f-5d5e0f6b6d4b',
        message: 'A Windows a day keeps SRE away',
        speaker: { name: 'Steve Jobs never says', year: 2024 }
      },
      {
        id: 'dd6f9ffb-604f-4242-8f85-da5b5ea342a8',
        message: 'A Windows a day keeps Steve Jobs away',
        speaker: { name: 'Charlie', year: 2021 }
      }
    ]);
    expectTypeOf(result.value).toEqualTypeOf<typeof complexArrayData>();
  });
});

describe('useSearch with complex map data', () => {
  it('should search correctly', () => {
    const { result } = useSearch(structuredClone(complexMapData), {
      query: 'Apple',
      getters: ['message']
    });

    expect(result.value).toEqual(
      new Map([
        [
          '66b099fa-ed0d-474d-94fd-8df0173abbfc',
          {
            id: '66b099fa-ed0d-474d-94fd-8df0173abbfc',
            message: 'An apple a day keeps the doctor away',
            speaker: {
              name: 'Alice',
              year: 2021
            }
          }
        ],
        [
          '2721265e-98c2-4738-9d70-5c9f099b0e94',
          {
            id: '2721265e-98c2-4738-9d70-5c9f099b0e94',
            message: 'An Apple a day keeps the BSOD away',
            speaker: { name: 'Bob', year: 2022 }
          }
        ]
      ])
    );
    expectTypeOf(result.value).toEqualTypeOf<typeof complexMapData>();
  });

  it('should search correctly with case sensitive', () => {
    const { result } = useSearch(structuredClone(complexMapData), {
      query: 'Apple',
      getters: ['message'],
      options: { caseSensitive: true }
    });

    expect(result.value).toEqual(
      new Map([
        [
          '2721265e-98c2-4738-9d70-5c9f099b0e94',
          {
            id: '2721265e-98c2-4738-9d70-5c9f099b0e94',
            message: 'An Apple a day keeps the BSOD away',
            speaker: { name: 'Bob', year: 2022 }
          }
        ]
      ])
    );
    expectTypeOf(result.value).toEqualTypeOf<typeof complexMapData>();
  });

  it('should search multi fields correctly', () => {
    const { result } = useSearch(structuredClone(complexMapData), {
      query: 'steve',
      getters: ['message', 'speaker.name']
    });

    expect(result.value).toEqual(
      new Map([
        [
          'dd6f9ffb-604f-4242-8f85-da5b5ea342a8',
          {
            id: 'dd6f9ffb-604f-4242-8f85-da5b5ea342a8',
            message: 'A Windows a day keeps Steve Jobs away',
            speaker: { name: 'Charlie', year: 2021 }
          }
        ],
        [
          'd4c4f0a2-3d5b-4b7f-8c4f-5d5e0f6b6d4b',
          {
            id: 'd4c4f0a2-3d5b-4b7f-8c4f-5d5e0f6b6d4b',
            message: 'A Windows a day keeps SRE away',
            speaker: { name: 'Steve Jobs never says', year: 2024 }
          }
        ],
        [
          'c7b6e3f7-3a6a-4b2e-8a6b-5a6e3f7a6b2e',
          {
            id: 'c7b6e3f7-3a6a-4b2e-8a6b-5a6e3f7a6b2e',
            message: 'A Linux a day keeps system crashes away',
            speaker: { name: 'Steve', year: 2021 }
          }
        ]
      ])
    );
  });

  it('should search multi fields with ordered correctly', () => {
    const { result } = useSearch(structuredClone(complexMapData), {
      query: 'steve',
      getters: ['speaker.name', 'message']
    });

    expect(result.value).toEqual(
      new Map([
        [
          'd4c4f0a2-3d5b-4b7f-8c4f-5d5e0f6b6d4b',
          {
            id: 'd4c4f0a2-3d5b-4b7f-8c4f-5d5e0f6b6d4b',
            message: 'A Windows a day keeps SRE away',
            speaker: { name: 'Steve Jobs never says', year: 2024 }
          }
        ],
        [
          'c7b6e3f7-3a6a-4b2e-8a6b-5a6e3f7a6b2e',
          {
            id: 'c7b6e3f7-3a6a-4b2e-8a6b-5a6e3f7a6b2e',
            message: 'A Linux a day keeps system crashes away',
            speaker: { name: 'Steve', year: 2021 }
          }
        ],
        [
          'dd6f9ffb-604f-4242-8f85-da5b5ea342a8',
          {
            id: 'dd6f9ffb-604f-4242-8f85-da5b5ea342a8',
            message: 'A Windows a day keeps Steve Jobs away',
            speaker: { name: 'Charlie', year: 2021 }
          }
        ]
      ])
    );
    expectTypeOf(result.value).toEqualTypeOf<typeof complexMapData>();
  });

  it('should search multi fields with advanced getters correctly', () => {
    const { result } = useSearch(structuredClone(complexMapData), {
      query: 'windows 113',
      getters: ['message', ({ speaker }) => String(speaker.year - 1911)]
    });

    expect(result.value).toEqual(
      new Map([
        [
          'd4c4f0a2-3d5b-4b7f-8c4f-5d5e0f6b6d4b',
          {
            id: 'd4c4f0a2-3d5b-4b7f-8c4f-5d5e0f6b6d4b',
            message: 'A Windows a day keeps SRE away',
            speaker: { name: 'Steve Jobs never says', year: 2024 }
          }
        ],
        [
          'dd6f9ffb-604f-4242-8f85-da5b5ea342a8',
          {
            id: 'dd6f9ffb-604f-4242-8f85-da5b5ea342a8',
            message: 'A Windows a day keeps Steve Jobs away',
            speaker: { name: 'Charlie', year: 2021 }
          }
        ]
      ])
    );
    expectTypeOf(result.value).toEqualTypeOf<typeof complexMapData>();
  });
});

describe('useSearch focused on phrase search', () => {
  const datasets = [
    {
      name: 'APT-38',
      description:
        'APT-38 is a threat group that has been attributed to the North Korean government.',
      category: 'APT Group Simulation Data',
      recentlyUsed: '2021-01-01T00:00:00Z'
    },
    {
      name: 'APT-39',
      description: 'APT-39 is a threat group that has been attributed to the Iranian government.',
      category: 'APT Group Simulation Data',
      recentlyUsed: '2021-01-01T00:00:00Z'
    },
    {
      name: 'APT-40',
      description: 'APT-40 is a threat group that has been attributed to the Chinese government.',
      category: 'APT Group Simulation Data',
      recentlyUsed: '2021-01-01T00:00:00Z'
    },
    {
      name: 'Nginx test Techniques',
      description:
        'Nginx is a web server that can also be used as a reverse proxy, load balancer, mail proxy and HTTP cache.',
      category: 'Technique Simulation Data',
      recentlyUsed: '2021-01-01T00:00:00Z'
    },
    {
      name: 'Apache test Techniques',
      description:
        'Apache is a web server that can also be used as a reverse proxy, load balancer, mail proxy and HTTP cache.',
      category: 'Technique Simulation Data',
      framework: {
        technique: 'T1012s'
      },
      recentlyUsed: '2021-01-01T00:00:00Z'
    }
  ];

  it('should search correctly', () => {
    const options = ref({});
    const { result, query } = useSearch(datasets, {
      getters: ['name', 'category'],
      options
    });

    query.value = 'A';
    expect(result.value).toEqual([
      {
        name: 'APT-38',
        description:
          'APT-38 is a threat group that has been attributed to the North Korean government.',
        category: 'APT Group Simulation Data',
        recentlyUsed: '2021-01-01T00:00:00Z'
      },
      {
        name: 'APT-39',
        description: 'APT-39 is a threat group that has been attributed to the Iranian government.',
        category: 'APT Group Simulation Data',
        recentlyUsed: '2021-01-01T00:00:00Z'
      },
      {
        name: 'APT-40',
        description: 'APT-40 is a threat group that has been attributed to the Chinese government.',
        category: 'APT Group Simulation Data',
        recentlyUsed: '2021-01-01T00:00:00Z'
      },
      {
        name: 'Apache test Techniques',
        description:
          'Apache is a web server that can also be used as a reverse proxy, load balancer, mail proxy and HTTP cache.',
        category: 'Technique Simulation Data',
        framework: {
          technique: 'T1012s'
        },
        recentlyUsed: '2021-01-01T00:00:00Z'
      },
      {
        name: 'Nginx test Techniques',
        description:
          'Nginx is a web server that can also be used as a reverse proxy, load balancer, mail proxy and HTTP cache.',
        category: 'Technique Simulation Data',
        recentlyUsed: '2021-01-01T00:00:00Z'
      }
    ]);
    expectTypeOf(result.value).toEqualTypeOf<typeof datasets>();

    query.value = 'AP';
    expect(result.value).toEqual([
      {
        name: 'APT-38',
        description:
          'APT-38 is a threat group that has been attributed to the North Korean government.',
        category: 'APT Group Simulation Data',
        recentlyUsed: '2021-01-01T00:00:00Z'
      },
      {
        name: 'APT-39',
        description: 'APT-39 is a threat group that has been attributed to the Iranian government.',
        category: 'APT Group Simulation Data',
        recentlyUsed: '2021-01-01T00:00:00Z'
      },
      {
        name: 'APT-40',
        description: 'APT-40 is a threat group that has been attributed to the Chinese government.',
        category: 'APT Group Simulation Data',
        recentlyUsed: '2021-01-01T00:00:00Z'
      },
      {
        name: 'Apache test Techniques',
        description:
          'Apache is a web server that can also be used as a reverse proxy, load balancer, mail proxy and HTTP cache.',
        category: 'Technique Simulation Data',
        framework: {
          technique: 'T1012s'
        },
        recentlyUsed: '2021-01-01T00:00:00Z'
      }
    ]);
    expectTypeOf(result.value).toEqualTypeOf<typeof datasets>();

    query.value = 'APT';
    expect(result.value).toEqual([
      {
        name: 'APT-38',
        description:
          'APT-38 is a threat group that has been attributed to the North Korean government.',
        category: 'APT Group Simulation Data',
        recentlyUsed: '2021-01-01T00:00:00Z'
      },
      {
        name: 'APT-39',
        description: 'APT-39 is a threat group that has been attributed to the Iranian government.',
        category: 'APT Group Simulation Data',
        recentlyUsed: '2021-01-01T00:00:00Z'
      },
      {
        name: 'APT-40',
        description: 'APT-40 is a threat group that has been attributed to the Chinese government.',
        category: 'APT Group Simulation Data',
        recentlyUsed: '2021-01-01T00:00:00Z'
      }
    ]);
    expectTypeOf(result.value).toEqualTypeOf<typeof datasets>();

    query.value = 'APT-3';
    expect(result.value).toEqual([
      {
        name: 'APT-38',
        description:
          'APT-38 is a threat group that has been attributed to the North Korean government.',
        category: 'APT Group Simulation Data',
        recentlyUsed: '2021-01-01T00:00:00Z'
      },
      {
        name: 'APT-39',
        description: 'APT-39 is a threat group that has been attributed to the Iranian government.',
        category: 'APT Group Simulation Data',
        recentlyUsed: '2021-01-01T00:00:00Z'
      }
    ]);
    expectTypeOf(result.value).toEqualTypeOf<typeof datasets>();

    query.value = 'APT 3';
    expect(result.value).toEqual([
      {
        name: 'APT-38',
        description:
          'APT-38 is a threat group that has been attributed to the North Korean government.',
        category: 'APT Group Simulation Data',
        recentlyUsed: '2021-01-01T00:00:00Z'
      },
      {
        name: 'APT-39',
        description: 'APT-39 is a threat group that has been attributed to the Iranian government.',
        category: 'APT Group Simulation Data',
        recentlyUsed: '2021-01-01T00:00:00Z'
      },
      {
        name: 'APT-40',
        description: 'APT-40 is a threat group that has been attributed to the Chinese government.',
        category: 'APT Group Simulation Data',
        recentlyUsed: '2021-01-01T00:00:00Z'
      }
    ]);
    expectTypeOf(result.value).toEqualTypeOf<typeof datasets>();

    options.value = { strict: true };
    expect(result.value).toEqual([
      {
        name: 'APT-38',
        description:
          'APT-38 is a threat group that has been attributed to the North Korean government.',
        category: 'APT Group Simulation Data',
        recentlyUsed: '2021-01-01T00:00:00Z'
      },
      {
        name: 'APT-39',
        description: 'APT-39 is a threat group that has been attributed to the Iranian government.',
        category: 'APT Group Simulation Data',
        recentlyUsed: '2021-01-01T00:00:00Z'
      }
    ]);
    expectTypeOf(result.value).toEqualTypeOf<typeof datasets>();
  });
});
