'use client';

import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';

export default function ServicesSection() {
    const t = useTranslations('HomePage.services');
    const locale = useLocale();
    const isRTL = locale === 'ar';

    const services = t.raw('items') as Array<{ title: string; description: string }>;

    return (
        <section className="py-20 bg-bg-primary">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl lg:text-4xl font-bold text-font-primary">
                        {t('title')}
                    </h2>
                    <p className="text-font-muted mt-4 max-w-xl mx-auto">
                        {t('subtitle')}
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="bg-bg-secondary rounded-xl shadow-md p-6 hover:shadow-lg transition-all"
                        >
                            <h3 className="text-xl font-semibold text-btn-primary mb-2 text-center">
                                {service.title}
                            </h3>
                            <p
                                className={`text-font-muted text-sm ${isRTL ? 'text-right' : 'text-left'
                                    }`}
                            >
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-10">
                    <Link
                        href={`/${locale}/services`}
                        className="inline-block bg-btn-primary text-white px-6 py-3 rounded-full text-lg hover:bg-btn-hover transition"
                    >
                        {t('viewAll')}
                    </Link>
                </div>
            </div>
        </section>
    );
}
