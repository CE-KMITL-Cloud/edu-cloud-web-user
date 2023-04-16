import { httpClient } from 'api/httpClient'

class ConsoleApi {
  public async fetchConsoleVM(node: string, vmid: string, username: string) {
    try {
      const response = await httpClient.get(`/node/${node}/vm/${vmid}/console?username=${username}`, {
      })
      return response.data.message
    } catch (error) {
      console.error('Error fetching instances :', error)
    }
  }
}

export const consoleApi = new ConsoleApi()
