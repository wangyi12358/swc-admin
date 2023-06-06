import { create } from 'zustand'

interface AppStore {
  userInfo: {
    avatar: string;
    username: string
  }
}

export const useAppStore = create<AppStore>((set) => ({
  userInfo: {
    avatar: '/vite.svg',
    username: 'username',
  },
  setUserInfo: (userInfo: AppStore['userInfo']) => set((state) => ({
    ...state,
    userInfo
  }))
}))
