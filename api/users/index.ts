import { mockMethods } from 'aspida-mock'

export const users = [
  { firstname: 'Franklin', lastname: 'Potter' },
  { firstname: 'Hamaad', lastname: 'Collins' },
  { firstname: 'Morris', lastname: 'Dejesus' },
].map((user, id) => ({ id, ...user }))

export type User = typeof users[0]

export type Methods = {
  get: {
    resBody: User[]
  }

  post: {
    reqBody: Omit<User, 'id'>
  }
}

export default mockMethods<Methods>({
  get: () => ({ status: 200, resBody: users }),

  post: ({ reqBody }) => {
    users.push({
      id: users.length,
      firstname: reqBody.firstname,
      lastname: reqBody.lastname,
    })

    return { status: 201 }
  },
})
