import { httpClient } from 'api/httpClient'

class PoolsApi {
  public async fetchMemberPools(username: string) {
    try {
      const poolsResponse = await httpClient.get(`/pool/list?username=${username}`)
      return poolsResponse.data.message
    } catch (error) {
      console.error('Error fetching by member pools:', error)
    }
    return [] // Return an empty array in case of no data or error
  }

  public async fetchOwnerPools(sender: string, owner: string) {
    try {
      const poolsResponse = await httpClient.get(`/pool/owner/${owner}?username=${sender}`)
      return poolsResponse.data.message
    } catch (error) {
      console.error('Error fetching by owner pools:', error)
    }
    return [] // Return an empty array in case of no data or error
  }

  public async fetchPool(sender: string, owner: string, code: string) {
    try {
      const poolResponse = await httpClient.get(`/pool/${code}/owner/${owner}?username=${sender}`)
      return poolResponse.data.message
    } catch (error) {
      console.error('Error fetching by code, owner pool:', error)
    }
    return [] // Return an empty array in case of no data or error
  }

  public async DeletePool(sender: string, owner: string, code: string) {
    try {
      const poolResponse = await httpClient.delete(`/pool/${code}/owner/${owner}?username=${sender}`)
      return poolResponse.data.message
    } catch (error) {
      console.error('Error fetching by code, owner pool:', error)
    }
    return [] // Return an empty array in case of no data or error
  }

  public async AddInstancePool(sender: string, owner: string, code: string, vmid: string) {
    try {
      const requestBody = {
        vmid: vmid,
      }
      const poolResponse = await httpClient.post(
        `/pool/${code}/owner/${owner}/instances/add?username=${sender}`,
        requestBody,
      )
      return poolResponse.data.message
    } catch (error) {
      console.error('Error fetching by code, owner pool:', error)
    }
    return [] // Return an empty array in case of no data or error
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
      const poolResponse = await httpClient.post(`/pool/create?username=${sender}`, requestBody)
      return { success: true, message: poolResponse.data.message }
    } catch (error) {
      console.error('Error creating pool', error)
      return { success: false, warning: 'Error creating pool' }
    }
  }
}

export const poolsApi = new PoolsApi()
