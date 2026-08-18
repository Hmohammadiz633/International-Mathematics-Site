'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLanguage } from '@/context/LanguageContext'; // ۱. وارد کردن هوک زبان

export default function Navbar() {
  const pathname = usePathname();
  const { language } = useLanguage(); // ۲. خواندن زبان فعلی

  // ۳. تعریف دیکشنری ترجمه‌ها
  const translations = {
    fa: {
      home: 'خانه',
      systems: 'نظام آموزشی کشورها',
      books: 'کتب آموزشی',
      mathSites: 'سایت‌های ریاضی',
      contact: 'ارتباط با استاد',
    },
    en: {
      home: 'Home',
      systems: 'Educational Systems',
      books: 'Books',
      mathSites: 'Math Websites',
      contact: 'Contact',
    }
  };

  const t = translations[language]; // انتخاب ترجمه بر اساس زبان فعلی

  const navLinks = [
    { name: t.home, href: '/' },
    { name: t.systems, href: '/educational-systems' },
    { name: t.books, href: '/books' },
    { name: t.mathSites, href: '/math-sites' },
    { name: t.contact, href: '/contact' },
  ];

  return (
    <nav className="bg-white shadow-sm p-4 flex flex-wrap gap-4 items-center">
      {navLinks.map((link) => {
        const isActive = pathname === link.href;
        return (
          <Link
            key={link.href}
            href={link.href}
            className={`px-3 py-2 rounded-md transition-colors ${
              isActive
                ? 'bg-slate-300 text-slate-950 font-bold shadow-sm'
                : 'text-slate-700 hover:bg-slate-100'
            }`}
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
}
