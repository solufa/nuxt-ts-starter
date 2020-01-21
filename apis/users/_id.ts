import { mockMethods } from 'aspida-mock'
import { users, User } from './index'

export interface Methods {
  get: {
    resData: User
  }
}

export default mockMethods<Methods>({
  get: ({ values }) => ({
    status: 200,
    resData: users.filter((user) => user.id === values.id)[0]
  })
})
