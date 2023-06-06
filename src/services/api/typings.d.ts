
declare namespace API {
  interface Result<D> {
    data?: D
    code: number
    message?: string
  }
}
