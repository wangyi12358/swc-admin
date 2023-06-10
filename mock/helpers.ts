export function ok<D>(data: D) {
  return {
    code: 0,
    data,
    message: 'success'
  }
}
