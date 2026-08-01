'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function MathSitesPage() {
  const [lang, setLang] = useState('fa');
  const isFa = lang === 'fa';

  const mathSitesData = [
    {
      flag: '🇺🇸',
      countryFa: 'ایالات متحده (USA)',
      countryEn: 'United States (USA)',
      sites: [
        { name: 'Khan Academy', link: 'https://www.khanacademy.org', descFa: 'ریاضی از پایه تا پیشرفته', descEn: 'Math from basic to advanced' },
        { name: 'IXL Math', link: 'https://www.ixl.com', descFa: 'تمرین پایه به پایه', descEn: 'Grade-by-grade practice' },
        { name: 'Brilliant', link: 'https://brilliant.org', descFa: 'آموزش مفهومی و تعاملی', descEn: 'Conceptual & interactive learning' },
      ],
    },
    {
      flag: '🇬🇧',
      countryFa: 'بریتانیا (UK)',
      countryEn: 'United Kingdom (UK)',
      sites: [
        { name: 'Maths Genie', link: 'https://mathsgenie.co.uk', descFa: 'درسنامه، نمونه سوالات امتحان و ویدیوهای آموزشی', descEn: 'GCSE & A-Level revision, exam papers, and videos' },
        { name: 'Maths with Mum', link: 'https://www.mathswithmum.com', descFa: 'مناسب دبستان', descEn: 'Primary school math' },
        { name: 'NRICH Math', link: 'https://nrich.maths.org', descFa: 'پازل و بازی از دانشگاه کمبریج', descEn: 'Puzzles and games by Cambridge University' },
      ],
    },
    {
      flag: '🇩🇪',
      countryFa: 'آلمان (Germany)',
      countryEn: 'Germany',
      sites: [
        { name: 'Mathefritz', link: 'https://mathefritz.de', descFa: 'به آلمانی، پایه دبستان', descEn: 'Elementary school math in German' },
        { name: 'Serlo', link: 'https://serlo.org', descFa: 'رایگان با توضیح گام‌به‌گام (آلمانی/انگلیسی)', descEn: 'Free step-by-step math explanations' },
      ],
    },
    {
      flag: '🇫🇷',
      countryFa: 'فرانسه (France)',
      countryEn: 'France',
      sites: [
        { name: 'Maths et tiques', link: 'https://www.maths-et-tiques.fr', descFa: 'ویدئو و تمرین به فرانسوی', descEn: 'Math videos and exercises in French' },
      ],
    },
    {
      flag: '🇨🇦',
      countryFa: 'کانادا (Canada)',
      countryEn: 'Canada',
      sites: [
        { name: 'Math Central', link: 'https://mathcentral.uregina.ca', descFa: 'منبع رایگان برای معلمان و دانش‌آموزان', descEn: 'Free resource for teachers and students' },
      ],
    },
    {
      flag: '🇦🇺',
      countryFa: 'استرالیا (Australia)',
      countryEn: 'Australia',
      sites: [
        { name: 'Maths Online', link: 'https://www.mathsonline.com.au', descFa: 'درسنامه و تمرین - بخشی رایگان', descEn: 'Lessons and practice - partial free access' },
      ],
    },
    {
      flag: '🇮🇳',
      countryFa: 'هند (India)',
      countryEn: 'India',
      sites: [
        { name: 'BYJU\'S', link: 'https://byjus.com', descFa: 'ویدیوهای مفهومی پایه تا دوازدهم', descEn: 'Conceptual math videos for Grades 1-12' },
        { name: 'Cuemath', link: 'https://www.cuemath.com', descFa: 'تمرین تعاملی ریاضی پایه', descEn: 'Interactive foundational math practice' },
      ],
    },
    {
      flag: '🇯🇵',
      countryFa: 'ژاپن (Japan)',
      countryEn: 'Japan',
      sites: [
        { name: 'Sugaku', link: 'https://sugaku.net', descFa: 'به ژاپنی، مناسب دبستان و راهنمایی', descEn: 'In Japanese, suitable for primary & middle school' },
      ],
    },
    {
      flag: '🇹🇷',
      countryFa: 'ترکیه (Turkey)',
      countryEn: 'Turkey',
      sites: [
        { name: 'Matematik Vakti', link: 'https://www.matematikvakti.com', descFa: 'تمرین و آزمون به ترکی', descEn: 'Math practice and tests in Turkish' },
      ],
    },
  ];

  return (
    <main dir={isFa ? 'rtl' : 'ltr'} className="min-h-screen bg-slate-50 text-slate-900 font-sans pb-12 antialiased">
      {/* هدر بالای صفحه */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200/80 px-4 py-3 shadow-sm">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link 
              href="/" 
              className="px-3 py-1.5 bg-gray-100 hover:bg-gray-200 text-slate-700 rounded-xl text-xs font-bold transition flex items-center gap-1"
            >
              <span>{isFa ? '← بازگشت به صفحه اصلی' : '← Back to Home'}</span>
            </Link>
            <h1 className="font-black text-base md:text-xl text-slate-800 tracking-tight">
              💻 {isFa ? 'سایت‌های آموزشی ریاضی کشورها' : 'Math Websites by Country'}
            </h1>
          </div>

          <div className="flex items-center gap-2 bg-gray-100 px-3 py-1.5 rounded-lg border border-gray-300">
            <button 
              type="button"
              onClick={() => setLang('fa')} 
              className={`text-xs font-bold transition ${isFa ? 'text-blue-700 underline font-black' : 'text-gray-500 hover:text-black'}`}
            >
              فارسی
            </button>
            <span className="text-gray-400 font-light">|</span>
            <button 
              type="button"
              onClick={() => setLang('en')} 
              className={`text-xs font-bold transition ${!isFa ? 'text-blue-700 underline font-black' : 'text-gray-500 hover:text-black'}`}
            >
              English
            </button>
          </div>
        </div>
      </header>

      {/* لیست سایت‌ها */}
      <section className="max-w-5xl mx-auto px-4 pt-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-4xl font-black text-slate-900 mb-3">
            {isFa ? 'آدرس سایت‌های آموزشی ریاضی' : 'Educational Math Websites'}
          </h2>
          <p className="text-slate-600 text-sm md:text-base">
            {isFa ? 'مجموعه‌ای از بهترین سایت‌های تمرین و آموزش ریاضی به تفکیک کشورها' : 'A curated collection of top math learning platforms by country'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mathSitesData.map((country, idx) => (
            <div key={idx} className="bg-white p-5 rounded-2xl border border-gray-200/90 shadow-sm hover:shadow-md transition">
              <div className="flex items-center gap-2.5 border-b border-gray-100 pb-3 mb-4">
                <span className="text-2xl">{country.flag}</span>
                <h3 className="font-bold text-base text-slate-800">
                  {isFa ? country.countryFa : country.countryEn}
                </h3>
              </div>

              <div className="space-y-3">
                {country.sites.map((site, sIdx) => (
                  <a
                    key={sIdx}
                    href={site.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block p-3 rounded-xl bg-slate-50 hover:bg-blue-50/60 border border-slate-200/70 hover:border-blue-200 transition group"
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-bold text-sm text-blue-900 group-hover:text-blue-700">
                        {site.name}
                      </span>
                      <span className="text-xs text-blue-500 group-hover:translate-x-0.5 transition-transform">↗</span>
                    </div>
                    <p className="text-xs text-slate-500 font-normal">
                      {isFa ? site.descFa : site.descEn}
                    </p>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
