import {
  defineComponent,
  onMounted,
  ref,
  useContext,
} from '@nuxtjs/composition-api'
import type { User } from '~/api/users'
import { Tutorial } from '~/components/Tutorial'
import styles from './styles.module.css'

export default defineComponent({
  setup() {
    const ctx = useContext()
    const users = ref<User[]>()

    onMounted(async () => {
      users.value = await ctx.$api.users.$get()
    })

    return () => (
      <div class={styles.sampleFont}>
        {users.value && <Tutorial users={users.value} />}
      </div>
    )
  },
})
