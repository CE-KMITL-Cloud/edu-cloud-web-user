import { httpClient } from 'api/httpClient'

class PoolsApi {
  public async fetchMemberPools(username: string) {
    try {
      const response = await httpClient.get(`/pool/list?username=${username}`)
      return response.data.message
    } catch (error) {
      console.error('Error fetching by member pools:', error)
    }
    return [] // Return an empty array in case of no data or error
  }

  public async fetchOwnerPools(sender: string, owner: string) {
    try {
      const response = await httpClient.get(`/pool/owner/${owner}?username=${sender}`)
      return response.data.message
    } catch (error) {
      console.error('Error fetching by owner pools:', error)
    }
    return [] // Return an empty array in case of no data or error
  }

  public async fetchPool(sender: string, owner: string, code: string) {
    try {
      const response = await httpClient.get(`/pool/${code}/owner/${owner}?username=${sender}`)
      return response.data.message
    } catch (error) {
      console.error('Error fetching by code, owner pool:', error)
    }
    return [] // Return an empty array in case of no data or error
  }

  public async fetchRemainingStudents(sender: string, owner: string, code: string) {
    try {
      const response = await httpClient.get(`/pool/${code}/owner/${owner}/members/remain?username=${sender}`)
      return response.data.message
    } catch (error) {
      console.error('Error fetching remaining students :', error)
    }
    return [] // Return an empty array in case of no data or error
  }

  public async DeletePool(sender: string, owner: string, code: string) {
    try {
      const response = await httpClient.delete(`/pool/${code}/owner/${owner}?username=${sender}`)
      return response.data.message
    } catch (error) {
      console.error('Error deleting pool from given code, owner pool:', error)
    }
    return [] // Return an empty array in case of no data or error
  }

  public async AddInstancePool(
    sender: string,
    owner: string,
    code: string,
    vmid: number,
  ): Promise<{ success: boolean; message?: string; warning?: string }> {
    try {
      const requestBody = {
        vmid: `${vmid}`,
      }
      const response = await httpClient.post(
        `/pool/${code}/owner/${owner}/instances/add?username=${sender}`,
        requestBody,
      )
      return { success: true, message: response.data.message }
    } catch (error) {
      console.error('Error adding vmid to pool :', error)
      return { success: false, warning: 'Error adding vmid to pool.' }
    }
  }

  public async AddMembersPool(
    sender: string,
    owner: string,
    code: string,
    members: string[],
  ): Promise<{ success: boolean; message?: string; warning?: string }> {
    try {
      const requestBody = {
        members: members,
      }
      const response = await httpClient.post(`/pool/${code}/owner/${owner}/members/add?username=${sender}`, requestBody)
      return { success: true, message: response.data.message }
    } catch (error) {
      console.error('Error adding vmid to pool :', error)
      return { success: false, warning: 'Error adding members to pool.' }
    }
  }

  public async CreatePool(
    sender: string,
    owner: string,
    code: string,
    name: string,
  ): Promise<{ success: boolean; message?: string; warning?: string }> {
    try {
      const requestBody = {
        code: code,
        owner: owner,
        name: name,
      }
      const response = await httpClient.post(`/pool/create?username=${sender}`, requestBody)
      return { success: true, message: response.data.message }
    } catch (error) {
      console.error('Error creating pool', error)
      return { success: false, warning: 'Error creating pool' }
    }
  }
}

export const poolsApi = new PoolsApi()
