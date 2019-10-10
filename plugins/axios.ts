import { Context } from '@nuxt/types'

export default ({ $axios }: Context) => {
  $axios.onError((error) => {
    console.log(error)
  })
}
