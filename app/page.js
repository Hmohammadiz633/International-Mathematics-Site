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
          
          {/* لوگو و تیتر اصلی */}
          <div className="flex items-center gap-3">
            <span className="text-3xl">📐</span>
            <div>
              <h1 className="text-lg md:text-xl font-bold text-sky-950">
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

          {/* دکمه‌های کانال تلگرام و تغییر زبان */}
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

      {/* بنر اصلی سایت */}
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

      {/* بخش کتاب‌ها */}
      <main id="books" className="container mx-auto py-8 px-4">
        <BooksSection lang={lang} />
      </main>

      {/* بخش ارتباط با استاد - کادرهای زیر هم با اطلاعات کامل */}
      <section id="contact" className="py-12 bg-sky-50/50 border-t border-sky-100">
        <div className="max-w-2xl mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-sky-950 mb-3">
              📞 {isFa ? 'ارتباط با استاد' : 'Contact Teacher'}
            </h2>
            <p className="text-slate-600 text-sm md:text-base">
              {isFa
                ? 'جهت مشاوره، هماهنگی و ثبت‌نام کلاس‌ها می‌توانید از طریق راه‌های زیر با استاد هادی محمدی زرندینی در تماس باشید:'
                : 'For enrollment and consultation, feel free to reach out via the contacts below:'}
            </p>
          </div>

          <div className="flex flex-col gap-4">
            
            {/* ۱. تلگرام */}
            <a
              href="https://t.me/International_Maths"
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 bg-white hover:bg-sky-50/80 border border-sky-200 rounded-2xl transition duration-200 flex items-center justify-between shadow-md shadow-sky-500/5 group"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-sky-500/10 text-sky-600 flex items-center justify-center text-2xl group-hover:scale-110 transition">
                  ✈️
                </div>
                <div>
                  <div className="font-bold text-sky-950 text-base">
                    {isFa ? 'کانال تلگرام' : 'Telegram Channel'}
                  </div>
                  <div className="text-xs text-sky-600 font-mono mt-0.5" dir="ltr">
                    @International_Maths
                  </div>
                </div>
              </div>
              <span className="text-xs font-semibold text-sky-600 bg-sky-50 px-3 py-1.5 rounded-lg border border-sky-200">
                {isFa ? 'ورود به تلگرام ➔' : 'Open ➔'}
              </span>
            </a>

            {/* ۲. اینستاگرام */}
            <a
              href="https://instagram.com/hadi_mohammadi_zarandini"
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 bg-white hover:bg-pink-50/50 border border-pink-200 rounded-2xl transition duration-200 flex items-center justify-between shadow-md shadow-pink-500/5 group"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-pink-500/10 text-pink-600 flex items-center justify-center text-2xl group-hover:scale-110 transition">
                  📸
                </div>
                <div>
                  <div className="font-bold text-slate-900 text-base">
                    {isFa ? 'اینستاگرام' : 'Instagram Page'}
                  </div>
                  <div className="text-xs text-pink-600 font-mono mt-0.5" dir="ltr">
                    hadi_mohammadi_zarandini
                  </div>
                </div>
              </div>
              <span className="text-xs font-semibold text-pink-600 bg-pink-50 px-3 py-1.5 rounded-lg border border-pink-200">
                {isFa ? 'مشاهده پیج ➔' : 'Open ➔'}
              </span>
            </a>

            {/* ۳. جیمیل */}
            <a
              href="mailto:hadi.mohammadi.zarandini@gmail.com"
              className="p-5 bg-white hover:bg-rose-50/50 border border-rose-200 rounded-2xl transition duration-200 flex items-center justify-between shadow-md shadow-rose-500/5 group"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-rose-500/10 text-rose-600 flex items-center justify-center text-2xl group-hover:scale-110 transition">
                  ✉️
                </div>
                <div>
                  <div className="font-bold text-slate-900 text-base">
                    {isFa ? 'ایمیل / جیمیل' : 'Gmail / Email'}
                  </div>
                  <div className="text-xs text-rose-600 font-mono mt-0.5" dir="ltr">
                    hadi.mohammadi.zarandini@gmail.com
                  </div>
                </div>
              </div>
              <span className="text-xs font-semibold text-rose-600 bg-rose-50 px-3 py-1.5 rounded-lg border border-rose-200">
                {isFa ? 'ارسال ایمیل ➔' : 'Send Email ➔'}
              </span>
            </a>

            {/* ۴. تلفن تماس */}
            <a
              href="tel:+989123104844"
              className="p-5 bg-white hover:bg-emerald-50/50 border border-emerald-200 rounded-2xl transition duration-200 flex items-center justify-between shadow-md shadow-emerald-500/5 group"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center text-2xl group-hover:scale-110 transition">
                  📞
                </div>
                <div>
                  <div className="font-bold text-slate-900 text-base">
                    {isFa ? 'شماره تلفن تماس' : 'Phone Number'}
                  </div>
                  <div className="text-xs text-emerald-600 font-mono mt-0.5" dir="ltr">
                    +98 912 310 4844
                  </div>
                </div>
              </div>
              <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 px-3 py-1.5 rounded-lg border border-emerald-200">
                {isFa ? 'تماس مستقیم ➔' : 'Call ➔'}
              </span>
            </a>

          </div>
        </div>
      </section>

      {/* فوتر */}
      <footer className="bg-white border-t border-sky-100 py-6 text-center text-sm text-slate-500">
        <p>
          {isFa
            ? 'تمامی حقوق محفوظ است © آموزش بین‌المللی ریاضیات'
            : 'All rights reserved © International Mathematics'}
        </p>
      </footer>
    </div>
  );
}
