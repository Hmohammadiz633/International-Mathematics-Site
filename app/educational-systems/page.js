'use client';

import { useState } from 'react';
import Link from 'next/link';

// آرایه کامل داده‌های کشورها (اولین کشور: ایران)
const EDUCATIONAL_DATA = [
  {
    id: 'iran',
    flag: '🇮🇷',
    countryFa: 'ایران',
    countryEn: 'Iran',
    titleFa: 'نظام آموزشی ایران (کنکور، سمپاد و المپیاد)',
    titleEn: 'Iranian Educational System (Konkur & Olympiads)',
    link: 'https://t.me/International_Maths',
    descriptionFa: 'تدریس تخصصی ریاضیات مفهومی، تیزهوشان (سمپاد)، کنکور سراسری و آماده‌سازی برای المپیادهای کشوری و بین‌المللی ریاضی.',
    descriptionEn: 'Conceptual Math tutoring, SAMPAD (Gifted Schools), National Entrance Exam (Konkur), and Math Olympiad prep.',
    resources: [
      { title: 'شبکه ملی مدارس (رشد)', url: 'https://roshd.ir' },
      { title: 'سازمان پژوهش و برنامه‌ریزی آموزشی (کتاب‌های درسی)', url: 'http://chap.sch.ir' },
      { title: 'باشگاه دانش‌پژوهان جوان (المپیاد ریاضی)', url: 'https://ysc.medu.ir' }
    ]
  },
  {
    id: 'usa',
    flag: '🇺🇸',
    countryFa: 'آمریکا',
    countryEn: 'USA',
    titleFa: 'نظام آموزشی آمریکا (USA)',
    titleEn: 'US Educational System',
    link: 'https://t.me/International_Maths/379',
    descriptionFa: 'نظام آموزشی آمریکا مبتنی بر سیستم ۱۲ ساله (K-12) است. آموزش تخصصی ریاضیات از Algebra 1 & 2 تا AP Calculus AB/BC و آماده‌سازی آزمون‌های SAT/ACT.',
    descriptionEn: 'The US education system is based on the K-12 framework. Specialized tutoring for US school math from Algebra 1 & 2 to AP Calculus AB/BC and SAT/ACT prep.',
    resources: [
      { title: 'سایت رسمی College Board (آزمون‌های AP و SAT)', url: 'https://www.collegeboard.org' },
      { title: 'پلتفرم آموزش آنلاین Khan Academy', url: 'https://www.khanacademy.org' }
    ]
  },
  {
    id: 'uk',
    flag: '🇬🇧',
    countryFa: 'انگلستان',
    countryEn: 'UK',
    titleFa: 'نظام آموزشی انگلستان (UK)',
    titleEn: 'UK Educational System',
    link: 'https://t.me/International_Maths/297',
    descriptionFa: 'نظام آموزشی بریتانیا شامل مراحل کلیدی (Key Stages)، مقطع GCSE و دوره A-Level (Edexcel, AQA) می‌باشد.',
    descriptionEn: 'The UK system is structured into Key Stages, GCSEs, and A-Levels (Edexcel, AQA, OCR).',
    resources: [
      { title: 'پرتال Pearson Edexcel', url: 'https://qualifications.pearson.com' },
      { title: 'سایت آموزشی Physics & Maths Tutor', url: 'https://www.physicsandmathstutor.com' }
    ]
  },
  {
    id: 'canada',
    flag: '🇨🇦',
    countryFa: 'کانادا',
    countryEn: 'Canada',
    titleFa: 'نظام آموزشی کانادا',
    titleEn: 'Canadian Educational System',
    link: 'https://t.me/International_Maths',
    descriptionFa: 'نظام‌های استانی شامل اونتاریو (Ontario Curriculum) و بریتیش کلمبیا (BC Curriculum) از پایه ۹ تا ۱۲ و درس Calculus & Vectors.',
    descriptionEn: 'Provincial Curricula (Ontario Grade 9-12, BC Curriculum) aligned with Canadian standards.',
    resources: [
      { title: 'وزارت آموزش اونتاریو', url: 'https://www.ontario.ca/page/ministry-education' },
      { title: 'مرکز مسابقات ریاضی دانشگاه واترلو (CEMC)', url: 'https://www.cemc.uwaterloo.ca' }
    ]
  },
  {
    id: 'germany',
    flag: '🇩🇪',
    countryFa: 'آلمان',
    countryEn: 'Germany',
    titleFa: 'نظام آموزشی آلمان',
    titleEn: 'German Educational System',
    link: 'https://t.me/International_Maths',
    descriptionFa: 'تدریس متناسب با امتحانات Abitur آلمان، مدارس Gymnasium و کالج‌های آماده‌سازی (Studienkolleg).',
    descriptionEn: 'Covering Analysis, Linear Algebra, and Stochastics for the German Abitur and Studienkolleg exams.',
    resources: [
      { title: 'پرتال آموزشی Mathebibel', url: 'https://www.mathebibel.de' }
    ]
  },
  {
    id: 'australia',
    flag: '🇦🇺',
    countryFa: 'استرالیا',
    countryEn: 'Australia',
    titleFa: 'نظام آموزشی استرالیا',
    titleEn: 'Australian Educational System',
    link: 'https://t.me/International_Maths',
    descriptionFa: 'آموزش ریاضیات مطابق با استاندارد ATAR ایالت‌های مختلف (VCE, HSC) شامل General, Methods و Specialist Math.',
    descriptionEn: 'Aligned with Australian ATAR (VCE/HSC) courses: General, Methods, and Specialist Mathematics.',
    resources: [
      { title: 'برنامه درسی ملی استرالیا (ACARA)', url: 'https://www.australiancurriculum.edu.au' }
    ]
  },
  {
    id: 'france',
    flag: '🇫🇷',
    countryFa: 'فرانسه',
    countryEn: 'France',
    titleFa: 'نظام آموزشی فرانسه (Baccalauréat)',
    titleEn: 'French Educational System',
    link: 'https://t.me/International_Maths',
    descriptionFa: 'آموزش ریاضیات مقطع دبیرستان فرانسه (Lycée) و آمادگی امتحانات نهایی دیپلم فرانسه (Bac Général - Spécialité Mathématiques).',
    descriptionEn: 'Tutoring for Lycée mathematics and French Baccalaureate preparation.',
    resources: [
      { title: 'وزارت آموزش ملی فرانسه', url: 'https://www.education.gouv.fr' }
    ]
  },
  {
    id: 'sweden',
    flag: '🇸🇪',
    countryFa: 'سوئد',
    countryEn: 'Sweden',
    titleFa: 'نظام آموزشی سوئد (Gymnasieskola)',
    titleEn: 'Swedish Educational System',
    link: 'https://t.me/International_Maths',
    descriptionFa: 'تدریس سطوح مختلف ریاضیات مدارس سوئد (Matematik 1c تا 5) متناسب با استانداردهای آموزشی اسکاندیناوی.',
    descriptionEn: 'Specialized math tutoring for Swedish secondary school courses (Matematik 1c to 5).',
    resources: [
      { title: 'اداره ملی آموزش سوئد (Skolverket)', url: 'https://www.skolverket.se' }
    ]
  },
  {
    id: 'italy',
    flag: '🇮🇹',
    countryFa: 'ایتالیا',
    countryEn: 'Italy',
    titleFa: 'نظام آموزشی ایتالیا (Liceo Scientifico)',
    titleEn: 'Italian Educational System',
    link: 'https://t.me/International_Maths',
    descriptionFa: 'تدریس ریاضیات دبیرستان‌های علمی ایتالیا و آمادگی آزمون‌های ورود به دانشگاه‌های ایتالیا (TOLC-I, TOLC-E).',
    descriptionEn: 'Mathematics prep for Liceo Scientifico and university entrance exams (TOLC-I / TOLC-E).',
    resources: [
      { title: 'پرتال رسمی آزمون‌های TOLC (CISIA)', url: 'https://www.cisiaonline.it' }
    ]
  },
  {
    id: 'uae',
    flag: '🇦🇪',
    countryFa: 'امارات',
    countryEn: 'UAE',
    titleFa: 'نظام‌های بین‌المللی امارات (دبی / ابوظبی)',
    titleEn: 'UAE International Schools',
    link: 'https://t.me/International_Maths',
    descriptionFa: 'تدریس ریاضیات مدارس بین‌المللی امارات تحت نظام‌های IB، آمریکایی (AP) و بریتانیایی (IGCSE/A-Level).',
    descriptionEn: 'Math tutoring for international students in UAE enrolled in IB, British, and American curricula.',
    resources: [
      { title: 'سازمان دانش و توسعه انسانی دبی (KHDA)', url: 'https://www.khda.gov.ae' }
    ]
  }
];

