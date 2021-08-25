import { mockMethods } from 'aspida-mock'
import type { ApiUser } from '~/types'
import { users } from '../@seeds'

export interface Methods {
  get: {
    resBody: ApiUser
  }
}

export default mockMethods<Methods>({
  get: ({ values }) => ({
    status: 200,
    resBody: users.filter((user) => user.id === values.id)[0],
  }),
})
