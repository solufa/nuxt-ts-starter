import { defineComponent } from '@nuxtjs/composition-api'
import type { Location } from 'vue-router'
import { getObjType } from '~/utils/props'

export const NuxtLink = defineComponent({
  props: {
    to: getObjType<Location>(),
  },
  setup(props, { slots }) {
    return () => <nuxt-link to={props.to}>{slots.default?.()}</nuxt-link>
  },
})
