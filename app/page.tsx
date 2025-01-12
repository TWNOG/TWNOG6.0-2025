"use client";

import Image from "next/image";
import { useTranslation } from 'react-i18next';

export default function Home() {
  const { t } = useTranslation('index');
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      {/* 主要內容放在 main */}
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-center">
        {/* 活動 Logo 或 Banner */}
        {/* 你可以換成 TWNOG logo，或參考 /public 中的其他圖片 */}
        <Image
          src="/twnog.png" 
          alt="2025 TWNOG Logo"
          width={200}
          height={80}
          priority
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
        <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            href="/paper"
          >
            {t('menu.paper')}
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            href="/sponsorship"
          >
            {t('menu.sponsorship')}
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            href="/agenda"
          >
            {t('menu.agenda')}
          </a>
        </div>
      </main>

      {/* 頁尾，可放一些社群連結、版權聲明等 */}
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <p className="text-sm sm:text-base">
          © 2025 {t('copyright')}
        </p>
        {/* 如有社群連結可加在這裡 */}
        {/* <a href="https://facebook.com/twnog" className="hover:underline text-sm sm:text-base">Facebook</a> */}
      </footer>
    </div>
  );
}
