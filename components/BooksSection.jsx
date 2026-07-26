'use client';
import { useState } from 'react';

const TELEGRAM_LINKS = {
  g7: "https://t.me/International_Maths/1400",
  g8: "https://t.me/International_Maths/1401",
  g9: "https://t.me/International_Maths/1402",
  g10: "https://t.me/International_Maths/1403",
  g11: "https://t.me/International_Maths/1404",
  g12: "https://t.me/International_Maths/1405"
};

const CATEGORIES = [
  { id: 'cambridge', titleFa: 'کمبریج' },
  { id: 'australia', titleFa: 'استرالیا' },
  { id: 'canada', titleFa: 'کانادا' },
  { id: 'uk', titleFa: 'انگلستان' },
  { id: 'germany', titleFa: 'آلمان' },
  { id: 'california', titleFa: 'کالیفرنیا' },
  { id: 'turkey', titleFa: 'ترکیه' },
  { id: 'university', titleFa: 'کتاب‌های دانشگاهی' }
];

const SCHOOL_GRADES = [
  { id: 'g7', titleFa: 'سال هفتم' },
  { id: 'g8', titleFa: 'سال هشتم' },
  { id: 'g9', titleFa: 'سال نهم' },
  { id: 'g10', titleFa: 'سال دهم' },
  { id: 'g11', titleFa: 'سال یازدهم' },
  { id: 'g12', titleFa: 'سال دوازدهم' }
];

export default function BooksSection() {
  const [selectedCategory, setSelectedCategory] = useState('cambridge');
  const [selectedGrade, setSelectedGrade] = useState('g7');

  return (
    <section id="books" className="py-12 px-4 max-w-6xl mx-auto">
      <div className="text-center mb-10">
        <h3 className="text-2xl font-bold mb-3 text-indigo-950 flex items-center justify-center gap-2">
          <span>📚</span> کتاب‌های تدریس‌شده
        </h3>
        <p className="text-gray-500 text-sm">جهت مشاهده کتاب‌ها، ابتدا سیستم آموزشی/کشور یا بخش دانشگاهی را انتخاب کنید:</p>
      </div>

      <div className="flex flex-wrap gap-3 justify-center mb-8">
        {CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.id)}
            className={`px-5 py-3 rounded-xl font-medium transition-all shadow-sm flex items-center gap-2 ${
              selectedCategory === cat.id
                ? 'bg-indigo-900 text-white shadow-md'
                : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50'
            }`}
          >
            <span>📖</span>
            <span>{cat.titleFa}</span>
          </button>
        ))}
      </div>

      {selectedCategory === 'cambridge' && (
        <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-gray-200 max-w-4xl mx-auto">
          <h4 className="text-xl font-semibold mb-6 text-center text-indigo-900">🏛️ پایه‌های تحصیلی مربوط به کمبریج</h4>
          
          <div className="flex flex-wrap gap-2 justify-center mb-8">
            {SCHOOL_GRADES.map((grade) => (
              <button
                key={grade.id}
                onClick={() => setSelectedGrade(grade.id)}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                  selectedGrade === grade.id
                    ? 'bg-blue-600 text-white shadow'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {grade.titleFa}
              </button>
            ))}
          </div>

          {SCHOOL_GRADES.filter(g => g.id === selectedGrade).map((grade) => {
            const currentTelegramUrl = TELEGRAM_LINKS[grade.id] || "https://t.me/International_Maths";

            return (
              <div key={grade.id} className="flex flex-col items-center text-center">
                <div className="w-64 h-80 bg-gray-100 rounded-2xl overflow-hidden shadow-md border border-gray-200 mb-4 relative">
                  <img 
                    src={`/cambridge-${grade.id}.jpg`} 
                    alt={grade.titleFa}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      if (e.target.src.endsWith('.jpg')) {
                        e.target.src = `/cambridge-${grade.id}.JPG`;
                      } else {
                        e.target.src = '/profile.jpg';
                      }
                    }}
                  />
                </div>
                <h5 className="text-xl font-bold text-indigo-950 mb-1">{grade.titleFa}</h5>
                <p className="text-sm text-gray-500 mb-6">نسخه کامل همراه با حل تمرینات</p>

                <a
                  href={currentTelegramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-sky-500 hover:bg-sky-600 text-white font-medium rounded-xl transition-all shadow-md text-sm cursor-pointer"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm5.56 8.16l-2.02 9.52c-.15.68-.55.84-1.12.52l-3.1-2.28-1.5 1.44c-.17.17-.31.31-.63.31l.22-3.17 5.77-5.21c.25-.22-.05-.34-.39-.12l-7.13 4.49-3.08-.96c-.67-.21-.68-.67.14-.99l12.03-4.64c.56-.2 1.05.14.83 1.09z" />
                  </svg>
                  <span>دانلود فایل PDF از گروه تلگرامی آموزش بین المللی ریاضیات</span>
                </a>
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
}
