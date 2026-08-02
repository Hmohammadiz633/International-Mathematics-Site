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

export default function BooksSection({ lang = 'fa' }) {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [isZoomed, setIsZoomed] = useState(false);
  const isFa = lang === 'fa';
  const activeCategory = categories.find((c) => c.id === selectedCategory);

  return (
    <section className="py-8 bg-white rounded-2xl p-4 space-y-10">
      {/* عنوان بخش اصلی */}
      <div className="text-center max-w-3xl mx-auto p-6 bg-gray-100 rounded-2xl border border-gray-300">
        <h2 className="text-2xl md:text-3xl font-bold mb-2 text-black">
          📚 {isFa ? 'کتاب‌های تدریس‌شده بین‌المللی' : 'Taught Textbooks'}
        </h2>
        <p className="text-black text-sm md:text-base leading-relaxed">
          {isFa
            ? 'تدریس بر اساس آخرین ویرایش کتاب‌های رسمی نظام‌های آموزشی بین‌المللی'
            : 'Teaching based on official international curricula standard textbooks.'}
        </p>
      </div>

      {/* بنر تصویر گالری کتاب‌ها (IMG_1849.jpg) */}
      <div className="max-w-5xl mx-auto bg-white rounded-3xl border border-gray-200 shadow-md overflow-hidden">
        <div 
          className="relative w-full bg-slate-900 group cursor-pointer overflow-hidden"
          onClick={() => setIsZoomed(!isZoomed)}
        >
          <img
            src="/IMG_1849.jpg"
            alt={isFa ? 'کتب و منابع تدریس‌شده' : 'Taught Textbooks'}
            className={`w-full h-auto object-contain transition-transform duration-500 ease-out ${
              isZoomed ? 'scale-125' : 'group-hover:scale-[1.02]'
            }`}
            loading="eager"
          />
          <div className="absolute bottom-3 left-3 bg-slate-900/80 backdrop-blur-md text-white text-xs px-3 py-1.5 rounded-lg border border-slate-700 flex items-center gap-1.5 pointer-events-none">
            <span>🔍</span>
            <span>
              {isFa
                ? isZoomed
                  ? 'برای کوچک‌سازی کلیک کنید'
                  : 'برای بزرگ‌نمایی کلیک کنید'
                : isZoomed
                ? 'Click to minimize'
                : 'Click to zoom'}
            </span>
          </div>
        </div>
      </div>

      <hr className="border-gray-200 max-w-5xl mx-auto my-6" />

      {/* راهنمای دانلود کتاب‌ها */}
      <div className="text-center max-w-2xl mx-auto">
        <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-1">
          📥 {isFa ? 'دانلود مستقیم کتب از تلگرام' : 'Download Textbooks'}
        </h3>
        <p className="text-xs md:text-sm text-slate-600">
          {isFa
            ? 'جهت مشاهده و دانلود کتاب‌ها، کشور یا مقطع مورد نظر را انتخاب کنید:'
            : 'Select an educational system or section below:'}
        </p>
      </div>

      {/* شبکه دکمه‌های دسته‌بندی */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
        {categories.map((cat) => (
          <button
            key={cat.id}
            type="button"
            onClick={() => setSelectedCategory(cat.id)}
            className={`p-4 rounded-xl border text-right transition duration-200 ${
              selectedCategory === cat.id
                ? 'bg-gray-300 text-black border-black font-bold shadow-sm'
                : 'bg-gray-100 text-black border-gray-300 hover:bg-gray-200'
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="w-8 h-8 flex items-center justify-center text-sm rounded-lg bg-white border border-gray-300 text-black">
                {cat.icon}
              </span>
              <span className="text-lg">{cat.flag}</span>
            </div>
            <h3 className="font-bold text-sm text-black">
              {isFa ? cat.titleFa : cat.titleEn}
            </h3>
            <p className="text-[11px] mt-1 text-black opacity-80">
              {isFa ? cat.subtitleFa : cat.subtitleEn}
            </p>
          </button>
        ))}
      </div>

      {/* نمایش لیست زیرمجموعه‌ها پس از انتخاب */}
      {selectedCategory && (
        <div className="p-6 bg-gray-50 rounded-2xl border border-gray-300 max-w-6xl mx-auto">
          <div className="flex items-center justify-between border-b border-gray-300 pb-4 mb-6">
            <div className="flex items-center gap-3">
              <span className="w-10 h-10 flex items-center justify-center text-xl rounded-xl bg-white border border-gray-300 text-black">
                {activeCategory?.icon}
              </span>
              <div>
                <h3 className="text-lg font-bold text-black">
                  {isFa ? activeCategory?.titleFa : activeCategory?.titleEn}
                </h3>
                <p className="text-xs text-black opacity-80 mt-0.5">
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
                  className="p-4 bg-white hover:bg-gray-100 border border-gray-300 rounded-xl transition flex flex-col justify-between shadow-sm"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-gray-100 border border-gray-300 flex items-center justify-center text-xl text-black shrink-0">
                      {book.icon}
                    </div>
                    <div>
                      <div className="font-bold text-black text-sm">
                        {isFa ? book.titleFa : book.titleEn}
                      </div>
                      <div className="text-[11px] text-black opacity-70 mt-0.5">
                        {book.subFa}
                      </div>
                    </div>
                  </div>
                  <span className="w-full text-center py-2 bg-gray-200 hover:bg-gray-300 text-black font-bold text-xs rounded-lg border border-gray-300 transition">
                    {isFa ? 'دانلود PDF از تلگرام' : 'Download PDF'}
                  </span>
                </a>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
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
                    className="p-3 bg-white hover:bg-gray-100 border border-gray-300 rounded-xl transition flex flex-col items-center justify-between text-center shadow-sm"
                  >
                    <div className="w-9 h-9 rounded-lg bg-gray-100 border border-gray-300 flex items-center justify-center text-lg text-black mb-2">
                      {grade.icon}
                    </div>
                    <div>
                      <div className="font-bold text-black text-xs">
                        {isFa ? grade.titleFa : grade.titleEn}
                      </div>
                      <div className="text-[10px] text-black opacity-70 mt-0.5">
                        {grade.subFa}
                      </div>
                    </div>
                    <span className="mt-3 px-3 py-1.5 bg-gray-200 hover:bg-gray-300 text-black border border-gray-300 text-[10px] font-bold rounded-lg transition">
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
