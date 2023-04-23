import axios from 'axios'

import { AUTH_BACKEND_URL } from 'constants/constants'

const httpClient = axios.create({
  baseURL: AUTH_BACKEND_URL,
  timeout: 5000,
})

export { httpClient }
