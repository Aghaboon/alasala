'use client';

import { useTranslations, useLocale } from 'next-intl';
import React from 'react';

export default function AboutSection() {
    const t = useTranslations('HomePage.AboutSection');
    const locale = useLocale();
    const isRTL = locale === 'ar';

    return (
        <section
            dir={isRTL ? 'rtl' : 'ltr'}
            className="py-20 bg-bg-primary"
        >
            <div className="max-w-7xl mx-auto px-6">
                <h1 className="text-4xl text-center font-bold text-font-primary mb-2">
                    {t('meta.title')}
                </h1>

                <h2 className="text-2xl text-font-secondary mb-6 text-center">
                    {t('meta.subtitle')}
                </h2>

                <p className="text-font-muted text-lg mb-10 text-justify">
                    {t('content.description')}
                </p>

                <div className="grid md:grid-cols-2 gap-10">
                    <div className="bg-bg-secondary p-6 rounded-xl shadow-sm">
                        <h3 className="text-xl text-center font-semibold text-btn-primary mb-2">
                            {t('sections.mission.title')}
                        </h3>
                        <p className="text-font-muted">{t('sections.mission.text')}</p>
                    </div>

                    <div className="bg-bg-secondary p-6 rounded-xl shadow-sm">
                        <h3 className="text-xl text-center font-semibold text-btn-primary mb-2">
                            {t('sections.vision.title')}
                        </h3>
                        <p className="text-font-muted">{t('sections.vision.text')}</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
