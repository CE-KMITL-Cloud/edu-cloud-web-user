import axios from 'axios'
import axiosRetry from 'axios-retry'

import { AUTH_BACKEND_URL } from 'constants/constants'

const httpClient = axios.create({
  baseURL: AUTH_BACKEND_URL,
  timeout: 5000,
})

axiosRetry(httpClient, { retries: 3, retryDelay: () => 500 })

export { httpClient }
