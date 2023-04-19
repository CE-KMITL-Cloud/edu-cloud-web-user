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

  public async createTemplate(
    sender: string,
    node: string,
    vmid: number,
  ): Promise<{ success: boolean; message?: string; warning?: string }> {
    try {
      const requestBody = {
        node: node,
        vmid: vmid,
      }
      const response = await httpClient.post(`/vm/template?username=${sender}`, requestBody, {
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true,
      })
      return { success: true, message: response.data.message }
    } catch (error) {
      console.error('Error creating template', error)
      return { success: false, warning: 'Error creating template' }
    }
  }

  public async destroyInstance(
    sender: string,
    node: string,
    vmid: number,
  ): Promise<{ success: boolean; message?: string; warning?: string }> {
    try {
      const requestBody = {
        node: node,
        vmid: vmid,
      }
      const response = await httpClient({
        method: 'delete',
        url: `/vm/destroy?username=${sender}`,
        data: requestBody,
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true,
      })
      return { success: true, message: response.data.message }
    } catch (error) {
      console.error('Error destroying instance', error)
      return { success: false, warning: 'Error destroying instance' }
    }
  }

  public async editInstance(
    sender: string,
    node: string,
    vmid: number,
    cores: number,
    memory: number,
    disk: number,
  ): Promise<{ success: boolean; message?: string; warning?: string }> {
    try {
      const requestBody = {
        cores: cores,
        memory: memory,
        disk: disk,
      }
      const response = await httpClient.post(`/vm/edit?vmid=${vmid}&node=${node}&username=${sender}`, requestBody, {
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true,
      })
      return { success: true, message: response.data.message }
    } catch (error) {
      console.error('Error editing instance', error)
      return { success: false, warning: 'Error editing instance' }
    }
  }

  public async cloneInstance(
    sender: string,
    node: string,
    vmid: number,
    hostname: string,
    storage: string,
    ciuser: string,
    cipassword: string,
  ): Promise<{ success: boolean; message?: string; warning?: string }> {
    try {
      const requestBody = {
        name: hostname,
        storage: storage,
        ciuser: ciuser,
        cipassword: cipassword,
      }
      const response = await httpClient.post(`/vm/clone?vmid=${vmid}&node=${node}&username=${sender}`, requestBody, {
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true,
      })
      return { success: true, message: response.data.message }
    } catch (error) {
      console.error('Error cloning instance', error)
      return { success: false, warning: 'Error cloning instance' }
    }
  }
}

export const instancesApi = new InstancesApi()
