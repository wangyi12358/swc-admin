import request from '@/utils/request'

export function profile() {
  return request.get('/api/profile', {
    not: 1,
    method: 'get'
  })
}
