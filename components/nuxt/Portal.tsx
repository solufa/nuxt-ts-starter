import { defineComponent } from '@nuxtjs/composition-api'

export const Portal = defineComponent({
  props: {
    to: { type: String, required: true },
  },
  setup(props, { slots }) {
    return () => <portal to={props.to}>{slots.default?.()}</portal>
  },
})

export const PortalTarget = defineComponent({
  props: {
    name: { type: String, required: true },
  },
  setup(props) {
    return () => <portal-target name={props.name} />
  },
})
