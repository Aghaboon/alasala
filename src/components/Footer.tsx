'use client';

import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import { Mail, Phone, MapPin } from 'lucide-react';
import Image from 'next/image';

export default function Footer() {
    const t = useTranslations('Footer');
    const locale = useLocale();
    const isRTL = locale === 'ar';

    const links = t.raw('links') as Record<string, { label: string; href: string }>;
    const linkItems = Object.entries(links);

    return (
        <footer
            className="bg-[var(--color-bg-primary)] text-[var(--color-font-muted)] py-12 border-t border-[var(--color-border)]"
            dir={isRTL ? 'rtl' : 'ltr'}
        >
            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10">

                {/* Logo and description */}
                <div className="md:col-span-1">
                    <Link href="/" className="block w-fit mb-4">
                        <Image
                            src="/footerlogo.png"
                            alt="Company Logo"
                            width={160}
                            height={60}
                            className="object-contain"
                            priority={false}
                        />
                    </Link>

                    <p className="text-sm leading-relaxed">{t('about')}</p>
                </div>

                {/* Navigation Links */}
                <div>
                    <h3 className="text-lg font-semibold text-[var(--color-font-primary)] mb-3">
                        {t('quickLinks')}
                    </h3>
                    <ul className="space-y-2 text-sm">
                        {linkItems.map(([key, { href, label }]) => (
                            <li key={key}>
                                <Link href={`/${locale}${href}`} className="hover:text-[var(--color-font-primary)]">
                                    {label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Contact Info */}
                <div className="space-y-4 text-sm">
                    <h3 className="text-lg font-semibold text-[var(--color-font-primary)] mb-3">
                        {t('contactTitle')}
                    </h3>
                    <p className="flex items-center gap-2">
                        <Phone size={16} />
                        <span dir="ltr">
                            {t('contactMethod.phone')}
                        </span>
                    </p>
                    <p className="flex items-center gap-2">
                        <Mail size={16} /> {t('contactMethod.email')}
                    </p>
                    <p className="flex items-center gap-2">
                        <MapPin size={16} /> {t('address')}
                    </p>
                </div>

                {/* Newsletter */}
                <div className="text-sm">
                    <h3 className="text-lg font-semibold text-[var(--color-font-primary)] mb-3">
                        {t('subscribeTitle')}
                    </h3>
                    <p>{t('subscribeText')}</p>
                    <form
                        action="https://formsubmit.co/youremail@example.com"
                        method="POST"
                        className="space-y-3 mt-4"
                    >
                        <input
                            type="email"
                            name="email"
                            required
                            placeholder={t('newsletter.placeholder')}
                            className="w-full p-2 border rounded text-sm"
                        />
                        <button
                            type="submit"
                            className="bg-[var(--color-btn-primary)] text-white px-6 py-2 rounded hover:bg-[var(--color-btn-hover)]"
                        >
                            {t('newsletter.subscribe')}
                        </button>
                    </form>
                </div>
            </div>

            <div className="mt-10 border-t border-[var(--color-border)] pt-6 text-center text-xs text-[var(--color-font-muted)]">
                &copy; {new Date().getFullYear()} Al Asala. {t('rights')}.
            </div>
        </footer>
    );
}
