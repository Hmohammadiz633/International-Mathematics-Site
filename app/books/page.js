'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import BooksSection from '@/components/BooksSection';

// انتقال متغیرهای ثابت به بیرون از کامپوننت جهت بهینه‌سازی رندر
const FEEDBACKS = [
  { fa: 'بازخورد ۱', en: 'Feedback 1', link: 'https://t.me/International_Maths/110' },
  { fa: 'بازخورد ۲', en: 'Feedback 2', link: 'https://t.me/International_Maths/111' },
  { fa: 'بازخورد ۳', en: 'Feedback 3', link: 'https://t.me/International_Maths/1352' },
];

const GRADES = [
  { id: 7, fa: 'پایه هفتم', en: 'Grade 7' },
  { id: 8, fa: 'پایه هشتم', en: 'Grade 8' },
  { id: 9, fa: 'پایه نهم', en: 'Grade 9' },
  { id: 10, fa: 'پایه دهم', en: 'Grade 10' },
  { id: 11, fa: 'پایه یازدهم', en: 'Grade 11' },
  { id: 12, fa: 'پایه دوازدهم', en: 'Grade 12' },
];

const AUTHORED_BOOKS = [
  { id: 1, src: '/book1.JPG', title: 'کتاب تالیفی ۱' },
  { id: 2, src: '/book2.JPG', title: 'کتاب تالیفی ۲' },
  { id: 3, src: '/book3.JPG', title: 'کتاب تالیفی ۳' },
  { id: 4, src: '/book4.JPG', title: 'کتاب تالیفی ۴' },
  { id: 5, src: '/book5.JPG', title: 'کتاب تالیفی ۵' },
  { id: 6, src: '/book6.JPG', title: 'کتاب تالیفی ۶' },
];

const GRADE_7_IMAGES = [
  { id: 1, src: '/summary-g7-1.JPG', title: 'خلاصه فصل ۱' },
  { id: 2, src: '/summary-g7-2.JPG', title: 'خلاصه فصل ۲' },
  { id: 3, src: '/summary-g7-3.JPG', title: 'خلاصه فصل ۳' },
  { id: 4, src: '/summary-g7-4.JPG', title: 'خلاصه فصل ۴' },
  { id: 5, src: '/summary-g7-5.JPG', title: 'خلاصه فصل ۵' },
  { id: 6, src: '/summary-g7-6.JPG', title: 'خلاصه فصل ۶' },
  { id: 7, src: '/summary-g7-7.JPG', title: 'خلاصه فصل ۷' },
  { id: 8, src: '/summary-g7-8.JPG', title: 'خلاصه فصل ۸' },
  { id: 9, src: '/summary-g7-9.JPG', title: 'خلاصه فصل ۹' },
  { id: 10, src: '/summary-g7-10.JPG', title: 'خلاصه فصل ۱۰' },
  { id: 11, src: '/summary-g7-11.JPG', title: 'خلاصه فصل ۱۱' },
  { id: 12, src: '/summary-g7-12.JPG', title: 'خلاصه فصل ۱۲' },
];

const GRADE_8_IMAGES = [
  { id: 1, src: '/IMG_0891.JPG', title: 'خلاصه فصل ۱' },
  { id: 2, src: '/IMG_0892.JPG', title: 'خلاصه فصل ۲' },
  { id: 3, src: '/IMG_0893.JPG', title: 'خلاصه فصل ۳' },
  { id: 4, src: '/IMG_0894.JPG', title: 'خلاصه فصل ۴' },
  { id: 5, src: '/IMG_0895.JPG', title: 'خلاصه فصل ۵' },
  { id: 6, src: '/IMG_0896.JPG', title: 'خلاصه فصل ۶' },
  { id: 7, src: '/IMG_0897.JPG', title: 'خلاصه فصل ۷' },
  { id: 8, src: '/IMG_0898.JPG', title: 'خلاصه فصل ۸' },
  { id: 9, src: '/IMG_0899.JPG', title: 'خلاصه فصل ۹' },
  { id: 10, src: '/IMG_0900.JPG', title: 'خلاصه فصل ۱۰' },
  { id: 11, src: '/IMG_0901.JPG', title: 'خلاصه فصل ۱۱' },
];

