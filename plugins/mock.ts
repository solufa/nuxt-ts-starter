import { Context } from '@nuxt/types'
// @ts-ignore: Cannot find module '~/apis/$mock'
import mock from '~/apis/$mock'

export default ({ $axios }: Context) => mock($axios).enableLog()
