import React, { Suspense } from 'react'
import { Layout } from 'antd'
import Header from './header'
import Sider from './sider'
import {
  useRoutes,
} from 'react-router-dom'
import routes from '~react-pages'

const LayoutPage = React.memo(() => {

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header />
      <Layout>
        <Sider />
        <Layout>
          <Suspense fallback={<p>Loading...</p>}>
            {useRoutes(routes)}
          </Suspense>
        </Layout>
      </Layout>
    </Layout>
  )
})

export default LayoutPage
