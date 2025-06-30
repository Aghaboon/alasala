'use client';

import { useTranslations, useLocale } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  const t = useTranslations('HomePage');
  const locale = useLocale();
  const isRTL = locale === 'ar';

  return (
    <section className="relative h-screen w-full overflow-hidden">

      <Image
        src="/hero.jpg"
        alt="Hero background"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="z-0"
      />

      <div
        className={`absolute inset-0 flex justify-center items-center px-4 md:px-10 z-20`}
        dir={isRTL ? 'rtl' : 'ltr'}
      >
        <div
          className={`max-w-3xl w-full ${
            isRTL ? 'text-right ml-auto' : 'text-left mr-auto'
          }`}
        >
          <h1 className="text-3xl lg:text-5xl font-bold text-white mb-4">
            {t('hero.title')}
          </h1>
          <p className="text-xl lg:text-2xl text-white mb-6">
            {t('hero.description')}
          </p>

          <Link
            href={`/${locale}/contact-us`}
            className="inline-block bg-[var(--color-btn-primary)] hover:bg-[var(--color-btn-hover)] text-white px-6 py-3 rounded-full text-lg transition"
          >
            {t('hero.btnContact')}
          </Link>
        </div>
      </div>
    </section>
  );
}
