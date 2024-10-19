'use client';

import { ChangeEvent, useTransition } from 'react';
import { useLocale } from 'next-intl';
import { useRouter } from 'next/navigation';
import { GrLanguage } from "react-icons/gr";


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
        <div className='flex items-center gap-1'>
            <GrLanguage size={16} />
            <select
                defaultValue={localActive}
                className='bg-transparent text-[#727272] text-[15px]'
                onChange={onSelectChange}
                disabled={isPending}
            >
                <option value='ar' className='text-black text-[14px]'>Arabic</option>
                <option value='en' className='text-black text-[14px]'>English</option>
            </select>
        </div>
    )
}

export default index