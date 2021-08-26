import { defineComponent, PropType } from '@nuxtjs/composition-api'
import { voidFnType } from '~/utils/props'
import styles from './styles.module.css'

export const Button = defineComponent({
  props: {
    size: {
      type: String as PropType<'small' | 'middle' | 'large'>,
      required: false,
      default: 'middle',
    },
    click: voidFnType,
  },
  setup(props, { slots }) {
    return () => (
      <button class={styles.button} onClick={props.click}>
        {slots.default?.()}
      </button>
    )
  },
})
