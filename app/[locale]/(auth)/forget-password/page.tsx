import React from 'react';
import { useTranslations } from 'next-intl';

function ForgetPassword() {
  const t = useTranslations();
  return (
    <div>
      {/* <h1>{t('login')}</h1> */}
      <h1 className='text-center'>ForgetPassword</h1>
    </div>
  )
}

export default ForgetPassword