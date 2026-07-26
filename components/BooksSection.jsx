'use client';
import { useState } from 'react';

// ۱. لینک‌های مستقیم تلگرام برای پایه‌ها (سال هفتم تا دوازدهم)
const TELEGRAM_LINKS = {
  g7: "https://t.me/International_Maths/1400",
  g8: "https://t.me/International_Maths/1401",
  g9: "https://t.me/International_Maths/1402",
  g10: "https://t.me/International_Maths/1403",
  g11: "https://t.me/International_Maths/1404",
  g12: "https://t.me/International_Maths/1405"
};

// لینک عمومی تلگرام برای بخش دانشگاهی
const UNIVERSITY_TELEGRAM_LINK = "https://t.me/International_Maths";

// ۲. لیست سیستم‌های آموزشی (کشورها + کتاب‌های دانشگاهی)
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

// ۳. مقاطع تحصیلی (سال هفتم تا دوازدهم)
const SCHOOL_GRADES = [
  { id: 'g7', titleFa: 'سال هفتم', titleEn: 'Grade 7' },
  { id: 'g8', titleFa: 'سال هشتم', titleEn: 'Grade 8' },
  { id: 'g9', titleFa: 'سال نهم', titleEn: 'Grade 9' },
  { id: 'g10', titleFa: 'سال دهم', titleEn: 'Grade 10' },
  { id: 'g11', titleFa: 'سال یازدهم', titleEn: 'Grade 11' },
  { id: 'g12', titleFa: 'سال دوازدهم', titleEn: 'Grade 12' }
];

// ۴. کتاب‌های دانشگاهی
const UNIVERSITY_BOOKS = [
  { id: 'u-thomas', titleFa: 'ریاضی عمومی توماس', titleEn: 'Thomas Calculus', image: '/cambridge-g7.JPG' },
  { id: 'u-stewart', titleFa: 'ریاضی عمومی استوارت', titleEn: 'Stewart Calculus', image: '/cambridge-g8.JPG' },
  { id: 'u-stewart-sol', titleFa: 'حل تمرین ریاضی استوارت', titleEn: 'Stewart Calculus Solutions', image: '/cambridge-g9.JPG' },
  { id: 'u-adams', titleFa: 'ریاضی عمومی آدامز', titleEn: 'Adams Calculus', image: '/cambridge-g10.JPG' },
  { id: 'u-adams-sol', titleFa: 'حل تمرین ریاضی آدامز', titleEn: 'Adams Calculus Solutions', image: '/cambridge-g7.JPG' },
  { id: 'u-math2', titleFa: 'ریاضی عمومی ۲', titleEn: 'Calculus 2', image: '/cambridge-g8.JPG' },
  { id: 'u-stat', titleFa: 'آمار و احتمالات مهندسی', titleEn: 'Engineering Statistics & Probability', image: '/cambridge-g9.JPG' },
  { id: 'u-complex', titleFa: 'اعداد مختلط', titleEn: 'Complex Numbers', image: '/cambridge-g10.JPG' },
  { id: 'u-linear', titleFa: 'جبر خطی', titleEn: 'Linear Algebra', image: '/cambridge-g7.JPG' },
  { id: 'u-numerical', titleFa: 'محاسبات عددی', titleEn: 'Numerical Calculations', image: '/cambridge-g8.JPG' },
  { id: 'u-applied', titleFa: 'ریاضی کاربردی', titleEn: 'Applied Mathematics', image: '/cambridge-g9.JPG' }
];

// ۵. ساخت دیتای کتاب‌های مدرسه‌ای برای تمامی کشورها
const COUNTRY_IDS = ['cambridge', 'australia', 'canada', 'uk', 'germany', 'california', 'turkey'];

const SCHOOL_BOOKS = COUNTRY_IDS.flatMap((catId) =>
  SCHOOL_GRADES.map((grade) => ({
    id: `${catId}-${grade.id}`,
    categoryId: catId,
    gradeId: grade.id,
    titleFa: grade.titleFa,
    titleEn: grade.titleEn,
    image: `/cambridge-${grade.id}.JPG`
  }))
);

export default function BooksSection({ lang: externalLang }) {
  // مدیریت داخلی زبان برای فعال بودن دکمه تغییر زبان
  const [internalLang, setInternalLang] = useState('fa');
  const currentLang = externalLang || internalLang;
  const isEn = currentLang === 'en';

  const [selectedCategory, setSelectedCategory] = useState('cambridge');
  const [selectedGrade, setSelectedGrade] = useState('g7');
  const [selectedUniBookId, setSelectedUniBookId] = useState('u-thomas');

  const currentCategory = CATEGORIES.find((c) => c.id === selectedCategory);

  const currentSchoolBook = SCHOOL_BOOKS.find(
    (b) => b.categoryId === selectedCategory && b.gradeId === selectedGrade
  );

  const currentUniBook = UNIVERSITY_BOOKS.find((b) => b.id === selectedUniBookId);

  const isUniversity = selectedCategory === 'university';
  const activeBook = isUniversity ? currentUniBook : currentSchoolBook;
  const activeTelegramLink = isUniversity
    ? UNIVERSITY_TELEGRAM_LINK
    : (TELEGRAM_LINKS[selectedGrade] || UNIVERSITY_TELEGRAM_LINK);

  return (
    <section className="max-w-5xl mx-auto px-4 py-8" id="books" dir={isEn ? 'ltr' : 'rtl'}>
      {/* دکمه سوئیچ زبان (فارسی / English) */}
      <div className="flex justify-end mb-4">
        <button
          onClick={() => setInternalLang(isEn ? 'fa' : 'en')}
          className="px-3 py-1.5 bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs font-bold rounded-lg border border-gray-300 transition-all flex items-center gap-1"
        >
          🌐 {isEn ? 'فارسی' : 'English'}
        </button>
      </div>

      {/* دکمه‌های انتخاب سیستم آموزشی / کشورها */}
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

      {/* بخش انتخاب پایه تحصیلی (سال ۷ تا ۱۲ برای تمامی کشورها) */}
      {!isUniversity && (
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
                {isEn ? grade.titleEn : grade.titleFa}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* بخش انتخاب کتاب‌های دانشگاهی */}
      {isUniversity && (
        <div className="bg-white/80 backdrop-blur-md p-6 rounded-2xl border border-gray-100 shadow-sm mb-8">
          <h3 className="text-center text-gray-700 font-bold mb-4 flex items-center justify-center gap-2">
            <span>🎓</span>
            <span>{isEn ? 'University Textbooks' : 'کتاب‌های دانشگاهی'}</span>
          </h3>

          <div className="flex flex-wrap justify-center gap
