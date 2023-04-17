import { httpClient } from 'api/httpClient'

class PowerApi {
  public async startInstance(username: string, node: string, vmid: number) {
    try {
      const requestBody = {
        node: node,
        vmid: vmid,
      }
      const response = await httpClient.post(`/vm/status/start?username=${username}`, requestBody, {
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true,
      })
      return response.data.message
    } catch (error) {
      console.error('Error starting instance :', error)
    }
  }

  public async stopInstance(username: string, node: string, vmid: number) {
    try {
      const requestBody = {
        node: node,
        vmid: vmid,
      }
      const response = await httpClient.post(`/vm/status/stop?username=${username}`, requestBody, {
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true,
      })
      return response.data.message
    } catch (error) {
      console.error('Error stopping instance :', error)
    }
  }

  public async suspendInstance(username: string, node: string, vmid: number) {
    try {
      const requestBody = {
        node: node,
        vmid: vmid,
      }
      const response = await httpClient.post(`/vm/status/suspend?username=${username}`, requestBody, {
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true,
      })
      return response.data.message
    } catch (error) {
      console.error('Error suspending instance :', error)
    }
  }

  public async resumeInstance(username: string, node: string, vmid: number) {
    try {
      const requestBody = {
        node: node,
        vmid: vmid,
      }
      const response = await httpClient.post(`/vm/status/resume?username=${username}`, requestBody, {
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true,
      })
      return response.data.message
    } catch (error) {
      console.error('Error resuming instance :', error)
    }
  }

  public async resetInstance(username: string, node: string, vmid: number) {
    try {
      const requestBody = {
        node: node,
        vmid: vmid,
      }
      const response = await httpClient.post(`/vm/status/reset?username=${username}`, requestBody, {
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true,
      })
      return response.data.message
    } catch (error) {
      console.error('Error resetting instance :', error)
    }
  }

  public async shutdownInstance(username: string, node: string, vmid: number) {
    try {
      const requestBody = {
        node: node,
        vmid: vmid,
      }
      const response = await httpClient.post(`/vm/status/shutdown?username=${username}`, requestBody, {
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true,
      })
      return response.data.message
    } catch (error) {
      console.error('Error shutting down instance :', error)
    }
  }
}

export const powerApi = new PowerApi()
