'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function MathSitesPage() {
  const [lang, setLang] = useState('fa');
  const isFa = lang === 'fa';

  const mathSitesByCountry = [
    {
      countryFa: 'ایالات متحده (USA)',
      countryEn: 'United States (USA)',
      flag: '🇺🇸',
      sites: [
        { titleFa: 'Khan Academy (ریاضی از پایه تا پیشرفته)', titleEn: 'Khan Academy', link: 'https://www.khanacademy.org' },
        { titleFa: 'IXL (تمرین پایه به پایه)', titleEn: 'IXL', link: 'https://www.ixl.com' },
        { titleFa: 'Brilliant (آموزش مفهومی و تعاملی)', titleEn: 'Brilliant', link: 'https://brilliant.org' },
        { titleFa: 'Mathway (حل مسائل ریاضی)', titleEn: 'Mathway', link: 'https://www.mathway.com' },
        { titleFa: 'WolframAlpha (موتور محاسباتی ریاضی)', titleEn: 'WolframAlpha', link: 'https://www.wolframalpha.com' },
      ],
    },
    {
      countryFa: 'بریتانیا (UK)',
      countryEn: 'United Kingdom (UK)',
      flag: '🇬🇧',
      sites: [
        { titleFa: 'Maths with Mum (مناسب دبستان)', titleEn: 'Maths with Mum', link: 'https://www.mathswithmum.com' },
        { titleFa: 'NRICH (پازل و بازی از دانشگاه کمبریج)', titleEn: 'NRICH - Cambridge', link: 'https://nrich.maths.org' },
        { titleFa: 'BBC Bitesize Maths (آموزش طبق استاندارد بریتانیا)', titleEn: 'BBC Bitesize Maths', link: 'https://www.bbc.co.uk/bitesize/subjects/zjk2xnb' },
        { titleFa: 'Corbettmaths (ویدئو و برگه تمرین)', titleEn: 'Corbettmaths', link: 'https://corbettmaths.com' },
      ],
    },
    {
      countryFa: 'آلمان (Germany)',
      countryEn: 'Germany',
      flag: '🇩🇪',
      sites: [
        { titleFa: 'Mathefritz (به آلمانی، پایه دبستان)', titleEn: 'Mathefritz', link: 'https://mathefritz.de' },
        { titleFa: 'Serlo (رایگان با توضیح گام‌به‌گام - آلمانی/انگلیسی)', titleEn: 'Serlo', link: 'https://serlo.org' },
        { titleFa: 'Mathebibel (آموزش مفاهیم ریاضی آلمان)', titleEn: 'Mathebibel', link: 'https://www.mathebibel.de' },
      ],
    },
    {
      countryFa: 'فرانسه (France)',
      countryEn: 'France',
      flag: '🇫🇷',
      sites: [
        { titleFa: 'Maths et Tiques (ویدئو و تمرین به فرانسوی)', titleEn: 'Maths et Tiques', link: 'https://www.maths-et-tiques.fr' },
        { titleFa: 'Sésamath (منابع آزاد آموزش ریاضی فرانسه)', titleEn: 'Sésamath', link: 'https://www.sesamath.net' },
      ],
    },
    {
      countryFa: 'کانادا (Canada)',
      countryEn: 'Canada',
      flag: '🇨🇦',
      sites: [
        { titleFa: 'Math Central (منبع رایگان برای معلمان و دانش‌آموزان)', titleEn: 'Math Central', link: 'https://mathcentral.uregina.ca' },
        { titleFa: 'TVO Learn Mathematics (استاندارد انناریو کانادا)', titleEn: 'TVO Learn Mathematics', link: 'https://tvolearn.com' },
      ],
    },
    {
      countryFa: 'استرالیا (Australia)',
      countryEn: 'Australia',
      flag: '🇦🇺',
      sites: [
        { titleFa: 'MathsOnline (درسنامه و تمرین - بخشی رایگان)', titleEn: 'MathsOnline', link: 'https://www.mathsonline.com.au' },
        { titleFa: 'AMSITE Mathematics (جامعه ریاضی استرالیا)', titleEn: 'AMSITE Mathematics', link: 'https://amsi.org.au' },
      ],
    },
    {
      countryFa: 'هند (India)',
      countryEn: 'India',
      flag: '🇮🇳',
      sites: [
        { titleFa: 'BYJU\'S (ویدئوهای مفهومی پایه تا دوازدهم)', titleEn: 'BYJU\'S', link: 'https://byjus.com' },
        { titleFa: 'Cuemath (تمرین تعاملی ریاضی پایه)', titleEn: 'Cuemath', link: 'https://www.cuemath.com' },
      ],
    },
    {
      countryFa: 'ژاپن (Japan)',
      countryEn: 'Japan',
      flag: '🇯🇵',
      sites: [
        { titleFa: 'Sugaku (به ژاپنی، مناسب دبستان و راهنمایی)', titleEn: 'Sugaku', link: 'https://sugaku.net' },
      ],
    },
    {
      countryFa: 'ترکیه (Turkey)',
      countryEn: 'Turkey',
      flag: '🇹🇷',
      sites: [
        { titleFa: 'Matematik Vakti (تمرین و آزمون به ترکی)', titleEn: 'Matematik Vakti', link: 'https://www.matematikvakti.com' },
      ],
    },
  ];

  return (
    <main dir={isFa ? 'rtl' : 'ltr'} className="min-h-screen bg-slate-50 text-slate-900 font-sans pb-12 antialiased">
      {/* هدر */}
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
              💻 {isFa ? 'سایت‌های آموزشی ریاضی کشورها' : 'International Math Websites'}
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

      {/* محتوای سایت‌ها */}
      <section className="max-w-5xl mx-auto px-4 pt-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-4xl font-black text-slate-900 mb-3">
            {isFa ? 'منابع و وب‌سایت‌های تخصصی آموزش ریاضی' : 'Specialized Educational Math Websites'}
          </h2>
          <p className="text-slate-600 text-sm md:text-base">
            {isFa ? 'مجموعه وب‌سایت‌های معتبر آموزش ریاضی به تفکیک کشورها' : 'Collection of accredited math education websites by country'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {mathSitesByCountry.map((group, gIdx) => (
            <div key={gIdx} className="bg-white p-5 rounded-2xl border border-gray-200/90 shadow-sm hover:shadow-md transition">
              <div className="flex items-center gap-2.5 border-b border-gray-100 pb-3 mb-4">
                <span className="text-2xl">{group.flag}</span>
                <h3 className="font-bold text-base text-slate-800">
                  {isFa ? group.countryFa : group.countryEn}
                </h3>
              </div>
              <div className="flex flex-col gap-2.5">
                {group.sites.map((site, sIdx) => (
                  <a 
                    key={sIdx} 
                    href={site.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="p-3 bg-blue-50/60 hover:bg-blue-100/80 text-blue-950 text-xs md:text-sm font-semibold rounded-xl border border-blue-200/80 transition flex items-center justify-between group"
                  >
                    <span>{isFa ? site.titleFa : site.titleEn}</span>
                    <span className="text-blue-600 font-bold group-hover:translate-x-1 transition-transform">↗</span>
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
