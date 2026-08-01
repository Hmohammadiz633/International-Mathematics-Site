'use client';

import { useState } from 'react';
import Link from 'next/link';
import ContactButtons from '@/components/ContactButtons';

export default function Home() {
  const [lang, setLang] = useState('fa');
  const [isFeedbackOpen, setIsFeedbackOpen] = useState(false);

  const isFa = lang === 'fa';

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const feedbacks = [
    { fa: 'بازخورد ۱', en: 'Feedback 1', link: 'https://t.me/International_Maths/110' },
    { fa: 'بازخورد ۲', en: 'Feedback 2', link: 'https://t.me/International_Maths/111' },
    { fa: 'بازخورد ۳', en: 'Feedback 3', link: 'https://t.me/International_Maths/1352' },
  ];

  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'هادی محمدی زرندینی',
    jobTitle: 'عضو هیات علمی دانشگاه و مدرس ریاضیات بین‌الملل',
    worksFor: {
      '@type': 'EducationalOrganization',
      name: 'دانشگاه ملی مهارت تهران',
    },
    alumniOf: [
      {
        '@type': 'EducationalOrganization',
        name: 'دانشگاه صنعتی امیرکبیر',
      },
      {
        '@type': 'EducationalOrganization',
        name: 'دانشگاه خوارزمی',
      },
    ],
    sameAs: [
      'https://t.me/International_Maths',
      'https://instagram.com/Hadi_mohammadi_zarandini',
    ],
  };

  return (
    <main dir={isFa ? 'rtl' : 'ltr'} className="min-h-screen bg-slate-50 text-slate-900 font-sans pb-12 antialiased">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      {/* هدر با دکمه‌های بازطراحی‌شده و شکیل‌تر */}
      <header className="sticky top-0 z-50 bg-white/85 backdrop-blur-md border-b border-gray-200/80 px-4 py-3.5 shadow-sm">
        <div className="max-w-6xl mx-auto flex flex-col items-center gap-3">
          <div className="w-full flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-tr from-blue-700 via-blue-600 to-indigo-600 text-white rounded-2xl flex items-center justify-center shadow-md shadow-blue-200">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M2 3h20v14H2z" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M8 21l4-4 4 4" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h1 className="font-black text-lg md:text-2xl text-slate-800 tracking-tight">
                {isFa ? 'آموزش بین‌المللی ریاضیات' : 'International Math'}
              </h1>
            </div>

            <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-2xl border border-slate-200/80">
              <button 
                type="button"
                onClick={() => setLang('fa')} 
                className={`px-3.5 py-1.5 rounded-xl text-xs font-black transition-all ${isFa ? 'bg-white text-blue-700 shadow-sm' : 'text-slate-500 hover:text-slate-900'}`}
              >
                فارسی
              </button>
              <button 
                type="button"
                onClick={() => setLang('en')} 
                className={`px-3.5 py-1.5 rounded-xl text-xs font-black transition-all ${!isFa ? 'bg-white text-blue-700 shadow-sm' : 'text-slate-500 hover:text-slate-900'}`}
              >
                English
              </button>
            </div>
          </div>

          {/* نوار دکمه‌های بالای صفحه با طراحی جذاب و لبه‌های گرد */}
          <nav className="w-full flex items-center justify-center gap-2 md:gap-3 overflow-x-auto py-1 no-scrollbar">
            <Link 
              href="/educational-systems" 
              className="flex items-center gap-2 px-4 py-2 bg-white hover:bg-slate-100 text-slate-700 rounded-2xl border border-slate-200/90 shadow-sm hover:shadow transition-all whitespace-nowrap text-xs md:text-sm font-black"
            >
              <span>🌐</span>
              <span>{isFa ? 'نظام آموزشی کشورها' : 'Educational Systems'}</span>
            </Link>

            <Link 
              href="/books#country-books" 
              className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-2xl shadow-md shadow-blue-100 transition-all whitespace-nowrap text-xs md:text-sm font-black"
            >
              <span>📚</span>
              <span>{isFa ? 'کتب و منابع آموزشی' : 'Books & Resources'}</span>
            </Link>

            <Link 
              href="/math-sites" 
              className="flex items-center gap-2 px-4 py-2 bg-white hover:bg-slate-100 text-slate-700 rounded-2xl border border-slate-200/90 shadow-sm hover:shadow transition-all whitespace-nowrap text-xs md:text-sm font-black"
            >
              <span>💻</span>
              <span>{isFa ? 'سایت‌های ریاضی کشورها' : 'Math Websites'}</span>
            </Link>

            <button 
              type="button"
              onClick={() => setIsFeedbackOpen(!isFeedbackOpen)} 
              className="flex items-center gap-2 px-4 py-2 bg-white hover:bg-amber-50/80 text-slate-700 hover:text-amber-800 rounded-2xl border border-slate-200/90 hover:border-amber-200 shadow-sm transition-all whitespace-nowrap text-xs md:text-sm font-black"
            >
              <span>💬</span>
              <span>{isFa ? 'بازخورد کلاس‌ها' : 'Class Feedback'}</span>
              <span className="text-[10px] text-slate-400">▼</span>
            </button>

            <button 
              type="button"
              onClick={() => scrollToSection('contact')} 
              className="flex items-center gap-2 px-4 py-2 bg-white hover:bg-emerald-50 text-slate-700 hover:text-emerald-800 rounded-2xl border border-slate-200/90 hover:border-emerald-200 shadow-sm transition-all whitespace-nowrap text-xs md:text-sm font-black"
            >
              <span>📞</span>
              <span>{isFa ? 'ارتباط با استاد' : 'Contact'}</span>
            </button>
          </nav>

          {/* کشویی بازخورد */}
          {isFeedbackOpen && (
            <div className="w-full flex items-center justify-center gap-2.5 flex-wrap bg-amber-50/60 p-3 rounded-2xl border border-amber-200/60">
              {feedbacks.map((item, idx) => (
                <a key={idx} href={item.link} target="_blank" rel="noopener noreferrer" className="px-3.5 py-1.5 bg-white hover:bg-amber-100 text-xs font-bold text-amber-900 rounded-xl border border-amber-200 shadow-sm transition-all">
                  ⭐ {isFa ? item.fa : item.en}
                </a>
              ))}
            </div>
          )}
        </div>
      </header>

      {/* بنر اصلی */}
      <section className="max-w-4xl mx-auto text-center px-4 pt-12 pb-6">
        <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4 leading-tight tracking-tight">
          {isFa ? 'آموزش بین‌المللی ریاضیات' : 'International Mathematics Tutoring'}
        </h2>
        <p className="text-slate-600 text-base md:text-lg leading-relaxed max-w-2xl mx-auto font-medium">
          {isFa 
            ? 'تدریس تخصصی و مفهومی ریاضیات نظام‌های آموزشی بین‌المللی (امریكا، كانادا، انگلیس، استرالیا، آلمان و اروپا)' 
            : 'Specialized math education for international curricula (USA, Canada, UK, Australia, Germany, Europe).'}
        </p>
      </section>

      {/* معرفی استاد */}
      <section id="about" className="max-w-5xl mx-auto px-4 pt-6">
        <div className="bg-slate-900 text-white rounded-[2rem] p-6 md:p-10 border border-slate-800 shadow-xl relative overflow-hidden">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8 relative z-10">
            <div className="shrink-0 flex flex-col items-center gap-3">
              <div className="p-1 bg-gradient-to-br from-blue-400 to-indigo-600 rounded-2xl shadow-lg">
                <img 
                  src="/profile.jpg" 
                  alt="هادی محمدی زرندینی" 
                  className="w-48 h-64 object-cover rounded-xl" 
                />
              </div>
              <span className="text-xs font-bold text-blue-300 bg-blue-950 px-3 py-1.5 rounded-full border border-blue-800/60 text-center">
                {isFa ? 'هیات علمی دانشگاه ملی مهارت تهران' : 'Faculty Member at National Skills University'}
              </span>
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-6 border-b border-white/10 pb-4">
                <span className="text-3xl">👨‍🏫</span>
                <h3 className="text-2xl md:text-3xl font-black tracking-tight">
                  {isFa ? 'هادی محمدی زرندینی' : 'Hadi Mohammadi Zarandini'}
                </h3>
              </div>
              <div className="text-slate-300 leading-relaxed text-sm md:text-base space-y-4 text-justify">
                {isFa ? (
                  <>
                    <p>دارای مدرک دکترای تخصصی ریاضی از <span className="text-blue-400 font-bold">دانشگاه صنعتی امیرکبیر</span> هستم و به مدت ۲۹ سال مستمر در عرصه آموزش ریاضیات فعالیت دارم.</p>
                    <p>هدف من ارائه خدمات آموزشی دقیق و مطابق با نظام آموزشی کشور محل سکونت شماست. رفع اشکال روزانه رایگان در فضای مجازی از تعهدات من به دانش‌آموزان عزیز است.</p>
                  </>
                ) : (
                  <>
                    <p>PhD in Mathematics from <span className="text-blue-400 font-bold">Amirkabir University of Technology</span> with 29 years of teaching experience.</p>
                    <p>My goal is to provide specialized tutoring tailored to your specific local curriculum with free daily support.</p>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* سوابق تدریس */}
      <section className="max-w-5xl mx-auto px-4 pt-8">
        <div className="bg-white rounded-[2rem] p-6 md:p-8 border border-gray-100 shadow-lg">
          <h4 className="text-xl md:text-2xl font-black text-slate-900 mb-6 flex items-center gap-3">
            <span className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold">📖</span>
            <span>{isFa ? 'سوابق تدریس' : 'Teaching Experience'}</span>
          </h4>
          <p className="text-slate-600 leading-relaxed text-sm md:text-base mb-8">
            {isFa 
              ? 'تدریس دروس پایه و پیشرفته ریاضی در دانشگاه‌های برتر از جمله الزهرا، علوم تحقیقات و دبیرستان‌های ممتاز تهران.'
              : 'Teaching Calculus, ODE, Statistics, and Engineering Math at top universities and high schools in Tehran.'}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="rounded-2xl overflow-hidden shadow-sm border border-gray-100">
              <img src="/teaching1.JPG" className="w-full h-72 object-cover" />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-sm border border-gray-100">
              <img src="/teaching2.PNG" className="w-full h-72 object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* سوابق تحصیلی */}
      <section className="max-w-5xl mx-auto px-4 pt-8">
        <div className="bg-white rounded-[2rem] p-6 md:p-8 border border-gray-100 shadow-lg">
          <h4 className="text-xl md:text-2xl font-black text-slate-900 mb-6 flex items-center gap-3">
            <span className="w-10 h-10 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center font-bold">🎓</span>
            <span>{isFa ? 'سوابق تحصیلی' : 'Education'}</span>
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { img: '/amirkabir.jpg', title: isFa ? 'دکتری تخصصی' : 'PhD', uni: isFa ? 'صنعتی امیرکبیر' : 'Amirkabir' },
              { img: '/amirkabir.jpg', title: isFa ? 'کارشناسی ارشد' : 'MSc', uni: isFa ? 'صنعتی امیرکبیر' : 'Amirkabir' },
              { img: '/kharazmi.jpg', title: isFa ? 'کارشناسی' : 'BSc', uni: isFa ? 'دانشگاه خوارزمی' : 'Kharazmi' }
            ].map((edu, i) => (
              <div key={i} className="flex flex-col items-center p-5 bg-slate-50 rounded-2xl border border-gray-100">
                <img src={edu.img} className="w-14 h-14 object-contain mb-3" />
                <h5 className="font-black text-slate-900 text-sm">{edu.title}</h5>
                <p className="text-xs text-slate-500 mt-1">{edu.uni}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div id="contact" className="mt-10">
        <ContactButtons lang={lang} />
      </div>

      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </main>
  );
}
