import Vuex from 'vuex'
import {
  createModule,
  mutation,
  action,
  extractVuexModule,
  createProxy
} from 'vuex-class-component'

const VuexModule = createModule({
  namespaced: true,
  target: 'nuxt'
})

export class UserStore extends VuexModule {
  private firstname = 'Michael'
  private lastname = 'Olofinjana'
  specialty = 'JavaScript'

  @mutation clearName() {
    this.firstname = ''
    this.lastname = ''
  }

  @mutation changeName({
    firstname,
    lastname
  }: {
    firstname: string
    lastname: string
  }) {
    this.firstname = firstname
    this.lastname = lastname
  }

  @action doSomethingAsync() {
    return $nuxt.$aspida.users.$get()
  }

  @action async doAnotherAsyncStuff(payload: number) {
    const users = await this.doSomethingAsync()
    const { firstname, lastname } = users[payload]
    this.changeName({ firstname, lastname })
    return payload
  }

  get fullname() {
    return this.lastname + ' ' + this.firstname
  }

  set fullname(name: string) {
    const names = name.split(' ')
    this.firstname = names[0]
    this.lastname = names[1]
  }

  get bio() {
    return `Name: ${this.fullname} Specialty: ${this.specialty}`
  }
}

export const store = new Vuex.Store({
  modules: {
    ...extractVuexModule(UserStore)
  }
})

export default createProxy(store, UserStore)
