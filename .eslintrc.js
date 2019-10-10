module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'plugin:nuxt/recommended',
    'plugin:prettier/recommended',
    'prettier',
    'prettier/@typescript-eslint',
    'prettier/standard',
    'prettier/unicorn',
    'prettier/vue'
  ],
  globals: { $nuxt: 'readonly' },
  rules: {
    'no-console': +(process.env.NODE_ENV === 'production')
  }
}
