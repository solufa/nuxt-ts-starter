import { computed, defineComponent, PropType } from '@nuxtjs/composition-api'

export const Spacer = defineComponent({
  props: {
    axis: { type: String as PropType<'x' | 'y'>, required: true },
    size: { type: Number, required: true },
  },
  setup(props) {
    const getWidth = () => (props.axis === 'y' ? 1 : props.size)
    const getHeight = () => (props.axis === 'x' ? 1 : props.size)
    const style = computed(() => ({
      display: `${props.axis === 'x' ? 'inline-' : ''}block`,
      width: `${getWidth()}px`,
      minWidth: `${getHeight()}px`,
      height: `${getHeight()}px`,
      minHeight: `${getHeight()}px`,
    }))

    return () => <span style={style.value} />
  },
})
