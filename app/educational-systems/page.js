'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function EducationalSystemsPage() {
  const [lang, setLang] = useState('fa');
  const isFa = lang === 'fa';

  const educationalData = [
    {
      flag: '🇺🇸',
      countryFa: 'نظام آموزشی آمریکا (USA)',
      countryEn: 'US Educational System',
      link: 'https://t.me/International_Maths/379',
      descriptionFa: 'نظام آموزشی آمریکا مبتنی بر سیستم K-12 است. در دبیرستان دروس در سطوح مختلف (Standard, Honors, AP) ارائه می‌شوند. آزمون‌های استاندارد مانند SAT و ACT و گذراندن دروس پیشرفته AP نقش کلیدی در پذیرش دانشگاهی ایفا می‌کنند.',
      descriptionEn: 'The US system follows the K-12 structure. High schools offer courses at various levels (Standard, Honors, AP). Tests like SAT/ACT and AP courses play a vital role in university admissions.',
    },
    {
      flag: '🇬🇧',
      countryFa: 'نظام آموزشی انگلستان (UK)',
      countryEn: 'UK Educational System',
      link: 'https://t.me/International_Maths/297',
      descriptionFa: 'نظام آموزشی بریتانیا شامل مراحل کلیدی (Key Stages) است. دانش‌آموزان در سن ۱۶ سالگی در آزمون‌های GCSE شرکت کرده و سپس دوره تخصصی دو ساله A-Levels یا IB را برای ورود به دانشگاه‌های ممتاز می‌گذرانند.',
      descriptionEn: 'The UK system is structured into Key Stages. At age 16, students take GCSE exams, followed by two specialized years of A-Levels or IB preparing them for top universities.',
    },
    {
      flag: '🇩🇪',
      countryFa: 'نظام آموزشی آلمان (Germany)',
      countryEn: 'Germany Educational System',
      link: 'https://t.me/International_Maths/375',
      descriptionFa: 'پس از دبستان، دانش‌آموزان بر اساس استعداد به شاخه‌های مختلف هدایت می‌شوند. شاخه اصلی آکادمیک برای ورود به دانشگاه، دبیرستان‌های Gymnasium است که با امتحانات نهایی Abitur به پایان می‌رسد.',
      descriptionEn: 'After primary school, students enter tracked secondary schools. The academic track (Gymnasium) leads to the Abitur diploma required for university entrance.',
    },
    {
      flag: '🇦🇺',
      countryFa: 'نظام آموزشی استرالیا (Australia)',
      countryEn: 'Australia Educational System',
      link: 'https://t.me/International_Maths/299',
      descriptionFa: 'آموزش در استرالیا بر اساس چارچوب ملی (Australian Curriculum) اجرا می‌شود. ارزشیابی سال‌های پایانی بر اساس دیپلم ایالتی (مانند HSC یا VCE) و نمره رتبه‌بندی کشوری ATAR صورت می‌گیرد.',
      descriptionEn: 'Australia follows a national curriculum. Senior high school leads to state certificates (e.g., HSC, VCE) and the ATAR score for university entry.',
    },
    {
      flag: '🇨🇦',
      countryFa: 'نظام آموزشی کانادا (Canada)',
      countryEn: 'Canada Educational System',
      link: 'https://t.me/International_Maths/302',
      descriptionFa: 'نظام آموزشی کانادا به‌صورت استانی (مانند سیستم اناریو یا بریتیش کلمبیا) اداره می‌شود. ارزیابی مستمر، پروژه‌های عملی و دیپلم دبیرستان (مانند OSSD) مبنای پذیرش دانشگاهی است.',
      descriptionEn: 'Education in Canada is provincially managed (e.g., Ontario Curriculum). Continuous assessment and high school diplomas (e.g., OSSD) form the foundation for university entry.',
    },
    {
      flag: '🇮🇹',
      countryFa: 'نظام آموزشی ایتالیا (Italy)',
      countryEn: 'Italy Educational System',
      link: 'https://t.me/International_Maths/389',
      descriptionFa: 'دانش‌آموزان وارد دبیرستان‌های تخصصی ۵ ساله مانند Liceo Scientifico (علوم پایه و ریاضی) می‌شوند. پایان دوره دبیرستان همراه با آزمون جامع کشوری Maturità است.',
      descriptionEn: 'Secondary education includes specialized 5-year schools such as Liceo Scientifico. High school ends with the national Maturità exam.',
    },
    {
      flag: '🇹🇷',
      countryFa: 'نظام آموزشی ترکیه (Turkey)',
      countryEn: 'Turkey Educational System',
      link: 'https://t.me/International_Maths/395',
      descriptionFa: 'نظام آموزشی ترکیه به‌صورت ۱۲ ساله (۴+۴+۴) است. مقطع دبیرستان شامل مدارس Fen و Anadolu بوده و ورود به دانشگاه از طریق آزمون سراسری YKS انجام می‌پذیرد.',
      descriptionEn: 'Turkey follows a 4+4+4 structure. High schools include Science and Anatolian High Schools, with university admission based on the YKS exam.',
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
              🌐 {isFa ? 'نظام آموزشی کشورها' : 'Educational Systems'}
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

      {/* بخش توضیحات و کارت‌های کشورها */}
      <section className="max-w-5xl mx-auto px-4 pt-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-4xl font-black text-slate-900 mb-3">
            {isFa ? 'شناخت نظام‌های آموزشی بین‌المللی' : 'International Educational Systems'}
          </h2>
          <p className="text-slate-600 text-sm md:text-base">
            {isFa ? 'خلاصه‌ای از ساختار آموزشی کشورها به همراه لینک کانال تلگرام برای توضیحات تکمیلی' : 'Summaries of educational systems with dedicated Telegram links'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {educationalData.map((item, idx) => (
            <div key={idx} className="bg-white p-6 rounded-2xl border border-gray-200/90 shadow-sm hover:shadow-md transition flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 border-b border-gray-100 pb-3 mb-4">
                  <span className="text-3xl">{item.flag}</span>
                  <h3 className="font-bold text-base md:text-lg text-slate-800">
                    {isFa ? item.countryFa : item.countryEn}
                  </h3>
                </div>
                <p className="text-slate-600 text-xs md:text-sm leading-relaxed text-justify mb-5 font-normal">
                  {isFa ? item.descriptionFa : item.descriptionEn}
                </p>
              </div>

              <a 
                href={item.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-full py-2.5 px-4 bg-blue-50 hover:bg-blue-100 text-blue-900 text-xs md:text-sm font-bold rounded-xl border border-blue-200/80 transition flex items-center justify-between group"
              >
                <span>{isFa ? 'برای اطلاعات بیشتر به اینجا مراجعه شود' : 'Click here for more details'}</span>
                <span className="text-blue-600 font-bold group-hover:translate-x-1 transition-transform">↗</span>
              </a>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
