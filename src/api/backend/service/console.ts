import { AxiosRequestConfig } from 'axios'

import { httpClient } from 'api/httpClient'

interface AxiosRequestConfigWithCredentials extends AxiosRequestConfig {
  credentials?: 'include' | 'omit'
}

class ConsoleApi {
  public async fetchConsoleVM(node: string, vmid: string, username: string) {
    try {
      const config: AxiosRequestConfigWithCredentials = {
        credentials: 'include',
      }

      const response = await httpClient.get(`/node/${node}/vm/${vmid}/console?username=${username}`, config)
      return response.data.message
    } catch (error) {
      console.error('Error fetching instances :', error)
    }
  }
}

export const consoleApi = new ConsoleApi()
