'use client';

import { useState } from 'react';

// لینک‌های تلگرام برای مقاطع تحصیلی
const COUNTRY_GRADE_LINKS = {
  cambridge: {
    g7: 'https://t.me/International_Maths/1400',
    g8: 'https://t.me/International_Maths/1401',
    g9: 'https://t.me/International_Maths/1402',
    g10: 'https://t.me/International_Maths/1403',
    g11: 'https://t.me/International_Maths/1404',
    g12: 'https://t.me/International_Maths/1405',
  },
  australia: { g7: 'https://t.me/International_Maths/768', g8: 'https://t.me/International_Maths', g9: 'https://t.me/International_Maths/769', g10: 'https://t.me/International_Maths/43', g11: 'https://t.me/International_Maths/85', g12: 'https://t.me/International_Maths/23' },
  canada: { g7: 'https://t.me/International_Maths/482', g8: 'https://t.me/International_Maths/481', g9: 'https://t.me/International_Maths/571', g10: 'https://t.me/International_Maths/571', g11: 'https://t.me/International_Maths/18', g12: 'https://t.me/International_Maths/52' },
  uk: { g7: 'https://t.me/International_Maths/2740', g8: 'https://t.me/International_Maths/2739', g9: 'https://t.me/International_Maths/13', g10: 'https://t.me/International_Maths/21', g11: 'https://t.me/International_Maths/10', g12: 'https://t.me/International_Maths/2743' },
  germany: { g7: 'https://t.me/International_Maths/1344', g8: 'https://t.me/International_Maths/1345', g9: 'https://t.me/International_Maths/1346', g10: 'https://t.me/International_Maths/1349', g11: 'https://t.me/International_Maths/1350', g12: 'https://t.me/International_Maths/1351' },
  california: { g7: 'https://t.me/International_Maths/1410', g8: 'https://t.me/International_Maths/1411', g9: 'https://t.me/International_Maths/1413', g10: 'https://t.me/International_Maths/1415', g11: 'https://t.me/International_Maths/1419', g12: 'https://t.me/International_Maths/1421' },
  turkey: { g7: 'https://t.me/International_Maths/1454', g8: 'https://t.me/International_Maths/1455', g9: 'https://t.me/International_Maths/1456', g10: 'https://t.me/International_Maths/1457', g11: 'https://t.me/International_Maths/1458', g12: 'https://t.me/International_Maths/1459' },
};

