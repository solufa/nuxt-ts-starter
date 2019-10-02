import { MockMethods } from 'axios-mock-server'
import { users } from './index'

const methods: MockMethods = {
  get: ({ values }) => [200, users.find(user => user.id === values.id)]
}

export default methods
