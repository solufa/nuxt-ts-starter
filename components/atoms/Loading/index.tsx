import { defineComponent } from '@nuxtjs/composition-api'
import { Portal } from '~/components/nuxt'
import styles from './styles.module.css'

export const loadingPortalName = 'loading'

export const Loading = defineComponent({
  setup() {
    return () => (
      <Portal to={loadingPortalName}>
        <div class={styles.loading}>
          <div class={styles.loader} />
        </div>
      </Portal>
    )
  },
})
