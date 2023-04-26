import axios from 'axios'

import { SERVICE_BACKEND_URL } from 'constants/constants'

const httpClient = axios.create({
  baseURL: SERVICE_BACKEND_URL,
  timeout: 60000,
  withCredentials: true,
})

export { httpClient }
