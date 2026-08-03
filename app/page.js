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
    countryFa: 'ایالات متحده',
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
    id: 'uk',
    flag: '🇬🇧',
    countryFa: 'بریتانیا',
    countryEn: 'UK',
    preUniversity: [
      { name: 'Maths Genie', desc: 'درسنامه، نمونه سوالات امتحان و ویدیوها', url: 'https://mathsgenie.co.uk' },
      { name: 'Maths with Mum', desc: 'مناسب دبستان و دبیرستان', url: 'https://mathswithmum.com' },
      { name: 'NRICH Math', desc: 'پازل و بازی از دانشگاه کمبریج', url: 'https://nrich.maths.org' },
      { name: 'AMSP', desc: 'amsp.org.uk', url: 'https://amsp.org.uk' }
    ],
    university: [
      { name: 'Cambridge Math Resources', desc: 'منابع نظری و کاربردی دانشگاه کمبریج', url: 'https://maths.cam.ac.uk' },
      { name: 'Imperial College London', desc: 'ریاضی مهندسی دانشگاه امپریال لندن', url: 'https://imperial.ac.uk' },
      { name: 'Gresham College', desc: 'سخنرانی‌ها و منابع آزاد ریاضی', url: 'https://gresham.ac.uk' }
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
      { name: 'Serlo', desc: 'serlo.org', url: 'https://serlo.org' }
    ],
    university: [
      { name: 'OMB+', desc: 'ombplus.de', url: 'https://ombplus.de' },
      { name: 'TU Berlin Math', desc: 'math.tu-berlin.de', url: 'https://math.tu-berlin.de' },
      { name: 'LMU Munich Math', desc: 'math.lmu.de', url: 'https://math.lmu.de' }
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
      { name: 'Université Paris-Saclay', desc: 'universite-paris-saclay.fr', url: 'https://universite-paris-saclay.fr' }
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
      { name: 'Kunduz', desc: 'kunduz.com/tr', url: 'https://kunduz.com/tr' }
    ],
    university: [
      { name: 'Akademik Matematik', desc: 'akademikmatematik.com', url: 'https://akademikmatematik.com' },
      { name: 'ODTÜ (METU) OCW', desc: 'ocw.metu.edu.tr', url: 'https://ocw.metu.edu.tr' },
      { name: 'Matematik Dünyası', desc: 'matematikdunyasi.org', url: 'https://matematikdunyasi.org' }
    ]
  },
  {
    id: 'australia',
    flag: '🇦🇺',
    countryFa: 'استرالیا',
    countryEn: 'Australia',
    preUniversity: [
      { name: 'Maths Online', desc: 'درسنامه و تمرین - بخشی رایگان', url: 'https://mathsonline.com.au' },
      { name: 'HSC Maths by Topic', desc: 'آموزش و نمونه سوالات طبقه‌بندی شده ریاضی HSC', url: 'https://hscmathsbytopic.firsteducation.com.au/' },
      { name: 'Scootle', desc: 'scootle.edu.au', url: 'https://scootle.edu.au' }
    ],
    university: [
      { name: 'UNSW Sydney', desc: 'منابع مهندسی و ریاضی دانشگاه نیوساوث ولز', url: 'https://unsw.edu.au' },
      { name: 'ANU Math', desc: 'منابع آموزشی دانشجویی دانشگاه ملی استرالیا', url: 'https://anu.edu.au' },
      { name: 'AMSI Resources', desc: 'amsi.org.au', url: 'https://amsi.org.au' }
    ]
  },
  {
    id: 'canada',
    flag: '🇨🇦',
    countryFa: 'کانادا',
    countryEn: 'Canada',
    preUniversity: [
      { name: 'TVO Mathify', desc: 'tvomathify.com', url: 'https://tvomathify.com' },
      { name: 'IXL Math Canada', desc: 'ca.ixl.com', url: 'https://ca.ixl.com' },
      { name: 'CK-12 Foundation', desc: 'ck12.org', url: 'https://ck12.org' }
    ],
    university: [
      { name: 'CEMC Waterloo', desc: 'cemc.uwaterloo.ca', url: 'https://cemc.uwaterloo.ca' },
      { name: 'UBC Math', desc: 'math.ubc.ca', url: 'https://math.ubc.ca' },
      { name: 'Perimeter Institute', desc: 'perimeterinstitute.ca', url: 'https://perimeterinstitute.ca' }
    ]
  },
  {
    id: 'japan',
    flag: '🇯🇵',
    countryFa: 'ژاپن',
    countryEn: 'Japan',
    preUniversity: [
      { name: 'Sugaku', desc: 'به ژاپنی، مناسب دبستان و راهنمایی', url: 'https://suugaku.jp' },
      { name: 'NHK for School', desc: 'nhk.or.jp/school', url: 'https://nhk.or.jp/school' },
      { name: 'MEXT Math', desc: 'mext.go.jp', url: 'https://mext.go.jp' }
    ],
    university: [
      { name: 'Kyoto University Math', desc: 'ریاضی محض دانشگاه کیوتو', url: 'https://ocw.kyoto-u.ac.jp' },
      { name: 'Todai Math (توکیو)', desc: 'آموزش تخصصی ریاضیات دانشگاه توکیو', url: 'https://ocw.u-tokyo.ac.jp' },
      { name: 'J-STAGE Math', desc: 'jstage.jst.go.jp', url: 'https://jstage.jst.go.jp' }
    ]
  },
  {
    id: 'india',
    flag: '🇮🇳',
    countryFa: 'هند',
    countryEn: 'India',
    preUniversity: [
      { name: "Byju's Math", desc: 'byjus.com/maths', url: 'https://byjus.com/maths' },
      { name: 'Vedantu', desc: 'vedantu.com', url: 'https://vedantu.com' },
      { name: 'Toppr', desc: 'toppr.com', url: 'https://toppr.com' }
    ],
    university: [
      { name: 'NPTEL Math', desc: 'nptel.ac.in', url: 'https://nptel.ac.in' },
      { name: 'ISI Kolkata', desc: 'isical.ac.in', url: 'https://isical.ac.in' },
      { name: 'IIT Bombay', desc: 'iitb.ac.in', url: 'https://iitb.ac.in' }
    ]
  }
];

