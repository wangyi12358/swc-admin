
interface Option {
  label: string;
  value: string | number
  status?: string;
}

// 转换 Options 为 Map
export function convertOptionsToMap(options: Option[]) {
  return options.reduce((map, option) => {
    map[option.value] = {
      text: option.label,
      ...option
    }
    return map
  }, {} as Record<string, { text: string; status?: string }>)
}

export const BASE_FLAG: Option[] = [
  {
    label: '是',
    value: 1
  },
  {
    label: '否',
    value: 0
  }
]

export const BASE_FLAG_MAP = convertOptionsToMap(BASE_FLAG)

export const BASE_STATUS_FLAG: Option[] = [
  {
    label: '启用',
    value: 1,
    status: 'success'
  },
  {
    label: '禁用',
    value: 0,
    status: 'error'
  }
]