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
      {/* هدر سایت با آبی پررنگ‌تر و شفاف */}
      <header className="bg-white/95 backdrop-blur border-b-2 border-blue-200 sticky top-0 z-50 shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-3 flex flex-wrap justify-between items-center gap-4">
          
          <div className="flex items-center gap-3">
            <span className="text-3xl filter drop-shadow-sm">📐</span>
            <div>
              <h1 className="text-lg md:text-xl font-black text-blue-950">
                {isFa ? 'آموزش بین‌المللی ریاضیات' : 'International Mathematics'}
              </h1>
              <p className="text-xs text-blue-700 font-bold">
                {isFa ? 'تدریس تخصصی ریاضیات آزمون‌ها و مقاطع بین‌المللی' : 'Specialized International Math Tutoring'}
              </p>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-sm font-bold text-slate-700">
            <a href="#hero" className="hover:text-blue-600 transition">{isFa ? 'صفحه اصلی' : 'Home'}</a>
            <a href="#resume" className="hover:text-blue-600 transition">{isFa ? 'رزومه استاد' : 'Resume'}</a>
            <a href="#books" className="hover:text-blue-600 transition">{isFa ? 'کتاب‌های تدریس‌شده' : 'Taught Books'}</a>
            <a href="#contact" className="hover:text-blue-600 transition">{isFa ? 'ارتباط با استاد' : 'Contact'}</a>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="https://t.me/International_Maths"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs md:text-sm font-bold rounded-xl flex items-center gap-2 transition shadow-md shadow-blue-600/30"
            >
              <span>✈️</span>
              <span>{isFa ? 'کانال تلگرام' : 'Telegram Channel'}</span>
            </a>

            <button
              type="button"
              onClick={toggleLanguage}
              className="px-3.5 py-2 bg-blue-50 hover:bg-blue-100 text-blue-800 text-xs md:text-sm font-bold rounded-xl flex items-center gap-1.5 transition border-2 border-blue-200"
            >
              <span>🌐</span>
              <span>{isFa ? 'English' : 'فارسی'}</span>
            </button>
          </div>
        </div>
      </header>

      {/* بنر اصلی با تم آبی پررنگ‌تر */}
      <section id="hero" className="py-12 md:py-16 bg-gradient-to-b from-blue-100 via-blue-50/50 to-transparent border-b border-blue-200">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <span className="px-4 py-1.5 rounded-full bg-blue-600/10 text-blue-800 border-2 border-blue-300 text-xs md:text-sm font-extrabold inline-block mb-4 shadow-sm">
            🌟 {isFa ? 'تدریس خصوصی و آنلاین ریاضیات بین‌المللی' : 'Online & Private International Math Tutoring'}
          </span>
          <h2 className="text-3xl md:text-5xl font-black mb-6 text-blue-950 leading-tight">
            {isFa ? 'آموزش بین‌المللی ریاضیات' : 'International Mathematics'}
          </h2>
          <p className="text-slate-700 text-sm md:text-lg max-w-3xl mx-auto leading-relaxed mb-8 font-medium">
            {isFa 
              ? 'آموزش کاملاً مفهومی ریاضیات نظام‌های آموزشی کمبریج، انگلستان، آمریکا، کانادا، استرالیا، آلمان و ترکیه با استفاده از معتبرترین منابع آموزشی روز دنیا.'
              : 'Comprehensive math tutoring for Cambridge, UK, USA, Canada, Australia, Germany, and Turkey educational systems using official textbooks.'}
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="#contact"
              className="px-7 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-extrabold rounded-xl shadow-lg shadow-blue-600/30 transition transform hover:-translate-y-0.5"
            >
              {isFa ? 'درخواست کلاس و مشاوره' : 'Request Class & Consultation'}
            </a>
          </div>
        </div>
      </section>

      {/* رزومه استاد */}
      <section id="resume" className="py-12 border-b border-blue-100">
        <div className="max-w-5xl mx-auto px-4">
          <div className="bg-white rounded-3xl p-6 md:p-8 border-2 border-blue-200 shadow-xl shadow-blue-500/10">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="w-24 h-24 md:w-32 md:h-32 rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-5xl text-white shadow-lg shadow-blue-600/40 shrink-0">
                👨‍🏫
              </div>
              <div>
                <h3 className="text-2xl font-black text-blue-950 mb-2">
                  {isFa ? 'درباره و رزومه استاد' : 'Teacher Profile & Resume'}
                </h3>
                <p className="text-slate-700 text-sm md:text-base leading-relaxed mb-4 font-medium">
                  {isFa
                    ? 'مدرس بین‌المللی ریاضیات با سال‌ها تجربه در تدریس دوره‌های Cambridge IGCSE, A-Level, IB Math, SAT, AP Calculus و آزمون‌های ورودی دانشگاه‌های معتبر جهان.'
                    : 'International Math Instructor with years of experience teaching Cambridge IGCSE, A-Level, IB Math, SAT, AP Calculus, and university entrance exams.'}
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-blue-100/70 text-blue-900 border border-blue-300 rounded-lg text-xs font-bold">IGCSE / A-Level</span>
                  <span className="px-3 py-1 bg-blue-100/70 text-blue-900 border border-blue-300 rounded-lg text-xs font-bold">IB Mathematics</span>
                  <span className="px-3 py-1 bg-blue-100/70 text-blue-900 border border-blue-300 rounded-lg text-xs font-bold">SAT & AP Math</span>
                  <span className="px-3 py-1 bg-blue-100/70 text-blue-900 border border-blue-300 rounded-lg text-xs font-bold">Calculus & Algebra</span>
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

      {/* بخش ارتباط با استاد با لوگوهای اصلی تلگرام، اینستاگرام، جیمیل و تلفن */}
      <section id="contact" className="py-12 bg-blue-50/60 border-t-2 border-blue-200">
        <div className="max-w-2xl mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-black text-blue-950 mb-3">
              📞 {isFa ? 'ارتباط با استاد' : 'Contact Teacher'}
            </h2>
            <p className="text-slate-700 text-sm md:text-base font-medium">
              {isFa
                ? 'جهت مشاوره، هماهنگی و ثبت‌نام کلاس‌ها می‌توانید از طریق راه‌های زیر با استاد هادی محمدی زرندینی در تماس باشید:'
                : 'For enrollment and consultation, feel free to reach out via the contacts below:'}
            </p>
          </div>

          <div className="flex flex-col gap-4">
            
            {/* ۱. تلگرام با لوگوی اصلی */}
            <a
              href="https://t.me/International_Maths"
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 bg-white hover:bg-blue-50/80 border-2 border-blue-200 rounded-2xl transition duration-200 flex items-center justify-between shadow-md hover:shadow-lg shadow-blue-500/10 group"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#0088cc]/10 flex items-center justify-center group-hover:scale-110 transition shrink-0">
                  <svg className="w-7 h-7 fill-[#0088cc]" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm5.56 8.16l-2.02 9.51c-.15.68-.56.84-1.13.53l-3.1-2.29-1.5 1.44c-.17.17-.31.31-.63.31l.22-3.17 5.77-5.21c.25-.22-.05-.34-.39-.12l-7.13 4.49-3.08-.96c-.67-.21-.68-.67.14-.99l12.04-4.64c.56-.21 1.05.13.88.91z"/>
                  </svg>
                </div>
                <div>
                  <div className="font-extrabold text-blue-950 text-base">
                    {isFa ? 'کانال تلگرام' : 'Telegram Channel'}
                  </div>
                  <div className="text-xs text-[#0088cc] font-mono font-bold mt-0.5" dir="ltr">
                    @International_Maths
                  </div>
                </div>
              </div>
              <span className="text-xs font-bold text-[#0088cc] bg-blue-50 px-3.5 py-2 rounded-xl border border-blue-200">
                {isFa ? 'ورود ➔' : 'Open ➔'}
              </span>
            </a>

            {/* ۲. اینستاگرام با لوگوی اصلی */}
            <a
              href="https://instagram.com/hadi_mohammadi_zarandini"
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 bg-white hover:bg-pink-50/80 border-2 border-pink-200 rounded-2xl transition duration-200 flex items-center justify-between shadow-md hover:shadow-lg shadow-pink-500/10 group"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 p-0.5 group-hover:scale-110 transition shrink-0">
                  <div className="w-full h-full bg-white rounded-[14px] flex items-center justify-center">
                    <svg className="w-6 h-6 fill-rose-600" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </div>
                </div>
                <div>
                  <div className="font-extrabold text-slate-900 text-base">
                    {isFa ? 'اینستاگرام' : 'Instagram Page'}
                  </div>
                  <div className="text-xs text-rose-600 font-mono font-bold mt-0.5" dir="ltr">
                    hadi_mohammadi_zarandini
                  </div>
                </div>
              </div>
              <span className="text-xs font-bold text-rose-600 bg-pink-50 px-3.5 py-2 rounded-xl border border-pink-200">
                {isFa ? 'مشاهده ➔' : 'Open ➔'}
              </span>
            </a>

            {/* ۳. جیمیل با لوگوی اصلی */}
            <a
              href="mailto:hadi.mohammadi.zarandini@gmail.com"
              className="p-5 bg-white hover:bg-rose-50/80 border-2 border-rose-200 rounded-2xl transition duration-200 flex items-center justify-between shadow-md hover:shadow-lg shadow-rose-500/10 group"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-rose-500/10 flex items-center justify-center group-hover:scale-110 transition shrink-0">
                  <svg className="w-7 h-7" viewBox="0 0 24 24">
                    <path fill="#EA4335" d="M20 18h-2V9.25L12 13 6 9.25V18H4V6h1.75l6.25 4 6.25-4H20v12z"/>
                  </svg>
                </div>
                <div>
                  <div className="font-extrabold text-slate-900 text-base">
                    {isFa ? 'ایمیل / جیمیل' : 'Gmail / Email'}
                  </div>
                  <div className="text-xs text-rose-600 font-mono font-bold mt-0.5" dir="ltr">
                    hadi.mohammadi.zarandini@gmail.com
                  </div>
                </div>
              </div>
              <span className="text-xs font-bold text-rose-600 bg-rose-50 px-3.5 py-2 rounded-xl border border-rose-200">
                {isFa ? 'ایمیل ➔' : 'Send Email ➔'}
              </span>
            </a>

            {/* ۴. تلفن با لوگوی اصلی */}
            <a
              href="tel:+989123104844"
              className="p-5 bg-white hover:bg-emerald-50/80 border-2 border-emerald-200 rounded-2xl transition duration-200 flex items-center justify-between shadow-md hover:shadow-lg shadow-emerald-500/10 group"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center group-hover:scale-110 transition shrink-0">
                  <svg className="w-6 h-6 fill-emerald-600" viewBox="0 0 24 24">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                  </svg>
                </div>
                <div>
                  <div className="font-extrabold text-slate-900 text-base">
                    {isFa ? 'شماره تلفن تماس' : 'Phone Number'}
                  </div>
                  <div className="text-xs text-emerald-600 font-mono font-bold mt-0.5" dir="ltr">
                    +98 912 310 4844
                  </div>
                </div>
              </div>
              <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-3.5 py-2 rounded-xl border border-emerald-200">
                {isFa ? 'تماس ➔' : 'Call ➔'}
              </span>
            </a>

          </div>
        </div>
      </section>

      {/* فوتر */}
      <footer className="bg-white border-t-2 border-blue-100 py-6 text-center text-sm font-bold text-slate-600">
        <p>
          {isFa
            ? 'تمامی حقوق محفوظ است © آموزش بین‌المللی ریاضیات'
            : 'All rights reserved © International Mathematics'}
        </p>
      </footer>
    </div>
  );
}
