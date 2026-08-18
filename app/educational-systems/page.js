'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';

const FEEDBACKS = [
  { fa: 'بازخورد ۱', en: 'Feedback 1', link: 'https://t.me/International_Maths/110' },
  { fa: 'بازخورد ۲', en: 'Feedback 2', link: 'https://t.me/International_Maths/111' },
  { fa: 'بازخورد ۳', en: 'Feedback 3', link: 'https://t.me/International_Maths/1352' },
];

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
    link: 'https://t.me/International_Maths/302',
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
    link: 'https://t.me/International_Maths/375',
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
    link: 'https://t.me/International_Maths/299',
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
    link: 'https://t.me/International_Maths/688',
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
    link: 'https://t.me/International_Maths/686',
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
    link: 'https://t.me/International_Maths/389',
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
  // دریافت وضعیت زبان از context سراسری به جای useState محلی
  const { language, setLanguage } = useLanguage();
  const [selectedCountry, setSelectedCountry] = useState(EDUCATIONAL_DATA[0]);
  const [isFeedbackOpen, setIsFeedbackOpen] = useState(false);
  const [isEducationalActive, setIsEducationalActive] = useState(false);

  const isFa = language === 'fa';

  return (
    <main dir={isFa ? 'rtl' : 'ltr'} className="min-h-screen bg-slate-50 text-slate-900 font-sans pb-12 antialiased">
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200/80 px-4 py-3 shadow-sm">
        <div className="max-w-6xl mx-auto flex flex-col items-center gap-3">
          <div className="w-full flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 bg-blue-50 border border-blue-200 text-blue-700 rounded-xl flex items-center justify-center p-1.5 shadow-sm">
                <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2 3h20v14H2z" /><path d="M8 21l4-4 4 4" /><path d="M7 8h4" /><path d="M7 12h2" /><path d="M15 11l2 2 4-4" />
                </svg>
              </div>
              <h1 className="font-black text-base md:text-xl text-slate-800 tracking-tight leading-snug">
                {isFa ? 'آموزش بین‌المللی ریاضیات' : 'International Math'}
              </h1>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 bg-gray-100 px-3 py-1.5 rounded-lg border border-gray-300 shadow-inner">
                <button type="button" onClick={() => setLanguage('fa')} className={`text-xs font-bold transition ${isFa ? 'text-blue-700 underline font-black' : 'text-gray-500 hover:text-black'}`}>فارسی</button>
                <span className="text-gray-400 font-light">|</span>
                <button type="button" onClick={() => setLanguage('en')} className={`text-xs font-bold transition ${!isFa ? 'text-blue-700 underline font-black' : 'text-gray-500 hover:text-black'}`}>English</button>
              </div>
            </div>
          </div>

          <div className="w-full flex flex-col items-center gap-2 border-t border-gray-100 pt-3">
            <div className="w-full flex items-center justify-center gap-4 md:gap-6 overflow-x-auto py-2 text-xs md:text-sm font-medium text-gray-700">
              <Link 
                href="/" 
                onClick={() => setIsEducationalActive(false)}
                className="hover:text-blue-600 whitespace-nowrap transition-colors"
              >
                {isFa ? 'خانه' : 'Home'}
              </Link>
              <Link 
                href="/educational-systems" 
                onClick={() => setIsEducationalActive(true)}
                className={`whitespace-nowrap transition-colors ${isEducationalActive ? 'text-blue-800 font-bold' : 'hover:text-blue-600'}`}
              >
                {isFa ? 'نظام آموزشی کشورها' : 'Educational Systems'}
              </Link>
              <Link 
                href="/books" 
                onClick={() => setIsEducationalActive(false)}
                className="hover:text-blue-600 whitespace-nowrap transition-colors"
              >
                {isFa ? 'کتب و منابع آموزشی' : 'Books & Resources'}
              </Link>
              <Link 
                href="/math-sites" 
                onClick={() => setIsEducationalActive(false)}
                className="hover:text-blue-600 whitespace-nowrap transition-colors"
              >
                {isFa ? 'سایت‌های ریاضی کشورها' : 'Math Websites'}
              </Link>
              <button type="button" aria-expanded={isFeedbackOpen} onClick={() => setIsFeedbackOpen(!isFeedbackOpen)} className="hover:text-blue-600 whitespace-nowrap transition-colors flex items-center gap-1">
                <span>{isFa ? 'بازخورد کلاس‌ها' : 'Class Feedback'}</span>
                <span className="text-[10px]">{isFeedbackOpen ? '▲' : '▼'}</span>
              </button>
              <Link 
                href="/#contact" 
                onClick={() => setIsEducationalActive(false)}
                className="hover:text-blue-600 whitespace-nowrap transition-colors"
              >
                {isFa ? 'ارتباط با استاد' : 'Contact'}
              </Link>
            </div>

            {isFeedbackOpen && (
              <div className="w-full flex items-center justify-center gap-2 flex-wrap bg-blue-50/60 p-3 rounded-2xl border border-blue-100 my-1 shadow-inner">
                {FEEDBACKS.map((item, idx) => (
                  <a key={idx} href={item.link} target="_blank" rel="noopener noreferrer" className="px-3 py-1.5 bg-white hover:bg-blue-50 text-xs font-semibold text-blue-900 rounded-lg border border-blue-200 shadow-sm transition-all flex items-center gap-1.5">
                    <span>⭐</span>
                    <span>{isFa ? item.fa : item.en}</span>
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 pt-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-4xl font-black text-slate-900 mb-3">
            🌐 {isFa ? 'نظام‌های آموزشی کشورها' : 'International Educational Systems'}
          </h2>
          <p className="text-xs md:text-sm text-slate-600 font-medium">
            {isFa ? 'روی هر کشور کلیک کنید تا اطلاعات کامل، توضیحات و لینک‌های مربوطه باز شوند:' : 'Click on any country button to reveal full information and links:'}
          </p>
        </div>

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
                    ? 'bg-blue-600 text-white border-blue-600 shadow-sm shadow-blue-200' 
                    : 'bg-white hover:bg-blue-50 text-slate-700 border-slate-200 hover:border-blue-200'
                  }
                `}
              >
                <span className="text-lg md:text-xl leading-none">{item.flag}</span>
                <span>{isFa ? item.countryFa : item.countryEn}</span>
              </button>
            );
          })}
        </div>

        {selectedCountry && (
          <div className="bg-blue-50/40 text-slate-800 rounded-3xl p-6 md:p-8 border border-blue-200 shadow-sm transition-all duration-300">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-blue-200 pb-4 mb-6">
              <div className="flex items-center gap-3">
                <span className="text-4xl md:text-5xl">{selectedCountry.flag}</span>
                <div>
                  <h3 className="text-xl md:text-2xl font-black text-slate-900">
                    {isFa ? selectedCountry.titleFa : selectedCountry.titleEn}
                  </h3>
                  <span className="text-xs text-blue-600 font-bold">
                    {isFa ? selectedCountry.countryFa : selectedCountry.countryEn}
                  </span>
                </div>
              </div>

              <a 
                href={selectedCountry.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="self-start sm:self-auto px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-xl transition whitespace-nowrap shadow-sm shadow-blue-200"
              >
                🔗 {isFa ? 'مشاهده در تلگرام' : 'View on Telegram'}
              </a>
            </div>

            <p className="text-slate-700 text-sm md:text-base leading-relaxed mb-6 font-normal text-justify">
              {isFa ? selectedCountry.descriptionFa : selectedCountry.descriptionEn}
            </p>

            {selectedCountry.resources && selectedCountry.resources.length > 0 && (
              <div className="bg-white p-4 rounded-2xl border border-blue-100 shadow-sm">
                <h4 className="font-bold text-sm text-slate-900 mb-3 flex items-center gap-2">
                  💻 {isFa ? 'سایت‌ها و منابع رسمی این کشور:' : 'Official Resources & Websites:'}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedCountry.resources.map((res, idx) => (
                    <a
                      key={idx}
                      href={res.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-2 bg-blue-50/50 hover:bg-blue-100/70 text-xs font-medium text-blue-900 rounded-xl border border-blue-200 transition flex items-center gap-1.5"
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
