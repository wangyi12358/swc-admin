import { create } from 'zustand'

interface AppStore {
  userInfo?: API.UserInfo
}

interface AppActions {
  setUserInfo(userInfo: API.UserInfo): void
}

export const useAppStore = create<AppStore & AppActions>((set) => ({
  setUserInfo: (userInfo) => set((state) => ({
    ...state,
    userInfo
  }))
}))
