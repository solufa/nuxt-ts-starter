import { Plugin } from '@nuxt/types'
// @ts-ignore: Cannot find module '~/apis/$api'
import api, { ApiInstance } from '~/apis/$api'

declare module 'vue/types/vue' {
  interface Vue {
    $api: ApiInstance
  }
}

const plugin: Plugin = ({ $axios }, inject) => inject('api', api($axios))

export default plugin
