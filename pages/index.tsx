import { defineComponent, useContext, useFetch } from '@nuxtjs/composition-api'
import { Loading } from '~/components/atoms'
import { Tutorial } from '~/components/pages/index/Tutorial'
import type { ApiUser } from '~/types'
import { useErrHandler, useState } from '~/utils/hooks'
import styles from './-styles.module.css'

export default defineComponent({
  setup() {
    const ctx = useContext()
    const [users, setUsers] = useState<ApiUser[]>([])
    const errHandler = useErrHandler()

    const { fetchState } = useFetch(async () => {
      try {
        setUsers(await ctx.$api.users.$get())
      } catch (e) {
        errHandler(e)
      }
    })

    return () =>
      fetchState.pending ? (
        <Loading />
      ) : (
        <div class={styles.sampleFont}>
          <Tutorial users={users.value} />
        </div>
      )
  },
})
