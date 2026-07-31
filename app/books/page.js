'use client';

import { useState } from 'react';
import Link from 'next/link';
import BooksSection from '@/components/BooksSection';

export default function BooksPage() {
  const [lang, setLang] = useState('fa');
  const isFa = lang === 'fa';

  return (
    <main dir={isFa ? 'rtl' : 'ltr'} className="min-h-screen bg-white text-black font-sans pb-12">
      {/* هدر صفحه کتاب‌ها */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200 px-4 py-3 shadow-sm">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          
          {/* دکمه بازگشت به صفحه اصلی */}
          <Link 
            href="/" 
            className="flex items-center gap-2 px-3 py-1.5 bg-gray-100 hover:bg-gray-200 text-black text-xs font-bold rounded-lg border border-gray-300 transition"
          >
            <span>{isFa ? '← بازگشت به صفحه اصلی' : '← Back to Home'}</span>
          </Link>

          {/* تغییر زبان */}
          <div className="flex items-center gap-2 bg-gray-100 px-3 py-1.5 rounded-lg border border-gray-300">
            <button 
              type="button"
              onClick={() => setLang('fa')} 
              className={`text-xs font-bold transition ${isFa ? 'text-black underline' : 'text-gray-500 hover:text-black'}`}
            >
              فارسی
            </button>
            <span className="text-gray-400 font-light">|</span>
            <button 
              type="button"
              onClick={() => setLang('en')} 
              className={`text-xs font-bold transition ${!isFa ? 'text-black underline' : 'text-gray-500 hover:text-black'}`}
            >
              English
            </button>
          </div>
        </div>
      </header>

      {/* عنوان صفحه */}
      <section className="max-w-4xl mx-auto text-center px-4 pt-8 pb-4">
        <h1 className="text-3xl md:text-4xl font-extrabold text-black mb-2">
          📚 {isFa ? 'کتب و منابع آموزشی' : 'Educational Books & Resources'}
        </h1>
        <p className="text-gray-600 text-sm md:text-base">
          {isFa ? 'مجموعه کامل کتاب‌های آموزشی ریاضیات نظام‌های بین‌المللی' : 'Comprehensive collection of international math textbooks'}
        </p>
      </section>

      {/* کامپوننت کتاب‌ها */}
      <div className="max-w-6xl mx-auto px-4 mt-6">
        <BooksSection lang={lang} />
      </div>
    </main>
  );
}
