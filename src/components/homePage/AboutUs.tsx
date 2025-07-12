'use client';

import { useTranslations, useLocale } from 'next-intl';
import { motion } from 'framer-motion';
import { Eye, Target } from 'lucide-react';

export default function AboutSection() {
  const t = useTranslations('HomePage.AboutSection');
  const locale = useLocale();
  const isRTL = locale === 'ar';

  return (
    <section
      dir={isRTL ? 'rtl' : 'ltr'}
      className="relative py-20 bg-gradient-to-br from-white via-gray-50 to-white overflow-hidden"
    >
      {/* خلفية زخرفية دائرية خفيفة */}
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-blue-100 rounded-full opacity-20 blur-3xl z-0"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* العنوان الرئيسي */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-primary-medium md:text-primary-large text-center font-bold text-font-primary mb-4"
        >
          {t('meta.title')}
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-secondary-medium md:text-secondary-large text-font-secondary mb-8 text-center"
        >
          {t('meta.subtitle')}
        </motion.h2>

        {/* الوصف */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-font-muted text-secondary-small md:text-secondary-medium mb-12 leading-relaxed text-justify"
        >
          {t('content.description')}
        </motion.p>

        {/* الرؤية والمهمة */}
        <div className="grid md:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, x: isRTL ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white p-6 rounded-xl shadow-md border-t-4 border-btn-primary"
          >
            <div className="flex items-start gap-4">
              <Target className="text-btn-primary mt-1" size={28} />
              <div>
                <h3 className="text-secondary-medium md:text-secondary-large font-semibold text-btn-primary mb-2">
                  {t('sections.mission.title')}
                </h3>
                <p className="text-font-muted text-secondary-small md:text-secondary-medium leading-relaxed">
                  {t('sections.mission.text')}
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: isRTL ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white p-6 rounded-xl shadow-md border-t-4 border-btn-primary/80"
          >
            <div className="flex items-start gap-4">
              <Eye className="text-btn-primary mt-1" size={28} />
              <div>
                <h3 className="text-secondary-medium md:text-secondary-large font-semibold text-btn-primary mb-2">
                  {t('sections.vision.title')}
                </h3>
                <p className="text-font-muted text-secondary-small md:text-secondary-medium leading-relaxed">
                  {t('sections.vision.text')}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
