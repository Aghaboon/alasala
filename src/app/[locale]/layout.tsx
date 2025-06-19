import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import "@/app/[locale]/globals.css";
import { Providers } from './providers';
import './globals.css';


export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  // Ensure that the incoming `locale` is valid
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale} className='dark'>
      <body>
        <NextIntlClientProvider>
          <Providers>

            {children}
            
          </Providers>

        </NextIntlClientProvider>
      </body>
    </html>
  );
}