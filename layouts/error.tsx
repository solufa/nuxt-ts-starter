import type { NuxtError } from '@nuxt/types'
import { defineComponent } from '@nuxtjs/composition-api'
import { getObjType } from '~/utils/props'

export default defineComponent({
  props: { error: getObjType<NuxtError>() },
  setup(props) {
    return () => (
      <div>
        {props.error.statusCode ?? 500}: {props.error.message ?? ''}
      </div>
    )
  },
})
