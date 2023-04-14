import { makeAutoObservable } from 'mobx'

class AccountStore {
  public email: string | undefined = undefined
  public name: string | undefined = undefined

  public isLoggedIn: boolean = false

  constructor() {
    makeAutoObservable(this)
  }

  public setEmail = (email: string | undefined) => {
    this.email = email
  }

  public setName = (name: string | undefined) => {
    this.name = name
  }

  public setIsLoggedIn = (isLoggedIn: boolean) => {
    this.isLoggedIn = isLoggedIn
  }
}

export const accountStore = new AccountStore()
