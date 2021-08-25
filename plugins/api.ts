import client from '@aspida/fetch'
import type { Plugin } from '@nuxt/types'
import api, { ApiInstance } from '~/api/$api'

declare module '@nuxt/types' {
  interface Context {
    $api: ApiInstance
  }
}

const plugin: Plugin = (_, inject) =>
  inject(
    'api',
    api(
      client(fetch, {
        baseURL: process.env.VITE_BASE_URL,
        throwHttpErrors: true,
      })
    )
  )

export default plugin
