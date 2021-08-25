import client from '@aspida/fetch'
import { defineNuxtPlugin } from '@nuxtjs/composition-api'
import mock from '~/api/$mock'

export default defineNuxtPlugin((_, inject) =>
  inject('api', mock(client(), { log: true, delayMSec: 500 }))
)
