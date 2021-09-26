import client from '@aspida/fetch'
import { defineNuxtPlugin } from '@nuxtjs/composition-api'
import type { ApiInstance } from '~/api/$api'
import api from '~/api/$api'

declare module '@nuxt/types' {
  interface Context {
    $api: ApiInstance
  }
}

export default defineNuxtPlugin((_, inject) =>
  inject(
    'api',
    api(
      client(fetch, {
        baseURL: process.env.VITE_BASE_URL,
        throwHttpErrors: true,
      })
    )
  )
)
