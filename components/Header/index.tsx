import React from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { SelectLanguage, ThemeSwitcher } from '..';
import { Link } from '@/navigation';
import { FiPhoneCall, FiMail } from "react-icons/fi";
import { CiSearch, CiHeart, CiUser, CiShoppingCart } from "react-icons/ci";


function index() {
    const t = useTranslations();
    return (
        <header>
            <div className='py-4 hidden lg:block border-b border-[#d9d9d9]'>
                <div className='container'>
                    <div className='flex items-center justify-between gap-2'>
                        <div className='flex flex-col lg:flex-row items-center gap-4'>
                            <div className='flex items-center gap-2'>
                                <FiPhoneCall color='#4971FA' />
                                <span className=' text-[13px]' dir='ltr'>+9661234567789</span>
                            </div>
                            <div className='flex items-center gap-2'>
                                <FiMail color='#4971FA' />
                                <span className='text-[#727272] text-[13px]'>info@site.com</span>
                            </div>
                        </div>
                        <div className='flex flex-col lg:flex-row items-center gap-4'>
                            <div className='flex items-center gap-5'>
                                <Link href="/" className="text-[#727272] text-[14px]"> {t('Header.UpHeader.blog')} </Link>
                                <Link href="/" className="text-[#727272] text-[14px]"> {t('Header.UpHeader.replacementPolicy')} </Link>
                                <Link href="/" className="text-[#727272] text-[14px]"> {t('Header.UpHeader.privacyPolicy')} </Link>
                            </div>
                            <SelectLanguage />
                            <ThemeSwitcher />
                        </div>
                    </div>
                </div>
            </div>
            <nav className='p-5'>
                <div className='container'>
                    <div className='flex items-center justify-between gap-2'>
                        <Link href="/" className=''>
                            <Image src='/images/logo.png' alt={''} width={170} height={70} priority />
                        </Link>
                        <div className='flex items-center justify-between flex-1 gap-3 '>
                            <button className='lg:opacity-0'></button>
                            <div className='flex items-center gap-8'>
                                <Link href="/" className="text-[#4971FA]"> {t('Header.Nav.home')} </Link>
                                <Link href="/about" className="text-[#22292F] hover:text-[#4971FA]"> {t('Header.Nav.discounts')} </Link>
                                <Link href="/contact" className="text-[#22292F] hover:text-[#4971FA]"> {t('Header.Nav.womens')} </Link>
                                <Link href="/profile" className="text-[#22292F] hover:text-[#4971FA]"> {t('Header.Nav.mens')} </Link>
                                <Link href="/login" className="text-[#22292F] hover:text-[#4971FA]"> {t('Header.Nav.accessories')} </Link>
                                <Link href="/login" className="text-[#22292F] hover:text-[#4971FA]"> {t('Header.Nav.shoes')} </Link>
                                <Link href="/login" className="text-[#22292F] hover:text-[#4971FA]"> {t('Header.Nav.reservations')} </Link>
                                <Link href="/login" className="text-[#22292F] hover:text-[#4971FA]"> {t('Header.Nav.digitalProducts')} </Link>
                            </div>
                            <div className='flex items-center gap-5'>
                                <button><CiSearch size={25} /></button>
                                <button><CiUser size={25} /></button>
                                <button><CiHeart size={25} /></button>
                                <button className='relative'>
                                    <span className='bg-red-500 absolute top-0 rtl:right-[-3px] ltr:left-[-3px] w-[15px] h-[15px] flex items-center justify-center rounded-full text-white text-[10px]'>
                                        4
                                    </span>
                                    <CiShoppingCart size={25} />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default index