import React from 'react';
import { useTranslations } from 'next-intl';
import { SelectLanguage } from '..';
import { Link } from '@/navigation';

function index() {
    const t = useTranslations();
    return (
        <header className='bg-black p-5'>
            <div className='container'>
                <div className='flex items-center justify-between'>
                    <div className='flex items-center gap-3'>
                        <Link href="/" className="text-white"> {t('Header.Nav.home')} </Link>
                        <Link href="/about" className="text-white"> {t('Header.Nav.about')} </Link>
                        <Link href="/contact" className="text-white"> {t('Header.Nav.services')} </Link>
                        <Link href="/profile" className="text-white"> {t('Header.Nav.profile')} </Link>
                        <Link href="/login" className="text-white"> {t('Header.Nav.terms')} </Link>
                    </div>
                    <SelectLanguage />
                </div>
            </div>
        </header>
    )
}

export default index