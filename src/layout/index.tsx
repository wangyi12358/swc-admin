import React, { Suspense, useEffect } from 'react'
import {
  Link,
  useRoutes
} from 'react-router-dom'
import { ProLayout, Settings } from '@ant-design/pro-components'
import { route } from '@/common/const/route'
import Loading from '@/components/loading'
import { ConfigProvider } from 'antd'
import { theme } from './theme'
import routes from '~react-pages'
import { useAppStore } from '@/store/app'
import { profile } from '@/services/api'

const layoutSettings: Settings = {
  navTheme: 'light',
  layout: 'mix',
  contentWidth: 'Fluid',
  fixedHeader: false,
  fixSiderbar: true,
  title: 'SWC Admin',
}

const LayoutPage = React.memo(() => {
  const { userInfo, setUserInfo } = useAppStore()
  const pages = useRoutes(routes)

  useEffect(() => {
    profile().then(user => {
      if (user) setUserInfo(user)
    })
  }, [])

  if (!userInfo) {
    return <Loading />
  }

  return (
    <ConfigProvider theme={{ token: theme }}>
      <ProLayout
        logo="/vite.svg"
        {...layoutSettings}
        siderWidth={208}
        token={{
          header: {
          },
        }}
        menuItemRender={(item, dom) => {
          return (
            <Link to={item.path ?? ''}>
              {dom}
            </Link>
          )
        }}
        avatarProps={{
          src: userInfo.avatar,
          size: 'small',
          title: userInfo.username,
        }}
        route={route}
      >
        <Suspense fallback={<Loading />}>
          {pages}
        </Suspense>
      </ProLayout>
    </ConfigProvider>
  )
})

export default LayoutPage
