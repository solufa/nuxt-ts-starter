import { defineComponent } from '@nuxtjs/composition-api'
import { loadingPortalName } from '~/components/atoms'
import { PortalTarget } from '~/components/nuxt'

export default defineComponent({
  middleware: 'sample',
  setup() {
    return () => (
      <div>
        <nuxt />
        <PortalTarget name={loadingPortalName} />
      </div>
    )
  },
})
