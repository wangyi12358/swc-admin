import { PageContainer, ProTable } from '@ant-design/pro-components';

function List() {
  return (
    <PageContainer title='订单列表'>
      <ProTable
        columns={[
          {
            title: 'ID',
            dataIndex: 'id',
          },
          {
            title: '商品名称',
            dataIndex: 'productName',
          },
        ]}
      />
    </PageContainer>
  );
}

export default List;
