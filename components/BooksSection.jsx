'use client';
import { useState } from 'react';

// ۱. لینک‌های مستقیم تلگرام برای هر پایه
const TELEGRAM_LINKS = {
  g7: "https://t.me/International_Maths/1400",
  g8: "https://t.me/International_Maths/1401",
  g9: "https://t.me/International_Maths/1402",
  g10: "https://t.me/International_Maths/1403",
  g11: "https://t.me/International_Maths/1404",
  g12: "https://t.me/International_Maths/1405"
};

// ۲. لیست کامل دسته‌بندی‌ها (کشورها + کتاب‌های دانشگاهی)
const CATEGORIES = [
  { id: 'cambridge', titleFa: 'کمبریج', titleEn: 'Cambridge' },
  { id: 'australia', titleFa: 'استرالیا', titleEn: 'Australia' },
  { id: 'canada', titleFa: 'کانادا', titleEn: 'Canada' },
  { id: 'uk', titleFa: 'انگلستان', titleEn: 'UK' },
  { id: 'germany', titleFa: 'آلمان', titleEn: 'Germany' },
  { id: 'california', titleFa: 'کالیفرنیا', titleEn: 'California' },
  { id: 'turkey', titleFa: 'ترکیه', titleEn: 'Turkey' },
  { id: 'university', titleFa: 'کتاب‌های دانشگاهی', titleEn: 'University Textbooks' }
];

// ۳. پایه های تحصیلی
const SCHOOL_GRADES = [
  { id: 'g7', titleFa: 'سال هفتم', titleEn: 'Grade 7' },
  { id: 'g8', titleFa: 'سال هشتم', titleEn: 'Grade 8' },
  { id: 'g9', titleFa: 'سال نهم', titleEn: 'Grade 9' },
  { id: 'g10', titleFa: 'سال دهم', titleEn: 'Grade 10' },
  { id: 'g11', titleFa: 'سال یازدهم', titleEn: 'Grade 11' },
  { id: 'g12', titleFa: 'سال دوازدهم', titleEn: 'Grade 12' }
];

// ۴. لیست کتاب‌ها
const BOOKS = [
  { id: 'c-g7', categoryId: 'cambridge', gradeId: 'g7', titleFa: 'سال هفتم', titleEn: 'Grade 7', image: '/cambridge-g7.JPG' },
  { id: 'c-g8', categoryId: 'cambridge', gradeId: 'g8', titleFa: 'سال هشتم', titleEn: 'Grade 8', image: '/cambridge-g8.JPG' },
  { id: 'c-g9', categoryId: 'cambridge', gradeId: 'g9', titleFa: 'سال نهم', titleEn: 'Grade 9', image: '/cambridge-g9.JPG' },
  { id: 'c-g10', categoryId: 'cambridge', gradeId: 'g10', titleFa: 'سال دهم', titleEn: 'Grade 10', image: '/cambridge-g10.JPG' },
  { id: 'c-g11', categoryId: 'cambridge', gradeId: 'g11', titleFa: 'سال یازدهم', titleEn: 'Grade 11', image: '/cambridge-g7.JPG' },
  { id: 'c-g12', categoryId: 'cambridge', gradeId: 'g12', titleFa: 'سال دوازدهم', titleEn: 'Grade 12', image: '/cambridge-g8.JPG' }
];

export default function BooksSection({ lang = 'fa' }) {
  const [selectedCategory, setSelectedCategory] = useState('cambridge');
  const [selectedGrade, setSelectedGrade] = useState('g7');

  const isEn = lang === 'en';
  const currentCategory = CATEGORIES.find((c) => c.id === selectedCategory);
  const currentBook = BOOKS.find(
    (b) => b.categoryId === selectedCategory && b.gradeId === selectedGrade
  );

  // دریافت لینک تلگرام مربوط به پایه انتخابی
  const telegramUrl = TELEGRAM_LINKS[selectedGrade] || "https://t.me/International_Maths";

  return (
    <section className="max-w-5xl mx-auto px-4 py-8" id="books">
      {/* دکمه‌های انتخاب سیستم آموزشی */}
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.id)}
            className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
              selectedCategory === cat.id
                ? 'bg-indigo-900 text-white shadow-md'
                : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-100'
            }`}
          >
            {isEn ? cat.titleEn : cat.titleFa}
          </button>
        ))}
      </div>

      {/* انتخاب پایه تحصیلی */}
      {selectedCategory !== 'university' && (
        <div className="bg-white/80 backdrop-blur-md p-6 rounded-2xl border border-gray-100 shadow-sm mb-8">
          <h3 className="text-center text-gray-700 font-bold mb-4 flex items-center justify-center gap-2">
            <span>🏫</span>
            <span>
              {isEn
                ? `Grades for ${currentCategory?.titleEn}`
                : `پایه‌های تحصیلی مربوط به ${currentCategory?.titleFa}`}
            </span>
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
            {SCHOOL_GRADES.map((grade) => (
              <button
                key={grade.id}
                onClick={() => setSelectedGrade(grade.id)}
                className={`py-3 px-2 rounded-xl text-sm font-medium transition-all ${
                  selectedGrade === grade.id
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
                }`}
              >
                {isEn ? grade.titleEn : grade.titleFa}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* نمایش کارت کتاب و دکمه جدید تلگرام */}
      {currentBook && (
        <div className="flex justify-center">
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm max-w-sm w-full text-center">
            <img
              src={currentBook.image}
              alt={isEn ? currentBook.titleEn : currentBook.titleFa}
              className="w-48 h-64 object-cover mx-auto rounded-xl shadow-md mb-4"
            />
            <h4 className="font-bold text-gray-800 text-lg mb-1">
              {isEn ? currentBook.titleEn : currentBook.titleFa}
            </h4>
            <p className="text-xs text-gray-500 mb-6">
              {isEn ? 'Complete version with solutions' : 'نسخه کامل همراه با حل تمرینات'}
            </p>

            {/* دکمه اختصاصی تلگرام */}
            <a
              href={telegramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 px-4 bg-[#24A1DE] hover:bg-[#1d82b3] text-white font-medium rounded-xl flex items-center justify-center gap-2 transition-all shadow-sm"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm5.56 8.16l-2.02 9.52c-.15.68-.55.85-1.12.53l-3.08-2.27-1.48 1.43c-.16.16-.3.3-.62.3l.22-3.13 5.71-5.16c.25-.22-.05-.34-.38-.12l-7.06 4.44-3.04-.95c-.66-.21-.67-.66.14-.98l11.89-4.58c.55-.2 1.03.13.84.97z" />
              </svg>
              <span>{isEn ? 'International Mathematics' : 'آموزش بین‌المللی ریاضیات'}</span>
            </a>
          </div>
        </div>
      )}
    </section>
  );
}
