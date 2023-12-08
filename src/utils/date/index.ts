import dayjs from 'dayjs'

export function formatDate(date?: number | Date | string, format = 'YYYY-MM-DD') {
  if (!date) return ''
  return dayjs(date).format(format)
}