const GRADE_9_IMAGES = [
  { id: 1, src: '/IMG_0908.JPG', title: 'خلاصه فصل ۱' },
  { id: 2, src: '/IMG_0909.JPG', title: 'خلاصه فصل ۲' },
  { id: 3, src: '/IMG_0910.JPG', title: 'خلاصه فصل ۳' },
  { id: 4, src: '/IMG_0911.JPG', title: 'خلاصه فصل ۴' },
  { id: 5, src: '/IMG_0912.JPG', title: 'خلاصه فصل ۵' },
  { id: 6, src: '/IMG_0913.JPG', title: 'خلاصه فصل ۶' },
  { id: 7, src: '/IMG_0914.JPG', title: 'خلاصه فصل ۷' },
  { id: 8, src: '/IMG_0915.JPG', title: 'خلاصه فصل ۸' },
  { id: 9, src: '/IMG_0916.JPG', title: 'خلاصه فصل ۹' },
  { id: 10, src: '/IMG_0917.JPG', title: 'خلاصه فصل ۱۰' },
];

const GRADE_10_IMAGES = [
  { id: 1, src: '/IMG_0919.JPG', title: 'خلاصه فصل ۱' },
  { id: 2, src: '/IMG_0920.JPG', title: 'خلاصه فصل ۲' },
  { id: 3, src: '/IMG_0921.JPG', title: 'خلاصه فصل ۳' },
  { id: 4, src: '/IMG_0922.JPG', title: 'خلاصه فصل ۴' },
  { id: 5, src: '/IMG_0923.JPG', title: 'خلاصه فصل ۵' },
  { id: 6, src: '/IMG_0924.JPG', title: 'خلاصه فصل ۶' },
  { id: 7, src: '/IMG_0925.JPG', title: 'خلاصه فصل ۷' },
  { id: 8, src: '/IMG_0926.JPG', title: 'خلاصه فصل ۸' },
  { id: 9, src: '/IMG_0927.JPG', title: 'خلاصه فصل ۹' },
  { id: 10, src: '/IMG_0928.JPG', title: 'خلاصه فصل ۱۰' },
];

const GRADE_11_IMAGES = [
  { id: 1, src: '/IMG_0930.jpg' },
  { id: 2, src: '/IMG_0931.PNG' },
  { id: 3, src: '/IMG_0932.PNG' },
  { id: 4, src: '/IMG_0933.PNG' },
  { id: 5, src: '/IMG_0934.PNG' },
  { id: 6, src: '/IMG_0935.PNG' },
  { id: 7, src: '/IMG_0936.PNG' },
  { id: 8, src: '/IMG_0937.jpg' },
  { id: 9, src: '/IMG_0938.jpg' },
  { id: 10, src: '/IMG_0939.jpg' },
  { id: 11, src: '/IMG_0940.jpg' },
  { id: 12, src: '/IMG_0941.jpg' },
  { id: 13, src: '/IMG_0942.PNG' },
  { id: 14, src: '/IMG_0943.PNG' },
  { id: 15, src: '/IMG_0944.jpg' },
  { id: 16, src: '/IMG_0945.PNG' },
  { id: 17, src: '/IMG_0946.jpg' },
  { id: 18, src: '/IMG_0947.jpg' },
  { id: 19, src: '/IMG_0948.jpg' },
  { id: 20, src: '/IMG_0949.PNG' },
];

