"use client";

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useTranslation } from "react-i18next";
import { useState } from 'react';

export default function Navbar() {
    const pathname = usePathname();
    const { t, i18n } = useTranslation('index');

    const [ showHamburger, setShowHamburger ] = useState(false);

    const links = {
        paper: t('menu.paper'),
        sponsorship: t('menu.sponsorship'),
        agenda: t('menu.agenda')
    };

    return (
        <nav className={`${pathname == "/" ? 'fixed' : 'sticky'} top-0 left-0 right-0 bg-white text-black z-10`}>
            <div className='max-w-4xl mx-auto flex items-center justify-between px-6 py-4 sm:px-0'>
                <div>
                    <Link className='font-bold' href='/'><span className='text-lg'>TWNOG 6</span></Link>
                </div>
                <div className='hidden sm:flex space-x-4'>
                    {Object.entries(links).map(([key, value]) => (
                        <Link key={key} className={(pathname == `/${key}`) ? "underline underline-offset-8" : "" } href={`/${key}`}>{value}</Link>
                    ))}
                </div>
                <div className='sm:flex space-x-2 items-center hidden'>
                    <Image alt='globe icon' height={20} width={20} src='/globe.svg' className='w-5 h-5' />
                    <select className='bg-white text-black rounded-lg p-2' defaultValue={i18n.resolvedLanguage} onChange={(e) => i18n.changeLanguage(e.target.value)}>
                        {Array.from(i18n.languages).sort().map((lang) => (
                            <option key={lang} value={lang}>{lang}</option>
                        ))}
                    </select>
                    <Link className='bg-black text-white rounded-full px-3 py-1' href='https://twnog.kktix.cc/events/2025twnog6' target='_blank'>{t('menu.register')}</Link>
                </div>
                <button className='bg-black text-white rounded-full px-3 py-1 sm:hidden' onClick={() => setShowHamburger(!showHamburger)}>☰</button>
            </div>
            <div className={`${showHamburger ? '' : 'hidden'} absolute top-100 left-0 right-0 bg-white text-black pb-4 z-10`}>
                <div className='max-w-4xl mx-auto flex flex-col py-4 px-6 sm:px-0' onClick={() => setShowHamburger(false)}>
                    {Object.entries(links).map(([key, value]) => (
                        <Link key={key} className={(pathname == `/${key}`) ? "underline underline-offset-8" : "" } href={`/${key}`}>{value}</Link>
                    ))}
                </div>
                <div className='flex space-x-1 items-center justify-center'>
                    <Image alt='globe icon' height={20} width={20} src='/globe.svg' className='w-5 h-5' />
                    <select className='bg-white text-black rounded-lg p-2' defaultValue={i18n.resolvedLanguage} onChange={(e) => i18n.changeLanguage(e.target.value)}>
                        {Array.from(i18n.languages).sort().map((lang) => (
                            <option key={lang} value={lang}>{lang}</option>
                        ))}
                    </select>
                    <Link className='bg-black text-white rounded-full px-3 py-1' href='https://twnog.kktix.cc/events/2025twnog6' target='_blank'>{t('menu.register')}</Link>
                </div>
            </div>
        </nav>
    );
}