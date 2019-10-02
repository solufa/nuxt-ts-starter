import { Context } from '@nuxt/types'

export default ({ $axios }: Context) => {
  $axios.onError(error => {
    if (error.response!.status === 404) {
      console.log(error)
    }
  })
}
