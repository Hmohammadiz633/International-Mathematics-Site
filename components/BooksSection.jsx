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

// لیست کامل ۱۱ کتاب دانشگاهی درخواستی
const UNIVERSITY_BOOKS = [
  {
    id: 'thomas',
    titleFa: 'ریاضی عمومی توماس',
    titleEn: "Thomas' Calculus",
    subFa: 'جلد ۱ و ۲',
    subEn: 'Vol 1 & 2',
    icon: '📘',
    link: 'https://t.me/International_Maths',
  },
  {
    id: 'stewart',
    titleFa: 'ریاضی عمومی استوارت',
    titleEn: "Stewart Calculus",
    subFa: 'مرجع کامل',
    subEn: 'Full Edition',
    icon: '📙',
    link: 'https://t.me/International_Maths',
  },
  {
    id: 'stewart_solutions',
    titleFa: 'حل تمرین استوارت',
    titleEn: 'Stewart Solutions',
    subFa: 'پاسخ‌نامه گام‌به‌گام',
    subEn: 'Step-by-Step Solutions',
    icon: '📗',
    link: 'https://t.me/International_Maths',
  },
  {
    id: 'adams',
    titleFa: 'ریاضی عمومی آدامز',
    titleEn: 'Adams Calculus',
    subFa: 'کتاب مرجع آدامز',
    subEn: 'Single & Multivariable',
    icon: '📕',
    link: 'https://t.me/International_Maths',
  },
  {
    id: 'adams_solutions',
    titleFa: 'حل تمرین آدامز',
    titleEn: 'Adams Solutions',
    subFa: 'حل تشریحی مسائل',
    subEn: 'Complete Solutions',
    icon: '📓',
    link: 'https://t.me/International_Maths',
  },
  {
    id: 'math2',
    titleFa: 'ریاضی عمومی ۲',
    titleEn: 'General Math 2',
    subFa: 'چند متغیره و برداری',
    subEn: 'Multivariable Calculus',
    icon: '📚',
    link: 'https://t.me/International_Maths',
  },
  {
    id: 'numerical',
    titleFa: 'محاسبات عددی',
    titleEn: 'Numerical Analysis',
    subFa: 'روش‌ها و الگوریتم‌ها',
    subEn: 'Numerical Methods',
    icon: '💻',
    link: 'https://t.me/International_Maths',
  },
  {
    id: 'complex',
    titleFa: 'اعداد مختلط',
    titleEn: 'Complex Variables',
    subFa: 'آنالیز و متغیرهای مختلط',
    subEn: 'Complex Analysis',
    icon: '🌀',
    link: 'https://t.me/International_Maths',
  },
  {
    id: 'linear_algebra',
    titleFa: 'جبر خطی',
    titleEn: 'Linear Algebra',
    subFa: 'ماتریس‌ها و فضاهای برداری',
    subEn: 'Matrices & Vector Spaces',
    icon: '📐',
    link: 'https://t.me/International_Maths',
  },
  {
    id: 'applied_math',
    titleFa: 'ریاضی کاربردی',
    titleEn: 'Applied Mathematics',
    subFa: 'ویژه مهندسی و علوم پایه',
    subEn: 'Engineering Math',
    icon: '⚙️',
    link: 'https://t.me/International_Maths',
  },
  {
    id: 'stat_prob',
    titleFa: 'آمار و احتمالات مهندسی',
    titleEn: 'Engineering Statistics',
    subFa: 'آمار، احتمال و تحلیل داده',
    subEn: 'Probability & Statistics',
    icon: '📊',
    link: 'https://t.me/International_Maths',
  },
];

