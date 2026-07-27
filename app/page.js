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
      {/* هدر کامل پروژه */}
      <header className="bg-slate-800/90 backdrop-blur border-b border-slate-700 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-3 flex flex-wrap justify-between items-center gap-4">
          
          {/* لوگو و تیتر اصلی سایت */}
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

      {/* بنر اصلی / Hero Section */}
      <section id="hero" className="py-12 md:py-16 bg-gradient-to-b from-slate-800/50 to-transparent border-b border-slate-800">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <span className="px-4 py-1.5 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 text-xs md:text-sm font-semibold inline-block mb-4">
            🌟 {isFa ? 'تدریس خصوصی و آنلاین ریاضیات بین‌المللی' : 'Online & Private International Math Tutoring'}
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight">
            {isFa ? 'آموزش بین‌المللی ریاضیات' : 'International Mathematics'}
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
              {isFa ? 'درخواست کلاس و مشاوره' : 'Request Class &
