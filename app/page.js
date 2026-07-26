'use client';

import { useState } from 'react';
import Header from '@/components/Header'; // یا مسیر مربوط به هدر شما
import BooksSection from '@/components/BooksSection';
import Footer from '@/components/Footer'; // یا مسیر مربوط به فوتر شما

export default function Home() {
  // مدیریت متمرکز زبان سایت (fa یا en)
  const [lang, setLang] = useState('fa');

  const toggleLanguage = () => {
    setLang((prevLang) => (prevLang === 'fa' ? 'en' : 'fa'));
  };

  return (
    <div className={`min-h-screen bg-gray-50 text-gray-900 ${lang === 'en' ? 'ltr' : 'rtl'}`} dir={lang === 'en' ? 'ltr' : 'rtl'}>
      {/* هدر سایت همراه با دکمه تغییر زبان */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold text-indigo-900">
            {lang === 'fa' ? 'آموزش بین‌المللی ریاضیات' : 'International Mathematics'}
          </h1>
          
          {/* دکمه تغییر زبان در هدر اصلی */}
          <button
            type="button"
            onClick={toggleLanguage}
            className="px-4 py-2 bg-indigo-50 hover:bg-indigo-100 text-indigo-900 font-semibold rounded-xl text-sm border border-indigo-200 transition-all shadow-sm flex items-center gap-2"
          >
            <span>🌐</span>
            <span>{lang === 'fa' ? 'English' : 'فارسی'}</span>
          </button>
        </div>
      </header>

      {/* محتوای اصلی - فراخوانی بخش کتاب‌ها با زبان جدید */}
      <main className="container mx-auto py-8 px-4">
        <BooksSection lang={lang} />
      </main>

      {/* فوتر ساده */}
      <footer className="bg-white border-t border-gray-200 py-6 text-center text-sm text-gray-500">
        <p>
          {lang === 'fa'
            ? 'تمامی حقوق محفوظ است © آموزش بین‌المللی ریاضیات'
            : 'All rights reserved © International Mathematics'}
        </p>
      </footer>
    </div>
  );
}
