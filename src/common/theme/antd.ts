import type { OverrideToken } from 'antd/es/theme/interface';
import type { AliasToken } from 'antd/es/theme/interface/alias';
import { theme } from './theme';

export const token: Partial<AliasToken> = {
  colorPrimary: theme.colors.primary,
  colorBgTextHover: theme.colors.bgHover,
  colorBgTextActive: theme.colors.bgHover,
  controlItemBgHover: theme.colors.bgHover,
  controlItemBgActiveHover: theme.colors.bgHover,
  colorText: theme.colors.text,
  colorTextSecondary: theme.colors.textSecondary,
  colorTextTertiary: theme.colors.textTertiary,
  fontSize: theme.fontSizes.base,
  fontSizeSM: theme.fontSizes.sm,
  fontSizeXL: theme.fontSizes.xl,
  controlHeight: 36,
};

export const components: Partial<OverrideToken> = {
  Menu: {
    itemColor: theme.colors.text,
    itemHeight: 40,
  },
  Breadcrumb: {
    linkHoverColor: theme.colors.primary,
  },
  Button: {
    paddingInline: 16,
  },
  Form: {
    labelFontSize: theme.fontSizes.base,
  },
};
