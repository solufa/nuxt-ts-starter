import type { Plugin } from '@nuxt/types'
import client from '@aspida/fetch'
import api, { ApiInstance } from '~/api/$api'

declare module 'vue/types/vue' {
  interface Vue {
    $api: ApiInstance
  }
}

const plugin: Plugin = (_, inject) =>
  inject('api', api(client()))

export default plugin
