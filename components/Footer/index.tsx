import React from 'react';
import { useTranslations } from 'next-intl';

function index() {
  const t = useTranslations();
  return (
    <footer className='bg-black p-5'>
      <div className='container'>
        <ul className='flex items-center justify-center gap-3'>
          <li><a href="" className='text-white'>{t('Header.Nav.home')}</a></li>
          <li><a href="" className='text-white'>{t('Header.Nav.about')}</a></li>
          <li><a href="" className='text-white'>{t('Header.Nav.services')}</a></li>
          <li><a href="" className='text-white'>{t('Header.Nav.profile')}</a></li>
          <li><a href="" className='text-white'>{t('Header.Nav.terms')}</a></li>
        </ul>
      </div>
    </footer>
  )
}

export default index