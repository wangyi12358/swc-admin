

/**
 * 跳转至登陆页面
 * @param loginUrl 登陆界面url
 */
export function redirectLogin(loginUrl = location.origin) {
  const currentUrl = window.location.href
  window.location.href = `${loginUrl}?redirect=${encodeURIComponent(currentUrl)}`
}

type ParamsValue = string | number;
/**
 * https://baidu.com/{id} => https://baidu.com/1
 * 将请求参数拼接到url上
 * @param url
 * @param params
 */
export function splitParamsToUrl<P extends Record<string, ParamsValue>>(url: string, params: P): string {

  Object.keys(params).forEach(key => {
    url = url.replace(new RegExp(`{${key}}`), params[key].toString())
  })

  return url
}

/**
 * 获取当前主域名，当前是主域名就不返回
 */
export function getMainHost(): string | void {
  const key = `mh_${Math.random()}`
  const keyR = new RegExp(`(^|;)\\s*${key}=12345`)
  const expiredTime = new Date(0)
  const domain = document.domain
  const domainList = domain.split('.')

  const urlItems = []
  // 主域名一定会有两部分组成
  urlItems.unshift(domainList.pop())
  // 慢慢从后往前测试
  while (domainList.length) {
    urlItems.unshift(domainList.pop())
    const mainHost = urlItems.join('.')
    const cookie = `${key}=12345;domain=.${mainHost}`

    document.cookie = cookie

    //如果cookie存在，则说明域名合法
    if (keyR.test(document.cookie)) {
      document.cookie = `${cookie};expires=${expiredTime}`
      return mainHost
    }
  }
}

/**
 * 判断是否是url
 * @param path
 */
export function isUrl(path: string) {
  if (!path.startsWith('http')) {
    return false
  }
  try {
    const url = new URL(path)
    return !!url
  } catch (error) {
    return false
  }
}

/** 判断是否是图片链接 */
export function isImg(path: string): boolean {
  return /\w.(png|jpg|jpeg|svg|webp|gif|bmp)$/i.test(path)
}

/**
 * 获取url params参数
 * @param paraName params Key
 */
export function getUrlParam(paraName: string) {
  const url = document.location.toString()
  const arrObj = url.split('?')

  if (arrObj.length > 1) {
    const arrPara = arrObj[1].split('&')
    let arr

    for (let i = 0; i < arrPara.length; i++) {
      arr = arrPara[i].split('=')

      if (arr != null && arr[0] == paraName) {
        return arr[1]
      }
    }
  }
  return ''
}
