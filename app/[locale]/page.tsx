import { useTranslations } from 'next-intl';

export default function Home() {
  const t = useTranslations();
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-9">
      <h4 className="text-[30px]">{t('home')}</h4>
    </div>
  );
}
