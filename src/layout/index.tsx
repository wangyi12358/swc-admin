import { route } from '@/common/const/route';
import Loading from '@/components/ui/loading';
import { profile } from '@/services/api';
import { appAtom } from '@/store/app';
import { useGlobalStoreAtom } from '@/store/global';
import { ProLayout, type Settings } from '@ant-design/pro-components';
import { ConfigProvider } from 'antd';
import { produce } from 'immer';
import { Suspense, useEffect } from 'react';
import { Link, useRoutes } from 'react-router-dom';
import routes from '~react-pages';
import { theme } from './theme';

const layoutSettings: Settings = {
  navTheme: 'light',
  layout: 'mix',
  contentWidth: 'Fluid',
  fixedHeader: false,
  fixSiderbar: true,
  title: 'SWC Admin',
};

function LayoutPage() {
  const [appStore, setAppStore] = useGlobalStoreAtom(appAtom);
  const pages = useRoutes(routes);

  useEffect(() => {
    profile().then((user) => {
      if (user) {
        setAppStore(
          produce((state) => {
            state.userInfo = user;
          }),
        );
      }
    });
  }, []);

  if (!appStore.userInfo) {
    return <Loading />;
  }

  return (
    <ConfigProvider theme={{ token: theme }}>
      <ProLayout
        logo='/vite.svg'
        {...layoutSettings}
        siderWidth={208}
        token={{
          header: {},
        }}
        menuItemRender={(item, dom) => {
          return <Link to={item.path ?? ''}>{dom}</Link>;
        }}
        avatarProps={{
          src: appStore.userInfo.avatar,
          size: 'small',
          title: appStore.userInfo.username,
        }}
        route={route}
      >
        <Suspense fallback={<Loading />}>{pages}</Suspense>
      </ProLayout>
    </ConfigProvider>
  );
}

export default LayoutPage;
