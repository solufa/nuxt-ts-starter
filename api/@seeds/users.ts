import type { ApiUser, UserId } from '~/types'

export const users: ApiUser[] = [
  { firstname: 'Franklin', lastname: 'Potter' },
  { firstname: 'Hamaad', lastname: 'Collins' },
  { firstname: 'Morris', lastname: 'Dejesus' },
].map((user, id) => ({ id: id as UserId, ...user }))
