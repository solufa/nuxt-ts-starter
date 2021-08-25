module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'plugin:nuxt/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  plugins: [],
  rules: {
    complexity: ['error', 5],
    'max-depth': ['error', 1],
    'max-nested-callbacks': ['error', 2],
    'max-lines': ['error', 200],
    'prefer-template': 'error',
    'import/order': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
  },
}
