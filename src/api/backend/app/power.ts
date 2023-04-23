import { httpAppClient } from 'api/httpClient'

class PowerApi {
  public async startInstance(
    username: string,
    node: string,
    vmid: number,
  ): Promise<{ success: boolean; message?: string; warning?: string }> {
    try {
      const requestBody = {
        node: node,
        vmid: vmid,
      }
      const response = await httpAppClient.post(`/vm/status/start?username=${username}`, requestBody, {
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true,
      })
      return { success: true, message: response.data.message }
    } catch (error) {
      console.error('Error starting instance :', error)
      return { success: false, warning: 'Error editing instance' }
    }
  }

  public async stopInstance(
    username: string,
    node: string,
    vmid: number,
  ): Promise<{ success: boolean; message?: string; warning?: string }> {
    try {
      const requestBody = {
        node: node,
        vmid: vmid,
      }
      const response = await httpAppClient.post(`/vm/status/stop?username=${username}`, requestBody, {
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true,
      })
      return { success: true, message: response.data.message }
    } catch (error) {
      console.error('Error stopping instance :', error)
      return { success: false, warning: 'Error editing instance' }
    }
  }

  public async suspendInstance(
    username: string,
    node: string,
    vmid: number,
  ): Promise<{ success: boolean; message?: string; warning?: string }> {
    try {
      const requestBody = {
        node: node,
        vmid: vmid,
      }
      const response = await httpAppClient.post(`/vm/status/suspend?username=${username}`, requestBody, {
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true,
      })
      return { success: true, message: response.data.message }
    } catch (error) {
      console.error('Error suspending instance :', error)
      return { success: false, warning: 'Error editing instance' }
    }
  }

  public async resumeInstance(
    username: string,
    node: string,
    vmid: number,
  ): Promise<{ success: boolean; message?: string; warning?: string }> {
    try {
      const requestBody = {
        node: node,
        vmid: vmid,
      }
      const response = await httpAppClient.post(`/vm/status/resume?username=${username}`, requestBody, {
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true,
      })
      return { success: true, message: response.data.message }
    } catch (error) {
      console.error('Error resuming instance :', error)
      return { success: false, warning: 'Error editing instance' }
    }
  }

  public async resetInstance(
    username: string,
    node: string,
    vmid: number,
  ): Promise<{ success: boolean; message?: string; warning?: string }> {
    try {
      const requestBody = {
        node: node,
        vmid: vmid,
      }
      const response = await httpAppClient.post(`/vm/status/reset?username=${username}`, requestBody, {
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true,
      })
      return { success: true, message: response.data.message }
    } catch (error) {
      console.error('Error resetting instance :', error)
      return { success: false, warning: 'Error editing instance' }
    }
  }

  public async shutdownInstance(
    username: string,
    node: string,
    vmid: number,
  ): Promise<{ success: boolean; message?: string; warning?: string }> {
    try {
      const requestBody = {
        node: node,
        vmid: vmid,
      }
      const response = await httpAppClient.post(`/vm/status/shutdown?username=${username}`, requestBody, {
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true,
      })
      return { success: true, message: response.data.message }
    } catch (error) {
      console.error('Error shutting down instance :', error)
      return { success: false, warning: 'Error editing instance' }
    }
  }
}

export const powerApi = new PowerApi()
