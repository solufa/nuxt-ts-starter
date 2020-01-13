import { MockMethods } from 'axios-mock-server'

export const users = [
  { firstname: 'Franklin', lastname: 'Potter' },
  { firstname: 'Hamaad', lastname: 'Collins' },
  { firstname: 'Morris', lastname: 'Dejesus' }
].map((user, id) => ({ id, ...user }))

export type Users = typeof users

export interface Methods {
  get: {
    resData: Users
  }

  post: {
    reqData: Omit<Users[0], 'id'>
  }
}

const methods: MockMethods = {
  get: () => [200, users],

  post: ({ data }: { data: Methods['post']['reqData'] }) => {
    users.push({
      id: users.length,
      firstname: data.firstname,
      lastname: data.lastname
    })

    return [201]
  }
}

export default methods
