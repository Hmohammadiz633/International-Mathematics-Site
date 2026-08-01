'use client';

import { useState } from 'react';
import Link from 'next/link';
import BooksSection from '@/components/BooksSection';

export default function BooksPage() {
  const [lang, setLang] = useState('fa');
  const [activeTab, setActiveTab] = useState('summaries'); // پیش‌فرض روی خلاصه فصل‌ها
  const [selectedGrade, setSelectedGrade] = useState(7); // پیش‌فرض پایه هفتم

  const isFa = lang === 'fa';

  const grades = [
    { id: 7, fa: 'پایه هفتم', en: 'Grade 7' },
    { id: 8, fa: 'پایه هشتم', en: 'Grade 8' },
    { id: 9, fa: 'پایه نهم', en: 'Grade 9' },
    { id: 10, fa: 'پایه دهم', en: 'Grade 10' },
    { id: 11, fa: 'پایه یازدهم', en: 'Grade 11' },
    { id: 12, fa: 'پایه دوازدهم', en: 'Grade 12' },
  ];

  // تمامی ۱۲ تصویر پایه هفتم
  const grade7Images = [
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

  // تمامی ۱۱ تصویر پایه هشتم (با پسوند صحیح .JPG مطابق مخزن گیت‌هاب)
  const grade8Images = [
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

  return (
    <main dir={isFa ? 'rtl' : 'ltr'} className="min-h-screen bg-white text-black font-sans pb-12">
      {/* هدر صفحه */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200 px-4 py-3 shadow-sm">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link 
            href="/" 
            className="flex items-center gap-2 px-3 py-1.5 bg-gray-100 hover:bg-gray-200 text-black text-xs font-bold rounded-lg border border-gray-300 transition"
          >
            <span>{isFa ? '← بازگشت به صفحه اصلی' : '← Back to Home'}</span>
          </Link>

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

      {/* عنوان اصلی */}
      <section className="max-w-4xl mx-auto text-center px-4 pt-8 pb-4">
        <h1 className="text-3xl md:text-4xl font-extrabold text-black mb-2">
          📚 {isFa ? 'کتب و منابع آموزشی' : 'Educational Books & Resources'}
        </h1>
        <p className="text-gray-600 text-sm md:text-base">
          {isFa ? 'مجموعه کامل کتاب‌های آموزشی و خلاصه فصل‌های ریاضیات' : 'Comprehensive collection of math textbooks and chapter summaries'}
        </p>
      </section>

      {/* تب‌های اصلی */}
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
            📖 {isFa ? 'کتاب‌های تدریس شده کشورها' : 'Books Taught in Countries'}
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
            📝 {isFa ? 'خلاصه فصل‌های کتاب' : 'Book Chapter Summaries'}
          </button>
        </div>
      </div>

      {/* محتوا */}
      <div className="max-w-6xl mx-auto px-4 mt-6">
        {/* ۱. کتاب‌های تدریس شده */}
        {activeTab === 'taught' && (
          <BooksSection lang={lang} />
        )}

        {/* ۲. خلاصه فصل‌های کتاب */}
        {activeTab === 'summaries' && (
          <div className="space-y-6">
            {/* انتخاب پایه */}
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

            {/* پایه هفتم */}
            {selectedGrade === 7 && (
              <div className="bg-slate-50 border border-gray-300 rounded-3xl p-4 md:p-8 shadow-sm">
                <h3 className="text-xl font-black text-slate-800 mb-6 text-center border-b border-gray-200 pb-3">
                  {isFa ? '📌 خلاصه فصل‌های ریاضی پایه هفتم' : '📌 Grade 7 Chapter Summaries'}
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
                  {grade7Images.map((img) => (
                    <div 
                      key={img.id} 
                      className="w-full bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition"
                    >
                      <img 
                        src={img.src} 
                        alt={img.title} 
                        className="w-full h-auto object-contain block hover:scale-[1.01] transition duration-300"
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* پایه هشتم */}
            {selectedGrade === 8 && (
              <div className="bg-slate-50 border border-gray-300 rounded-3xl p-4 md:p-8 shadow-sm">
                <h3 className="text-xl font-black text-slate-800 mb-6 text-center border-b border-gray-200 pb-3">
                  {isFa ? '📌 خلاصه فصل‌های ریاضی پایه هشتم' : '📌 Grade 8 Chapter Summaries'}
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
                  {grade8Images.map((img) => (
                    <div 
                      key={img.id} 
                      className="w-full bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition"
                    >
                      <img 
                        src={img.src} 
                        alt={img.title} 
                        className="w-full h-auto object-contain block hover:scale-[1.01] transition duration-300"
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* سایر پایه‌ها */}
            {selectedGrade !== 7 && selectedGrade !== 8 && (
              <div className="text-center py-12 bg-gray-50 rounded-2xl border border-dashed border-gray-300">
                <p className="text-gray-600 text-sm md:text-base font-medium">
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
