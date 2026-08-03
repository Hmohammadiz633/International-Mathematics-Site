'use client';

import { useState } from 'react';
import Link from 'next/link';'use client';

import { useState } from 'react';
import Link from 'next/link';

// داده‌های دقیق سایت‌های ریاضی کشورها (ایران در اولویت اول)
const MATH_SITES_DATA = [
  {
    id: 'iran',
    flag: '🇮🇷',
    countryFa: 'ایران',
    countryEn: 'Iran',
    preUniversity: [
      { name: 'شبکه ملی مدارس (رشد)', desc: 'کتاب‌های درسی، محتوای آموزشی و نمونه سوالات ریاضی', url: 'https://roshd.ir' },
      { title: 'سازمان پژوهش (کتاب درسی)', desc: 'دانلود پی‌دی‌اف رسمی کتاب‌های ریاضی مدارس', url: 'http://chap.sch.ir' }
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
      { name: 'Sésamath', desc: 'recap و تمرینات ریاضی مدارس فرانسه', url: 'https://www.sesamath.net' }
    ],
    university: [
      { name: 'IHES France', desc: 'موسسه تحقیقات پیشرفته ریاضی فرانسه', url: 'https://www.ihes.fr' }
    ]
  }
];

export default function MathSitesPage() {
  const [lang, setLang] = useState('fa');
  // انتخاب پیش‌فرض: اولین کشور (ایران)
  const [selectedCountry, setSelectedCountry] = useState(MATH_SITES_DATA[0]);

  const isFa = lang === 'fa';

  return (
    <main dir={isFa ? 'rtl' : 'ltr'} className="min-h-screen bg-slate-50 text-slate-900 font-sans p-4 md:p-8 antialiased">
      <div className="max-w-5xl mx-auto">
        
        {/* هدر بالای صفحه */}
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

        {/* تیتر صفحه */}
        <div className="text-center mb-8">
          <h1 className="text-2xl md:text-4xl font-black text-slate-900 mb-3">
            💻 {isFa ? 'سایت‌های آموزشی ریاضی کشورها' : 'Math Educational Websites'}
          </h1>
          <p className="text-xs md:text-sm text-slate-600 font-medium">
            {isFa ? 'برای مشاهده سایت‌های هر کشور، روی دکمه مربوط به آن کلیک کنید:' : 'Click on any country button to reveal its resources below:'}
          </p>
        </div>

        {/* چیدمان دکمه‌های سه‌بعدی تمام کشورها (ایران اول از همه) */}
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
                    ? 'bg-blue-600 text-white border-b-4 border-blue-900 shadow-[0_6px_0_#1e3a8a] translate-y-[-2px]' 
                    : 'bg-white hover:bg-slate-100 text-slate-800 border-b-4 border-slate-300 hover:border-slate-400 active:border-b-0 active:translate-y-1 shadow-[0_5px_0_#cbd5e1] hover:shadow-[0_2px_0_#94a3b8]'
                  }
                `}
              >
                <span className="text-xl md:text-2xl leading-none">{item.flag}</span>
                <span>{isFa ? item.countryFa : item.countryEn}</span>
              </button>
            );
          })}
        </div>

        {/* بخش نمایش سایت‌ها و لینک‌های کشور انتخاب شده در زیر دکمه‌ها */}
        {selectedCountry && (
          <div className="bg-white rounded-3xl p-6 md:p-8 border border-slate-200 shadow-xl transition-all duration-300">
            
            {/* عنوان کشور انتخابی */}
            <div className="flex items-center gap-3 border-b border-slate-100 pb-4 mb-6">
              <span className="text-4xl">{selectedCountry.flag}</span>
              <h2 className="text-xl md:text-2xl font-black text-slate-900">
                {isFa ? `منابع و سایت‌های ریاضی ${selectedCountry.countryFa}` : `${selectedCountry.countryEn} Math Websites`}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              {/* بخش قبل دانشگاه */}
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
                        className="p-4 bg-slate-50 hover:bg-blue-50 border border-slate-200 hover:border-blue-400 rounded-2xl transition group flex items-start justify-between"
                      >
                        <div>
                          <div className="font-bold text-blue-600 group-hover:underline text-sm md:text-base">
                            {site.name || site.title}
                          </div>
                          <div className="text-xs text-slate-500 mt-1">
                            {site.desc}
                          </div>
                        </div>
                        <span className="text-blue-500 font-bold group-hover:translate-x-1 transition-transform text-xs">↗</span>
                      </a>
                    ))}
                  </div>
                </div>
              )}

              {/* بخش دانشگاهی */}
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
                        className="p-4 bg-emerald-50/50 hover:bg-emerald-50 border border-emerald-100 hover:border-emerald-300 rounded-2xl transition group flex items-start justify-between"
                      >
                        <div>
                          <div className="font-bold text-emerald-700 group-hover:underline text-sm md:text-base">
                            {site.name}
                          </div>
                          <div className="text-xs text-slate-500 mt-1">
                            {site.desc}
                          </div>
                        </div>
                        <span className="text-emerald-600 font-bold group-hover:translate-x-1 transition-transform text-xs">↗</span>
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

export default function MathSitesPage() {
  const [lang, setLang] = useState('fa');
  const isFa = lang === 'fa';

  const mathSitesData = [
    {
      flag: '🇺🇸',
      countryFa: 'ایالات متحده (USA)',
      countryEn: 'United States (USA)',
      preUniversity: [
        { name: 'Khan Academy', link: 'https://www.khanacademy.org', descFa: 'ریاضی از پایه تا پیشرفته', descEn: 'Math from basic to advanced' },
        { name: 'IXL Math', link: 'https://www.ixl.com', descFa: 'تمرین پایه به پایه', descEn: 'Grade-by-grade practice' },
        { name: 'Brilliant', link: 'https://brilliant.org', descFa: 'آموزش مفهومی و تعاملی', descEn: 'Conceptual & interactive learning' },
      ],
      university: [
        { name: 'MIT OpenCourseWare', link: 'https://ocw.mit.edu/courses/mathematics', descFa: 'منبع کلاسیک و جامع دوره‌های ریاضی MIT', descEn: 'Comprehensive MIT mathematics courses' },
        { name: 'Paul\'s Online Math Notes', link: 'https://tutorial.math.lamar.edu', descFa: 'جزوات ریاضی عمومی و دیفرانسیل دانشگاه Lamar', descEn: 'Lamar University calculus & math notes' },
        { name: 'Wolfram MathWorld', link: 'https://mathworld.wolfram.com', descFa: 'دانشنامه تخصصی و جامع ریاضیات', descEn: 'Comprehensive math encyclopedia' },
      ],
    },
    {
      flag: '🇬🇧',
      countryFa: 'بریتانیا (UK)',
      countryEn: 'United Kingdom (UK)',
      preUniversity: [
        { name: 'Maths Genie', link: 'https://mathsgenie.co.uk', descFa: 'درسنامه، نمونه سوالات امتحان و ویدیوهای آموزشی', descEn: 'GCSE & A-Level revision, exam papers, and videos' },
        { name: 'Maths with Mum', link: 'https://www.mathswithmum.com', descFa: 'مناسب دبستان', descEn: 'Primary school math' },
        { name: 'NRICH Math', link: 'https://nrich.maths.org', descFa: 'پازل و بازی از دانشگاه کمبریج', descEn: 'Puzzles and games by Cambridge University' },
      ],
      university: [
        { name: 'Cambridge Math Resources', link: 'https://www.maths.cam.ac.uk/teaching', descFa: 'منابع نظری و کاربردی دانشگاه کمبریج', descEn: 'Cambridge theoretical & applied math teaching' },
        { name: 'Imperial College London', link: 'https://www.imperial.ac.uk/mathematics/teaching', descFa: 'ریاضی مهندسی دانشگاه امپریال لندن', descEn: 'Imperial College engineering math' },
      ],
    },
    {
      flag: '🇩🇪',
      countryFa: 'آلمان (Germany)',
      countryEn: 'Germany',
      preUniversity: [
        { name: 'Mathefritz', link: 'https://mathefritz.de', descFa: 'به آلمانی، پایه دبستان', descEn: 'Elementary school math in German' },
        { name: 'Serlo', link: 'https://serlo.org', descFa: 'رایگان با توضیح گام‌به‌گام (آلمانی/انگلیسی)', descEn: 'Free step-by-step math explanations' },
      ],
      university: [
        { name: 'MPI Leipzig (مکس پلانک)', link: 'https://www.mis.mpg.de/activities/teaching.html', descFa: 'ریاضی محض و پیشرفته موسسه مکس پلانک', descEn: 'Max Planck Institute pure math & advanced teaching' },
        { name: 'TU Munich Math', link: 'https://www.math.cit.tum.de/en/teaching', descFa: 'منابع آموزشی دانشگاه صنعتی مونیخ', descEn: 'TU Munich mathematics teaching' },
      ],
    },
    {
      flag: '🇫🇷',
      countryFa: 'فرانسه (France)',
      countryEn: 'France',
      preUniversity: [
        { name: 'Maths et tiques', link: 'https://www.maths-et-tiques.fr', descFa: 'ویدئو و تمرین به فرانسوی', descEn: 'Math videos and exercises in French' },
      ],
      university: [
        { name: 'Institut Fourier (Grenoble)', link: 'https://www.fourier.ujf-grenoble.fr/enseignement', descFa: 'آنالیز و جبر پیشرفته موسسه فوریه گرنوبل', descEn: 'Fourier Institute advanced analysis & algebra' },
        { name: 'École Polytechnique', link: 'https://portail.polytechnique.edu/mathematiques/en/teaching', descFa: 'آموزش ریاضیات مدرسه پلی‌تکنیک فرانسه', descEn: 'École Polytechnique math teaching' },
      ],
    },
    {
      flag: '🇨🇦',
      countryFa: 'کانادا (Canada)',
      countryEn: 'Canada',
      preUniversity: [
        { name: 'Math Central', link: 'https://mathcentral.uregina.ca', descFa: 'منبع رایگان برای معلمان و دانش‌آموزان', descEn: 'Free resource for teachers and students' },
      ],
      university: [
        { name: 'UBC Math (ونکور)', link: 'https://www.math.ubc.ca/teaching', descFa: 'دوره‌های آموزشی رایگان دانشگاه بریتیش کلمبیا', descEn: 'UBC free mathematics courses' },
        { name: 'Waterloo Math', link: 'https://uwaterloo.ca/math/undergraduate-courses', descFa: 'دوره‌های کارشناسی ریاضی دانشگاه واترلو', descEn: 'Waterloo undergraduate math courses' },
      ],
    },
    {
      flag: '🇦🇺',
      countryFa: 'استرالیا (Australia)',
      countryEn: 'Australia',
      preUniversity: [
        { name: 'Maths Online', link: 'https://www.mathsonline.com.au', descFa: 'درسنامه و تمرین - بخشی رایگان', descEn: 'Lessons and practice - partial free access' },
      ],
      university: [
        { name: 'UNSW Sydney', link: 'https://www.unsw.edu.au/science/our-schools/maths/student-life-resources', descFa: 'منابع مهندسی و ریاضی دانشگاه نیوساوث ولز', descEn: 'UNSW Sydney student life & study resources' },
        { name: 'ANU Math', link: 'https://maths.anu.edu.au/students', descFa: 'منابع آموزشی دانشجویی دانشگاه ملی استرالیا', descEn: 'ANU mathematics student resources' },
      ],
    },
    {
      flag: '🇮🇳',
      countryFa: 'هند (India)',
      countryEn: 'India',
      preUniversity: [
        { name: 'BYJU\'S', link: 'https://byjus.com', descFa: 'ویدیوهای مفهومی پایه تا دوازدهم', descEn: 'Conceptual math videos for Grades 1-12' },
        { name: 'Cuemath', link: 'https://www.cuemath.com', descFa: 'تمرین تعاملی ریاضی پایه', descEn: 'Interactive foundational math practice' },
      ],
      university: [
        { name: 'NPTEL Math', link: 'https://nptel.ac.in/courses/111/104', descFa: 'آموزش پایه دانشگاه و کنکور (موسسه ملی فناوری)', descEn: 'NPTEL higher education & competitive math' },
        { name: 'IIT Bombay Math', link: 'https://www.math.iitb.ac.in/academics', descFa: 'برنامه‌های آکادمیک دانشگاه IIT بمبئی', descEn: 'IIT Bombay academic math portal' },
      ],
    },
    {
      flag: '🇯🇵',
      countryFa: 'ژاپن (Japan)',
      countryEn: 'Japan',
      preUniversity: [
        { name: 'Sugaku', link: 'https://sugaku.net', descFa: 'به ژاپنی، مناسب دبستان و راهنمایی', descEn: 'In Japanese, suitable for primary & middle school' },
      ],
      university: [
        { name: 'Kyoto University Math', link: 'https://www.math.kyoto-u.ac.jp/en/education', descFa: 'ریاضی محض دانشگاه کیوتو', descEn: 'Kyoto University pure mathematics' },
        { name: 'Todai Math (توکیو)', link: 'https://www.ms.u-tokyo.ac.jp/education/index.html', descFa: 'آموزش تخصصی ریاضیات دانشگاه توکیو', descEn: 'University of Tokyo math education' },
      ],
    },
    {
      flag: '🇹🇷',
      countryFa: 'ترکیه (Turkey)',
      countryEn: 'Turkey',
      preUniversity: [
        { name: 'Matematik Vakti', link: 'https://www.matematikvakti.com', descFa: 'تمرین و آزمون پایه تا دبیرستان (رایگان)', descEn: 'Math practice and tests for K-12 (free)' },
        { name: 'Matematik Kolay', link: 'https://www.matematikkolay.net', descFa: 'حل تمرین تعاملی و ویدئو برای دبیرستان', descEn: 'Interactive practice & videos for high school' },
        { name: 'ÜniversiteGO (بخش ریاضی)', link: 'https://universitego.com/matematik', descFa: 'درسنامه و تست کنکور ترکی (YKS)', descEn: 'Turkish YKS exam math study guides & tests' },
        { name: 'Khan Academy Türkçe', link: 'https://tr.khanacademy.org', descFa: 'نسخه ترکی خان آکادمی (رایگان)', descEn: 'Turkish version of Khan Academy (free)' },
      ],
      university: [
        { name: 'Boğaziçi Üniversitesi Math', link: 'https://math.bogazici.edu.tr/undergraduate-courses', descFa: 'اسلاید و جزوه به انگلیسی/ترکی', descEn: 'Boğaziçi University slides & course notes' },
        { name: 'ODTÜ (METU) Math', link: 'https://math.metu.edu.tr/undergraduate-programs', descFa: 'برنامه درسی و منابع پیشنهادی', descEn: 'METU undergraduate math curriculum & resources' },
        { name: 'İTÜ Math (دانشگاه فنی استانبول)', link: 'https://www.itu.edu.tr/en/academic/mathematics', descFa: 'جزوات درسی ریاضی دانشگاه فنی استانبول', descEn: 'Istanbul Technical University math course booklets' },
        { name: 'Sabancı Üniversitesi', link: 'https://www.sabanciuniv.edu/en/academic/mathematics', descFa: 'دوره‌های آنلاین آزاد و برنامه‌های آکادمیک', descEn: 'Sabancı University open online math courses' },
      ],
    },
    {
      flag: '🇮🇷',
      countryFa: 'ایران (Iran)',
      countryEn: 'Iran',
      preUniversity: [
        { name: 'گاما (شبکه آموزشی رشد)', link: 'https://gama.ir', descFa: 'نمونه سوال و درسنامه پایه تا دوازدهم (رایگان)', descEn: 'Gama K-12 study guides & exam samples' },
        { name: 'مدرسه مجازی ایران', link: 'https://iranedu.ir', descFa: 'ویدیوهای آموزشی وزارت آموزش و پرورش', descEn: 'Ministry of Education educational videos' },
        { name: 'آلاء', link: 'https://alaatv.com', descFa: 'درسنامه و کلاس‌های آنلاین ریاضی همه مقاطع', descEn: 'Alaa online math classes & video courses' },
        { name: 'خان آکادمی فارسی', link: 'https://fa.khanacademy.org', descFa: 'ترجمه رسمی خان آکادمی برای پایه', descEn: 'Official Persian translation of Khan Academy' },
        { name: 'ریاضیات ایران', link: 'https://riaziyat.ir', descFa: 'جزوه و تمرین دبیرستان به تفکیک پایه', descEn: 'High school math practice & booklets by grade' },
      ],
      university: [
        { name: 'دانشگاه صنعتی شریف (آموزشکده ریاضی)', link: 'https://math.sharif.ir/educational-resources', descFa: 'جزوات و اسلاید دروس اصلی', descEn: 'Sharif University math course materials & slides' },
        { name: 'دانشگاه تهران (دانشکده ریاضی)', link: 'https://math.ut.ac.ir/education/courses', descFa: 'سرفصل‌ها و منابع معرفی‌شده', descEn: 'University of Tehran math course syllabi' },
        { name: 'دانشگاه صنعتی امیرکبیر', link: 'https://math.aut.ac.ir/teaching', descFa: 'جزوات درسی اساتید', descEn: 'Amirkabir University faculty course notes' },
        { name: 'دانشگاه فردوسی مشهد', link: 'https://math.um.ac.ir/educational-resources', descFa: 'منابع ریاضی محض و کاربردی', descEn: 'Ferdowsi University pure & applied math resources' },
        { name: 'انجمن ریاضی ایران', link: 'https://ims.ir', descFa: 'مقالات آموزشی و منابع تکمیلی', descEn: 'Iranian Mathematical Society articles & resources' },
        { name: 'پرتال جامع ریاضیات (مگ‌ایران)', link: 'https://magiran.com', descFa: 'جستجوی مقالات ریاضی به فارسی', descEn: 'Search database for Persian math research papers' },
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
      <section className="max-w-6xl mx-auto px-4 pt-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-4xl font-black text-slate-900 mb-3">
            {isFa ? 'آدرس سایت‌های آموزشی ریاضی' : 'Educational Math Websites'}
          </h2>
          <p className="text-slate-600 text-sm md:text-base">
            {isFa ? 'مجموعه‌ای از بهترین سایت‌های تمرین و آموزش ریاضی به تفکیک کشورها (قبل دانشگاه و دانشگاهی)' : 'A curated collection of top math learning platforms by country (Pre-University & University)'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mathSitesData.map((country, idx) => (
            <div key={idx} className="bg-white p-5 rounded-2xl border border-gray-200/90 shadow-sm hover:shadow-md transition flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2.5 border-b border-gray-100 pb-3 mb-4">
                  <span className="text-2xl">{country.flag}</span>
                  <h3 className="font-bold text-base text-slate-800">
                    {isFa ? country.countryFa : country.countryEn}
                  </h3>
                </div>

                {/* سایت‌های قبل دانشگاه */}
                {country.preUniversity && country.preUniversity.length > 0 && (
                  <div className="mb-5">
                    <h4 className="text-xs font-black text-slate-500 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                      <span>🏫</span> {isFa ? 'قبل دانشگاه' : 'Pre-University'}
                    </h4>
                    <div className="space-y-2">
                      {country.preUniversity.map((site, sIdx) => (
                        <a
                          key={sIdx}
                          href={site.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block p-2.5 rounded-xl bg-slate-50 hover:bg-blue-50/60 border border-slate-200/70 hover:border-blue-200 transition group"
                        >
                          <div className="flex items-center justify-between mb-0.5">
                            <span className="font-bold text-xs text-blue-900 group-hover:text-blue-700">
                              {site.name}
                            </span>
                            <span className="text-[10px] text-blue-500 group-hover:translate-x-0.5 transition-transform">↗</span>
                          </div>
                          <p className="text-[11px] text-slate-500 font-normal">
                            {isFa ? site.descFa : site.descEn}
                          </p>
                        </a>
                      ))}
                    </div>
                  </div>
                )}

                {/* سایت‌های دانشگاهی */}
                {country.university && country.university.length > 0 && (
                  <div>
                    <h4 className="text-xs font-black text-slate-500 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                      <span>🎓</span> {isFa ? 'دانشگاهی' : 'University'}
                    </h4>
                    <div className="space-y-2">
                      {country.university.map((site, sIdx) => (
                        <a
                          key={sIdx}
                          href={site.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block p-2.5 rounded-xl bg-emerald-50/40 hover:bg-emerald-50 border border-emerald-100 hover:border-emerald-300 transition group"
                        >
                          <div className="flex items-center justify-between mb-0.5">
                            <span className="font-bold text-xs text-emerald-900 group-hover:text-emerald-700">
                              {site.name}
                            </span>
                            <span className="text-[10px] text-emerald-600 group-hover:translate-x-0.5 transition-transform">↗</span>
                          </div>
                          <p className="text-[11px] text-slate-600 font-normal">
                            {isFa ? site.descFa : site.descEn}
                          </p>
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
