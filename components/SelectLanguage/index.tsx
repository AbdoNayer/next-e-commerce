'use client';

import { ChangeEvent, useTransition } from 'react';
import { useLocale } from 'next-intl';
import { useRouter } from 'next/navigation';

function index() {
    const [isPending, startTransition] = useTransition();
    const router = useRouter();
    const localActive = useLocale();

    const onSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
        const nextLocale = e.target.value;
        startTransition(() => {
            router.replace(`/${nextLocale}`);
        });
    };
    return (
        <select
            defaultValue={localActive}
            className='bg-transparent text-[#727272]'
            onChange={onSelectChange}
            disabled={isPending}
        >
            <option value='ar' className='text-black'>Arabic</option>
            <option value='en' className='text-black'>English</option>
        </select>
    )
}

export default index