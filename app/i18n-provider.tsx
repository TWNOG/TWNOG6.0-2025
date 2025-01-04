// app/i18n-provider.tsx
"use client";

import { ReactNode } from 'react';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n'; // 匯入剛剛初始化好的 i18n

type Props = {
  children: ReactNode;
};

// 這個 Provider 會把 i18n 實例注入到 React 裡
export function I18nProvider({ children }: Props) {
  return (
    <I18nextProvider i18n={i18n}>
      {children}
    </I18nextProvider>
  );
}
