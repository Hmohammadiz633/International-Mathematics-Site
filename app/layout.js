'use client';

import './globals.css';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const metadata = {
  title: 'آموزش بین‌المللی ریاضی و تدریس خصوصی GCSE Maths',
  description: 'سایت تخصصی آموزش بین‌المللی ریاضی، تدریس خصوصی ریاضی و دوره‌های تخصصی GCSE Maths با بالاترین کیفیت.',
  keywords: [
    'آموزش بین المللی ریاضی',
    'GCSE Maths',
    'تدریس خصوصی ریاضی',
    'ریاضی بین‌الملل'
  ],
  authors: [{ name: 'International Math' }],
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    title: 'آموزش بین‌المللی ریاضی و تدریس خصوصی GCSE Maths',
    description: 'سایت تخصصی آموزش بین‌المللی ریاضی، تدریس خصوصی ریاضی و دوره‌های تخصصی GCSE Maths.',
    url: 'https://internationalmaths.ir',
    siteName: 'International Math',
    locale: 'fa_IR',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  const pathname = usePathname();

  const navLinks = [
    { name: 'خانه', href: '/' },
    { name: 'نظام آموزشی کشورها', href: '/educational-systems' },
    { name: 'کتب آموزشی', href: '/books' },
    { name: 'تماس با ما', href: '/contact' },
  ];

  return (
    <html lang="fa" dir="rtl">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased">
        
        <header className="bg-white shadow-md sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16 items-center">
              <div className="flex-shrink-0 font-bold text-xl text-blue-600">
                آموزش ریاضی
              </div>

              <nav className="hidden md:flex space-x-reverse space-x-8">
                {navLinks.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                        isActive
                          ? 'bg-slate-200 text-slate-900 font-bold'
                          : 'text-slate-700 hover:bg-slate-100 hover:text-blue-600'
                      }`}
                    >
                      {link.name}
                    </Link>
                  );
                })}
              </nav>
            </div>
          </div>
        </header>

        <main>{children}</main>

      </body>
    </html>
  );
}
