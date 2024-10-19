import React from 'react';
import { useTranslations } from 'next-intl';
import { Link } from '@/navigation';

function index() {
  const t = useTranslations();
  return (
    <footer className='bg-black p-7'>
      <div className='container'>
        <div className='flex items-center justify-center gap-8'>
          <Link href="/" className="text-[#4971FA]"> {t('Header.Nav.home')} </Link>
          <Link href="/about" className="text-white hover:text-[#4971FA]"> {t('Header.Nav.discounts')} </Link>
          <Link href="/contact" className="text-white hover:text-[#4971FA]"> {t('Header.Nav.womens')} </Link>
          <Link href="/profile" className="text-white hover:text-[#4971FA]"> {t('Header.Nav.mens')} </Link>
          <Link href="/login" className="text-white hover:text-[#4971FA]"> {t('Header.Nav.accessories')} </Link>
          <Link href="/login" className="text-white hover:text-[#4971FA]"> {t('Header.Nav.shoes')} </Link>
          <Link href="/login" className="text-white hover:text-[#4971FA]"> {t('Header.Nav.reservations')} </Link>
          <Link href="/login" className="text-white hover:text-[#4971FA]"> {t('Header.Nav.digitalProducts')} </Link>
        </div>
      </div>
    </footer>
  )
}

export default index