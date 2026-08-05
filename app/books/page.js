'use client';

import { useState } from 'react';
import Link from 'next/link';

const FEEDBACKS = [
  { fa: 'بازخورد ۱', en: 'Feedback 1', link: 'https://t.me/International_Maths/110' },
  { fa: 'بازخورد ۲', en: 'Feedback 2', link: 'https://t.me/International_Maths/111' },
  { fa: 'بازخورد ۳', en: 'Feedback 3', link: 'https://t.me/International_Maths/1352' },
];

const BOOKS_DATA = [
  {
    id: 'usa',
    flag: '🇺🇸',
    countryFa: 'آمریکا',
    countryEn: 'USA',
    titleFa: 'کتب و منابع ریاضی آمریکا',
    titleEn: 'US Math Textbooks',
    link: 'https://t.me/International_Maths/379',
    descriptionFa: 'کتاب‌های استاندارد ریاضی مدارس آمریکا شامل مجموعه‌های Prentice Hall ،Glencoe Algebra و منابع آمادگی SAT و AP Calculus.',
    descriptionEn: 'Standard US math textbooks including Prentice Hall, Glencoe Algebra, and SAT/AP preparation resources.',
    resources: [
      { title: 'Algebra 1 & 2 (Prentice Hall)', url: 'https://t.me/International_Maths' },
      { title: 'Geometry Common Core', url: 'https://t.me/International_Maths' },
      { title: 'Calculus: Graphical, Numerical, Algebraic', url: 'https://t.me/International_Maths' }
    ]
  },
  {
    id: 'uk',
    flag: '🇬🇧',
    countryFa: 'انگلستان',
    countryEn: 'UK',
    titleFa: 'کتب و منابع ریاضی انگلستان',
    titleEn: 'UK Math Textbooks',
    link: 'https://t.me/International_Maths/297',
    descriptionFa: 'کتاب‌های مرجع نظام آموزشی بریتانیا شامل دوره‌های GCSE و A-Level انتشارات پیرسون و آکسفورد.',
    descriptionEn: 'UK curriculum reference books including GCSE and A-Level courses by Pearson and Oxford.',
    resources: [
      { title: 'Edexcel GCSE Mathematics Higher', url: 'https://t.me/International_Maths' },
      { title: 'Pearson Edexcel A-Level Pure Mathematics', url: 'https://t.me/International_Maths' },
      { title: 'Oxford University Press Mechanics & Statistics', url: 'https://t.me/International_Maths' }
    ]
  },
  {
    id: 'canada',
    flag: '🇨🇦',
    countryFa: 'کانادا',
    countryEn: 'Canada',
    titleFa: 'کتب و منابع ریاضی کانادا',
    titleEn: 'Canadian Math Textbooks',
    link: 'https://t.me/International_Maths',
    descriptionFa: 'کتاب‌های درسی مصوب استان‌های کانادا (مانند اونتاریو و بریتیش کلمبیا) برای پایه‌های مختلف دبیرستان.',
    descriptionEn: 'Approved textbooks from Canadian provinces (Ontario, BC) for various high school grades.',
    resources: [
      { title: 'Nelson Functions 11 & Calculus 12', url: 'https://t.me/International_Maths' },
      { title: 'McGraw-Hill Ryerson Mathematics', url: 'https://t.me/International_Maths' }
    ]
  },
  {
    id: 'germany',
    flag: '🇩🇪',
    countryFa: 'آلمان',
    countryEn: 'Germany',
    titleFa: 'کتب و منابع ریاضی آلمان',
    titleEn: 'German Math Textbooks',
    link: 'https://t.me/International_Maths',
    descriptionFa: 'کتاب‌های ریاضی دبیرستان‌های آلمان (Gymnasium) و منابع آمادگی امتحان نهایی Abitur.',
    descriptionEn: 'Math textbooks for German Gymnasium high schools and Abitur preparation.',
    resources: [
      { title: 'Elemente der Mathematik (Schroedel)', url: 'https://t.me/International_Maths' },
      { title: 'Lambacher Schweizer Mathematik', url: 'https://t.me/International_Maths' }
    ]
  },
  {
    id: 'australia',
    flag: '🇦🇺',
    countryFa: 'استرالیا',
    countryEn: 'Australia',
    titleFa: 'کتب و منابع ریاضی استرالیا',
    titleEn: 'Australian Math Textbooks',
    link: 'https://t.me/International_Maths',
    descriptionFa: 'کتاب‌های درسی برنامه ملی استرالیا شامل متون تخصصی ریاضیات مقدماتی و پیشرفته.',
    descriptionEn: 'Australian national curriculum textbooks covering introductory and advanced mathematics.',
    resources: [
      { title: 'Cambridge Essential Mathematics', url: 'https://t.me/International_Maths' },
      { title: 'Pearson Mathematics Australian Curriculum', url: 'https://t.me/International_Maths' }
    ]
  },
  {
    id: 'france',
    flag: '🇫🇷',
    countryFa: 'فرانسه',
    countryEn: 'France',
    titleFa: 'کتب و منابع ریاضی فرانسه',
    titleEn: 'French Math Textbooks',
    link: 'https://t.me/International_Maths',
    descriptionFa: 'کتاب‌های مرجع ریاضی مدارس فرانسه و دوره‌های Lycée برای پایه‌های گوناگون.',
    descriptionEn: 'French high school math reference books and Lycée curriculum materials.',
    resources: [
      { title: 'Mathématiques Collection Indice', url: 'https://t.me/International_Maths' },
      { title: 'Belin Education - Maths Spécialité', url: 'https://t.me/International_Maths' }
    ]
  }
];

