import type { FC } from 'react'
import { memo } from 'react'
import { Layout, Menu, theme } from 'antd'

const { Sider } = Layout

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface SiderPageProps {
}

const SiderPage: FC<SiderPageProps> = memo(() => {

  const {
    token: { colorBgContainer },
  } = theme.useToken()

  return (
    <Sider style={{ backgroundColor: colorBgContainer }}>
      <Menu
        items={[
          {
            label: '测试',
            key: 'test',
          },
          {
            label: '测试2',
            key: 'test2'
          }
        ]}
      />
    </Sider>
  )
})

export default SiderPage
