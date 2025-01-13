"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTranslation } from "react-i18next";
import { useState } from 'react';

import LanguageSelector from './languageSelector';

export default function Navbar() {
  const pathname = usePathname();
  const { t } = useTranslation('index');

  const [showHamburger, setShowHamburger] = useState(false);

  const links = {
    paper: t('menu.paper'),
    sponsorship: t('menu.sponsorship'),
    agenda: t('menu.agenda')
  };

  return (
    <nav className={`${pathname == "/" ? 'fixed' : 'sticky'} top-0 left-0 right-0 z-10 bg-inherit`}>
      <div className='max-w-4xl mx-auto flex items-center justify-between px-6 py-4 sm:px-0'>
        <div>
          <Link className='font-bold' href='/'><span className='text-xl'>TWNOG 6</span></Link>
        </div>
        <div className='hidden sm:flex space-x-4'>
          {Object.entries(links).map(([key, value]) => (
            <Link key={key} className={(pathname == `/${key}`) ? "underline underline-offset-8" : ""} href={`/${key}`}>{value}</Link>
          ))}
        </div>
        <div className='flex space-x-2 items-center'>
          <LanguageSelector />
          <Link className='bg-black text-white dark:invert rounded-full px-3 py-1 hidden sm:inline-block' href='https://twnog.kktix.cc/events/2025twnog6' target='_blank'>{t('menu.register')}</Link>
          <button className='bg-black text-white dark:invert rounded-full px-3 py-1 sm:hidden' onClick={() => setShowHamburger(!showHamburger)}>☰</button>
        </div>
      </div>
      <div className={`${showHamburger ? '' : 'hidden'} absolute top-100 left-0 right-0 pb-4 z-10 sm:hidden bg-inherit`}>
        <div className='max-w-4xl mx-auto flex flex-col py-4 px-6 sm:px-0' onClick={() => setShowHamburger(false)}>
          {Object.entries(links).map(([key, value]) => (
            <Link key={key} className={(pathname == `/${key}`) ? "underline underline-offset-8" : ""} href={`/${key}`}>{value}</Link>
          ))}
        </div>
        <div className='flex space-x-2 items-center justify-center'>
          <Link className='bg-black text-white dark:invert rounded-full px-3 py-1' href='https://twnog.kktix.cc/events/2025twnog6' target='_blank'>{t('menu.register')}</Link>
        </div>
      </div>
    </nav>
  );
}