"use client";

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import i18nextBrowserLanguageDetector from 'i18next-browser-languagedetector';

// 這裡直接匯入翻譯檔
import enIndex from '../public/locales/en/index.json';
import zhHantIndex from '../public/locales/zh-Hant/index.json';
import jaIndex from '../public/locales/ja/index.json';
import enSponsorship from '../public/locales/en/sponsorship.json';
import zhHantSponsorship from '../public/locales/zh-Hant/sponsorship.json';
import jaSponsorship from '../public/locales/ja/sponsorship.json';
import enAgenda from '../public/locales/en/agenda.json';
import zhHantAgenda from '../public/locales/zh-Hant/agenda.json';
import jaAgenda from '../public/locales/ja/agenda.json';
import enCfp from '../public/locales/en/cfp.json';
import zhHantCfp from '../public/locales/zh-Hant/cfp.json';
import jaCfp from '../public/locales/ja/cfp.json';

// 如果你有多個 namespace，例如 common.json、footer.json，也能各自 import

// 將 JSON 設為 i18n resources
const resources = {
  en: {
    index: enIndex,
    sponsorship: enSponsorship,
    agenda: enAgenda,
    cfp: enCfp,
  },
  zh: {
    index: zhHantIndex,
    sponsorship: zhHantSponsorship,
    agenda: zhHantAgenda,
    cfp: zhHantCfp,
  },
  ja: {
    index: jaIndex,
    sponsorship: jaSponsorship,
    agenda: jaAgenda,
    cfp: jaCfp,
  },
};

if (!i18n.isInitialized) {
  i18n
    .use(i18nextBrowserLanguageDetector) // 從 browser 取得使用者語言
    .use(initReactI18next)
    .init({
      resources,
      fallbackLng: ['en', 'zh', 'ja'],
      supportedLngs: ['en', 'zh', 'ja'],
      load: 'all',
      interpolation: {
        escapeValue: false,
      },
    });
}

export default i18n;
