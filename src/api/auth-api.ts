import { USER_STORAGE_KEY } from 'constants/storageKey'

import { users } from 'mock/users'

import { createResourceId } from 'utils/create-resource-id'
import { JWT_EXPIRES_IN, JWT_SECRET, decode, sign } from 'utils/jwt'
import { wait } from 'utils/wait'

import { type User } from 'types'

const getPersistedUsers = (): User[] => {
  try {
    const data = sessionStorage.getItem(USER_STORAGE_KEY)

    if (!data) {
      return []
    }

    return JSON.parse(data) as User[]
  } catch (err) {
    console.error(err)
    return []
  }
}

const persistUser = (user: User): void => {
  try {
    const users = getPersistedUsers()
    const data = JSON.stringify([...users, user])
    sessionStorage.setItem(USER_STORAGE_KEY, data)
  } catch (err) {
    console.error(err)
  }
}

class AuthApi {
  async signIn(request: { email: string; password: string }): Promise<{
    accessToken: string
  }> {
    const { email, password } = request

    await wait(500)

    return new Promise((resolve, reject) => {
      try {
        // * Merge static users (data file) with persisted users (browser storage)
        const mergedUsers = [...users, ...getPersistedUsers()]

        const user = mergedUsers.find((user) => user.email === email)

        if (!user || user.password !== password) {
          reject(new Error('Please check your email and password'))
          return
        }

        // * Create the access token
        const accessToken = sign({ userId: user.id }, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN })

        resolve({ accessToken })
      } catch (err) {
        console.error('[Auth Api]: ', err)
        reject(new Error('Internal server error'))
      }
    })
  }

  async signUp(request: { email: string; name: string; password: string }): Promise<{
    accessToken: string
  }> {
    const { email, name, password } = request

    await wait(1000)

    return new Promise((resolve, reject) => {
      try {
        // * Merge static users (data file) with persisted users (browser storage)
        const mergedUsers = [...users, ...getPersistedUsers()]

        //  *Check if a user already exists
        let user = mergedUsers.find((user) => user.email === email)

        if (user) {
          reject(new Error('User already exists'))
          return
        }

        user = {
          id: createResourceId(),
          avatar: undefined,
          email,
          name,
          password,
          plan: 'Standard',
        }

        persistUser(user)

        const accessToken = sign({ userId: user.id }, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN })

        resolve({ accessToken })
      } catch (err) {
        console.error('[Auth Api]: ', err)
        reject(new Error('Internal server error'))
      }
    })
  }

  me(request: { accessToken: string }): Promise<User> {
    const { accessToken } = request

    return new Promise((resolve, reject) => {
      try {
        // * Decode access token
        const decodedToken = decode(accessToken) as any

        // * Merge static users (data file) with persisted users (browser storage)
        const mergedUsers = [...users, ...getPersistedUsers()]

        const user = mergedUsers.find((user) => user.id === decodedToken.userId)

        if (!user) {
          reject(new Error('Invalid authorization token'))
          return
        }

        resolve({
          id: user.id,
          avatar: user.avatar,
          email: user.email,
          name: user.name,
          plan: user.plan,
        })
      } catch (err) {
        console.error('[Auth Api]: ', err)
        reject(new Error('Internal server error'))
      }
    })
  }
}

export const authApi = new AuthApi()
