import axios from 'axios'
import axiosRetry from 'axios-retry'

import { SERVICE_BACKEND_URL } from 'constants/constants'

const httpClient = axios.create({
  baseURL: SERVICE_BACKEND_URL,
  timeout: 3000,
  withCredentials: true,
})

axiosRetry(httpClient, { retries: 3, retryDelay: () => 500 })

export { httpClient }
