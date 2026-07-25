'use client';
import { useState } from 'react';

// لیست کشورها/سیستم‌ها با پشتیبانی کامل از دو زبان
const CATEGORIES = [
  { id: 'cambridge', titleFa: 'کمبریج', titleEn: 'Cambridge' },
  { id: 'australia', titleFa: 'استرالیا', titleEn: 'Australia' },
  { id: 'canada', titleFa: 'کانادا', titleEn: 'Canada' },
  { id: 'uk', titleFa: 'انگلستان', titleEn: 'UK' },
  { id: 'germany', titleFa: 'آلمان', titleEn: 'Germany' },
  { id: 'california', titleFa: 'کالیفرنیا', titleEn: 'California' },
  { id: 'turkey', titleFa: 'ترکیه', titleEn: 'Turkey' },
  { id: 'university', titleFa: 'کتاب‌های دانشگاهی', titleEn: 'University Textbooks' },
];

// لیست مقاطع تحصیلی دانش‌آموزی
const SCHOOL_GRADES = [
  { id: 'g7', titleFa: 'سال هفتم', titleEn: 'Grade 7' },
  { id: 'g8', titleFa: 'سال هشتم', titleEn: 'Grade 8' },
  { id: 'g9', titleFa: 'سال نهم', titleEn: 'Grade 9' },
  { id: 'g10', titleFa: 'سال دهم', titleEn: 'Grade 10' },
  { id: 'g11', titleFa: 'سال یازدهم', titleEn: 'Grade 11' },
  { id: 'g12', titleFa: 'سال دوازدهم', titleEn: 'Grade 12' },
];

