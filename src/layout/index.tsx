import React, { Suspense } from 'react'
import {
  Link,
  useRoutes
} from 'react-router-dom'
import { ProLayout, Settings } from '@ant-design/pro-components'
import { route } from '@/common/const/route'
import Loading from '@/components/loading'
import { ConfigProvider } from 'antd'
import { theme } from './theme.ts'
import routes from '~react-pages'

const layoutSettings: Settings = {
  navTheme: 'light',
  layout: 'mix',
  contentWidth: 'Fluid',
  fixedHeader: false,
  fixSiderbar: true,
  title: 'SWC Admin',
}

const LayoutPage = React.memo(() => {

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
          src: '/vite.svg',
          size: 'small',
          title: 'username',
        }}
        route={route}
      >
        <Suspense fallback={<Loading />}>
          {useRoutes(routes)}
        </Suspense>
      </ProLayout>
    </ConfigProvider>
  )
})

export default LayoutPage
