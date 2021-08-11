import { defineComponent } from '@nuxtjs/composition-api'
import Tutorial from '~/components/Tutorial.vue'

export default defineComponent({
  setup() {
    return () => <Tutorial />
  },
})
