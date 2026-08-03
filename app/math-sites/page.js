'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';

// داده‌های جامع سایت‌های ریاضی کشورها
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
      { nameFa: 'Math Central', nameEn: 'Math Central', descFa: 'منبع رایگان دانشگاه Regina برای معلمان و دانش‌آموزان', descEn: 'Service for math teachers and students by Univ. of Regina', url: 'https://mathcentral.uregina.ca' },
      { nameFa: 'CEMC (University of Waterloo)', nameEn: 'CEMC (University of Waterloo)', descFa: 'مسابقات و منابع ریاضی مدارس از دانشگاه واترلو', descEn: 'Contests and courseware for computer science & math', url: 'https://www.cemc.uwaterloo.ca' },
      { nameFa: 'TVO Learn Math', nameEn: 'TVO Learn Math', descFa: 'برنامه درسی رسمی استان اونتاریو برای مقاطع مختلف', descEn: 'Official Ontario curriculum resources for K-12', url: 'https://tvolearn.com' }
    ],
    university: [
      { nameFa: 'UBC Math (وانکور)', nameEn: 'UBC Math', descFa: 'دوره‌های آموزشی رایگان دانشگاه بریتیش کلمبیا', descEn: 'Course pages and exam archives from Univ. of British Columbia', url: 'https://www.math.ubc.ca' },
      { nameFa: 'Waterloo Math', nameEn: 'Waterloo Math', descFa: 'دوره‌های کارشناسی ریاضی دانشگاه واترلو', descEn: 'Faculty of Mathematics undergraduate study resources', url: 'https://uwaterloo.ca/math' },
      { nameFa: 'University of Toronto Math', nameEn: 'University of Toronto Math', descFa: 'منابع آکادمیک دپارتمان ریاضی تورنتو', descEn: 'Department of Mathematics resources at U of T', url: 'https://www.math.toronto.edu' }
    ]
  },
  {
    id: 'japan',
    flag: '🇯🇵',
    countryFa: 'ژاپن (Japan)',
    countryEn: 'Japan',
    preUniversity: [
      { nameFa: 'Sugaku', nameEn: 'Sugaku', descFa: 'به ژاپنی، مناسب دبستان و راهنمایی', descEn: 'Japanese math practice for elementary and middle school', url: 'https://www.sugaku.jp' },
      { nameFa: 'StudySapuri Math', nameEn: 'StudySapuri Math', descFa: 'پلتفرم جامع ویدیوهای امتحانی و ریاضی مدارس ژاپن', descEn: 'Comprehensive Japanese video lesson platform', url: 'https://studysapuri.jp' },
      { nameFa: 'Manabitimes', nameEn: 'Manabitimes', descFa: 'توضیحات فرمول‌ها و حل مسائل ریاضی دبیرستان ژاپن', descEn: 'Formula breakdowns and high school problem solving', url: 'https://manabitimes.jp/math' }
    ],
    university: [
      { nameFa: 'Kyoto University Math', nameEn: 'Kyoto University Math', descFa: 'ریاضی محض دانشگاه کیوتو', descEn: 'Pure math department notes from Kyoto University', url: 'https://www.math.kyoto-u.ac.jp' },
      { nameFa: 'Todai Math (توکیو)', nameEn: 'Todai Math (University of Tokyo)', descFa: 'آموزش تخصصی ریاضیات دانشگاه توکیو', descEn: 'Mathematical Sciences resources from Univ. of Tokyo', url: 'https://www.ms.u-tokyo.ac.jp' },
      { nameFa: 'Tokyo Tech Math', nameEn: 'Tokyo Tech Math', descFa: 'دانشکده ریاضیات دانشگاه صنعتی توکیو', descEn: 'Department of Mathematics at Tokyo Institute of Tech', url: 'https://www.math.titech.ac.jp' }
    ]
  },
  {
    id: 'india',
    flag: '🇮🇳',
    countryFa: 'هند (India)',
    countryEn: 'India',
    preUniversity: [
      { nameFa: "BYJU'S", nameEn: "BYJU'S", descFa: 'ویدیوهای مفهومی پایه تا دوازدهم', descEn: 'Conceptual math lessons and videos K-12', url: 'https://byjus.com' },
      { nameFa: 'Cuemath', nameEn: 'Cuemath', descFa: 'تمرین تعاملی ریاضی پایه', descEn: 'Interactive math learning program for K-12', url: 'https://www.cuemath.com' },
      { nameFa: 'Vedantu Math', nameEn: 'Vedantu Math', descFa: 'کلاس‌های آنلاین و تست‌های آمادگی JEE', descEn: 'Online tutoring and JEE entrance exam prep', url: 'https://www.vedantu.com' },
      { nameFa: 'Tiwari Academy', nameEn: 'Tiwari Academy', descFa: 'راهنما و حل تمرینات کتب NCERT هند', descEn: 'Solutions and guides for Indian NCERT textbooks', url: 'https://www.tiwariacademy.com' }
    ],
    university: [
      { nameFa: 'NPTEL Math', nameEn: 'NPTEL Math', descFa: 'آموزش پایه دانشگاه و کنکور (موسسه ملی فناوری)', descEn: 'National Programme on Technology Enhanced Learning math courses', url: 'https://nptel.ac.in' },
      { nameFa: 'IIT Bombay Math', nameEn: 'IIT Bombay Math', descFa: 'برنامه‌های آکادمیک IIT بمبئی', descEn: 'Department of Mathematics resources at IIT Bombay', url: 'https://www.math.iitb.ac.in' },
      { nameFa: 'ISI Kolkata', nameEn: 'ISI Kolkata', descFa: 'موسسه آمار و ریاضیات پیشرفته هند', descEn: 'Indian Statistical Institute advanced math material', url: 'https://www.isical.ac.in' }
    ]
  }
];

