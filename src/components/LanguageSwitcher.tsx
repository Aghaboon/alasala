"use client";

// import { useRouter, usePathname } from "next-intl/client";
import { useLocale } from "next-intl";
import { Globe } from "lucide-react";
import { usePathname, useRouter } from "@/i18n/navigation";

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname(); // auto handles current path without locale prefix
  const locale = useLocale();

  const otherLocale = locale === "ar" ? "en" : "ar";

  const handleLanguageChange = () => {
    router.replace(pathname, { locale: otherLocale });
  };

  return (
    <button
      onClick={handleLanguageChange}
      className="flex items-center gap-1 px-3 py-1 rounded-md border border-gray-300 text-sm hover:bg-gray-100 transition"
    >
      <Globe size={16} />
      {otherLocale.toUpperCase()}
    </button>
  );
}
