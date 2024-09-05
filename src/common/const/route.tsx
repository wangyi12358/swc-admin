import { HomeOutlined, MoneyCollectOutlined } from '@ant-design/icons';
import type { ProLayoutProps } from '@ant-design/pro-components';

export const route: ProLayoutProps['route'] = {
  children: [
    {
      path: '/',
      name: '首页',
      icon: <HomeOutlined />,
    },
    {
      path: '/order',
      name: '订单',
      icon: <MoneyCollectOutlined />,
      children: [
        {
          name: '订单列表',
          path: 'list',
        },
      ],
    },
  ],
};
