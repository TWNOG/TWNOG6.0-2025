// app/i18n.ts
"use client";

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// 這裡示範最簡單的 resources，實務通常會用 next-i18next 或 http-backend 載入翻譯檔
const resources = {
  en: {
    translation: {
      hello: "Hello World"
    }
  },
  zh: {
    translation: {
      hello: "哈囉，世界"
    }
  }
};

// 如果已經初始化過，就不要重複 init
if (!i18n.isInitialized) {
  i18n
    .use(initReactI18next)
    .init({
      resources,
      lng: "en",          // 預設語言
      fallbackLng: "en",
      interpolation: {
        escapeValue: false,
      },
    });
}

export default i18n;
