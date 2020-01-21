import { Plugin } from '@nuxt/types'
import mockClient from '@aspida/axios/dist/mockClient'
// @ts-ignore: Cannot find module '~/apis/$mock'
import mock from '~/apis/$mock'

const plugin: Plugin = ({ $axios }, inject) =>
  inject('api', mock(mockClient($axios), { log: true }))

export default plugin
