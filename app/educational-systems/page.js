'use client';

import { useState } from 'react';
import Link from 'next/link';

// داده‌های جامع همه کشورها (شامل تمام موارد جدید بدون حذف قبلی‌ها)
const MATH_SITES_DATA = [
  {
    id: 'iran',
    flag: '🇮🇷',
    countryFa: 'ایران',
    countryEn: 'Iran',
    preUniversity: [
      { name: 'گاما (شبکه آموزشی رشد)', desc: 'نمونه سوال و درسنامه پایه تا دوازدهم', url: 'https://gama.ir' },
      { name: 'مدرسه مجازی ایران', desc: 'ویدیوهای آموزشی وزارت آموزش و پرورش', url: 'https://iransch.ir' },
      { name: 'آلاء', desc: 'درسنامه و کلاس‌های آنلاین ریاضی همه مقاطع', url: 'https://alaatv.com' },
      { name: 'خان آکادمی فارسی', desc: 'ترجمه رسمی خان آکادمی برای پایه', url: 'https://fa.khanacademy.org' },
      { name: 'ریاضیات ایران', desc: 'جزوه و تمرین دبیرستان به تفکیک پایه', url: 'https://roshd.ir' }
    ],
    university: [
      { name: 'دانشگاه صنعتی شریف (آموزشکده ریاضی)', desc: 'جزوات و اسلاید دروس اصلی', url: 'https://math.sharif.edu' },
      { name: 'دانشگاه تهران (دانشکده ریاضی)', desc: 'سرفصل‌ها و منابع معرفی‌شده', url: 'https://math.ut.ac.ir' },
      { name: 'دانشگاه صنعتی امیرکبیر', desc: 'جزوات درسی اساتید', url: 'https://math.aut.ac.ir' },
      { name: 'دانشگاه فردوسی مشهد', desc: 'منابع ریاضی محض و کاربردی', url: 'https://math.fum.ac.ir' },
      { name: 'انجمن ریاضی ایران', desc: 'مقالات آموزشی و منابع تکمیلی', url: 'https://ims.ir' },
      { name: 'پرتال جامع ریاضیات (مگاایران)', desc: 'جستجوی مقالات ریاضی به فارسی', url: 'https://www.magiran.com' }
    ]
  },
  {
    id: 'usa',
    flag: '🇺🇸',
    countryFa: 'آمریکا',
    countryEn: 'USA',
    preUniversity: [
      { name: 'Khan Academy', desc: 'khanacademy.org', url: 'https://www.khanacademy.org' },
      { name: 'Desmos (یادگیری تعاملی)', desc: 'desmos.com', url: 'https://www.desmos.com' },
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
      { name: 'CK-12 Foundation', desc: 'ck12.org', url: 'https://www.ck12.org' }
    ],
    university: [
      { name: 'CEMC (Waterloo)', desc: 'cemc.uwaterloo.ca', url: 'https://www.cemc.uwaterloo.ca' },
      { name: 'UBC Math Resources', desc: 'math.ubc.ca', url: 'https://www.math.ubc.ca' },
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
      { name: 'Maths Genie', desc: 'mathsgenie.co.uk', url: 'https://www.mathsgenie.co.uk' },
      { name: 'Corbettmaths', desc: 'corbettmaths.com', url: 'https://corbettmaths.com' }
    ],
    university: [
      { name: 'NRICH (کمبریج)', desc: 'nrich.maths.org', url: 'https://nrich.maths.org' },
      { name: 'Gresham College (سخنرانی‌ها)', desc: 'gresham.ac.uk', url: 'https://www.gresham.ac.uk' },
      { name: 'Oxford Mathematics (سری ویدیو)', desc: 'maths.ox.ac.uk', url: 'https://www.maths.ox.ac.uk' }
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
      { name: 'Serlo (آلمانی)', desc: 'serlo.org', url: 'https://de.serlo.org' }
    ],
    university: [
      { name: 'OMB+', desc: 'ombplus.de', url: 'https://www.ombplus.de' },
      { name: 'TU Berlin (Skripte)', desc: 'math.tu-berlin.de', url: 'https://www.math.tu-berlin.de' },
      { name: 'LMU Munich (منابع آنلاین)', desc: 'math.lmu.de', url: 'https://www.math.lmu.de' }
    ]
  },
  {
    id: 'france',
    flag: '🇫🇷',
    countryFa: 'فرانسه',
    countryEn: 'France',
    preUniversity: [
      { name: 'CNED', desc: 'cned.fr', url: 'https://www.cned.fr' },
      { name: 'Maths-et-tiques', desc: 'maths-et-tiques.fr', url: 'https://www.maths-et-tiques.fr' },
      { name: 'Les Bons Profs', desc: 'lesbonsprofs.com', url: 'https://www.lesbonsprofs.com' }
    ],
    university: [
      { name: 'Exo7', desc: 'exo7.emath.fr', url: 'http://exo7.emath.fr' },
      { name: 'BibMath', desc: 'bibmath.net', url: 'https://www.bibmath.net' },
      { name: 'Université Paris-Saclay (MOOC)', desc: 'universite-paris-saclay.fr', url: 'https://www.universite-paris-saclay.fr' }
    ]
  },
  {
    id: 'australia',
    flag: '🇦🇺',
    countryFa: 'استرالیا',
    countryEn: 'Australia',
    preUniversity: [
      { name: 'Maths Online (UNSW)', desc: 'mathsonline.com.au', url: 'https://www.mathsonline.com.au' },
      { name: 'Australian Curriculum (Scootle)', desc: 'scootle.edu.au', url: 'https://www.scootle.edu.au' },
      { name: 'Cluey Learning', desc: 'clueylearning.com.au', url: 'https://clueylearning.com.au' },
      { name: 'HSC Maths by Topic', desc: 'hscmathsbytopic.firsteducation.com.au', url: 'https://hscmathsbytopic.firsteducation.com.au/' }
    ],
    university: [
      { name: 'AMSI', desc: 'amsi.org.au', url: 'https://amsi.org.au' },
      { name: 'UNSW Maths Resources', desc: 'unsw.edu.au', url: 'https://www.unsw.edu.au' },
      { name: 'ANU (سخنرانی‌ها)', desc: 'anu.edu.au', url: 'https://www.anu.edu.au' }
    ]
  },
  {
    id: 'turkey',
    flag: '🇹🇷',
    countryFa: 'ترکیه',
    countryEn: 'Turkey',
    preUniversity: [
      { name: 'EBA', desc: 'eba.gov.tr', url: 'https://www.eba.gov.tr' },
      { name: 'Doping Hafıza', desc: 'dopinghafiza.com', url: 'https://www.dopinghafiza.com' },
      { name: 'Kunduz (ترکی)', desc: 'kunduz.com/tr', url: 'https://kunduz.com/tr' }
    ],
    university: [
      { name: 'Akademik Matematik', desc: 'akademikmatematik.com', url: 'https://akademikmatematik.com' },
      { name: 'ODTÜ (METU) OpenCourseWare', desc: 'ocw.metu.edu.tr', url: 'https://ocw.metu.edu.tr' },
      { name: 'Matematik Dünyası (dergi)', desc: 'matematikdunyasi.org', url: 'https://www.matematikdunyasi.org' }
    ]
  },
  {
    id: 'japan',
    flag: '🇯🇵',
    countryFa: 'ژاپن',
    countryEn: 'Japan',
    preUniversity: [
      { name: 'MEXT (منابع رسمی)', desc: 'mext.go.jp', url: 'https://www.mext.go.jp' },
      { name: 'NHK for School (ریاضی)', desc: 'nhk.or.jp/school', url: 'https://www.nhk.or.jp/school' },
      { name: 'Suugaku.jp', desc: 'suugaku.jp', url: 'https://www.suugaku.jp' }
    ],
    university: [
      { name: 'OCW - دانشگاه توکیو', desc: 'ocw.u-tokyo.ac.jp', url: 'https://ocw.u-tokyo.ac.jp' },
      { name: 'Kyoto University OCW', desc: 'ocw.kyoto-u.ac.jp', url: 'https://ocw.kyoto-u.ac.jp' },
      { name: 'J-STAGE (مقالات ریاضی)', desc: 'jstage.jst.go.jp', url: 'https://www.jstage.jst.go.jp' }
    ]
  },
  {
    id: 'india',
    flag: '🇮🇳',
    countryFa: 'هند',
    countryEn: 'India',
    preUniversity: [
      { name: "Byju's", desc: 'byjus.com/maths', url: 'https://byjus.com/maths' },
      { name: 'Vedantu', desc: 'vedantu.com', url: 'https://www.vedantu.com' },
      { name: 'Toppr', desc: 'toppr.com', url: 'https://www.toppr.com' }
    ],
    university: [
      { name: 'NPTEL', desc: 'nptel.ac.in', url: 'https://nptel.ac.in' },
      { name: 'ISI Kolkata (منابع)', desc: 'isical.ac.in', url: 'https://www.isical.ac.in' },
      { name: 'IIT Bombay (سخنرانی‌ها)', desc: 'iitb.ac.in', url: 'https://www.iitb.ac.in' }
    ]
  }
];

