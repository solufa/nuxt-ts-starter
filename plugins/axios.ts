import { Context } from '@nuxt/types'

export default ({ $axios }: Context) => {
  $axios.onError((error) => {
    // eslint-disable-next-line no-console
    console.log(error)
  })
}
