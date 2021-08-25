import { defineComponent } from '@nuxtjs/composition-api'
import { Portal } from '~/components/nuxt'
import { MODAL_PORTAL } from '~/utils/constants'
import { openedSyncProps } from '~/utils/props'
import styles from './styles.module.css'

export const Modal = defineComponent({
  props: { ...openedSyncProps },
  setup(props, { slots }) {
    const close = () => props.updateOpened(false)

    return () => (
      <Portal to={MODAL_PORTAL}>
        {props.opened && (
          <div class={styles.modal}>
            <div class={styles.background} onClick={close} />
            <div class={styles.wrapper}>{slots.default?.()}</div>
          </div>
        )}
      </Portal>
    )
  },
})

export const ModalHeader = defineComponent({
  props: { title: { type: String, required: true } },
  setup(props) {
    return () => <div class={styles.header}>{props.title}</div>
  },
})

export const ModalBody = defineComponent({
  setup(_, { slots }) {
    return () => <div class={styles.body}>{slots.default?.()}</div>
  },
})

export const ModalFooter = defineComponent({
  setup(_, { slots }) {
    return () => <div class={styles.footer}>{slots.default?.()}</div>
  },
})
