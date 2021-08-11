/* eslint-disable */
// prettier-ignore
import { AspidaClient } from 'aspida'
// prettier-ignore
import { Methods as Methods0 } from './users'
// prettier-ignore
import { Methods as Methods1 } from './users/_id'

// prettier-ignore
const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? '' : baseURL).replace(/\/$/, '')
  const PATH0 = '/users'
  const GET = 'GET'
  const POST = 'POST'

  return {
    users: {
      _id: (val1: number | string) => {
        const prefix1 = `${PATH0}/${val1}`

        return {
          get: (option?: { config?: T }) =>
            fetch<Methods1['get']['resBody']>(prefix, prefix1, GET, option).json(),
          $get: (option?: { config?: T }) =>
            fetch<Methods1['get']['resBody']>(prefix, prefix1, GET, option).json().then(r => r.body),
          $path: () => `${prefix}${prefix1}`
        }
      },
      get: (option?: { config?: T }) =>
        fetch<Methods0['get']['resBody']>(prefix, PATH0, GET, option).json(),
      $get: (option?: { config?: T }) =>
        fetch<Methods0['get']['resBody']>(prefix, PATH0, GET, option).json().then(r => r.body),
      post: (option: { body: Methods0['post']['reqBody'], config?: T }) =>
        fetch(prefix, PATH0, POST, option).send(),
      $post: (option: { body: Methods0['post']['reqBody'], config?: T }) =>
        fetch(prefix, PATH0, POST, option).send().then(r => r.body),
      $path: () => `${prefix}${PATH0}`
    }
  }
}

// prettier-ignore
export type ApiInstance = ReturnType<typeof api>
// prettier-ignore
export default api
