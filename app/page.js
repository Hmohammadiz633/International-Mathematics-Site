'use client';
import { useState } from 'react';

// لیست کشورها/سیستم‌ها
const CATEGORIES = [
  { id: 'cambridge', title: 'کمبریج (Cambridge)' },
  { id: 'australia', title: 'استرالیا (Australia)' },
  { id: 'canada', title: 'کانادا (Canada)' },
  { id: 'uk', title: 'انگلستان (UK)' },
  { id: 'germany', title: 'آلمان (Germany)' },
  { id: 'california', title: 'کالیفرنیا (California)' },
  { id: 'turkey', title: 'ترکیه (Turkey)' },
  { id: 'university', title: 'کتاب‌های دانشگاهی' },
];

// لیست مقاطع تحصیلی دانش‌آموزی
const SCHOOL_GRADES = [
  { id: 'g7', title: 'سال هفتم' },
  { id: 'g8', title: 'سال هشتم' },
  { id: 'g9', title: 'سال نهم' },
  { id: 'g10', title: 'سال دهم' },
  { id: 'g11', title: 'سال یازدهم' },
  { id: 'g12', title: 'سال دوازدهم' },
];

// لیست کتاب‌های اختصاصی دانشگاهی
const UNIVERSITY_BOOKS = [
  { id: 'thomas', title: 'کتاب ریاضی عمومی توماس' },
  { id: 'stewart', title: 'کتاب ریاضی عمومی استوارت' },
  { id: 'stewart-sol', title: 'کتاب حل تمرین استوارت' },
  { id: 'adams', title: 'کتاب ریاضی عمومی آدامز' },
  { id: 'adams-sol', title: 'کتاب حل تمرین آدامز' },
  { id: 'math2-eng', title: 'کتاب ریاضی عمومی ۲ مهندسی' },
  { id: 'math-med-ca', title: 'کتاب ریاضی عمومی پزشکی کانادا' },
  { id: 'prob-stat', title: 'کتاب آمار و احتمالات مهندسی' },
  { id: 'complex-num', title: 'کتاب اعداد مختلط' },
  { id: 'num-analysis', title: 'کتاب محاسبات عددی' },
  { id: 'applied-math', title: 'کتاب ریاضی کاربردی' },
];

