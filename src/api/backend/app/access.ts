import { httpAppClient } from 'api/httpClient'

class AccessApi {
  public async fetchTicket(
    username: string,
    password: string,
  ): Promise<{
    success: boolean
    message?: string
    warning?: string
  }> {
    try {
      const requestBody = {
        username: username,
        password: password,
      }
      const response = await httpAppClient.post(`/access/ticket`, requestBody, {
        withCredentials: true,
      })
      return { success: true, message: response.data.message }
    } catch (error) {
      console.error('Error getting ticket', error)
      return { success: false, warning: 'Error getting ticket' }
    }
  }
}

export const accessApi = new AccessApi()
