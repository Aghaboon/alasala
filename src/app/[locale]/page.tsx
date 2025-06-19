import {useTranslations} from 'next-intl';
import {Link} from '@/i18n/navigation';
import Header from '@/components/Header';

 
export default function HomePage() {
  const t = useTranslations('HomePage');
  return (
    <div>
      <Header />
      <h1>{t('title')}</h1>

    </div>
  );
}