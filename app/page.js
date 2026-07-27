'use client';

import { useState } from 'react';
import BooksSection from '@/components/BooksSection';
import ContactButtons from '@/components/ContactButtons';

export default function Home() {
  const [lang, setLang] = useState('fa');
  const isFa = lang === 'fa';

  return (
    <main dir={isFa ? 'rtl' : 'ltr'} className="min-h-screen bg-sky-200 text-black font-sans pb-12">
      {/* هدر سایت و دکمه تغییر زبان */}
      <header className="sticky top-0 z-50 bg-sky-400/90 backdrop-blur-md border-b-2 border-sky-600 px-4 py-3 shadow-md">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-3xl">📐</span>
            <div>
              <h1 className="font-black text-lg md:text-xl text-black">
                {isFa ? 'آموزش بین‌المللی ریاضیات' : 'International Math Education'}
              </h1>
              <p className="text-xs font-bold text-black opacity-90">
                {isFa ? 'تدریس تخصصی ریاضیات آزمون‌ها و مقاطع بین‌المللی' : 'Specialized Math Tutoring'}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://t.me/International_Maths"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl text-xs border border-black shadow transition"
            >
              🚀 {isFa ? 'کانال تلگرام' : 'Telegram Channel'}
            </a>

            <button
              onClick={() => setLang(isFa ? 'en' : 'fa')}
              className="px-3 py-1.5 bg-sky-100 hover:bg-sky-300 text-black font-black text-xs rounded-xl border border-black shadow transition"
            >
              🌐 {isFa ? 'English' : 'فارسی'}
            </button>
          </div>
        </div>
      </header>

      {/* بخش بنر و معرفی */}
      <section className="max-w-4xl mx-auto text-center px-4 pt-12 pb-8">
        <h2 className="text-3xl md:text-5xl font-black text-black mb-4 leading-tight">
          {isFa ? 'آموزش بین‌المللی ریاضیات' : 'International Mathematics Tutoring'}
        </h2>
        <p className="text-black font-bold text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
          {isFa
            ? 'آموزش کاملاً مفهومی ریاضیات نظام‌های آموزشی کمبریج، انگلستان، آمریکا، کانادا، استرالیا، آلمان و ترکیه با استفاده از معتبرترین منابع آموزشی روز دنیا.'
            : 'Comprehensive math education for Cambridge, UK, US, Canada, Australia, Germany, and Turkey standard curricula.'}
        </p>

        <div className="mt-6 flex justify-center">
          <a
            href="https://t.me/International_Maths"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-black rounded-2xl border-2 border-black shadow-xl transition transform hover:scale-105"
          >
            {isFa ? 'درخواست کلاس و مشاوره' : 'Request Tutoring'}
          </a>
        </div>
      </section>

      {/* بخش کتاب‌ها با تم آبی آسمانی و فونت مشکی */}
      <div className="max-w-6xl mx-auto px-4">
        <BooksSection lang={lang} />
      </div>

      {/* دکمه‌های شناور ارتباط */}
      <ContactButtons lang={lang} />
    </main>
  );
}
