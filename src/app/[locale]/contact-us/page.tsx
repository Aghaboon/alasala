'use client';

import React, { useState } from 'react';
import { useTranslations, useLocale } from 'next-intl';

export default function ContactPage() {
  const t = useTranslations('ContactPage');
  const locale = useLocale();
  const isRTL = locale === 'ar'; // إذا اللغة عربية، نستخدم RTL

  const rawOptions = t.raw('form.serviceType.options');
  const options = Array.isArray(rawOptions) ? rawOptions : [];

  const [form, setForm] = useState({
    name: '',
    phone: '',
    service: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <section
      dir={isRTL ? 'rtl' : 'ltr'}
      className="relative bg-gradient-to-br from-[#011A49] to-[#3B82F6] py-20 px-6"
    >
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden p-10 relative z-10">
        <h2 className="text-primary-medium md:text-primary-large font-extrabold text-font-primary text-center mb-4">
          {t('title')}
        </h2>
        <p className="text-center text-secondary-small md:text-secondary-medium text-font-muted mb-6">{t('subtitle')}</p>

        <form
          action="https://formspree.io/f/YOUR_FORM_ID"
          method="POST"
          className="grid gap-6"
        >
          {/* الاسم */}
          <div>
            <label className="block mb-2 text-font-primary font-medium">
              {t('form.name.label')}
            </label>
            <input
              type="text"
              name="name"
              required
              value={form.name}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 text-font-muted focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder={t('form.name.placeholder')}
            />
          </div>

          {/* رقم الجوال */}
          <div>
            <label className="block mb-2 text-font-primary font-medium">
              {t('form.phone.label')}
            </label>
            <input
              type="tel"
              name="phone"
              required
              value={form.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 text-font-muted focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder={t('form.phone.placeholder')}
              dir={locale === 'ar' ? 'rtl' : 'ltr'}
            />
          </div>

          {/* نوع الخدمة */}
          <div>
            <label className="block mb-2 text-font-primary font-medium">
              {t('form.serviceType.label')}
            </label>
            <select
              name="service"
              required
              value={form.service}
              onChange={handleChange}
              className="w-full px-4 py-3 text-font-muted rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
            >
              <option value="">{t('form.serviceType.placeholder')}</option>
              {options.map((option, idx) => (
                <option key={idx} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>

          {/* ملاحظات */}
          <div>
            <label className="block mb-2 text-font-primary font-medium">
              {t('form.message.label')}
            </label>
            <textarea
              name="message"
              rows={4}
              value={form.message}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg text-font-muted border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder={t('form.message.placeholder')}
            />
          </div>

          {/* زر الإرسال */}
          <button
            type="submit"
            className="w-full bg-[#1E3A8A] hover:bg-[#3B82F6] text-white font-bold py-3 rounded-lg transition-colors duration-300"
          >
            {t('form.submit')}
          </button>
        </form>
      </div>
    </section>
  );
}
