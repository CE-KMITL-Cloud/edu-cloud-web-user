import { httpAppClient } from 'api/httpClient'

class ConsoleApi {
  /**
   *
   * @param node
   * @param vmid
   * @param username
   * @returns
   */
  public async fetchConsoleVM(node: string, vmid: string, username: string) {
    try {
      const response = await httpAppClient.get(`/node/${node}/vm/${vmid}/console?username=${username}`, {})
      return response.data.message
    } catch (error) {
      console.error('Error fetching instances :', error)
    }
  }

  /**
   *
   * @param username
   * @param node
   * @param vmid
   * @returns
   */
  public async vncProxy(username: string, node: string, vmid: number) {
    try {
      const requestBody = {
        node: node,
        vmid: vmid,
      }
      const response = await httpAppClient.post(`/vm/vncproxy?username=${username}`, requestBody, {
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true,
      })
      return response.data.message.data
    } catch (error) {
      console.error('Error starting instance :', error)
    }
  }
}

export const consoleApi = new ConsoleApi()
