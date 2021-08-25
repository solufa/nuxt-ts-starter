import { mockMethods } from 'aspida-mock'
import type { ApiUser, UserId } from '~/types'
import { users } from '../@seeds'

export type Methods = {
  get: {
    resBody: ApiUser[]
  }

  post: {
    reqBody: Omit<ApiUser, 'id'>
  }
}

export default mockMethods<Methods>({
  get: () => ({ status: 200, resBody: users }),

  post: ({ reqBody }) => {
    users.push({
      id: users.length as UserId,
      firstname: reqBody.firstname,
      lastname: reqBody.lastname,
    })

    return { status: 201 }
  },
})
