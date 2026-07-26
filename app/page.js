'use client';
import { useState } from 'react';

// لینک‌های اختصاصی گوگل درایو برای پایه‌های مختلف کمبریج
const CAMBRIDGE_DRIVE_URLS = {
  g7: "https://drive.google.com/file/d/YOUR_GRADE7_DRIVE_ID/view?usp=sharing",
  g8: "https://drive.google.com/file/d/109Lk_VbvwpVMRcv70qMXKKHfAyuAmNF_/view?usp=drive_sdk",
  g9: "https://drive.google.com/file/d/1H7pXLr_yeHDPT-9xCPTWCuufu5NU_fWe/view?usp=drive_sdk",
  g10: "https://drive.google.com/file/d/1L_K_GU80PxUQE2En2degEb6ISBtNWsOZ/view?usp=drive_sdk",
  g11: "https://drive.google.com/file/d/YOUR_GRADE11_DRIVE_ID/view?usp=sharing",
  g12: "https://drive.google.com/file/d/YOUR_GRADE12_DRIVE_ID/view?usp=sharing"
};

// لیست کشورها / سیستم‌ها
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

// لیست مقاطع تحصیلی دانش‌آموزی
const SCHOOL_GRADES = [
  { id: 'g7', titleFa: 'سال هفتم', titleEn: 'Grade 7' },
  { id: 'g8', titleFa: 'سال هشتم', titleEn: 'Grade 8' },
  { id: 'g9', titleFa: 'سال نهم', titleEn: 'Grade 9' },
  { id: 'g10', titleFa: 'سال دهم', titleEn: 'Grade 10' },
  { id: 'g11', titleFa: 'سال یازدهم', titleEn: 'Grade 11' },
  { id: 'g12', titleFa: 'سال دوازدهم', titleEn: 'Grade 12' }
];

export default function Page() {
  const [selectedCategory, setSelectedCategory] = useState('cambridge');

  return (
    <main className="min-h-screen p-6 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center">منابع آموزشی و کتاب‌ها</h1>

        {/* انتخاب دسته‌بندی سیستم آموزشی */}
        <div className="flex flex-wrap gap-3 justify-center mb-10">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-xl font-medium transition-all ${
                selectedCategory === cat.id
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            >
              {cat.titleFa}
            </button>
          ))}
        </div>

        {/* نمایش بخش پایه‌ها در صورت انتخاب کمبریج */}
        {selectedCategory === 'cambridge' && (
          <div>
            <h2 className="text-2xl font-semibold mb-6 text-center">پایه‌های تحصیلی کمبریج</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {SCHOOL_GRADES.map((grade) => (
                <div 
                  key={grade.id}
                  className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden shadow-md hover:shadow-xl transition-all flex flex-col"
                >
                  {/* بخش تصویر جلد پایه تحصیلی */}
                  <div className="h-48 w-full bg-gray-200 dark:bg-gray-700 relative overflow-hidden">
                    <img 
                      src={`/cambridge-${grade.id}.JPG`} 
                      alt={grade.titleFa}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        // تصویر جایگزین در صورت خطا در بارگذاری عکس
                        e.target.src = '/profile.jpg';
                      }}
                    />
                  </div>

                  {/* اطلاعات و دکمه ورود به درایو */}
                  <div className="p-5 flex flex-col flex-grow justify-between">
                    <div>
                      <h3 className="text-lg font-bold mb-1">{grade.titleFa}</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">{grade.titleEn}</p>
                    </div>
                    
                    <a
                      href={CAMBRIDGE_DRIVE_URLS[grade.id]}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-center w-full py-2.5 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-xl transition-colors"
                    >
                      ورود به درایو منابع
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
