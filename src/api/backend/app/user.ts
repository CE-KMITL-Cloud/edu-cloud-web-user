import { httpAppClient } from 'api/httpClient'

class UserApi {
  public async fetchStudents(sender: string) {
    try {
      const response = await httpAppClient.get(`/user/group/student/list?username=${sender}`)
      return response.data.message
    } catch (error) {
      console.error('Error fetching students :', error)
    }
    return [] // Return an empty array in case of no data or error
  }

  public async fetchFaculties(sender: string) {
    try {
      const response = await httpAppClient.get(`/user/group/faculty?username=${sender}`)
      return response.data.message
    } catch (error) {
      console.error('Error fetching faculties :', error)
    }
    return [] // Return an empty array in case of no data or error
  }

  public async fetchUserLimit(sender: string, username: string) {
    try {
      const response = await httpAppClient.get(`/user/${username}/limit?username=${sender}`)
      return response.data.message
    } catch (error) {
      console.error('Error fetching user limit :', error)
    }
    return [] // Return an empty array in case of no data or error
  }

  // public async UpdateUser(
  //   sender: string,
  //   username: string,
  //   code: string,
  //   members: string[],
  // ): Promise<{ success: boolean; message?: string; warning?: string }> {
  //   try {
  //     const requestBody = {
  //       members: members,
  //     }
  //     const response = await httpAppClient.post(`/pool/${code}/owner/${owner}/members/add?username=${sender}`, requestBody)
  //     return { success: true, message: response.data.message }
  //   } catch (error) {
  //     console.error('Error adding vmid to pool :', error)
  //     return { success: false, warning: 'Error adding members to pool.' }
  //   }
  // }

  // public async UpdateUserLimit(
  //   sender: string,
  //   owner: string,
  //   code: string,
  //   members: string[],
  // ): Promise<{ success: boolean; message?: string; warning?: string }> {
  //   try {
  //     const requestBody = {
  //       members: members,
  //     }
  //     const response = await httpAppClient.post(`/pool/${code}/owner/${owner}/members/add?username=${sender}`, requestBody)
  //     return { success: true, message: response.data.message }
  //   } catch (error) {
  //     console.error('Error adding vmid to pool :', error)
  //     return { success: false, warning: 'Error adding members to pool.' }
  //   }
  // }
}

export const userApi = new UserApi()