const GRADE_12_IMAGES = [
  { id: 1, src: '/IMG_0956.PNG' },
  { id: 2, src: '/IMG_0957.PNG' },
  { id: 3, src: '/IMG_0958.jpg' },
  { id: 4, src: '/IMG_0959.jpg' },
  { id: 5, src: '/IMG_0960.PNG' },
  { id: 6, src: '/IMG_0961.PNG' },
  { id: 7, src: '/IMG_0962.PNG' },
  { id: 8, src: '/IMG_0963.jpg' },
  { id: 9, src: '/IMG_0964.PNG' },
  { id: 10, src: '/IMG_0965.PNG' },
  { id: 11, src: '/IMG_0966.PNG' },
  { id: 12, src: '/IMG_0967.jpg' },
  { id: 13, src: '/IMG_0968.PNG' },
  { id: 14, src: '/IMG_0969.jpg' },
  { id: 15, src: '/IMG_0970.PNG' },
  { id: 16, src: '/IMG_0971.jpg' },
  { id: 17, src: '/IMG_0972.PNG' },
  { id: 18, src: '/IMG_0973.jpg' },
  { id: 19, src: '/IMG_0974.jpg' },
  { id: 20, src: '/IMG_0975.PNG' },
  { id: 21, src: '/IMG_0976.PNG' },
];

