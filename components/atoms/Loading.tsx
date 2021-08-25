import { defineComponent } from '@nuxtjs/composition-api'
import styles from './styles.module.css'

export const Loading = defineComponent({
  setup() {
    return () => (
      <div class={styles.loading}>
        <div class={styles.loader} />
      </div>
    )
  },
})
