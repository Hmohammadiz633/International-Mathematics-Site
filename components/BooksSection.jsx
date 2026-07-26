'use client';
import { useState } from 'react';

const CATEGORIES = [
  { id: 'cambridge', 'use client';
import { useState } from 'react';

// 🔗 لینک‌های تلگرام برای هر پایه
const TELEGRAM_LINKS = {
  g7: "https://t.me/International_Maths/1400",
  g8: "https://t.me/International_Maths/1401",
  g9: "https://t.me/International_Maths/1402",
  g10: "https://t.me/International_Maths/1403",
  g11: "https://t.me/International_Maths/1404",
  g12: "https://t.me/International_Maths/1405"
};

const CATEGORIES = [
  { id: 'cambridge', titleFa: 'کمبریج' },
  { id: 'australia', titleFa: 'استرالیا' },
  { id: 'canada', titleFa: 'کانادا' },
  { id: 'uk', titleFa: 'انگلستان' },
  { id: 'germany', titleFa: 'آلمان' },
  { id: 'california', titleFa: 'کالیفرنیا' },
  { id: 'turkey', titleFa: 'ترکیه' },
  { id: 'university', titleFa: 'کتاب‌های دانشگاهی' }
];

const SCHOOL_GRADES = [
  { id: 'g7', titleFa: 'سال هفتم' },
  { id: 'g8', titleFa: 'سال هشتم' },
  { id: 'g9', titleFa: 'سال نهم' },
  { id: 'g10', titleFa: 'سال دهم' },
  { id: 'g11', titleFa: 'سال یازدهم' },
  { id: 'g12', titleFa: 'سال دوازدهم' }
];

export default function BooksSection() {
  const [selectedCategory, setSelectedCategory] = useState('cambridge');
  const [selectedGrade, setSelectedGrade] = useState('g7');

  return (
    <section id="books" className="py-12 px-4 max-w-6xl mx-auto">
      <div className="text-center mb-10">
        <h3 className="text-2xl font-bold mb-3 text-indigo-950 flex items-center justify-center gap-2">
          <span>📚</span> کتاب‌های تدریس‌شده
        </h3>
        <p className="text-gray-500 text-sm">جهت مشاهده کتاب‌ها، ابتدا سیستم آموزشی/کشور یا بخش دانشگاهی را انتخاب کنید:</p>
      </div>

      {/* دکمه‌های انتخاب کشور / سیستم */}
      <div className="flex flex-wrap gap-3 justify-center mb-8">
        {CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.id)}
            className={`px-5 py-3 rounded-xl font-medium transition-all shadow-sm flex items-center gap-2 ${
              selectedCategory === cat.id
                ? 'bg-indigo-900 text-white shadow-md'
                : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50'
            }`}
          >
            <span>📖</span>
            <span>{cat.titleFa}</span>
          </button>
        ))}
      </div>

      {/* بخش کمبریج */}
      {selectedCategory === 'cambridge' && (
        <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-gray-200 max-w-4xl mx-auto">
          <h4 className="text-xl font-semibold mb-6 text-center text-indigo-900">🏛️ پایه‌های تحصیلی مربوط به کمبریج</h4>
          
          {/* دکمه‌های انتخاب پایه */}
          <div className="flex flex-wrap gap-2 justify-center mb-8">
            {SCHOOL_GRADES.map((grade) => (
              <button
                key={grade.id}
                onClick={() => setSelectedGrade(grade.id)}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                  selectedGrade === grade.id
                    ? 'bg-blue-600 text-white shadow'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {grade.titleFa}
              </button>
            ))}
          </div>

          {/* کارت تصویر و دکمه جدید تلگرام */}
          {SCHOOL_GRADES.filter(g => g.id === selectedGrade).map((grade) => {
            const currentTelegramUrl = TELEGRAM_LINKS[grade.id] || "https://t.me/International_Maths";

            return (
              <div key={grade.id} className="flex flex-col items-center text-center">
                <div className="w-64 h-80 bg-gray-100 rounded-2xl overflow-hidden shadow-md border border-gray-200 mb-4 relative">
                  <img 
                    src={`/cambridge-${grade.id}.jpg`} 
                    alt={grade.titleFa}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      if (e.target.src.endsWith('.jpg')) {
                        e.target.src = `/cambridge-${grade.id}.JPG`;
                      } else {
                        e.target.src = '/profile.jpg';
                      }
                    }}
                  />
                </div>
                <h5 className="text-xl font-bold text-indigo-950 mb-1">{grade.titleFa}</h5>
                <p className="text-sm text-gray-500 mb-6">نسخه کامل همراه با حل تمرینات</p>

                {/* دکمه مستقیم تلگرام */}
                <a
                  href={currentTelegramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-sky-500 hover:bg-sky-600 text-white font-medium rounded-xl transition-all shadow-md text-sm cursor-pointer"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm5.56 8.16l-2.02 9.52c-.15.68-.55.84-1.12.52l-3.1-2.28-1.5 1.44c-.17.17-.31.31-.63.31l.22-3.17 5.77-5.21c.25-.22-.05-.34-.39-.12l-7.13 4.49-3.08-.96c-.67-.21-.68-.67.14-.99l12.03-4.64c.56-.2 1.05.14.83 1.09z" />
                  </svg>
                  <span>دانلود فایل PDF از گروه تلگرامی آموزش بین المللی ریاضیات</span>
                </a>
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
}title: 'کمبریج (Cambridge)' },
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
