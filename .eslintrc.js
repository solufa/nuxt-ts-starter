module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: { parser: '@typescript-eslint/parser' },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended',
    '@nuxtjs/eslint-config-typescript'
  ],
  plugins: ['@typescript-eslint'],
  globals: { $nuxt: 'readonly' },
  rules: {
    'arrow-parens': 0,
    'space-before-function-paren': 0,
    'no-console': +(process.env.NODE_ENV === 'production')
  }
}
