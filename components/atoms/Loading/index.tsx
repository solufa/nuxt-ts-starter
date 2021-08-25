import { defineComponent } from '@nuxtjs/composition-api'
import { Portal } from '~/components/nuxt'
import { LOADING_PORTAL } from '~/utils/constants'
import styles from './styles.module.css'

export const Loading = defineComponent({
  setup() {
    return () => (
      <Portal to={LOADING_PORTAL}>
        <div class={styles.loading}>
          <div class={styles.loader} />
        </div>
      </Portal>
    )
  },
})
