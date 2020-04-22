import type { Plugin } from '@nuxt/types'
import { getModule } from 'vuex-module-decorators'
import { UsersStore } from '~/store/users'

const vxm = {
  users: getModule(UsersStore)
}

declare module 'vue/types/vue' {
  interface Vue {
    $vxm: typeof vxm
  }
}

declare module '@nuxt/types' {
  interface NuxtAppOptions {
    $vxm: typeof vxm
  }
}

declare module 'vuex/types/index' {
  interface Store<S> {
    $vxm: typeof vxm
  }
}

const plugin: Plugin = (_, inject) => inject('vxm', vxm)

export default plugin
