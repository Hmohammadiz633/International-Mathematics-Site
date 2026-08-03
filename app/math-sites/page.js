'use client';

import { useState } from 'react';
import Link from 'next/link';

// داده‌های کامل سایت‌های ریاضی کشورها (اولین کشور: ایران)
const MATH_SITES_DATA = [
  {
    id: 'iran',
    flag: '🇮🇷',
    countryFa: 'ایران',
    countryEn: 'Iran',
    preUniversity: [
      { name: 'شبکه ملی مدارس (رشد)', desc: 'کتاب‌های درسی، محتوای آموزشی و نمونه سوالات ریاضی', url: 'https://roshd.ir' },
      { name: 'سازمان پژوهش (کتاب درسی)', desc: 'دانلود پی‌دی‌اف رسمی کتاب‌های ریاضی مدارس', url: 'http://chap.sch.ir' }
    ],
    university: [
      { name: 'پرتال انجمن ریاضی ایران', desc: 'اخبار، کنفرانس‌ها و نشریات ریاضی کشور', url: 'https://ims.ir' },
      { name: 'مکتب‌خونه (ریاضیات دانشگاهی)', desc: 'فیلم‌های آموزشی دروس ریاضی دانشگاه‌های برتر', url: 'https://maktabkhooneh.org' }
    ]
  },
  {
    id: 'usa',
    flag: '🇺🇸',
    countryFa: 'ایالات متحده (USA)',
    countryEn: 'USA',
    preUniversity: [
      { name: 'Khan Academy', desc: 'ریاضی از پایه تا پیشرفته', url: 'https://www.khanacademy.org' },
      { name: 'IXL Math', desc: 'تمرین پایه به پایه', url: 'https://www.ixl.com' },
      { name: 'Brilliant', desc: 'آموزش مفهومی و تعاملی', url: 'https://brilliant.org' }
    ],
    university: [
      { name: 'MIT OpenCourseWare', desc: 'منبع کلاسیک و جامع دوره‌های ریاضی MIT', url: 'https://ocw.mit.edu' },
      { name: "Paul's Online Math Notes", desc: 'جزوات ریاضی عمومی و دیفرانسیل دانشگاه Lamar', url: 'https://tutorial.math.lamar.edu' },
      { name: 'Wolfram MathWorld', desc: 'دانشنامه تخصصی و جامع ریاضیات', url: 'https://mathworld.wolfram.com' }
    ]
  },
  {
    id: 'uk',
    flag: '🇬🇧',
    countryFa: 'بریتانیا (UK)',
    countryEn: 'UK',
    preUniversity: [
      { name: 'Maths Genie', desc: 'درسنامه، نمونه سوالات امتحان و ویدیوهای آموزشی', url: 'https://www.mathsgenie.co.uk' },
      { name: 'Maths with Mum', desc: 'مناسب دبستان و پایه', url: 'https://www.mathswithmum.com' },
      { name: 'NRICH Math', desc: 'پازل و بازی از دانشگاه کمبریج', url: 'https://nrich.maths.org' }
    ],
    university: [
      { name: 'Cambridge Math Resources', desc: 'منابع نظری و کاربردی دانشگاه کمبریج', url: 'https://www.maths.cam.ac.uk' },
      { name: 'Imperial College London', desc: 'ریاضی مهندسی دانشگاه امپریال لندن', url: 'https://www.imperial.ac.uk/mathematics' }
    ]
  },
  {
    id: 'germany',
    flag: '🇩🇪',
    countryFa: 'آلمان (Germany)',
    countryEn: 'Germany',
    preUniversity: [
      { name: 'Mathefritz', desc: 'به آلمانی، پایه دبستان تا دبیرستان', url: 'https://www.mathefritz.de' },
      { name: 'Serlo', desc: 'رایگان با توضیح گام‌به‌گام (آلمانی/انگلیسی)', url: 'https://de.serlo.org' }
    ],
    university: [
      { name: 'MPI Leipzig (مکس پلانک)', desc: 'ریاضی محض و پیشرفته موسسه مکس پلانک', url: 'https://www.mis.mpg.de' },
      { name: 'TU Munich Math', desc: 'منابع آموزشی دانشگاه صنعتی مونیخ', url: 'https://www.ma.tum.de' }
    ]
  },
  {
    id: 'australia',
    flag: '🇦🇺',
    countryFa: 'استرالیا (Australia)',
    countryEn: 'Australia',
    preUniversity: [
      { name: 'Maths Online', desc: 'آموزش ریاضی مطابق سیستم استرالیا', url: 'https://www.mathsonline.com.au' },
      { name: 'AMSSI Schools', desc: 'موسسه علوم ریاضی استرالیا', url: 'https://schools.amsi.org.au' }
    ],
    university: [
      { name: 'Uni of Sydney Math', desc: 'دوره‌ها و منابع ریاضی دانشگاه سیدنی', url: 'https://www.sydney.edu.au/science/schools/school-of-mathematics-and-statistics.html' }
    ]
  },
  {
    id: 'canada',
    flag: '🇨🇦',
    countryFa: 'کانادا (Canada)',
    countryEn: 'Canada',
    preUniversity: [
      { name: 'CEMC Waterloo', desc: 'مرکز آموزش ریاضی و کامپیوتر دانشگاه واترلو', url: 'https://www.cemc.uwaterloo.ca' }
    ],
    university: [
      { name: 'U of T Mathematics', desc: 'دپارتمان ریاضی دانشگاه تورنتو', url: 'https://www.math.toronto.edu' }
    ]
  },
  {
    id: 'france',
    flag: '🇫🇷',
    countryFa: 'فرانسه (France)',
    countryEn: 'France',
    preUniversity: [
      { name: 'Sésamath', desc: 'تمرینات و منابع ریاضی مدارس فرانسه', url: 'https://www.sesamath.net' }
    ],
    university: [
      { name: 'IHES France', desc: 'موسسه تحقیقات پیشرفته ریاضی فرانسه', url: 'https://www.ihes.fr' }
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
            className="px-4 py-2 bg-slate-200 hover:bg-slate-300 text-slate-800 text-xs md:text-sm font-bold rounded-xl border-b-2 border-slate-400 active:translate-y-0.5 transition"
          >
            {isFa ? '🏠 بازگشت به صفحه اصلی' : '🏠 Back to Home'}
          </Link>

          <div className="flex items-center gap-2 bg-gray-100 px-3 py-1.5 rounded-lg border border-gray-300 shadow-inner">
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

        {/* عنوان */}
        <div className="text-center mb-8">
          <h1 className="text-2xl md:text-4xl font-black text-slate-900 mb-3">
            💻 {isFa ? 'سایت‌های آموزشی ریاضی کشورها' : 'Math Educational Websites'}
          </h1>
          <p className="text-xs md:text-sm text-slate-600 font-medium">
            {isFa ? 'برای مشاهده سایت‌های هر کشور، روی دکمه مربوط به آن کلیک کنید:' : 'Click on any country button to reveal its resources below:'}
          </p>
        </div>

        {/* دکمه‌های سه‌بعدی کشورها (رنگ دکمه انتخابی: خاکستری کم‌رنگ) */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
          {MATH_SITES_DATA.map((item) => {
            const isSelected = selectedCountry.id === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setSelectedCountry(item)}
                className={`
                  px-5 py-3 rounded-2xl font-black text-sm md:text-base flex items-center gap-2.5 transition-all duration-150 cursor-pointer select-none
                  ${isSelected 
                    ? 'bg-slate-200 text-slate-900 border-b-4 border-slate-400 shadow-[0_4px_0_#94a3b8] translate-y-[-2px]' 
                    : 'bg-white hover:bg-slate-100 text-slate-700 border-b-4 border-slate-300 hover:border-slate-400 active:border-b-0 active:translate-y-1 shadow-[0_5px_0_#cbd5e1] hover:shadow-[0_2px_0_#94a3b8]'
                  }
                `}
              >
                <span className="text-xl md:text-2xl leading-none">{item.flag}</span>
                <span>{isFa ? item.countryFa : item.countryEn}</span>
              </button>
            );
          })}
        </div>

        {/* محتوای پایین دکمه‌ها */}
        {selectedCountry && (
          <div className="bg-white rounded-3xl p-6 md:p-8 border border-slate-200 shadow-xl transition-all duration-300">
            
            <div className="flex items-center gap-3 border-b border-slate-100 pb-4 mb-6">
              <span className="text-4xl">{selectedCountry.flag}</span>
              <h2 className="text-xl md:text-2xl font-black text-slate-900">
                {isFa ? `منابع و سایت‌های ریاضی ${selectedCountry.countryFa}` : `${selectedCountry.countryEn} Math Websites`}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              {/* قبل دانشگاه */}
              {selectedCountry.preUniversity && selectedCountry.preUniversity.length > 0 && (
                <div>
                  <h3 className="text-base font-bold text-slate-700 mb-4 flex items-center gap-2">
                    🏫 {isFa ? 'قبل دانشگاه' : 'Pre-University'}
                  </h3>
                  <div className="flex flex-col gap-3">
                    {selectedCountry.preUniversity.map((site, idx) => (
                      <a
                        key={idx}
                        href={site.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-4 bg-slate-50 hover:bg-slate-100 border border-slate-200 hover:border-slate-300 rounded-2xl transition group flex items-start justify-between"
                      >
                        <div>
                          <div className="font-bold text-slate-800 group-hover:underline text-sm md:text-base">
                            {site.name}
                          </div>
                          <div className="text-xs text-slate-500 mt-1">
                            {site.desc}
                          </div>
                        </div>
                        <span className="text-slate-600 font-bold group-hover:translate-x-1 transition-transform text-xs">↗</span>
                      </a>
                    ))}
                  </div>
                </div>
              )}

              {/* دانشگاهی */}
              {selectedCountry.university && selectedCountry.university.length > 0 && (
                <div>
                  <h3 className="text-base font-bold text-slate-700 mb-4 flex items-center gap-2">
                    🎓 {isFa ? 'دانشگاهی' : 'University'}
                  </h3>
                  <div className="flex flex-col gap-3">
                    {selectedCountry.university.map((site, idx) => (
                      <a
                        key={idx}
                        href={site.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-4 bg-slate-50/80 hover:bg-slate-100 border border-slate-200 hover:border-slate-300 rounded-2xl transition group flex items-start justify-between"
                      >
                        <div>
                          <div className="font-bold text-slate-800 group-hover:underline text-sm md:text-base">
                            {site.name}
                          </div>
                          <div className="text-xs text-slate-500 mt-1">
                            {site.desc}
                          </div>
                        </div>
                        <span className="text-slate-600 font-bold group-hover:translate-x-1 transition-transform text-xs">↗</span>
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
