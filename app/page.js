'use client';

import { useState } from 'react';
import Link from 'next/link';

const FEEDBACKS = [
  { fa: 'بازخورد ۱', en: 'Feedback 1', link: 'https://t.me/International_Maths/110' },
  { fa: 'بازخورد ۲', en: 'Feedback 2', link: 'https://t.me/International_Maths/111' },
  { fa: 'بازخورد ۳', en: 'Feedback 3', link: 'https://t.me/International_Maths/1352' },
];

const MATH_SITES_DATA = [
  {
    id: 'usa',
    flag: '🇺🇸',
    countryFa: 'آمریکا',
    countryEn: 'USA',
    titleFa: 'سایت‌های ریاضی و آزمون‌های آمریکا',
    titleEn: 'US Math Websites & Exams',
    link: 'https://t.me/International_Maths/379',
    descriptionFa: 'منابع و آزمون‌های استاندارد ریاضیات در آمریکا شامل College Board، کنتست‌های ملی و سایت‌های آموزش ریاضی.',
    descriptionEn: 'Standard US mathematics resources and exams including College Board, national contests, and math learning sites.',
    resources: [
      { title: 'سایت رسمی College Board (SAT / AP)', url: 'https://www.collegeboard.org' },
      { title: 'پلتفرم آموزش آنلاین Khan Academy', url: 'https://www.khanacademy.org' },
      { title: 'مسابقات ریاضی آمریکا (AMC / MAA)', url: 'https://www.maa.org/math-competitions' }
    ]
  },
  {
    id: 'uk',
    flag: '🇬🇧',
    countryFa: 'انگلستان',
    countryEn: 'UK',
    titleFa: 'سایت‌های ریاضی و آزمون‌های انگلستان',
    titleEn: 'UK Math Websites & Exams',
    link: 'https://t.me/International_Maths/297',
    descriptionFa: 'پرتال‌های آموزش و امتحان ریاضیات بریتانیا شامل برگه نمونه سوالات، امتحانات GCSE و A-Level.',
    descriptionEn: 'UK mathematics portals and exam boards including past papers, GCSE, and A-Level resources.',
    resources: [
      { title: 'پرتال Pearson Edexcel', url: 'https://qualifications.pearson.com' },
      { title: 'سایت آموزشی Physics & Maths Tutor', url: 'https://www.physicsandmathstutor.com' },
      { title: 'موسسه UKMT (المپیاد ریاضی بریتانیا)', url: 'https://www.ukmt.org.uk' }
    ]
  },
  {
    id: 'canada',
    flag: '🇨🇦',
    countryFa: 'کانادا',
    countryEn: 'Canada',
    titleFa: 'سایت‌های ریاضی و المپیاد کانادا',
    titleEn: 'Canadian Math Websites',
    link: 'https://t.me/International_Maths',
    descriptionFa: 'مرکز مسابقات ریاضی دانشگاه واترلو و برنامه‌های آموزشی استانی کانادا.',
    descriptionEn: 'Waterloo CEMC math contest center and Canadian provincial educational frameworks.',
    resources: [
      { title: 'مرکز مسابقات ریاضی دانشگاه واترلو (CEMC)', url: 'https://www.cemc.uwaterloo.ca' },
      { title: 'وزارت آموزش اونتاریو', url: 'https://www.ontario.ca/page/ministry-education' }
    ]
  },
  {
    id: 'germany',
    flag: '🇩🇪',
    countryFa: 'آلمان',
    countryEn: 'Germany',
    titleFa: 'سایت‌های ریاضی آلمان',
    titleEn: 'German Math Websites',
    link: 'https://t.me/International_Maths',
    descriptionFa: 'پرتال‌های کمک‌آموزشی ریاضیات برای امتحانات Abitur و مدارس Gymnasium آلمان.',
    descriptionEn: 'Math tutoring portals for German Abitur exams and Gymnasium schools.',
    resources: [
      { title: 'پرتال آموزشی Mathebibel', url: 'https://www.mathebibel.de' },
      { title: 'سایت آموزش آنلاین Serlo Mathe', url: 'https://de.serlo.org/mathe' }
    ]
  },
  {
    id: 'australia',
    flag: '🇦🇺',
    countryFa: 'استرالیا',
    countryEn: 'Australia',
    titleFa: 'سایت‌های ریاضی استرالیا',
    titleEn: 'Australian Math Websites',
    link: 'https://t.me/International_Maths',
    descriptionFa: 'برنامه درسی ملی استرالیا و مسابقات بین‌المللی ریاضیات استرالیا (AMC).',
    descriptionEn: 'Australian national curriculum and Australian Mathematics Competition (AMC).',
    resources: [
      { title: 'برنامه درسی ملی استرالیا (ACARA)', url: 'https://www.australiancurriculum.edu.au' },
      { title: 'اعتماد ریاضیات استرالیا (AMT)', url: 'https://www.amt.edu.au' }
    ]
  },
  {
    id: 'france',
    flag: '🇫🇷',
    countryFa: 'فرانسه',
    countryEn: 'France',
    titleFa: 'سایت‌های ریاضی فرانسه',
    titleEn: 'French Math Websites',
    link: 'https://t.me/International_Maths',
    descriptionFa: 'منابع وزارت آموزش ملی فرانسه و سایت‌های تخصصی ریاضی دبیرستان.',
    descriptionEn: 'French Ministry of National Education resources and high school math portals.',
    resources: [
      { title: 'وزارت آموزش ملی فرانسه', url: 'https://www.education.gouv.fr' },
      { title: 'پرتال آموزشی Île des Mathématiques', url: 'https://www.ilemaths.net' }
    ]
  },
  {
    id: 'global',
    flag: '🌍',
    countryFa: 'بین‌المللی',
    countryEn: 'Global',
    titleFa: 'سایت‌های مرجع جهانی ریاضی',
    titleEn: 'Global Math References',
    link: 'https://t.me/International_Maths',
    descriptionFa: 'منابع و نرم‌افزارهای قدرتمند جهانی برای محاسبات، رسم نمودار و آموزش پیشرفته ریاضی.',
    descriptionEn: 'Powerful global tools and software for computations, graphing, and advanced math learning.',
    resources: [
      { title: 'نرم‌افزار محاسباتی Wolfram Alpha', url: 'https://www.wolframalpha.com' },
      { title: 'ابزار رسم نمودار و هندسه GeoGebra', url: 'https://www.geogebra.org' },
      { title: 'المپیاد جهانی ریاضی (IMO)', url: 'https://www.imo-official.org' }
    ]
  }
];

