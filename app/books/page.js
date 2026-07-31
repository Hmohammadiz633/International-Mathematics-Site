'use client';

import { useState } from 'react';
import Link from 'next/link';
import BooksSection from '@/components/BooksSection';

export default function BooksPage() {
  const [lang, setLang] = useState('fa');
  const [activeTab, setActiveTab] = useState('taught');
  const [selectedGrade, setSelectedGrade] = useState(null);

  const isFa = lang === 'fa';

  const grades = [
    { id: 7, fa: 'پایه هفتم', en: 'Grade 7' },
    { id: 8, fa: 'پایه هشتم', en: 'Grade 8' },
    { id: 9, fa: 'پایه نهم', en: 'Grade 9' },
    { id: 10, fa: 'پایه دهم', en: 'Grade 10' },
    { id: 11, fa: 'پایه یازدهم', en: 'Grade 11' },
    { id: 12, fa: 'پایه دوازدهم', en: 'Grade 12' },
  ];

  return (
    <main dir={isFa ? 'rtl' : 'ltr'} className="min-h-screen bg-white text-black font-sans pb-12">
      {/* هدر صفحه کتاب‌ها */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200 px-4 py-3 shadow-sm">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          
          {/* دکمه بازگشت به صفحه اصلی */}
          <Link 
            href="/" 
            className="flex items-center gap-2 px-3 py-1.5 bg-gray-100 hover:bg-gray-200 text-black text-xs font-bold rounded-lg border border-gray-300 transition"
          >
            <span>{isFa ? '← بازگشت به صفحه اصلی' : '← Back to Home'}</span>
          </Link>

          {/* تغییر زبان */}
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
      </header>

      {/* عنوان اصلی صفحه */}
      <section className="max-w-4xl mx-auto text-center px-4 pt-8 pb-4">
        <h1 className="text-3xl md:text-4xl font-extrabold text-black mb-2">
          📚 {isFa ? 'کتب و منابع آموزشی' : 'Educational Books & Resources'}
        </h1>
        <p className="text-gray-600 text-sm md:text-base">
          {isFa ? 'مجموعه کامل کتاب‌های آموزشی ریاضیات نظام‌های بین‌المللی' : 'Comprehensive collection of international math textbooks'}
        </p>
      </section>

      {/* تب‌های دوتایی اصلی */}
      <div className="max-w-4xl mx-auto px-4 mt-4">
        <div className="flex justify-center gap-2 border-b border-gray-200 pb-2">
          <button
            type="button"
            onClick={() => setActiveTab('taught')}
            className={`px-4 py-2 text-xs md:text-sm font-bold rounded-lg transition ${
              activeTab === 'taught'
                ? 'bg-blue-600 text-white shadow-md'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            📖 {isFa ? 'کتاب‌های تدریس شده کشورهای مختلف' : 'Books Taught in Various Countries'}
          </button>
          
          <button
            type="button"
            onClick={() => setActiveTab('summaries')}
            className={`px-4 py-2 text-xs md:text-sm font-bold rounded-lg transition ${
              activeTab === 'summaries'
                ? 'bg-blue-600 text-white shadow-md'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            📝 {isFa ? 'خلاصه فصل‌های کتب' : 'Book Chapter Summaries'}
          </button>
        </div>
      </div>

      {/* محتوای تب فعال */}
      <div className="max-w-6xl mx-auto px-4 mt-6">
        {/* ۱. بخش کتاب‌های تدریس شده (کامپوننت قبلی) */}
        {activeTab === 'taught' && (
          <BooksSection lang={lang} />
        )}

        {/* ۲. بخش خلاصه فصل‌های کتب تفکیک شده با پایه‌های تحصیلی ۷ تا ۱۲ */}
        {activeTab === 'summaries' && (
          <div className="space-y-6">
            {/* زیربخش انتخاب پایه تحصیلی */}
            <div className="flex flex-wrap justify-center gap-2 md:gap-3 bg-gray-50 p-4 rounded-2xl border border-gray-200">
              {grades.map((grade) => (
                <button
                  key={grade.id}
                  type="button"
                  onClick={() => setSelectedGrade(grade.id)}
                  className={`px-4 py-2 text-xs md:text-sm font-bold rounded-xl border transition ${
                    selectedGrade === grade.id
                      ? 'bg-slate-900 text-white border-slate-900 shadow-sm'
                      : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100'
                  }`}
                >
                  {isFa ? grade.fa : grade.en}
                </button>
              ))}
            </div>

            {/* نمایش خلاصه فصل‌های پایه انتخابی */}
            <div className="text-center py-12 bg-gray-50 rounded-2xl border border-dashed border-gray-300">
              {selectedGrade ? (
                <p className="text-gray-700 text-sm md:text-base font-medium">
                  {isFa 
                    ? `خلاصه فصل‌های مربوط به ${grades.find(g => g.id === selectedGrade)?.fa} به‌زودی قرار خواهد گرفت.` 
                    : `Summaries for ${grades.find(g => g.id === selectedGrade)?.en} will be added soon.`}
                </p>
              ) : (
                <p className="text-gray-500 text-sm md:text-base font-medium">
                  {isFa 
                    ? 'لطفاً پایه تحصیلی مورد نظر خود را از کادر بالا انتخاب کنید.' 
                    : 'Please select a grade from above.'}
                </p>
              )}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
