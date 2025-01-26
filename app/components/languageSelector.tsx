"use client";

import Image from 'next/image';
import { useTranslation } from "react-i18next";

const languageCodeToName: { [key: string]: string } = {
  'en': 'English',
  'zh': '繁體中文',
  'ja': '日本語',
};

export default function LanguageSelector() {
  const { i18n } = useTranslation('index');

  return (
    <div className='flex items-center'>
      <Image alt='globe icon' height={20} width={20} src='/globe.svg' className='w-4 h-4' />
      <select className='bg-inherit text-inherit text-sm rounded-lg p-2 focus:outline-none' defaultValue={i18n.resolvedLanguage} onChange={(e) => i18n.changeLanguage(e.target.value)}>
        {Array.from(i18n.languages).sort().map((lang) => (
          <option className='text-black' key={lang} value={lang}>{languageCodeToName[lang] || lang}</option>
        ))}
      </select>
    </div>
  );
}