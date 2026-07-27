'use client';

import { useState } from 'react';

// لینک‌های تلگرام برای مقاطع تحصیلی
const TELEGRAM_LINKS = {
  g7: "https://t.me/International_Maths/1400",
  g8: "https://t.me/International_Maths/1401",
  g9: "https://t.me/International_Maths/1402",
  g10: "https://t.me/International_Maths/1403",
  g11: "https://t.me/International_Maths/1404",
  g12: "https://t.me/International_Maths/1405",
};

const DEFAULT_TELEGRAM = "https://t.me/International_Maths";

// دقیقاً آرایه اولیه شما همراه با پشتیبانی زبان
const categories = [
  {
    id: 'cambridge',
    titleFa: 'کمبریج',
    titleEn: 'Cambridge',
    subtitleFa: 'سیستم آموزشی کمبریج',
    subtitleEn: 'Cambridge Curriculum',
    icon: '🎓',
    flag: '🇬🇧',
    color: 'from-blue-600 to-indigo-700',
  },
  {
    id: 'australia',
    titleFa: 'استرالیا',
    titleEn: 'Australia',
    subtitleFa: 'ریاضیات استرالیا',
    subtitleEn: 'Australian Mathematics',
    icon: '🦘',
    flag: '🇦🇺',
    color: 'from-amber-500 to-orange-600',
  },
  {
    id: 'canada',
    titleFa: 'کانادا',
    titleEn: 'Canada',
    subtitleFa: 'ریاضیات کانادا',
    subtitleEn: 'Canadian Mathematics',
    icon: '🍁',
    flag: '🇨🇦',
    color: 'from-red-500 to-rose-700',
  },
  {
    id: 'uk',
    titleFa: 'انگلستان',
    titleEn: 'UK',
    subtitleFa: 'GCSE / A-Level',
    subtitleEn: 'GCSE / A-Level',
    icon: '👑',
    flag: '🇬🇧',
    color: 'from-sky-500 to-blue-700',
  },
  {
    id: 'germany',
    titleFa: 'آلمان',
    titleEn: 'Germany',
    subtitleFa: 'Abitur / Gymnasium',
    subtitleEn: 'Abitur / Gymnasium',
    icon: '🦅',
    flag: '🇩🇪',
    color: 'from-yellow-500 to-amber-700',
  },
  {
    id: 'california',
    titleFa: 'کالیفرنیا',
    titleEn: 'California',
    subtitleFa: 'ریاضیات آمریکا',
    subtitleEn: 'US Curriculum',
    icon: '🐻',
    flag: '🇺🇸',
    color: 'from-emerald-500 to-teal-700',
  },
  {
    id: 'turkey',
    titleFa: 'ترکیه',
    titleEn: 'Turkey',
    subtitleFa: 'YÖS / MEB',
    subtitleEn: 'YÖS / MEB',
    icon: '🌙',
    flag: '🇹🇷',
    color: 'from-red-600 to-red-800',
  },
  {
    id: 'university',
    titleFa: 'کتاب‌های دانشگاهی',
    titleEn: 'University Textbooks',
    subtitleFa: 'مرجع کتب دانشگاهی',
    subtitleEn: 'Higher Education Textbooks',
    icon: '🏛️',
    flag: '🎓',
    color: 'from-purple-600 to-indigo-800',
  },
];

