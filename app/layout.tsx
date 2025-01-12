import type { Metadata } from "next";
import { Geist, Geist_Mono, Noto_Sans_TC } from "next/font/google";
import "./globals.css";
import { I18nProvider } from './i18n-provider';
import { GoogleAnalytics } from '@next/third-parties/google';

import Navbar from './components/navbar';
import Footer from './components/footer';

const notoSans = Noto_Sans_TC({
  variable: "--font-noto-sans-tc",
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

export const metadata: Metadata = {
  title: "TWNOG 6",
  description: "第六屆台灣網路維運論壇",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${notoSans.variable} ${geistSans.variable} ${geistMono.variable} antialiased`}>
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
