'use client';

import { useState } from 'react';
import BooksSection from '@/components/BooksSection';
import ContactButtons from '@/components/ContactButtons';

export default function Home() {
  const [lang, setLang] = useState('fa');
  const [isEducationOpen, setIsEducationOpen] = useState(false);
  const [isFeedbackOpen, setIsFeedbackOpen] = useState(false);
  const [isMathSitesOpen, setIsMathSitesOpen] = useState(false);

  const isFa = lang === 'fa';

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const countries = [
    { flag: '🇺🇸', fa: 'نظام آموزشی آمریکا', en: 'US Educational System', link: 'https://t.me/International_Maths/379' },
    { flag: '🇬🇧', fa: 'نظام آموزشی انگلستان', en: 'UK Educational System', link: 'https://t.me/International_Maths/297' },
    { flag: '🇩🇪', fa: 'نظام آموزشی آلمان', en: 'Germany Educational System', link: 'https://t.me/International_Maths/375' },
    { flag: '🇦🇺', fa: 'نظام آموزشی استرالیا', en: 'Australia Educational System', link: 'https://t.me/International_Maths/299' },
    { flag: '🇹🇷', fa: 'نظام آموزشی ترکیه', en: 'Turkey Educational System', link: 'https://t.me/International_Maths/395' },
    { flag: '🇮🇹', fa: 'نظام آموزشی ایتالیا', en: 'Italy Educational System', link: 'https://t.me/International_Maths/389' },
    { flag: '🇨🇦', fa: 'نظام آموزشی کانادا', en: 'Canada Educational System', link: 'https://t.me/International_Maths/302' },
  ];

  const mathSites = [
    { flag: '🇺🇸', fa: 'آمریکا (Khan Academy)', en: 'USA (Khan Academy)', link: 'https://www.khanacademy.org/_render' },
    { flag: '🇨🇦', fa: 'کانادا (IXL Math)', en: 'Canada (IXL Math)', link: 'https://ca.ixl.com/math' },
    { flag: '🇬🇧', fa: 'انگلستان (Maths Genie)', en: 'UK (Maths Genie)', link: 'https://mathsgenie.co.uk/' },
    { flag: '🇦🇺', fa: 'استرالیا (Art of Smart)', en: 'Australia (Art of Smart)', link: 'https://artofsmart.com.au/maths/hsc-maths-past-papers/' },
  ];

  const feedbacks = [
    { fa: 'بازخورد ۱', en: 'Feedback 1', link: 'https://t.me/International_Maths/110' },
    { fa: 'بازخورد ۲', en: 'Feedback 2', link: 'https://t.me/International_Maths/111' },
    { fa: 'بازخورد ۳', en: 'Feedback 3', link: 'https://t.me/International_Maths/1352' },
  ];

  return (
    <main dir={isFa ? 'rtl' : 'ltr'} className="min-h-screen bg-white text-black font-sans pb-12">
      {/* هدر */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200 px-4 py-3 shadow-sm">
        <div className="max-w-6xl mx-auto flex flex-col items-center gap-3">
          
          {/* تغییر زبان */}
          <div className="w-full flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-2xl">📐</span>
              <h1 className="font-bold text-base md:text-lg text-black">
                {isFa ? 'آموزش بین‌المللی ریاضیات' : 'International Math'}
              </h1>
            </div>

            <div className="flex items-center gap-2 bg-gray-100 px-3 py-1.5 rounded-lg border border-gray-300">
              <button 
                type="button"
                onClick={() => setLang('fa')} 
                className={`text-xs font-bold transition ${isFa ? 'text-black underline' : 'text-gray-500 hover:text-black'}`}
              >
                فارسی
              </button>
              <span className="text-gray-400 font-light">|</span>
              <button 
                type="button"
                onClick={() => setLang('en')} 
                className={`text-xs font-bold transition ${!isFa ? 'text-black underline' : 'text-gray-500 hover:text-black'}`}
              >
                English
              </button>
            </div>
          </div>

          {/* منوی بالا */}
          <div className="w-full flex flex-col items-center gap-2 border-t border-gray-100 pt-2">
            <div className="w-full flex items-center justify-center gap-2 md:gap-3 overflow-x-auto py-1 text-xs md:text-sm font-bold">
              
              {/* نظام آموزشی */}
              <button 
                type="button"
                onClick={() => { 
                  setIsEducationOpen(!isEducationOpen); 
                  setIsFeedbackOpen(false); 
                  setIsMathSitesOpen(false); 
                }} 
                className="px-3 py-1.5 bg-gray-100 hover:bg-gray-200 text-black rounded-lg border border-gray-300 whitespace-nowrap transition flex items-center gap-1"
              >
                <span>🌐 {isFa ? 'نظام آموزشی کشورها' : 'Educational Systems'}</span>
                <span className="text-[10px]">{isEducationOpen ? '▲' : '▼'}</span>
              </button>

              {/* کتب آموزشی */}
              <button 
                type="button"
                onClick={() => scrollToSection('books')} 
                className="px-3 py-1.5 bg-gray-100 hover:bg-gray-200 text-black rounded-lg border border-gray-300 whitespace-nowrap transition"
              >
                📚 {isFa ? 'کتب آموزشی' : 'Books'}
              </button>

              {/* سایت‌های ریاضی کشورها */}
              <button 
                type="button"
                onClick={() => { 
                  setIsMathSitesOpen(!isMathSitesOpen); 
                  setIsEducationOpen(false); 
                  setIsFeedbackOpen(false); 
                }} 
                className="px-3 py-1.5 bg-gray-100 hover:bg-gray-200 text-black rounded-lg border border-gray-300 whitespace-nowrap transition flex items-center gap-1"
              >
                <span>💻 {isFa ? 'سایت‌های ریاضی کشورها' : 'Math Websites'}</span>
                <span className="text-[10px]">{isMathSitesOpen ? '▲' : '▼'}</span>
              </button>

              {/* بازخورد کلاس‌ها */}
              <button 
                type="button"
                onClick={() => { 
                  setIsFeedbackOpen(!isFeedbackOpen); 
                  setIsEducationOpen(false); 
                  setIsMathSitesOpen(false); 
                }} 
                className="px-3 py-1.5 bg-gray-100 hover:bg-gray-200 text-black rounded-lg border border-gray-300 whitespace-nowrap transition flex items-center gap-1"
              >
                <span>💬 {isFa ? 'بازخورد کلاس‌ها' : 'Class Feedback'}</span>
                <span className="text-[10px]">{isFeedbackOpen ? '▲' : '▼'}</span>
              </button>

              {/* ارتباط با استاد */}
              <button 
                type="button"
                onClick={() => scrollToSection('contact')} 
                className="px-3 py-1.5 bg-gray-100 hover:bg-gray-200 text-black rounded-lg border border-gray-300 whitespace-nowrap transition"
              >
                📞 {isFa ? 'ارتباط با استاد' : 'Contact'}
              </button>
            </div>

            {/* زیرمنوی کشویی نظام آموزشی */}
            {isEducationOpen && (
              <div className="w-full flex items-center justify-center gap-2 flex-wrap bg-gray-50 p-2.5 rounded-xl border border-gray-200 my-1 shadow-inner">
                {countries.map((item, idx) => (
                  <a 
                    key={idx} 
                    href={item.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="px-3 py-1.5 bg-white hover:bg-gray-100 text-xs font-semibold text-black rounded-lg border border-gray-300 shadow-sm transition flex items-center gap-1.5"
                  >
                    <span>{item.flag}</span>
                    <span>{isFa ? item.fa : item.en}</span>
                  </a>
                ))}
              </div>
            )}

            {/* زیرمنوی کشویی سایت‌های ریاضی کشورها */}
            {isMathSitesOpen && (
              <div className="w-full flex items-center justify-center gap-2 flex-wrap bg-gray-50 p-2.5 rounded-xl border border-gray-200 my-1 shadow-inner">
                {mathSites.map((item, idx) => (
                  <a 
                    key={idx} 
                    href={item.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="px-3 py-1.5 bg-white hover:bg-gray-100 text-xs font-semibold text-black rounded-lg border border-gray-300 shadow-sm transition flex items-center gap-1.5"
                  >
                    <span>{item.flag}</span>
                    <span>{isFa ? item.fa : item.en}</span>
                    <span className="text-[10px] text-gray-400">↗</span>
                  </a>
                ))}
              </div>
            )}

            {/* زیرمنوی کشویی بازخوردها */}
            {isFeedbackOpen && (
              <div className="w-full flex items-center justify-center gap-2 flex-wrap bg-gray-50 p-2.5 rounded-xl border border-gray-200 my-1 shadow-inner">
                {feedbacks.map((item, idx) => (
                  <a 
                    key={idx} 
                    href={item.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="px-3 py-1.5 bg-white hover:bg-gray-100 text-xs font-semibold text-black rounded-lg border border-gray-300 shadow-sm transition flex items-center gap-1.5"
                  >
                    <span>⭐</span>
                    <span>{isFa ? item.fa : item.en}</span>
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
        <p className="text-black text-base md:text-
