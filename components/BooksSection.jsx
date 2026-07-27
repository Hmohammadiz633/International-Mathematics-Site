'use client';

import { useState } from 'react';

// لینک‌های اختصاصی تلگرام برای هر پایه
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
  { id: 'cambridge', titleFa: 'کمبریج', titleEn: 'Cambridge' },
  { id: 'australia', titleFa: 'استرالیا', titleEn: 'Australia' },
  { id: 'canada', titleFa: 'کانادا', titleEn: 'Canada' },
  { id: 'uk', titleFa: 'انگلستان', titleEn: 'UK' },
  { id: 'germany', titleFa: 'آلمان', titleEn: 'Germany' },
  { id: 'california', titleFa: 'کالیفرنیا', titleEn: 'California' },
  { id: 'turkey', titleFa: 'ترکیه', titleEn: 'Turkey' },
  { id: 'university', titleFa: 'کتاب‌های دانشگاهی', titleEn: 'University Textbooks' },
];

const schoolGrades = [
  { id: 'g7', titleFa: 'سال هفتم', titleEn: 'Grade 7' },
  { id: 'g8', titleFa: 'سال هشتم', titleEn: 'Grade 8' },
  { id: 'g9', titleFa: 'سال نهم', titleEn: 'Grade 9' },
  { id: 'g10', titleFa: 'سال دهم', titleEn: 'Grade 10' },
  { id: 'g11', titleFa: 'سال یازدهم', titleEn: 'Grade 11' },
  { id: 'g12', titleFa: 'سال دوازدهم', titleEn: 'Grade 12' },
];

export default function BooksSection({ lang = 'fa' }) {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const isFa = lang === 'fa';

  return (
    <section className="py-8 text-center">
      <h2 className="text-3xl font-bold mb-3">
        📚 {isFa ? 'کتاب‌های تدریس‌شده' : 'Taught Books'}
      </h2>
      <p className="text-gray-600 dark:text-gray-400 mb-8">
        {isFa 
          ? 'جهت مشاهده کتاب‌ها، ابتدا سیستم آموزشی/کشور یا بخش دانشگاهی را انتخاب کنید:' 
          : 'Select an educational system, country, or university section to view books:'}
      </p>

      {/* لیست دکمه‌های کشورهای انتخابی */}
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.id)}
            className={`px-5 py-2.5 rounded-xl border transition-all font-medium ${
              selectedCategory === cat.id
                ? 'bg-indigo-900 text-white border-indigo-900 shadow-md scale-105'
                : 'bg-white text-gray-700 border-gray-200 hover:bg-gray-100 hover:border-gray-300'
            }`}
          >
            📖 {isFa ? cat.titleFa : cat.titleEn}
          </button>
        ))}
      </div>

      {/* نمایش مقاطع و لینک‌ها پس از انتخاب کشور */}
      {selectedCategory && (
        <div className="p-6 bg-white rounded-2xl shadow-sm border border-gray-200 max-w-5xl mx-auto transition-all">
          {selectedCategory === 'university' ? (
            <div className="py-4">
              <h3 className="text-xl font-bold mb-4 text-indigo-900">
                🎓 {isFa ? 'کتاب‌های دانشگاهی' : 'University Textbooks'}
              </h3>
              <a
                href={DEFAULT_TELEGRAM}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 bg-indigo-900 text-white font-medium rounded-xl shadow hover:bg-indigo-800 transition"
              >
                {isFa ? 'مشاهده در تلگرام' : 'View on Telegram'}
              </a>
            </div>
          ) : (
            <div>
              <h3 className="text-xl font-bold mb-6 text-indigo-900">
                {isFa ? 'مقاطع تحصیلی' : 'School Grades'}
              </h3>
              {/* آیکون و لینک سال هفتم تا دوازدهم برای همه کشورها */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
                {schoolGrades.map((grade) => (
                  <a
                    key={grade.id}
                    href={TELEGRAM_LINKS[grade.id]}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 bg-gray-50 rounded-xl hover:bg-indigo-50 border border-gray-200 hover:border-indigo-200 transition group flex flex-col items-center justify-between"
                  >
                    <div className="text-3xl mb-2">📘</div>
                    <div className="font-semibold text-gray-800 group-hover:text-indigo-900">
                      {isFa ? grade.titleFa : grade.titleEn}
                    </div>
                    <span className="text-xs text-indigo-600 font-medium underline mt-3">
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
