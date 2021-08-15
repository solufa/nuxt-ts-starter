import { defineComponent, PropType } from '@nuxtjs/composition-api'
import type { RawLocation } from 'vue-router'

export const NuxtLink = defineComponent({
  props: {
    to: { type: [String, Object] as PropType<RawLocation>, required: true },
  },
  setup(props, { slots }) {
    return () => <nuxt-link to={props.to}>{slots.default?.()}</nuxt-link>
  },
})
