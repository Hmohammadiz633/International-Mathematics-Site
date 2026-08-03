'use client';

import React, { useState } from 'react';

const MATH_SITES_DATA = [
  {
    id: 'iran',
    flag: '🇮🇷',
    countryFa: 'ایران',
    countryEn: 'Iran',
    preUniversity: [
      { name: 'گاما (شبکه آموزشی رشد)', desc: 'gama.ir', url: 'https://gama.ir' },
      { name: 'مدرسه مجازی ایران', desc: 'iransch.ir', url: 'https://iransch.ir' },
      { name: 'آلاء', desc: 'alaatv.com', url: 'https://alaatv.com' },
      { name: 'خان آکادمی فارسی', desc: 'fa.khanacademy.org', url: 'https://fa.khanacademy.org' },
      { name: 'ریاضیات ایران (رشد)', desc: 'roshd.ir', url: 'https://roshd.ir' }
    ],
    university: [
      { name: 'دانشگاه صنعتی شریف (دانشکده ریاضی)', desc: 'math.sharif.edu', url: 'https://math.sharif.edu' },
      { name: 'دانشگاه تهران (دانشکده ریاضی)', desc: 'math.ut.ac.ir', url: 'https://math.ut.ac.ir' },
      { name: 'دانشگاه صنعتی امیرکبیر', desc: 'math.aut.ac.ir', url: 'https://math.aut.ac.ir' },
      { name: 'دانشگاه فردوسی مشهد', desc: 'math.fum.ac.ir', url: 'https://math.fum.ac.ir' },
      { name: 'انجمن ریاضی ایران', desc: 'ims.ir', url: 'https://ims.ir' },
      { name: 'پرتال جامع ریاضیات (مگاایران)', desc: 'magiran.com', url: 'https://www.magiran.com' }
    ]
  },
  {
    id: 'usa',
    flag: '🇺🇸',
    countryFa: 'آمریکا',
    countryEn: 'USA',
    preUniversity: [
      { name: 'Khan Academy', desc: 'khanacademy.org', url: 'https://khanacademy.org' },
      { name: 'Desmos (یادگیری تعاملی)', desc: 'desmos.com', url: 'https://desmos.com' },
      { name: 'Brilliant', desc: 'brilliant.org', url: 'https://brilliant.org' }
    ],
    university: [
      { name: 'MIT OpenCourseWare', desc: 'ocw.mit.edu', url: 'https://ocw.mit.edu' },
      { name: "Paul's Online Notes", desc: 'tutorial.math.lamar.edu', url: 'https://tutorial.math.lamar.edu' },
      { name: 'Wolfram MathWorld', desc: 'mathworld.wolfram.com', url: 'https://mathworld.wolfram.com' }
    ]
  },
  {
    id: 'canada',
    flag: '🇨🇦',
    countryFa: 'کانادا',
    countryEn: 'Canada',
    preUniversity: [
      { name: 'TVO Mathify (انتاریو)', desc: 'tvomathify.com', url: 'https://tvomathify.com' },
      { name: 'IXL Math (کانادا)', desc: 'ca.ixl.com', url: 'https://ca.ixl.com' },
      { name: 'CK-12 Foundation', desc: 'ck12.org', url: 'https://ck12.org' }
    ],
    university: [
      { name: 'CEMC (Waterloo)', desc: 'cemc.uwaterloo.ca', url: 'https://cemc.uwaterloo.ca' },
      { name: 'UBC Math Resources', desc: 'math.ubc.ca', url: 'https://math.ubc.ca' },
      { name: 'Perimeter Institute (منابع نظری)', desc: 'perimeterinstitute.ca', url: 'https://perimeterinstitute.ca' }
    ]
  },
  {
    id: 'uk',
    flag: '🇬🇧',
    countryFa: 'بریتانیا',
    countryEn: 'UK',
    preUniversity: [
      { name: 'AMSP', desc: 'amsp.org.uk', url: 'https://amsp.org.uk' },
      { name: 'Maths Genie', desc: 'mathsgenie.co.uk', url: 'https://mathsgenie.co.uk' },
      { name: 'Corbettmaths', desc: 'corbettmaths.com', url: 'https://corbettmaths.com' }
    ],
    university: [
      { name: 'NRICH (کمبریج)', desc: 'nrich.maths.org', url: 'https://nrich.maths.org' },
      { name: 'Gresham College (سخنرانی‌ها)', desc: 'gresham.ac.uk', url: 'https://gresham.ac.uk' },
      { name: 'Oxford Mathematics (سری ویدیو)', desc: 'maths.ox.ac.uk', url: 'https://maths.ox.ac.uk' }
    ]
  },
  {
    id: 'germany',
    flag: '🇩🇪',
    countryFa: 'آلمان',
    countryEn: 'Germany',
    preUniversity: [
      { name: 'Mathegym', desc: 'mathegym.de', url: 'https://mathegym.de' },
      { name: 'Bettermarks', desc: 'bettermarks.com', url: 'https://bettermarks.com' },
      { name: 'Serlo (آلمانی)', desc: 'serlo.org', url: 'https://serlo.org' }
    ],
    university: [
      { name: 'OMB+', desc: 'ombplus.de', url: 'https://ombplus.de' },
      { name: 'TU Berlin (Skripte)', desc: 'math.tu-berlin.de', url: 'https://math.tu-berlin.de' },
      { name: 'LMU Munich (منابع آنلاین)', desc: 'math.lmu.de', url: 'https://math.lmu.de' }
    ]
  },
  {
    id: 'france',
    flag: '🇫🇷',
    countryFa: 'فرانسه',
    countryEn: 'France',
    preUniversity: [
      { name: 'CNED', desc: 'cned.fr', url: 'https://cned.fr' },
      { name: 'Maths-et-tiques', desc: 'maths-et-tiques.fr', url: 'https://maths-et-tiques.fr' },
      { name: 'Les Bons Profs', desc: 'lesbonsprofs.com', url: 'https://lesbonsprofs.com' }
    ],
    university: [
      { name: 'Exo7', desc: 'exo7.emath.fr', url: 'https://exo7.emath.fr' },
      { name: 'BibMath', desc: 'bibmath.net', url: 'https://bibmath.net' },
      { name: 'Université Paris-Saclay (MOOC)', desc: 'universite-paris-saclay.fr', url: 'https://universite-paris-saclay.fr' }
    ]
  },
  {
    id: 'australia',
    flag: '🇦🇺',
    countryFa: 'استرالیا',
    countryEn: 'Australia',
    preUniversity: [
      { name: 'Maths Online (UNSW)', desc: 'mathsonline.com.au', url: 'https://mathsonline.com.au' },
      { name: 'Australian Curriculum (Scootle)', desc: 'scootle.edu.au', url: 'https://scootle.edu.au' },
      { name: 'Cluey Learning', desc: 'clueylearning.com.au', url: 'https://clueylearning.com.au' },
      { name: 'HSC Maths by Topic', desc: 'hscmathsbytopic.firsteducation.com.au', url: 'https://hscmathsbytopic.firsteducation.com.au/' }
    ],
    university: [
      { name: 'AMSI', desc: 'amsi.org.au', url: 'https://amsi.org.au' },
      { name: 'UNSW Maths Resources', desc: 'unsw.edu.au', url: 'https://unsw.edu.au' },
      { name: 'ANU (سخنرانی‌ها)', desc: 'anu.edu.au', url: 'https://anu.edu.au' }
    ]
  },
  {
    id: 'turkey',
    flag: '🇹🇷',
    countryFa: 'ترکیه',
    countryEn: 'Turkey',
    preUniversity: [
      { name: 'EBA', desc: 'eba.gov.tr', url: 'https://eba.gov.tr' },
      { name: 'Doping Hafıza', desc: 'dopinghafiza.com', url: 'https://dopinghafiza.com' },
      { name: 'Kunduz (ترکی)', desc: 'kunduz.com/tr', url: 'https://kunduz.com/tr' }
    ],
    university: [
      { name: 'Akademik Matematik', desc: 'akademikmatematik.com', url: 'https://akademikmatematik.com' },
      { name: 'ODTÜ (METU) OpenCourseWare', desc: 'ocw.metu.edu.tr', url: 'https://ocw.metu.edu.tr' },
      { name: 'Matematik Dünyası (dergi)', desc: 'matematikdunyasi.org', url: 'https://matematikdunyasi.org' }
    ]
  },
  {
    id: 'japan',
    flag: '🇯🇵',
    countryFa: 'ژاپن',
    countryEn: 'Japan',
    preUniversity: [
      { name: 'MEXT (منابع رسمی)', desc: 'mext.go.jp', url: 'https://mext.go.jp' },
      { name: 'NHK for School (ریاضی)', desc: 'nhk.or.jp/school', url: 'https://nhk.or.jp/school' },
      { name: 'Suugaku.jp', desc: 'suugaku.jp', url: 'https://suugaku.jp' }
    ],
    university: [
      { name: 'OCW - دانشگاه توکیو', desc: 'ocw.u-tokyo.ac.jp', url: 'https://ocw.u-tokyo.ac.jp' },
      { name: 'Kyoto University OCW', desc: 'ocw.kyoto-u.ac.jp', url: 'https://ocw.kyoto-u.ac.jp' },
      { name: 'J-STAGE (مقالات ریاضی)', desc: 'jstage.jst.go.jp', url: 'https://jstage.jst.go.jp' }
    ]
  },
  {
    id: 'india',
    flag: '🇮🇳',
    countryFa: 'هند',
    countryEn: 'India',
    preUniversity: [
      { name: "Byju's", desc: 'byjus.com/maths', url: 'https://byjus.com/maths' },
      { name: 'Vedantu', desc: 'vedantu.com', url: 'https://vedantu.com' },
      { name: 'Toppr', desc: 'toppr.com', url: 'https://toppr.com' }
    ],
    university: [
      { name: 'NPTEL', desc: 'nptel.ac.in', url: 'https://nptel.ac.in' },
      { name: 'ISI Kolkata (منابع)', desc: 'isical.ac.in', url: 'https://isical.ac.in' },
      { name: 'IIT Bombay (سخنرانی‌ها)', desc: 'iitb.ac.in', url: 'https://iitb.ac.in' }
    ]
  }
];

