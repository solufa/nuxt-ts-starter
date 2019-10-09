import { Plugin } from '@nuxt/types'
// @ts-ignore: Cannot find module '~/apis/$api'
import api from '~/apis/$api'

type Aspida = ReturnType<typeof api>

declare module 'vue/types/vue' {
  interface Vue {
    $aspida: Aspida
  }
}

declare module '@nuxt/types' {
  interface NuxtAppOptions {
    $aspida: Aspida
  }
}

declare module 'vuex/types/index' {
  interface Store<S> {
    $aspida: Aspida
  }
}

const plugin: Plugin = ({ $axios }, inject) => inject('aspida', api($axios))

export default plugin
