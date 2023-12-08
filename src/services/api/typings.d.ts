
declare namespace API {
  interface Result<D = null> {
    data?: D
    code: number
    message?: string
  }

  interface UserInfo {
    id: number
    username: string
    avatar: string
    createTime: Date
  }

  interface LoginParams {
    username: string
    password: string
  }

  interface LoginRes {
    token: string
  }
}
