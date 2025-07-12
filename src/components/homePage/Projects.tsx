"use client";
import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

export default function ProjectSection() {
  const t = useTranslations('HomePage.ProjectsSection');
  const projects = t.raw('items'); 

  interface Project {
    id: number;
    img: string;
    name: string;
  }

  
  return (
    <section className="relative bg-gray-50 py-20 px-6">
      {/* خلفية بسيطة */}
      <div className="absolute inset-0 pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" fill="none">
          <circle cx="50" cy="50" r="5" fill="rgba(0,0,0,0.05)">
            <animateMotion dur="30s" repeatCount="indefinite" path="M0,0 L100,100" />
          </circle>
        </svg>
      </div>

      {/* عنوان القسم */}
      <h2 className="text-primary-medium md:text-primary-large font-extrabold text-font-primary text-center mb-4">{t("title")}</h2>
      <p className="text-center text-secondary-small md:text-secondary-medium text-font-muted mb-12">{t("subtitle")}</p>

      {/* المشاريع */}
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto relative z-10">
      {(projects as Project[]).map(({ id, img, name }) => (

          <div
            key={id}
            className="relative group bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer transform transition-transform duration-300 hover:-translate-y-3 hover:shadow-2xl"
            style={{ width: '100%', height: '16rem' }}
          >
            <Image
              src={img}
              alt={name}
              fill
              style={{ objectFit: 'cover' }}
              priority={false}
              className="transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
