import React from 'react';
import { useTranslations } from 'next-intl';
import { SelectLanguage } from '..';
import { Link } from '@/navigation';
import { FiPhoneCall, FiMail } from "react-icons/fi";
import { CiSearch, CiHeart, CiUser, CiShoppingCart } from "react-icons/ci";
import Image from 'next/image';


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
                                <span className='text-[#727272] text-[13px]'>+9661234567789</span>
                            </div>
                            <div className='flex items-center gap-2'>
                                <FiMail color='#4971FA' />
                                <span className='text-[#727272] text-[13px]'>info@site.com</span>
                            </div>
                        </div>
                        <div className='flex flex-col lg:flex-row items-center gap-4'>
                            <div className='flex items-center gap-3'>
                                <Link href="/" className="text-[#727272]"> {t('Header.UpHeader.blog')} </Link>
                                <Link href="/" className="text-[#727272]"> {t('Header.UpHeader.replacementPolicy')} </Link>
                                <Link href="/" className="text-[#727272]"> {t('Header.UpHeader.privacyPolicy')} </Link>
                            </div>
                            <SelectLanguage />
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
                        <div className='flex items-center justify-between flex-1 gap-3 lg:px-6'>
                            <div className='flex items-center gap-5'>
                                <Link href="/" className="text-[#727272]"> {t('Header.Nav.home')} </Link>
                                <Link href="/about" className="text-[#727272]"> {t('Header.Nav.about')} </Link>
                                <Link href="/contact" className="text-[#727272]"> {t('Header.Nav.services')} </Link>
                                <Link href="/profile" className="text-[#727272]"> {t('Header.Nav.profile')} </Link>
                                <Link href="/login" className="text-[#727272]"> {t('Header.Nav.terms')} </Link>
                            </div>
                            <div className='flex items-center gap-5'>
                                <button><CiSearch size={25} /></button>
                                <button><CiUser size={25} /></button>
                                <button><CiHeart size={25} /></button>
                                <button><CiShoppingCart size={25} /></button>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default index