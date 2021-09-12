import { NuxtConfig } from '@nuxt/types'

const {
  npm_package_name: TITLE,
  npm_package_description: DESCRIPTION,
  NODE_ENV,
  VITE_BASE_URL,
} = process.env

const config: NuxtConfig = {
  telemetry: false,
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: TITLE || '',
    htmlAttrs: {
      lang: 'ja',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: DESCRIPTION || '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  env: {
    VITE_BASE_URL: VITE_BASE_URL ?? '',
  },

  loading: false,

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/styles/settings.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/$path',
    NODE_ENV === 'development' ? '~/plugins/mock' : '~/plugins/api',
  ],

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    'nuxt-vite',
    '@nuxtjs/composition-api/module',
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
  ],

  vite: {
    server: { fs: { strict: false } },
    vue: {
      jsx: true,
      jsxOptions: { compositionAPI: true },
    },
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
    'portal-vue/nuxt',
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    loaders: {
      css: { modules: true },
    },
  },
}

export default config
