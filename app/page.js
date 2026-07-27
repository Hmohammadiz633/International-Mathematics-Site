'use client';

import { useState } from 'react';
import BooksSection from '../components/BooksSection';

export default function Home() {
  const [lang, setLang] = useState('fa');

  const toggleLanguage = () => {
    setLang((prev) => (prev === 'fa' ? 'en' : 'fa'));
  };

  return (
    <div className={`min-h-screen bg-slate-900 text-slate-100 ${lang === 'en' ? 'ltr' : 'rtl'}`} dir={lang === 'en' ? 'ltr' : 'rtl'}>
      {/* هدر سایت با قابلیت تغییر زبان */}
      <header className="bg-slate-800/80 backdrop-blur border-b border-slate-700 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <span className="text-2xl">📐</span>
            <h1 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-indigo-300 bg-clip-text text-transparent">
              {lang === 'fa' ? 'آموزش بین‌المللی ریاضیات' : 'International Mathematics'}
            </h1>
          </div>

          <button
            type="button"
            onClick={toggleLanguage}
            className="px-4 py-2 bg-slate-700 hover:bg-slate-600 text-blue-300 font-semibold rounded-xl flex items-center gap-2 transition border border-slate-600 shadow-sm"
          >
            <span>🌐</span>
            <span>{lang === 'fa' ? 'English' : 'فارسی'}</span>
          </button>
        </div>
      </header>

      {/* بخش اصلی */}
      <main className="container mx-auto py-8 px-4">
        <BooksSection lang={lang} />
      </main>

      {/* فوتر */}
      <footer className="bg-slate-800 border-t border-slate-700 py-6 text-center text-sm text-slate-400 mt-12">
        <p>
          {lang === 'fa'
            ? 'تمامی حقوق محفوظ است © آموزش بین‌المللی ریاضیات'
            : 'All rights reserved © International Mathematics'}
        </p>
      </footer>
    </div>
  );
}
