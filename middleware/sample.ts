import { defineNuxtMiddleware } from '@nuxtjs/composition-api'

export default defineNuxtMiddleware(() => {
  // eslint-disable-next-line no-console
  console.log('Passed sample middleware.')
})
