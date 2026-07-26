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

// ۲. لیست سیستم‌های آموزشی (کشورها)
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

// ۳. لیست مقاطع تحصیلی
const SCHOOL_GRADES = [
  { id: 'g7', titleFa: 'سال هفتم', titleEn: 'Grade 7' },
  { id: 'g8', titleFa: 'سال هشتم', titleEn: 'Grade 8' },
  { id: 'g9', titleFa: 'سال نهم', titleEn: 'Grade 9' },
  { id: 'g10', titleFa: 'سال دهم', titleEn: 'Grade 10' },
  { id: 'g11', titleFa: 'سال یازدهم', titleEn: 'Grade 11' },
  { id: 'g12', titleFa: 'سال دوازدهم', titleEn: 'Grade 12' }
];

// ۴. دیتا و تصاویر کتاب‌ها
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

  // گرفتن لینک تلگرام مربوط به پایه انتخاب‌شده
  const currentTelegramLink = TELEGRAM_LINKS[selectedGrade] || "https://t.me/International_Maths";

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
                ? `Grades for ${currentCategory?.titleEn || ''}`
                : `پایه‌های تحصیلی مربوط به ${currentCategory?.titleFa || ''}`}
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
                {isEn ? grade.titleEn : grade.
