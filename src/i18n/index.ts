import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector'; // 检测浏览器语言
import { initReactI18next } from 'react-i18next';
import enUS from '../locales/en-US/translation.json';
import zhCN from '../locales/zh-CN/translation.json';

i18n
  .use(LanguageDetector) // Detect user language
  .use(initReactI18next) // Pass the i18n instance to react-i18next
  .init({
    fallbackLng: 'zh-CN', // Default language
    debug: true,
    resources: {
      'en-US': {
        translation: enUS,

      },
      'zh-CN': {
        translation: zhCN,
      },
    },
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
  });

export default i18n;
