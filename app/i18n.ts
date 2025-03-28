"use client";

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import i18nextBrowserLanguageDetector from 'i18next-browser-languagedetector';

// 這裡直接匯入翻譯檔
import enIndex from '../public/locales/en/index.json';
import zhHantIndex from '../public/locales/zh-Hant/index.json';
import jaIndex from '../public/locales/ja/index.json';
import enSponsor from '../public/locales/en/sponsor.json';
import zhHantSponsor from '../public/locales/zh-Hant/sponsor.json';
import jaSponsor from '../public/locales/ja/sponsor.json';
import enStaff from '../public/locales/en/staff.json';
import zhHantStaff from '../public/locales/zh-Hant/staff.json';
import jaStaff from '../public/locales/ja/staff.json';
import enAgenda from '../public/locales/en/agenda.json';
import zhHantAgenda from '../public/locales/zh-Hant/agenda.json';
import jaAgenda from '../public/locales/ja/agenda.json';
import enAgendaDetail from '../public/locales/en/agendaDetail.json';
import zhHantAgendaDetail from '../public/locales/zh-Hant/agendaDetail.json';
import jaAgendaDetail from '../public/locales/ja/agendaDetail.json';
import enCfp from '../public/locales/en/cfp.json';
import zhHantCfp from '../public/locales/zh-Hant/cfp.json';
import jaCfp from '../public/locales/ja/cfp.json';
import enTraffic from '../public/locales/en/traffic.json';
import zhHantTraffic from '../public/locales/zh-Hant/traffic.json';
import jaTraffic from '../public/locales/ja/traffic.json';

// 如果你有多個 namespace，例如 common.json、footer.json，也能各自 import

// 將 JSON 設為 i18n resources
const resources = {
  en: {
    index: enIndex,
    sponsor: enSponsor,
    agenda: enAgenda,
    agendaDetail: enAgendaDetail,
    cfp: enCfp,
    traffic: enTraffic,
    staff: enStaff
  },
  zh: {
    index: zhHantIndex,
    sponsor: zhHantSponsor,
    agenda: zhHantAgenda,
    agendaDetail: zhHantAgendaDetail,
    cfp: zhHantCfp,
    traffic: zhHantTraffic,
    staff: zhHantStaff
  },
  ja: {
    index: jaIndex,
    sponsor: jaSponsor,
    agenda: jaAgenda,
    agendaDetail: jaAgendaDetail,
    cfp: jaCfp,
    traffic: jaTraffic,
    staff: jaStaff
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
