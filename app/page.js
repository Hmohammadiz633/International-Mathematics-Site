'use client';

import { useState } from 'react';
import BooksSection from '@/components/BooksSection';
import ContactButtons from '@/components/ContactButtons';

export default function Home() {
  const [lang, setLang] = useState('fa');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isEducationOpen, setIsEducationOpen] = useState(false); // مدیریت منوی نظام آموزشی کشورها
  const [isFeedbackOpen, setIsFeedbackOpen] = useState(false); // مدیریت منوی بازخورد تدریس
  const isFa = lang === 'fa';

  const scrollToSection = (id) => {
    setIsMenuOpen(false);
    setIsEducationOpen(false);
    setIsFeedbackOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const closeAllMenus = () => {
    setIsMenuOpen(false);
    setIsEducationOpen(false);
    setIsFeedbackOpen(false);
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

          {/* سمت چپ: پکیج تغییر زبان */}
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
            
            {/* ۱. نظام آموزشی کشورها (در بالاترین قسمت) */}
            <div className="flex flex-col gap-1">
              <button
                onClick={() => setIsEducationOpen(!isEducationOpen)}
                className="w-full flex items-center justify-between px-4 py-2 text-sm font-bold text-black bg-gray-50 hover:bg-gray-100 rounded-lg border border-gray-200 transition"
              >
                <span>🌐 {isFa ? 'نظام آموزشی کشورها' : 'Educational Systems'}</span>
                <svg
                  className={`w-4 h-4 transition-transform duration-200 ${isEducationOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* زیرمجموعه‌های نظام آموزشی کشورها */}
              {isEducationOpen && (
                <div className="flex flex-col gap-1.5 pr-4 pl-2 py-1 border-r-2 border-gray-300 mr-2 my-1">
                  <a
                    href="https://t.me/International_Maths"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={closeAllMenus}
                    className="text-right px-3 py-1.5 text-xs font-semibold text-black bg-gray-100 hover:bg-gray-200 rounded-md border border-gray-200 transition flex items-center justify-between"
                  >
                    <span>🇺🇸 {isFa ? 'نظام آموزشی آمریکا' : 'US Educational System'}</span>
                    <span className="text-[10px] text-gray-500">Telegram ↗</span>
                  </a>
                  <a
                    href="https://t.me/International_Maths"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={closeAllMenus}
                    className="text-right px-3 py-1.5 text-xs font-semibold text-black bg-gray-100 hover:bg-gray-200 rounded-md border border-gray-200 transition flex items-center justify-between"
                  >
                    <span>🇬🇧 {isFa ? 'نظام آموزشی انگلستان' : 'UK Educational System'}</span>
                    <span className="text-[10px] text-gray-500">Telegram ↗</span>
                  </a>
                  <a
                    href="https://t.me/International_Maths"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={closeAllMenus}
                    className="text-right px-3 py-1.5 text-xs font-semibold text-black bg-gray-100 hover:bg-gray-200 rounded-md border border-gray-200 transition flex items-center justify-between"
                  >
                    <span>🇩🇪 {isFa ? 'نظام آموزشی آلمان' : 'Germany Educational System'}</span>
                    <span className="text-[10px] text-gray-500">Telegram ↗</span>
                  </a>
                  <a
                    href="https://t.me/International_Maths"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={closeAllMenus}
                    className="text-right px-3 py-1.5 text-xs font-semibold text-black bg-gray-100 hover:bg-gray-200 rounded-md border border-gray-200 transition flex items-center justify-between"
                  >
                    <span>🇦🇺 {isFa ? 'نظام آموزشی استرالیا' : 'Australia Educational System'}</span>
                    <span className="text-[10px] text-gray-500">Telegram ↗</span>
                  </a>
                  <a
                    href="https://t.me/International_Maths"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={closeAllMenus}
                    className="text-right px-3 py-1.5 text-xs font-semibold text-black bg-gray-100 hover:bg-gray-200 rounded-md border border-gray-200 transition flex items-center justify-between"
                  >
                    <span>🇹🇷 {isFa ? 'نظام آموزشی ترکیه' : 'Turkey Educational System'}</span>
                    <span className="text-[10px] text-gray-500">Telegram ↗</span>
                  </a>
                  <a
                    href="https://t.me/International_Maths"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={closeAllMenus}
                    className="text-right px-3 py-1.5 text-xs font-semibold text-black bg-gray-100 hover:bg-gray-200 rounded-md border border-gray-200 transition flex items-center justify-between"
                  >
                    <span>🇮🇹 {isFa ? 'نظام آموزشی ایتالیا' : 'Italy Educational System'}</span>
                    <span className="text-[10px] text-gray-500">Telegram ↗</span>
                  </a>
                  <a
                    href="https://t.me/International_Maths"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={closeAllMenus}
                    className="text-right px-3 py-1.5 text-xs font-semibold text-black bg-gray-100 hover:bg-gray-200 rounded-md border border-gray-200 transition flex items-center justify-between"
                  >
                    <span>🇨🇦 {isFa ? 'نظام آموزشی کانادا' : 'Canada Educational System'}</span>
                    <span className="text-[10px] text-gray-500">Telegram ↗</span>
                  </a>
                </div>
              )}
            </div>

            {/* ۲. درباره من */}
            <button
              onClick={() => scrollToSection('about')}
              className="text-right px-4 py-2 text-sm font-bold text-black bg-gray-50 hover:bg-gray-100 rounded-lg border border-gray-200 transition"
            >
              👤 {isFa ? 'درباره من' : 'About Me'}
            </button>

            {/* ۳. بازخورد تدریس */}
            <div className="flex flex-col gap-1">
              <button
                onClick={() => setIsFeedbackOpen(!isFeedbackOpen)}
                className="w-full flex items-center justify-between px-4 py-2 text-sm font-bold text-black bg-gray-50 hover:bg-gray-1