// کتاب‌های دانشگاهی
const UNIVERSITY_BOOKS = [
  { id: 'thomas', titleFa: 'ریاضی عمومی توماس', titleEn: 'Thomas Calculus', subFa: 'جلد ۱ و ۲', icon: '📘', link: 'https://t.me/International_Maths/88' },
  { id: 'stewart', titleFa: 'ریاضی عمومی استوارت', titleEn: 'Stewart Calculus', subFa: 'مرجع کامل', icon: '📙', link: 'https://t.me/International_Maths/33' },
  { id: 'stewart_sol', titleFa: 'حل تمرین استوارت', titleEn: 'Stewart Solutions', subFa: 'پاسخ‌نامه تشریحی', icon: '📗', link: 'https://t.me/International_Maths/37' },
  { id: 'adams', titleFa: 'ریاضی عمومی آدامز', titleEn: 'Adams Calculus', subFa: 'مرجع آدامز', icon: '📕', link: 'https://t.me/International_Maths/1786' },
  { id: 'adams_sol', titleFa: 'حل تمرین آدامز', titleEn: 'Adams Solutions', subFa: 'حل تشریحی مسائل', icon: '📓', link: 'https://t.me/International_Maths/1787' },
  { id: 'math2', titleFa: 'ریاضی عمومی ۲', titleEn: 'General Math 2', subFa: 'چند متغیره و برداری', icon: '📚', link: 'https://t.me/International_Maths/64' },
  { id: 'numerical', titleFa: 'محاسبات عددی', titleEn: 'Numerical Analysis', subFa: 'روش‌ها و الگوریتم‌ها', icon: '💻', link: 'https://t.me/International_Maths/100' },
  { id: 'complex', titleFa: 'اعداد مختلط', titleEn: 'Complex Variables', subFa: 'آنالیز مختلط', icon: '🌀', link: 'https://t.me/International_Maths/92' },
  { id: 'linear_alg', titleFa: 'جبر خطی', titleEn: 'Linear Algebra', subFa: 'ماتریس و فضاهای برداری', icon: '📐', link: 'https://t.me/International_Maths/94' },
  { id: 'applied_math', titleFa: 'ریاضی کاربردی', titleEn: 'Applied Math', subFa: 'ویژه مهندسی', icon: '⚙️', link: 'https://t.me/International_Maths/103' },
  { id: 'stat_prob', titleFa: 'آمار و احتمالات مهندسی', titleEn: 'Engineering Statistics', subFa: 'تحلیل داده و احتمال', icon: '📊', link: 'https://t.me/International_Maths/86' },
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

export default function BooksSection({ lang: initialLang = 'fa' }) {
  const [currentLang, setCurrentLang] = useState(initialLang);
  const [selectedCategory, setSelectedCategory] = useState(null);
  
  const isFa = currentLang === 'fa';
  const activeCategory = categories.find((c) => c.id === selectedCategory);

  return (
    <section className="py-8 bg-slate-50 rounded-2xl p-4 md:p-6 space-y-10">
      {/* عنوان بخش اصلی و دو دکمه بالای صفحه */}
      <div className="text-center max-w-3xl mx-auto p-6 bg-white rounded-2xl border-b-4 border-slate-300 shadow-xl relative">
        {/* دو دکمه بالای صفحه (تغییر زبان) با تم خاکستری ملایم */}
        <div className="flex justify-center gap-3 mb-4">
          <button
            type="button"
            onClick={() => setCurrentLang('fa')}
            className={`px-4 py-1.5 rounded-xl font-bold text-xs border-b-4 transition-all duration-200 cursor-pointer ${
              isFa
                ? 'bg-slate-600 text-white border-slate-800 shadow-md scale-105'
                : 'bg-slate-100 text-slate-700 border-slate-300 hover:bg-slate-200'
            }`}
          >
            فارسی 🇮🇷
          </button>
          <button
            type="button"
            onClick={() => setCurrentLang('en')}
            className={`px-4 py-1.5 rounded-xl font-bold text-xs border-b-4 transition-all duration-200 cursor-pointer ${
              !isFa
                ? 'bg-slate-600 text-white border-slate-800 shadow-md scale-105'
                : 'bg-slate-100 text-slate-700 border-slate-300 hover:bg-slate-200'
            }`}
          >
            English 🇬🇧
          </button>
        </div>

        <h2 className="text-2xl md:text-3xl font-black mb-2 text-slate-900">
          📚 {isFa ? 'کتاب‌های تدریس‌شده بین‌المللی' : 'Taught Textbooks'}
        </h2>
        <p className="text-slate-600 text-sm md:text-base leading-relaxed font-medium">
          {isFa
            ? 'تدریس بر اساس آخرین ویرایش کتاب‌های رسمی نظام‌های آموزشی بین‌المللی'
            : 'Teaching based on official international curricula standard textbooks.'}
        </p>
      </div>

      {/* بنر تصویر عمودی با اسکرول کامل و روان در موبایل */}
      <div className="max-w-4xl mx-auto bg-white rounded-3xl border-2 border-slate-200 shadow-2xl overflow-hidden">
        <div className="relative w-full h-[320px] md:h-[420px] bg-slate-900 overflow-y-auto overflow-x-hidden touch-auto scrollbar-hide">
          <img
            src="/IMG_1849.jpg"
            alt={isFa ? 'کتب و منابع تدریس‌شده' : 'Taught Textbooks'}
            className="w-full h-auto min-h-full object-cover block"
            loading="eager"
          />
        </div>
      </div>

      <hr className="border-slate-300 max-w-4xl mx-auto my-6" />

      {/* راهنمای دانلود کتاب‌ها */}
      <div className="text-center max-w-2xl mx-auto">
        <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-1">
          📥 {isFa ? 'دانلود مستقیم کتب از تلگرام' : 'Download Textbooks'}
        </h3>
        <p className="text-xs md:text-sm text-slate-600 font-medium">
          {isFa
            ? 'جهت مشاهده و دانلود کتاب‌ها، کشور یا مقطع مورد نظر را انتخاب کنید:'
            : 'Select an educational system or section below:'}
        </p>
      </div>

      {/* دکمه‌های دسته‌بندی با تم خاکستری ملایم در حالت انتخاب */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
        {categories.map((cat) => (
          <button
            key={cat.id}
            type="button"
            onClick={() => setSelectedCategory(cat.id)}
            className={`p-5 rounded-2xl text-right transition-all duration-200 cursor-pointer transform ${
              selectedCategory === cat.id
                ? 'bg-slate-600 text-white border-b-8 border-slate-800 shadow-2xl scale-105 -translate-y-1'
                : 'bg-white text-slate-900 border-2 border-slate-200 border-b-8 border-b-slate-300 shadow-xl hover:shadow-2xl hover:-translate-y-1 hover:border-b-slate-500'
            }`}
          >
            <div className="flex items-center justify-between mb-3">
              <span
                className={`w-10 h-10 flex items-center justify-center text-lg rounded-xl shadow-md ${
                  selectedCategory === cat.id
                    ? 'bg-slate-700 text-white'
                    : 'bg-slate-100 border border-slate-200 text-slate-900'
                }`}
              >
                {cat.icon}
              </span>
              <span className="text-2xl drop-shadow-sm">{cat.flag}</span>
            </div>
            <h3 className="font-extrabold text-base mb-1">
              {isFa ? cat.titleFa : cat.titleEn}
            </h3>
            <p
              className={`text-xs font-medium ${
                selectedCategory === cat.id ? 'text-slate-200' : 'text-slate-500'
              }`}
            >
              {isFa ? cat.subtitleFa : cat.subtitleEn}
            </p>
          </button>
        ))}
      </div>

      {/* نمایش زیرمجموعه‌ها پس از انتخاب */}
      {selectedCategory && (
        <div className="p-6 bg-white rounded-3xl border-2 border-slate-200 border-b-8 border-b-slate-300 shadow-2xl max-w-6xl mx-auto">
          <div className="flex items-center justify-between border-b-2 border-slate-100 pb-4 mb-6">
            <div className="flex items-center gap-3">
              <span className="w-12 h-12 flex items-center justify-center text-2xl rounded-2xl bg-slate-100 border border-slate-300 shadow-inner text-slate-800">
                {activeCategory?.icon}
              </span>
              <div>
                <h3 className="text-xl font-black text-slate-900">
                  {isFa ? activeCategory?.titleFa : activeCategory?.titleEn}
                </h3>
                <p className="text-xs text-slate-500 font-medium mt-0.5">
                  {isFa ? activeCategory?.subtitleFa : activeCategory?.subtitleEn}
                </p>
              </div>
            </div>
            <span className="text-3xl drop-shadow-md">{activeCategory?.flag}</span>
          </div>

          {selectedCategory === 'university' ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {UNIVERSITY_BOOKS.map((book) => (
                <a
                  key={book.id}
                  href={book.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-slate-50 hover:bg-white border-2 border-slate-200 border-b-4 border-b-slate-300 rounded-2xl transition-all duration-200 flex flex-col justify-between shadow-lg hover:shadow-xl hover:-translate-y-1"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-11 h-11 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-2xl text-slate-800 shrink-0 shadow-md">
                      {book.icon}
                    </div>
                    <div>
                      <div className="font-bold text-slate-900 text-sm">
                        {isFa ? book.titleFa : book.titleEn}
                      </div>
                      <div className="text-[11px] text-slate-500 font-medium mt-0.5">
                        {book.subFa}
                      </div>
                    </div>
                  </div>
                  <span className="w-full text-center py-2.5 bg-slate-600 hover:bg-slate-700 text-white font-bold text-xs rounded-xl border-b-4 border-slate-800 shadow-md transition active:translate-y-0.5">
                    {isFa ? 'دانلود PDF از تلگرام' : 'Download PDF'}
                  </span>
                </a>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              {schoolGrades.map((grade) => {
                const targetLink =
                  COUNTRY_GRADE_LINKS[selectedCategory]?.[grade.id] ||
                  'https://t.me/International_Maths';

                return (
                  <a
                    key={grade.id}
                    href={targetLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 bg-slate-50 hover:bg-white border-2 border-slate-200 border-b-4 border-b-slate-300 rounded-2xl transition-all duration-200 flex flex-col items-center justify-between text-center shadow-md hover:shadow-xl hover:-translate-y-1"
                  >
                    <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-xl text-slate-800 mb-2 shadow-sm">
                      {grade.icon}
                    </div>
                    <div className="mb-3">
                      <div className="font-bold text-slate-900 text-xs">
                        {isFa ? grade.titleFa : grade.titleEn}
                      </div>
                      <div className="text-[10px] text-slate-500 font-medium mt-0.5">
                        {grade.subFa}
                      </div>
                    </div>
                    <span className="w-full py-1.5 bg-slate-600 hover:bg-slate-700 text-white border-b-4 border-slate-800 text-[10px] font-bold rounded-lg shadow-md transition active:translate-y-0.5">
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
