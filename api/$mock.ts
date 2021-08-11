/* eslint-disable */
import { AspidaClient } from 'aspida'
import { MockClient, MockConfig, mockClient } from 'aspida-mock'
import api from './$api'
import mock0 from './users/index'
import mock1 from './users/_id'

export const mockRoutes = () => [
  { path: '/users', methods: mock0 },
  { path: '/users/_id', methods: mock1 }
]

export default <U>(client: AspidaClient<U> | MockClient<U>, config?: MockConfig) => {
  const mock = 'attachRoutes' in client ? client : mockClient(client)
  mock.attachRoutes(mockRoutes(), config)

  return api(mock)
}
