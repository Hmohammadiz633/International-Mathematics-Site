'use client';

import { useState } from 'react';
import BooksSection from '@/components/BooksSection';
import ContactButtons from '@/components/ContactButtons';

export default function Home() {
  const [lang, setLang] = useState('fa');
  const [isEducationOpen, setIsEducationOpen] = useState(false);

  const isFa = lang === 'fa';

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const countries = [
    { flag: '🇺🇸', fa: 'آمریکا', en: 'USA', link: 'https://t.me/International_Maths/379' },
    { flag: '🇬🇧', fa: 'انگلستان', en: 'UK', link: 'https://t.me/International_Maths/297' },
    { flag: '🇩🇪', fa: 'آلمان', en: 'Germany', link: 'https://t.me/International_Maths/375' },
    { flag: '🇦🇺', fa: 'استرالیا', en: 'Australia', link: 'https://t.me/International_Maths/299' },
    { flag: '🇹🇷', fa: 'ترکیه', en: 'Turkey', link: 'https://t.me/International_Maths/395' },
    { flag: '🇮🇹', fa: 'ایتالیا', en: 'Italy', link: 'https://t.me/International_Maths/389' },
    { flag: '🇨🇦', fa: 'کانادا', en: 'Canada', link: 'https://t.me/International_Maths/302' },
  ];

  return (
    <main dir={isFa ? 'rtl' : 'ltr'} className="min-h-screen bg-white text-black font-sans pb-12">
      {/* هدر */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200 px-4 py-3 shadow-sm">
        <div className="max-w-6xl mx-auto flex flex-col items-center gap-3">
          
          {/* ردیف اول: عنوان و دکمه تغییر زبان */}
          <div className="w-full flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-2xl">📐</span>
              <h1 className="font-bold text-base md:text-lg text-black">
                {isFa ? 'آموزش بین‌المللی ریاضیات' : 'International Math'}
              </h1>
            </div>

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

          {/* ردیف دوم: منوی افقی بالا */}
          <div className="w-full flex flex-col items-center gap-2 border-t border-gray-100 pt-2">
            <div className="w-full flex items-center justify-center gap-2 md:gap-3 overflow-x-auto py-1 text-xs md:text-sm font-bold">
              
              {/* دکمه کشویی نظام آموزشی کشورها */}
              <button
                onClick={() => setIsEducationOpen(!isEducationOpen)}
                className="px-3 py-1.5 bg-gray-100 hover:bg-gray-200 text-black rounded-lg border border-gray-300 whitespace-nowrap transition flex items-center gap-1"
              >
                <span>🌐 {isFa ? 'نظام آموزشی کشورها' : 'Educational Systems'}</span>
                <span className="text-[10px]">{isEducationOpen ? '▲' : '▼'}</span>
              </button>

              <button
                onClick={() => scrollToSection('books')}
                className="px-3 py-1.5 bg-gray-100 hover:bg-gray-200 rounded-lg border border-gray-300 whitespace-nowrap transition"
              >
                📚 {isFa ? 'کتب آموزشی' : 'Books'}
              </button>

              <a
                href="https://t.me/International_Maths/110"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 bg-gray-100 hover:bg-gray-200 rounded-lg border border-gray-300 whitespace-nowrap transition"
              >
                💬 {isFa ? 'بازخورد ۱' : 'Feedback 1'}
              </a>

              <a
                href="https://t.me/International_Maths/111"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 bg-gray-100 hover:bg-gray-200 rounded-lg border border-gray-300 whitespace-nowrap transition"
              >
                💬 {isFa ? 'بازخورد ۲' : 'Feedback 2'}
              </a>

              <a
                href="https://t.me/International_Maths/1352"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 bg-gray-100 hover:bg-gray-200 rounded-lg border border-gray-300 whitespace-nowrap transition"
              >
                💬 {isFa ? 'بازخورد ۳' : 'Feedback 3'}
              </a>

              <button
                onClick={() => scrollToSection('about')}
                className="px-3 py-1.5 bg-gray-100 hover:bg-gray-200 rounded-lg border border-gray-300 whitespace-nowrap transition"
              >
                👤 {isFa ? 'درباره من' : 'About Me'}
              </button>

              <button
                onClick={() => scrollToSection('contact')}
                className="px-3 py-1.5 bg-gray-100 hover:bg-gray-200 rounded-lg border border-gray-300 whitespace-nowrap transition"
              >
                📞 {isFa ? 'ارتباط با استاد' : 'Contact'}
              </button>
            </div>

            {/* زیرمنوی کشویی تمام کشورها با لینک‌های اختصاصی */}
            {isEducationOpen && (
              <div className="w-full flex items-center justify-center gap-2 flex-wrap bg-gray-50 p-2.5 rounded-xl border border-gray-200 my-1 shadow-inner">
                {countries.map((item, idx) => (
                  <a
                    key={idx}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsEducationOpen(false)}
                    className="px-3 py-1 bg-white hover:bg-gray-100 text-xs font-semibold text-black rounded-md border border-gray-300 shadow-sm transition flex items-center gap-1.5"
                  >
                    <span>{item.flag}</span>
                    <span>{isFa ? item.fa : item.en}</span>
                    <span className="text-[10px] text-gray-400">↗</span>
                  </a>
                ))}
              </div>
            )}
          </div>

        </div>
      </header>

      {/* بنر اصلی */}
      <section className="max-w-4xl mx-auto text-center px-4 pt-10 pb-6">
        <h2 className="text-3xl md:text-5xl font-extrabold text-black mb-4">
          {isFa ? 'آموزش بین‌المللی ریاضیات' : 'International Mathematics Tutoring'}
        </h2>
        <p className="text-black text-base md:text-lg leading-relaxed max-w-2xl mx-auto font-medium">
          {isFa
            ? 'تدریس تخصصی و مفهومی ریاضیات نظام‌های آموزشی بین‌المللی (امریكا، كانادا، انگلیس، استرالیا، آلمان و تركیه)'
            : 'Specialized math education for international curricula (USA, Canada, UK, Australia, Germany, Turkey).'}
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

      {/* درباره من */}
      <section id="about" className="max-w-5xl mx-auto px-4 py-8">
        <div className="bg-slate-800 text-white rounded-3xl p-6 md:p-10 border border-slate-700 shadow-2xl backdrop-blur-sm">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            <div className="shrink-0 flex flex-col items-center">
              <img
                src="/profile.jpg"
