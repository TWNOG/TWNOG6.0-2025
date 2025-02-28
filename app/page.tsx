"use client";

import Link from "next/link";
import Image from "next/image";
import { useTranslation } from 'react-i18next';

export default function Home() {
  const { t } = useTranslation('index');

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Event",
    name: "TWNOG 6",
    startDate: "2025-04-18T08:00:00+08:00",
    endDate: "2025-04-18T17:00:00+08:00",
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    eventStatus: "https://schema.org/EventScheduled",
    location: {
      "@type": "Place",
      name: "臺大醫院國際會議中心 NTU Hospital International Convention Center",
      address: {
        "@type": "PostalAddress",
        streetAddress: "No. 7, Chung-Shan S. Rd.",
        addressLocality: "Zhongzheng District",
        addressRegion: "Taipei City",
        postalCode: "100",
        addressCountry: "TW"
      }
    },
    image: [
      "https://2025.twnog.net/assets/twnog6-banner.jpg"
    ],
    description: "第六屆台灣網路維運論壇將於 2025 年 04 月 18 日於臺大醫院國際會議中心舉辦。歡迎所有網路維運者與學生一同參與！The TWNOG 6 will be held on April 18, 2024, at the NTU Hospital International Convention Center. All network operations personnel or students are welcome to attend!",
    organizer: {
      "@type": "Organization",
      name: "TWNOG",
      url: "https://twnog.net/"
    }
  };

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

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </div>
  );
}
