import { defineComponent } from '@nuxtjs/composition-api'
import Tutorial from '~/components/Tutorial.vue'
import styles from './styles.module.css'

export default defineComponent({
  setup() {
    return () => (
      <div class={styles.sampleFont}>
        <Tutorial />
      </div>
    )
  },
})