export default function BooksPage() {
  const [lang, setLang] = useState('fa');
  const [activeTab, setActiveTab] = useState('taught');
  const [selectedGrade, setSelectedGrade] = useState(7);
  const [isFeedbackOpen, setIsFeedbackOpen] = useState(false);
  const pathname = usePathname();

  const isFa = lang === 'fa';

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main dir={isFa ? 'rtl' : 'ltr'} className="min-h-screen bg-slate-50 text-slate-900 pb-12 antialiased font-sans">
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200/80 px-4 py-3 shadow-sm">
        <div className="max-w-6xl mx-auto flex flex-col items-center gap-3">
          <div className="w-full flex items-center justify-between">
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

            <div className="flex items-center gap-2 bg-gray-100 px-3 py-1.5 rounded-lg border border-gray-300 shadow-inner">
              <button type="button" onClick={() => setLang('fa')} className={`text-xs font-bold transition ${isFa ? 'text-blue-700 underline font-black' : 'text-gray-500 hover:text-black'}`}>فارسی</button>
              <span className="text-gray-400 font-light">|</span>
              <button type="button" onClick={() => setLang('en')} className={`text-xs font-bold transition ${!isFa ? 'text-blue-700 underline font-black' : 'text-gray-500 hover:text-black'}`}>English</button>
            </div>
          </div>

          <div className="w-full flex flex-col items-center gap-2 border-t border-gray-100 pt-3">
            <div className="w-full flex items-center justify-center gap-4 md:gap-6 overflow-x-auto py-2 text-xs md:text-sm font-medium text-gray-700">
              <Link 
                href="/" 
                className={`whitespace-nowrap transition-colors px-2.5 py-1 rounded-md ${
                  pathname === '/' ? 'bg-slate-200 text-slate-900 font-bold' : 'hover:text-blue-600'
                }`}
              >
                {isFa ? 'خانه' : 'Home'}
              </Link>

              <Link 
                href="/educational-systems" 
                className={`whitespace-nowrap transition-colors px-2.5 py-1 rounded-md ${
                  pathname === '/educational-systems' ? 'bg-slate-200 text-slate-900 font-bold' : 'hover:text-blue-600'
                }`}
              >
                {isFa ? 'نظام آموزشی کشورها' : 'Educational Systems'}
              </Link>

              <Link 
                href="/books" 
                className={`whitespace-nowrap transition-colors px-2.5 py-1 rounded-md ${
                  pathname === '/books' ? 'bg-slate-200 text-slate-900 font-bold' : 'hover:text-blue-600'
                }`}
              >
                {isFa ? 'کتب و منابع آموزشی' : 'Books & Resources'}
              </Link>

              <Link 
                href="/math-sites" 
                className={`whitespace-nowrap transition-colors px-2.5 py-1 rounded-md ${
                  pathname === '/math-sites' ? 'bg-slate-200 text-slate-900 font-bold' : 'hover:text-blue-600'
                }`}
              >
                {isFa ? 'سایت‌های ریاضی کشورها' : 'Math Websites'}
              </Link>

              <button 
                type="button" 
                aria-expanded={isFeedbackOpen} 
                onClick={() => setIsFeedbackOpen(!isFeedbackOpen)} 
                className="hover:text-blue-600 whitespace-nowrap transition-colors flex items-center gap-1 px-2.5 py-1 rounded-md"
              >
                <span>{isFa ? 'بازخورد کلاس‌ها' : 'Class Feedback'}</span>
                <span className="text-[10px]">{isFeedbackOpen ? '▲' : '▼'}</span>
              </button>

              <button 
                type="button"
                onClick={() => scrollToSection('contact')} 
                className="hover:text-blue-600 whitespace-nowrap transition-colors px-2.5 py-1 rounded-md"
              >
                {isFa ? 'ارتباط با استاد' : 'Contact'}
              </button>
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

      <section className="max-w-4xl mx-auto text-center px-4 pt-10 pb-4">
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-2 tracking-tight">
          📚 {isFa ? 'کتب و منابع آموزشی' : 'Educational Books & Resources'}
        </h2>
        <p className="text-slate-600 text-sm md:text-base font-medium">
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
                ? 'bg-slate-900 text-white border border-slate-900 shadow-sm'
                : 'bg-white text-slate-800 border border-slate-200 hover:bg-slate-50'
            }`}
          >
            <span className="text-sm">📖</span>
            <span>{isFa ? 'کتاب‌های تدریس شده کشورها' : 'Books Taught'}</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('authored')}
            className={`px-5 py-2.5 rounded-xl font-bold text-xs md:text-sm transition-all duration-150 cursor-pointer flex items-center justify-center gap-2 ${
              activeTab === 'authored'
                ? 'bg-slate-900 text-white border border-slate-900 shadow-sm'
                : 'bg-white text-slate-800 border border-slate-200 hover:bg-slate-50'
            }`}
          >
            <span className="text-sm">✍️</span>
            <span>{isFa ? 'کتاب های تالیف شده' : 'Authored Books'}</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('summaries')}
            className={`px-5 py-2.5 rounded-xl font-bold text-xs md:text-sm transition-all duration-150 cursor-pointer flex items-center justify-center gap-2 ${
              activeTab === 'summaries'
                ? 'bg-slate-900 text-white border border-slate-900 shadow-sm'
                : 'bg-white text-slate-800 border border-slate-200 hover:bg-slate-50'
            }`}
          >
            <span className="text-sm">📝</span>
            <span>{isFa ? 'خلاصه فصل‌های کتاب' : 'Chapter Summaries'}</span>
          </button>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4">
        {activeTab === 'taught' && (
          <BooksSection lang={lang} />
        )}

        {activeTab === 'authored' && (
          <div className="bg-white border border-gray-200/90 rounded-3xl p-4 md:p-8 shadow-md">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-6 border-b border-gray-100 pb-4">
              <h3 className="text-xl font-black text-slate-800 text-center md:text-right">
                {isFa ? '✍️ کتاب‌های تالیف شده دانشگاهی' : '✍️ Authored University Books'}
              </h3>
              <a 
                href="https://t.me/International_Maths/103" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white text-xs md:text-sm font-bold rounded-xl shadow-sm transition-all flex items-center gap-2"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.2-.08-.06-.19-.04-.27-.02-.12.03-1.99 1.27-5.62 3.72-.53.36-1.01.54-1.44.53-.47-.01-1.37-.26-2.03-.48-.82-.27-1.47-.42-1.42-.88.03-.25.38-.51 1.05-.78 4.11-1.79 6.85-2.97 8.22-3.54 3.91-1.64 4.72-1.92 5.25-1.93.12 0 .39.03.56.17.14.12.18.28.2.45-.02.07-.02.14-.04.23z"/>
                </svg>
                <span>{isFa ? 'مشاهده در تلگرام' : 'View on Telegram'}</span>
              </a>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
              {AUTHORED_BOOKS.map((book) => (
                <div key={book.id} className="w-full bg-slate-50 border border-gray-200/80 rounded-2xl overflow-hidden p-3 shadow-sm hover:shadow transition">
                  <img 
                    src={book.src} 
                    alt={book.title} 
                    className="w-full h-auto object-contain rounded-xl block mb-3"
                    loading="lazy"
                  />
                  <div className="px-1 text-center">
                    <span className="font-bold text-sm text-slate-800">{book.title}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'summaries' && (
          <div className="space-y-8">
            <div className="flex flex-wrap justify-center gap-3 md:gap-4 bg-white p-6 rounded-3xl border border-gray-200/90 shadow-md">
              {GRADES.map((grade) => {
                const isSelected = selectedGrade === grade.id;
                return (
                  <button
                    key={grade.id}
                    type="button"
                    onClick={() => setSelectedGrade(grade.id)}
                    className={`px-5 py-2.5 rounded-xl font-bold text-xs md:text-sm transition-all duration-150 cursor-pointer ${
                      isSelected
                        ? 'bg-slate-900 text-white border border-slate-900 shadow-sm'
                        : 'bg-slate-50 text-slate-800 border border-gray-200 hover:bg-gray-100'
                    }`}
                  >
                    {isFa ? grade.fa : grade.en}
                  </button>
                );
              })}
            </div>

            {[7, 8, 9, 10].includes(selectedGrade) && (
              <div className="bg-white border border-gray-200/90 rounded-3xl p-4 md:p-8 shadow-md">
                <h3 className="text-xl font-black text-slate-800 mb-6 text-center border-b border-gray-100 pb-3">
                  {isFa ? `📌 خلاصه فصل‌های ریاضی ${GRADES.find(g => g.id === selectedGrade)?.fa}` : `📌 ${GRADES.find(g => g.id === selectedGrade)?.en} Chapter Summaries`}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
                  {(selectedGrade === 7 ? GRADE_7_IMAGES : 
                    selectedGrade === 8 ? GRADE_8_IMAGES : 
                    selectedGrade === 9 ? GRADE_9_IMAGES : GRADE_10_IMAGES).map((img) => (
                    <div key={img.id} className="w-full bg-slate-50 border border-gray-200/80 rounded-2xl overflow-hidden p-3 shadow-sm transition">
                      <img 
                        src={img.src} 
                        alt={img.title || 'Summary'} 
                        className="w-full h-auto object-contain rounded-xl block mb-2"
                        loading="lazy"
                      />
                      <div className="text-center font-bold text-xs text-slate-700">{img.title}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {selectedGrade === 11 && (
              <div className="bg-white border border-gray-200/90 rounded-3xl p-4 md:p-8 shadow-md">
                <h3 className="text-xl font-black text-slate-800 mb-6 text-center border-b border-gray-100 pb-3">
                  {isFa ? '📌 خلاصه فصل‌های ریاضی پایه یازدهم' : '📌 Grade 11 Chapter Summaries'}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 items-start">
                  {GRADE_11_IMAGES.map((img) => (
                    <div key={img.id} className="w-full bg-slate-50 border border-gray-200/80 rounded-xl overflow-hidden p-2 shadow-sm">
                      <img 
                        src={img.src} 
                        alt="Summary" 
                        className="w-full h-auto object-contain rounded-lg block"
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {selectedGrade === 12 && (
              <div className="bg-white border border-gray-200/90 rounded-3xl p-4 md:p-8 shadow-md">
                <h3 className="text-xl font-black text-slate-800 mb-6 text-center border-b border-gray-100 pb-3">
                  {isFa ? '📌 خلاصه فصل‌های ریاضی پایه دوازدهم' : '📌 Grade 12 Chapter Summaries'}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 items-start">
                  {GRADE_12_IMAGES.map((img) => (
                    <div key={img.id} className="w-full bg-slate-50 border border-gray-200/80 rounded-xl overflow-hidden p-2 shadow-sm">
                      <img 
                        src={img.src} 
                        alt="Summary" 
                        className="w-full h-auto object-contain rounded-lg block"
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {![7, 8, 9, 10, 11, 12].includes(selectedGrade) && (
              <div className="text-center py-12 bg-white rounded-3xl border border-dashed border-gray-300 shadow-sm">
                <p className="text-slate-600 text-sm md:text-base font-medium">
                  {isFa 
                    ? `خلاصه فصل‌های مربوط به ${GRADES.find(g => g.id === selectedGrade)?.fa} به‌زودی اضافه خواهد شد.` 
                    : `Summaries for ${GRADES.find(g => g.id === selectedGrade)?.en} will be added soon.`}
                </p>
              </div>
            )}
          </div>
        )}
      </div>

      <div id="contact" className="max-w-5xl mx-auto px-4 pt-12">
        <div className="bg-white text-slate-900 rounded-3xl p-6 md:p-8 border border-gray-200/90 shadow-md">
          <h4 className="text-xl md:text-2xl font-black text-slate-900 mb-6 flex items-center gap-3 border-b border-gray-100 pb-3 leading-snug">
            <span className="p-2 bg-blue-50 text-blue-700 rounded-xl">📞</span>
            <span>{isFa ? 'ارتباط با استاد' : 'Contact Professor'}</span>
          </h4>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <a
              href="https://t.me/International_Maths"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-4 bg-blue-50/50 hover:bg-blue-100/60 border border-blue-200 rounded-2xl transition group shadow-sm"
            >
              <div className="flex items-center gap-3">
                <svg className="w-8 h-8 text-sky-500 fill-current shrink-0" viewBox="0 0 24 24">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.161c-.18 1.897-.962 6.502-1.359 8.627-.168.9-.5 1.201-.82 1.23-.697.064-1.228-.461-1.901-.903-1.056-.693-1.653-1.124-2.678-1.8-1.185-.781-.417-1.21.258-1.911.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635.099-.002.321.023.465.14.12.098.153.228.166.331.012.095.029.311.011.479z"/>
                </svg>
                <div>
                  <div className="font-bold text-slate-900 text-sm md:text-base">
                    {isFa ? 'کانال تلگرام' : 'Telegram Channel'}
                  </div>
                  <div className="text-xs text-slate-500" dir="ltr">@International_Maths</div>
                </div>
              </div>
              <span className="text-blue-600 font-bold group-hover:translate-x-1 transition-transform">↗</span>
            </a>

            <a
              href="https://instagram.com/Hadi_mohammadi_zarandini"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-4 bg-pink-50/50 hover:bg-pink-100/60 border border-pink-200 rounded-2xl transition group shadow-sm"
            >
              <div className="flex items-center gap-3">
                <svg className="w-8 h-8 text-pink-600 fill-current shrink-0" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                <div>
                  <div className="font-bold text-slate-900 text-sm md:text-base">
                    {isFa ? 'صفحه اینستاگرام' : 'Instagram Page'}
                  </div>
                  <div className="text-xs text-slate-500" dir="ltr">@Hadi_mohammadi_zarandini</div>
                </div>
              </div>
              <span className="text-pink-600 font-bold group-hover:translate-x-1 transition-transform">↗</span>
            </a>

            <a
              href="mailto:Hadi.mohammadi.zarandini@gmail.com"
              className="flex items-center justify-between p-4 bg-red-50/50 hover:bg-red-100/60 border border-red-200 rounded-2xl transition group shadow-sm"
            >
              <div className="flex items-center gap-3 overflow-hidden">
                <svg className="w-8 h-8 text-red-500 fill-current shrink-0" viewBox="0 0 24 24">
                  <path d="M12 12.713l-11.985-9.713h23.97l-11.985 9.713zm0 2.574l-12-9.713v13.856h24v-13.856l-12 9.713z"/>
                </svg>
                <div className="truncate">
                  <div className="font-bold text-slate-900 text-sm md:text-base">
                    {isFa ? 'ارسال ایمیل (جیمیل)' : 'Gmail'}
                  </div>
                  <div className="text-xs text-slate-500 truncate" dir="ltr">Hadi.mohammadi.zarandini@gmail.com</div>
                </div>
              </div>
              <span className="text-red-600 font-bold group-hover:translate-x-1 transition-transform shrink-0">↗</span>
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