export default function EducationalSystemsPage() {
  const [lang, setLang] = useState('fa');
  // پیش‌فرض: انتخاب کشور اول (ایران)
  const [selectedCountry, setSelectedCountry] = useState(EDUCATIONAL_DATA[0]);

  const isFa = lang === 'fa';

  return (
    <main dir={isFa ? 'rtl' : 'ltr'} className="min-h-screen bg-slate-50 text-slate-900 font-sans p-4 md:p-8 antialiased">
      <div className="max-w-4xl mx-auto">
        
        {/* هدر و کنترل زبان */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-gray-200">
          <Link 
            href="/" 
            className="px-4 py-2 bg-slate-200 hover:bg-slate-300 text-slate-800 text-xs md:text-sm font-bold rounded-xl transition"
          >
            {isFa ? '🏠 بازگشت به صفحه اصلی' : '🏠 Back to Home'}
          </Link>

          <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-xl border border-gray-200 shadow-sm">
            <button 
              type="button"
              onClick={() => setLang('fa')} 
              className={`text-xs font-bold transition ${isFa ? 'text-slate-900 underline font-black' : 'text-gray-400 hover:text-black'}`}
            >
              فارسی
            </button>
            <span className="text-gray-300 font-light">|</span>
            <button 
              type="button"
              onClick={() => setLang('en')} 
              className={`text-xs font-bold transition ${!isFa ? 'text-slate-900 underline font-black' : 'text-gray-400 hover:text-black'}`}
            >
              English
            </button>
          </div>
        </div>

        {/* عنوان بخش */}
        <div className="text-center mb-8">
          <h1 className="text-2xl md:text-4xl font-black text-slate-900 mb-3">
            🌐 {isFa ? 'نظام‌های آموزشی ریاضی کشورها' : 'International Educational Systems'}
          </h1>
          <p className="text-xs md:text-sm text-slate-600 font-medium">
            {isFa ? 'روی هر کشور کلیک کنید تا اطلاعات کامل، توضیحات و لینک‌های مربوطه باز شوند:' : 'Click on any country button to reveal full information and links:'}
          </p>
        </div>

        {/* چیدمان دکمه‌های تخت (Flat) کشورها */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 md:gap-3 mb-8">
          {EDUCATIONAL_DATA.map((item) => {
            const isSelected = selectedCountry.id === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setSelectedCountry(item)}
                className={`
                  px-4 py-2.5 rounded-xl font-bold text-xs md:text-sm flex items-center gap-2 transition cursor-pointer border
                  ${isSelected 
                    ? 'bg-slate-700 text-white border-slate-700 shadow-sm' 
                    : 'bg-white hover:bg-slate-100 text-slate-700 border-slate-200'
                  }
                `}
              >
                <span className="text-lg md:text-xl leading-none">{item.flag}</span>
                <span>{isFa ? item.countryFa : item.countryEn}</span>
              </button>
            );
          })}
        </div>

        {/* کارت خاکستری رنگ نمایش اطلاعات کشور انتخاب‌شده */}
        {selectedCountry && (
          <div className="bg-slate-100 text-slate-800 rounded-3xl p-6 md:p-8 border border-slate-300 shadow-sm transition-all duration-300">
            
            {/* سربرگ کشور */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-300 pb-4 mb-6">
              <div className="flex items-center gap-3">
                <span className="text-4xl md:text-5xl">{selectedCountry.flag}</span>
                <div>
                  <h2 className="text-xl md:text-2xl font-black text-slate-900">
                    {isFa ? selectedCountry.titleFa : selectedCountry.titleEn}
                  </h2>
                  <span className="text-xs text-slate-500 font-bold">
                    {isFa ? selectedCountry.countryFa : selectedCountry.countryEn}
                  </span>
                </div>
              </div>

              {/* لینک اصلی کانال/منبع */}
              <a 
                href={selectedCountry.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="self-start sm:self-auto px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold rounded-xl transition whitespace-nowrap shadow-sm"
              >
                🔗 {isFa ? 'مشاهده در تلگرام' : 'View on Telegram'}
              </a>
            </div>

            {/* توضیحات کامل */}
            <p className="text-slate-700 text-sm md:text-base leading-relaxed mb-6 font-normal text-justify">
              {isFa ? selectedCountry.descriptionFa : selectedCountry.descriptionEn}
            </p>

            {/* بخش لینک‌های مفید و منابع رسمی */}
            {selectedCountry.resources && selectedCountry.resources.length > 0 && (
              <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm">
                <h3 className="font-bold text-sm text-slate-900 mb-3 flex items-center gap-2">
                  💻 {isFa ? 'سایت‌ها و منابع رسمی این کشور:' : 'Official Resources & Websites:'}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {selectedCountry.resources.map((res, idx) => (
                    <a
                      key={idx}
                      href={res.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-2 bg-slate-100 hover:bg-slate-200 text-xs font-medium text-slate-800 rounded-xl border border-slate-200 transition flex items-center gap-1.5"
                    >
                      <span>🌐</span>
                      <span>{res.title}</span>
                    </a>
                  ))}
                </div>
              </div>
            )}

          </div>
        )}

      </div>
    </main>
  );
}
