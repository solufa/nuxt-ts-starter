import 'dotenv/config'
import { Configuration } from '@nuxt/types'

const {
  npm_package_name: TITLE,
  npm_package_description: DESCRIPTION,
  ENABLE_MOCK,
  SUPPORT_IE,
  BASE_URL
} = process.env

const config: Configuration = {
  mode: 'spa',
  /*
   ** Headers of the page
   */
  head: {
    title: TITLE || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: DESCRIPTION || '' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    ...(SUPPORT_IE === 'true'
      ? {
          script: [
            {
              src: 'https://polyfill.io/v3/polyfill.min.js?features=EventSource'
            }
          ]
        }
      : {})
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: ['~/assets/styles/settings.css'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    '~/plugins/axios',
    '~/plugins/vxm',
    '~/plugins/api',
    ...(ENABLE_MOCK === 'true' ? ['~/plugins/mock'] : [])
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/stylelint-module
    '@nuxtjs/stylelint-module',
    // Doc: https://typescript.nuxtjs.org/
    ['@nuxt/typescript-build', { typeCheck: { eslint: true } }]
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios'
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: { baseURL: BASE_URL },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** Customize PostCSS Loader plugins
     */
    postcss: {
      preset: {
        // Caution: https://github.com/postcss/autoprefixer#beware-of-enabling-autoplacement-in-old-projects
        autoprefixer: SUPPORT_IE === 'true' ? { grid: 'autoplace' } : {}
      }
    }
    /*
     ** You can extend webpack config here
     */
    // extend(config, ctx) {},
  }
}

export default config
