import axios from 'axios'
import jwt_decode from 'jwt-decode'

import { authApi } from 'api/backend/authentication/auth'

import { ACCESS_TOKEN_KEY, REFRESH_TOKEN_KEY } from 'constants/storageKey'

import { accountStore } from 'store/account-store'

import { getJwtTokenData } from 'utils/jwt'

import { FunctionResult, JwtPayload, Role, isRole } from 'types'
import { LoginStatus } from 'types/enums'

class AuthService {
  /**
   * @returns isExpire
   */
  public isRefreshTokenInvalid(): boolean {
    const refreshToken = localStorage.getItem(REFRESH_TOKEN_KEY)
    if (!refreshToken) {
      return true
    }

    const { exp } = getJwtTokenData(refreshToken)
    return exp * 1000 < Date.now()
  }

  public initUser() {
    const refreshToken = localStorage.getItem(REFRESH_TOKEN_KEY)
    if (!refreshToken) {
      return
    }

    const tokenParts = jwt_decode<JwtPayload>(refreshToken)
    const isRefreshToken: boolean | undefined = tokenParts.isRefreshToken

    if (!isRefreshToken) {
      this.logout()
      return
    }

    const email: string = tokenParts.email
    const name: string = tokenParts.name
    const role: string = tokenParts.role

    isRole(role) ? accountStore.setRole(role) : accountStore.setRole('unknown')
    accountStore.setEmail(email)
    accountStore.setName(name)
    accountStore.setIsLoggedIn(true)
  }

  public logout() {
    localStorage.removeItem(ACCESS_TOKEN_KEY)
    localStorage.removeItem(REFRESH_TOKEN_KEY)
    accountStore.setEmail(undefined)
    accountStore.setName(undefined)
    accountStore.setIsLoggedIn(false)
  }

  /**
   *
   * @param name name
   * @param email Email
   * @param password Password
   * @returns isSuccess
   */
  public async register(name: string, email: string, password: string, role: Role): Promise<FunctionResult> {
    try {
      const { accessToken, refreshToken, tokenType } = await authApi.register({
        name,
        email,
        password,
        role,
      })
      if (tokenType === 'Bearer') {
        localStorage.setItem(ACCESS_TOKEN_KEY, accessToken)
        localStorage.setItem(REFRESH_TOKEN_KEY, refreshToken)

        this.initUser()

        return { success: true }
      }
    } catch (err) {
      console.error(err)
      if (axios.isAxiosError(err)) {
        if (Array.isArray(err.response?.data?.message)) {
          return { success: false, message: err.response?.data?.message?.join('\n') }
        }
        return { success: false, message: err.response?.data?.message }
      } else if (err instanceof Error) {
        return { success: false, message: err.message ?? '' }
      }
    }
    return { success: false }
  }

  /**
   *
   * @param email Email
   * @param password Password
   * @returns LoginStatus
   */
  public async login(email: string, password: string): Promise<LoginStatus> {
    try {
      const { accessToken, refreshToken, tokenType } = await authApi.login({ email, password })
      if (tokenType === 'Bearer') {
        localStorage.setItem(ACCESS_TOKEN_KEY, accessToken)
        localStorage.setItem(REFRESH_TOKEN_KEY, refreshToken)

        this.initUser()

        return LoginStatus.SUCCESS
      }
    } catch (err) {
      console.error(err)
      if (axios.isAxiosError(err)) {
        if (err.response?.status === 401) {
          return LoginStatus.UNAUTHORIZED
        }
      }
    }
    return LoginStatus.FAIL
  }

  /**
   *
   * @param refreshToken Refresh-Token
   * @returns isSuccess
   */
  public async refresh(refreshToken: string): Promise<boolean> {
    try {
      const {
        accessToken: newAccessToken,
        refreshToken: newRefreshToken,
        tokenType,
      } = await authApi.refresh({ refreshToken })
      if (tokenType === 'Bearer') {
        localStorage.setItem(ACCESS_TOKEN_KEY, newAccessToken)
        localStorage.setItem(REFRESH_TOKEN_KEY, newRefreshToken)
        this.initUser()
        return true
      }
    } catch (err) {
      console.error(err)
    }
    return false
  }

  public async changePassword(currentPassword: string, newPassword: string): Promise<FunctionResult> {
    try {
      await authApi.changePassword(currentPassword, newPassword)
      return { success: true }
    } catch (err) {
      console.error(err)
      if (err instanceof Error) {
        return { success: false, message: err.message }
      }
      return { success: false }
    }
  }
}

export const authService = new AuthService()
