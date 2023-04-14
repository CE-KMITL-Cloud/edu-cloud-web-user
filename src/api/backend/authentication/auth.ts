import { httpAuthClient, httpClient } from 'api/httpClient'

import { TokenResponse } from 'types/dto/auth'

class AuthApi {
  public async register(data: { email: string; password: string; name: string }): Promise<TokenResponse> {
    const response = await httpClient.post<TokenResponse>('/auth/user/register', data)

    // * If register success, backend send status `201`
    if (response.status === 201) {
      return response.data
    }

    throw new Error(`[authApi.register] response with status ${response.status}`)
  }

  public async login(data: { email: string; password: string }): Promise<TokenResponse> {
    const response = await httpClient.post<TokenResponse>('/auth/user/login', data)

    // * If register success, backend send status `201`
    if (response.status === 201) {
      return response.data
    }

    throw new Error(`[authApi.login] response with status ${response.status}`)
  }

  public async refresh(data: { refreshToken: string }): Promise<TokenResponse> {
    const response = await httpClient.post<TokenResponse>('/auth/user/token', data)

    // * If refresh success, backend send status `201`
    if (response.status === 201) {
      return response.data
    }

    throw new Error(`[authApi.refresh] response with status ${response.status}`)
  }

  public async changePassword(currentPassword: string, newPassword: string): Promise<void> {
    const data = {
      oldPassword: currentPassword,
      newPassword: newPassword,
    }

    const response = await httpAuthClient.post('/auth/user/change-password', data)

    if (response.status === 201) {
      return
    }

    throw new Error(`[authApi.changePassword] response with status ${response.status}`)
  }
}

export const authApi = new AuthApi()
