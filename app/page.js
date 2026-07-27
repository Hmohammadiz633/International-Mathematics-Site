'use client';

import { useState } from 'react';
import BooksSection from '../components/BooksSection';

export default function Home() {
  const [lang, setLang] = useState('fa');

  const toggleLanguage = () => {
    setLang((prev) => (prev === 'fa' ? 'en' : 'fa'));
  };

  const isFa = lang === 'fa';

  return (
    <div className={`min-h-screen bg-slate-50 text-slate-800 ${isFa ? 'rtl' : 'ltr'}`} dir={isFa ? 'rtl' : 'ltr'}>
      {/* هدر سایت با تم آبی آسمانی و روشن */}
      <header className="bg-white/90 backdrop-blur border-b border-sky-100 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-3 flex flex-wrap justify-between items-center gap-4">
          
          {/* لوگو و عنوان سایت */}
          <div className="flex items-center gap-3">
            <span className="text-3xl">📐</span>
            <div>
              <h1 className="text-lg md:text-xl font-bold text-sky-900">
                {isFa ? 'آموزش بین‌المللی ریاضیات' : 'International Mathematics'}
              </h1>
              <p className="text-xs text-sky-600">
                {isFa ? 'تدریس تخصصی ریاضیات آزمون‌ها و مقاطع بین‌المللی' : 'Specialized International Math Tutoring'}
              </p>
            </div>
          </div>

          {/* منوهای بالای صفحه */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-semibold text-slate-600">
            <a href="#hero" className="hover:text-sky-600 transition">{isFa ? 'صفحه اصلی' : 'Home'}</a>
            <a href="#resume" className="hover:text-sky-600 transition">{isFa ? 'رزومه استاد' : 'Resume'}</a>
            <a href="#books" className="hover:text-sky-600 transition">{isFa ? 'کتاب‌های تدریس‌شده' : 'Taught Books'}</a>
            <a href="#contact" className="hover:text-sky-600 transition">{isFa ? 'ارتباط با استاد' : 'Contact'}</a>
          </nav>

          {/* دکمه‌های اکشن و تغییر زبان */}
          <div className="flex items-center gap-3">
            <a
              href="https://t.me/International_Maths"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-sky-500 hover:bg-sky-600 text-white text-xs md:text-sm font-semibold rounded-xl flex items-center gap-2 transition shadow-md shadow-sky-500/20"
            >
              <span>✈️</span>
              <span>{isFa ? 'کانال تلگرام' : 'Telegram Channel'}</span>
            </a>

            <button
              type="button"
              onClick={toggleLanguage}
              className="px-3.5 py-2 bg-sky-50 hover:bg-sky-100 text-sky-700 text-xs md:text-sm font-semibold rounded-xl flex items-center gap-1.5 transition border border-sky-200"
            >
              <span>🌐</span>
              <span>{isFa ? 'English' : 'فارسی'}</span>
            </button>
          </div>
        </div>
      </header>

      {/* بنر اصلی / Hero Section */}
      <section id="hero" className="py-12 md:py-16 bg-gradient-to-b from-sky-100/60 via-sky-50/30 to-transparent border-b border-sky-100">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <span className="px-4 py-1.5 rounded-full bg-sky-500/10 text-sky-700 border border-sky-200 text-xs md:text-sm font-semibold inline-block mb-4">
            🌟 {isFa ? 'تدریس خصوصی و آنلاین ریاضیات بین‌المللی' : 'Online & Private International Math Tutoring'}
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6 text-sky-950 leading-tight">
            {isFa ? 'آموزش بین‌المللی ریاضیات' : 'International Mathematics'}
          </h2>
          <p className="text-slate-600 text-sm md:text-lg max-w-3xl mx-auto leading-relaxed mb-8">
            {isFa 
              ? 'آموزش کاملاً مفهومی ریاضیات نظام‌های آموزشی کمبریج، انگلستان، آمریکا، کانادا، استرالیا، آلمان و ترکیه با استفاده از معتبرترین منابع آموزشی روز دنیا.'
              : 'Comprehensive math tutoring for Cambridge, UK, USA, Canada, Australia, Germany, and Turkey educational systems using official textbooks.'}
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="#contact"
              className="px-6 py-3 bg-sky-600 hover:bg-sky-700 text-white font-bold rounded-xl shadow-lg shadow-sky-600/20 transition"
            >
              {isFa ? 'درخواست کلاس و مشاوره' : 'Request Class & Consultation'}
            </a>
          </div>
        </div>
      </section>

      {/* رزومه استاد */}
      <section id="resume" className="py-12 border-b border-sky-100">
        <div className="max-w-5xl mx-auto px-4">
          <div className="bg-white rounded-3xl p-6 md:p-8 border border-sky-100 shadow-xl shadow-sky-500/5">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="w-24 h-24 md:w-32 md:h-32 rounded-2xl bg-gradient-to-tr from-sky-400 to-indigo-500 flex items-center justify-center text-5xl text-white shadow-lg shadow-sky-400/30 shrink-0">
                👨‍🏫
              </div>
              <div>
                <h3 className="text-2xl font-bold text-sky-950 mb-2">
                  {isFa ? 'درباره و رزومه استاد' : 'Teacher Profile & Resume'}
                </h3>
                <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-4">
                  {isFa
                    ? 'مدرس بین‌المللی ریاضیات با سال‌ها تجربه در تدریس دوره‌های Cambridge IGCSE, A-Level, IB Math, SAT, AP Calculus و آزمون‌های ورودی دانشگاه‌های معتبر جهان.'
                    : 'International Math Instructor with years of experience teaching Cambridge IGCSE, A-Level, IB Math, SAT, AP Calculus, and university entrance exams.'}
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-sky-50 text-sky-700 border border-sky-200 rounded-lg text-xs font-medium">IGCSE / A-Level</span>
                  <span className="px-3 py-1 bg-sky-50 text-sky-700 border border-sky-200 rounded-lg text-xs font-medium">IB Mathematics</span>
                  <span className="px-3 py-1 bg-sky-50 text-sky-700 border border-sky-200 rounded-lg text-xs font-medium">SAT & AP Math</span>
                  <span className="px-3 py-1 bg-sky-50 text-sky-700 border border-sky-200 rounded-lg text-xs font-medium">Calculus & Algebra</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* بخش اصلی کتاب‌ها */}
      <main id="books" className="container mx-auto py-8 px-4">
        <BooksSection lang={lang} />
      </main>

      {/* بخش ارتباط با استاد - کادرهای زیر هم با اطلاعات کامل */}
      <section id="contact" className="py-12 bg-sky-50/50 border-t border-sky-100">
        <div
