'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';

const MATH_SITES_DATA = [
  {
    id: 'iran',
    flag: '🇮🇷',
    countryFa: 'ایران (Iran)',
    countryEn: 'Iran',
    preUniversity: [
      { nameFa: 'گاما (شبکه آموزشی رشد)', nameEn: 'Gama (Roshd Network)', descFa: 'نمونه سوال و درسنامه پایه تا دوازدهم (رایگان)', descEn: 'Sample questions and lessons Grade 1 to 12 (Free)', url: 'https://gama.ir' },
      { nameFa: 'مدرسه مجازی ایران', nameEn: 'Iran Virtual School', descFa: 'ویدیوهای آموزشی وزارت آموزش و پرورش', descEn: 'Educational videos from Ministry of Education', url: 'https://iransch.ir' },
      { nameFa: 'آلاء', nameEn: 'Alaa TV', descFa: 'درسنامه و کلاس‌های آنلاین ریاضی همه مقاطع', descEn: 'Online math classes and lectures for all grades', url: 'https://alaatv.com' },
      { nameFa: 'خان آکادمی فارسی', nameEn: 'Khan Academy Persian', descFa: 'ترجمه رسمی خان آکادمی برای پایه', descEn: 'Official Persian translation of Khan Academy', url: 'https://fa.khanacademy.org' },
      { nameFa: 'ریاضیات ایران', nameEn: 'Iran Mathematics (Roshd)', descFa: 'جزوه و تمرین دبیرستان به تفکیک پایه', descEn: 'High school pamphlets and exercises by grade', url: 'https://roshd.ir' }
    ],
    university: [
      { nameFa: 'دانشگاه صنعتی شریف (آموزشکده ریاضی)', nameEn: 'Sharif University (Math Dept)', descFa: 'جزوات و اسلاید دروس اصلی', descEn: 'Course slides and pamphlets for core math subjects', url: 'https://math.sharif.edu' },
      { nameFa: 'دانشگاه تهران (دانشکده ریاضی)', nameEn: 'University of Tehran (Math Faculty)', descFa: 'سرفصل‌ها و منابع معرفی‌شده', descEn: 'Syllabi and recommended academic resources', url: 'https://math.ut.ac.ir' },
      { nameFa: 'دانشگاه صنعتی امیرکبیر', nameEn: 'Amirkabir University of Technology', descFa: 'جزوات درسی اساتید', descEn: 'Professors lecture notes and coursework', url: 'https://math.aut.ac.ir' },
      { nameFa: 'دانشگاه فردوسی مشهد', nameEn: 'Ferdowsi University of Mashhad', descFa: 'منابع ریاضی محض و کاربردی', descEn: 'Pure and applied mathematics resources', url: 'https://math.fum.ac.ir' },
      { nameFa: 'انجمن ریاضی ایران', nameEn: 'Iranian Mathematical Society (IMS)', descFa: 'مقالات آموزشی و منابع تکمیلی', descEn: 'Educational papers and supplementary material', url: 'https://ims.ir' },
      { nameFa: 'پرتال جامع ریاضیات (مگاایران)', nameEn: 'Magiran Math Portal', descFa: 'جستجوی مقالات ریاضی به فارسی', descEn: 'Search engine for Persian math articles', url: 'https://www.magiran.com' }
    ]
  },
  {
    id: 'usa',
    flag: '🇺🇸',
    countryFa: 'ایالات متحده (USA)',
    countryEn: 'USA',
    preUniversity: [
      { nameFa: 'Khan Academy', nameEn: 'Khan Academy', descFa: 'ریاضی از پایه تا پیشرفته و آمادگی SAT/AP', descEn: 'Math K-12, SAT/AP test prep & interactive practice', url: 'https://www.khanacademy.org' },
      { nameFa: 'IXL Math', nameEn: 'IXL Math', descFa: 'تمرین پایه به پایه و استانداردهای آموزشی آمریکا', descEn: 'Comprehensive K-12 practice aligned with US standards', url: 'https://www.ixl.com' },
      { nameFa: 'Brilliant', nameEn: 'Brilliant', descFa: 'آموزش مفهومی و تفکر الگوریتمی و ریاضی', descEn: 'Interactive conceptual STEM learning and problem solving', url: 'https://brilliant.org' },
      { nameFa: 'Desmos', nameEn: 'Desmos', descFa: 'ماشین‌حساب پیشرفته گرافیکی و رسم نمودار آنلاین', descEn: 'Advanced online graphing calculator and math tools', url: 'https://www.desmos.com' },
      { nameFa: 'Art of Problem Solving (AoPS)', nameEn: 'Art of Problem Solving (AoPS)', descFa: 'منابع و انجمن برای المپیاد و مسائل پیشرفته', descEn: 'Olympiad prep, advanced math community & resources', url: 'https://artofproblemsolving.com' },
      { nameFa: 'Purplemath', nameEn: 'Purplemath', descFa: 'درسنامه‌های ساده جبر و هندسه برای دبیرستان', descEn: 'Practical algebra and geometry high school lessons', url: 'https://www.purplemath.com' },
      { nameFa: 'Kuta Software', nameEn: 'Kuta Software', descFa: 'برگه‌های تمرین (Worksheet) رایگان جبر و حسابان', descEn: 'Free downloadable worksheets for Algebra and Calculus', url: 'https://www.kutasoftware.com' }
    ],
    university: [
      { nameFa: 'MIT OpenCourseWare', nameEn: 'MIT OpenCourseWare', descFa: 'منبع کلاسیک و جامع دوره‌های ریاضی MIT', descEn: 'Free lecture notes, exams, and videos from MIT', url: 'https://ocw.mit.edu' },
      { nameFa: "Paul's Online Math Notes", nameEn: "Paul's Online Math Notes", descFa: 'جزوات ریاضی عمومی و دیفرانسیل دانشگاه Lamar', descEn: 'Popular calculus and differential equations study guide', url: 'https://tutorial.math.lamar.edu' },
      { nameFa: 'Wolfram MathWorld', nameEn: 'Wolfram MathWorld', descFa: 'دانشنامه تخصصی و جامع ریاضیات جهان', descEn: 'The webs most extensive mathematical encyclopedia', url: 'https://mathworld.wolfram.com' },
      { nameFa: 'Symbolab', nameEn: 'Symbolab', descFa: 'حل گام به گام مسائل انتگرال، مشتق و جبر دانشگاهی', descEn: 'Step-by-step calculator for calculus and algebra', url: 'https://www.symbolab.com' },
      { nameFa: 'S.O.S. Mathematics', nameEn: 'S.O.S. Mathematics', descFa: 'مرور سریع و تمرینات ریاضیات عمومی دانشگاهی', descEn: 'Quick study material for university math students', url: 'https://www.sosmath.com' }
    ]
  },
  {
    id: 'uk',
    flag: '🇬🇧',
    countryFa: 'بریتانیا (UK)',
    countryEn: 'UK',
    preUniversity: [
      { nameFa: 'Maths Genie', nameEn: 'Maths Genie', descFa: 'درسنامه، نمونه سوالات امتحان و ویدیوهای GCSE و A-Level', descEn: 'GCSE and A-Level revision resources and past papers', url: 'https://www.mathsgenie.co.uk' },
      { nameFa: 'DrFrostMaths', nameEn: 'DrFrostMaths', descFa: 'پلتفرم جامع تمرین و منابع امتحان A-Level و GCSE', descEn: 'Free online platform for UK curriculum practice', url: 'https://www.drfrostmaths.com' },
      { nameFa: 'NRICH Math', nameEn: 'NRICH Math', descFa: 'پازل‌ها و سوالات تحلیلی دانشگاه کمبریج', descEn: 'Enrichment material by University of Cambridge', url: 'https://nrich.maths.org' },
      { nameFa: 'Maths with Mum', nameEn: 'Maths with Mum', descFa: 'آموزش ساده مفاهیم پایه ریاضی', descEn: 'Simple explanations for primary math concepts', url: 'https://www.mathswithmum.com' },
      { nameFa: 'Math Is Fun', nameEn: 'Math Is Fun', descFa: 'آموزش ساده مفاهیم و فرمول‌های پایه', descEn: 'Easy explanations and formulas for basic math', url: 'https://www.mathsisfun.com' }
    ],
    university: [
      { nameFa: 'Cambridge Math Resources', nameEn: 'Cambridge Math Resources', descFa: 'منابع نظری و کاربردی دانشگاه کمبریج', descEn: 'Academic resources from Cambridge University', url: 'https://www.maths.cam.ac.uk' },
      { nameFa: 'Oxford Mathematical Institute', nameEn: 'Oxford Mathematical Institute', descFa: 'منابع و دوره‌های آکادمیک دانشگاه آکسفورد', descEn: 'Lecture notes and public lectures from Oxford', url: 'https://www.maths.ox.ac.uk' },
      { nameFa: 'Imperial College London', nameEn: 'Imperial College London', descFa: 'ریاضی مهندسی دانشگاه امپریال لندن', descEn: 'Engineering math material from Imperial College', url: 'https://www.imperial.ac.uk/mathematics' }
    ]
  },
  {
    id: 'germany',
    flag: '🇩🇪',
    countryFa: 'آلمان (Germany)',
    countryEn: 'Germany',
    preUniversity: [
      { nameFa: 'Serlo', nameEn: 'Serlo', descFa: 'رایگان با توضیح گام‌به‌گام (آلمانی/انگلیسی)', descEn: 'Free open education step-by-step explanations', url: 'https://de.serlo.org' },
      { nameFa: 'GeoGebra', nameEn: 'GeoGebra', descFa: 'نرم‌افزار پویا برای آموزش هندسه، جبر و حسابان (ساخت اروپا)', descEn: 'Dynamic geometry, algebra, and calculus tools', url: 'https://www.geogebra.org' },
      { nameFa: 'Mathefritz', nameEn: 'Mathefritz', descFa: 'تمرینات و برگه‌های امتحانی مدارس آلمان', descEn: 'Worksheets and exam papers for German schools', url: 'https://www.mathefritz.de' },
      { nameFa: 'Realmath', nameEn: 'Realmath', descFa: 'تمرینات تعاملی برای مقاطع Gymnasium آلمان', descEn: 'Interactive math exercises for Gymnasium level', url: 'https://realmath.de' }
    ],
    university: [
      { nameFa: 'MPI Leipzig (مکس پلانک)', nameEn: 'Max Planck Institute Leipzig', descFa: 'ریاضی محض و پیشرفته موسسه مکس پلانک', descEn: 'Pure and applied research mathematics', url: 'https://www.mis.mpg.de' },
      { nameFa: 'TU Munich Math', nameEn: 'TU Munich Math', descFa: 'منابع آموزشی دانشگاه صنعتی مونیخ', descEn: 'Course materials from Technical University of Munich', url: 'https://www.ma.tum.de' },
      { nameFa: 'Heidelberg University Math', nameEn: 'Heidelberg University Math', descFa: 'دانشکده ریاضی و علوم کامپیوتر هایدلبرگ', descEn: 'Faculty of Mathematics resources at Heidelberg', url: 'https://www.mathi.uni-heidelberg.de' }
    ]
  },
  {
    id: 'france',
    flag: '🇫🇷',
    countryFa: 'فرانسه (France)',
    countryEn: 'France',
    preUniversity: [
      { nameFa: 'Maths et tiques', nameEn: 'Maths et tiques', descFa: 'ویدئو، درسنامه و تمرین کامل به زبان فرانسوی', descEn: 'Complete lessons, exercises, and math videos', url: 'https://www.maths-et-tiques.fr' },
      { nameFa: 'Xmaths', nameEn: 'Xmaths', descFa: 'منابع ریاضی دبیرستان و پیش‌دانشگاهی فرانسه (Lycée)', descEn: 'High school math resources for Lycée students', url: 'http://xmaths.free.fr' },
      { nameFa: 'Session Math', nameEn: 'APMEP Baccalauréat', descFa: 'تمرینات و امتحانات نهایی سیستم آموزشی فرانسه (Baccalauréat)', descEn: 'Baccalauréat past exams and solutions', url: 'https://www.apmep.fr' }
    ],
    university: [
      { nameFa: 'Institut Fourier (Grenoble)', nameEn: 'Institut Fourier (Grenoble)', descFa: 'آنالیز و جبر پیشرفته موسسه فوریه گرنوبل', descEn: 'Advanced analysis and algebra research materials', url: 'https://www-fourier.univ-grenoble-alpes.fr' },
      { nameFa: 'École Polytechnique', nameEn: 'École Polytechnique', descFa: 'آموزش ریاضیات مدرسه پلی‌تکنیک فرانسه', descEn: 'Mathematics curricula from École Polytechnique', url: 'https://www.polytechnique.edu' },
      { nameFa: 'Sorbonne University Math', nameEn: 'Sorbonne University Math', descFa: 'دپارتمان ریاضیات دانشگاه سوربن', descEn: 'Department of Mathematics resources at Sorbonne', url: 'https://www.math.sorbonne-universite.fr' }
    ]
  },
  {
    id: 'turkey',
    flag: '🇹🇷',
    countryFa: 'ترکیه (Turkey)',
    countryEn: 'Turkey',
    preUniversity: [
      { nameFa: 'Matematik Vakti', nameEn: 'Matematik Vakti', descFa: 'تمرین و آزمون پایه تا دبیرستان (رایگان)', descEn: 'Free exercises and tests for primary to high school', url: 'https://www.matematikvakti.com' },
      { nameFa: 'Matematik Kolay', nameEn: 'Matematik Kolay', descFa: 'حل تمرین تعاملی و ویدئو برای دبیرستان', descEn: 'Interactive practice and videos for high school', url: 'https://www.matematikkolay.net' },
      { nameFa: 'ÜniversiteGO (بخش ریاضی)', nameEn: 'ÜniversiteGO Math', descFa: 'درسنامه و تست کنکور ترکی (YKS)', descEn: 'Lessons and prep tests for Turkish YKS exam', url: 'https://www.universitego.com' },
      { nameFa: 'Khan Academy Türkçe', nameEn: 'Khan Academy Turkish', descFa: 'نسخه ترکی خان آکادمی (رایگان)', descEn: 'Turkish localization of Khan Academy', url: 'https://tr.khanacademy.org' }
    ],
    university: [
      { nameFa: 'Boğaziçi Üniversitesi Math', nameEn: 'Boğaziçi University Math', descFa: 'اسلاید و جزوه به انگلیسی/ترکی', descEn: 'Lecture slides and notes in English/Turkish', url: 'https://math.boun.edu.tr' },
      { nameFa: 'ODTÜ (METU) Math', nameEn: 'METU Math Department', descFa: 'برنامه درسی و منابع پیشنهادی دانشگاه خاورمیانه', descEn: 'Syllabi and course material from METU', url: 'https://math.metu.edu.tr' },
      { nameFa: 'İTÜ Math (دانشگاه فنی استانبول)', nameEn: 'Istanbul Technical University Math', descFa: 'جزوات درسی ریاضی دانشگاه فنی استانبول', descEn: 'Academic math notes from ITU', url: 'https://www.math.itu.edu.tr' },
      { nameFa: 'Sabancı Üniversitesi', nameEn: 'Sabancı University', descFa: 'دوره‌های آنلاین آزاد و برنامه‌های آکادمیک', descEn: 'Open online courses and university math programs', url: 'https://www.sabanciuniv.edu' }
    ]
  },
  {
    id: 'australia',
    flag: '🇦🇺',
    countryFa: 'استرالیا (Australia)',
    countryEn: 'Australia',
    preUniversity: [
      { nameFa: 'Maths Online', nameEn: 'Maths Online', descFa: 'درسنامه و تمرین کامل سیستم آموزشی استرالیا', descEn: 'Comprehensive K-12 Australian curriculum lessons', url: 'https://www.mathsonline.com.au' },
      { nameFa: 'HSC Maths by Topic', nameEn: 'HSC Maths by Topic', descFa: 'آموزش و نمونه سوالات طبقه بندی شده ریاضی HSC', descEn: 'Categorized HSC exam questions and study guides', url: 'https://hscmathsbytopic.firsteducation.com.au/' },
      { nameFa: 'AMSIMath', nameEn: 'AMSIMath', descFa: 'موسسه علوم ریاضی استرالیا برای مدارس', descEn: 'Australian Mathematical Sciences Institute school modules', url: 'https://calculate.amsi.org.au' },
      { nameFa: 'Eddie Woo Math (Wootube)', nameEn: 'Eddie Woo Math (Wootube)', descFa: 'ویدیوهای آموزشی استاد مشهور ریاضی استرالیا', descEn: 'Famous video explanations for high school math concepts', url: 'https://mreduardowoo.com' }
    ],
    university: [
      { nameFa: 'UNSW Sydney', nameEn: 'UNSW Sydney Math', descFa: 'منابع مهندسی و ریاضی دانشگاه نیوساوث ولز', descEn: 'Mathematics course materials from UNSW', url: 'https://www.maths.unsw.edu.au' },
      { nameFa: 'ANU Math', nameEn: 'ANU Math Department', descFa: 'منابع آموزشی دانشجویی دانشگاه ملی استرالیا', descEn: 'Student learning resources at Australian National University', url: 'https://maths.anu.edu.au' },
      { nameFa: 'University of Melbourne Math', nameEn: 'University of Melbourne Math', descFa: 'منابع دانشکده ریاضیات ملبورن', descEn: 'School of Mathematics and Statistics resources', url: 'https://ms.unimelb.edu.au' }
    ]
  },
  {
    id: 'canada',
    flag: '🇨🇦',
    countryFa: 'کانادا (Canada)',
    countryEn: 'Canada',
    preUniversity: [
      { nameFa: 'CEMC University of Waterloo', nameEn: 'CEMC (Waterloo)', descFa: 'آموزش و نمونه سوالات المپیاد و ریاضی مدارس کانادا', descEn: 'Courseware & contests by Centre for Education in Math', url: 'https://www.cemc.uwaterloo.ca' },
      { nameFa: 'TVO Learn (Ontario)', nameEn: 'TVO Learn', descFa: 'منابع رسمی آموزش ریاضی بر اساس استاندارد انتاریو', descEn: 'Official Ontario curriculum resources for K-12', url: 'https://tvolearn.com' },
      { nameFa: 'Mathies', nameEn: 'Mathies', descFa: 'ابزارهای تعاملی آموزش ریاضیات مدارس', descEn: 'Interactive tools and games for learning math', url: 'https://mathies.ca' }
    ],
    university: [
      { nameFa: 'University of Toronto Math', nameEn: 'U of T Mathematics', descFa: 'منابع و جزوات آموزشی دانشگاه تورنتو', descEn: 'Course information and math resources', url: 'https://www.math.toronto.edu' },
      { nameFa: 'UBC Mathematics', nameEn: 'UBC Math Department', descFa: 'صفحه اساتید و جزوات ریاضی بریتیش کلمبیا', descEn: 'Calculus and math course portals at UBC', url: 'https://www.math.ubc.ca' }
    ]
  }
];

