import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'
import { store } from './'

@Module({
  dynamic: true,
  store,
  name: 'users',
  stateFactory: true,
  namespaced: true
})
export class UsersStore extends VuexModule {
  private firstname = 'Michael'
  private lastname = 'Olofinjana'

  @Mutation
  clearName() {
    this.firstname = ''
    this.lastname = ''
  }

  @Mutation
  changeName({ firstname, lastname }: { firstname: string; lastname: string }) {
    this.firstname = firstname
    this.lastname = lastname
  }

  @Action
  doSomethingAsync() {
    return $nuxt.$api.users.$get()
  }

  @Action
  async doAnotherAsyncStuff(payload: number) {
    const users = await this.doSomethingAsync()
    const { firstname, lastname } = users[payload]
    this.changeName({ firstname, lastname })
    return payload
  }

  get fullname() {
    return `${this.lastname} ${this.firstname}`
  }
}
