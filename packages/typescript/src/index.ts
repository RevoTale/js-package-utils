import { Linter } from 'eslint'

const config: Linter.Config = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: 'module'
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking'
  ],
  rules: {
    semi: ['error', 'never'],
    'no-else-return': 'error',
    'no-empty-function': 'error',
    'no-lonely-if': 'error',
    '@typescript-eslint/no-empty-function': 'error',
    'max-lines': 'error',
    'prefer-arrow-callback': [
      'error',
      {
        allowNamedFunctions: true
      }
    ],
    'func-style': [
      'error',
      'expression',
      {
        allowArrowFunctions: true
      }
    ],
    'no-unused-vars': [
      'warn',
      {
        argsIgnorePattern: '^_'
      }
    ],
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_'
      }
    ]
  }
}
export default config