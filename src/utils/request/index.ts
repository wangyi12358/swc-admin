import axios from 'axios'
import type { AxiosRequestConfig, InternalAxiosRequestConfig } from 'axios'
import { getCookie } from '../cookie'

function redirectLogin() {
  if (process.env.NODE_ENV === 'development') return
  window.location.href = import.meta.env.LOGIN_URL
}

function getToken() {
  return getCookie(import.meta.env.TOKEN_KEY)
}

async function authInterceptorReq(config: InternalAxiosRequestConfig) {
  const token = getToken()

  if (!token) {
    redirectLogin()
  } else {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
}

interface Config extends AxiosRequestConfig {
  // true代表不需要授权
  notAuthorization?: boolean
}

export default function (url: string, config: Config) {
  const instance = axios.create({
    baseURL: import.meta.env.BASE_URL,
  })
  if (!config.notAuthorization) {
    instance.interceptors.request.use(authInterceptorReq)
  }
  return instance(url, config)
}
