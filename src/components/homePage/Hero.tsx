'use client';

import { useTranslations, useLocale } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Hero() {
  const t = useTranslations('HomePage');
  const locale = useLocale();
  const isRTL = locale === 'ar';

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* خلفية الصورة */}
      <Image
        src="/hero.jpg"
        alt="Hero background"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="z-0"
        priority
      />

      {/* تدرج غامق على الصورة لتوضيح النص */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/60 to-black/40 z-10" />

      {/* النص والمحتوى */}
      <div
        className={`absolute inset-0 flex justify-center items-center max-w-7xl mx-auto px-4 md:px-10 z-20`}
        dir={isRTL ? 'rtl' : 'ltr'}
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className={`max-w-3xl w-full ${isRTL ? 'text-right ml-auto' : 'text-left mr-auto'}`}
        >
          <h1 className="text-4xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
            {t('hero.title')}
          </h1>
          <p className="text-xl lg:text-2xl text-gray-100 mb-8">
            {t('hero.description')}
          </p>

          <Link
            href={`/${locale}/contact-us`}
            className="inline-block bg-[var(--color-btn-primary)] hover:bg-[var(--color-btn-hover)] text-white px-8 py-3 rounded-full text-lg transition-all duration-300 shadow-md hover:shadow-lg"
          >
            {t('hero.btnContact')}
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