export default function MathSitesPage() {
  const [lang, setLang] = useState('fa');
  const [selectedCountry, setSelectedCountry] = useState(MATH_SITES_DATA[0]);
  const [isFeedbackOpen, setIsFeedbackOpen] = useState(false);

  const isFa = lang === 'fa';

  return (
    <main dir={isFa ? 'rtl' : 'ltr'} className="min-h-screen bg-slate-50 text-slate-900 font-sans pb-12 antialiased">
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200/80 px-4 py-3 shadow-sm">
        <div className="max-w-6xl mx-auto flex flex-col items-center gap-3">
          <div className="w-full flex items-center justify-between">
            <div className="flex items-center gap-3">
              {/* دکمه خانه */}
              <Link 
                href="/" 
                className="flex items-center gap-1.5 px-3 py-1.5 bg-gray-50 hover:bg-gray-100 text-gray-700 hover:text-blue-600 text-xs font-bold rounded-lg border border-gray-300 shadow-sm transition-all"
              >
                <span>🏠</span>
                <span>{isFa ? 'خانه' : 'Home'}</span>
              </Link>

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
            </div>

            <div className="flex items-center gap-2 bg-gray-100 px-3 py-1.5 rounded-lg border border-gray-300 shadow-inner">
              <button type="button" onClick={() => setLang('fa')} className={`text-xs font-bold transition ${isFa ? 'text-blue-700 underline font-black' : 'text-gray-500 hover:text-black'}`}>فارسی</button>
              <span className="text-gray-400 font-light">|</span>
              <button type="button" onClick={() => setLang('en')} className={`text-xs font-bold transition ${!isFa ? 'text-blue-700 underline font-black' : 'text-gray-500 hover:text-black'}`}>English</button>
            </div>
          </div>

          <div className="w-full flex flex-col items-center gap-2 border-t border-gray-100 pt-3">
            <div className="w-full flex items-center justify-center gap-4 md:gap-6 overflow-x-auto py-2 text-xs md:text-sm font-medium text-gray-700">
              <Link href="/educational-systems" className="hover:text-blue-600 whitespace-nowrap transition-colors">
                {isFa ? 'نظام آموزشی کشورها' : 'Educational Systems'}
              </Link>
              <Link href="/books" className="hover:text-blue-600 whitespace-nowrap transition-colors">
                {isFa ? 'کتب و منابع آموزشی' : 'Books & Resources'}
              </Link>
              <Link href="/math-sites" className="hover:text-blue-600 whitespace-nowrap transition-colors">
                {isFa ? 'سایت‌های ریاضی کشورها' : 'Math Websites'}
              </Link>
              <button type="button" aria-expanded={isFeedbackOpen} onClick={() => setIsFeedbackOpen(!isFeedbackOpen)} className="hover:text-blue-600 whitespace-nowrap transition-colors flex items-center gap-1">
                <span>{isFa ? 'بازخورد کلاس‌ها' : 'Class Feedback'}</span>
                <span className="text-[10px]">{isFeedbackOpen ? '▲' : '▼'}</span>
              </button>
              <Link href="/#contact" className="hover:text-blue-600 whitespace-nowrap transition-colors">
                {isFa ? 'ارتباط با استاد' : 'Contact'}
              </Link>
            </div>

            {isFeedbackOpen && (
              <div className="w-full flex items-center justify-center gap-2 flex-wrap bg-gray-50 p-3 rounded-2xl border border-gray-200 my-1 shadow-inner">
                {FEEDBACKS.map((item, idx) => (
                  <a key={idx} href={item.link} target="_blank" rel="noopener noreferrer" className="px-3 py-1.5 bg-white hover:bg-gray-100 text-xs font-semibold text-black rounded-lg border border-gray-200 shadow-sm transition-all flex items-center gap-1.5">
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
        {/* عنوان بخش */}
        <div className="text-center mb-8">
          <h1 className="text-2xl md:text-4xl font-black text-slate-900 mb-3">
            💻 {isFa ? 'سایت‌های ریاضی و منابع آموزشی کشورها' : 'International Math Websites & Resources'}
          </h1>
          <p className="text-xs md:text-sm text-slate-600 font-medium">
            {isFa ? 'روی هر دکمه کلیک کنید تا سایت‌ها و لینک‌های تخصصی آن بخش نمایش داده شوند:' : 'Click on any button to reveal specific websites and links:'}
          </p>
        </div>

        {/* دکمه‌های انتخاب کشور/بخش */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 md:gap-3 mb-8">
          {MATH_SITES_DATA.map((item) => {
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

        {/* کارت نمایش اطلاعات */}
        {selectedCountry && (
          <div className="bg-slate-100 text-slate-800 rounded-3xl p-6 md:p-8 border border-slate-300 shadow-sm transition-all duration-300">
            
            {/* سربرگ */}
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

              <a 
                href={selectedCountry.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="self-start sm:self-auto px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold rounded-xl transition whitespace-nowrap shadow-sm"
              >
                🔗 {isFa ? 'مشاهده در تلگرام' : 'View on Telegram'}
              </a>
            </div>

            {/* توضیحات */}
            <p className="text-slate-700 text-sm md:text-base leading-relaxed mb-6 font-normal text-justify">
              {isFa ? selectedCountry.descriptionFa : selectedCountry.descriptionEn}
            </p>

            {/* لینک‌های مفید */}
            {selectedCountry.resources && selectedCountry.resources.length > 0 && (
              <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm">
                <h3 className="font-bold text-sm text-slate-900 mb-3 flex items-center gap-2">
                  🌐 {isFa ? 'سایت‌ها و لینک‌های این بخش:' : 'Websites & Links:'}
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
                      <span>🔗</span>
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
