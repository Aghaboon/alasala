'use client';

import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function ServicesSection() {
    const t = useTranslations('HomePage.ServicesSection');
    const locale = useLocale();
    const isRTL = locale === 'ar';

    const services = t.raw('items') as Array<{ title: string; description: string }>;

    return (
        <section className="relative py-20 bg-bg-primary overflow-hidden">

            <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-100 opacity-20 rounded-full blur-3xl z-0" />
            <div className="absolute top-0 right-0 w-72 h-72 bg-blue-50 opacity-10 rounded-full blur-2xl z-0" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* عنوان القسم */}
                <motion.div
                    initial={{ opacity: 0, y: 20, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    className="text-center mb-10"
                >
                    <h2 className="text-primary-medium md:text-primary-large font-extrabold text-font-primary mb-4 tracking-wide">
                        {t('title')}
                    </h2>
                    <p className="text-secondary-small md:text-secondary-medium text-font-muted max-w-3xl mx-auto leading-relaxed">
                        {t('subtitle')}
                    </p>
                </motion.div>

                {/* البطاقات */}
                <div className="grid md:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.15 }}
                            className="relative bg-white rounded-xl shadow-md p-6 pt-8 hover:shadow-xl transition-all border-t-4 border-btn-primary/70"
                        >
                            <h3 className="text-secondary-medium md:text-secondary-large font-semibold text-btn-primary mb-3 text-center">
                                {service.title}
                            </h3>
                            <p className={`text-font-muted text-secondary-small md:text-secondary-medium leading-relaxed ${isRTL ? 'text-right' : 'text-left'}`}>
                                {service.description}
                            </p>
                            {/* لمعة عند الهوفر */}
                            <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white via-transparent to-blue-50 opacity-0 hover:opacity-100 transition duration-500 z-0 pointer-events-none" />
                        </motion.div>
                    ))}
                </div>

                {/* زر مشاهدة الكل */}
                <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="text-center mt-14"
                        >
                    <Link
                        href={`/${locale}/services`}
                        className="inline-block bg-btn-primary text-white px-6 py-3 rounded-full text-lg hover:bg-btn-hover transition"
                    >
                        {t('viewAll')}
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
