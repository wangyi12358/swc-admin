import type { ProTokenType } from '@ant-design/pro-components';
import { theme } from './theme';

export const proLayoutToken: ProTokenType['layout'] = {
  header: {
    colorBgHeader: '#fff',
    heightLayoutHeader: 72,
  },
  sider: {
    menuHeight: 48,
    colorMenuBackground: '#fff',
    colorTextMenuSelected: theme.colors.primary,
    colorBgMenuItemHover: theme.colors.bgHover,
    colorBgMenuItemSelected: theme.colors.bgHover,
    colorTextMenuItemHover: theme.colors.primary,
  },
  pageContainer: {
    colorBgPageContainer: '#f5f5f5',
  },
};
