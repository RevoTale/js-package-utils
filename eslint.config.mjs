import love from 'eslint-config-love'

export default {
  ...love,
  files: ['./src/**/*.tsx', './src/**/*.ts'],
  "ignorePatterns": [ "/__tests__/sources/**","**/dist/**"],
}