const categories = [
  {
    id: 'cambridge',
    titleFa: 'کمبریج',
    titleEn: 'Cambridge',
    subtitleFa: 'سیستم آموزشی کمبریج',
    subtitleEn: 'Cambridge Curriculum',
    icon: '🎓',
    flag: '🇬🇧',
  },
  {
    id: 'australia',
    titleFa: 'استرالیا',
    titleEn: 'Australia',
    subtitleFa: 'ریاضیات استرالیا',
    subtitleEn: 'Australian Mathematics',
    icon: '🦘',
    flag: '🇦🇺',
  },
  {
    id: 'canada',
    titleFa: 'کانادا',
    titleEn: 'Canada',
    subtitleFa: 'ریاضیات کانادا',
    subtitleEn: 'Canadian Mathematics',
    icon: '🍁',
    flag: '🇨🇦',
  },
  {
    id: 'uk',
    titleFa: 'انگلستان',
    titleEn: 'UK',
    subtitleFa: 'GCSE / A-Level',
    subtitleEn: 'GCSE / A-Level',
    icon: '👑',
    flag: '🇬🇧',
  },
  {
    id: 'germany',
    titleFa: 'آلمان',
    titleEn: 'Germany',
    subtitleFa: 'Abitur / Gymnasium',
    subtitleEn: 'Abitur / Gymnasium',
    icon: '🦅',
    flag: '🇩🇪',
  },
  {
    id: 'california',
    titleFa: 'کالیفرنیا',
    titleEn: 'California',
    subtitleFa: 'ریاضیات آمریکا',
    subtitleEn: 'US Curriculum',
    icon: '🐻',
    flag: '🇺🇸',
  },
  {
    id: 'turkey',
    titleFa: 'ترکیه',
    titleEn: 'Turkey',
    subtitleFa: 'YÖS / MEB',
    subtitleEn: 'YÖS / MEB',
    icon: '🌙',
    flag: '🇹🇷',
  },
  {
    id: 'university',
    titleFa: 'کتاب‌های دانشگاهی',
    titleEn: 'University Textbooks',
    subtitleFa: 'مرجع کتب دانشگاهی',
    subtitleEn: 'Higher Education Textbooks',
    icon: '🏛️',
    flag: '🎓',
  },
];

