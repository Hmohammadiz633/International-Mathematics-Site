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

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState('cambridge');

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans rtl" dir="rtl">
      {/* هدر سایت */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <nav className="flex gap-6 text-sm md:text-base font-medium text-gray-600">
            <a href="#about" className="hover:text-blue-600 transition-colors">درباره من</a>
            <a href="#books" className="hover:text-blue-600 transition-colors">کتاب‌های تدریس‌شده</a>
            <a href="#services" className="hover:text-blue-600 transition-colors">خدمات تدریس</a>
            <a href="#resume" className="hover:text-blue-600 transition-colors">رزومه</a>
            <a href="#contact" className="hover:text-blue-600 transition-colors">تماس با ما</a>
          </nav>
          <div className="border border-gray-300 rounded-full px-3 py-1 text-sm text-gray-600 cursor-pointer flex items-center gap-1">
            <span>English</span>
            <span>🌐</span>
          </div>
        </div>
      </header>

      {/* بخش معرفی اصلی (Hero Section) */}
      <section className="bg-indigo-950 text-white py-16 px-4 text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          <div className="w-36 h-36 md:w-44 md:h-44 rounded-full overflow-hidden border-4 border-white/20 shadow-xl mb-6">
            <img src="/profile.jpg" alt="دکتر هادی محمدی" className="w-full h-full object-cover" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">آموزش بین‌المللی ریاضیات</h1>
          <h2 className="text-xl md:text-2xl font-medium mb-3 text-indigo-200">دکتر هادی محمدی</h2>
          <p className="text-base md:text-lg text-indigo-100 font-light mb-2">عضو هیئت علمی دانشگاه و مدرس آنلاین ریاضی</p>
          <p className="text-sm text-indigo-300">ویژه ایرانیان خارج از کشور (آمریکا، کانادا، اروپا، استرالیا و انگلستان)</p>
        </div>
      </section>

      {/* درباره من */}
      <section id="about" className="py-12 px-4 max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-indigo-950">
            <span>👤</span> درباره من
          </h3>
          <p className="leading-relaxed text-gray-600 text-justify">
            اینجانب دکتر هادی محمدی، دارای مدرک دکتری تخصصی ریاضی از دانشگاه صنعتی امیرکبیر (پلی‌تکنیک تهران) و عضو هیئت علمی دانشگاه با ۲۹ سال سابقه تدریس هستم. با سال‌ها تجربه در امر تدریس دانشگاهی و مدارس برتر، تخصص ویژه‌ای در آموزش آنلاین ریاضیات (از مقطع دبیرستان تا دانشگاه، شامل سیستم‌های IB، AP، A-Level و دروس دانشگاهی) به دانش‌آموزان و دانشجویان ایرانی مقیم خارج از کشور دارم.
          </p>
        </div>
      </section>

      {/* کتاب‌های تدریس شده */}
      <section id="books" className="py-12 px-4 max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h3 className="text-2xl font-bold mb-3 text-indigo-950 flex items-center justify-center gap-2">
            <span>📚</span> کتاب‌های تدریس‌شده
          </h3>
          <p className="text-gray-500 text-sm">جهت مشاهده کتاب‌ها، ابتدا سیستم آموزشی/کشور یا بخش دانشگاهی را انتخاب کنید:</p>
        </div>

        {/* دکمه‌های دسته‌بندی */}
        <div className="flex flex-wrap gap-3 justify-center mb-12">
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

        {/* نمایش پایه‌های کمبریج */}
        {selectedCategory === 'cambridge' && (
          <div>
            <h4 className="text-xl font-semibold mb-6 text-center text-indigo-900">پایه‌های تحصیلی کمبریج</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {SCHOOL_GRADES.map((grade) => (
                <div 
                  key={grade.id}
                  className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col"
                >
                  {/* عکس جلد پایه با سیستم پشتیبان در صورت خطای بارگذاری */}
                  <div className="h-48 w-full bg-gray-100 relative overflow-hidden">
                    <img 
                      src={`/cambridge-${grade.id}.JPG`} 
                      alt={grade.titleFa}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        // اگر عکس با پسوند .JPG پیدا نشد، .jpg را امتحان می‌کند یا پروفایل را نشان می‌دهد
                        if (e.target.src.endsWith('.JPG')) {
                          e.target.src = `/cambridge-${grade.id}.jpg`;
                        } else {
                          e.target.src = '/profile.jpg';
                        }
                      }}
                    />
                  </div>

                  <div className="p-5 flex flex-col flex-grow justify-between">
                    <div>
                      <h5 className="text-lg font-bold mb-1 text-indigo-950">{grade.titleFa}</h5>
                      <p className="text-xs text-gray-400 mb-4">{grade.titleEn}</p>
                    </div>
                    
                    <a
                      href={CAMBRIDGE_DRIVE_URLS[grade.id]}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-center w-full py-2.5 px-4 bg-indigo-900 hover:bg-indigo-800 text-white font-medium rounded-xl transition-colors text-sm"
                    >
                      ورود به درایو منابع
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </section>

      {/* خدمات تدریس */}
      <section id="services" className="py-12 px-4 max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100 text-center">
          <h3 className="text-xl font-bold mb-3 text-indigo-950">خدمات تدریس آنلاین</h3>
          <p className="text-gray-600 leading-relaxed">
            برگزاری کلاس‌های خصوصی و نیمه‌خصوصی ریاضی با متدهای نوین آموزشی و متناسب با سیستم آموزشی کشور محل اقامت شما.
          </p>
        </div>
      </section>

      {/* سوابق علمی */}
      <section id="resume" className="py-12 px-4 max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100">
          <h3 className="text-xl font-bold mb-6 text-indigo-950 flex items-center justify-center gap-2">
            <span>🎗️</span> سوابق علمی و پژوهشی
          </h3>
          <ul className="space-y-4 text-gray-700">
            <li className="flex items-center gap-3 border-b border-gray-100 pb-3">
              <span className="text-blue-600 font-bold">✓</span>
              <span>دکتری تخصصی ریاضی از دانشگاه صنعتی امیرکبیر (پلی‌تکنیک تهران)</span>
            </li>
            <li className="flex items-center gap-3 border-b border-gray-100 pb-3">
              <span className="text-blue-600 font-bold">✓</span>
              <span>عضو هیئت علمی دانشگاه با ۲۹ سال سابقه تدریس</span>
            </li>
            <li className="flex items-center gap-3 border-b border-gray-100 pb-3">
              <span className="text-blue-600 font-bold">✓</span>
              <span>تألیف چندین مقاله علمی پژوهشی در ژورنال‌های معتبر بین‌المللی</span>
            </li>
            <li className="flex items-center gap-3 pb-1">
              <span className="text-blue-600 font-bold">✓</span>
              <span>مدرس دوره‌های تخصصی ریاضیات دانشگاهی و دبیرستان</span>
            </li>
          </ul>
        </div>
      </section>

      {/* ارتباط با ما */}
      <section id="contact" className="py-12 px-4 max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold mb-2 text-indigo-950">ارتباط با استاد</h3>
          <p className="text-gray-500 text-sm">جهت رزرو وقت مشاوره، کلاس‌های آنلاین و ارسال پیام می‌توانید از طریق راه‌های زیر در ارتباط باشید:</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex items-center justify-between">
            <div className="text-right">
              <span className="text-xs text-gray-400 block">کانال و آیدی تلگرام</span>
              <span className="font-bold text-indigo-950">آموزش بین‌المللی ریاضیات</span>
            </div>
            <span className="bg-blue-50 text-blue-600 px-3 py-1 rounded-lg text-xs font-mono">@International_Maths</span>
          </div>

          <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex items-center justify-between">
            <div className="text-right">
              <span className="text-xs text-gray-400 block">صفحه اینستاگرام</span>
              <span className="font-bold text-indigo-950">Hadi_mohammadi_zarandini</span>
            </div>
            <span className="bg-pink-50 text-pink-600 px-3 py-1 rounded-lg text-xs font-mono">@Hadi...</span>
          </div>

          <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex items-center justify-between">
            <div className="text-right">
              <span className="text-xs text-gray-400 block">آدرس پست الکترونیکی</span>
              <span className="font-bold text-indigo-950">ارسال ایمیل به استاد</span>
            </div>
            <span className="bg-red-50 text-red-600 px-3 py-1 rounded-lg text-xs font-mono">Hadi.mohammadi...</span>
          </div>

          <div className="bg-white p-4 thead bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex items-center justify-between">
            <div className="text-right">
              <span className="text-xs text-gray-400 block">شماره تلفن / واتساپ</span>
              <span className="font-bold text-indigo-950">تماس مستقیم با استاد</span>
            </div>
            <span className="bg-green-50 text-green-600 px-3 py-1 rounded-lg text-xs font-mono">+98 912 310 4844</span>
          </div>
        </div>
      </section>

      {/* فوتر */}
      <footer className="bg-indigo-950 text-indigo-300 py-6 text-center text-sm border-t border-indigo-900">
        <p>© 2026 دکتر هادی محمدی - تمامی حقوق محفوظ است</p>
      </footer>
    </div>
  );
}
