import React, { Suspense } from 'react'
import {
  useRoutes,
  Link
} from 'react-router-dom'
import routes from '~react-pages'
import { ProLayout, Settings } from '@ant-design/pro-components'
import { route } from '@/common/const/route'
import Loading from '@/components/loading'

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
    <ProLayout
      logo="/vite.svg"
      {...layoutSettings}
      siderWidth={208}
      token={{
        header: {
          colorBgHeader: '#292f33',
          colorHeaderTitle: '#fff',
          colorTextMenu: '#dfdfdf',
          colorTextMenuSecondary: '#dfdfdf',
          colorTextMenuSelected: '#fff',
          colorBgMenuItemSelected: '#22272b',
          colorTextRightActionsItem: '#dfdfdf',
        },
        sider: {
          colorMenuBackground: '#fff',
          colorMenuItemDivider: '#dfdfdf',
          colorTextMenu: '#595959',
          colorTextMenuSelected: 'rgba(42,122,251,1)',
          colorBgMenuItemSelected: 'rgba(230,243,254,1)',
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
  )
})

export default LayoutPage
