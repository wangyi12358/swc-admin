import { atom } from 'jotai'
import mock from 'mockjs'

interface AppStore {
  userInfo?: API.UserInfo
}


export const appAtom = atom<AppStore>({
  userInfo: {
    id: mock.Random.integer(0, 100),
    username: mock.Random.name(),
    avatar: 'https://joeschmoe.crstauf.workers.dev/api/v1/random',
    createTime: new Date(mock.Random.date())
  },
})