export default function HomePage() {
  const [lang, setLang] = useState('fa');
  const [selectedCountry, setSelectedCountry] = useState(MATH_SITES_DATA[0]);

  const isFa = lang === 'fa';

  return (
    <main dir={isFa ? 'rtl' : 'ltr'} className="min-h-screen bg-slate-50 text-slate-900 font-sans p-4 md:p-8 antialiased">
      <div className="max-w-5xl mx-auto">
        
        {/* هدر */}
        <div className="flex items-center justify-between mb-8 pb-4">
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

          <a 
            href="/" 
            className="px-4 py-2 bg-slate-200 hover:bg-slate-300 text-slate-800 text-xs md:text-sm font-semibold rounded-xl transition inline-block"
          >
            {isFa ? '🏠 بازگشت به صفحه اصلی' : '🏠 Home'}
          </a>
        </div>

        {/* عنوان */}
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
                <span className="text-base md:text-lg leading-none">{item.flag}</span>
                <span>{isFa ? `${item.countryFa} (${item.countryEn})` : item.countryEn}</span>
              </button>
            );
          })}
        </div>

        {/* کادر نمایش اطلاعات کشور انتخاب شده */}
        {selectedCountry && (
          <div className="bg-slate-100/70 rounded-3xl p-6 md:p-8 border border-slate-200 shadow-sm transition-all duration-300">
            
            <div className="flex items-center justify-center gap-3 border-b border-slate-200 pb-5 mb-8">
              <h2 className="text-xl md:text-2xl font-black text-slate-900">
                {isFa ? `منابع و سایت‌های ریاضی ${selectedCountry.countryFa} (${selectedCountry.countryEn})` : `${selectedCountry.countryEn} Math Websites`}
              </h2>
              <span className="text-3xl">{selectedCountry.flag}</span>
            </div>

            {/* چیدمان ستونی دو قسمتی: قبل دانشگاه / دانشگاهی */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* بخش قبل دانشگاه */}
              <div>
                <h3 className="text-base font-extrabold text-slate-800 mb-4 flex items-center justify-end gap-2">
                  <span>{isFa ? 'قبل دانشگاه' : 'Pre-University'}</span>
                  <span>🏫</span>
                </h3>

                <div className="flex flex-col gap-3">
                  {selectedCountry.preUniversity?.map((site, idx) => (
                    <a
                      key={idx}
                      href={site.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-4 bg-white hover:bg-slate-50 border border-slate-200 rounded-2xl transition group flex items-start justify-between shadow-sm"
                    >
                      <span className="text-slate-400 group-hover:text-slate-700 font-bold transition text-xs">↗</span>
                      <div className="text-right">
                        <div className="font-bold text-slate-900 group-hover:underline text-sm mb-1">
                          {site.name}
                        </div>
                        <div className="text-xs text-slate-500">
                          {site.desc}
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* بخش دانشگاهی */}
              <div>
                <h3 className="text-base font-extrabold text-slate-800 mb-4 flex items-center justify-end gap-2">
                  <span>{isFa ? 'دانشگاهی' : 'University'}</span>
                  <span>🎓</span>
                </h3>

                <div className="flex flex-col gap-3">
                  {selectedCountry.university?.map((site, idx) => (
                    <a
                      key={idx}
                      href={site.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-4 bg-white hover:bg-slate-50 border border-slate-200 rounded-2xl transition group flex items-start justify-between shadow-sm"
                    >
                      <span className="text-slate-400 group-hover:text-slate-700 font-bold transition text-xs">↗</span>
                      <div className="text-right">
                        <div className="font-bold text-slate-900 group-hover:underline text-sm mb-1">
                          {site.name}
                        </div>
                        <div className="text-xs text-slate-500">
                          {site.desc}
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

            </div>

          </div>
        )}

      </div>
    </main>
  );
}
