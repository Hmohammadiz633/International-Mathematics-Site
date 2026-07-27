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
    <div className={`min-h-screen bg-slate-900 text-slate-100 ${isFa ? 'rtl' : 'ltr'}`} dir={isFa ? 'rtl' : 'ltr'}>
      {/* هدر کامل پروژه همراه با منوها و دکمه تغییر زبان */}
      <header className="bg-slate-800/90 backdrop-blur border-b border-slate-700 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-3 flex flex-wrap justify-between items-center gap-4">
          
          {/* لوگو و عنوان سایت */}
          <div className="flex items-center gap-3">
            <span className="text-3xl">📐</span>
            <div>
              <h1 className="text-lg md:text-xl font-bold bg-gradient-to-r from-blue-400 to-indigo-300 bg-clip-text text-transparent">
                {isFa ? 'آموزش بین‌المللی ریاضیات' : 'International Mathematics'}
              </h1>
              <p className="text-xs text-slate-400">
                {isFa ? 'تدریس تخصصی ریاضیات آزمون‌ها و مقاطع بین‌المللی' : 'Specialized International Math Tutoring'}
              </p>
            </div>
          </div>

          {/* منوهای بالای صفحه */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-300">
            <a href="#hero" className="hover:text-blue-400 transition">{isFa ? 'صفحه اصلی' : 'Home'}</a>
            <a href="#resume" className="hover:text-blue-400 transition">{isFa ? 'رزومه استاد' : 'Resume'}</a>
            <a href="#books" className="hover:text-blue-400 transition">{isFa ? 'کتاب‌های تدریس‌شده' : 'Taught Books'}</a>
            <a href="#contact" className="hover:text-blue-400 transition">{isFa ? 'ارتباط با استاد' : 'Contact'}</a>
          </nav>

          {/* دکمه‌های اکشن و تغییر زبان */}
          <div className="flex items-center gap-3">
            <a
              href="https://t.me/International_Maths"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-2 bg-blue-600 hover:bg-blue-500 text-white text-xs md:text-sm font-semibold rounded-xl flex items-center gap-2 transition shadow-lg shadow-blue-600/20"
            >
              <span>✈️</span>
              <span>{isFa ? 'کانال تلگرام' : 'Telegram Channel'}</span>
            </a>

            <button
              type="button"
              onClick={toggleLanguage}
              className="px-3.5 py-2 bg-slate-700 hover:bg-slate-600 text-blue-300 text-xs md:text-sm font-semibold rounded-xl flex items-center gap-1.5 transition border border-slate-600 shadow-sm"
            >
              <span>🌐</span>
              <span>{isFa ? 'English' : 'فارسی'}</span>
            </button>
          </div>
        </div>
      </header>

      {/* بخش بنر اصلی / Hero Section */}
      <section id="hero" className="py-12 md:py-16 bg-gradient-to-b from-slate-800/50 to-transparent border-b border-slate-800">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <span className="px-4 py-1.5 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 text-xs md:text-sm font-semibold inline-block mb-4">
            🌟 {isFa ? 'تدریس خصوصی و آنلاین ریاضیات بین‌المللی' : 'Online & Private International Math Tutoring'}
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight">
            {isFa ? 'آمادگی برای آزمون‌ها و مقاطع تحصیلی بین‌المللی' : 'Preparation for International Exams & Curricula'}
          </h2>
          <p className="text-slate-300 text-sm md:text-lg max-w-3xl mx-auto leading-relaxed mb-8">
            {isFa 
              ? 'آموزش کاملاً مفهومی ریاضیات نظام‌های آموزشی کمبریج، انگلستان، آمریکا، کانادا، استرالیا، آلمان و ترکیه با استفاده از معتبرترین منابع آموزشی روز دنیا.'
              : 'Comprehensive math tutoring for Cambridge, UK, USA, Canada, Australia, Germany, and Turkey educational systems using official textbooks.'}
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="#contact"
              className="px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold rounded-xl shadow-lg transition"
            >
              {isFa ? 'درخواست کلاس و مشاوره' : 'Request Class & Consultation'}
            </a>
          </div>
        </div>
      </section>

      {/* بخش رزومه استاد */}
      <section id="resume" className="py-12 border-b border-slate-800">
        <div className="max-w-5xl mx-auto px-4">
          <div className="bg-slate-800/80 rounded-3xl p-6 md:p-8 border border-slate-700/80 shadow-xl">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="w-24 h-24 md:w-32 md:h-32 rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-500 flex items-center justify-center text-5xl shadow-lg shrink-0">
                👨‍🏫
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-100 mb-2">
                  {isFa ? 'درباره و رزومه استاد' : 'Teacher Profile & Resume'}
                </h3>
                <p className="text-slate-300 text-sm md:text-base leading-relaxed mb-4">
                  {isFa
                    ? 'مدرس بین‌المللی ریاضیات با سال‌ها تجربه در تدریس دوره‌های Cambridge IGCSE, A-Level, IB Math, SAT, AP Calculus و آزمون‌های ورودی دانشگاه‌های معتبر جهان.'
                    : 'International Math Instructor with years of experience teaching Cambridge IGCSE, A-Level, IB Math, SAT, AP Calculus, and university entrance exams.'}
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-slate-700/80 text-slate-300 rounded-lg text-xs">IGCSE / A-Level</span>
                  <span className="px-3 py-1 bg-slate-700/80 text-slate-300 rounded-lg text-xs">IB Mathematics</span>
                  <span className="px-3 py-1 bg-slate-700/80 text-slate-300 rounded-lg text-xs">SAT & AP Math</span>
                  <span className="px-3 py-1 bg-slate-700/80 text-slate-300 rounded-lg text-xs">Calculus & Algebra</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* بخش کتاب‌ها */}
      <main id="books" className="container mx-auto py-8 px-4">
        <BooksSection lang={lang} />
      </main>

      {/* بخش ارتباط با استاد */}
      <section id="contact" className="py-12 bg-slate-800/40 border-t border-slate-800">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            📞 {isFa ? 'ارتباط با استاد و ثبت‌نام کلاس‌ها' : 'Contact Teacher & Enrollment'}
          </h2>
          <p className="text-slate-300 text-sm md:text-base mb-8">
            {isFa
              ? 'جهت هماهنگی کلاس‌های خصوصی، آنلاین و دریافت مشاوره تحصیلی می‌توانید از طریق تلگرام در ارتباط باشید.'
              : 'For private/online tutoring coordination and educational advice, connect via Telegram.'}
          </p>
          <a
            href="https://t.me/International_Maths"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold rounded-2xl shadow-xl transition transform hover:-translate-y-1"
          >
            <span className="text-2xl">💬</span>
            <span className="text-base">{isFa ? 'ارتباط مستقیم در تلگرام' : 'Direct Contact on Telegram'}</span>
          </a>
        </div>
      </section>

      {/* فوتر */}
      <footer className="bg-slate-900 border-t border-slate-800 py-6 text-center text-sm text-slate-500">
        <p>
          {isFa
            ? 'تمامی حقوق محفوظ است © آموزش بین‌المللی ریاضیات'
            : 'All rights reserved © International Mathematics'}
        </p>
      </footer>
    </div>
  );
}
