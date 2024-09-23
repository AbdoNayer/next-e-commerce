// 'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';

export default function NotFound() {
    const t = useTranslations();
    return (
        <html>
            <body className='m-0 p-0 outline-none h-screen flex items-center justify-center'>
                <div className='container'>
                    <div className='text-center'>
                        <h1 className='font-semibold'>{t('notFound.title')}</h1>
                        <Link href="/" className="mt-6 text-blue-500 hover:underline">
                            {t('notFound.btn')}
                        </Link>
                    </div>
                </div>
            </body>
        </html>
    );
}