// پایه‌های ۷ تا ۱۲ با همان استایل کدهای قبلی شما
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
      {/* عنوان اصلی و زیرعنوان */}
      <div className="text-center max-w-3xl mx-auto mb-10">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4 bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent">
          📚 {isFa ? 'کتاب‌های تدریس‌شده' : 'Taught Textbooks'}
        </h2>
        <p className="text-slate-300 text-sm md:text-base leading-relaxed">
          {isFa
            ? 'جهت مشاهده کتاب‌ها، ابتدا سیستم آموزشی/کشور یا بخش دانشگاهی را انتخاب کنید:'
            : 'Select an educational system, country, or university section to view books:'}
        </p>
      </div>

      {/* لیست کارت‌های اولیه با گرادینت و آیکون اختصاصی شما */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto mb-12">
        {categories.map((cat) => (
          <button
            key={cat.id}
            type="button"
            onClick={() => setSelectedCategory(cat.id)}
            className={`p-5 rounded-2xl border text-right transition-all duration-300 relative overflow-hidden group ${
              selectedCategory === cat.id
                ? 'bg-slate-800 border-blue-500 shadow-lg shadow-blue-500/20 ring-2 ring-blue-500'
                : 'bg-slate-800/60 border-slate-700/80 hover:border-slate-500 hover:bg-slate-800'
            }`}
          >
            <div className={`absolute top-0 right-0 left-0 h-1 bg-gradient-to-r ${cat.color}`} />
            <div className="flex items-start justify-between mb-3">
              <span className="text-3xl p-2 rounded-xl bg-slate-700/50 border border-slate-600/50">
                {cat.icon}
              </span>
              <span className="text-2xl">{cat.flag}</span>
            </div>
            <h3 className="font-bold text-lg text-slate-100 group-hover:text-blue-300 transition">
              {isFa ? cat.titleFa : cat.titleEn}
            </h3>
            <p className="text-xs text-slate-400 mt-1">
              {isFa ? cat.subtitleFa : cat.subtitleEn}
            </p>
          </button>
        ))}
      </div>

      {/* بخش مقاطع و کتاب‌ها پس از انتخاب دسته‌بندی */}
      {selectedCategory && (
        <div className="p-6 md:p-8 bg-slate-800/90 rounded-3xl border border-slate-700/80 shadow-2xl max-w-6xl mx-auto backdrop-blur transition-all">
          <div className="flex items-center justify-between border-b border-slate-700 pb-5 mb-8">
            <div className="flex items-center gap-3">
              <span className="text-3xl">{activeCategory?.icon}</span>
              <div>
                <h3 className="text-2xl font-bold text-slate-100">
                  {isFa ? activeCategory?.titleFa : activeCategory?.titleEn}
                </h3>
                <p className="text-xs text-slate-400 mt-0.5">
                  {isFa ? activeCategory?.subtitleFa : activeCategory?.subtitleEn}
                </p>
              </div>
            </div>
            <span className="text-3xl">{activeCategory?.flag}</span>
          </div>

          {selectedCategory === 'university' ? (
            <div className="text-center py-8">
              <p className="text-slate-300 mb-6 text-sm md:text-base">
                {isFa
                  ? 'جهت مشاهده و دریافت مستقیم کتاب‌های دانشگاهی کلیک کنید:'
                  : 'Click below to access and download university textbooks directly:'}
              </p>
              <a
                href={DEFAULT_TELEGRAM}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold rounded-xl shadow-lg shadow-blue-600/30 transition transform hover:-translate-y-0.5"
              >
                <span>✈️</span>
                <span>{isFa ? 'مشاهده در تلگرام' : 'View on Telegram'}</span>
              </a>
            </div>
          ) : (
            <div>
              <p className="text-slate-400 text-xs md:text-sm mb-6">
                {isFa
                  ? 'پایه‌های تحصیلی (برای مشاهده یا دانلود PDF روی پایه مورد نظر کلیک کنید)'
                  : 'Select a grade to view or download the PDF:'}
              </p>

              {/* شبکه پایه‌های ۷ تا ۱۲ برای تمام سیستم‌ها به‌صورت یکسان */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
                {schoolGrades.map((grade) => (
                  <a
                    key={grade.id}
                    href={TELEGRAM_LINKS[grade.id]}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 bg-slate-700/50 hover:bg-slate-700 border border-slate-600/60 hover:border-blue-500/80 rounded-2xl transition group flex flex-col items-center justify-between text-center shadow-sm"
                  >
                    <div className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center text-2xl shadow-inner mb-3 group-hover:scale-110 transition">
                      {grade.icon}
                    </div>
                    <div>
                      <div className="font-bold text-slate-200 text-sm group-hover:text-blue-300 transition">
                        {isFa ? grade.titleFa : grade.titleEn}
                      </div>
                      <div className="text-xs text-slate-400 mt-0.5">
                        {isFa ? grade.subFa : grade.subEn}
                      </div>
                    </div>
                    <span className="mt-4 px-3 py-1 bg-blue-600/20 text-blue-300 text-xs font-semibold rounded-lg border border-blue-500/30 group-hover:bg-blue-600 group-hover:text-white transition">
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