export default function MathSitesPage() {
  const [lang, setLang] = useState('fa');
  const [selectedCountry, setSelectedCountry] = useState(MATH_SITES_DATA[0]);

  const isFa = lang === 'fa';

  return (
    <main dir={isFa ? 'rtl' : 'ltr'} className="min-h-screen bg-slate-50 text-slate-900 font-sans p-4 md:p-8 antialiased">
      <div className="max-w-5xl mx-auto">
        
        {/* هدر */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-gray-200">
          <Link 
            href="/" 
            className="px-4 py-2 bg-slate-200 hover:bg-slate-300 text-slate-800 text-xs md:text-sm font-semibold rounded-xl transition"
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

        {/* عنوان */}
        <div className="text-center mb-8">
          <h1 className="text-2xl md:text-4xl font-black text-slate-900 mb-3">
            💻 {isFa ? 'سایت‌های آموزشی ریاضی کشورها' : 'Math Educational Websites'}
          </h1>
          <p className="text-xs md:text-sm text-slate-600 font-medium">
            {isFa ? 'برای مشاهده سایت‌های هر کشور، روی دکمه مربوط به آن کلیک کنید:' : 'Click on any country button to reveal its resources below:'}
          </p>
        </div>

        {/* دکمه‌های ساده و تخت (Flat) کشورها */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-8">
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

        {/* کادر خاکستری رنگ اطلاعات کشور انتخاب شده */}
        {selectedCountry && (
          <div className="bg-slate-100 rounded-3xl p-6 md:p-8 border border-slate-300 shadow-sm transition-all duration-300">
            
            <div className="flex items-center gap-3 border-b border-slate-300 pb-4 mb-6">
              <span className="text-4xl">{selectedCountry.flag}</span>
              <h2 className="text-xl md:text-2xl font-black text-slate-900">
                {isFa ? `منابع و سایت‌های ریاضی ${selectedCountry.countryFa}` : `${selectedCountry.countryEn} Math Websites`}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              {/* بخش پیش‌دانشگاهی */}
              {selectedCountry.preUniversity && selectedCountry.preUniversity.length > 0 && (
                <div>
                  <h3 className="text-base font-bold text-slate-800 mb-4 flex items-center gap-2">
                    🏫 {isFa ? 'پیش‌دانشگاهی' : 'Pre-University'}
                  </h3>
                  <div className="flex flex-col gap-3">
                    {selectedCountry.preUniversity.map((site, idx) => (
                      <a
                        key={idx}
                        href={site.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-4 bg-white hover:bg-slate-200/60 border border-slate-200 hover:border-slate-400 rounded-2xl transition group flex items-start justify-between shadow-sm"
                      >
                        <div>
                          <div className="font-bold text-slate-900 group-hover:underline text-sm md:text-base">
                            {site.name}
                          </div>
                          <div className="text-xs text-slate-500 dir-ltr text-right mt-1">
                            {site.desc}
                          </div>
                        </div>
                        <span className="text-slate-500 font-bold group-hover:translate-x-1 transition-transform text-xs">↗</span>
                      </a>
                    ))}
                  </div>
                </div>
              )}

              {/* بخش دانشگاهی */}
              {selectedCountry.university && selectedCountry.university.length > 0 && (
                <div>
                  <h3 className="text-base font-bold text-slate-800 mb-4 flex items-center gap-2">
                    🎓 {isFa ? 'دانشگاهی' : 'University'}
                  </h3>
                  <div className="flex flex-col gap-3">
                    {selectedCountry.university.map((site, idx) => (
                      <a
                        key={idx}
                        href={site.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-4 bg-white hover:bg-slate-200/60 border border-slate-200 hover:border-slate-400 rounded-2xl transition group flex items-start justify-between shadow-sm"
                      >
                        <div>
                          <div className="font-bold text-slate-900 group-hover:underline text-sm md:text-base">
                            {site.name}
                          </div>
                          <div className="text-xs text-slate-500 dir-ltr text-right mt-1">
                            {site.desc}
                          </div>
                        </div>
                        <span className="text-slate-500 font-bold group-hover:translate-x-1 transition-transform text-xs">↗</span>
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
