import { httpClient } from 'api/httpClient'
import { CreateInstance } from 'types/instance'

class InstancesApi {
  public async fetchInstances(username: string) {
    try {
      const response = await httpClient.get(`/vm/list?username=${username}`, {
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true,
      })
      return response.data.message
    } catch (error) {
      console.error('Error fetching instances :', error)
    }
  }

  public async createInstance(
    instance: CreateInstance,
    sender: string,
  ): Promise<{ success: boolean; message?: string; warning?: string }> {
    try {
      const response = await httpClient.post(`/vm/create?username=${sender}`, instance)
      return { success: true, message: response.data.message }
    } catch (error) {
      console.error('Error creating instance', error)
      return { success: false, warning: 'Error creating instance' }
    }
  }
}

export const instancesApi = new InstancesApi()
