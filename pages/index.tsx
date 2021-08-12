import { defineComponent, onMounted, useContext } from '@nuxtjs/composition-api'
import Tutorial from '~/components/Tutorial.vue'
import styles from './styles.module.css'

export default defineComponent({
  setup() {
    const ctx = useContext()
    console.log(ctx.$pagesPath.$url())

    onMounted(async () => {
      const res = await ctx.$api.users.$get()
      console.log(res)
    })

    return () => (
      <div class={styles.sampleFont}>
        <Tutorial />
      </div>
    )
  },
})
