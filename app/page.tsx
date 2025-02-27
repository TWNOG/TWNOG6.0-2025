"use client";

import Link from "next/link";
import Image from "next/image";
import { useTranslation } from 'react-i18next';

export default function Home() {
  const { t } = useTranslation('index');
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 gap-16 sm:p-20">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-center">
        <Image
          src="/assets/twnog.svg" 
          alt="2025 TWNOG Logo"
          width={200}
          height={80}
          priority
          className="rounded-lg"
        />

        {/* 活動簡介 */}
        <section className="text-center sm:text-center">
          <h1 className="text-2xl font-bold mb-4">TWNOG 6</h1>
          <p className="text-base">
          {t('content')}
          </p>
        </section>

        {/* 導覽按鈕區塊，示範跳轉到其他頁面連結（若你有設定 Router / Pages） */}
        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <Link
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            href="/paper"
          >
            {t('menu.paper')}
          </Link>
          <Link
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            href="/traffic"
          >
            {t('menu.traffic')}
          </Link>
          <Link
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            href="/sponsor"
          >
            {t('menu.sponsor')}
          </Link>
        </div>
      </main>

      <p className="row-start-3 text-sm sm:text-base font-sans">
        © 2025 {t('copyright')}
      </p>
    </div>
  );
}
