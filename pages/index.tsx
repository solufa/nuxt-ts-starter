import { defineComponent, useContext, useFetch } from '@nuxtjs/composition-api'
import type { User } from '~/api/users'
import { Tutorial } from '~/components/Tutorial'
import { useErrHandler, useState } from '~/utils/hooks'
import styles from './-styles.module.css'

export default defineComponent({
  setup() {
    const ctx = useContext()
    const [users, setUsers] = useState<User[]>()
    const errHandler = useErrHandler()

    useFetch(async () => {
      try {
        setUsers(await ctx.$api.users.$get())
      } catch (e) {
        errHandler(e)
      }
    })

    return () => (
      <div class={styles.sampleFont}>
        {users.value && <Tutorial users={users.value} />}
      </div>
    )
  },
})
