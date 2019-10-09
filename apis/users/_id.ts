import { MockMethods } from 'axios-mock-server'
import { users, Users } from './index'

const methods: MockMethods = {
  get: ({ values }) => [200, users.find((user) => user.id === values.id)]
}

export interface Methods {
  get: {
    response: Users
  }
}

export default methods
