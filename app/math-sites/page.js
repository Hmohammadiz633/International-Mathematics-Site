'use client';

import { useState } from 'react';
import Link from 'next/link';

// داده‌های جامع سایت‌های ریاضی کشورها با پشتیبانی کامل از متن فارسی و انگلیسی
const MATH_SITES_DATA = [
  {
    id: 'iran',
    flag: '🇮🇷',
    countryFa: 'ایران',
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
    countryFa: 'ایالات متحده',
    countryEn: 'USA',
    preUniversity: [
      { nameFa: 'خان آکادمی', nameEn: 'Khan Academy', descFa: 'ریاضی از پایه تا پیشرفته و آمادگی SAT/AP', descEn: 'Math K-12, SAT/AP test prep & interactive practice', url: 'https://www.khanacademy.org' },
      { nameFa: 'آی‌اکس‌ال مَث', nameEn: 'IXL Math', descFa: 'تمرین پایه به پایه و استانداردهای آموزشی آمریکا', descEn: 'Comprehensive K-12 practice aligned with US standards', url: 'https://www.ixl.com' },
      { nameFa: 'بریلیانت', nameEn: 'Brilliant', descFa: 'آموزش مفهومی و تفکر الگوریتمی و ریاضی', descEn: 'Interactive conceptual STEM learning and problem solving', url: 'https://brilliant.org' },
      { nameFa: 'دزموس', nameEn: 'Desmos', descFa: 'ماشین‌حساب پیشرفته گرافیکی و رسم نمودار آنلاین', descEn: 'Advanced online graphing calculator and math tools', url: 'https://www.desmos.com' },
      { nameFa: 'آرت آف پروبلم سولوینگ (AoPS)', nameEn: 'Art of Problem Solving (AoPS)', descFa: 'منابع و انجمن برای المپیاد و مسائل پیشرفته', descEn: 'Olympiad prep, advanced math community & resources', url: 'https://artofproblemsolving.com' },
      { nameFa: 'پرپل‌مَث', nameEn: 'Purplemath', descFa: 'درسنامه‌های ساده جبر و هندسه برای دبیرستان', descEn: 'Practical algebra and geometry high school lessons', url: 'https://www.purplemath.com' },
      { nameFa: 'کوتا سافت‌ور', nameEn: 'Kuta Software', descFa: 'برگه‌های تمرین (Worksheet) رایگان جبر و حسابان', descEn: 'Free downloadable worksheets for Algebra and Calculus', url: 'https://www.kutasoftware.com' }
    ],
    university: [
      { nameFa: 'ام‌آی‌تی اوپن‌کورس‌ویر', nameEn: 'MIT OpenCourseWare', descFa: 'منبع کلاسیک و جامع دوره‌های ریاضی MIT', descEn: 'Free lecture notes, exams, and videos from MIT', url: 'https://ocw.mit.edu' },
      { nameFa: "پائولز آنلاین مَث نوتس", nameEn: "Paul's Online Math Notes", descFa: 'جزوات ریاضی عمومی و دیفرانسیل دانشگاه Lamar', descEn: 'Popular calculus and differential equations study guide', url: 'https://tutorial.math.lamar.edu' },
      { nameFa: 'ولفریم مَث‌ورلد', nameEn: 'Wolfram MathWorld', descFa: 'دانشنامه تخصصی و جامع ریاضیات جهان', descEn: 'The webs most extensive mathematical encyclopedia', url: 'https://mathworld.wolfram.com' },
      { nameFa: 'سیملب', nameEn: 'Symbolab', descFa: 'حل گام به گام مسائل انتگرال، مشتق و جبر دانشگاهی', descEn: 'Step-by-step calculator for calculus and algebra', url: 'https://www.symbolab.com' },
      { nameFa: 'اس.او.اس ریاضیات', nameEn: 'S.O.S. Mathematics', descFa: 'مرور سریع و تمرینات ریاضیات عمومی دانشگاهی', descEn: 'Quick study material for university math students', url: 'https://www.sosmath.com' }
    ]
  },
  {
    id: 'uk',
    flag: '🇬🇧',
    countryFa: 'بریتانیا',
    countryEn: 'UK',
    preUniversity: [
      { nameFa: 'مِثس جنی', nameEn: 'Maths Genie', descFa: 'درسنامه، نمونه سوالات امتحان و ویدیوهای GCSE و A-Level', descEn: 'GCSE and A-Level revision resources and past papers', url: 'https://www.mathsgenie.co.uk' },
      { nameFa: 'دکتر فراست مَثس', nameEn: 'DrFrostMaths', descFa: 'پلتفرم جامع تمرین و منابع امتحان A-Level و GCSE', descEn: 'Free online platform for UK curriculum practice', url: 'https://www.drfrostmaths.com' },
      { nameFa: 'انریچ مَث', nameEn: 'NRICH Math', descFa: 'پازل‌ها و سوالات تحلیلی دانشگاه کمبریج', descEn: 'Enrichment material by University of Cambridge', url: 'https://nrich.maths.org' },
      { nameFa: 'مِثس وید مام', nameEn: 'Maths with Mum', descFa: 'آموزش ساده مفاهیم پایه ریاضی', descEn: 'Simple explanations for primary math concepts', url: 'https://www.mathswithmum.com' },
      { nameFa: 'مَث ایز فان', nameEn: 'Math Is Fun', descFa: 'آموزش ساده مفاهیم و فرمول‌های پایه', descEn: 'Easy explanations and formulas for basic math', url: 'https://www.mathsisfun.com' }
    ],
    university: [
      { nameFa: 'منابع ریاضی کمبریج', nameEn: 'Cambridge Math Resources', descFa: 'منابع نظری و کاربردی دانشگاه کمبریج', descEn: 'Academic resources from Cambridge University', url: 'https://www.maths.cam.ac.uk' },
      { nameFa: 'موسسه ریاضیات آکسفورد', nameEn: 'Oxford Mathematical Institute', descFa: 'منابع و دوره‌های آکادمیک دانشگاه آکسفورد', descEn: 'Lecture notes and public lectures from Oxford', url: 'https://www.maths.ox.ac.uk' },
      { nameFa: 'امپریال کالج لندن', nameEn: 'Imperial College London', descFa: 'ریاضی مهندسی دانشگاه امپریال لندن', descEn: 'Engineering math material from Imperial College', url: 'https://www.imperial.ac.uk/mathematics' }
    ]
  },
  {
    id: 'germany',
    flag: '🇩🇪',
    countryFa: 'آلمان',
    countryEn: 'Germany',
    preUniversity: [
      { nameFa: 'سِرلُو', nameEn: 'Serlo', descFa: 'رایگان با توضیح گام‌به‌گام (آلمانی/انگلیسی)', descEn: 'Free open education step-by-step explanations', url: 'https://de.serlo.org' },
      { nameFa: 'جئوگبرا', nameEn: 'GeoGebra', descFa: 'نرم‌افزار پویا برای آموزش هندسه، جبر و حسابان (ساخت اروپا)', descEn: 'Dynamic geometry, algebra, and calculus tools', url: 'https://www.geogebra.org' },
      { nameFa: 'ماته‌فریتز', nameEn: 'Mathefritz', descFa: 'تمرینات و برگه‌های امتحانی مدارس آلمان', descEn: 'Worksheets and exam papers for German schools', url: 'https://www.mathefritz.de' },
      { nameFa: 'ریالمث', nameEn: 'Realmath', descFa: 'تمرینات تعاملی برای مقاطع Gymnasium آلمان', descEn: 'Interactive math exercises for Gymnasium level', url: 'https://realmath.de' }
    ],
    university: [
      { nameFa: 'موسسه مکس پلانک لایپزیگ', nameEn: 'Max Planck Institute Leipzig', descFa: 'ریاضی محض و پیشرفته موسسه مکس پلانک', descEn: 'Pure and applied research mathematics', url: 'https://www.mis.mpg.de' },
      { nameFa: 'ریاضی دانشگاه فنی مونیخ', nameEn: 'TU Munich Math', descFa: 'منابع آموزشی دانشگاه صنعتی مونیخ', descEn: 'Course materials from Technical University of Munich', url: 'https://www.ma.tum.de' },
      { nameFa: 'ریاضی دانشگاه هایدلبرگ', nameEn: 'Heidelberg University Math', descFa: 'دانشکده ریاضی و علوم کامپیوتر هایدلبرگ', descEn: 'Faculty of Mathematics resources at Heidelberg', url: 'https://www.mathi.uni-heidelberg.de' }
    ]
  },
  {
    id: 'france',
    flag: '🇫🇷',
    countryFa: 'فرانسه',
    countryEn: 'France',
    preUniversity: [
      { nameFa: 'مِثس ات تیک', nameEn: 'Maths et tiques', descFa: 'ویدئو، درسنامه و تمرین کامل به زبان فرانسوی', descEn: 'Complete lessons, exercises, and math videos', url: 'https://www.maths-et-tiques.fr' },
      { nameFa: 'ایکس‌مَثس', nameEn: 'Xmaths', descFa: 'منابع ریاضی دبیرستان و پیش‌دانشگاهی فرانسه (Lycée)', descEn: 'High school math resources for Lycée students', url: 'http://xmaths.free.fr' },
      { nameFa: 'سشن مَث (باکالوریا)', nameEn: 'APMEP Baccalauréat', descFa: 'تمرینات و امتحانات نهایی سیستم آموزشی فرانسه (Baccalauréat)', descEn: 'Baccalauréat past exams and solutions', url: 'https://www.apmep.fr' }
    ],
    university: [
      { nameFa: 'موسسه فوریه (گرنوبل)', nameEn: 'Institut Fourier (Grenoble)', descFa: 'آنالیز و جبر پیشرفته موسسه فوریه گرنوبل', descEn: 'Advanced analysis and algebra research materials', url: 'https://www-fourier.univ-grenoble-alpes.fr' },
      { nameFa: 'اکول پلی‌تکنیک', nameEn: 'École Polytechnique', descFa: 'آموزش ریاضیات مدرسه پلی‌تکنیک فرانسه', descEn: 'Mathematics curricula from École Polytechnique', url: 'https://www.polytechnique.edu' },
      { nameFa: 'ریاضی دانشگاه سوربن', nameEn: 'Sorbonne University Math', descFa: 'دپارتمان ریاضیات دانشگاه سوربن', descEn: 'Department of Mathematics resources at Sorbonne', url: 'https://www.math.sorbonne-universite.fr' }
    ]
  },
  {
    id: 'turkey',
    flag: '🇹🇷',
    countryFa: 'ترکیه',
    countryEn: 'Turkey',
    preUniversity: [
      { nameFa: 'متناتیک واکتی', nameEn: 'Matematik Vakti', descFa: 'تمرین و آزمون پایه تا دبیرستان (رایگان)', descEn: 'Free exercises and tests for primary to high school', url: 'https://www.matematikvakti.com' },
      { nameFa: 'متناتیک کلای', nameEn: 'Matematik Kolay', descFa: 'حل تمرین تعاملی و ویدئو برای دبیرستان', descEn: 'Interactive practice and videos for high school', url: 'https://www.matematikkolay.net' },
      { nameFa: 'یونیورسیتگو (بخش ریاضی)', nameEn: 'ÜniversiteGO Math', descFa: 'درسنامه و تست کنکور ترکی (YKS)', descEn: 'Lessons and prep tests for Turkish YKS exam', url: 'https://www.universitego.com' },
      { nameFa: 'خان آکادمی ترکی', nameEn: 'Khan Academy Turkish', descFa: 'نسخه ترکی خان آکادمی (رایگان)', descEn: 'Turkish localization of Khan Academy', url: 'https://tr.khanacademy.org' }
    ],
    university: [
      { nameFa: 'ریاضی دانشگاه بوغازچی', nameEn: 'Boğaziçi University Math', descFa: 'اسلاید و جزوه به انگلیسی/ترکی', descEn: 'Lecture slides and notes in English/Turkish', url: 'https://math.boun.edu.tr' },
      { nameFa: 'ریاضی دانشگاه خاورمیانه (METU)', nameEn: 'METU Math Department', descFa: 'برنامه درسی و منابع پیشنهادی دانشگاه خاورمیانه', descEn: 'Syllabi and course material from METU', url: 'https://math.metu.edu.tr' },
      { nameFa: 'ریاضی دانشگاه فنی استانبول (İTÜ)', nameEn: 'Istanbul Technical University Math', descFa: 'جزوات درسی ریاضی دانشگاه فنی استانبول', descEn: 'Academic math notes from ITU', url: 'https://math.itu.edu.tr' },
      { nameFa: 'دانشگاه سابانجی', nameEn: 'Sabancı University', descFa: 'دوره‌های آنلاین آزاد و برنامه‌های آکادمیک', descEn: 'Open online courses and university math programs', url: 'https://www.sabanciuniv.edu' }
    ]
  },
  {
    id: 'australia',
    flag: '🇦🇺',
    countryFa: 'استرالیا',
    countryEn: 'Australia',
    preUniversity: [
      { nameFa: 'مِثس آنلاین', nameEn: 'Maths Online', descFa: 'درسنامه و تمرین کامل سیستم آموزشی استرالیا', descEn: 'Comprehensive Australian curriculum lessons', url: 'https://www.mathsonline.com.au' },
      { nameFa: 'اچ‌اس‌سی مِثس', nameEn: 'HSC Maths by Topic', descFa: 'آموزش و نمونه سوالات طبقه بندی شده ریاضی HSC', descEn: 'Categorized HSC exam questions and study guides', url: 'https://hscmathsbytopic.firsteducation.com.au/' },
      { nameFa: 'امسی‌مَث', nameEn: 'AMSIMath', descFa: 'موسسه علوم ریاضی استرالیا برای مدارس', descEn: 'Australian Mathematical Sciences Institute school modules', url: 'https://calculate.amsi.org.au' },
      { nameFa: 'ادی وو مَث (ووتوب)', nameEn: 'Eddie Woo Math (Wootube)', descFa: 'ویدیوهای آموزشی استاد مشهور ریاضی استرالیا', descEn: 'Famous video explanations for high school math concepts', url: 'https://mreduardowoo.com' }
    ],
    university: [
      { nameFa: 'ریاضی دانشگاه نیوساوث ولز', nameEn: 'UNSW Sydney Math', descFa: 'منابع مهندسی و ریاضی دانشگاه نیوساوث ولز', descEn: 'Mathematics course materials from UNSW', url: 'https://www.maths.unsw.edu.au' },
      { nameFa: 'ریاضی دانشگاه ملی استرالیا (ANU)', nameEn: 'ANU Math Department', descFa: 'منابع آموزشی دانشجویی دانشگاه ملی استرالیا', descEn: 'Student learning resources at Australian National University', url: 'https://maths.anu.edu.au' },
      { nameFa: 'ریاضی دانشگاه ملبورن', nameEn: 'University of Melbourne Math', descFa: 'منابع دانشکده ریاضیات ملبورن', descEn: 'School of Mathematics and Statistics resources', url: 'https://ms.unimelb.edu.au' }
    ]
  },
  {
    id: 'canada',
    flag: '🇨🇦',
    countryFa: 'کانادا',
    countryEn: 'Canada',
    preUniversity: [
      { nameFa: 'مرکز ریاضیات واترلو (CEMC)', nameEn: 'CEMC (Waterloo)', descFa: 'آموزش و نمونه سوالات المپیاد و ریاضی مدارس کانادا', descEn: 'Courseware & contests by Centre for Education in Math', url: 'https://www.cemc.uwaterloo.ca' },
      { nameFa: 'تی‌وی‌او ماسیفای', nameEn: 'TVO Mathify', descFa: 'پشتیبانی و آموزش آنلاین ریاضی بر اساس استاندارد انتاریو', descEn: 'Online math tutoring and resources based on Ontario curriculum', url: 'https://www.tvomathify.com' },
      { nameFa: 'سی‌کی-۱۲ فاندیشن', nameEn: 'CK-12 Foundation', descFa: 'کتب درسی و منابع تعاملی رایگان ریاضی', descEn: 'Free online textbooks and interactive math resources', url: 'https://www.ck12.org' },
      { nameFa: 'تی‌وی‌او لرن (اونتاریو)', nameEn: 'TVO Learn', descFa: 'منابع رسمی آموزش ریاضی بر اساس استاندارد انتاریو', descEn: 'Official Ontario curriculum resources', url: 'https://tvolearn.com' },
      { nameFa: 'مِثیز', nameEn: 'Mathies', descFa: 'ابزارهای تعاملی آموزش ریاضیات مدارس', descEn: 'Interactive tools and games for learning math', url: 'https://mathies.ca' }
    ],
    university: [
      { nameFa: 'ریاضی دانشگاه تورنتو', nameEn: 'U of T Mathematics', descFa: 'منابع و جزوات آموزشی دانشگاه تورنتو', descEn: 'Course information and math resources', url: 'https://www.math.toronto.edu' },
      { nameFa: 'ریاضی دانشگاه بریتیش کلمبیا (UBC)', nameEn: 'UBC Math Department', descFa: 'صفحه اساتید و جزوات ریاضی بریتیش کلمبیا', descEn: 'Calculus and math course portals at UBC', url: 'https://www.math.ubc.ca' },
      { nameFa: 'موسسه پریمیتر (منابع نظری)', nameEn: 'Perimeter Institute', descFa: 'فیزیک نظری و ریاضیات پیشرفته', descEn: 'Theoretical physics and advanced mathematics resources', url: 'https://perimeterinstitute.ca' }
    ]
  },
  {
    id: 'japan',
    flag: '🇯🇵',
    countryFa: 'ژاپن',
    countryEn: 'Japan',
    preUniversity: [
      { nameFa: 'سوگاکو', nameEn: 'Sugaku', descFa: 'به ژاپنی، مناسب دبستان و راهنمایی', descEn: 'Japanese math resource for primary and middle school', url: 'https://www.sugaku.jp' },
      { nameFa: 'استادی ساپوری مَث', nameEn: 'StudySapuri Math', descFa: 'پلتفرم جامع ویدیوهای امتحانی و ریاضی مدارس ژاپن', descEn: 'Comprehensive Japanese school exam and math videos', url: 'https://studysapuri.jp' },
      { nameFa: 'مانابی تایمز', nameEn: 'Manabitimes', descFa: 'توضیحات فرمول‌ها و حل مسائل ریاضی دبیرستان ژاپن', descEn: 'Formulas and high school math problem solving in Japan', url: 'https://manabitimes.jp/math' }
    ],
    university: [
      { nameFa: 'ریاضی دانشگاه کیوتو', nameEn: 'Kyoto University Math', descFa: 'ریاضی محض دانشگاه کیوتو', descEn: 'Pure mathematics at Kyoto University', url: 'https://www.math.kyoto-u.ac.jp' },
      { nameFa: 'ریاضی دانشگاه توکیو', nameEn: 'Todai Math', descFa: 'آموزش تخصصی ریاضیات دانشگاه توکیو', descEn: 'Specialized mathematics education at University of Tokyo', url: 'https://www.ms.u-tokyo.ac.jp' },
      { nameFa: 'ریاضی دانشگاه صنعتی توکیو', nameEn: 'Tokyo Tech Math', descFa: 'دانشکده ریاضیات دانشگاه صنعتی توکیو', descEn: 'Department of Mathematics at Tokyo Tech', url: 'https://www.math.titech.ac.jp' }
    ]
  },
  {
    id: 'india',
    flag: '🇮🇳',
    countryFa: 'هند',
    countryEn: 'India',
    preUniversity: [
      { nameFa: 'بایجوز', nameEn: "BYJU'S", descFa: 'ویدیوهای مفهومی پایه تا دوازدهم', descEn: 'Conceptual videos for grades 1 to 12', url: 'https://byjus.com' },
      { nameFa: 'کیومث', nameEn: 'Cuemath', descFa: 'تمرین تعاملی ریاضی پایه', descEn: 'Interactive foundational math practice', url: 'https://www.cuemath.com' },
      { nameFa: 'ویدانتو مَث', nameEn: 'Vedantu Math', descFa: 'کلاس‌های آنلاین و تست‌های آمادگی JEE', descEn: 'Online classes and JEE preparation tests', url: 'https://www.vedantu.com' },
      { nameFa: 'تیواری آکادمی', nameEn: 'Tiwari Academy', descFa: 'راهنما و حل تمرینات کتب NCERT هند', descEn: 'Solutions and guide for Indian NCERT textbooks', url: 'https://www.tiwariacademy.com' }
    ],
    university: [
      { nameFa: 'ان‌پی‌تی‌ئی‌ال مَث', nameEn: 'NPTEL Math', descFa: 'آموزش پایه دانشگاه و کنکور (موسسه ملی فناوری)', descEn: 'Basic university and entrance exam education (NPTEL)', url: 'https://nptel.ac.in' },
      { nameFa: 'ریاضی آی‌آی‌تی بمبئی', nameEn: 'IIT Bombay Math', descFa: 'برنامه‌های آکادمیک IIT بمبئی', descEn: 'Academic programs at IIT Bombay', url: 'https://www.math.iitb.ac.in' },
      { nameFa: 'موسسه آمار کلکته (ISI)', nameEn: 'ISI Kolkata', descFa: 'موسسه آمار و ریاضیات پیشرفته هند', descEn: 'Indian Statistical Institute advanced math and stats', url: 'https://www.isical.ac.in' }
    ]
  }
];

