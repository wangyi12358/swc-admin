import routes from '~react-pages'
import type { RouteObject } from 'react-router'
import { MenuDataItem } from '@ant-design/pro-components'


function formatRoute(route: RouteObject): MenuDataItem {
  return {
    name: route.path,
    path: route.path,
    key: route.path
  }
}

console.log('routes==', routes)

export const menuData = routes.map(route => {
  return formatRoute(route)
})
