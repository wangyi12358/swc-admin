import request from '@/utils/request'

export function profile() {
  return request<API.UserInfo>('/api/profile', {
    method: 'get'
  })
}

export function login(data: API.LoginParams) {
  return request<API.LoginRes>('/api/login', {
    notAuthorization: true,
    method: 'post',
    data
  })
}
