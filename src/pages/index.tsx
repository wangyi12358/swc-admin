import { PageContainer, ProCard } from '@ant-design/pro-components';

function Home() {
  return (
    <PageContainer header={{ title: 'Home', extra: 'extra' }}>
      <ProCard>This is on the home</ProCard>
    </PageContainer>
  );
}

export default Home;
