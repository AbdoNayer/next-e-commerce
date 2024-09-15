import React from 'react';
import { useTranslations } from 'next-intl';
import { SelectLanguage } from '..';

function index() {
    const t = useTranslations();
    return (
        <header className='bg-black p-5'>
            <div className='container'>
                <div className='flex items-center justify-between'>
                    <ul className='flex items-center gap-3'>
                        <li><a href="" className='text-white'>{t('Header.Nav.home')}</a></li>
                        <li><a href="" className='text-white'>{t('Header.Nav.about')}</a></li>
                        <li><a href="" className='text-white'>{t('Header.Nav.services')}</a></li>
                        <li><a href="" className='text-white'>{t('Header.Nav.profile')}</a></li>
                        <li><a href="" className='text-white'>{t('Header.Nav.terms')}</a></li>
                    </ul>
                    <SelectLanguage />
                </div>
            </div>
        </header>
    )
}

export default index