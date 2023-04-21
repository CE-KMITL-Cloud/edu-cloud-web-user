import { makeAutoObservable } from 'mobx'

import { Role } from 'types'

class AccountStore {
  public email: string | undefined = undefined
  public name: string | undefined = undefined
  public role: Role | undefined = undefined

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

  public setRole = (role: Role | undefined) => {
    this.role = role
  }

  public setIsLoggedIn = (isLoggedIn: boolean) => {
    this.isLoggedIn = isLoggedIn
  }
}

export const accountStore = new AccountStore()
