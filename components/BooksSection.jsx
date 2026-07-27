'use client';

import { useState } from 'react';

// لینک‌های اختصاصی برای هر کشور و هر پایه تحصیلی (۷ تا ۱۲)
const COUNTRY_GRADE_LINKS = {
  cambridge: {
    g7: "https://t.me/International_Maths",
    g8: "https://t.me/International_Maths",
    g9: "https://t.me/International_Maths",
    g10: "https://t.me/International_Maths",
    g11: "https://t.me/International_Maths",
    g12: "https://t.me/International_Maths",
  },
  australia: {
    g7: "https://t.me/International_Maths",
    g8: "https://t.me/International_Maths",
    g9: "https://t.me/International_Maths",
    g10: "https://t.me/International_Maths",
    g11: "https://t.me/International_Maths",
    g12: "https://t.me/International_Maths",
  },
  canada: {
    g7: "https://t.me/International_Maths",
    g8: "https://t.me/International_Maths",
    g9: "https://t.me/International_Maths",
    g10: "https://t.me/International_Maths",
    g11: "https://t.me/International_Maths",
    g12: "https://t.me/International_Maths",
  },
  uk: {
    g7: "https://t.me/International_Maths",
    g8: "https://t.me/International_Maths",
    g9: "https://t.me/International_Maths",
    g10: "https://t.me/International_Maths",
    g11: "https://t.me/International_Maths",
    g12: "https://t.me/International_Maths",
  },
  germany: {
    g7: "https://t.me/International_Maths",
    g8: "https://t.me/International_Maths",
    g9: "https://t.me/International_Maths",
    g10: "https://t.me/International_Maths",
    g11: "https://t.me/International_Maths",
    g12: "https://t.me/International_Maths",
  },
  california: {
    g7: "https://t.me/International_Maths",
    g8: "https://t.me/International_Maths",
    g9: "https://t.me/International_Maths",
    g10: "https://t.me/International_Maths",
    g11: "https://t.me/International_Maths",
    g12: "https://t.me/International_Maths",
  },
  turkey: {
    g7: "https://t.me/International_Maths",
    g8: "https://t.me/International_Maths",
    g9: "https://t.me/International_Maths",
    g10: "https://t.me/International_Maths",
    g11: "https://t.me/International_Maths",
    g12: "https://t.me/International_Maths",
  },
};

