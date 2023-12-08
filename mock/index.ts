import { MockMethod } from 'vite-plugin-mock'
import { ok } from './helpers'
import mock from 'mockjs'

export default [
  {
    url: '/api/profile',
    method: 'get',
    async rawResponse(_, res) {
      res.statusCode = 200
      const data = {
        id: mock.Random.integer(0, 100),
        username: mock.Random.name(),
        avatar: 'https://joeschmoe.crstauf.workers.dev/api/v1/random',
        createTime: new Date(mock.Random.date())
      }
      res.end(ok(data))
    }
  },
  {
    url: '/api/login',
    method: 'post',
    async rawResponse(req, res) {

    }
  }
] as MockMethod[]
