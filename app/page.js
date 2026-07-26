'use client';

import { useState } from 'react';
import BooksSection from '../components/BooksSection';

export default function Home() {
  const [lang, setLang] = useState('fa');

  const toggleLanguage = () => {
    setLang((prev) => (prev === 'fa' ? 'en' : 'fa'));
  };

  return (
    <div className={`min-h-screen bg-gray-50 text-gray-900 ${lang === 'en' ? 'ltr' : 'rtl'}`} dir={lang === 'en' ? 'ltr' : 'rtl'}>
      {/* هدر سایت همراه با دکمه تغییر زبان */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold text-indigo-900">
            {lang === 'fa' ? 'آموزش بین‌المللی ریاضیات' : 'International Mathematics'}
          </h1>
          
          <button
            type="button"
            onClick={toggleLanguage}
            className="px-4 py-2 bg-indigo-50 hover:bg-indigo-100 text-indigo-900 font-semibold rounded-xl text-sm border border-indigo-200 transition-all shadow-sm flex items-center gap-2 cursor-pointer"
          >
            <span>🌐</span>
            <span>{lang === 'fa' ? 'English' : 'فارسی'}</span>
          </button>
        </div>
      </header>

      {/* بخش اصلی نمایش کتاب‌ها */}
      <main className="container mx-auto py-8 px-4">
        <BooksSection lang={lang} />
      </main>

      {/* فوتر ساده */}
      <footer className="bg-white border-t border-gray-200 py-6 text-center text-sm text-gray-500 mt-12">
        <p>
          {lang === 'fa'
            ? 'تمامی حقوق محفوظ است © آموزش بین‌المللی ریاضیات'
            : 'All rights reserved © International Mathematics'}
        </p>
      </footer>
    </div>
  );
}
