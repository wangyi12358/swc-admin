import axios, { AxiosResponse } from 'axios'
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

async function interceptorRes(response: AxiosResponse) {
  // 这里去做错误拦截
  return response
}

interface Config extends AxiosRequestConfig {
  // true代表不需要授权
  notAuthorization?: boolean
}

export default function<R = null>(url: string, config: Config) {
  const instance = axios.create({
    baseURL: import.meta.env.BASE_URL,
  })
  if (!config.notAuthorization) {
    instance.interceptors.request.use(authInterceptorReq)
  }
  instance.interceptors.response.use(interceptorRes)
  return instance<API.Result<R>>(url, config)
    .then(d => d.data.data)
}