export default function MathSitesPage() {
  const [lang, setLang] = useState('fa');
  const [selectedCountry, setSelectedCountry] = useState(MATH_SITES_DATA[0]);

  const isFa = lang === 'fa';

  return (
    <main dir={isFa ? 'rtl' : 'ltr'} className="min-h-screen bg-slate-50 text-slate-900 font-sans p-4 md:p-8 antialiased">
      <div className="max-w-6xl mx-auto">
        
        {/* هدر صفحه */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-gray-200">
          <a 
            href="/" 
            className="px-4 py-2 bg-slate-200 hover:bg-slate-300 text-slate-800 text-xs md:text-sm font-semibold rounded-xl transition inline-block"
          >
            {isFa ? '🏠 بازگشت به صفحه اصلی' : '🏠 Back to Home'}
          </a>

          <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-xl border border-gray-200 shadow-sm">
            <button 
              type="button"
              onClick={() => setLang('fa')} 
              className={`text-xs font-bold transition cursor-pointer ${isFa ? 'text-slate-900 underline font-black' : 'text-gray-400 hover:text-black'}`}
            >
              فارسی
            </button>
            <span className="text-gray-300 font-light">|</span>
            <button 
              type="button"
              onClick={() => setLang('en')} 
              className={`text-xs font-bold transition cursor-pointer ${!isFa ? 'text-slate-900 underline font-black' : 'text-gray-400 hover:text-black'}`}
            >
              English
            </button>
          </div>
        </div>

        {/* عنوان اصلی */}
        <div className="text-center mb-8">
          <h1 className="text-2xl md:text-4xl font-black text-slate-900 mb-3">
            💻 {isFa ? 'سایت‌های آموزشی ریاضی کشورها' : 'Math Educational Websites'}
          </h1>
          <p className="text-xs md:text-sm text-slate-600 font-medium">
            {isFa ? 'برای مشاهده سایت‌های هر کشور، روی دکمه مربوط به آن کلیک کنید:' : 'Click on any country button to reveal its resources below:'}
          </p>
        </div>

        {/* لیست دکمه‌های کشورها */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-8">
          {MATH_SITES_DATA.map((item) => {
            const isSelected = selectedCountry?.id === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setSelectedCountry(item)}
                className={`
                  px-4 py-2.5 rounded-xl font-bold text-xs md:text-sm flex items-center gap-2 transition cursor-pointer border
                  ${isSelected 
                    ? 'bg-slate-800 text-white border-slate-800 shadow-md scale-105' 
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

        {/* کادر نمایش اطلاعات کشور انتخاب شده */}
        {selectedCountry && (
          <div className="bg-slate-100 rounded-3xl p-6 md:p-8 border border-slate-300 shadow-sm transition-all duration-300">
            
            <div className="flex items-center gap-3 border-b border-slate-300 pb-4 mb-8">
              <span className="text-4xl">{selectedCountry.flag}</span>
              <h2 className="text-xl md:text-2xl font-black text-slate-900">
                {isFa ? `منابع و سایت‌های ریاضی ${selectedCountry.countryFa}` : `${selectedCountry.countryEn} Math Websites`}
              </h2>
            </div>

            <div className="flex flex-col gap-10">
              
              {/* بخش پیش‌دانشگاهی */}
              {selectedCountry.preUniversity && selectedCountry.preUniversity.length > 0 && (
                <div>
                  <h3 className="text-lg font-extrabold text-slate-800 mb-4 flex items-center gap-2">
                    🏫 {isFa ? 'پیش‌دانشگاهی' : 'Pre-University'} 
                    <span className="text-xs bg-slate-200 text-slate-600 px-2.5 py-0.5 rounded-full font-bold">
                      {selectedCountry.preUniversity.length}
                    </span>
                  </h3>

                  {/* گرید چند ستونه پویا */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {selectedCountry.preUniversity.map((site, idx) => (
                      <a
                        key={idx}
                        href={site.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-4 bg-white hover:bg-slate-200/60 border border-slate-200 hover:border-slate-400 rounded-2xl transition group flex items-start justify-between shadow-sm h-full"
                      >
                        <div className="flex flex-col justify-between h-full w-full">
                          <div className="font-bold text-slate-900 group-hover:underline text-sm md:text-base mb-1">
                            {site.name}
                          </div>
                          <div className="text-xs text-slate-500 dir-ltr text-right">
                            {site.desc}
                          </div>
                        </div>
                        <span className="text-slate-400 group-hover:text-slate-700 font-bold group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform text-xs mr-2">↗</span>
                      </a>
                    ))}
                  </div>
                </div>
              )}

              {/* بخش دانشگاهی */}
              {selectedCountry.university && selectedCountry.university.length > 0 && (
                <div>
                  <h3 className="text-lg font-extrabold text-slate-800 mb-4 flex items-center gap-2">
                    🎓 {isFa ? 'دانشگاهی' : 'University'}
                    <span className="text-xs bg-slate-200 text-slate-600 px-2.5 py-0.5 rounded-full font-bold">
                      {selectedCountry.university.length}
                    </span>
                  </h3>

                  {/* گرید چند ستونه پویا */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {selectedCountry.university.map((site, idx) => (
                      <a
                        key={idx}
                        href={site.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-4 bg-white hover:bg-slate-200/60 border border-slate-200 hover:border-slate-400 rounded-2xl transition group flex items-start justify-between shadow-sm h-full"
                      >
                        <div className="flex flex-col justify-between h-full w-full">
                          <div className="font-bold text-slate-900 group-hover:underline text-sm md:text-base mb-1">
                            {site.name}
                          </div>
                          <div className="text-xs text-slate-500 dir-ltr text-right">
                            {site.desc}
                          </div>
                        </div>
                        <span className="text-slate-400 group-hover:text-slate-700 font-bold group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform text-xs mr-2">↗</span>
                      </a>
                    ))}
                  </div>
                </div>
              )}

            </div>

          </div>
        )}

      </div>
    </main>
  );
}
