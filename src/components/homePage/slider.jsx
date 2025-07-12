"use client";

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { useLocale } from 'next-intl';

export default function App() {
  const locale = useLocale();
  const isRTL = locale === 'ar'; // لو اللغة عربية

  const imageCount = 6;

  const generateSlides = () => {
    return Array.from({ length: imageCount }, (_, i) => i + 1).map((num) => (
      <SwiperSlide key={num} className="w-full h-full px-6">
        <img
          src={`/images/image${num}.png`}
          alt={`Image ${num}`}
          className="w-full h-28 object-contain cursor-pointer"
        />
      </SwiperSlide>
    ));
  };

  return (
    <Swiper
      dir={isRTL ? 'ltr' : 'rtl'}  // تحكم باتجاه السلايدر
      spaceBetween={50}
      slidesPerView={ 3} // مثال: عرض أقل للغة العربية
      loop={true}
      autoplay={{
        delay: 2200,
        disableOnInteraction: false,
      }}
      modules={[Autoplay, Pagination, Navigation]}
      breakpoints={{
        '@0.00': {
          slidesPerView: 2,
        },
        '@0.75': {
          slidesPerView: 3,
        },
        '@1.00': {
          slidesPerView: 4,
        },
        '@1.50': {
          slidesPerView: 4,
        },
      }}
      className="mySwiper my-14"
    >
      {generateSlides()}
    </Swiper>
  );
}
