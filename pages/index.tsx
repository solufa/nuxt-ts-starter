import {
  defineComponent,
  ref,
  useContext,
  useFetch,
} from '@nuxtjs/composition-api'
import type { User } from '~/api/users'
import { Tutorial } from '~/components/Tutorial'
import styles from './styles.module.css'

export default defineComponent({
  setup() {
    const ctx = useContext()
    const users = ref<User[]>()

    useFetch(async () => {
      users.value = await ctx.$api.users.$get()
    })

    return () => (
      <div class={styles.sampleFont}>
        {users.value && <Tutorial users={users.value} />}
      </div>
    )
  },
})
