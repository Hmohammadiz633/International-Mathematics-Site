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

// ۲. لینک عمومی تلگرام برای کتاب‌های دانشگاهی (در صورت نیاز می‌توانید برای هر کتاب لینک مجزا بگذارید)
const UNIVERSITY_TELEGRAM_LINK = "https://t.me/International_Maths";

// ۳. لیست سیستم‌های آموزشی (کشورها + دانشگاهی)
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

// ۴. لیست مقاطع تحصیلی دانش‌آموزی (سال هفتم تا دوازدهم)
const SCHOOL_GRADES = [
  { id: 'g7', titleFa: 'سال هفتم', titleEn: 'Grade 7' },
  { id: 'g8', titleFa: 'سال هشتم', titleEn: 'Grade 8' },
  { id: 'g9', titleFa: 'سال نهم', titleEn: 'Grade 9' },
  { id: 'g10', titleFa: 'سال دهم', titleEn: 'Grade 10' },
  { id: 'g11', titleFa: 'سال یازدهم', titleEn: 'Grade 11' },
  { id: 'g12', titleFa: 'سال دوازدهم', titleEn: 'Grade 12' }
];

// ۵. لیست کتاب‌های دانشگاهی درخواستی
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

// ۶. ساخت دیتای پایه‌های تحصیلی برای تمامی کشورها
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

export default function BooksSection({ lang = 'fa' }) {
  const [selectedCategory, setSelectedCategory] = useState('cambridge');
  const [selectedGrade, setSelectedGrade] = useState('g7');
  const [selectedUniBookId, setSelectedUniBookId] = useState('u-thomas');

  const isEn = lang === 'en';
  const currentCategory = CATEGORIES.find((c) => c.id === selectedCategory);

  // پیدا کردن کتاب دانش‌آموزی فعال
  const currentSchoolBook = SCHOOL_BOOKS.find(
    (b) => b.categoryId === selectedCategory && b.gradeId === selectedGrade
  );

  // پیدا کردن کتاب دانشگاهی فعال
  const currentUniBook = UNIVERSITY_BOOKS.find((b) => b.id === selectedUniBookId);

  // انتخاب کتاب و لینک بر اساس حالت (دانشگاهی یا مدرسه‌ای)
  const isUniversity = selectedCategory === 'university';
  const activeBook = isUniversity ? currentUniBook : currentSchoolBook;
  const activeTelegramLink = isUniversity
    ? UNIVERSITY_TELEGRAM_LINK
    : (TELEGRAM_LINKS[selectedGrade] || UNIVERSITY_TELEGRAM_LINK);

  return (
    <section className="max-w-5xl mx-auto px-4 py-8" id="books">
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

      {/* بخش انتخاب مقطع تحصیلی مدرسه (سال ۷ تا ۱۲) */}
      {!is