// ۱۱ کتاب دانشگاهی با لینک‌های تلگرام
const UNIVERSITY_BOOKS = [
  { id: 'thomas', titleFa: 'ریاضی عمومی توماس', titleEn: "Thomas' Calculus", subFa: 'جلد ۱ و ۲', icon: '📘', link: 'https://t.me/International_Maths/1' },
  { id: 'stewart', titleFa: 'ریاضی عمومی استوارت', titleEn: "Stewart Calculus", subFa: 'مرجع کامل', icon: '📙', link: 'https://t.me/International_Maths/2' },
  { id: 'stewart_sol', titleFa: 'حل تمرین استوارت', titleEn: 'Stewart Solutions', subFa: 'پاسخ‌نامه تشریحی', icon: '📗', link: 'https://t.me/International_Maths/3' },
  { id: 'adams', titleFa: 'ریاضی عمومی آدامز', titleEn: 'Adams Calculus', subFa: 'مرجع آدامز', icon: '📕', link: 'https://t.me/International_Maths/4' },
  { id: 'adams_sol', titleFa: 'حل تمرین آدامز', titleEn: 'Adams Solutions', subFa: 'حل تشریحی مسائل', icon: '📓', link: 'https://t.me/International_Maths/5' },
  { id: 'math2', titleFa: 'ریاضی عمومی ۲', titleEn: 'General Math 2', subFa: 'چند متغیره و برداری', icon: '📚', link: 'https://t.me/International_Maths/6' },
  { id: 'numerical', titleFa: 'محاسبات عددی', titleEn: 'Numerical Analysis', subFa: 'روش‌ها و الگوریتم‌ها', icon: '💻', link: 'https://t.me/International_Maths/7' },
  { id: 'complex', titleFa: 'اعداد مختلط', titleEn: 'Complex Variables', subFa: 'آنالیز مختلط', icon: '🌀', link: 'https://t.me/International_Maths/8' },
  { id: 'linear_alg', titleFa: 'جبر خطی', titleEn: 'Linear Algebra', subFa: 'ماتریس و فضاهای برداری', icon: '📐', link: 'https://t.me/International_Maths/9' },
  { id: 'applied_math', titleFa: 'ریاضی کاربردی', titleEn: 'Applied Math', subFa: 'ویژه مهندسی', icon: '⚙️', link: 'https://t.me/International_Maths/10' },
  { id: 'stat_prob', titleFa: 'آمار و احتمالات مهندسی', titleEn: 'Engineering Statistics', subFa: 'تحلیل داده و احتمال', icon: '📊', link: 'https://t.me/International_Maths/11' },
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
      {/* باکس عنوان بخش با زمینه سرمه‌ای و متن سفید/آبی‌روشن */}
      <div className="text-center max-w-3xl mx-auto mb-10 p-6 bg-blue-900 rounded-3xl border-2 border-blue-500 shadow-2xl">
        <h2 className="text-3xl md:text-4xl font-black mb-3 text-white">
          📚 {isFa ? 'کتاب‌های تدریس‌شده' : 'Taught Textbooks'}
        </h2>
        <p className="text-sky-200 text-sm md:text-base font-bold leading-relaxed">
          {isFa
            ? 'جهت مشاهده کتاب‌ها، ابتدا سیستم آموزشی/کشور یا بخش دانشگاهی را انتخاب کنید:'
            : 'Select an educational system, country, or university section to view books:'}
        </p>
      </div>

      {/* دکمه‌های دسته‌بندی */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto mb-10">
        {categories.map((cat) => (
          <button
            key={cat.id}
            type="button"
            onClick={() => setSelectedCategory(cat.id)}
            className={`p-4 rounded-2xl border-2 text-right transition-all duration-300 relative transform hover:-translate-y-1 ${
              selectedCategory === cat.id
                ? 'bg-blue-600 text-white border-white shadow-2xl scale-105'
                : 'bg-blue-900 text-white border-blue-500 hover:border-sky-300 hover:bg-blue-800 shadow-lg'
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="w-8 h-8 flex items-center justify-center text-sm rounded-lg bg-blue-950 border border-blue-400 text-white shadow-sm">
                {cat.icon}
              </span>
              <span className="text-lg filter drop-shadow">{cat.flag}</span>
            </div>
            <h3 className="font-black text-sm text-white">
              {isFa ? cat.titleFa : cat.titleEn}
            </h3>
            <p className="text-[11px] mt-1 font-bold text-sky-200">
              {isFa ? cat.subtitleFa : cat.subtitleEn}
            </p>
          </button>
        ))}
      </div>

      {/* لیست کتاب‌ها / مقاطع پس از انتخاب */}
      {selectedCategory && (
        <div className="p-6 md:p-8 bg-blue-900 rounded-3xl border-2 border-blue-500 shadow-2xl max-w-6xl mx-auto">
          <div className="flex items-center justify-between border-b-2 border-blue-700 pb-4 mb-6">
            <div className="flex items-center gap-3">
              <span className="w-10 h-10 flex items-center justify-center text-xl rounded-xl bg-blue-950 border border-blue-400 text-white">
                {activeCategory?.icon}
              </span>
              <div>
                <h3 className="text-xl font-black text-white">
                  {isFa ? activeCategory?.titleFa : activeCategory?.titleEn}
                </h3>
                <p className="text-xs font-bold text-sky-200 mt-0.5">
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
                  className="p-4 bg-blue-950 hover:bg-blue-800 border-2 border-blue-600 hover:border-sky-300 rounded-2xl transition duration-200 flex flex-col justify-between shadow-lg group"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-blue-900 border border-blue-400 flex items-center justify-center text-xl text-white shadow-sm shrink-0 group-hover:scale-105 transition">
                      {book.icon}
                    </div>
                    <div>
                      <div className="font-black text-white text-sm group-hover:text-sky-300 transition">
                        {isFa ? book.titleFa : book.titleEn}
                      </div>
                      <div className="text-[11px] text-sky-200 font-bold mt-0.5">
                        {book.subFa}
                      </div>
                    </div>
                  </div>
                  <span className="w-full text-center py-2 bg-blue-600 hover:bg-blue-500 text-white text-xs font-black rounded-xl shadow transition">
                    {isFa ? 'دانلود PDF از تلگرام' : 'Download PDF'}
                  </span>
                </a>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
              {schoolGrades.map((grade) => {
                const targetLink = COUNTRY_GRADE_LINKS[selectedCategory]?.[grade.id] || "https://t.me/International_Maths";
                return (
                  <a
                    key={grade.id}
                    href={targetLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-blue-950 hover:bg-blue-800 border-2 border-blue-600 hover:border-sky-300 rounded-2xl transition flex flex-col items-center justify-between text-center shadow-lg"
                  >
                    <div className="w-9 h-9 rounded-lg bg-blue-900 border border-blue-400 flex items-center justify-center text-lg text-white shadow-sm mb-2">
                      {grade.icon}
                    </div>
                    <div>
                      <div className="font-black text-white text-xs">
                        {isFa ? grade.titleFa : grade.titleEn}
                      </div>
                      <div className="text-[10px] text-sky-200 font-bold mt-0.5">
                        {grade.subFa}
                      </div>
                    </div>
                    <span className="mt-3 px-3 py-1.5 bg-blue-600 hover:bg-blue-500 text-white text-[10px] font-black rounded-lg transition">
                      {isFa ? 'دانلود PDF' : 'Download'}
                    </span>
                  </a>
                );
              })}
            </div>
          )}
        </div>
      )}
    </section>
  );
}
