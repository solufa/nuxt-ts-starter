import { defineComponent, useContext, useFetch } from '@nuxtjs/composition-api'
import {
  Button,
  Loading,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from '~/components/atoms'
import { Tutorial } from '~/components/pages/index/Tutorial'
import type { ApiUser } from '~/types'
import { useErrHandler, useState } from '~/utils/hooks'
import styles from './-styles.module.css'

export default defineComponent({
  setup() {
    const ctx = useContext()
    const [openedModal, setOpenedModal] = useState(false)
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
          <div class={styles.openingButton}>
            <Button click={() => setOpenedModal(true)}>Open modal</Button>
          </div>
          <Modal opened={openedModal.value} updateOpened={setOpenedModal}>
            <ModalHeader title="Sample modal" />
            <ModalBody>
              <div class={styles.modalContent}>Large content</div>
            </ModalBody>
            <ModalFooter>
              <Button click={() => setOpenedModal(false)}>Close</Button>
            </ModalFooter>
          </Modal>
        </div>
      )
  },
})