export default function BooksPage() {
  const [lang, setLang] = useState('fa');
  const [selectedBook, setSelectedBook] = useState(BOOKS_DATA[0]);
  const [isFeedbackOpen, setIsFeedbackOpen] = useState(false);

  const isFa = lang === 'fa';

  return (
    <main dir={isFa ? 'rtl' : 'ltr'} className="min-h-screen bg-slate-50 text-slate-900 font-sans pb-12 antialiased">
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200/80 px-4 py-3 shadow-sm">
        <div className="max-w-6xl mx-auto flex flex-col items-center gap-3">
          <div className="w-full flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 bg-blue-50 border border-blue-200 text-blue-700 rounded-xl flex items-center justify-center p-1.5 shadow-sm">
                  <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M2 3h20v14H2z" /><path d="M8 21l4-4 4 4" /><path d="M7 8h4" /><path d="M7 12h2" /><path d="M15 11l2 2 4-4" />
                  </svg>
                </div>
                <h1 className="font-black text-base md:text-xl text-slate-800 tracking-tight leading-snug">
                  {isFa ? 'آموزش بین‌المللی ریاضیات' : 'International Math'}
                </h1>
              </div>
            </div>

            <div className="flex items-center gap-2 bg-gray-100 px-3 py-1.5 rounded-lg border border-gray-300 shadow-inner">
              <button type="button" onClick={() => setLang('fa')} className={`text-xs font-bold transition ${isFa ? 'text-blue-700 underline font-black' : 'text-gray-500 hover:text-black'}`}>فارسی</button>
              <span className="text-gray-400 font-light">|</span>
              <button type="button" onClick={() => setLang('en')} className={`text-xs font-bold transition ${!isFa ? 'text-blue-700 underline font-black' : 'text-gray-500 hover:text-black'}`}>English</button>
            </div>
          </div>

          <div className="w-full flex flex-col items-center gap-2 border-t border-gray-100 pt-3">
            <div className="w-full flex items-center justify-center gap-4 md:gap-6 overflow-x-auto py-2 text-xs md:text-sm font-medium text-gray-700">
              
              {/* دکمه خانه بدون آیکون دقیقاً سمت راست نظام آموزشی */}
              <Link 
                href="/" 
                className="hover:text-blue-600 whitespace-nowrap transition-colors"
              >
                {isFa ? 'خانه' : 'Home'}
              </Link>

              <Link href="/educational-systems" className="hover:text-blue-600 whitespace-nowrap transition-colors">
                {isFa ? 'نظام آموزشی کشورها' : 'Educational Systems'}
              </Link>

              <Link href="/books" className="hover:text-blue-600 whitespace-nowrap transition-colors">
                {isFa ? 'کتب و منابع آموزشی' : 'Books & Resources'}
              </Link>

              <Link href="/math-sites" className="hover:text-blue-600 whitespace-nowrap transition-colors">
                {isFa ? 'سایت‌های ریاضی کشورها' : 'Math Websites'}
              </Link>

              <button type="button" aria-expanded={isFeedbackOpen} onClick={() => setIsFeedbackOpen(!isFeedbackOpen)} className="hover:text-blue-600 whitespace-nowrap transition-colors flex items-center gap-1">
                <span>{isFa ? 'بازخورد کلاس‌ها' : 'Class Feedback'}</span>
                <span className="text-[10px]">{isFeedbackOpen ? '▲' : '▼'}</span>
              </button>

              <Link href="/#contact" className="hover:text-blue-600 whitespace-nowrap transition-colors">
                {isFa ? 'ارتباط با استاد' : 'Contact'}
              </Link>
            </div>

            {isFeedbackOpen && (
              <div className="w-full flex items-center justify-center gap-2 flex-wrap bg-gray-50 p-3 rounded-2xl border border-gray-200 my-1 shadow-inner">
                {FEEDBACKS.map((item, idx) => (
                  <a key={idx} href={item.link} target="_blank" rel="noopener noreferrer" className="px-3 py-1.5 bg-white hover:bg-gray-100 text-xs font-semibold text-black rounded-lg border border-gray-200 shadow-sm transition-all flex items-center gap-1.5">
                    <span>⭐</span>
                    <span>{isFa ? item.fa : item.en}</span>
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 pt-8">
        <div className="text-center mb-8">
          <h1 className="text-2xl md:text-4xl font-black text-slate-900 mb-3">
            📚 {isFa ? 'کتب و منابع آموزشی ریاضی کشورها' : 'International Math Textbooks & Resources'}
          </h1>
          <p className="text-xs md:text-sm text-slate-600 font-medium">
            {isFa ? 'برای مشاهده کتاب‌ها و منابع هر کشور، روی دکمه مربوطه کلیک کنید:' : 'Click on any button to view books and resources for each country:'}
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-2.5 md:gap-3 mb-8">
          {BOOKS_DATA.map((item) => {
            const isSelected = selectedBook.id === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setSelectedBook(item)}
                className={`
                  px-4 py-2.5 rounded-xl font-bold text-xs md:text-sm flex items-center gap-2 transition cursor-pointer border
                  ${isSelected 
                    ? 'bg-slate-700 text-white border-slate-700 shadow-sm' 
                    : 'bg-white hover:bg-slate-100 text-slate-700 border-slate-200'
                  }
                `}
              >
                <span className="text-lg md:text-xl leading-none">{item.flag}</span>
                <span>{isFa ? item.countryFa : item.countryEn}</span>
              </button>
            );
          })}
        </div>

        {selectedBook && (
          <div className="bg-slate-100 text-slate-800 rounded-3xl p-6 md:p-8 border border-slate-300 shadow-sm transition-all duration-300">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-300 pb-4 mb-6">
              <div className="flex items-center gap-3">
                <span className="text-4xl md:text-5xl">{selectedBook.flag}</span>
                <div>
                  <h2 className="text-xl md:text-2xl font-black text-slate-900">
                    {isFa ? selectedBook.titleFa : selectedBook.titleEn}
                  </h2>
                  <span className="text-xs text-slate-500 font-bold">
                    {isFa ? selectedBook.countryFa : selectedBook.countryEn}
                  </span>
                </div>
              </div>

              <a 
                href={selectedBook.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="self-start sm:self-auto px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold rounded-xl transition whitespace-nowrap shadow-sm"
              >
                📖 {isFa ? 'درخواست کتاب از تلگرام' : 'Request Book via Telegram'}
              </a>
            </div>

            <p className="text-slate-700 text-sm md:text-base leading-relaxed mb-6 font-normal text-justify">
              {isFa ? selectedBook.descriptionFa : selectedBook.descriptionEn}
            </p>

            {selectedBook.resources && selectedBook.resources.length > 0 && (
              <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm">
                <h3 className="font-bold text-sm text-slate-900 mb-3 flex items-center gap-2">
                  📑 {isFa ? 'کتاب‌ها و فایل‌های این بخش:' : 'Books & Files:'}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {selectedBook.resources.map((res, idx) => (
                    <a
                      key={idx}
                      href={res.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-2 bg-slate-100 hover:bg-slate-200 text-xs font-medium text-slate-800 rounded-xl border border-slate-200 transition flex items-center gap-1.5"
                    >
                      <span>📘</span>
                      <span>{res.title}</span>
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </main>
  );
}
