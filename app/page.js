'use client';

import { useState } from 'react';
import BooksSection from '@/components/BooksSection';
import ContactButtons from '@/components/ContactButtons';

export default function Home() {
  const [lang, setLang] = useState('fa');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isFa = lang === 'fa';

  const scrollToSection = (id) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main dir={isFa ? 'rtl' : 'ltr'} className="min-h-screen bg-white text-black font-sans pb-12">
      {/* هدر اصلی */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200 px-4 py-3 shadow-sm">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          
          {/* سمت راست: منوی همبرگری (سه خط) */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-black bg-gray-100 hover:bg-gray-200 rounded-lg border border-gray-300 transition"
              aria-label="Toggle Menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>

            {/* لوگو و عنوان */}
            <div className="flex items-center gap-2">
              <span className="text-2xl">📐</span>
              <h1 className="font-bold text-base md:text-lg text-black">
                {isFa ? 'آموزش بین‌المللی ریاضیات' : 'International Math'}
              </h1>
            </div>
          </div>

          {/* سمت چپ: پکیج تغییر زبان کنار هم با خط عمودی */}
          <div className="flex items-center gap-2 bg-gray-100 px-3 py-1.5 rounded-lg border border-gray-300">
            <button
              onClick={() => setLang('fa')}
              className={`text-xs font-bold transition ${isFa ? 'text-black underline' : 'text-gray-500 hover:text-black'}`}
            >
              فارسی
            </button>
            <span className="text-gray-400 font-light">|</span>
            <button
              onClick={() => setLang('en')}
              className={`text-xs font-bold transition ${!isFa ? 'text-black underline' : 'text-gray-500 hover:text-black'}`}
            >
              English
            </button>
          </div>
        </div>

        {/* منوی کشویی همبرگری */}
        {isMenuOpen && (
          <div className="max-w-6xl mx-auto mt-3 pt-3 border-t border-gray-200 flex flex-col gap-2">
            <button
              onClick={() => scrollToSection('about')}
              className="text-right px-4 py-2 text-sm font-bold text-black bg-gray-50 hover:bg-gray-100 rounded-lg border border-gray-200 transition"
            >
              👤 {isFa ? 'درباره من' : 'About Me'}
            </button>
            <button
              onClick={() => scrollToSection('books')}
              className="text-right px-4 py-2 text-sm font-bold text-black bg-gray-50 hover:bg-gray-100 rounded-lg border border-gray-200 transition"
            >
              📚 {isFa ? 'کتب آموزشی' : 'Books'}
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-right px-4 py-2 text-sm font-bold text-black bg-gray-50 hover:bg-gray-100 rounded-lg border border-gray-200 transition"
            >
              📞 {isFa ? 'ارتباط با استاد' : 'Contact'}
            </button>
          </div>
        )}
      </header>

      {/* بخش درباره من / بنر اصلی */}
      <section id="about" className="max-w-4xl mx-auto text-center px-4 pt-12 pb-8">
        <h2 className="text-3xl md:text-5xl font-extrabold text-black mb-4">
          {isFa ? 'آموزش بین‌المللی ریاضیات' : 'International Mathematics Tutoring'}
        </h2>
        <p className="text-black text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
          {isFa
            ? 'آموزش کاملاً مفهومی ریاضیات نظام‌های آموزشی کمبریج، انگلستان، آمریکا، کانادا، استرالیا، آلمان و ترکیه با معتبرترین منابع روز دنیا.'
            : 'Comprehensive math education for Cambridge, UK, US, Canada, Australia, Germany, and Turkey standard curricula.'}
        </p>

        <div className="mt-6 flex justify-center">
          <a
            href="https://t.me/International_Maths"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-gray-200 hover:bg-gray-300 text-black font-bold rounded-xl border border-gray-400 shadow-sm transition"
          >
            {isFa ? 'درخواست کلاس و مشاوره' : 'Request Tutoring'}
          </a>
        </div>
      </section>

      {/* بخش کتاب‌ها */}
      <div id="books" className="max-w-6xl mx-auto px-4 mt-8">
        <BooksSection lang={lang} />
      </div>

      {/* دکمه‌های ارتباط */}
      <div id="contact">
        <ContactButtons lang={lang} />
      </div>
    </main>
  );
}
