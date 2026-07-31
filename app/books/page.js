'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function BooksPage() {
  const [lang, setLang] = useState('fa');
  const [activeTab, setActiveTab] = useState('taught-books'); // 'taught-books' یا 'summaries'
  const [selectedGrade, setSelectedGrade] = useState('g7');

  const isFa = lang === 'fa';

  const grades = [
    { id: 'g7', fa: 'پایه هفتم (Grade 7)', en: 'Grade 7' },
    { id: 'g8', fa: 'پایه هشتم (Grade 8)', en: 'Grade 8' },
    { id: 'g9', fa: 'پایه نهم (Grade 9)', en: 'Grade 9' },
    { id: 'g10', fa: 'پایه دهم (Grade 10)', en: 'Grade 10' },
    { id: 'g11', fa: 'پایه یازدهم (Grade 11)', en: 'Grade 11' },
    { id: 'g12', fa: 'پایه دوازدهم (Grade 12)', en: 'Grade 12' },
  ];

  // لیست دقیق تصاویر خلاصه فصل هفتم
  const grade7Summaries = [
    '/summary-g7-1.png',
    '/summary-g7-2.png',
    '/summary-g7-3.png',
    '/summary-g7-4.png',
    '/summary-g7-5.png',
    '/summary-g7-6.png',
    '/summary-g7-7.png',
    '/summary-g7-8.png',
    '/summary-g7-9.png',
    '/summary-g7-10.png',
  ];

  return (
    <main dir={isFa ? 'rtl' : 'ltr'} className="min-h-screen bg-slate-50 text-slate-900 font-sans pb-12 antialiased">
      {/* هدر صفحه کتاب و منابع آموزشی */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 px-4 py-4 shadow-sm">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-blue-700 font-bold text-sm hover:underline">
            <span>←</span>
            <span>{isFa ? 'بازگشت به صفحه اصلی' : 'Back to Home'}</span>
          </Link>

          <h1 className="text-base md:text-xl font-black text-slate-800">
            📚 {isFa ? 'کتاب و منابع آموزشی' : 'Books & Educational Resources'}
          </h1>

          <button 
            type="button"
            onClick={() => setLang(isFa ? 'en' : 'fa')} 
            className="text-xs font-bold px-3 py-1.5 bg-gray-100 rounded-lg border border-gray-300"
          >
            {isFa ? 'English' : 'فارسی'}
          </button>
        </div>
      </header>

      <div className="max-w-5xl mx-auto px-4 pt-8">
        
        {/* دو دکمه اصلی زیر سرتیتر */}
        <div className="flex items-center justify-center gap-3 mb-8 bg-white p-2 rounded-2xl border border-gray-200 shadow-sm max-w-lg mx-auto">
          <button
            type="button"
            onClick={() => setActiveTab('taught-books')}
            className={`flex-1 py-3 px-4 text-xs md:text-sm font-bold rounded-xl transition flex items-center justify-center gap-2 ${
              activeTab === 'taught-books'
                ? 'bg-blue-600 text-white shadow-md'
                : 'bg-transparent text-slate-600 hover:bg-slate-100'
            }`}
          >
            <span>📘</span>
            <span>{isFa ? 'کتب تدریس شده' : 'Taught Books'}</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('summaries')}
            className={`flex-1 py-3 px-4 text-xs md:text-sm font-bold rounded-xl transition flex items-center justify-center gap-2 ${
              activeTab === 'summaries'
                ? 'bg-blue-600 text-white shadow-md'
                : 'bg-transparent text-slate-600 hover:bg-slate-100'
            }`}
          >
            <span>📝</span>
            <span>{isFa ? 'خلاصه فصل‌های کتب' : 'Chapter Summaries'}</span>
          </button>
        </div>

        {/* دکمه ۱: اطلاعات کتب تدریس شده */}
        {activeTab === 'taught-books' && (
          <section className="bg-white rounded-3xl p-6 md:p-8 border border-gray-200 shadow-md">
            <h2 className="text-xl font-black text-slate-900 mb-4 pb-3 border-b border-gray-100 flex items-center gap-2">
              <span>📘</span>
              <span>{isFa ? 'کتب تدریس شده در نظام‌های بین‌المللی' : 'Taught Curriculum Books'}</span>
            </h2>
            
            <p className="text-slate-700 leading-relaxed text-sm md:text-base mb-6">
              {isFa 
                ? 'تدریس دقیق کتاب‌های ریاضی مدارس آمریکا، کانادا، انگلستان، استرالیا، آلمان و ترکیه مطابق با سرفصل‌های رسمی هر پایه تحصیلی.'
                : 'Teaching standard mathematics books for schools in the USA, Canada, UK, Australia, Germany, and Turkey.'}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              <div className="bg-slate-50 p-4 rounded-2xl border border-gray-200 text-center">
                <span className="text-2xl mb-2 block">🇺🇸 🇨🇦</span>
                <h3 className="font-bold text-sm text-slate-800">{isFa ? 'ریاضیات سیستم آمریکا و کانادا' : 'US & Canada Math'}</h3>
                <p className="text-xs text-slate-500 mt-1">Grade 7 to Grade 12 (AP & IB Math)</p>
              </div>

              <div className="bg-slate-50 p-4 rounded-2xl border border-gray-200 text-center">
                <span className="text-2xl mb-2 block">🇬🇧</span>
                <h3 className="font-bold text-sm text-slate-800">{isFa ? 'ریاضیات سیستم انگلستان' : 'UK Math System'}</h3>
                <p className="text-xs text-slate-500 mt-1">KS3, GCSE & A-Level Mathematics</p>
              </div>

              <div className="bg-slate-50 p-4 rounded-2xl border border-gray-200 text-center">
                <span className="text-2xl mb-2 block">🇩🇪 🇦🇺 🇹🇷</span>
                <h3 className="font-bold text-sm text-slate-800">{isFa ? 'آلمان، استرالیا و ترکیه' : 'Germany, Australia & Turkey'}</h3>
                <p className="text-xs text-slate-500 mt-1">Gymnasium, HSC & YÖS Mathematics</p>
              </div>
            </div>
          </section>
        )}

        {/* دکمه ۲: خلاصه فصل‌های کتب همراه با تمام عکس‌ها */}
        {activeTab === 'summaries' && (
          <section className="space-y-6">
            {/* انتخاب پایه */}
            <div className="bg-white rounded-3xl p-6 border border-gray-200 shadow-sm">
              <h3 className="text-xs md:text-sm font-bold text-slate-700 mb-4 text-center">
                {isFa ? 'پایه تحصیلی مورد نظر را انتخاب کنید:' : 'Select Grade:'}
              </h3>
              <div className="flex items-center justify-center gap-2 flex-wrap">
                {grades.map((grade) => (
                  <button
                    key={grade.id}
                    type="button"
                    onClick={() => setSelectedGrade(grade.id)}
                    className={`px-3.5 py-2 text-xs font-bold rounded-xl border transition ${
                      selectedGrade === grade.id
                        ? 'bg-blue-600 text-white border-blue-700 shadow-sm'
                        : 'bg-slate-50 hover:bg-blue-50 text-slate-700 border-gray-300'
                    }`}
                  >
                    📖 {isFa ? grade.fa : grade.en}
                  </button>
                ))}
              </div>
            </div>

            {/* گالری تصاویر خلاصه فصل‌ها */}
            <div className="bg-white rounded-3xl p-6 md:p-8 border border-gray-200 shadow-md">
              <h3 className="text-lg md:text-xl font-black text-slate-900 mb-6 pb-3 border-b border-gray-100">
                {isFa 
                  ? `خلاصه فصل‌های ${grades.find(g => g.id === selectedGrade)?.fa}`
                  : `Summaries for ${grades.find(g => g.id === selectedGrade)?.en}`}
              </h3>

              {selectedGrade === 'g7' ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                  {grade7Summaries.map((imgPath, idx) => (
                    <div key={idx} className="bg-slate-50 p-3 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition">
                      <div className="w-full rounded-xl overflow-hidden bg-white border border-gray-200">
                        <img 
                          src={imgPath} 
                          alt={`خلاصه فصل پایه هفتم ${idx + 1}`}
                          className="w-full h-auto object-contain rounded-xl block"
                          loading="lazy"
                        />
                      </div>
                      <p className="text-xs text-center font-bold text-slate-700 mt-3">
                        {isFa ? `خلاصه بخش ${idx + 1}` : `Summary Part ${idx + 1}`}
                      </p>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12 bg-slate-50 rounded-2xl border border-dashed border-gray-300">
                  <p className="text-slate-500 font-semibold text-sm md:text-base">
                    {isFa 
                      ? 'خلاصه فصل‌های این پایه به‌زودی آپلود خواهند شد.' 
                      : 'Summaries for this grade will be uploaded soon.'}
                  </p>
                </div>
              )}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}
