import 'dotenv/config'
import colors from 'vuetify/es5/util/colors'
import { Configuration } from '@nuxt/types'

const { ENABLE_MOCK, SUPPORT_IE } = process.env

const config: Configuration = {
  mode: 'spa',
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    ...(SUPPORT_IE === 'true'
      ? {
          script: [
            {
              src:
                'https://polyfill.io/v3/polyfill.min.js?features=default%2CIntersectionObserver%2CEventSource%2CMath.cbrt%2CObject.values'
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
    ...(ENABLE_MOCK === 'true' ? ['~/plugins/faker', '~/plugins/mock'] : [])
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/stylelint-module
    '@nuxtjs/stylelint-module',
    // Doc: https://github.com/nuxt-community/vuetify-module
    '@nuxtjs/vuetify',
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
  axios: { baseURL: 'https://example.com/v1' },
  /*
   ** vuetify module configuration
   ** https://github.com/nuxt-community/vuetify-module
   */
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },
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
