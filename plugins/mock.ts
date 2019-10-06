import { Context } from '@nuxt/types'
// @ts-ignore: Cannot find module '~/mocks/$route'
import mock from '~/mocks/$mock'

export default ({ $axios }: Context) => mock($axios).enableLog()
