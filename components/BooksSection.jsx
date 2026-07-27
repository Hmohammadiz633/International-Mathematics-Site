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

const DEFAULT_TELEGRAM = "https://t.me/International_Maths";

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
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-sky-950">
          📚 {isFa ? 'کتاب‌های تدریس‌شده' : 'Taught Textbooks'}
        </h2>
        <p className="text-slate-600 text-sm md:text-base leading-relaxed">
          {isFa
            ? 'جهت مشاهده کتاب‌ها، ابتدا سیستم آموزشی/کشور یا بخش دانشگاهی را انتخاب کنید:'
            : 'Select an educational system, country, or university section to view books:'}
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto mb-12">
        {categories.map((cat) => (
          <button
            key={cat.id}
            type="button"
            onClick={() => setSelectedCategory(cat.id)}
            className={`p-5 rounded-2xl border text-right transition-all duration-300 relative overflow-hidden group shadow-md ${
              selectedCategory === cat.id
                ? 'bg-sky-600 text-white border-sky-600 ring-2 ring-sky-400'
                : 'bg-white text-slate-800 border-sky-100 hover:border-sky-300 hover:bg-sky-50/50'
            }`}
          >
            <div className="flex items-start justify-between mb-3">
              <span className="text-3xl p-2 rounded-xl bg-sky-50 border border-sky-100">
                {cat.icon}
              </span>
              <span className="text-2xl">{cat.flag}</span>
            </div>
            <h3 className={`font-bold text-lg ${selectedCategory === cat.id ? 'text-white' : 'text-slate-900'}`}>
              {isFa ? cat.titleFa : cat.titleEn}
            </h3>
            <p className={`text-xs mt-1 ${selectedCategory === cat.id ? 'text-sky-100' : 'text-slate-500'}`}>
              {isFa ? cat.subtitleFa : cat.subtitleEn}
            </p>
          </button>
        ))}
      </div>

      {selectedCategory && (
        <div className="p-6 md:p-8 bg-white rounded-3xl border border-sky-100 shadow-xl shadow-sky-500/5 max-w-6xl mx-auto transition-all">
          <div className="flex items-center justify-between border-b border-sky-100 pb-5 mb-8">
            <div className="flex items-center gap-3">
              <span className="text-3xl">{activeCategory?.icon}</span>
              <div>
                <h3 className="text-2xl font-bold text-sky-950">
                  {isFa ? activeCategory?.titleFa : activeCategory?.titleEn}
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  {isFa ? activeCategory?.subtitleFa : activeCategory?.subtitleEn}
                </p>
              </div>
            </div>
            <span className="text-3xl">{activeCategory?.flag}</span>
          </div>

          {selectedCategory === 'university' ? (
            <div className="text-center py-8">
              <p className="text-slate-600 mb-6 text-sm md:text-base">
                {isFa
                  ? 'جهت مشاهده و دریافت مستقیم کتاب‌های دانشگاهی کلیک کنید:'
                  : 'Click below to access and download university textbooks directly:'}
              </p>
              <a
                href={DEFAULT_TELEGRAM}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-sky-600 hover:bg-sky-700 text-white font-bold rounded-xl shadow-lg shadow-sky-600/20 transition"
              >
                <span>✈️</span>
                <span>{isFa ? 'مشاهده در تلگرام' : 'View on Telegram'}</span>
              </a>
            </div>
          ) : (
            <div>
              <p className="text-slate-500 text-xs md:text-sm mb-6">
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
                    className="p-4 bg-sky-50/50 hover:bg-sky-100/60 border border-sky-100 hover:border-sky-300 rounded-2xl transition group flex flex-col items-center justify-between text-center shadow-xs"
                  >
                    <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center text-2xl shadow-sm mb-3 group-hover:scale-110 transition">
                      {grade.icon}
                    </div>
                    <div>
                      <div className="font-bold text-sky-950 text-sm">
                        {isFa ? grade.titleFa : grade.titleEn}
                      </div>
                      <div className="text-xs text-slate-500 mt-0.5">
                        {isFa ? grade.subFa : grade.subEn}
                      </div>
                    </div>
                    <span className="mt-4 px-3 py-1 bg-white text-sky-700 border border-sky-200 text-xs font-semibold rounded-lg group-hover:bg-sky-600 group-hover:text-white transition">
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
