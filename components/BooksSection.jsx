'use client';

import { useState } from 'react';

const TELEGRAM_LINKS = {
  g7: "https://t.me/International_Maths/1400",
  g8: "https://t.me/International_Maths/1401",
  g9: "https://t.me/International_Maths/1402",
  g10: "https://t.me/International_Maths/1403",
  g11: "https://t.me/International_Maths/1404",
  g12: "https://t.me/International_Maths/1405",
};

// ۱۱ کتاب دانشگاهی متصل به تلگرام
const UNIVERSITY_BOOKS = [
  { id: 'thomas', titleFa: 'ریاضی عمومی توماس', titleEn: "Thomas' Calculus", subFa: 'جلد ۱ و ۲', icon: '📘', link: 'https://t.me/International_Maths' },
  { id: 'stewart', titleFa: 'ریاضی عمومی استوارت', titleEn: "Stewart Calculus", subFa: 'مرجع کامل', icon: '📙', link: 'https://t.me/International_Maths' },
  { id: 'stewart_sol', titleFa: 'حل تمرین استوارت', titleEn: 'Stewart Solutions', subFa: 'پاسخ‌نامه تشریحی', icon: '📗', link: 'https://t.me/International_Maths' },
  { id: 'adams', titleFa: 'ریاضی عمومی آدامز', titleEn: 'Adams Calculus', subFa: 'مرجع آدامز', icon: '📕', link: 'https://t.me/International_Maths' },
  { id: 'adams_sol', titleFa: 'حل تمرین آدامز', titleEn: 'Adams Solutions', subFa: 'حل تشریحی مسائل', icon: '📓', link: 'https://t.me/International_Maths' },
  { id: 'math2', titleFa: 'ریاضی عمومی ۲', titleEn: 'General Math 2', subFa: 'چند متغیره و برداری', icon: '📚', link: 'https://t.me/International_Maths' },
  { id: 'numerical', titleFa: 'محاسبات عددی', titleEn: 'Numerical Analysis', subFa: 'روش‌ها و الگوریتم‌ها', icon: '💻', link: 'https://t.me/International_Maths' },
  { id: 'complex', titleFa: 'اعداد مختلط', titleEn: 'Complex Variables', subFa: 'آنالیز مختلط', icon: '🌀', link: 'https://t.me/International_Maths' },
  { id: 'linear_alg', titleFa: 'جبر خطی', titleEn: 'Linear Algebra', subFa: 'ماتریس و فضاهای برداری', icon: '📐', link: 'https://t.me/International_Maths' },
  { id: 'applied_math', titleFa: 'ریاضی کاربردی', titleEn: 'Applied Math', subFa: 'ویژه مهندسی', icon: '⚙️', link: 'https://t.me/International_Maths' },
  { id: 'stat_prob', titleFa: 'آمار و احتمالات مهندسی', titleEn: 'Engineering Statistics', subFa: 'تحلیل داده و احتمال', icon: '📊', link: 'https://t.me/International_Maths' },
];

const categories = [
  { id: 'cambridge', titleFa: 'کمبریج', titleEn: 'Cambridge', subtitleFa: 'سیستم آموزشی کمبریج', icon: '🎓', flag: '🇬🇧' },
  { id: 'australia', titleFa: 'استرالیا', titleEn: 'Australia', subtitleFa: 'ریاضیات استرالیا', icon: '🦘', flag: '🇦🇺' },
  { id: 'canada', titleFa: 'کانادا', titleEn: 'Canada', subtitleFa: 'ریاضیات کانادا', icon: '🍁', flag: '🇨🇦' },
  { id: 'uk', titleFa: 'انگلستان', titleEn: 'UK', subtitleFa: 'GCSE / A-Level', icon: '👑', flag: '🇬🇧' },
  { id: 'germany', titleFa: 'آلمان', titleEn: 'Germany', subtitleFa: 'Abitur / Gymnasium', icon: '🦅', flag: '🇩🇪' },
  { id: 'california', titleFa: 'کالیفرنیا', titleEn: 'California', subtitleFa: 'ریاضیات آمریکا', icon: '🐻', flag: '🇺🇸' },
  { id: 'turkey', titleFa: 'ترکیه', titleEn: 'Turkey', subtitleFa: 'YÖS / MEB', icon: '🌙', flag: '🇹🇷' },
  { id: 'university', titleFa: 'کتاب‌های دانشگاهی', titleEn: 'University Textbooks', subtitleFa: 'مرجع کتب دانشگاهی', icon: '🏛️', flag: '🎓' },
];

