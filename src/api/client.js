import axios from 'axios'

const BASE_URL = 'https://e-commerce-api-v3.nt.azimumarov.uz/api/v1'

const apiClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

export { apiClient }
