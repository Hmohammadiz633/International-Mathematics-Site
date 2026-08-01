'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function BooksPage() {
  const [lang, setLang] = useState('fa');
  const [activeMainTab, setActiveMainTab] = useState('summaries'); // 'summaries' | 'books'
  const [selectedGrade, setSelectedGrade] = useState('grade8'); // 'grade7', 'grade8', etc.

  const isFa = lang === 'fa';

  // لیست تصاویر خلاصه پایه هفتم
  const grade7Summaries = [
    { titleFa: 'خلاصه فصل ۱', titleEn: 'Chapter 1 Summary', src: '/IMG_0881.JPG' },
    { titleFa: 'خلاصه فصل ۲', titleEn: 'Chapter 2 Summary', src: '/IMG_0882.JPG' },
  ];

  // لیست تصاویر خلاصه پایه هشتم (با پسوند صحیح .JPG)
  const grade8Summaries = [
    { titleFa: 'خلاصه فصل ۱: کسرها و اعداد گویا', titleEn: 'Ch 1: Fractions & Rational Numbers', src: '/IMG_0891.JPG' },
    { titleFa: 'خلاصه فصل ۲: اعشار و درصدها', titleEn: 'Ch 2: Decimals & Percentages', src: '/IMG_0892.JPG' },
    { titleFa: 'خلاصه فصل ۳: اندازه‌گیری و قضیه فیثاغورس', titleEn: 'Ch 3: Measurement & Pythagoras', src: '/IMG_0893.JPG' },
    { titleFa: 'خلاصه فصل ۴: عبارت‌های جبری', titleEn: 'Ch 4: Algebra', src: '/IMG_0894.JPG' },
    { titleFa: 'خلاصه فصل ۵: نسبت‌ها و نرخ‌ها', titleEn: 'Ch 5: Ratios & Rates', src: '/IMG_0895.JPG' },
    { titleFa: 'خلاصه فصل ۶: معادلات و نامعادلات', titleEn: 'Ch 6: Equations & Inequalities', src: '/IMG_0896.JPG' },
    { titleFa: 'خلاصه فصل ۷: احتمال و آمار', titleEn: 'Ch 7: Probability & Statistics', src: '/IMG_0897.JPG' },
    { titleFa: 'خلاصه فصل ۸: نمودار خط‌های مستقیم', titleEn: 'Ch 8: Straight Line Graphs', src: '/IMG_0898.JPG' },
    { titleFa: 'خلاصه فصل ۹: تبدیل‌ها و هم‌نهشتی', titleEn: 'Ch 9: Transformations', src: '/IMG_0899.JPG' },
    { titleFa: 'خلاصه فصل ۱۰: مرور و جمع‌بندی', titleEn: 'Ch 10: General Review', src: '/IMG_0900.JPG' },
    { titleFa: 'خلاصه فصل ۱۱: مرور تکمیلی', titleEn: 'Ch 11: Supplementary Review', src: '/IMG_0901.JPG' },
  ];

  const grades = [
    { id: 'grade7', fa: 'پایه هفتم', en: 'Grade 7' },
    { id: 'grade8', fa: 'پایه هشتم', en: 'Grade 8' },
    { id: 'grade9', fa: 'پایه نهم', en: 'Grade 9' },
    { id: 'grade10', fa: 'پایه دهم', en: 'Grade 10' },
    { id: 'grade11', fa: 'پایه یازدهم', en: 'Grade 11' },
    { id: 'grade12', fa: 'پایه دوازدهم', en: 'Grade 12' },
  ];

  const getActiveSummaries = () => {
    switch (selectedGrade) {
      case 'grade7':
        return grade7Summaries;
      case 'grade8':
        return grade8Summaries;
      default:
        return [];
    }
  };

  return (
    <main dir={isFa ? 'rtl' : 'ltr'} className="min-h-screen bg-slate-50 text-slate-900 font-sans pb-12 antialiased">
      {/* هدر بالای صفحه */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 px-4 py-3 shadow-sm">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <button 
              onClick={() => setLang('fa')} 
              className={`text-xs font-bold ${isFa ? 'text-blue-700 underline font-black' : 'text-gray-500'}`}
            >
              فارسی
            </button>
            <span className="text-gray-300">|</span>
            <button 
              onClick={() => setLang('en')} 
              className={`text-xs font-bold ${!isFa ? 'text-blue-700 underline font-black' : 'text-gray-500'}`}
            >
              English
            </button>
          </div>

          <Link 
            href="/" 
            className="px-3 py-1.5 bg-gray-100 hover:bg-gray-200 text-slate-800 rounded-lg text-xs md:text-sm font-bold border border-gray-300 transition flex items-center gap-1"
          >
            {isFa ? 'بازگشت به صفحه اصلی ←' : '← Back to Home'}
          </Link>
        </div>
      </header>

      <section className="max-w-5xl mx-auto px-4 pt-8">
        <p className="text-center text-slate-600 font-medium mb-6 text-sm md:text-base">
          {isFa ? 'مجموعه کامل کتاب‌های آموزشی و خلاصه فصل‌های ریاضیات' : 'Complete collection of math textbooks and chapter summaries'}
        </p>

        {/* دکمه‌های انتخاب تب اصلی */}
        <div className="flex items-center justify-center gap-3 mb-8">
          <button
            onClick={() => setActiveMainTab('summaries')}
            className={`px-4 py-2 rounded-xl font-bold text-sm md:text-base transition shadow-sm ${
              activeMainTab === 'summaries'
                ? 'bg-blue-600 text-white shadow-blue-200'
                : 'bg-white text-slate-700 border border-gray-200 hover:bg-gray-50'
            }`}
          >
            📝 {isFa ? 'خلاصه فصل‌های کتاب' : 'Chapter Summaries'}
          </button>
          <button
            onClick={() => setActiveMainTab('books')}
            className={`px-4 py-2 rounded-xl font-bold text-sm md:text-base transition shadow-sm ${
              activeMainTab === 'books'
                ? 'bg-blue-600 text-white shadow-blue-200'
                : 'bg-white text-slate-700 border border-gray-200 hover:bg-gray-50'
            }`}
          >
            📖 {isFa ? 'کتاب‌های تدریس شده کشورها' : 'Country Textbooks'}
          </button>
        </div>

        {/* محتوای خلاصه فصل‌ها */}
        {activeMainTab === 'summaries' && (
          <div className="bg-white rounded-3xl p-6 border border-gray-200 shadow-sm">
            {/* دکمه‌های پایه‌های تحصیلی */}
            <div className="flex items-center justify-center gap-2 flex-wrap mb-8 border-b border-gray-100 pb-6">
              {grades.map((grade) => (
                <button
                  key={grade.id}
                  onClick={() => setSelectedGrade(grade.id)}
                  className={`px-4 py-2 rounded-xl text-xs md:text-sm font-bold transition ${
                    selectedGrade === grade.id
                      ? 'bg-slate-900 text-white shadow-md'
                      : 'bg-gray-100 text-slate-700 hover:bg-gray-200'
                  }`}
                >
                  {isFa ? grade.fa : grade.en}
                </button>
              ))}
            </div>

            <h3 className="text-xl md:text-2xl font-black text-center text-slate-800 mb-6 flex items-center justify-center gap-2">
              📌 {isFa ? `خلاصه فصل‌های ریاضی ${grades.find(g => g.id === selectedGrade)?.fa}` : `${grades.find(g => g.id === selectedGrade)?.en} Math Summaries`}
            </h3>

            {/* گرید کارت‌های عکس خلاصه فصل‌ها */}
            {getActiveSummaries().length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {getActiveSummaries().map((item, idx) => (
                  <div key={idx} className="border border-gray-200 rounded-2xl p-4 bg-slate-50 shadow-sm hover:shadow-md transition">
                    <h4 className="font-bold text-slate-800 text-center mb-3 text-sm md:text-base">
                      {isFa ? item.titleFa : item.titleEn}
                    </h4>
                    <div className="w-full aspect-[4/3] bg-white rounded-xl overflow-hidden border border-gray-200">
                      <img 
                        src={item.src} 
                        alt={isFa ? item.titleFa : item.titleEn} 
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-center text-slate-400 py-12 text-sm">
                {isFa ? 'محتوایی برای این پایه هنوز بارگذاری نشده است.' : 'No content uploaded for this grade yet.'}
              </p>
            )}
          </div>
        )}

        {/* محتوای کتاب‌های تدریس شده */}
        {activeMainTab === 'books' && (
          <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-sm text-center">
            <p className="text-slate-600">
              {isFa ? 'کتاب‌های درسی بین‌المللی به‌زودی در این بخش قرار خواهند گرفت.' : 'International textbooks will be available soon.'}
            </p>
          </div>
        )}
      </section>
    </main>
  );
}
