import axiosCore from 'axios'

export const axios = axiosCore.create({
  baseURL: '/',
  timeout: 1000,
})
