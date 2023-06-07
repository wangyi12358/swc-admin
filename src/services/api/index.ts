import request from '@/utils/request'

export function profile() {
  return request('/api/profile', {
    method: 'get'
  })
}

export function login() {
  return request('/api/login', {
    notAuthorization: true,
    method: 'get'
  })
}
