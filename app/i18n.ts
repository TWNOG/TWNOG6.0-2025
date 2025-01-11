"use client";

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// 這裡直接匯入翻譯檔
import enIndex from '../public/locales/en/index.json';
import zhHantIndex from '../public/locales/zh-Hant/index.json';
import enSponsorship from '../public/locales/en/sponsorship.json';
import zhHantSponsorship from '../public/locales/zh-Hant/sponsorship.json';
import enAgenda from '../public/locales/en/agenda.json';
import zhHantAgenda from '../public/locales/zh-Hant/agenda.json';

// 如果你有多個 namespace，例如 common.json、footer.json，也能各自 import

// 將 JSON 設為 i18n resources
const resources = {
  en: {
    index: enIndex,
    sponsorship: enSponsorship,
    agenda: enAgenda,
  },
  zh: {
    index: zhHantIndex,
    sponsorship: zhHantSponsorship,
    agenda: zhHantAgenda,
  },
};

if (!i18n.isInitialized) {
  i18n
    .use(initReactI18next)
    .init({
      resources,
      // 預設語系（可改成從 environment / router 判斷）
      lng: 'en',
      fallbackLng: 'en',
      interpolation: {
        escapeValue: false,
      },
    });
}

export default i18n;
