'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import BooksSection from '@/components/BooksSection';
import { useLanguage } from '@/context/LanguageContext';

const FEEDBACKS = [
  { fa: 'بازخورد ۱', en: 'Feedback 1', link: 'https://t.me/International_Maths/110' },
  { fa: 'بازخورد ۲', en: 'Feedback 2', link: 'https://t.me/International_Maths/111' },
  { fa: 'بازخورد ۳', en: 'Feedback 3', link: 'https://t.me/International_Maths/1352' },
];

export default function BooksPage() {
  const { language: lang, setLanguage: setLang } = useLanguage();
  const [activeTab, setActiveTab] = useState('taught');
  const [selectedGrade, setSelectedGrade] = useState(7);
  const [isFeedbackOpen, setIsFeedbackOpen] = useState(false);
  const pathname = usePathname();

  const isFa = lang === 'fa';

  const grades = [
    { id: 7, fa: 'پایه هفتم', en: 'Grade 7' },
    { id: 8, fa: 'پایه هشتم', en: 'Grade 8' },
    { id: 9, fa: 'پایه نهم', en: 'Grade 9' },
    { id: 10, fa: 'پایه دهم', en: 'Grade 10' },
    { id: 11, fa: 'پایه یازدهم', en: 'Grade 11' },
    { id: 12, fa: 'پایه دوازدهم', en: 'Grade 12' },
  ];

  const authoredBooks = [
    { id: 1, src: '/book1.JPG', title: isFa ? 'کتاب تالیفی ۱' : 'Authored Book 1' },
    { id: 2, src: '/book2.JPG', title: isFa ? 'کتاب تالیفی ۲' : 'Authored Book 2' },
    { id: 3, src: '/book3.JPG', title: isFa ? 'کتاب تالیفی ۳' : 'Authored Book 3' },
    { id: 4, src: '/book4.JPG', title: isFa ? 'کتاب تالیفی ۴' : 'Authored Book 4' },
    { id: 5, src: '/book5.JPG', title: isFa ? 'کتاب تالیفی ۵' : 'Authored Book 5' },
    { id: 6, src: '/book6.JPG', title: isFa ? 'کتاب تالیفی ۶' : 'Authored Book 6' },
  ];

  const grade7Images = [
    { id: 1, src: '/summary-g7-1.JPG', title: isFa ? 'خلاصه فصل ۱' : 'Chapter 1 Summary' },
    { id: 2, src: '/summary-g7-2.JPG', title: isFa ? 'خلاصه فصل ۲' : 'Chapter 2 Summary' },
    { id: 3, src: '/summary-g7-3.JPG', title: isFa ? 'خلاصه فصل ۳' : 'Chapter 3 Summary' },
    { id: 4, src: '/summary-g7-4.JPG', title: isFa ? 'خلاصه فصل ۴' : 'Chapter 4 Summary' },
    { id: 5, src: '/summary-g7-5.JPG', title: isFa ? 'خلاصه فصل ۵' : 'Chapter 5 Summary' },
    { id: 6, src: '/summary-g7-6.JPG', title: isFa ? 'خلاصه فصل ۶' : 'Chapter 6 Summary' },
    { id: 7, src: '/summary-g7-7.JPG', title: isFa ? 'خلاصه فصل ۷' : 'Chapter 7 Summary' },
    { id: 8, src: '/summary-g7-8.JPG', title: isFa ? 'خلاصه فصل ۸' : 'Chapter 8 Summary' },
    { id: 9, src: '/summary-g7-9.JPG', title: isFa ? 'خلاصه فصل ۹' : 'Chapter 9 Summary' },
    { id: 10, src: '/summary-g7-10.JPG', title: isFa ? 'خلاصه فصل ۱۰' : 'Chapter 10 Summary' },
    { id: 11, src: '/summary-g7-11.JPG', title: isFa ? 'خلاصه فصل ۱۱' : 'Chapter 11 Summary' },
    { id: 12, src: '/summary-g7-12.JPG', title: isFa ? 'خلاصه فصل ۱۲' : 'Chapter 12 Summary' },
  ];

  const grade8Images = [
    { id: 1, src: '/IMG_0891.JPG', title: isFa ? 'خلاصه فصل ۱' : 'Chapter 1 Summary' },
    { id: 2, src: '/IMG_0892.JPG', title: isFa ? 'خلاصه فصل ۲' : 'Chapter 2 Summary' },
    { id: 3, src: '/IMG_0893.JPG', title: isFa ? 'خلاصه فصل ۳' : 'Chapter 3 Summary' },
    { id: 4, src: '/IMG_0894.JPG', title: isFa ? 'خلاصه فصل ۴' : 'Chapter 4 Summary' },
    { id: 5, src: '/IMG_0895.JPG', title: isFa ? 'خلاصه فصل ۵' : 'Chapter 5 Summary' },
    { id: 6, src: '/IMG_0896.JPG', title: isFa ? 'خلاصه فصل ۶' : 'Chapter 6 Summary' },
    { id: 7, src: '/IMG_0897.JPG', title: isFa ? 'خلاصه فصل ۷' : 'Chapter 7 Summary' },
    { id: 8, src: '/IMG_0898.JPG', title: isFa ? 'خلاصه فصل ۸' : 'Chapter 8 Summary' },
    { id: 9, src: '/IMG_0899.JPG', title: isFa ? 'خلاصه فصل ۹' : 'Chapter 9 Summary' },
    { id: 10, src: '/IMG_0900.JPG', title: isFa ? 'خلاصه فصل ۱۰' : 'Chapter 10 Summary' },
    { id: 11, src: '/IMG_0901.JPG', title: isFa ? 'خلاصه فصل ۱۱' : 'Chapter 11 Summary' },
  ];

  const grade9Images = [
    { id: 1, src: '/IMG_0908.JPG', title: isFa ? 'خلاصه فصل ۱' : 'Chapter 1 Summary' },
    { id: 2, src: '/IMG_0909.JPG', title: isFa ? 'خلاصه فصل ۲' : 'Chapter 2 Summary' },
    { id: 3, src: '/IMG_0910.JPG', title: isFa ? 'خلاصه فصل ۳' : 'Chapter 3 Summary' },
    { id: 4, src: '/IMG_0911.JPG', title: isFa ? 'خلاصه فصل ۴' : 'Chapter 4 Summary' },
    { id: 5, src: '/IMG_0912.JPG', title: isFa ? 'خلاصه فصل ۵' : 'Chapter 5 Summary' },
    { id: 6, src: '/IMG_0913.JPG', title: isFa ? 'خلاصه فصل ۶' : 'Chapter 6 Summary' },
    { id: 7, src: '/IMG_0914.JPG', title: isFa ? 'خلاصه فصل ۷' : 'Chapter 7 Summary' },
    { id: 8, src: '/IMG_0915.JPG', title: isFa ? 'خلاصه فصل ۸' : 'Chapter 8 Summary' },
    { id: 9, src: '/IMG_0916.JPG', title: isFa ? 'خلاصه فصل ۹' : 'Chapter 9 Summary' },
    { id: 10, src: '/IMG_0917.JPG', title: isFa ? 'خلاصه فصل ۱۰' : 'Chapter 10 Summary' },
  ];

  const grade10Images = [
    { id: 1, src: '/IMG_0919.JPG', title: isFa ? 'خلاصه فصل ۱' : 'Chapter 1 Summary' },
    { id: 2, src: '/IMG_0920.JPG', title: isFa ? 'خلاصه فصل ۲' : 'Chapter 2 Summary' },
    { id: 3, src: '/IMG_0921.JPG', title: isFa ? 'خلاصه فصل ۳' : 'Chapter 3 Summary' },
    { id: 4, src: '/IMG_0922.JPG', title: isFa ? 'خلاصه فصل ۴' : 'Chapter 4 Summary' },
    { id: 5, src: '/IMG_0923.JPG', title: isFa ? 'خلاصه فصل ۵' : 'Chapter 5 Summary' },
    { id: 6, src: '/IMG_0924.JPG', title: isFa ? 'خلاصه فصل ۶' : 'Chapter 6 Summary' },
    { id: 7, src: '/IMG_0925.JPG', title: isFa ? 'خلاصه فصل ۷' : 'Chapter 7 Summary' },
    { id: 8, src: '/IMG_0926.JPG', title: isFa ? 'خلاصه فصل ۸' : 'Chapter 8 Summary' },
    { id: 9, src: '/IMG_0927.JPG', title: isFa ? 'خلاصه فصل ۹' : 'Chapter 9 Summary' },
    { id: 10, src: '/IMG_0928.JPG', title: isFa ? 'خلاصه فصل ۱۰' : 'Chapter 10 Summary' },
  ];

  const grade11Images = [
    { id: 1, src: '/IMG_0930.jpg', title: isFa ? 'خلاصه فصل ۱' : 'Chapter 1 Summary' },
    { id: 2, src: '/IMG_0931.PNG', title: isFa ? 'خلاصه فصل ۲' : 'Chapter 2 Summary' },
    { id: 3, src: '/IMG_0932.PNG', title: isFa ? 'خلاصه فصل ۳' : 'Chapter 3 Summary' },
    { id: 4, src: '/IMG_0933.PNG', title: isFa ? 'خلاصه فصل ۴' : 'Chapter 4 Summary' },
    { id: 5, src: '/IMG_0934.PNG', title: isFa ? 'خلاصه فصل ۵' : 'Chapter 5 Summary' },
    { id: 6, src: '/IMG_0935.PNG', title: isFa ? 'خلاصه فصل ۶' : 'Chapter 6 Summary' },
    { id: 7, src: '/IMG_0936.PNG', title: isFa ? 'خلاصه فصل ۷' : 'Chapter 7 Summary' },
    { id: 8, src: '/IMG_0937.jpg', title: isFa ? 'خلاصه فصل ۸' : 'Chapter 8 Summary' },
    { id: 9, src: '/IMG_0938.jpg', title: isFa ? 'خلاصه فصل ۹' : 'Chapter 9 Summary' },
    { id: 10, src: '/IMG_0939.jpg', title: isFa ? 'خلاصه فصل ۱۰' : 'Chapter 10 Summary' },
    { id: 11, src: '/IMG_0940.jpg', title: isFa ? 'خلاصه فصل ۱۱' : 'Chapter 11 Summary' },
    { id: 12, src: '/IMG_0941.jpg', title: isFa ? 'خلاصه فصل ۱۲' : 'Chapter 12 Summary' },
    { id: 13, src: '/IMG_0942.PNG', title: isFa ? 'خلاصه فصل ۱۳' : 'Chapter 13 Summary' },
    { id: 14, src: '/IMG_0943.PNG', title: isFa ? 'خلاصه فصل ۱۴' : 'Chapter 14 Summary' },
    { id: 15, src: '/IMG_0944.jpg', title: isFa ? 'خلاصه فصل ۱۵' : 'Chapter 15 Summary' },
    { id: 16, src: '/IMG_0945.PNG', title: isFa ? 'خلاصه فصل ۱۶' : 'Chapter 16 Summary' },
    { id: 17, src: '/IMG_0946.jpg', title: isFa ? 'خلاصه فصل ۱۷' : 'Chapter 17 Summary' },
    { id: 18, src: '/IMG_0947.jpg', title: isFa ? 'خلاصه فصل ۱۸' : 'Chapter 18 Summary' },
    { id: 19, src: '/IMG_0948.jpg', title: isFa ? 'خلاصه فصل ۱۹' : 'Chapter 19 Summary' },
    { id: 20, src: '/IMG_0949.PNG', title: isFa ? 'خلاصه فصل ۲۰' : 'Chapter 20 Summary' },
  ];

  const grade12Images = [
    { id: 1, src: '/IMG_0956.PNG', title: isFa ? 'خلاصه فصل ۱' : 'Chapter 1 Summary' },
    { id: 2, src: '/IMG_0957.PNG', title: isFa ? 'خلاصه فصل ۲' : 'Chapter 2 Summary' },
    { id: 3, src: '/IMG_0958.jpg', title: isFa ? 'خلاصه فصل ۳' : 'Chapter 3 Summary' },
    { id: 4, src: '/IMG_0959.jpg', title: isFa ? 'خلاصه فصل ۴' : 'Chapter 4 Summary' },
    { id: 5, src: '/IMG_0960.PNG', title: isFa ? 'خلاصه فصل ۵' : 'Chapter 5 Summary' },
    { id: 6, src: '/IMG_0961.PNG', title: isFa ? 'خلاصه فصل ۶' : 'Chapter 6 Summary' },
    { id: 7, src: '/IMG_0962.PNG', title: isFa ? 'خلاصه فصل ۷' : 'Chapter 7 Summary' },
    { id: 8, src: '/IMG_0963.jpg', title: isFa ? 'خلاصه فصل ۸' : 'Chapter 8 Summary' },
    { id: 9, src: '/IMG_0964.PNG', title: isFa ? 'خلاصه فصل ۹' : 'Chapter 9 Summary' },
    { id: 10, src: '/IMG_0965.PNG', title: isFa ? 'خلاصه فصل ۱۰' : 'Chapter 10 Summary' },
    { id: 11, src: '/IMG_0966.PNG', title: isFa ? 'خلاصه فصل ۱۱' : 'Chapter 11 Summary' },
    { id: 12, src: '/IMG_0967.jpg', title: isFa ? 'خلاصه فصل ۱۲' : 'Chapter 12 Summary' },
    { id: 13, src: '/IMG_0968.PNG', title: isFa ? 'خلاصه فصل ۱۳' : 'Chapter 13 Summary' },
    { id: 14, src: '/IMG_0969.jpg', title: isFa ? 'خلاصه فصل ۱۴' : 'Chapter 14 Summary' },
    { id: 15, src: '/IMG_0970.PNG', title: isFa ? 'خلاصه فصل ۱۵' : 'Chapter 15 Summary' },
    { id: 16, src: '/IMG_0971.jpg', title: isFa ? 'خلاصه فصل ۱۶' : 'Chapter 16 Summary' },
    { id: 17, src: '/IMG_0972.PNG', title: isFa ? 'خلاصه فصل ۱۷' : 'Chapter 17 Summary' },
    { id: 18, src: '/IMG_0973.jpg', title: isFa ? 'خلاصه فصل ۱۸' : 'Chapter 18 Summary' },
    { id: 19, src: '/IMG_0974.jpg', title: isFa ? 'خلاصه فصل ۱۹' : 'Chapter 19 Summary' },
    { id: 20, src: '/IMG_0975.PNG', title: isFa ? 'خلاصه فصل ۲۰' : 'Chapter 20 Summary' },
    { id: 21, src: '/IMG_0976.PNG', title: isFa ? 'خلاصه فصل ۲۱' : 'Chapter 21 Summary' },
  ];

  return (
    <main dir={isFa ? 'rtl' : 'ltr'} className="min-h-screen bg-slate-50/50 text-slate-900 pb-12">
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-blue-100 px-4 py-3 shadow-sm">
        <div className="max-w-6xl mx-auto flex flex-col items-center gap-3">
          <div className="w-full flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 bg-blue-50 border border-blue-200 text-blue-600 rounded-xl flex items-center justify-center p-1.5 shadow-sm">
                <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M2 3h20v14H2z" /><path d="M8 21l4-4 4 4" /><path d="M7 8h4" /><path d="M7 12h2" /><path d="M15 11l2 2 4-4" />
                </svg>
              </div>
              <h1 className="font-black text-base md:text-xl text-blue-950 tracking-tight leading-snug">
                {isFa ? 'آموزش بین‌المللی ریاضیات' : 'International Math'}
              </h1>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 bg-blue-50/50 px-3 py-1.5 rounded-lg border border-blue-100 shadow-inner">
                <button type="button" onClick={() => setLang('fa')} className={`text-xs font-bold transition ${isFa ? 'text-blue-600 underline font-black' : 'text-slate-500 hover:text-blue-950'}`}>فارسی</button>
                <span className="text-blue-300 font-light" aria-hidden="true">|</span>
                <button type="button" onClick={() => setLang('en')} className={`text-xs font-bold transition ${!isFa ? 'text-blue-600 underline font-black' : 'text-slate-500 hover:text-blue-950'}`}>English</button>
              </div>
            </div>
          </div>

          <div className="w-full flex flex-col items-center gap-2 border-t border-blue-50 pt-3">
            <nav className="w-full flex items-center justify-center gap-4 md:gap-6 overflow-x-auto py-2 text-xs md:text-sm font-medium text-slate-700">
              <Link 
                href="/" 
                className="hover:text-blue-600 whitespace-nowrap transition-colors flex items-center gap-1.5"
              >
                <span>{isFa ? 'خانه' : 'Home'}</span>
              </Link>
              <Link href="/educational-systems" className="hover:text-blue-600 whitespace-nowrap transition-colors">
                {isFa ? 'نظام آموزشی کشورها' : 'Educational Systems'}
              </Link>
              <Link 
                href="/books" 
                className={`whitespace-nowrap transition-colors font-bold ${
                  pathname === '/books' 
                    ? 'text-blue-700 font-black' 
                    : 'text-slate-700 hover:text-blue-600'
                }`}
              >
                {isFa ? 'کتب و منابع آموزشی' : 'Books & Resources'}
              </Link>
              <Link href="/math-sites" className="hover:text-blue-600 whitespace-nowrap transition-colors">
                {isFa ? 'سایت‌های ریاضی کشورها' : 'Math Websites'}
              </Link>
              <button type="button" aria-expanded={isFeedbackOpen} onClick={() => setIsFeedbackOpen(!isFeedbackOpen)} className="hover:text-blue-600 whitespace-nowrap transition-colors flex items-center gap-1">
                <span>{isFa ? 'بازخورد کلاس‌ها' : 'Class Feedback'}</span>
                <span className="text-[10px]" aria-hidden="true">{isFeedbackOpen ? '▲' : '▼'}</span>
              </button>
              <Link href="/#contact" className="hover:text-blue-600 whitespace-nowrap transition-colors">
                {isFa ? 'ارتباط با استاد' : 'Contact'}
              </Link>
            </nav>

            {isFeedbackOpen && (
              <div className="w-full flex items-center justify-center gap-2 flex-wrap bg-blue-50/60 p-3 rounded-2xl border border-blue-100 my-1 shadow-inner">
                {FEEDBACKS.map((item, idx) => (
                  <a key={idx} href={item.link} target="_blank" rel="noopener noreferrer" className="px-3 py-1.5 bg-white hover:bg-blue-50 text-xs font-semibold text-blue-950 rounded-lg border border-blue-100 shadow-sm transition-all flex items-center gap-1.5">
                    <span aria-hidden="true">⭐</span>
                    <span>{isFa ? item.fa : item.en}</span>
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      </header>

      <section className="max-w-4xl mx-auto text-center px-4 pt-8 pb-4">
        <h2 className="text-3xl md:text-4xl font-extrabold text-blue-950 mb-2">
          📚 {isFa ? 'کتب و منابع آموزشی' : 'Educational Books & Resources'}
        </h2>
        <p className="text-slate-600 text-sm md:text-base">
          {isFa ? 'مجموعه کامل کتاب‌های آموزشی، تالیفی و خلاصه فصل‌های ریاضیات' : 'Comprehensive collection of math textbooks and chapter summaries'}
        </p>
      </section>

      <div className="max-w-3xl mx-auto px-4 mt-6 mb-8">
        <div className="flex flex-wrap justify-center items-center gap-3">
          <button
            type="button"
            onClick={() => setActiveTab('taught')}
            className={`px-5 py-2.5 rounded-xl font-bold text-xs md:text-sm transition-all duration-150 cursor-pointer flex items-center justify-center gap-2 ${
              activeTab === 'taught'
                ? 'bg-blue-600 text-white border border-blue-600 shadow-sm shadow-blue-200'
                : 'bg-white text-slate-700 border border-blue-100 hover:bg-blue-50/50'
            }`}
          >
            <span className="text-sm" aria-hidden="true">📖</span>
            <span>{isFa ? 'کتاب‌های تدریس شده کشورها' : 'Books Taught'}</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('authored')}
            className={`px-5 py-2.5 rounded-xl font-bold text-xs md:text-sm transition-all duration-150 cursor-pointer flex items-center justify-center gap-2 ${
              activeTab === 'authored'
                ? 'bg-blue-600 text-white border border-blue-600 shadow-sm shadow-blue-200'
                : 'bg-white text-slate-700 border border-blue-100 hover:bg-blue-50/50'
            }`}
          >
            <span className="text-sm" aria-hidden="true">✍️</span>
            <span>{isFa ? 'کتاب های تالیف شده' : 'Authored Books'}</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('summaries')}
            className={`px-5 py-2.5 rounded-xl font-bold text-xs md:text-sm transition-all duration-150 cursor-pointer flex items-center justify-center gap-2 ${
              activeTab === 'summaries'
                ? 'bg-blue-600 text-white border border-blue-600 shadow-sm shadow-blue-200'
                : 'bg-white text-slate-700 border border-blue-100 hover:bg-blue-50/50'
            }`}
          >
            <span className="text-sm" aria-hidden="true">📝</span>
            <span>{isFa ? 'خلاصه فصل‌های کتاب' : 'Chapter Summaries'}</span>
          </button>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4">
        {activeTab === 'taught' && (
          <BooksSection lang={lang} />
        )}

        {activeTab === 'authored' && (
          <div className="bg-blue-50/30 border border-blue-100 rounded-3xl p-4 md:p-8 shadow-sm">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-6 border-b border-blue-100 pb-4">
              <h3 className="text-xl font-black text-blue-950 text-center md:text-right">
                {isFa ? '✍️ کتاب‌های تالیف شده دانشگاهی' : '✍️ Authored University Books'}
              </h3>
              <a 
                href="https://t.me/International_Maths/103" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="View on Telegram"
                className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-xs md:text-sm font-bold rounded-xl shadow-sm transition-all flex items-center gap-2"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.2-.08-.06-.19-.04-.27-.02-.12.03-1.99 1.27-5.62 3.72-.53.36-1.01.54-1.44.53-.47-.01-1.37-.26-2.03-.48-.82-.27-1.47-.42-1.42-.88.03-.25.38-.51 1.05-.78 4.11-1.79 6.85-2.97 8.22-3.54 3.91-1.64 4.72-1.92 5.25-1.93.12 0 .39.03.56.17.14.12.18.28.2.45-.02.07-.02.14-.04.23z"/>
                </svg>
                <span>{isFa ? 'مشاهده در تلگرام' : 'View on Telegram'}</span>
              </a>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
              {authoredBooks.map((book) => (
                <div key={book.id} className="w-full bg-white border border-blue-100 rounded-2xl overflow-hidden p-3 shadow-sm hover:shadow transition">
                  <img 
                    src={book.src} 
                    alt={book.title} 
                    className="w-full h-auto object-contain rounded-xl block mb-3"
                    loading="lazy"
                  />
                  <div className="px-1 text-center">
                    <span className="font-bold text-sm text-blue-950">{book.title}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'summaries' && (
          <div className="space-y-8">
            <div className="flex flex-wrap justify-center gap-3 md:gap-4 bg-blue-50/40 p-6 rounded-3xl border border-blue-100 shadow-inner">
              {grades.map((grade) => {
                const isSelected = selectedGrade === grade.id;
                return (
                  <button
                    key={grade.id}
                    type="button"
                    onClick={() => setSelectedGrade(grade.id)}
                    className={`px-5 py-2.5 rounded-xl font-bold text-xs md:text-sm transition-all duration-150 cursor-pointer ${
                      isSelected
                        ? 'bg-blue-600 text-white border border-blue-600 shadow-sm shadow-blue-200'
                        : 'bg-white text-slate-700 border border-blue-100 hover:bg-blue-50/50'
                    }`}
                  >
                    {isFa ? grade.fa : grade.en}
                  </button>
                );
              })}
            </div>

            {[7, 8, 9, 10].includes(selectedGrade) && (
              <div className="bg-blue-50/30 border border-blue-100 rounded-3xl p-4 md:p-8 shadow-sm">
                <h3 className="text-xl font-black text-blue-950 mb-6 text-center border-b border-blue-100 pb-3">
                  {isFa ? `📌 خلاصه فصل‌های ریاضی ${grades.find(g => g.id === selectedGrade)?.fa}` : `📌 ${grades.find(g => g.id === selectedGrade)?.en} Chapter Summaries`}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
                  {(selectedGrade === 7 ? grade7Images : 
                    selectedGrade === 8 ? grade8Images : 
                    selectedGrade === 9 ? grade9Images : grade10Images).map((img) => (
                    <div key={img.id} className="w-full bg-white border border-blue-100 rounded-2xl overflow-hidden shadow-sm transition">
                      <img 
                        src={img.src} 
                        alt={img.title || 'Summary'} 
                        className="w-full h-auto object-contain block"
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {selectedGrade === 11 && (
              <div className="bg-blue-50/30 border border-blue-100 rounded-3xl p-4 md:p-8 shadow-sm">
                <h3 className="text-xl font-black text-blue-950 mb-6 text-center border-b border-blue-100 pb-3">
                  {isFa ? '📌 خلاصه فصل‌های ریاضی پایه یازدهم' : '📌 Grade 11 Chapter Summaries'}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 items-start">
                  {grade11Images.map((img) => (
                    <div key={img.id} className="w-full bg-white border border-blue-100 rounded-xl overflow-hidden shadow-sm">
                      <img 
                        src={img.src} 
                        alt={img.title || 'Summary'} 
                        className="w-full h-auto object-contain block"
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {selectedGrade === 12 && (
              <div className="bg-blue-50/30 border border-blue-100 rounded-3xl p-4 md:p-8 shadow-sm">
                <h3 className="text-xl font-black text-blue-950 mb-6 text-center border-b border-blue-100 pb-3">
                  {isFa ? '📌 خلاصه فصل‌های ریاضی پایه دوازدهم' : '📌 Grade 12 Chapter Summaries'}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 items-start">
                  {grade12Images.map((img) => (
                    <div key={img.id} className="w-full bg-white border border-blue-100 rounded-xl overflow-hidden shadow-sm">
                      <img 
                        src={img.src} 
                        alt={img.title || 'Summary'} 
                        className="w-full h-auto object-contain block"
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {![7, 8, 9, 10, 11, 12].includes(selectedGrade) && (
              <div className="text-center py-12 bg-blue-50/40 rounded-2xl border border-dashed border-blue-200">
                <p className="text-slate-600 text-sm md:text-base font-medium">
                  {isFa 
                    ? `خلاصه فصل‌های مربوط به ${grades.find(g => g.id === selectedGrade)?.fa} به‌زودی اضافه خواهد شد.` 
                    : `Summaries for ${grades.find(g => g.id === selectedGrade)?.en} will be added soon.`}
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </main>
  );
}
