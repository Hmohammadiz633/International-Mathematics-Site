'use client';

import React, { useState } from 'react';
import Link from 'next/link';

// داده‌های سایت‌های ریاضی کشورها
const MATH_SITES_DATA = [
  {
    countryFa: 'آمریکا',
    countryEn: 'USA',
    flag: '🇺🇸',
    sites: [
      {
        nameEn: 'Khan Academy',
        url: 'https://www.khanacademy.org',
        descFa: 'آموزش کاملاً رایگان ریاضی از پایه تا دانشگاه همراه با تمرین‌های تعاملی.',
        descEn: 'Free online courses, lessons & practice for all math levels.'
      },
      {
        nameEn: 'IXL Math',
        url: 'https://www.ixl.com/math',
        descFa: 'بانک سوالات طبقه‌بندی شده ریاضی مدارس آمریکا براساس پایه تحصیلی.',
        descEn: 'Comprehensive K-12 math practice with adaptive learning.'
      },
      {
        nameEn: 'Desmos',
        url: 'https://www.desmos.com',
        descFa: 'رسم آنلاین نمودارها و ماشین‌حساب پیشرفته ریاضی.',
        descEn: 'Advanced graphic calculator and interactive math tools.'
      }
    ]
  },
  {
    countryFa: 'انگلستان',
    countryEn: 'UK',
    flag: '🇬🇧',
    sites: [
      {
        nameEn: 'DrFrostMaths',
        url: 'https://www.drfrostmaths.com',
        descFa: 'منبع عالی برای امتحانات GCSE و A-Level انگلستان.',
        descEn: 'Free resources and practice for UK GCSE and A-Level math.'
      },
      {
        nameEn: 'Corbettmaths',
        url: 'https://corbettmaths.com',
        descFa: 'ویدیوهای آموزشی، کاربرگ‌ها و سؤالات روزانه ریاضی.',
        descEn: 'Videos, worksheets, and 5-a-day practice questions.'
      },
      {
        nameEn: 'Physics & Maths Tutor',
        url: 'https://www.physicsandmathstutor.com',
        descFa: 'نمونه سوالات امتحانی و درسنامه‌های کاربردی.',
        descEn: 'Revision notes, summary sheets and past papers for UK exams.'
      }
    ]
  },
  {
    countryFa: 'کانادا',
    countryEn: 'Canada',
    flag: '🇨🇦',
    sites: [
      {
        nameEn: 'CEMC (University of Waterloo)',
        url: 'https://www.cemc.uwaterloo.ca',
        descFa: 'منبع رسمی المپیادها و مسابقات ریاضی دانشگاه واترلو.',
        descEn: 'Math contests, courseware, and resources from Waterloo University.'
      },
      {
        nameEn: 'Mathies',
        url: 'https://mathies.ca',
        descFa: 'ابزارها و بازی‌های آموزشی ریاضی استان اونتاریو.',
        descEn: 'Ontario K-12 official digital math learning tools.'
      }
    ]
  },
  {
    countryFa: 'استرالیا',
    countryEn: 'Australia',
    flag: '🇦🇺',
    sites: [
      {
        nameEn: 'AMSoutreach',
        url: 'https://calculate.org.au',
        descFa: 'منابع و برنامه‌های پشتیبانی آموزش ریاضی در استرالیا.',
        descEn: 'Australian Mathematical Sciences Institute education portal.'
      },
      {
        nameEn: 'Mathspace',
        url: 'https://mathspace.co',
        descFa: 'پلتفرم هوشمند آموزش ریاضی مطابق برنامه درسی استرالیا.',
        descEn: 'Adaptive online math textbook and step-by-step learning.'
      }
    ]
  },
  {
    countryFa: 'آلمان',
    countryEn: 'Germany',
    flag: '🇩🇪',
    sites: [
      {
        nameEn: 'Bettermarks',
        url: 'https://de.bettermarks.com',
        descFa: 'سیستم تمرین آنلاین ریاضی منطبق با مدارس آلمان.',
        descEn: 'Adaptive online math learning system for German curriculum.'
      },
      {
        nameEn: 'Serlo',
        url: 'https://de.serlo.org/mathe',
        descFa: 'ویکی‌مدیای آزاد آموزشی برای ریاضیات در آلمان.',
        descEn: 'Free open-educational resources for math in German.'
      }
    ]
  }
];

