module.exports = {
  root: true,
  parserOptions: {
    sourceType: 'module'
  },
  parser: 'vue-eslint-parser',
  env: {
    browser: true,
    node: true,
    es6: true
  },
  rules: {
    'no-console': 'off'
  },
  'space-before-function-paren': 'off',
  quotes: ['error', 'single'],
  'comma-dangle': ['error', 'never']
}
