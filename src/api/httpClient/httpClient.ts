import axios from 'axios'
import axiosRetry from 'axios-retry'

import { BACKEND_URL } from 'constants/constants'

const httpClient = axios.create({
  baseURL: BACKEND_URL,
  timeout: 5000,
})

axiosRetry(httpClient, { retries: 3, retryDelay: () => 500 })

export { httpClient }
