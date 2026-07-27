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
    <div className={`min-h-screen bg-sky-950 text-sky-50 ${isFa ? 'rtl' : 'ltr'}`} dir={isFa ? 'rtl' : 'ltr'}>
      {/* هدر کامل پروژه */}
      <header className="bg-sky-900/90 backdrop-blur border-b border-sky-800 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-3 flex flex-wrap justify-between items-center gap-4">
          
          {/* لوگو و تیتر اصلی سایت */}
          <div className="flex items-center gap-3">
            <span className="text-3xl">📐</span>
            <div>
              <h1 className="text-lg md:text-xl font-bold bg-gradient-to-r from-sky-300 via-teal-300 to-emerald-400 bg-clip-text text-transparent">
                {isFa ? 'آموزش بین‌المللی ریاضیات' : 'International Mathematics'}
              </h1>
              <p className="text-xs text-sky-300/80">
                {isFa ? 'تدریس تخصصی ریاضیات آزمون‌ها و مقاطع بین‌المللی' : 'Specialized International Math Tutoring'}
              </p>
            </div>
          </div>

          {/* منوهای بالای صفحه */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-sky-200">
            <a href="#hero" className="hover:text-emerald-400 transition">{isFa ? 'صفحه اصلی' : 'Home'}</a>
            <a href="#resume" className="hover:text-emerald-400 transition">{isFa ? 'رزومه استاد' : 'Resume'}</a>
            <a href="#books" className="hover:text-emerald-400 transition">{isFa ? 'کتاب‌های تدریس‌شده' : 'Taught Books'}</a>
            <a href="#contact" className="hover:text-emerald-400 transition">{isFa ? 'ارتباط با استاد' : 'Contact'}</a>
          </nav>

          {/* دکمه‌های اکشن و تغییر زبان */}
          <div className="flex items-center gap-3">
            <a
              href="https://t.me/International_Maths"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-2 bg-emerald-600 hover:bg-emerald-500 text-white text-xs md:text-sm font-semibold rounded-xl flex items-center gap-2 transition shadow-lg shadow-emerald-600/20"
            >
              <span>✈️</span>
              <span>{isFa ? 'کانال تلگرام' : 'Telegram Channel'}</span>
            </a>

            <button
              type="button"
              onClick={toggleLanguage}
              className="px-3.5 py-2 bg-sky-800 hover:bg-sky-700 text-sky-200 text-xs md:text-sm font-semibold rounded-xl flex items-center gap-1.5 transition border border-sky-700 shadow-sm"
            >
              <span>🌐</span>
              <span>{isFa ? 'English' : 'فارسی'}</span>
            </button>
          </div>
        </div>
      </header>

      {/* بنر اصلی / Hero Section */}
      <section id="hero" className="py-12 md:py-16 bg-gradient-to-b from-sky-900/60 via-sky-950 to-sky-950 border-b border-sky-800/60">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <span className="px-4 py-1.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs md:text-sm font-semibold inline-block mb-4">
            🌟 {isFa ? 'تدریس خصوصی و آنلاین ریاضیات بین‌المللی' : 'Online & Private International Math Tutoring'}
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight bg-gradient-to-r from-sky-200 via-teal-200 to-emerald-300 bg-clip-text text-transparent">
            {isFa ? 'آموزش بین‌المللی ریاضیات' : 'International Mathematics'}
          </h2>
          <p className="text-sky-200/90 text-sm md:text-lg max-w-3xl mx-auto leading-relaxed mb-8">
            {isFa 
              ? 'آموزش کاملاً مفهومی ریاضیات نظام‌های آموزشی کمبریج، انگلستان، آمریکا، کانادا، استرالیا، آلمان و ترکیه با استفاده از معتبرترین منابع آموزشی روز دنیا.'
              : 'Comprehensive math tutoring for Cambridge, UK, USA, Canada, Australia, Germany, and Turkey educational systems using official textbooks.'}
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="#contact"
              className="px-6 py-3 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold rounded-xl shadow-lg transition"
            >
              {isFa ? 'درخواست کلاس و مشاوره' : 'Request Class & Consultation'}
            </a>
          </div>
        </div>
      </section>

      {/* رزومه استاد */}
      <section id="resume" className="py-12 border-b border-sky-800/60">
        <div className="max-w-5xl mx-auto px-4">
          <div className="bg-sky-900/50 rounded-3xl p-6 md:p-8 border border-sky-800 shadow-xl backdrop-blur">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="w-24 h-24 md:w-32 md:h-32 rounded-2xl bg-gradient-to-tr from-sky-500 via-teal-500 to-emerald-500 flex items-center justify-center text-5xl shadow-lg shrink-0">
                👨‍🏫
              </div>
              <div>
                <h3 className="text-2xl font-bold text-sky-100 mb-2">
                  {isFa ? 'درباره و رزومه استاد هادی محمدی زرندینی' : 'Profile & Resume of Hadi Mohammadi Zarandini'}
                </h3>
                <p className="text-sky-200/90 text-sm md:text-base leading-relaxed mb-4">
                  {isFa
                    ? 'مدرس بین‌المللی ریاضیات با سال‌ها تجربه در تدریس دوره‌های Cambridge IGCSE, A-Level, IB Math, SAT, AP Calculus و آزمون‌های ورودی دانشگاه‌های معتبر جهان.'
                    : 'International Math Instructor with years of experience teaching Cambridge IGCSE, A-Level, IB Math, SAT, AP Calculus, and university entrance exams.'}
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-sky-800/80 text-emerald-300 rounded-lg text-xs border border-sky-700">IGCSE / A-Level</span>
                  <span className="px-3 py-1 bg-sky-800/80 text-emerald-300 rounded-lg text-xs border border-sky-700">IB Mathematics</span>
                  <span className="px-3 py-1 bg-sky-800/80 text-emerald-300 rounded-lg text-xs border border-sky-700">SAT & AP Math</span>
                  <span className="px-3 py-1 bg-sky-800/80 text-emerald-300 rounded-lg text-xs border border-sky-700">Calculus & Algebra</span>
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

      {/* بخش چهار راه ارتباطی استاد */}
      <section id="contact" className="py-12 bg-sky-900/30 border-t border-sky-800/60">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-sky-100">
            📞 {isFa ? 'ارتباط با استاد' : 'Contact Teacher'}
          </h2>
          <p className="text-sky-200/80 text-sm md:text-base mb-10">
            {isFa
              ? 'جهت مشاوره، ثبت‌نام کلاس‌های آنلاین/خصوصی و هماهنگی از راه‌های ارتباطی زیر استفاده کنید:'
              : 'For enrollment, tutoring, and consultation, use the contact channels below:'}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {/* ۱. تلگرام */}
            <a
              href="https://t.me/International_Maths"
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 bg-sky-900/60 hover:bg-sky-800/80 border border-sky-700 hover:border-sky-400 rounded-2xl transition group flex flex-col items-center justify-center gap-3 shadow-lg"
            >
              <div className="w-14 h-14 rounded-2xl bg-sky-500/20 flex items-center justify-center text-3xl group-hover:scale-110 transition">
                ✈️
              </div>
              <span className="font-bold text-sky-100 group-hover:text-emerald-30
