'use client';
import { useState } from 'react';
import ContactButtons from '../components/ContactButtons';
import LanguageToggle from '../components/LanguageToggle';
import BooksSection from '../components/BooksSection';

export default function Home() {
  const [lang, setLang] = useState('fa');

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans" dir={lang === 'fa' ? 'rtl' : 'ltr'}>
      
      {/* منوی بالای سایت (Header) */}
      <header className="bg-white border-b border-slate-100 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="font-bold text-xl text-[#1e295d]">
              {lang === 'fa' ? 'دکتر هادی محمدی' : 'Dr. Hadi Mohammadi'}
            </span>
          </div>
          
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600">
            <a href="#about" className="hover:text-blue-600 transition">
              {lang === 'fa' ? 'درباره من' : 'About Me'}
            </a>
            <a href="#books" className="hover:text-blue-600 transition">
              {lang === 'fa' ? 'کتاب‌های تدریس‌شده' : 'Taught Books'}
            </a>
            <a href="#services" className="hover:text-blue-600 transition">
              {lang === 'fa' ? 'خدمات تدریس' : 'Services'}
            </a>
            <a href="#resume" className="hover:text-blue-600 transition">
              {lang === 'fa' ? 'رزومه' : 'Resume'}
            </a>
            <a href="#contact" className="hover:text-blue-600 transition">
              {lang === 'fa' ? 'تماس با ما' : 'Contact'}
            </a>
          </nav>

          {/* دکمه تغییر زبان */}
          <LanguageToggle onLanguageChange={(newLang) => setLang(newLang)} />
        </div>
      </header>

      {/* ۱. بنر اصلی سرمه‌ای (Hero Section) */}
      <section className="bg-[#1e295d] text-white py-20 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="w-24 h-24 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6 border border-white/15">
            <span className="text-4xl">🎓</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            {lang === 'fa' ? 'دکتر هادی محمدی' : 'Dr. Hadi Mohammadi'}
          </h1>
          <p className="text-xl md:text-2xl text-slate-200 font-medium mb-3">
            {lang === 'fa' ? 'عضو هیأت علمی دانشگاه و مدرس آنلاین ریاضی' : 'University Faculty Member & Online Math Tutor'}
          </p>
          <p className="text-sm md:text-base text-slate-300 opacity-90 mb-8">
            {lang === 'fa' ? 'ویژه ایرانیان خارج از کشور (آمریکا، کانادا، اروپا، استرالیا و انگلستان)' : 'Specialized for International Students (USA, Canada, Europe, Australia, UK)'}
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#contact" className="bg-white text-slate-900 font-bold px-6 py-3.5 rounded-xl hover:bg-slate-100 transition shadow-lg">
              {lang === 'fa' ? 'رزرو مشاوره و کلاس' : 'Book Consultation'}
            </a>
            <a href="#books" className="bg-[#3b82f6] text-white font-bold px-6 py-3.5 rounded-xl hover:bg-blue-600 transition shadow-lg">
              {lang === 'fa' ? 'کتاب‌های تدریس‌شده' : 'Taught Books'}
            </a>
          </div>
        </div>
      </section>

      {/* ۲. بخش درباره من */}
      <section id="about" className="max-w-5xl mx-auto my-12 px-4">
        <div className="bg-white rounded-3xl p-6 md:p-10 shadow-sm border border-slate-100">
          <h2 className="text-2xl font-bold text-[#1e295d] mb-4 flex items-center gap-2">
            <span className="text-blue-500">👤</span> {lang === 'fa' ? 'درباره من' : 'About Me'}
          </h2>
          <p className="text-slate-600 leading-relaxed text-justify text-base md:text-lg">
            {lang === 'fa' 
              ? 'اینجانب دکتر هادی محمدی، دارای مدرک دکتری تخصصی ریاضی و عضو هیأت علمی یکی از دانشگاه‌های تهران هستم. با سال‌ها تجربه در امر تدریس دانشگاهی و مدارس برتر، تخصصی ویژه‌ای در آموزش آنلاین ریاضیات (از مقطع دبیرستان تا دانشگاه، شامل سیستم‌های IB, AP, A-Level و دروس دانشگاهی) به دانش‌آموزان و دانشجویان ایرانی مقیم خارج از کشور دارم.'
              : 'I am Dr. Hadi Mohammadi, holding a Ph.D. in Mathematics and serving as a university faculty member. With extensive experience teaching at top universities and high schools, I specialize in online mathematics education tailored for students worldwide.'
            }
          </p>
        </div>
      </section>

      {/* ۳. بخش کتاب‌های تدریس‌شده (با آکاردئون چندمرحله‌ای کامل) */}
      <BooksSection lang={lang} />

      {/* ۴. بخش خدمات تدریس آنلاین */}
      <section id="services" className="max-w-5xl mx-auto my-16 px-4">
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-100 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1e295d] mb-4">
            {lang === 'fa' ? 'خدمات تدریس آنلاین' : 'Online Teaching Services'}
          </h2>
          <p className="text-slate-600 text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
            {lang === 'fa' 
              ? 'برگزاری کلاس‌های خصوصی و نیمه‌خصوصی ریاضی با متدهای نوین آموزشی و متناسب با سیستم آموزشی کشور محل اقامت شما.'
              : 'Private and group online math tutoring aligned with the educational standards of your country.'
            }
          </p>
        </div>
      </section>

      {/* ۵. بخش سوابق علمی و پژوهشی */}
      <section id="resume" className="max-w-5xl mx-auto my-16 px-4">
        <div className="bg-white rounded-3xl p-6 md:p-10 shadow-sm border border-slate-100">
          <div className="flex items-center justify-center gap-2 mb-8 text-[#1e295d]">
            <span className="text-2xl text-blue-600">🎗️</span>
            <h2 className="text-2xl md:text-3xl font-bold">
              {lang === 'fa' ? 'سوابق علمی و پژوهشی' : 'Academic & Research Background'}
            </h2>
          </div>
          
          <ul className="space-y-4 max-w-2xl mx-auto text-right">
            <li className="flex items-center justify-between text-base md:text-lg text-slate-700 border-b border-slate-100 pb-3">
              <span>{lang === 'fa' ? 'دکتری تخصصی ریاضی از دانشگاه‌های برتر تهران' : 'Ph.D. in Mathematics from top universities in Tehran'}</span>
              <span className="text-blue-600 font-bold">✓</span>
            </li>
            <li className="flex items-center justify-between text-base md:text-lg text-slate-700 border-b border-slate-100 pb-3">
              <span>{lang === 'fa' ? 'عضو هیأت علمی و مدرس دانشگاه' : 'University Faculty Member and Lecturer'}</span>
              <span className="text-blue-600 font-bold">✓</span>
            </li>
            <li className="flex items-center justify-between text-base md:text-lg text-slate-700 border-b border-slate-100 pb-3">
              <span>{lang === 'fa' ? 'تألیف چندین مقاله علمی پژوهشی در ژورنال‌های معتبر بین‌المللی' : 'Author of peer-reviewed articles in prestigious journals'}</span>
              <span className="text-blue-600 font-bold">✓</span>
            </li>
            <li className="flex items-center justify-between text-base md:text-lg text-slate-700">
              <span>{lang === 'fa' ? 'مدرس دوره‌های تخصصی ریاضیات دانشگاهی و دبیرستان' : 'Specialized Instructor for University and High School Mathematics'}</span>
              <span className="text-blue-600 font-bold">✓</span>
            </li>
          </ul>
        </div>
      </section>

      {/* ۶. بخش ارتباط با استاد */}
      <section id="contact" className="max-w-5xl mx-auto my-16 px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-[#1e295d] mb-3">
          {lang === 'fa' ? 'ارتباط با استاد' : 'Contact Professor'}
        </h2>
        <p className="text-slate-500 mb-6 text-sm md:text-base">
          {lang === 'fa' 
            ? 'جهت رزرو وقت مشاوره، کلاس‌های آنلاین و ارسال پیام می‌توانید از طریق راه‌های زیر در ارتباط باشید:' 
            : 'For booking consultations, online classes, or inquiries, reach out below:'}
        </p>

        <ContactButtons />
      </section>

      {/* فوتر سایت */}
      <footer className="bg-[#0f172a] text-slate-400 text-center py-6 text-sm">
        <p>© 2026 {lang === 'fa' ? 'دکتر هادی محمدی - تمامی حقوق محفوظ است' : 'Dr. Hadi Mohammadi. All rights reserved.'}</p>
      </footer>

    </div>
  );
}