export default function MathSitesPage() {
  const { isFa } = useLanguage();
  const [selectedCountry, setSelectedCountry] = useState(MATH_SITES_DATA[0]);

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
        </div>

        {/* عنوان صفحه */}
        <div className="text-center mb-8">
          <h1 className="text-2xl md:text-4xl font-black text-slate-900 mb-3">
            💻 {isFa ? 'سایت‌های آموزشی ریاضی کشورها' : 'Math Educational Websites'}
          </h1>
          <p className="text-xs md:text-sm text-slate-600 font-medium">
            {isFa ? 'برای مشاهده سایت‌های هر کشور، روی دکمه مربوط به آن کلیک کنید:' : 'Click on any country button to reveal its resources below:'}
          </p>
        </div>

        {/* لیست کشورها */}
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

        {/* کادر اطلاعات کشور انتخاب شده */}
        {selectedCountry && (
          <div className="bg-slate-100 rounded-3xl p-6 md:p-8 border border-slate-300 shadow-sm transition-all duration-300">
            
            <div className="flex items-center gap-3 border-b border-slate-300 pb-4 mb-6">
              <span className="text-4xl">{selectedCountry.flag}</span>
              <h2 className="text-xl md:text-2xl font-black text-slate-900">
                {isFa ? `منابع و سایت‌های ریاضی ${selectedCountry.countryFa}` : `${selectedCountry.countryEn} Math Websites`}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              {/* بخش قبل از دانشگاه */}
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
                            {isFa ? (site.nameFa || site.name) : (site.nameEn || site.name)}
                          </div>
                          <div className="text-xs text-slate-600 mt-1">
                            {isFa ? (site.descFa || site.desc) : (site.descEn || site.desc)}
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
                            {isFa ? (site.nameFa || site.name) : (site.nameEn || site.name)}
                          </div>
                          <div className="text-xs text-slate-600 mt-1">
                            {isFa ? (site.descFa || site.desc) : (site.descEn || site.desc)}
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