// لیست کتاب‌های اختصاصی دانشگاهی
const UNIVERSITY_BOOKS = [
  { id: 'thomas', titleFa: 'کتاب ریاضی عمومی توماس', titleEn: "Thomas' Calculus" },
  { id: 'stewart', titleFa: 'کتاب ریاضی عمومی استوارت', titleEn: "Stewart's Calculus" },
  { id: 'stewart-sol', titleFa: 'کتاب حل تمرین استوارت', titleEn: "Stewart Solutions Manual" },
  { id: 'adams', titleFa: 'کتاب ریاضی عمومی آدامز', titleEn: "Adams' Calculus" },
  { id: 'adams-sol', titleFa: 'کتاب حل تمرین آدامز', titleEn: "Adams Solutions Manual" },
  { id: 'math2-eng', titleFa: 'کتاب ریاضی عمومی ۲ مهندسی', titleEn: "Engineering Calculus II" },
  { id: 'math-med-ca', titleFa: 'کتاب ریاضی عمومی پزشکی کانادا', titleEn: "Canadian Pre-Med Math" },
  { id: 'prob-stat', titleFa: 'کتاب آمار و احتمالات مهندسی', titleEn: "Engineering Statistics & Probability" },
  { id: 'complex-num', titleFa: 'کتاب اعداد مختلط', titleEn: "Complex Variables & Numbers" },
  { id: 'num-analysis', titleFa: 'کتاب محاسبات عددی', titleEn: "Numerical Analysis" },
  { id: 'applied-math', titleFa: 'کتاب ریاضی کاربردی', titleEn: "Applied Mathematics" },
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

      {/* ۱. بنر اصلی (Hero Section) */}
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
              ? 'اینجانب دکتر هادی محمدی، دارای مدرک دکتری تخصصی ریاضی از دانشگاه صنعتی امیرکبیر (پلی‌تکنیک تهران) و عضو هیأت علمی دانشگاه با ۲۹ سال سابقه تدریس هستم. با سال‌ها تجربه در امر تدریس دانشگاهی و مدارس برتر، تخصص ویژه‌ای در آموزش آنلاین ریاضیات (از مقطع دبیرستان تا دانشگاه، شامل سیستم‌های IB, AP, A-Level و دروس دانشگاهی) به دانش‌آموزان و دانشجویان ایرانی مقیم خارج از کشور دارم.'
              : 'I am Dr. Hadi Mohammadi, holding a Ph.D. in Mathematics from Amirkabir University of Technology (Tehran Polytechnic), a university faculty member with 29 years of teaching experience. With extensive experience teaching at top universities and high schools, I specialize in online mathematics education tailored for students worldwide.'
            }
          </p>
        </div>
      </section>

      {/* ۳. بخش کتاب‌های تدریس‌شده */}
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

        {/* دکمه‌های اصلی کشورها / دانشگاهی */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
          {CATEGORIES.map((cat) => {
            const isActive = selectedCategory === cat.id;
            const categoryTitle = lang === 'fa' ? cat.titleFa : cat.titleEn;

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
                <span>{categoryTitle}</span>
              </button>
            );
          })}
        </div>

        {/* نمایش زیرمجموعه‌ها */}
        {selectedCategory && (
          <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm mb-6">
            <h3 className="text-base font-bold text-slate-700 mb-4 flex items-center justify-center gap-1">
              <span>{isUniversity ? '🎓' : '🏫'}</span>
              <span>
                {isUniversity
                  ? (lang === 'fa' ? 'انتخاب کتاب دانشگاهی' : 'Select University Textbook')
                  : (lang === 'fa' 
                      ? `پایه‌های تحصیلی مربوط به ${CATEGORIES.find((c) => c.id === selectedCategory)?.titleFa}` 
                      : `Grade levels for ${CATEGORIES.find((c) => c.id === selectedCategory)?.titleEn}`)}
              </span>
            </h3>

            <div className={`grid gap-2.5 ${isUniversity ? 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3' : 'grid-cols-2 sm:grid-cols-3 md:grid-cols-6'}`}>
              {subItemList.map((item) => {
                const isSubActive = selectedSubItem === item.id;
                const itemTitle = lang === 'fa' ? item.titleFa : item.titleEn;

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
                    <span>{itemTitle}</span>
                  </button>
                );
              })}
            </div>

            {/* کادر دانلود PDF */}
            {selectedSubItem && (
              <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col items-center">
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 max-w-sm w-full shadow-inner flex flex-col items-center">
                  <div className="w-40 h-52 bg-gradient-to-br from-blue-700 to-[#1e295d] rounded-xl shadow-md flex flex-col items-center justify-center text-white p-4 mb-4 text-center border-2 border-white/20">
                    <span className="text-4xl mb-2">📕</span>
                    <span className="text-xs font-bold leading-tight">
                      {lang === 'fa' 
                        ? subItemList.find((i) => i.id === selectedSubItem)?.titleFa 
                        : subItemList.find((i) => i.id === selectedSubItem)?.titleEn}
                    </span>
                  </div>

                  <h4 className="text-sm font-bold text-slate-800 mb-1 text-center">
                    {lang === 'fa' 
                      ? subItemList.find((i) => i.id === selectedSubItem)?.titleFa 
                      : subItemList.find((i) => i.id === selectedSubItem)?.titleEn}
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

      {/* ۵. بخش سوابق علمی و پژوهشی (بروزرسانی شده با ۲۹ سال سابقه تدریس) */}
      <section id="resume" className="max-w-5xl mx-auto my-16 px-4">
        <div className="bg-white rounded-3xl p-6 md:p-10 shadow-sm border border-slate-100">
          <div className="flex items-center justify-center gap-2 mb-8 text-[#1e295d]">
            <span className="text-2xl text-blue-600">🎗️</span>
            <h2 className="text-2xl md:text-3xl font-bold">
              {lang === 'fa' ? 'سوابق علمی و پژوهشی' : 'Academic & Research Background'}
            </h2>
          </div>
          
          <ul className={`space-y-4 max-w-2xl mx-auto ${lang === 'fa' ? 'text-right' : 'text-left'}`}>
            <li className="flex items-center justify-between text-base md:text-lg text-slate-700 border-b border-slate-100 pb-3">
              <span>{lang === 'fa' ? 'دکتری تخصصی ریاضی از دانشگاه صنعتی امیرکبیر (پلی‌تکنیک تهران)' : 'Ph.D. in Mathematics from Amirkabir University of Technology (Tehran Polytechnic)'}</span>
              <span className="text-blue-600 font-bold">✓</span>
            </li>
            <li className="flex items-center justify-between text-base md:text-lg text-slate-700 border-b border-slate-100 pb-3">
              <span>{lang === 'fa' ? 'عضو هیأت علمی دانشگاه با ۲۹ سال سابقه تدریس' : 'University Faculty Member with 29 Years of Teaching Experience'}</span>
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

      {/* ۶. بخش ارتباط با استاد (دقیقاً کاملاً زیر هم و مرتب‌شده) */}
      <section id="contact" className="max-w-5xl mx-auto my-16 px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-[#1e295d] mb-2">
          {lang === 'fa' ? 'ارتباط با استاد' : 'Contact Professor'}
        </h2>
        <p className="text-slate-500 mb-8 text-xs md:text-sm">
          {lang === 'fa' 
            ? 'جهت رزرو وقت مشاوره، کلاس‌های آنلاین و ارسال پیام می‌توانید از طریق راه‌های زیر در ارتباط باشید:' 
            : 'For booking consultations, online classes, or inquiries, reach out below:'}
        </p>

        {/* چیدمان کاملاً عمودی و شکیل در یک ستون */}
        <div className="flex flex-col gap-3.5 w-full max-w-md mx-auto" dir={lang === 'fa' ? 'rtl' : 'ltr'}>
          
          {/* ۱. تلگرام */}
          <a
            href="https://t.me/International_Maths"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-3.5 bg-white border border-slate-200/90 rounded-2xl shadow-sm hover:shadow-md hover:border-sky-300 transition group"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-sky-50 flex items-center justify-center text-sky-500 group-hover:scale-105 transition">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm5.56 8.16l-2.02 9.52c-.15.68-.55.85-1.12.53l-3.08-2.27-1.48 1.43c-.16.16-.3.3-.61.3l.22-3.12 5.68-5.13c.25-.22-.05-.34-.38-.12l-7.02 4.42-3.03-.95c-.66-.21-.67-.66.14-.98l11.83-4.56c.55-.2 1.03.13.87.93z"/>
                </svg>
              </div>
              <div className={lang === 'fa' ? 'text-right' : 'text-left'}>
                <span className="block text-[11px] text-slate-400 font-medium">
                  {lang === 'fa' ? 'کانال و آیدی تلگرام' : 'Telegram Channel'}
                </span>
                <span className="text-xs md:text-sm font-bold text-slate-800">
                  {lang === 'fa' ? 'آموزش بین‌المللی ریاضیات' : 'International Math'}
                </span>
              </div>
            </div>
            <span dir="ltr" className="text-[11px] font-mono text-sky-600 bg-sky-50 px-2.5 py-1 rounded-lg">
              @International_Maths
            </span>
          </a>

          {/* ۲. اینستاگرام */}
          <a
            href="https://instagram.com/Hadi_mohammadi_zarandini"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-3.5 bg-white border border-slate-200/90 rounded-2xl shadow-sm hover:shadow-md hover:border-pink-300 transition group"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-pink-50 flex items-center justify-center text-pink-500 group-hover:scale-105 transition">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </div>
              <div className={lang === 'fa' ? 'text-right' : 'text-left'}>
                <span className="block text-[11px] text-slate-400 font-medium">
                  {lang === 'fa' ? 'صفحه اینستاگرام' : 'Instagram Page'}
                </span>
                <span className="text-xs md:text-sm font-bold text-slate-800">Hadi_mohammadi_zarandini</span>
              </div>
            </div>
            <span dir="ltr" className="text-[11px] font-mono text-pink-600 bg-pink-50 px-2.5 py-1 rounded-lg">
              @Hadi...
            </span>
          </a>

          {/* ۳. جیمیل */}
          <a
            href="mailto:Hadi.mohammadi.zarandini@gmail.com"
            className="flex items-center justify-between p-3.5 bg-white border border-slate-200/90 rounded-2xl shadow-sm hover:shadow-md hover:border-red-300 transition group"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center text-red-500 group-hover:scale-105 transition">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.272H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L12 9.545l8.073-6.052c1.618-1.214 3.927-.059 3.927 1.964z"/>
                </svg>
              </div>
              <div className={lang === 'fa' ? 'text-right' : 'text-left'}>
                <span className="block text-[11px] text-slate-400 font-medium">
                  {lang === 'fa' ? 'آدرس پست الکترونیکی' : 'Email Address'}
                </span>
                <span className="text-xs md:text-sm font-bold text-slate-800">
                  {lang === 'fa' ? 'ارسال ایمیل به استاد' : 'Send Email'}
                </span>
              </div>
            </div>
            <span dir="ltr" className="text-[10px] font-mono text-red-600 bg-red-50 px-2 py-1 rounded-lg truncate max-w-[110px]">
              Hadi.mohammadi...
            </span>
          </a>

          {/* ۴. شماره تلفن تماس مستقیم */}
          <a
            href="tel:+989123104844"
            className="flex items-center justify-between p-3.5 bg-white border border-slate-200/90 rounded-2xl shadow-sm hover:shadow-md hover:border-emerald-300 transition group"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600 group-hover:scale-105 transition">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
              </div>
              <div className={lang === 'fa' ? 'text-right' : 'text-left'}>
                <span className="block text-[11px] text-slate-400 font-medium">
                  {lang === 'fa' ? 'شماره تلفن / واتساپ' : 'Phone / WhatsApp'}
                </span>
                <span className="text-xs md:text-sm font-bold text-slate-800">
                  {lang === 'fa' ? 'تماس مستقیم با استاد' : 'Direct Call'}
                </span>
              </div>
            </div>
            <span dir="ltr" className="text-[11px] font-mono text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-lg">
              +98 912 310 4844
            </span>
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