export default function MathSites() {
  const { isFa } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState('all'); // all, preUniversity, university

  return (
    <main dir={isFa ? 'rtl' : 'ltr'} className="min-h-screen bg-slate-50 text-slate-900 font-sans pb-12 antialiased">
      {/* هدر صفحه */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 px-4 py-3 shadow-sm">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-slate-700 hover:text-blue-600 transition font-bold text-sm">
            <span>{isFa ? '← بازگشت به صفحه اصلی' : '← Back to Home'}</span>
          </Link>
          <h1 className="font-black text-lg text-slate-800">
            {isFa ? 'سایت‌های آموزشی ریاضی کشورها' : 'Global Math Websites'}
          </h1>
        </div>
      </header>

      <section className="max-w-5xl mx-auto px-4 pt-8">
        {/* فیلتر مقطع تحصیلی */}
        <div className="flex justify-center gap-2 mb-8">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-4 py-2 rounded-xl text-xs md:text-sm font-bold transition ${selectedCategory === 'all' ? 'bg-blue-600 text-white shadow' : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'}`}
          >
            {isFa ? 'همه مقاطع' : 'All Levels'}
          </button>
          <button
            onClick={() => setSelectedCategory('preUniversity')}
            className={`px-4 py-2 rounded-xl text-xs md:text-sm font-bold transition ${selectedCategory === 'preUniversity' ? 'bg-blue-600 text-white shadow' : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'}`}
          >
            🏫 {isFa ? 'قبل از دانشگاه (K-12)' : 'K-12 / High School'}
          </button>
          <button
            onClick={() => setSelectedCategory('university')}
            className={`px-4 py-2 rounded-xl text-xs md:text-sm font-bold transition ${selectedCategory === 'university' ? 'bg-blue-600 text-white shadow' : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'}`}
          >
            🎓 {isFa ? 'دانشگاهی' : 'University Level'}
          </button>
        </div>

        {/* لیست کشورها */}
        <div className="space-y-10">
          {MATH_SITES_DATA.map((country) => (
            <div key={country.id} className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm">
              <h2 className="text-2xl font-black mb-6 flex items-center gap-3 border-b border-slate-100 pb-3 text-slate-800">
                <span className="text-3xl">{country.flag}</span>
                <span>{isFa ? country.countryFa : country.countryEn}</span>
              </h2>

              {/* بخش مدارس و قبل از دانشگاه */}
              {(selectedCategory === 'all' || selectedCategory === 'preUniversity') && country.preUniversity.length > 0 && (
                <div className="mb-6">
                  <h3 className="text-sm font-bold text-slate-500 mb-3 flex items-center gap-1.5">
                    <span>🏫</span> {isFa ? 'منابع قبل از دانشگاه (مدارس)' : 'Pre-University & High School'}
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {country.preUniversity.map((item, idx) => (
                      <a
                        key={idx}
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-blue-400 hover:bg-blue-50/50 transition duration-200 group flex flex-col justify-between"
                      >
                        <div>
                          <div className="font-bold text-slate-800 group-hover:text-blue-600 transition flex items-center justify-between">
                            <span>{isFa ? item.nameFa : item.nameEn}</span>
                            <span className="text-xs text-slate-400 group-hover:text-blue-500">↗</span>
                          </div>
                          <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                            {isFa ? item.descFa : item.descEn}
                          </p>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              )}

              {/* بخش دانشگاهی */}
              {(selectedCategory === 'all' || selectedCategory === 'university') && country.university.length > 0 && (
                <div>
                  <h3 className="text-sm font-bold text-slate-500 mb-3 flex items-center gap-1.5">
                    <span>🎓</span> {isFa ? 'منابع دانشگاهی و آکادمیک' : 'University & Academic'}
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {country.university.map((item, idx) => (
                      <a
                        key={idx}
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-blue-400 hover:bg-blue-50/50 transition duration-200 group flex flex-col justify-between"
                      >
                        <div>
                          <div className="font-bold text-slate-800 group-hover:text-blue-600 transition flex items-center justify-between">
                            <span>{isFa ? item.nameFa : item.nameEn}</span>
                            <span className="text-xs text-slate-400 group-hover:text-blue-500">↗</span>
                          </div>
                          <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                            {isFa ? item.descFa : item.descEn}
                          </p>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
