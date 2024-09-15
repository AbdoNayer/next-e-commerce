'use client';

import React from 'react';
import { useTranslations } from 'next-intl';

export default function NotFound() {
    const t = useTranslations();
    return (
        <html>
            <body className='text-center'>
                <h1 className='mt-10 font-semibold'>{t('notFound')}</h1>
            </body>
        </html>
    );
}