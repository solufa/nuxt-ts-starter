import { Plugin } from '@nuxt/types'
// @ts-ignore: Cannot find module '~/apis/$api'
import api, { ApiInstance } from '~/apis/$api'

declare module 'vue/types/vue' {
  interface Vue {
    $aspida: ApiInstance
  }
}

const plugin: Plugin = ({ $axios }, inject) => inject('aspida', api($axios))

export default plugin
