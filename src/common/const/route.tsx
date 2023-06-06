import { ProLayoutProps } from '@ant-design/pro-components'
import { HomeOutlined, MoneyCollectOutlined } from '@ant-design/icons'

export const route: ProLayoutProps['route'] = {
  children: [
    {
      path: '/',
      name: '首页',
      icon: <HomeOutlined />
    },
    {
      path: '/order',
      name: '订单',
      icon: <MoneyCollectOutlined />,
      children: [
        {
          name: '订单列表',
          path: 'list'
        }
      ]
    }
  ]
}
