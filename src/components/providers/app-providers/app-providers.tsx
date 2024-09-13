import { components, token } from '@/common/theme';
import { globalStore } from '@/store/global';
import { ProProvider, zhCNIntl, zhTWIntl } from '@ant-design/pro-components';
import NiceModal from '@ebay/nice-modal-react';
import { ConfigProvider } from 'antd';
import zh_CN from 'antd/locale/zh_CN';
import zh_HK from 'antd/locale/zh_HK';
import { Provider } from 'jotai';
import { type PropsWithChildren, useContext } from 'react';
import { useTranslation } from 'react-i18next';

export function AppProviders({ children }: PropsWithChildren) {
  const { i18n } = useTranslation();
  const values = useContext(ProProvider);
  return (
    <ConfigProvider
      theme={{
        token,
        components,
        cssVar: {
          prefix: 'usc',
        },
        hashed: false,
      }}
      locale={i18n.language === 'zh-CN' ? zh_CN : zh_HK}
    >
      <ProProvider.Provider
        value={{
          ...values,
          intl: i18n.language === 'zh-CN' ? zhCNIntl : zhTWIntl,
        }}
      >
        <Provider store={globalStore}>
          <NiceModal.Provider>{children}</NiceModal.Provider>
        </Provider>
      </ProProvider.Provider>
    </ConfigProvider>
  );
}
