import axios from 'axios'
import axiosRetry from 'axios-retry'

import { AUTH_BACKEND_URL } from 'constants/constants'
import { ACCESS_TOKEN_KEY, REFRESH_TOKEN_KEY } from 'constants/storageKey'

import { authService } from 'services/auth-service'

const httpUnauthClient = axios.create({
  baseURL: AUTH_BACKEND_URL,
  timeout: 5000,
})

const httpAuthClient = axios.create({
  baseURL: AUTH_BACKEND_URL,
  timeout: 5000,
})

httpAuthClient.interceptors.request.use(
  async (request) => {
    const accessToken = localStorage.getItem(ACCESS_TOKEN_KEY)
    if (accessToken) {
      request.headers!['Authorization'] = `Bearer ${accessToken}`
    }
    return request
  },
  async (error) => Promise.reject(error),
)

httpAuthClient.interceptors.response.use(
  async (response) => response,
  async (error) => {
    const originalRequest = error.config

    if (error.response.status === 401) {
      if (originalRequest._retry) {
        // * Still get 401 after refresh token.
        authService.logout()
        window.location.href = '/login'
        return Promise.reject(error)
      } else {
        originalRequest._retry = true

        const refreshToken = localStorage.getItem(REFRESH_TOKEN_KEY)
        if (!refreshToken) {
          authService.logout()
          window.location.href = '/login'
          return Promise.reject(error)
        }

        await authService.refresh(refreshToken)

        const newAccessToken = localStorage.getItem(ACCESS_TOKEN_KEY)
        if (!newAccessToken) {
          authService.logout()
          window.location.href = '/login'
          return Promise.reject(error)
        }

        originalRequest.headers['Authorization'] = `Bearer ${newAccessToken}`

        return httpAuthClient(originalRequest)
      }
    }

    return Promise.reject(error)
  },
)

axiosRetry(httpAuthClient, { retries: 3, retryDelay: () => 500 })

export { httpAuthClient, httpUnauthClient }
