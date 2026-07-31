'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function BooksPage() {
  const [lang, setLang] = useState('fa');
  const [activeTab, setActiveTab] = useState('taught-books'); // 'taught-books' یا 'summaries'
  const [selectedGrade, setSelectedGrade] = useState('g7');
  const [selectedImage, setSelectedImage] = useState(null); // برای مدال بزرگ‌نمایی عکس

  const isFa = lang === 'fa';

  const grades = [
    { id: 'g7', fa: 'پایه هفتم (Grade 7)', en: 'Grade 7' },
    { id: 'g8', fa: 'پایه هشتم (Grade 8)', en: 'Grade 8' },
    { id: 'g9', fa: 'پایه نهم (Grade 9)', en: 'Grade 9' },
    { id: 'g10', fa: 'پایه دهم (Grade 10)', en: 'Grade 10' },
    { id: 'g11', fa: 'پایه یازدهم (Grade 11)', en: 'Grade 11' },
    { id: 'g12', fa: 'پایه دوازدهم (Grade 12)', en: 'Grade 12' },
  ];

  // لیست تصاویر خلاصه فصل پایه هفتم (موجود در پوشه public)
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

  // لیست کامل کتب تدریس شده تفکیک‌شده بر اساس کشور، مقطع و همراه با لینک تلگرام
  const taughtBooksData = [
    {
      country: '🇺🇸 آمریکا (USA)',
      grades: 'پایه هفتم تا دوازدهم (Grade 7 to 12 - AP & IB Math)',
      description: 'کتاب‌های استاندارد ریاضیات آمریکا از جمله Pre-Algebra, Algebra I & II, Geometry, Pre-Calculus و AP Calculus',
      telegramLink: 'https://t.me/International_Maths/379',
      books: [
        { title: 'Grade 7 Math (Middle School)', link: 'https://t.me/International_Maths/379' },
        { title: 'Grade 8 Math & Pre-Algebra', link: 'https://t.me/International_Maths/379' },
        { title: 'Algebra 1 & High School Geometry', link: 'https://t.me/International_Maths/379' },
        { title: 'Algebra 2 & Pre-Calculus', link: 'https://t.me/International_Maths/379' },
        { title: 'AP Calculus AB / BC & IB Math HL/SL', link: 'https://t.me/International_Maths/379' },
      ]
    },
    {
      country: '🇨🇦 کانادا (Canada)',
      grades: 'پایه هفتم تا دوازدهم (Grade 7 to 12)',
      description: 'کتاب‌های رسمی ریاضی استان‌های انکاریو و بریتیش کلمبیا (Math 7 to 12, Principles of Mathematics, Calculus and Vectors)',
      telegramLink: 'https://t.me/International_Maths/302',
      books: [
        { title: 'Grade 7 & 8 Mathematics', link: 'https://t.me/International_Maths/302' },
        { title: 'Grade 9 & 10 Principles of Mathematics', link: 'https://t.me/International_Maths/302' },
        { title: 'Grade 11 Functions & Applications', link: 'https://t.me/International_Maths/302' },
        { title: 'Grade 12 Advanced Functions & Calculus', link: 'https://t.me/International_Maths/302' },
      ]
    },
    {
      country: '🇬🇧 انگلستان (UK)',
      grades: 'Key Stage 3, GCSE, IGCSE & A-Level',
      description: 'کتاب‌های ریاضی نظام بریتانیا شامل Edexcel, AQA و OCR برای آزمون‌های GCSE و A-Level (Pure Math, Mechanics, Statistics)',
      telegramLink: 'https://t.me/International_Maths/297',
      books: [
        { title: 'KS3 Mathematics (Years 7, 8, 9)', link: 'https://t.me/International_Maths/297' },
        { title: 'GCSE & IGCSE Mathematics (Years 10, 11)', link: 'https://t.me/International_Maths/297' },
        { title: 'AS & A-Level Pure Mathematics', link: 'https://t.me/International_Maths/297' },
        { title: 'A-Level Mechanics & Statistics', link: 'https://t.me/International_Maths/297' },
      ]
    },
    {
      country: '🇦🇺 استرالیا (Australia)',
      grades: 'Year 7 to Year 12 (HSC & VCE)',
      description: 'کتاب‌های ریاضی استرالیا شامل Standard, Advanced, Extension 1 & 2',
      telegramLink: 'https://t.me/International_Maths/299',
      books: [
        { title: 'Year 7 to 10 Mathematics Curriculum', link: 'https://t.me/International_Maths/299' },
        { title: 'Year 11 & 12 Mathematics Advanced', link: 'https://t.me/International_Maths/299' },
        { title: 'Year 11 & 12 Extension 1 & Extension 2', link: 'https://t.me/International_Maths/299' },
      ]
    },
    {
      country: '🇩🇪 آلمان (Germany)',
      grades: 'Klasse 7 bis 12 (Gymnasium - Abitur)',
      description: 'کتاب‌های ریاضی مدارس ژیمنازیوم آلمان جهت آمادگی در آزمون‌های نهایی Abitur',
      telegramLink: 'https://t.me/International_Maths/375',
      books: [
        { title: 'Mathematik Klasse 7 - 10 (Sekundarstufe I)', link: 'https://t.me/International_Maths/375' },
        { title: 'Mathematik Oberstufe & Abitur (Analysis, Analytische Geometrie, Stochastik)', link: 'https://t.me/International_Maths/375' },
      ]
    },
    {
      country: '🇹🇷 ترکیه (Turkey)',
      grades: 'Ortaokul 7-8 & Lise 9-12 (YÖS & LGS)',
      description: 'کتاب‌های ریاضی مقاطع راهنمایی و دبیرستان ترکیه و منبع آزمون‌های بین‌المللی YÖS و SAT',
      telegramLink: 'https://t.me/International_Maths/395',
      books: [
        { title: '7. ve 8. Sınıf Matematik (LGS)', link: 'https://t.me/International_Maths/395' },
        { title: '9. - 12. Sınıf Lise Matematik', link: 'https://t.me/International_Maths/395' },
        { title: 'YÖS & SAT Matematik Kaynakları', link: 'https://t.me/International_Maths/395' },
      ]
    }
  ];

  return (
    <main dir={isFa ? 'rtl' : 'ltr'} className="min-h-screen bg-slate-50 text-slate-900 font-sans pb-12 antialiased">
      {/* هدر بالای صفحه */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 px-4 py-4 shadow-sm">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-blue-700 font-bold text-xs md:text-sm hover:underline">
            <span>←</span>
            <span>{isFa ? 'بازگشت به صفحه اصلی' : 'Back to Home'}</span>
          </Link>

          <h1 className="text-base md:text-xl font-black text-slate-800">
            📚 {isFa ? 'کتاب و منابع آموزشی' : 'Books & Educational Resources'}
          </h1>

          <button 
            type="button"
            onClick={() => setLang(isFa ? 'en' : 'fa')} 
            className="text-xs font-bold px-3 py-1.5 bg-gray-100 rounded-lg border border-gray-300 hover:bg-gray-200 transition"
          >
            {isFa ? 'English' : 'فارسی'}
          </button>
        </div>
      </header>

      <div className="max-w-5xl mx-auto px-4 pt-8">
        {/* سرتیتر و دکمه‌های انتخاب بخش */}
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

        {/* ==================== ۱. بخش کتب تدریس شده (کامل همراه با لینک تلگرام و تمام مقاطع) ==================== */}
        {activeTab === 'taught-books' && (
          <div className="space-y-6">
            <div className="bg-white rounded-3xl p-6 md:p-8 border border-gray-200 shadow-md">
              <h2 className="text-xl md:text-2xl font-black text-slate-900 mb-3 flex items-center gap-2 border-b border-gray-100 pb-3">
                <span>📘</span>
                <span>{isFa ? 'کتب تدریس شده در نظام‌های بین‌المللی' : 'International Curriculum Taught Books'}</span>
              </h2>
              <p className="text-slate-600 text-xs md:text-sm leading-relaxed mb-6">
                {isFa 
                  ? 'اطلاعات کامل کتاب‌های تدریس شده از پایه هفتم تا دوازدهم به تفکیک کشورها. برای مشاهده جزئیات و دریافت فایل‌ها می‌توانید روی لینک تلگرام مربوطه کلیک کنید.'
                  : 'Complete curriculum book details from Grade 7 to Grade 12 by country with direct Telegram channel access.'}
              </p>

              <div className="space-y-6">
                {taughtBooksData.map((item, idx) => (
                  <div key={idx} className="bg-slate-50 rounded-2xl p-5 border border-gray-200 shadow-sm hover:border-blue-300 transition">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-gray-200/80 mb-4">
                      <div>
                        <h3 className="text-base md:text-lg font-black text-slate-800">{item.country}</h3>
                        <span className="text-xs font-bold text-blue-700 bg-blue-50 px-2.5 py-1 rounded-md border border-blue-200 inline-block mt-1">
                          {item.grades}
                        </span>
                      </div>
                      <a 
                        href={item.telegramLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-1.5 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-xl transition shadow-sm w-fit"
                      >
                        <span>✈️</span>
                        <span>{isFa ? 'مشاهده کتب در تلگرام' : 'View in Telegram'}</span>
                      </a>
                    </div>

                    <p className="text-xs md:text-sm text-slate-600 mb-4">{item.description}</p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {item.books.map((b, bIdx) => (
                        <a
                          key={bIdx}
                          href={b.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-between p-3 bg-white hover:bg-blue-50/50 rounded-xl border border-gray-200 text-xs font-bold text-slate-800 transition group"
                        >
                          <span className="group-hover:text-blue-700">📖 {b.title}</span>
                          <span className="text-blue-600 group-hover:translate-x-1 transition-transform">←</span>
                        </a>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ==================== ۲. بخش خلاصه فصل‌ها (همراه با نمایش کامل تصاویر) ==================== */}
        {activeTab === 'summaries' && (
          <div className="space-y-6">
            {/* انتخاب پایه تحصیلی */}
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

            {/* لیست تصاویر خلاصه فصل‌ها */}
            <div className="bg-white rounded-3xl p-6 md:p-8 border border-gray-200 shadow-md">
              <h3 className="text-lg md:text-xl font-black text-slate-900 mb-6 pb-3 border-b border-gray-100 flex items-center justify-between">
                <span>
                  {isFa 
                    ? `خلاصه فصل‌های ${grades.find(g => g.id === selectedGrade)?.fa}`
                    : `Summaries for ${grades.find(g => g.id === selectedGrade)?.en}`}
                </span>
                <span className="text-xs font-normal text-slate-500">
                  {isFa ? 'برای بزرگ‌نمایی روی عکس کلیک کنید' : 'Click image to enlarge'}
                </span>
              </h3>

              {selectedGrade === 'g7' ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                  {grade7Summaries.map((imgPath, idx) => (
                    <div 
                      key={idx} 
                      onClick={() => setSelectedImage(imgPath)}
                      className="bg-slate-50 p-3 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition cursor-pointer group"
                    >
                      <div className="w-full min-h-[220px] rounded-xl overflow-hidden bg-white border border-gray-200 flex items-center justify-center p-1">
                        <img 
                          src={imgPath} 
                          alt={`خلاصه فصل پایه هفتم ${idx + 1}`}
                          className="w-full h-auto max-h-[350px] object-contain rounded-lg group-hover:scale-102 transition duration-200"
                          loading="lazy"
                          onError={(e) => {
                            // جایگزین زاپاس در صورت نیافتن فایل
                            e.currentTarget.onerror = null;
                            e.currentTarget.src = 'https://via.placeholder.com/400x550?text=Summary+Page+' + (idx + 1);
                          }}
                        />
                      </div>
                      <div className="flex items-center justify-between mt-3 px-1">
                        <span className="text-xs font-bold text-slate-800">
                          {isFa ? `خلاصه بخش ${idx + 1}` : `Summary Part ${idx + 1}`}
                        </span>
                        <span className="text-[10px] bg-blue-100 text-blue-800 font-bold px-2 py-0.5 rounded-md">
                          🔍 {isFa ? 'مشاهده' : 'View'}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-16 bg-slate-50 rounded-2xl border border-dashed border-gray-300">
                  <span className="text-3xl mb-2 block">📌</span>
                  <p className="text-slate-600 font-bold text-sm md:text-base">
                    {isFa 
                      ? 'خلاصه فصل‌های این پایه به‌زودی قرار خواهند گرفت.' 
                      : 'Summaries for this grade will be uploaded soon.'}
                  </p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      {/* مدال برای بزرگ‌نمایی عکس با کلیک */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl w-full max-h-[90vh] flex flex-col items-center justify-center">
            <button 
              type="button"
              onClick={() => setSelectedImage(null)}
              className="absolute -top-10 right-0 text-white font-bold text-sm bg-gray-800/80 px-3 py-1.5 rounded-lg border border-gray-600"
            >
              ✕ {isFa ? 'بستن' : 'Close'}
            </button>
            <img 
              src={selectedImage} 
              alt="بزرگنمایی خلاصه فصل" 
              className="max-w-full max-h-[85vh] object-contain rounded-2xl shadow-2xl bg-white"
            />
          </div>
        </div>
      )}
    </main>
  );
}
