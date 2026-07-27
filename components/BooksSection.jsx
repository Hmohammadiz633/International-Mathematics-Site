'use client';

import { useState } from 'react';

// لینک‌های تلگرام اختصاصی برای هر پایه
const TELEGRAM_LINKS = {
  g7: "https://t.me/International_Maths/1400",
  g8: "https://t.me/International_Maths/1401",
  g9: "https://t.me/International_Maths/1402",
  g10: "https://t.me/International_Maths/1403",
  g11: "https://t.me/International_Maths/1404",
  g12: "https://t.me/International_Maths/1405",
};

const DEFAULT_TELEGRAM = "https://t.me/International_Maths";

// همان لیست دسته‌بندی‌ها و کشورها از کدهای اصلی شما
const categories = [
  { id: 'cambridge', titleFa: 'سیستم آموزشی کمبریج', titleEn: 'Cambridge Curriculum', flag: '🇬🇧' },
  { id: 'australia', titleFa: 'ریاضیات استرالیا', titleEn: 'Australian Mathematics', flag: '🇦🇺' },
  { id: 'canada', titleFa: 'ریاضیات کانادا', titleEn: 'Canadian Mathematics', flag: '🇨🇦' },
  { id: 'uk', titleFa: 'انگلستان (GCSE / A-Level)', titleEn: 'UK (GCSE / A-Level)', flag: '🇬🇧' },
  { id: 'germany', titleFa: 'ریاضیات آلمان (Abitur)', titleEn: 'Germany (Abitur)', flag: '🇩🇪' },
  { id: 'california', titleFa: 'ریاضیات کالیفرنیا (آمریکا)', titleEn: 'California Math (USA)', flag: '🇺🇸' },
  { id: 'turkey', titleFa: 'ریاضیات ترکیه (YÖS / MEB)', titleEn: 'Turkey (YÖS / MEB)', flag: '🇹🇷' },
  { id: 'university', titleFa: 'کتاب‌های دانشگاهی', titleEn: 'University Textbooks', flag: '🎓' },
];

// سال هفتم تا دوازدهم (پایه‌های کامل مشابه کمبریج)
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
    <section className="py-6">
      {/* عنوان اصلی و توضیحات */}
      <div className="text-center max-w-3xl mx-auto mb-8">
        <h2 className="text-3xl font-extrabold text-indigo-950 mb-3 flex items-center justify-center gap-2">
          <span>📚</span>
          <span>{isFa ? 'کتاب‌های تدریس‌شده' : 'Taught Textbooks'}</span>
        </h2>
        <p className="text-gray-600 text-sm md:text-base leading-relaxed">
          {isFa
            ? 'جهت مشاهده کتاب‌ها، ابتدا سیستم آموزشی/کشور یا بخش دانشگاهی را انتخاب کنید:'
            : 'Select an educational system, country, or university section to view books:'}
        </p>
      </div>

      {/* شبکه دکمه‌ها و پرچم‌های اصلی پروژه‌تان */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 max-w-5xl mx-auto mb-10">
        {categories.map((cat) => (
          <button
            key={cat.id}
            type="button"
            onClick={() => setSelectedCategory(cat.id)}
            className={`p-4 rounded-2xl border text-center transition-all flex flex-col items-center justify-center gap-2 shadow-sm ${
              selectedCategory === cat.id
                ? 'bg-indigo-900 text-white border-indigo-900 shadow-md scale-105'
                : 'bg-white text-gray-800 border-gray-200 hover:border-indigo-300 hover:shadow-md'
            }`}
          >
            <span className="text-3xl">{cat.flag}</span>
            <span className="font-bold text-sm md:text-base">
              {isFa ? cat.titleFa : cat.titleEn}
            </span>
          </button>
        ))}
      </div>

      {/* نمایش مقاطع و کتاب‌ها پس از انتخاب دسته‌بندی */}
      {selectedCategory && (
        <div className="p-6 md:p-8 bg-white rounded-3xl shadow-md border border-gray-100 max-w-5xl mx-auto transition-all">
          <div className="flex items-center justify-center gap-2 mb-6 border-b pb-4">
            <span className="text-2xl">{activeCategory?.flag}</span>
            <h3 className="text-2xl font-bold text-indigo-950">
              {isFa ? activeCategory?.titleFa : activeCategory?.titleEn}
            </h3>
          </div>

          {selectedCategory === 'university' ? (
            <div className="text-center py-6">
              <p className="text-gray-600 mb-6">
                {isFa
                  ? 'جهت مشاهده و دریافت کتاب‌های دانشگاهی کلیک کنید:'
                  : 'Click below to view and download university textbooks:'}
              </p>
              <a
                href={DEFAULT_TELEGRAM}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-blue-600 text-white font-bold rounded-xl shadow-lg hover:bg-blue-700 transition scale-105"
              >
                <span>✈️</span>
                <span>{isFa ? 'مشاهده در تلگرام' : 'View on Telegram'}</span>
              </a>
            </div>
          ) : (
            <div>
              <p className="text-center text-gray-500 text-sm mb-6">
                {isFa
                  ? 'پایه‌های تحصیلی (برای مشاهده یا دانلود PDF روی پایه مورد نظر کلیک کنید)'
                  : 'Select a grade to view or download the PDF:'}
              </p>

              {/* آیکون‌ها و لینک‌های دانلود مانند کمبریج برای همه کشورها (سال ۷ تا ۱۲) */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
                {schoolGrades.map((grade) => (
                  <a
                    key={grade.id}
                    href={TELEGRAM_LINKS[grade.id]}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 bg-indigo-50/50 rounded-2xl border border-indigo-100 hover:border-indigo-400 hover:bg-indigo-100/60 transition group flex flex-col items-center justify-between text-center shadow-sm"
                  >
                    <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center text-2xl shadow-sm mb-3 group-hover:scale-110 transition">
                      {grade.icon}
                    </div>
                    <div>
                      <div className="font-bold text-indigo-950 text-sm">
                        {isFa ? grade.titleFa : grade.titleEn}
                      </div>
                      <div className="text-xs text-gray-500 mt-0.5">
                        {isFa ? grade.subFa : grade.subEn}
                      </div>
                    </div>
                    <span className="mt-3 px-3 py-1 bg-white text-indigo-700 text-xs font-semibold rounded-lg shadow-xs group-hover:bg-indigo-600 group-hover:text-white transition">
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