export default function Home() {
  const [lang, setLang] = useState('fa');
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSubItem, setSelectedSubItem] = useState(null);

  const handleCategoryClick = (catId) => {
    if (selectedCategory === catId) {
      setSelectedCategory(null);
      setSelectedSubItem(null);
    } else {
      setSelectedCategory(catId);
      setSelectedSubItem(null);
    }
  };

  const handleSubItemClick = (itemId) => {
    if (selectedSubItem === itemId) {
      setSelectedSubItem(null);
    } else {
      setSelectedSubItem(itemId);
    }
  };

  const isUniversity = selectedCategory === 'university';
  const subItemList = isUniversity ? UNIVERSITY_BOOKS : SCHOOL_GRADES;

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans" dir={lang === 'fa' ? 'rtl' : 'ltr'}>
      
      {/* منوی بالای سایت (Header) */}
      <header className="bg-white border-b border-slate-100 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          
          <div className="flex items-center gap-2">
            <span className="text-xl">📐</span>
          </div>
          
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600">
            <a href="#about" className="hover:text-blue-600 transition">
              {lang === 'fa' ? 'درباره من' : 'About Me'}
            </a>
            <a href="#books" className="hover:text-blue-600 transition">
              {lang === 'fa' ? 'کتاب‌های تدریس‌شده' : 'Taught Books'}
            </a>
            <a href="#services" className="hover:text-blue-600 transition">
              {lang === 'fa' ? 'خدمات تدریس' : 'Services'}
            </a>
            <a href="#resume" className="hover:text-blue-600 transition">
              {lang === 'fa' ? 'رزومه' : 'Resume'}
            </a>
            <a href="#contact" className="hover:text-blue-600 transition">
              {lang === 'fa' ? 'تماس با ما' : 'Contact'}
            </a>
          </nav>

          <button 
            onClick={() => setLang(lang === 'fa' ? 'en' : 'fa')}
            className="text-xs font-semibold px-3 py-1.5 rounded-full border border-slate-200 text-slate-700 bg-white hover:bg-slate-50 transition flex items-center gap-1 shadow-sm active:scale-95"
          >
            🌐 {lang === 'fa' ? 'English' : 'فارسی'}
          </button>
        </div>
      </header>

      {/* ۱. بنر اصلی سرمه‌ای (Hero Section) */}
      <section className="bg-[#1e295d] text-white py-16 px-4 text-center">
        <div className="max-w-3xl mx-auto flex flex-col items-center">
          
          <div className="w-36 h-36 md:w-44 md:h-44 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl mb-6 bg-slate-800 flex items-center justify-center">
            <img 
              src="/profile.jpg" 
              alt="دکتر هادی محمدی" 
              className="w-full h-full object-cover"
            />
          </div>

          <h1 className="text-3xl md:text-5xl font-extrabold mb-3">
            {lang === 'fa' ? 'آموزش بین المللی ریاضیات' : 'International Mathematics Education'}
          </h1>

          <h2 className="text-xl md:text-3xl font-semibold text-slate-200 mb-2">
            {lang === 'fa' ? 'دکتر هادی محمدی' : 'Dr. Hadi Mohammadi'}
          </h2>

          <p className="text-base md:text-xl text-slate-300 font-medium mb-2">
            {lang === 'fa' ? 'عضو هیأت علمی دانشگاه و مدرس آنلاین ریاضی' : 'University Faculty Member & Online Math Tutor'}
          </p>
          <p className="text-xs md:text-sm text-slate-400 opacity-90">
            {lang === 'fa' ? 'ویژه ایرانیان خارج از کشور (آمریکا، کانادا، اروپا، استرالیا و انگلستان)' : 'Specialized for International Students (USA, Canada, Europe, Australia, UK)'}
          </p>

        </div>
      </section>

      {/* ۲. بخش درباره من */}
      <section id="about" className="max-w-5xl mx-auto my-12 px-4">
        <div className="bg-white rounded-3xl p-6 md:p-10 shadow-sm border border-slate-100">
          <h2 className="text-2xl font-bold text-[#1e295d] mb-4 flex items-center gap-2">
            <span className="text-blue-500">👤</span> {lang === 'fa' ? 'درباره من' : 'About Me'}
          </h2>
          <p className="text-slate-600 leading-relaxed text-justify text-base md:text-lg">
            {lang === 'fa' 
              ? 'اینجانب دکتر هادی محمدی، دارای مدرک دکتری تخصصی ریاضی از دانشگاه صنعتی امیرکبیر (پلی‌تکنیک تهران) و عضو هیأت علمی دانشگاه هستم. با سال‌ها تجربه در امر تدریس دانشگاهی و مدارس برتر، تخصص ویژه‌ای در آموزش آنلاین ریاضیات (از مقطع دبیرستان تا دانشگاه، شامل سیستم‌های IB, AP, A-Level و دروس دانشگاهی) به دانش‌آموزان و دانشجویان ایرانی مقیم خارج از کشور دارم.'
              : 'I am Dr. Hadi Mohammadi, holding a Ph.D. in Mathematics from Amirkabir University of Technology (Tehran Polytechnic) and serving as a university faculty member. With extensive experience teaching at top universities and high schools, I specialize in online mathematics education tailored for students worldwide.'
            }
          </p>
        </div>
      </section>

      {/* ۳. بخش کتاب‌های تدریس‌شده (هوشمند برای دانشگاه و دبیرستان) */}
      <section id="books" className="max-w-5xl mx-auto my-16 px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-[#1e295d] mb-2 flex items-center justify-center gap-2">
          <span className="text-3xl">📚</span>
          {lang === 'fa' ? 'کتاب‌های تدریس‌شده' : 'Taught Books'}
        </h2>
        <p className="text-slate-500 mb-8 text-sm md:text-base">
          {lang === 'fa' 
            ? 'جهت مشاهده کتاب‌ها، ابتدا سیستم آموزشی/کشور یا بخش دانشگاهی را انتخاب کنید:' 
            : 'Select country/system or University Books to view textbooks:'}
        </p>

        {/* دکمه‌های اصلی (کشورها + کتاب‌های دانشگاهی) */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
          {CATEGORIES.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => handleCategoryClick(cat.id)}
                className={`p-3.5 rounded-2xl text-sm font-bold border transition-all duration-200 flex items-center justify-center gap-2 shadow-sm ${
                  isActive
                    ? 'bg-[#1e295d] text-white border-[#1e295d] scale-105 shadow-md'
                    : 'bg-white text-slate-700 border-slate-200 hover:border-blue-300 hover:bg-slate-50'
                }`}
              >
                <span>{isActive ? '📖' : '📘'}</span>
                <span>{cat.title}</span>
              </button>
            );
          })}
        </div>

        {/* نمایش آیکون‌های فرعی (پایه‌های تحصیلی یا لیست کتاب‌های دانشگاهی) */}
        {selectedCategory && (
          <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm mb-6">
            <h3 className="text-base font-bold text-slate-700 mb-4 flex items-center justify-center gap-1">
              <span>{isUniversity ? '🎓' : '🏫'}</span>
              <span>
                {isUniversity
                  ? (lang === 'fa' ? 'انتخاب کتاب دانشگاهی' : 'Select University Textbook')
                  : (lang === 'fa' ? `پایه‌های تحصیلی مربوط به ${CATEGORIES.find((c) => c.id === selectedCategory)?.title}` : 'Select Grade Level')}
              </span>
            </h3>

            {/* شبکه‌بندی هوشمند دکمه‌ها */}
            <div className={`grid gap-2.5 ${isUniversity ? 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3' : 'grid-cols-2 sm:grid-cols-3 md:grid-cols-6'}`}>
              {subItemList.map((item) => {
                const isSubActive = selectedSubItem === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleSubItemClick(item.id)}
                    className={`py-3 px-3 rounded-xl text-xs font-bold border transition-all flex items-center justify-center gap-2 ${
                      isSubActive
                        ? 'bg-blue-600 text-white border-blue-600 shadow-sm'
                        : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-blue-50'
                    }`}
                  >
                    {isUniversity && <span>📙</span>}
                    <span>{item.title}</span>
                  </button>
                );
              })}
            </div>

            {/* نمایش کادر دانلود PDF پس از انتخاب کتاب/پایه */}
            {selectedSubItem && (
              <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col items-center">
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 max-w-sm w-full shadow-inner flex flex-col items-center">
                  <div className="w-40 h-52 bg-gradient-to-br from-blue-700 to-[#1e295d] rounded-xl shadow-md flex flex-col items-center justify-center text-white p-4 mb-4 text-center border-2 border-white/20">
                    <span className="text-4xl mb-2">📕</span>
                    <span className="text-xs font-bold leading-tight">
                      {subItemList.find((i) => i.id === selectedSubItem)?.title}
                    </span>
                  </div>

                  <h4 className="text-sm font-bold text-slate-800 mb-1 text-center">
                    {subItemList.find((i) => i.id === selectedSubItem)?.title}
                  </h4>
                  <p className="text-xs text-slate-500 mb-4">
                    {lang === 'fa' ? 'نسخه کامل همراه با حل تمرینات' : 'Full version with exercises'}
                  </p>

                  <a
                    href="https://t.me/International_Maths"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2.5 px-4 rounded-xl text-xs flex items-center justify-center gap-2 transition shadow-sm"
                  >
                    <span>📥</span>
                    <span>
                      {lang === 'fa' ? 'دانلود فایل PDF کتاب' : 'Download Book PDF'}
                    </span>
                  </a>
                </div>
              </div>
            )}
          </div>
        )}
      </section>

      {/* ۴. بخش خدمات تدریس آنلاین */}
      <section id="services" className="max-w-5xl mx-auto my-16 px-4">
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-100 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1e295d] mb-4">
            {lang === 'fa' ? 'خدمات تدریس آنلاین' : 'Online Teaching Services'}
          </h2>
          <p className="text-slate-600 text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
            {lang === 'fa' 
              ? 'برگزاری کلاس‌های خصوصی و نیمه‌خصوصی ریاضی با متدهای نوین آموزشی و متناسب با سیستم آموزشی کشور محل اقامت شما.'
              : 'Private and group online math tutoring aligned with the educational standards of your country.'
            }
          </p>
        </div>
      </section>

      {/* ۵. بخش سوابق علمی و پژوهشی */}
      <section id="resume" className="max-w-5xl mx-auto my-16 px-4">
        <div className="bg-white rounded-3xl p-6 md:p-10 shadow-sm border border-slate-100">
          <div className="flex items-center justify-center gap-2 mb-8 text-[#1e295d]">
            <span className="text-2xl text-blue-600">🎗️</span>
            <h2 className="text-2xl md:text-3xl font-bold">
              {lang === 'fa' ? 'سوابق علمی و پژوهشی' : 'Academic & Research Background'}
            </h2>
          </div>
          
          <ul className="space-y-4 max-w-2xl mx-auto text-right">
            <li className="flex items-center justify-between text-base md:text-lg text-slate-700 border-b border-slate-100 pb-3">
              <span>{lang === 'fa' ? 'دکتری تخصصی ریاضی از دانشگاه صنعتی امیرکبیر (پلی‌تکنیک تهران)' : 'Ph.D. in Mathematics from Amirkabir University of Technology (Tehran Polytechnic)'}</span>
              <span className="text-blue-600 font-bold">✓</span>
            </li>
            <li className="flex items-center justify-between text-base md:text-lg text-slate-700 border-b border-slate-100 pb-3">
              <span>{lang === 'fa' ? 'عضو هیأت علمی و مدرس دانشگاه' : 'University Faculty Member and Lecturer'}</span>
              <span className="text-blue-600 font-bold">✓</span>
            </li>
            <li className="flex items-center justify-between text-base md:text-lg text-slate-700 border-b border-slate-100 pb-3">
              <span>{lang === 'fa' ? 'تألیف چندین مقاله علمی پژوهشی در ژورنال‌های معتبر بین‌المللی' : 'Author of peer-reviewed articles in prestigious journals'}</span>
              <span className="text-blue-600 font-bold">✓</span>
            </li>
            <li className="flex items-center justify-between text-base md:text-lg text-slate-700">
              <span>{lang === 'fa' ? 'مدرس دوره‌های تخصصی ریاضیات دانشگاهی و دبیرستان' : 'Specialized Instructor for University and High School Mathematics'}</span>
              <span className="text-blue-600 font-bold">✓</span>
            </li>
          </ul>
        </div>
      </section>

      {/* ۶. بخش ارتباط با استاد */}
      <section id="contact" className="max-w-5xl mx-auto my-16 px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-[#1e295d] mb-3">
          {lang === 'fa' ? 'ارتباط با استاد' : 'Contact Professor'}
        </h2>
        <p className="text-slate-500 mb-6 text-sm md:text-base">
          {lang === 'fa' 
            ? 'جهت رزرو وقت مشاوره، کلاس‌های آنلاین و ارسال پیام می‌توانید از طریق راه‌های زیر در ارتباط باشید:' 
            : 'For booking consultations, online classes, or inquiries, reach out below:'}
        </p>

        <div className="flex flex-col gap-4 w-full max-w-xl mx-auto mt-6" dir="rtl">
          <a
            href="https://t.me/International_Maths"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-4 bg-white border border-slate-200 rounded-2xl shadow-sm hover:shadow-md transition"
          >
            <div className="flex items-center gap-3">
              <span className="text-2xl bg-sky-100 p-2.5 rounded-xl">✈️</span>
              <div className="text-right">
                <span className="block text-xs text-slate-500 font-medium">آدرس تلگرام</span>
                <span className="text-sm md:text-base font-bold text-slate-800">آموزش بین‌المللی ریاضیات</span>
              </div>
            </div>
            <div dir="ltr" className="text-xs font-mono text-sky-600 bg-sky-50 px-3 py-1.5 rounded-lg">
              @International_Maths
            </div>
          </a>

          <a
            href="https://instagram.com/Hadi_mohammadi_zarandini"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-4 bg-white border border-slate-200 rounded-2xl shadow-sm hover:shadow-md transition"
          >
            <div className="flex items-center gap-3">
              <span className="text-2xl bg-pink-100 p-2.5 rounded-xl">📸</span>
              <div className="text-right">
                <span className="block text-xs text-slate-500 font-medium">آدرس اینستاگرام</span>
                <span className="text-sm md:text-base font-bold text-slate-800">Hadi_mohammadi_zarandini</span>
              </div>
            </div>
            <div dir="ltr" className="text-xs font-mono text-pink-600 bg-pink-50 px-3 py-1.5 rounded-lg">
              @Hadi_mohammadi_zarandini
            </div>
          </a>

          <a
            href="mailto:Hadi.mohammadi.zarandini@gmail.com"
            className="flex items-center justify-between p-4 bg-white border border-slate-200 rounded-2xl shadow-sm hover:shadow-md transition"
          >
            <div className="flex items-center gap-3">
              <span className="text-2xl bg-red-100 p-2.5 rounded-xl">✉️</span>
              <div className="text-right">
                <span className="block text-xs text-slate-500 font-medium">آدرس جیمیل</span>
                <span className="text-sm md:text-base font-bold text-slate-800">ارسال ایمیل به استاد</span>
              </div>
            </div>
            <div dir="ltr" className="text-xs font-mono text-red-600 bg-red-50 px-2.5 py-1.5 rounded-lg break-all">
              Hadi.mohammadi.zarandini@gmail.com
            </div>
          </a>
        </div>
      </section>

      {/* فوتر */}
      <footer className="bg-[#0f172a] text-slate-400 text-center py-6 text-sm">
        <p>© 2026 {lang === 'fa' ? 'دکتر هادی محمدی - تمامی حقوق محفوظ است' : 'Dr. Hadi Mohammadi. All rights reserved.'}</p>
      </footer>

    </div>
  );
}
