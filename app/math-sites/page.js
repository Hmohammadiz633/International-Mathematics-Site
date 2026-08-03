'use client';

import { useState } from 'react';
import Link from 'next/link';

// داده‌های جامع سایت‌های ریاضی کشورها
const MATH_SITES_DATA = [
  {
    id: 'iran',
    flag: '🇮🇷',
    countryFa: 'ایران (Iran)',
    countryEn: 'Iran',
    preUniversity: [
      { name: 'گاما (شبکه آموزشی رشد)', desc: 'نمونه سوال و درسنامه پایه تا دوازدهم (رایگان)', url: 'https://gama.ir' },
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
    countryFa: 'ایالات متحده (USA)',
    countryEn: 'USA',
    preUniversity: [
      { name: 'Khan Academy', desc: 'ریاضی از پایه تا پیشرفته و آمادگی SAT/AP', url: 'https://www.khanacademy.org' },
      { name: 'IXL Math', desc: 'تمرین پایه به پایه و استانداردهای آموزشی آمریکا', url: 'https://www.ixl.com' },
      { name: 'Brilliant', desc: 'آموزش مفهومی و تفکر الگوریتمی و ریاضی', url: 'https://brilliant.org' },
      { name: 'Desmos', desc: 'ماشین‌حساب پیشرفته گرافیکی و رسم نمودار آنلاین', url: 'https://www.desmos.com' },
      { name: 'Art of Problem Solving (AoPS)', desc: 'منابع و انجمن برای المپیاد و مسائل پیشرفته', url: 'https://artofproblemsolving.com' },
      { name: 'Purplemath', desc: 'درسنامه‌های ساده جبر و هندسه برای دبیرستان', url: 'https://www.purplemath.com' },
      { name: 'Kuta Software', desc: 'برگه‌های تمرین (Worksheet) رایگان جبر و حسابان', url: 'https://www.kutasoftware.com' }
    ],
    university: [
      { name: 'MIT OpenCourseWare', desc: 'منبع کلاسیک و جامع دوره‌های ریاضی MIT', url: 'https://ocw.mit.edu' },
      { name: "Paul's Online Math Notes", desc: 'جزوات ریاضی عمومی و دیفرانسیل دانشگاه Lamar', url: 'https://tutorial.math.lamar.edu' },
      { name: 'Wolfram MathWorld', desc: 'دانشنامه تخصصی و جامع ریاضیات جهان', url: 'https://mathworld.wolfram.com' },
      { name: 'Symbolab', desc: 'حل گام به گام مسائل انتگرال، مشتق و جبر دانشگاهی', url: 'https://www.symbolab.com' },
      { name: 'S.O.S. Mathematics', desc: 'مرور سریع و تمرینات ریاضیات عمومی دانشگاهی', url: 'https://www.sosmath.com' }
    ]
  },
  {
    id: 'uk',
    flag: '🇬🇧',
    countryFa: 'بریتانیا (UK)',
    countryEn: 'UK',
    preUniversity: [
      { name: 'Maths Genie', desc: 'درسنامه، نمونه سوالات امتحان و ویدیوهای GCSE و A-Level', url: 'https://www.mathsgenie.co.uk' },
      { name: 'DrFrostMaths', desc: 'پلتفرم جامع تمرین و منابع امتحان A-Level و GCSE', url: 'https://www.drfrostmaths.com' },
      { name: 'NRICH Math', desc: 'پازل‌ها و سوالات تحلیلی دانشگاه کمبریج', url: 'https://nrich.maths.org' },
      { name: 'Maths with Mum', desc: 'آموزش ساده مفاهیم پایه ریاضی', url: 'https://www.mathswithmum.com' },
      { name: 'Math Is Fun', desc: 'آموزش ساده مفاهیم و فرمول‌های پایه', url: 'https://www.mathsisfun.com' }
    ],
    university: [
      { name: 'Cambridge Math Resources', desc: 'منابع نظری و کاربردی دانشگاه کمبریج', url: 'https://www.maths.cam.ac.uk' },
      { name: 'Oxford Mathematical Institute', desc: 'منابع و دوره‌های آکادمیک دانشگاه آکسفورد', url: 'https://www.maths.ox.ac.uk' },
      { name: 'Imperial College London', desc: 'ریاضی مهندسی دانشگاه امپریال لندن', url: 'https://www.imperial.ac.uk/mathematics' }
    ]
  },
  {
    id: 'germany',
    flag: '🇩🇪',
    countryFa: 'آلمان (Germany)',
    countryEn: 'Germany',
    preUniversity: [
      { name: 'Serlo', desc: 'رایگان با توضیح گام‌به‌گام (آلمانی/انگلیسی)', url: 'https://de.serlo.org' },
      { name: 'GeoGebra', desc: 'نرم‌افزار پویا برای آموزش هندسه، جبر و حسابان (ساخت اروپا)', url: 'https://www.geogebra.org' },
      { name: 'Mathefritz', desc: 'تمرینات و برگه‌های امتحانی مدارس آلمان', url: 'https://www.mathefritz.de' },
      { name: 'Realmath', desc: 'تمرینات تعاملی برای مقاطع Gymnasium آلمان', url: 'https://realmath.de' }
    ],
    university: [
      { name: 'MPI Leipzig (مکس پلانک)', desc: 'ریاضی محض و پیشرفته موسسه مکس پلانک', url: 'https://www.mis.mpg.de' },
      { name: 'TU Munich Math', desc: 'منابع آموزشی دانشگاه صنعتی مونیخ', url: 'https://www.ma.tum.de' },
      { name: 'Heidelberg University Math', desc: 'دانشکده ریاضی و علوم کامپیوتر هایدلبرگ', url: 'https://www.mathi.uni-heidelberg.de' }
    ]
  },
  {
    id: 'france',
    flag: '🇫🇷',
    countryFa: 'فرانسه (France)',
    countryEn: 'France',
    preUniversity: [
      { name: 'Maths et tiques', desc: 'ویدئو، درسنامه و تمرین کامل به زبان فرانسوی', url: 'https://www.maths-et-tiques.fr' },
      { name: 'Xmaths', desc: 'منابع ریاضی دبیرستان و پیش‌دانشگاهی فرانسه (Lycée)', url: 'http://xmaths.free.fr' },
      { name: 'Session Math', desc: 'تمرینات و امتحانات نهایی سیستم آموزشی فرانسه (Baccalauréat)', url: 'https://www.apmep.fr' }
    ],
    university: [
      { name: 'Institut Fourier (Grenoble)', desc: 'آنالیز و جبر پیشرفته موسسه فوریه گرنوبل', url: 'https://www-fourier.univ-grenoble-alpes.fr' },
      { name: 'École Polytechnique', desc: 'آموزش ریاضیات مدرسه پلی‌تکنیک فرانسه', url: 'https://www.polytechnique.edu' },
      { name: 'Sorbonne University Math', desc: 'دپارتمان ریاضیات دانشگاه سوربن', url: 'https://www.math.sorbonne-universite.fr' }
    ]
  },
  {
    id: 'turkey',
    flag: '🇹🇷',
    countryFa: 'ترکیه (Turkey)',
    countryEn: 'Turkey',
    preUniversity: [
      { name: 'Matematik Vakti', desc: 'تمرین و آزمون پایه تا دبیرستان (رایگان)', url: 'https://www.matematikvakti.com' },
      { name: 'Matematik Kolay', desc: 'حل تمرین تعاملی و ویدئو برای دبیرستان', url: 'https://www.matematikkolay.net' },
      { name: 'ÜniversiteGO (بخش ریاضی)', desc: 'درسنامه و تست کنکور ترکی (YKS)', url: 'https://www.universitego.com' },
      { name: 'Khan Academy Türkçe', desc: 'نسخه ترکی خان آکادمی (رایگان)', url: 'https://tr.khanacademy.org' }
    ],
    university: [
      { name: 'Boğaziçi Üniversitesi Math', desc: 'اسلاید و جزوه به انگلیسی/ترکی', url: 'https://math.boun.edu.tr' },
      { name: 'ODTÜ (METU) Math', desc: 'برنامه درسی و منابع پیشنهادی دانشگاه خاورمیانه', url: 'https://math.metu.edu.tr' },
      { name: 'İTÜ Math (دانشگاه فنی استانبول)', desc: 'جزوات درسی ریاضی دانشگاه فنی استانبول', url: 'https://www.math.itu.edu.tr' },
      { name: 'Sabancı Üniversitesi', desc: 'دوره‌های آنلاین آزاد و برنامه‌های آکادمیک', url: 'https://www.sabanciuniv.edu' }
    ]
  },
  {
    id: 'australia',
    flag: '🇦🇺',
    countryFa: 'استرالیا (Australia)',
    countryEn: 'Australia',
    preUniversity: [
      { name: 'Maths Online', desc: 'درسنامه و تمرین کامل سیستم آموزشی استرالیا', url: 'https://www.mathsonline.com.au' },
      { name: 'HSC Maths by Topic', desc: 'آموزش و نمونه سوالات طبقه بندی شده ریاضی HSC', url: 'https://hscmathsbytopic.firsteducation.com.au/' },
      { name: 'AMSIMath', desc: 'موسسه علوم ریاضی استرالیا برای مدارس', url: 'https://calculate.amsi.org.au' },
      { name: 'Eddie Woo Math (Wootube)', desc: 'ویدیوهای آموزشی استاد مشهور ریاضی استرالیا', url: 'https://mreduardowoo.com' }
    ],
    university: [
      { name: 'UNSW Sydney', desc: 'منابع مهندسی و ریاضی دانشگاه نیوساوث ولز', url: 'https://www.maths.unsw.edu.au' },
      { name: 'ANU Math', desc: 'منابع آموزشی دانشجویی دانشگاه ملی استرالیا', url: 'https://maths.anu.edu.au' },
      { name: 'University of Melbourne Math', desc: 'منابع دانشکده ریاضیات ملبورن', url: 'https://ms.unimelb.edu.au' }
    ]
  },
  {
    id: 'canada',
    flag: '🇨🇦',
    countryFa: 'کانادا (Canada)',
    countryEn: 'Canada',
    preUniversity: [
      { name: 'Math Central', desc: 'منبع رایگان دانشگاه Regina برای معلمان و دانش‌آموزان', url: 'https://mathcentral.uregina.ca' },
      { name: 'CEMC (University of Waterloo)', desc: 'مسابقات و منابع ریاضی مدارس از دانشگاه واترلو', url: 'https://www.cemc.uwaterloo.ca' },
      { name: 'TVO Learn Math', desc: 'برنامه درسی رسمی استان اونتاریو برای مقاطع مختلف', url: 'https://tvolearn.com' }
    ],
    university: [
      { name: 'UBC Math (وانکور)', desc: 'دوره‌های آموزشی رایگان دانشگاه بریتیش کلمبیا', url: 'https://www.math.ubc.ca' },
      { name: 'Waterloo Math', desc: 'دوره‌های کارشناسی ریاضی دانشگاه واترلو', url: 'https://uwaterloo.ca/math' },
      { name: 'University of Toronto Math', desc: 'منابع آکادمیک دپارتمان ریاضی تورنتو', url: 'https://www.math.toronto.edu' }
    ]
  },
  {
    id: 'japan',
    flag: '🇯🇵',
    countryFa: 'ژاپن (Japan)',
    countryEn: 'Japan',
    preUniversity: [
      { name: 'Sugaku', desc: 'به ژاپنی، مناسب دبستان و راهنمایی', url: 'https://www.sugaku.jp' },
      { name: 'StudySapuri Math', desc: 'پلتفرم جامع ویدیوهای امتحانی و ریاضی مدارس ژاپن', url: 'https://studysapuri.jp' },
      { name: 'Manabitimes', desc: 'توضیحات فرمول‌ها و حل مسائل ریاضی دبیرستان ژاپن', url: 'https://manabitimes.jp/math' }
    ],
    university: [
      { name: 'Kyoto University Math', desc: 'ریاضی محض دانشگاه کیوتو', url: 'https://www.math.kyoto-u.ac.jp' },
      { name: 'Todai Math (توکیو)', desc: 'آموزش تخصصی ریاضیات دانشگاه توکیو', url: 'https://www.ms.u-tokyo.ac.jp' },
      { name: 'Tokyo Tech Math', desc: 'دانشکده ریاضیات دانشگاه صنعتی توکیو', url: 'https://www.math.titech.ac.jp' }
    ]
  },
  {
    id: 'india',
    flag: '🇮🇳',
    countryFa: 'هند (India)',
    countryEn: 'India',
    preUniversity: [
      { name: "BYJU'S", desc: 'ویدیوهای مفهومی پایه تا دوازدهم', url: 'https://byjus.com' },
      { name: 'Cuemath', desc: 'تمرین تعاملی ریاضی پایه', url: 'https://www.cuemath.com' },
      { name: 'Vedantu Math', desc: 'کلاس‌های آنلاین و تست‌های آمادگی JEE', url: 'https://www.vedantu.com' },
      { name: 'Tiwari Academy', desc: 'راهنما و حل تمرینات کتب NCERT هند', url: 'https://www.tiwariacademy.com' }
    ],
    university: [
      { name: 'NPTEL Math', desc: 'آموزش پایه دانشگاه و کنکور (موسسه ملی فناوری)', url: 'https://nptel.ac.in' },
      { name: 'IIT Bombay Math', desc: 'برنامه‌های آکادمیک IIT بمبئی', url: 'https://www.math.iitb.ac.in' },
      { name: 'ISI Kolkata', desc: 'موسسه آمار و ریاضیات پیشرفته هند', url: 'https://www.isical.ac.in' }
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
              
              {/* بخش قبل دانشگاه */}
              {selectedCountry.preUniversity && selectedCountry.preUniversity.length > 0 && (
                <div>
                  <h3 className="text-base font-bold text-slate-800 mb-4 flex items-center gap-2">
                    🏫 {isFa ? 'قبل دانشگاه' : 'Pre-University'}
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
                          <div className="text-xs text-slate-600 mt-1">
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
                          <div className="text-xs text-slate-600 mt-1">
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
