import { httpClient } from 'api/httpClient'

class UserApi {
  public async fetchStudents(sender: string) {
    try {
      const response = await httpClient.get(`/user/group/student/list?username=${sender}`)
      return response.data.message
    } catch (error) {
      console.error('Error fetching students :', error)
    }
    return [] // Return an empty array in case of no data or error
  }
}

export const userApi = new UserApi()
