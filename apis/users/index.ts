import { mockMethods } from 'aspida-mock'

export const users = [
  { firstname: 'Franklin', lastname: 'Potter' },
  { firstname: 'Hamaad', lastname: 'Collins' },
  { firstname: 'Morris', lastname: 'Dejesus' }
].map((user, id) => ({ id, ...user }))

export type User = typeof users[0]

export interface Methods {
  get: {
    resData: User[]
  }

  post: {
    reqData: Omit<User, 'id'>
  }
}

export default mockMethods<Methods>({
  get: () => ({ status: 200, resData: users }),

  post: ({ reqData }) => {
    users.push({
      id: users.length,
      firstname: reqData.firstname,
      lastname: reqData.lastname
    })

    return { status: 201 }
  }
})
