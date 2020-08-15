module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: { jsx: true },
  },
  settings: {
    react: { version: 'detect' },
  },
  extends: [
    'plugin:prettier/recommended',
    'prettier/@typescript-eslint',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  plugins: ['import'],
  rules: {
    'react/prop-types': 'off',
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    'sort-imports': ['error', { ignoreDeclarationSort: true }],
    'import/order': [
      'error',
      {
        'newlines-between': 'always',

        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
        pathGroups: [
          {
            pattern: 'components/**',
            group: 'sibling',
          },
          {
            pattern: 'data/**',
            group: 'sibling',
          },
          {
            pattern: 'pages/**',
            group: 'sibling',
          },
        ],
        pathGroupsExcludedImportTypes: ['builtin'],
      },
    ],
    '@typescript-eslint/no-non-null-assertion': 'off',
    'prettier/prettier': [
      1,
      {
        tabWidth: 2,
        useTabs: false,
        singleQuote: true,
        semi: false,
        trailingComma: 'all',
      },
    ],
  },
}
