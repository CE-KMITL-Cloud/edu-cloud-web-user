import { httpClient } from 'api/httpClient'

class ClusterApi {
  public async fetchOs() {
    try {
      const response = await httpClient.get(`/cluster/storage/iso/list`)
      return response.data.message
    } catch (error) {
      console.error('Error fetching Os :', error)
    }
  }

  public async fetchStorages() {
    try {
      const response = await httpClient.get(`/cluster/storage/list`)
      return response.data.message
    } catch (error) {
      console.error('Error fetching storages :', error)
    }
  }
}

export const clusterApi = new ClusterApi()