export default function MathSitesPage() {
  const [lang, setLang] = useState('fa');
  const [selectedCountry, setSelectedCountry] = useState('ALL');

  const isFa = lang === 'fa';

  const filteredData = selectedCountry === 'ALL'
    ? MATH_SITES_DATA
    : MATH_SITES_DATA.filter(item => item.countryEn === selectedCountry);

  return (
    <main dir={isFa ? 'rtl' : 'ltr'} className="min-h-screen bg-slate-50 text-slate-900 font-sans p-4 md:p-8 antialiased">
      <div className="max-w-5xl mx-auto">
        
        {/* هدر صفحه و دکمه بازگشت */}
        <div className="flex justify-between items-center mb-8">
          <Link
            href="/"
            className="text-xs md:text-sm font-bold bg-white px-4 py-2 rounded-xl border border-slate-200 shadow-sm hover:bg-slate-100 transition flex items-center gap-2"
          >
            <span>{isFa ? '← بازگشت به صفحه اصلی' : '← Back to Home'}</span>
          </Link>

          {/* دکمه تغییر زبان */}
          <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-xl border border-slate-200 shadow-sm">
            <button 
              type="button"
              onClick={() => setLang('fa')} 
              className={`text-xs font-bold transition ${isFa ? 'text-blue-600 underline font-black' : 'text-slate-400 hover:text-black'}`}
            >
              فارسی
            </button>
            <span className="text-slate-300 font-light">|</span>
            <button 
              type="button"
              onClick={() => setLang('en')} 
              className={`text-xs font-bold transition ${!isFa ? 'text-blue-600 underline font-black' : 'text-slate-400 hover:text-black'}`}
            >
              English
            </button>
          </div>
        </div>

        {/* عنوان اصلی */}
        <div className="text-center mb-8">
          <h1 className="text-2xl md:text-4xl font-black text-slate-900 mb-3">
            💻 {isFa ? 'سایت‌های معتبر آموزش ریاضی کشورها' : 'International Math Websites'}
          </h1>
          <p className="text-slate-600 text-sm md:text-base max-w-2xl mx-auto">
            {isFa 
              ? 'مجموعه‌ای از بهترین سایت‌ها و منابع آنلاین آموزش ریاضیات به تفکیک کشور' 
              : 'A curated list of top mathematics educational platforms sorted by country.'}
          </p>
        </div>

        {/* فیلتر انتخاب کشور */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          <button
            onClick={() => setSelectedCountry('ALL')}
            className={`px-4 py-2 rounded-xl text-xs md:text-sm font-bold transition ${
              selectedCountry === 'ALL'
                ? 'bg-blue-600 text-white shadow-md'
                : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
            }`}
          >
            🌐 {isFa ? 'همه کشورها' : 'All Countries'}
          </button>
          {MATH_SITES_DATA.map((item) => (
            <button
              key={item.countryEn}
              onClick={() => setSelectedCountry(item.countryEn)}
              className={`px-4 py-2 rounded-xl text-xs md:text-sm font-bold transition flex items-center gap-1.5 ${
                selectedCountry === item.countryEn
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
              }`}
            >
              <span>{item.flag}</span>
              <span>{isFa ? item.countryFa : item.countryEn}</span>
            </button>
          ))}
        </div>

        {/* لیست کشورها و سایت‌ها */}
        <div className="space-y-8">
          {filteredData.map((countryItem) => (
            <div key={countryItem.countryEn} className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm">
              <h2 className="text-lg md:text-xl font-bold text-slate-800 mb-4 flex items-center gap-2 border-b border-slate-100 pb-3">
                <span className="text-2xl">{countryItem.flag}</span>
                <span>{isFa ? countryItem.countryFa : countryItem.countryEn}</span>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {countryItem.sites.map((site, idx) => (
                  <div key={idx} className="p-4 bg-slate-50 border border-slate-200/80 rounded-2xl flex flex-col justify-between hover:border-slate-300 transition">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        {/* نام سایت همیشه انگلیسی باقی می‌ماند */}
                        <h3 className="font-bold text-slate-900 text-base dir-ltr text-left">
                          {site.nameEn}
                        </h3>
                        <a
                          href={site.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs bg-blue-50 text-blue-600 px-3 py-1 rounded-xl font-bold hover:bg-blue-100 transition shrink-0"
                        >
                          {isFa ? 'مشاهده سایت ↗' : 'Visit ↗'}
                        </a>
                      </div>
                      
                      {/* توضیحات بر اساس زبان تغییر می‌کند */}
                      <p className="text-slate-600 text-xs md:text-sm leading-relaxed mt-2">
                        {isFa ? site.descFa : site.descEn}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </main>
  );
}
