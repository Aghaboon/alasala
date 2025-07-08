"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import Image from 'next/image';
import { useLocale, useTranslations } from "next-intl";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const locale = useLocale(); // ar / en

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const t = useTranslations('Header');
  const navBar = t.raw("navBar");
  const navLinks = Object.entries(navBar).map(([key, value]) => ({
    href: value.href,
    label: value.label,
  }));

  const isRTL = locale === "ar";

  return (
    <nav className="bg-white shadow-md w-full z-50">
      <div
        className={`max-w-7xl mx-auto p-2 lg:p-4 flex justify-between items-center ${isRTL ? "flex-row-reverse text-end" : "flex-row text-start"
          }`}
      >
        {/* Logo */}
        <Link href="/" className="relative w-28 h-10 md:w-40 md:h-14">
          <Image
            src="/logo.jpg"
            alt="Company Logo"
            fill
            className="object-contain"
            priority
          />
        </Link>

        {/* Desktop Links */}
        <div className={`hidden md:flex gap-6 ${isRTL ? 'flex-row-reverse' : 'flex-row'}`}>
          {navLinks.map(({ href, label }) => (
            <Link key={href} href={href} className="text-gray-700 hover:text-blue-600">
              {label}
            </Link>
          ))}
        </div>

        {/* Language Switcher */}
        <LanguageSwitcher />

        {/* Mobile Menu Button */}
        <button onClick={toggleMenu} className="md:hidden text-gray-700">
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <div
            className={`flex flex-col px-4 py-2 space-y-2 ${isRTL ? "items-end text-end" : "items-start text-start"
              }`}
          >
            {navLinks.map(({ href, label }) => (
              <Link key={href} href={href} className="text-gray-700 hover:text-blue-600">
                {label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
