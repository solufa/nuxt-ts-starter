import { Context } from '@nuxt/types'
import mockServer from 'axios-mock-server'

// @ts-ignore: Cannot find module '~/mocks/$route'
import route from '~/mocks/$route'

export default ({ $axios }: Context) => {
  mockServer(route, $axios).enableLog()
}
