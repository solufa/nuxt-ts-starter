import { defineComponent } from '@nuxtjs/composition-api'
import { PortalTarget } from '~/components/nuxt'
import { LOADING_PORTAL, MODAL_PORTAL } from '~/utils/constants'

export default defineComponent({
  middleware: 'sample',
  setup() {
    return () => (
      <div>
        <nuxt />
        <PortalTarget name={MODAL_PORTAL} />
        <PortalTarget name={LOADING_PORTAL} />
      </div>
    )
  },
})
