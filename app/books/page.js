'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function BooksPage() {
  const [lang, setLang] = useState('fa');
  const isFa = lang === 'fa';

  const booksData = [
    {
      flag: '🇺🇸',
      countryFa: 'کتب نظام آموزشی آمریکا (USA)',
      countryEn: 'US Educational Books',
      descriptionFa: 'کتب استاندارد AP Calculus, SAT Math, Pre-Calculus و Algebra به همراه حل‌المسائل کامل.',
      descriptionEn: 'Standard AP Calculus, SAT Math, Pre-Calculus, and Algebra books with solutions.',
      link: 'https://t.me/International_Maths'
    },
    {
      flag: '🇬🇧',
      countryFa: 'کتب نظام آموزشی انگلستان (UK)',
      countryEn: 'UK Educational Books',
      descriptionFa: 'منابع جامع A-Level Math, Pure Mathematics, Mechanics و GCSE.',
      descriptionEn: 'Comprehensive sources for A-Level Math, Pure Mathematics, Mechanics, and GCSE.',
      link: 'https://t.me/International_Maths'
    },
    {
      flag: '🇨🇦',
      countryFa: 'کتب نظام آموزشی کانادا (Canada)',
      countryEn: 'Canada Educational Books',
      descriptionFa: 'کتب درسی استانی اناریو و بریتیش کلمبیا برای پایه‌های ۹ تا ۱۲.',
      descriptionEn: 'Ontario and British Columbia curriculum math books for grades 9 to 12.',
      link: 'https://t.me/International_Maths'
    },
    {
      flag: '🇦🇺',
      countryFa: 'کتب نظام آموزشی استرالیا (Australia)',
      countryEn: 'Australia Educational Books',
      descriptionFa: 'منابع HSC و VCE Mathematics (Methods, Specialist, General).',
      descriptionEn: 'HSC and VCE Mathematics resources (Methods, Specialist, General).',
      link: 'https://t.me/International_Maths'
    },
  ];

  return (
    <main dir={isFa ? 'rtl' : 'ltr'} className="min-h-screen bg-slate-50 text-slate-900 font-sans pb-12 antialiased">
      {/* هدر */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200/80 px-4 py-3 shadow-sm">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link 
              href="/" 
              className="px-3 py-1.5 bg-gray-100 hover:bg-gray-200 text-slate-700 rounded-xl text-xs font-bold transition flex items-center gap-1"
            >
              <span>{isFa ? '← بازگشت به صفحه اصلی' : '← Back to Home'}</span>
            </Link>
            <h1 className="font-black text-base md:text-xl text-slate-800 tracking-tight">
              📚 {isFa ? 'کتب و منابع آموزشی' : 'Books & Educational Resources'}
            </h1>
          </div>

          <div className="flex items-center gap-2 bg-gray-100 px-3 py-1.5 rounded-lg border border-gray-300">
            <button 
              type="button"
              onClick={() => setLang('fa')} 
              className={`text-xs font-bold transition ${isFa ? 'text-blue-700 underline font-black' : 'text-gray-500 hover:text-black'}`}
            >
              فارسی
            </button>
            <span className="text-gray-400 font-light">|</span>
            <button 
              type="button"
              onClick={() => setLang('en')} 
              className={`text-xs font-bold transition ${!isFa ? 'text-blue-700 underline font-black' : 'text-gray-500 hover:text-black'}`}
            >
              English
            </button>
          </div>
        </div>
      </header>

      {/* بخش اصلی کتب تدریس شده کشورها */}
      <section id="country-books" className="max-w-5xl mx-auto px-4 pt-10">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-4xl font-black text-slate-900 mb-3">
            {isFa ? 'کتب تدریس شده کشورها' : 'Textbooks by Country'}
          </h2>
          <p className="text-slate-600 text-sm md:text-base">
            {isFa ? 'مجموعه کتاب‌ها و منابع درسی مورد استفاده در نظام‌های آموزشی مختلف' : 'Curriculum textbooks used in international educational systems'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {booksData.map((item, idx) => (
            <div key={idx} className="bg-white p-6 rounded-2xl border border-gray-200/90 shadow-sm hover:shadow-md transition flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 border-b border-gray-100 pb-3 mb-4">
                  <span className="text-3xl">{item.flag}</span>
                  <h3 className="font-bold text-base md:text-lg text-slate-800">
                    {isFa ? item.countryFa : item.countryEn}
                  </h3>
                </div>
                <p className="text-slate-600 text-xs md:text-sm leading-relaxed text-justify mb-5 font-normal">
                  {isFa ? item.descriptionFa : item.descriptionEn}
                </p>
              </div>

              <a 
                href={item.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-full py-2.5 px-4 bg-blue-50 hover:bg-blue-100 text-blue-900 text-xs md:text-sm font-bold rounded-xl border border-blue-200/80 transition flex items-center justify-between group"
              >
                <span>{isFa ? 'مشاهده در تلگرام' : 'View on Telegram'}</span>
                <span className="text-blue-600 font-bold group-hover:translate-x-1 transition-transform">↗</span>
              </a>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
