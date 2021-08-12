import { mockMethods } from 'aspida-mock'
import { User, users } from './index'

export interface Methods {
  get: {
    resBody: User
  }
}

export default mockMethods<Methods>({
  get: ({ values }) => ({
    status: 200,
    resBody: users.filter((user) => user.id === values.id)[0],
  }),
})
