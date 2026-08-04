'use client';

import React, { useState } from 'react';
import Link from 'next/link';

// لیست بازخوردهای نمونه
const FEEDBACKS = [
  { fa: '۱ | بازخورد ۱', en: '1 | Feedback 1', link: 'https://t.me/International_Maths/110' },
  { fa: '۲ | بازخورد ۲', en: '2 | Feedback 2', link: 'https://t.me/International_Maths/111' },
  { fa: '۳ | بازخورد ۳', en: '3 | Feedback 3', link: 'https://t.me/International_Maths/1352' },
];

export default function HomePage() {
  const [lang, setLang] = useState('fa');
  const isFa = lang === 'fa';

  return (
    <main dir={isFa ? 'rtl' : 'ltr'} className="min-h-screen bg-slate-50 text-slate-900 font-sans p-4 md:p-8 antialiased">
      <div className="max-w-4xl mx-auto">
        
        {/* تغییر زبان در بالای صفحه */}
        <div className="flex justify-end mb-6">
          <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-xl border border-slate-200 shadow-sm">
            <button 
              type="button"
              onClick={() => setLang('fa')} 
              className={`text-xs font-bold transition ${isFa ? 'text-slate-900 underline font-black' : 'text-slate-400 hover:text-black'}`}
            >
              فارسی
            </button>
            <span className="text-slate-300 font-light">|</span>
            <button 
              type="button"
              onClick={() => setLang('en')} 
              className={`text-xs font-bold transition ${!isFa ? 'text-slate-900 underline font-black' : 'text-slate-400 hover:text-black'}`}
            >
              English
            </button>
          </div>
        </div>

        {/* هدر و عنوان اصلی */}
        <div className="bg-white rounded-3xl p-6 md:p-10 border border-slate-200 shadow-sm text-center mb-8">
          <h1 className="text-2xl md:text-4xl font-black text-slate-900 mb-4">
            🌐 {isFa ? 'مرجع بین‌المللی آموزش ریاضیات' : 'International Mathematics Hub'}
          </h1>
          <p className="text-slate-600 text-sm md:text-base max-w-2xl mx-auto mb-8 leading-relaxed">
            {isFa 
              ? 'دسترسی سریع به معتبرترین سایت‌های آموزشی ریاضیات در سراسر جهان، منابع مدرسه‌ای، دانشگاهی و المپیادی.'
              : 'Quick access to top mathematical educational resources, school curricula, and university materials worldwide.'}
          </p>

          {/* دکمه‌های ناوبری اصلی */}
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/math-sites"
              className="px-6 py-3.5 bg-slate-800 hover:bg-slate-900 text-white font-bold rounded-2xl shadow-md hover:shadow-lg transition flex items-center gap-2 text-sm md:text-base"
            >
              <span>💻</span>
              <span>{isFa ? 'سایت‌های ریاضی کشورها' : 'Country Math Sites'}</span>
            </Link>
          </div>
        </div>

        {/* بخش بازخوردها */}
        <div className="bg-white rounded-3xl p-6 md:p-8 border border-slate-200 shadow-sm mb-8">
          <h2 className="text-lg md:text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
            💬 {isFa ? 'نظرات و بازخوردها' : 'Feedbacks & Testimonials'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {FEEDBACKS.map((item, idx) => (
              <a
                key={idx}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-2xl transition flex items-center justify-between text-sm font-semibold text-slate-700 hover:text-slate-900"
              >
                <span>{isFa ? item.fa : item.en}</span>
                <span className="text-xs text-slate-400">↗</span>
              </a>
            ))}
          </div>
        </div>

        {/* فوتر ساده */}
        <footer className="text-center text-xs text-slate-400 py-4">
          {isFa ? 'تمام حقوق محفوظ است © ۲۰۲۶' : 'All rights reserved © 2026'}
        </footer>

      </div>
    </main>
  );
}
