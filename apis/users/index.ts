import { MockMethods } from 'axios-mock-server'
import faker from 'faker'

export const users = [...Array(5)].map((_, id) => ({
  id,
  firstname: faker.name.firstName(),
  lastname: faker.name.lastName()
}))

export type Users = typeof users

export interface Methods {
  get: {
    response: Users
  }

  post: {
    data: Omit<Users[0], 'id'>
  }
}

const methods: MockMethods = {
  get: () => [200, users],

  post: ({ data }: { data: Methods['post']['data'] }) => {
    users.push({
      id: users.length,
      firstname: data.firstname,
      lastname: data.lastname
    })

    return [201]
  }
}

export default methods
