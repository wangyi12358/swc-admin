import React from 'react'
import { PageContainer, ProTable } from '@ant-design/pro-components'

type Props = {};

/**
 * @Author: wangyi
 * @Date: 2023-06-06
 */
const List: React.FC<Props> = () => {
  return (
    <PageContainer title="订单列表">
      <ProTable
        columns={[
          {
            title: 'ID',
            dataIndex: 'id'
          },
          {
            title: '商品名称',
            dataIndex: 'productName',
          }
        ]}
      />
    </PageContainer>
  )
}

export default List
