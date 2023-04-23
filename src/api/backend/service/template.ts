import { httpClient } from 'api/httpClient'

class TemplatesApi {
  public async fetchTemplates(username: string) {
    try {
      const response = await httpClient.get(`/vm/template/list?username=${username}`, {
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true,
      })
      return response.data.message
    } catch (error) {
      console.error('Error fetching templates :', error)
    }
  }
}

export const templatesApi = new TemplatesApi()
