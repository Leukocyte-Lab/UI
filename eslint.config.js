import path from 'node:path';
import { fileURLToPath } from 'node:url';

import pluginPromise from 'eslint-plugin-promise';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import vue from 'eslint-plugin-vue';
import ts from 'typescript-eslint';
import { includeIgnoreFile } from '@eslint/compat';
import js from '@eslint/js';

export default [
  includeIgnoreFile(path.resolve(path.dirname(fileURLToPath(import.meta.url)), '.gitignore')),

  {
    languageOptions: {
      ecmaVersion: 'latest'
    }
  },

  // js
  js.configs.recommended,

  // ts
  ...ts.configs.recommended,
  {
    rules: {
      '@typescript-eslint/no-namespace': 'off',
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-unused-vars': 'warn',
      '@typescript-eslint/no-unnecessary-type-constraint': 'warn',
      '@typescript-eslint/no-unused-expressions': ['warn', { allowTernary: true }]
    }
  },

  // vue
  ...vue.configs['flat/recommended'],
  {
    files: ['*.vue', '**/*.vue'],
    languageOptions: {
      parserOptions: {
        parser: ts.parser
      }
    }
  },
  {
    rules: {
      'vue/no-unused-vars': ['error', { ignorePattern: '^_' }],
      'vue/max-attributes-per-line': ['error', { singleline: 5 }]
    }
  },

  // Sort imports
  {
    plugins: {
      'simple-import-sort': simpleImportSort
    },
    rules: {
      'simple-import-sort/imports': [
        'warn',
        {
          groups: [
            [
              '^\u0000' // all side effects (0 at start)
            ],
            [
              '^node:' // Node.js builtins prefixed with `node:`.
            ],
            [
              '^\\w', // external
              '^@\\w' // external starts with `@`
            ],
            [
              '^[^/\\.@].*\u0000$', // external types (0 at end)
              '^@[^/].*\u0000$' // external types starts with `@` (0 at end)
            ],
            [
              '^' // any
            ],
            [
              '^@/', // internal
              '^\\.' // local
            ],
            [
              '^.*\u0000$' // internal types (0 at end)
            ]
          ]
        }
      ],
      'simple-import-sort/exports': 'warn'
    }
  },

  // Promise
  pluginPromise.configs['flat/recommended']
];
