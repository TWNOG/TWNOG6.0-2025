"use client";

import { usePathname } from 'next/navigation';
import { useTranslation } from 'react-i18next';

export default function Footer() {
    const pathname = usePathname();
    const { t } = useTranslation('index');

    if (pathname == "/") {
      return null;
    }

    return (
      <footer className="pb-20 flex gap-6 flex-wrap items-center justify-center">
        <p className="text-sm sm:text-base font-sans">
          © 2025 {t('copyright')}
        </p>
        {/* 如有社群連結可加在這裡 */}
        {/* <a href="https://facebook.com/twnog" className="hover:underline text-sm sm:text-base">Facebook</a> */}
      </footer>
    );
}