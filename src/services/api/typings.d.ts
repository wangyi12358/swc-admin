
declare namespace API {
  interface Result<D = null> {
    data?: D
    code: number
    message?: string
  }
}
