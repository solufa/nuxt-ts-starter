import { Context } from '@nuxt/types'
import mockServer from 'axios-mock-server'
import route from '~/mocks/$route'

export default ({ $axios }: Context) => {
  mockServer(route, $axios).enableLog()
}
