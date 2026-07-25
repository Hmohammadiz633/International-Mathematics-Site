'use client';
import { useState } from 'react';

const CATEGORIES = [
  { id: 'cambridge', title: 'کمبریج (Cambridge)' },
  { id: 'australia', title: 'استرالیا (Australia)' },
  { id: 'canada', title: 'کانادا (Canada)' },
  { id: 'uk', title: 'انگلستان (UK)' },
  { id: 'germany', title: 'آلمان (Germany)' },
  { id: 'california', title: 'کالیفرنیا (California)' },
  { id: 'turkey', title: 'ترکیه (Turkey)' },
  { id: 'university', title: 'کتاب‌های دانشگاهی' },
];

const GRADES = [
  { id: 'g7', title: 'سال هفتم (Grade 7)' },
  { id: 'g8', title: 'سال هشتم (Grade 8)' },
  { id: 'g9', title: 'سال نهم (Grade 9)' },
  { id: 'g10', title: 'سال دهم (Grade 10)' },
  { id: 'g11', title: 'سال یازدهم (Grade 11)' },
  { id: 'g12', title: 'سال دوازدهم (Grade 12)' },
];

export default function BooksSection({ lang }) {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedGrade, setSelectedGrade] = useState(null);

  // تابع باز کردن/بستن دسته‌ها
  const handleCategoryClick = (catId) => {
    if (selectedCategory === catId) {
      setSelectedCategory(null);
      setSelectedGrade(null);
    } else {
      setSelectedCategory(catId);
      setSelectedGrade(null);
    }
  };

  // تابع باز کردن/بستن پایه‌ها
  const handleGradeClick = (gradeId) => {
    if (selectedGrade === gradeId) {
      setSelectedGrade(null);
    } else {
      setSelectedGrade(gradeId);
    }
  };

  return (
    <section id="books" className="max-w-5xl mx-auto my-16 px-4 text-center">
      {/* عنوان اصلی و آیکون جدید */}
      <h2 className="text-2xl md:text-3xl font-bold text-[#1e295d] mb-2 flex items-center justify-center gap-2">
        <span className="text-3xl">📚</span>
        {lang === 'fa' ? 'کتاب‌های تدریس‌شده' : 'Taught Books'}
      </h2>
      <p className="text-slate-500 mb-8 text-sm md:text-base">
        {lang === 'fa'
          ? 'جهت مشاهده کتاب‌ها و جزوات، کشور/سیستم آموزشی و سپس پایه تحصیلی مورد نظر را انتخاب کنید:'
          : 'Select country/system and grade to view textbooks:'}
      </p>

      {/* ۱. فهرست کشوهای کشورها / سیستم‌های آموزشی */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
        {CATEGORIES.map((cat) => {
          const isActive = selectedCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => handleCategoryClick(cat.id)}
              className={`p-3.5 rounded-2xl text-sm font-bold border transition-all duration-200 flex items-center justify-center gap-2 shadow-sm ${
                isActive
                  ? 'bg-[#1e295d] text-white border-[#1e295d] scale-105 shadow-md'
                  : 'bg-white text-slate-700 border-slate-200 hover:border-blue-300 hover:bg-slate-50'
              }`}
            >
              <span>{isActive ? '📖' : '📘'}</span>
              <span>{cat.title}</span>
            </button>
          );
        })}
      </div>

      {/* ۲. منوی پایه‌های تحصیلی (وقتی یک کشور/دسته انتخاب شد باز می‌شود) */}
      {selectedCategory && (
        <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm mb-6 animate-fadeIn">
          <h3 className="text-base font-bold text-slate-700 mb-4 flex items-center justify-center gap-1">
            <span>🎓</span>
            <span>
              {lang === 'fa'
                ? `پایه‌های تحصیلی مربوط به ${CATEGORIES.find((c) => c.id === selectedCategory)?.title}`
                : 'Select Grade Level'}
            </span>
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2.5">
            {GRADES.map((grade) => {
              const isGradeActive = selectedGrade === grade.id;
              return (
                <button
                  key={grade.id}
                  onClick={() => handleGradeClick(grade.id)}
                  className={`py-2.5 px-3 rounded-xl text-xs font-bold border transition-all ${
                    isGradeActive
                      ? 'bg-blue-600 text-white border-blue-600 shadow-sm'
                      : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-blue-50'
                  }`}
                >
                  {grade.title}
                </button>
              );
            })}
          </div>

          {/* ۳. نمایش عکس جلد کتاب و لینک به PDF (وقتی پایه تحصیلی انتخاب شد) */}
          {selectedGrade && (
            <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col items-center animate-fadeIn">
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 max-w-sm w-full shadow-inner flex flex-col items-center">
                {/* جلد نمادین کتاب */}
                <div className="w-40 h-52 bg-gradient-to-br from-blue-700 to-[#1e295d] rounded-xl shadow-md flex flex-col items-center justify-center text-white p-4 mb-4 text-center relative overflow-hidden border-2 border-white/20">
                  <span className="text-4xl mb-2">📕</span>
                  <span className="text-xs font-bold leading-tight">
                    {CATEGORIES.find((c) => c.id === selectedCategory)?.title}
                  </span>
                  <span className="text-[10px] opacity-80 mt-1">
                    {GRADES.find((g) => g.id === selectedGrade)?.title}
                  </span>
                  <div className="absolute bottom-2 text-[9px] bg-white/20 px-2 py-0.5 rounded-full">
                    Mathematics
                  </div>
                </div>

                <h4 className="text-sm font-bold text-slate-800 mb-1">
                  کتاب جامع ریاضیات - {GRADES.find((g) => g.id === selectedGrade)?.title}
                </h4>
                <p className="text-xs text-slate-500 mb-4">
                  شامل درسنامه کامل، مسائل حل‌شده و نمونه سوالات
                </p>

                {/* دکمه لینک به پی‌دی‌اف */}
                <a
                  href="https://t.me/International_Maths"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2.5 px-4 rounded-xl text-xs flex items-center justify-center gap-2 transition shadow-sm"
                >
                  <span>📥</span>
                  <span>
                    {lang === 'fa' ? 'دانلود فایل PDF کتاب' : 'Download Book PDF'}
                  </span>
                </a>
              </div>
            </div>
          )}
        </div>
      )}
    </section>
  );
}
