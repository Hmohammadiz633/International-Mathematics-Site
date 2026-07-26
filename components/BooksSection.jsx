'use client';
import { useState, useEffect } from 'react';

// ۱. لینک‌های تلگرام برای پایه‌ها (سال ۷ تا ۱۲)
const TELEGRAM_LINKS = {
  g7: "https://t.me/International_Maths/1400",
  g8: "https://t.me/International_Maths/1401",
  g9: "https://t.me/International_Maths/1402",
  g10: "https://t.me/International_Maths/1403",
  g11: "https://t.me/International_Maths/1404",
  g12: "https://t.me/International_Maths/1405"
};

const DEFAULT_TELEGRAM = "https://t.me/International_Maths";

// ۲. لیست تمام کشورها + بخش دانشگاهی
const categories = [
  { id: 'cambridge', titleFa: 'کمبریج', titleEn: 'Cambridge' },
  { id: 'australia', titleFa: 'استرالیا', titleEn: 'Australia' },
  { id: 'canada', titleFa: 'کانادا', titleEn: 'Canada' },
  { id: 'uk', titleFa: 'انگلستان', titleEn: 'UK' },
  { id: 'germany', titleFa: 'آلمان', titleEn: 'Germany' },
  { id: 'california', titleFa: 'کالیفرنیا', titleEn: 'California' },
  { id: 'turkey', titleFa: 'ترکیه', titleEn: 'Turkey' },
  { id: 'university', titleFa: 'کتاب‌های دانشگاهی', titleEn: 'University Textbooks' }
];

// ۳. سال هفتم تا دوازدهم
const schoolGrades = [
  { id: 'g7', titleFa: 'سال هفتم', titleEn: 'Grade 7' },
  { id: 'g8', titleFa: 'سال هشتم', titleEn: 'Grade 8' },
  { id: 'g9', titleFa: 'سال نهم', titleEn: 'Grade 9' },
  { id: 'g10', titleFa: 'سال دهم', titleEn: 'Grade 10' },
  { id: 'g11', titleFa: 'سال یازدهم', titleEn: 'Grade 11' },
  { id: 'g12', titleFa: 'سال دوازدهم', titleEn: 'Grade 12' }
];

// ۴. تمامی ۱۱ کتاب دانشگاهی درخواستی
const universityBooks = [
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

export default function BooksSection({ lang: propLang }) {
  const [currentLang, setCurrentLang] = useState(propLang || 'fa');
  const [activeCategory, setActiveCategory] = useState('cambridge');
  const [activeGrade, setActiveGrade] = useState('g7');
  const [activeUniBookId, setActiveUniBookId] = useState('u-thomas');

  // آپدیت خودکار با تغییر زبان از هدر سایت
  useEffect(() => {
    if (propLang) {
      setCurrentLang(propLang);
    }
  }, [propLang]);

  const isEn = currentLang === 'en';
  const isUni = activeCategory === 'university';

  const currentCategory = categories.find((c) => c.id === activeCategory);
  const currentSchoolGrade = schoolGrades.find((g) => g.id === activeGrade);
  const currentUniBook = universityBooks.find((b) => b.id === activeUniBookId);

  const bookTitle = isUni
    ? (isEn ? currentUniBook?.titleEn : currentUniBook?.titleFa)
    : (isEn ? `${currentCategory?.titleEn} - ${currentSchoolGrade?.titleEn}` : `${currentCategory?.titleFa} - ${currentSchoolGrade?.titleFa}`);

  const bookImage = isUni ? currentUniBook?.image : `/cambridge-${activeGrade}.JPG`;
  const telegramUrl = isUni ? DEFAULT_TELEGRAM : (TELEGRAM_LINKS[activeGrade] || DEFAULT_TELEGRAM);

  return (
    <section className="max-w-5xl mx-auto px-4 py-8" id="books" dir={isEn ? 'ltr' : 'rtl'}>
      {/* دکمه اختصاصی سوییچ زبان جهت اطمینان ۱۰۰٪ */}
      <div className="flex justify-end mb-4">
        <button
          type="button"
          onClick={() => setCurrentLang(isEn ? 'fa' : 'en')}
          className="px-3 py-1.5 bg-indigo-50 hover:bg-indigo-100 text-indigo-900 text-xs font-bold rounded-lg border border-indigo-200 transition-all shadow-sm"
        >
          🌐 {isEn ? 'فارسی' : 'English'}
        </button>
      </div>

      {/* ۱. انتخاب سیستم آموزشی (کشورها) */}
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {categories.map((cat) => (
          <button
            key={cat.id}
            type="button"
            onClick={() => setActiveCategory(cat.id)}
            className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
              activeCategory === cat.id
                ? 'bg-indigo-900 text-white shadow-md'
                : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-100'
            }`}
          >
            {isEn ? cat.titleEn : cat.titleFa}
          </button>
        ))}
      </div>

      {/* ۲. دکمه‌های سال ۷ تا ۱۲ برای تمام کشورها */}
      {!isUni && (
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
            {schoolGrades.map((grade) => (
              <button
                key={grade.id}
                type="button"
                onClick={() => setActiveGrade(grade.id)}
                className={`py-3 px-2 rounded-xl text-sm font-medium transition-all ${
                  activeGrade === grade.id
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

      {/* ۳. دکمه‌های کتاب‌های دانشگاهی */}
      {isUni && (
        <div className="bg-white/80 backdrop-blur-md p-6 rounded-2xl border border-gray-100 shadow-sm mb-8">
          <h3 className="text-center text-gray-700 font-bold mb-4 flex items-center justify-center gap-2">
            <span>🎓</span>
            <span>{isEn ? 'University Textbooks' : 'کتاب‌های دانشگاهی'}</span>
          </h3>

          <div className="flex flex-wrap justify-center gap-2">
            {universityBooks.map((uBook) => (
              <button
                key={uBook.id}
                type="button"
                onClick={() => setActiveUniBookId(uBook.id)}
                className={`py-2.5 px-3.5 rounded-xl text-sm font-medium transition-all ${
                  activeUniBookId === uBook.id
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
                }`}
              >
                {isEn ? uBook.titleEn : uBook.titleFa}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* ۴. کارت نمایش کتاب و لینک تلگرام */}
      <div className="flex justify-center">
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm max-w-sm w-full text-center">
          <img
            src={bookImage}
            alt={bookTitle || 'Book'}
            className="w-48 h-64 object-cover mx-auto rounded-xl shadow-md mb-4"
            onError={(e) => {
              e.currentTarget.src = '/cambridge-g7.JPG';
            }}
          />
          <h4 className="font-bold text-gray-800 text-lg mb-1">{bookTitle}</h4>
          <p className="text-xs text-gray-500 mb-6">
            {isEn ? 'Complete version with solutions' : 'نسخه کامل همراه با حل تمرینات'}
          </p>

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
    </section>
  );
}