export default function MathSitesPage() {
  const [lang, setLang] = useState('fa');
  const [selectedCountry, setSelectedCountry] = useState(MATH_SITES_DATA[0]);

  const isFa = lang === 'fa';
  const isIran = selectedCountry.id === 'iran';

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

        {/* دکمه‌های کشورها */}
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
              
              {/* بخش قبل دانشگاه */}
              {selectedCountry.preUniversity && selectedCountry.preUniversity.length > 0 && (
                <div>
                  <h3 className="text-base font-bold text-slate-800 mb-4 flex items-center gap-2">
                    🏫 {isFa ? 'قبل دانشگاه' : 'Pre-University & High School'}
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
                        <div className="flex flex-col w-full text-right" style={{ direction: 'rtl', textAlign: 'right' }}>
                          {/* نام سایت: راست‌چین کامل در فارسی و انگلیسی */}
                          <div className="font-bold text-slate-900 group-hover:underline text-sm md:text-base">
                            {isIran ? (isFa ? site.nameFa : site.nameEn) : site.nameEn}
                          </div>
                          {/* توضیحات: راست‌چین و زیر نام سایت */}
                          <div className="text-xs text-slate-600 mt-1">
                            {isFa ? site.descFa : site.descEn}
                          </div>
                        </div>
                        <span className="text-slate-500 font-bold group-hover:translate-x-1 transition-transform text-xs shrink-0 mr-2">↗</span>
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
                        <div className="flex flex-col w-full text-right" style={{ direction: 'rtl', textAlign: 'right' }}>
                          {/* نام سایت: راست‌چین کامل در فارسی و انگلیسی */}
                          <div className="font-bold text-slate-900 group-hover:underline text-sm md:text-base">
                            {isIran ? (isFa ? site.nameFa : site.nameEn) : site.nameEn}
                          </div>
                          {/* توضیحات: راست‌چین و زیر نام سایت */}
                          <div className="text-xs text-slate-600 mt-1">
                            {isFa ? site.descFa : site.descEn}
                          </div>
                        </div>
                        <span className="text-slate-500 font-bold group-hover:translate-x-1 transition-transform text-xs shrink-0 mr-2">↗</span>
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