const schoolGrades = [
  { id: 'g7', titleFa: 'سال هفتم', titleEn: 'Grade 7', subFa: 'Year 7', icon: '📘' },
  { id: 'g8', titleFa: 'سال هشتم', titleEn: 'Grade 8', subFa: 'Year 8', icon: '📘' },
  { id: 'g9', titleFa: 'سال نهم', titleEn: 'Grade 9', subFa: 'Year 9', icon: '📘' },
  { id: 'g10', titleFa: 'سال دهم', titleEn: 'Grade 10', subFa: 'Year 10 / IGCSE', icon: '📚' },
  { id: 'g11', titleFa: 'سال یازدهم', titleEn: 'Grade 11', subFa: 'Year 11 / AS Level', icon: '📙' },
  { id: 'g12', titleFa: 'سال دوازدهم', titleEn: 'Grade 12', subFa: 'Year 12 / A Level', icon: '📗' },
];

export default function BooksSection({ lang = 'fa' }) {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const isFa = lang === 'fa';
  const activeCategory = categories.find((c) => c.id === selectedCategory);

  return (
    <section className="py-8">
      <div className="text-center max-w-3xl mx-auto mb-10">
        <h2 className="text-3xl md:text-4xl font-black mb-4 text-blue-950">
          📚 {isFa ? 'کتاب‌های تدریس‌شده' : 'Taught Textbooks'}
        </h2>
        <p className="text-slate-700 text-sm md:text-base font-bold leading-relaxed">
          {isFa
            ? 'جهت مشاهده کتاب‌ها، ابتدا سیستم آموزشی/کشور یا بخش دانشگاهی را انتخاب کنید:'
            : 'Select an educational system, country, or university section to view books:'}
        </p>
      </div>

      {/* کارت‌های سه‌بعدی با آیکون‌های کوچک‌تر */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto mb-10">
        {categories.map((cat) => (
          <button
            key={cat.id}
            type="button"
            onClick={() => setSelectedCategory(cat.id)}
            className={`p-3.5 rounded-2xl border-2 text-right transition-all duration-300 relative transform hover:-translate-y-1 ${
              selectedCategory === cat.id
                ? 'bg-blue-600 text-white border-blue-700 shadow-lg shadow-blue-600/30'
                : 'bg-white text-slate-800 border-blue-200 hover:border-blue-500 hover:bg-blue-50/70 shadow-sm'
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="w-8 h-8 flex items-center justify-center text-sm rounded-lg bg-gradient-to-b from-white to-blue-100 border border-blue-200 shadow-sm">
                {cat.icon}
              </span>
              <span className="text-lg filter drop-shadow-sm">{cat.flag}</span>
            </div>
            <h3 className={`font-black text-sm ${selectedCategory === cat.id ? 'text-white' : 'text-blue-950'}`}>
              {isFa ? cat.titleFa : cat.titleEn}
            </h3>
            <p className={`text-[11px] mt-0.5 font-bold ${selectedCategory === cat.id ? 'text-blue-100' : 'text-slate-500'}`}>
              {isFa ? cat.subtitleFa : cat.subtitleEn}
            </p>
          </button>
        ))}
      </div>

      {/* نمایش کتاب‌ها */}
      {selectedCategory && (
        <div className="p-6 md:p-8 bg-white rounded-3xl border-2 border-blue-200 shadow-xl shadow-blue-600/10 max-w-6xl mx-auto">
          <div className="flex items-center justify-between border-b-2 border-blue-100 pb-4 mb-6">
            <div className="flex items-center gap-3">
              <span className="w-10 h-10 flex items-center justify-center text-xl rounded-xl bg-blue-100 border border-blue-300">
                {activeCategory?.icon}
              </span>
              <div>
                <h3 className="text-xl font-black text-blue-950">
                  {isFa ? activeCategory?.titleFa : activeCategory?.titleEn}
                </h3>
                <p className="text-xs font-bold text-slate-500">
                  {isFa ? activeCategory?.subtitleFa : activeCategory?.subtitleEn}
                </p>
              </div>
            </div>
            <span className="text-2xl">{activeCategory?.flag}</span>
          </div>

          {selectedCategory === 'university' ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {UNIVERSITY_BOOKS.map((book) => (
                <a
                  key={book.id}
                  href={book.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-gradient-to-b from-blue-50/40 to-white hover:from-blue-100/60 hover:to-blue-50 border-2 border-blue-200 hover:border-blue-600 rounded-2xl transition duration-200 flex flex-col justify-between shadow-sm hover:shadow-md group"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-white border border-blue-200 flex items-center justify-center text-xl shadow-sm shrink-0 group-hover:scale-105 transition">
                      {book.icon}
                    </div>
                    <div>
                      <div className="font-black text-blue-950 text-sm group-hover:text-blue-600 transition">
                        {isFa ? book.titleFa : book.titleEn}
                      </div>
                      <div className="text-[11px] text-slate-500 font-bold mt-0.5">
                        {book.subFa}
                      </div>
                    </div>
                  </div>
                  <span className="w-full text-center py-1.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-black rounded-lg shadow-sm transition">
                    {isFa ? 'دانلود PDF از تلگرام' : 'Download PDF'}
                  </span>
                </a>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
              {schoolGrades.map((grade) => (
                <a
                  key={grade.id}
                  href={TELEGRAM_LINKS[grade.id]}
                  target="_blank"
                  rel="noopener noreferrer"
