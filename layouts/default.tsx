import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  middleware: 'sample',
  setup() {
    return () => <nuxt />
  },
})
