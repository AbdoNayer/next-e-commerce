import React from 'react';
import { useTranslations } from 'next-intl';

function Login() {
  const t = useTranslations();
  return (
    <div>
      {/* <h1>{t('login')}</h1> */}
      <h1 className='text-center'>Login</h1>
    </div>
  )
}

export default Login