const schoolGrades = [
  { id: 'g7', titleFa: 'سال هفتم', titleEn: 'Grade 7', subFa: 'Year 7', subEn: 'Year 7', icon: '📘' },
  { id: 'g8', titleFa: 'سال هشتم', titleEn: 'Grade 8', subFa: 'Year 8', subEn: 'Year 8', icon: '📘' },
  { id: 'g9', titleFa: 'سال نهم', titleEn: 'Grade 9', subFa: 'Year 9', subEn: 'Year 9', icon: '📘' },
  { id: 'g10', titleFa: 'سال دهم', titleEn: 'Grade 10', subFa: 'Year 10 / IGCSE', subEn: 'Year 10 / IGCSE', icon: '📚' },
  { id: 'g11', titleFa: 'سال یازدهم', titleEn: 'Grade 11', subFa: 'Year 11 / AS Level', subEn: 'Year 11 / AS Level', icon: '📙' },
  { id: 'g12', titleFa: 'سال دوازدهم', titleEn: 'Grade 12', subFa: 'Year 12 / A Level', subEn: 'Year 12 / A Level', icon: '📗' },
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

      {/* کارت‌های ۳بعدی و برجسته با آیکون‌های کوچکتر و ضخیم */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto mb-12">
        {categories.map((cat) => (
          <button
            key={cat.id}
            type="button"
            onClick={() => setSelectedCategory(cat.id)}
            className={`p-4 rounded-2xl border-2 text-right transition-all duration-300 relative transform hover:-translate-y-1 active:translate-y-0.5 ${
              selectedCategory === cat.id
                ? 'bg-blue-600 text-white border-blue-700 shadow-xl shadow-blue-600/30 ring-2 ring-blue-400'
                : 'bg-white text-slate-800 border-blue-200 hover:border-blue-500 hover:bg-blue-50/70 shadow-md shadow-blue-900/5'
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              {/* آیکون سه‌بعدی و کوچکتر با سایه و ضخامت */}
              <span className="w-10 h-10 flex items-center justify-center text-xl rounded-xl bg-gradient-to-b from-white to-blue-100 border-2 border-blue-200 shadow-inner shadow-blue-300/50">
                {cat.icon}
              </span>
              <span className="text-xl filter drop-shadow-md">{cat.flag}</span>
            </div>
            <h3 className={`font-black text-base ${selectedCategory === cat.id ? 'text-white' : 'text-blue-950'}`}>
              {isFa ? cat.titleFa : cat.titleEn}
            </h3>
            <p className={`text-xs mt-1 font-bold ${selectedCategory === cat.id ? 'text-blue-100' : 'text-slate-500'}`}>
              {isFa ? cat.subtitleFa : cat.subtitleEn}
            </p>
          </button>
        ))}
      </div>

      {/* بخش نمایش کتاب‌ها */}
      {selectedCategory && (
        <div className="p-6 md:p-8 bg-white rounded-3xl border-2 border-blue-200 shadow-2xl shadow-blue-600/10 max-w-6xl mx-auto transition-all">
          <div className="flex items-center justify-between border-b-2 border-blue-100 pb-5 mb-8">
            <div className="flex items-center gap-3">
              <span className="w-12 h-12 flex items-center justify-center text-2xl rounded-2xl bg-gradient-to-b from-blue-50 to-blue-100 border-2 border-blue-300 shadow-md">
                {activeCategory?.icon}
              </span>
              <div>
                <h3 className="text-2xl font-black text-blue-950">
                  {isFa ? activeCategory?.titleFa : activeCategory?.titleEn}
                </h3>
                <p className="text-xs font-bold text-slate-500 mt-0.5">
                  {isFa ? activeCategory?.subtitleFa : activeCategory?.subtitleEn}
                </p>
              </div>
            </div>
            <span className="text-3xl filter drop-shadow-md">{activeCategory?.flag}</span>
          </div>

          {selectedCategory === 'university' ? (
            <div>
              <p className="text-slate-700 text-xs md:text-sm font-extrabold mb-6">
                {isFa
                  ? 'کتاب‌ها و مراجع اصلی دانشگاهی (جهت دانلود PDF روی کتاب مورد نظر کلیک کنید):'
                  : 'University Textbooks & References (Click to download PDF):'}
              </p>

              {/* شبکه ۱۱ کتاب دانشگاهی */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {UNIVERSITY_BOOKS.map((book) => (
                  <a
                    key={book.id}
                    href={book.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-5 bg-gradient-to-b from-blue-50/40 to-white hover:from-blue-100/60 hover:to-blue-50 border-2 border-blue-200 hover:border-blue-600 rounded-2xl transition duration-200 group flex flex-col justify-between shadow-md hover:shadow-xl shadow-blue-500/5"
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-2xl bg-white border-2 border-blue-200 flex items-center justify-center text-2xl shadow-md group-hover:scale-110 transition shrink-0">
                        {book.icon}
                      </div>
                      <div>
                        <div className="font-black text-blue-950 text-sm md:text-base group-hover:text-blue-600 transition">
                          {isFa ? book.titleFa : book.titleEn}
                        </div>
                        <div className="text-xs text-slate-500 font-bold mt-0.5">
                          {isFa ? book.subFa : book.subEn}
                        </div>
                      </div>
                    </div>
                    <span className="w-full text-center py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-extrabold rounded-xl shadow-md transition">
                      {isFa ? 'دانلود PDF و توضیحات' : 'Download PDF'}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          ) : (
            <div>
              <p className="text-slate-700 text-xs md:text-sm font-extrabold mb-6">
                {isFa
                  ? 'پایه‌های تحصیلی (برای مشاهده یا دانلود PDF روی پایه مورد نظر کلیک کنید)'
                  : 'Select a grade to view or download the PDF:'}
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
                {schoolGrades.map((grade) => (
                  <a
                    key={grade.id}
                    href={TELEGRAM_LINKS[grade.id]}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 bg-gradient-to-b from-white to-blue-50/40 hover:to-blue-100/70 border-2 border-blue-200 hover:border-blue-600 rounded-2xl transition group flex flex-col items-center justify-between text-center shadow-sm hover:shadow-md"
                  >
                    <div className="w-11 h-11 rounded-xl bg-white border-2 border-blue-200 flex items-center justify-center text-xl shadow-md mb-3 group-hover:scale-110 transition">
                      {grade.icon}
                    </div>
                    <div>
                      <div className="font-black text-blue-950 text-sm">
                        {isFa ? grade.titleFa : grade.titleEn}
                      </div>
                      <div className="text-xs text-slate-500 font-bold mt-0.5">
                        {isFa ? grade.subFa : grade.subEn}
                      </div>
                    </div>
                    <span className="mt-4 px-3 py-1.5 bg-blue-600 text-white text-xs font-extrabold rounded-lg group-hover:bg-blue-700 shadow-sm transition">
                      {isFa ? 'دانلود PDF' : 'Download PDF'}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </section>
  );
}
