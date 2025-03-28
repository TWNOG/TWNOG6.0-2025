import type { Metadata } from "next";
import { Geist, Geist_Mono, IBM_Plex_Serif, Noto_Sans_TC, Noto_Sans_JP, Noto_Serif_TC, Noto_Serif_JP } from "next/font/google";
import "./globals.css";
import { I18nProvider } from './i18n-provider';
import { GoogleAnalytics } from '@next/third-parties/google';

import Navbar from './components/navbar';
import Footer from './components/footer';

const notoSerifTC = Noto_Serif_TC({
  variable: "--font-noto-serif-tc",
  preload: false
});

const notoSansTC = Noto_Sans_TC({
  variable: "--font-noto-sans-tc",
  preload: false
});

const notoSerifJP = Noto_Serif_JP({
  variable: "--font-noto-serif-jp",
  preload: false
});

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  preload: false
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const IBMPlexSerif = IBM_Plex_Serif({
  variable: "--font-ibm-plex-serif",
  subsets: ["latin"],
  weight: ["100", "400", "500", "700"]
})

export const metadata: Metadata = {
  title: "TWNOG 6",
  description: "第六屆台灣網路維運論壇將於 2025 年 04 月 18 日於臺大醫院國際會議中心舉辦。歡迎所有網路維運者與學生一同參與！The TWNOG 6 will be held on April 18, 2024, at the NTU Hospital International Convention Center. All network operations personnel or students are welcome to attend!",
  keywords: "TWNOG, TWNOG6, TWNOG 6, TWNOG 2025, 台灣網路維運論壇, Network, Internet, 大會, 網路工程, IPv6, BGP, 資料中心, 雲端網路, 網路安全, ISP, 教育訓練, 研討會, 國立臺灣大學醫院國際會議中心",
  openGraph: {
    title: "TWNOG 6",
    description: "第六屆台灣網路維運論壇將於 2025 年 04 月 18 日於臺大醫院國際會議中心舉辦。歡迎所有網路維運者與學生一同參與！The TWNOG 6 will be held on April 18, 2024, at the NTU Hospital International Convention Center. All network operations personnel or students are welcome to attend!",
    images: [
      {
        url: "https://2025.twnog.net/assets/twnog6-banner.jpg",
        width: 1200,
        height: 630,
      }
    ],
  },
  twitter: {
    title: "TWNOG 6",
    description: "第六屆台灣網路維運論壇將於 2025 年 04 月 18 日於臺大醫院國際會議中心舉辦。歡迎所有網路維運者與學生一同參與！The TWNOG 6 will be held on April 18, 2024, at the NTU Hospital International Convention Center. All network operations personnel or students are welcome to attend!",
    images: "https://2025.twnog.net/assets/twnog6-banner.jpg",
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${notoSansTC.variable} ${notoSansJP.variable} ${notoSerifTC.variable} ${notoSerifJP.variable} ${IBMPlexSerif.variable} ${geistSans.variable} ${geistMono.variable} antialiased`}>
        <I18nProvider>
          <Navbar />
          {children}
          <Footer />
        </I18nProvider>
      </body>
      <GoogleAnalytics gaId="G-3W8CJ699W2" />
    </html>
  );
}
