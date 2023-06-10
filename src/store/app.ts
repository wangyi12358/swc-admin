import { create } from 'zustand'
import mock from 'mockjs'

interface AppStore {
  userInfo?: API.UserInfo
}

interface AppActions {
  setUserInfo(userInfo: API.UserInfo): void
}

export const useAppStore = create<AppStore & AppActions>((set) => ({
  userInfo: {
    id: mock.Random.integer(0, 100),
    username: mock.Random.name(),
    avatar: 'https://joeschmoe.crstauf.workers.dev/api/v1/random',
    createTime: new Date(mock.Random.date())
  },
  setUserInfo: (userInfo) => set((state) => ({
    ...state,
    userInfo
  }))
}))
