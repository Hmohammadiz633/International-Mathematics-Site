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
      {/* هدر */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200/80 px-4 py-3 shadow-sm">
        <div className="max-w-6xl mx-auto flex flex-col items-center gap-3">
          <div className="w-full flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 bg-blue-50 border border-blue-200 text-blue-700 rounded-xl flex items-center justify-center p-1.5 shadow-sm">
                <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2 3h20v14H2z" />
                  <path d="M8 21l4-4 4 4" />
                  <path d="M7 8h4" />
                  <path d="M7 12h2" />
                  <path d="M15 11l2 2 4-4" />
                </svg>
              </div>
              <h1 className="font-black text-base md:text-xl text-slate-800 tracking-tight leading-snug">
                {isFa ? 'آموزش بین‌المللی ریاضیات' : 'International Math'}
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

          <div className="w-full flex flex-col items-center gap-2 border-t border-gray-100 pt-2">
            <div className="w-full flex items-center justify-center gap-2 md:gap-3 overflow-x-auto py-1 text-xs md:text-sm font-bold">
              {/* لینک مستقیم به صفحه جدید نظام آموزشی کشورها */}
              <Link 
                href="/educational-systems" 
                className="px-3 py-1.5 bg-gray-100 hover:bg-gray-200 text-black rounded-lg border border-gray-300 whitespace-nowrap transition flex items-center gap-1"
              >
                🌐 {isFa ? 'نظام آموزشی کشورها' : 'Educational Systems'}
              </Link>

              <Link 
                href="/books" 
                className="px-3 py-1.5 bg-blue-50 hover:bg-blue-100 text-blue-900 rounded-lg border border-blue-200 whitespace-nowrap transition flex items-center gap-1"
              >
                📚 {isFa ? 'کتب و منابع آموزشی' : 'Books & Resources'}
              </Link>

              <Link 
                href="/math-sites" 
                className="px-3 py-1.5 bg-gray-100 hover:bg-gray-200 text-black rounded-lg border border-gray-300 whitespace-nowrap transition flex items-center gap-1"
              >
                💻 {isFa ? 'سایت‌های ریاضی کشورها' : 'Math Websites'}
              </Link>

              <button 
                type="button"
                onClick={() => setIsFeedbackOpen(!isFeedbackOpen)} 
                className="px-3 py-1.5 bg-gray-100 hover:bg-gray-200 text-black rounded-lg border border-gray-300 whitespace-nowrap transition flex items-center gap-1"
              >
                <span>💬 {isFa ? 'بازخورد کلاس‌ها' : 'Class Feedback'}</span>
                <span className="text-[10px]">{isFeedbackOpen ? '▲' : '▼'}</span>
              </button>

              <button 
                type="button"
                onClick={() => scrollToSection('contact')} 
                className="px-3 py-1.5 bg-gray-100 hover:bg-gray-200 text-black rounded-lg border border-gray-300 whitespace-nowrap transition"
              >
                📞 {isFa ? 'ارتباط با استاد' : 'Contact'}
              </button>
            </div>

            {/* منوی کشویی بازخورد کلاس‌ها */}
            {isFeedbackOpen && (
              <div className="w-full flex items-center justify-center gap-2 flex-wrap bg-gray-50 p-2.5 rounded-xl border border-gray-200 my-1 shadow-inner">
                {feedbacks.map((item, idx) => (
                  <a key={idx} href={item.link} target="_blank" rel="noopener noreferrer" className="px-3 py-1.5 bg-white hover:bg-gray-100 text-xs font-semibold text-black rounded-lg border border-gray-300 shadow-sm transition flex items-center gap-1.5">
                    <span>⭐</span>
                    <span>{isFa ? item.fa : item.en}</span>
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      </header>

      {/* بنر اصلی و عنوان */}
      <section className="max-w-4xl mx-auto text-center px-4 pt-12 pb-6">
        <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-5 leading-tight tracking-tight bg-gradient-to-r from-blue-900 via-indigo-800 to-slate-900 bg-clip-text text-transparent">
          {isFa ? 'آموزش بین‌المللی ریاضیات' : 'International Mathematics Tutoring'}
        </h2>
        <p className="text-slate-700 text-base md:text-lg leading-relaxed max-w-2xl mx-auto font-medium">
          {isFa 
            ? 'تدریس تخصصی و مفهومی ریاضیات نظام‌های آموزشی بین‌المللی (امریكا، كانادا، انگلیس، استرالیا، آلمان و اروپا)' 
            : 'Specialized math education for international curricula (USA, Canada, UK, Australia, Germany, Europe).'}
        </p>
      </section>

      {/* معرفی هادی محمدی زرندینی */}
      <section id="about" className="max-w-5xl mx-auto px-4 pt-6">
        <div className="bg-slate-800/90 text-white rounded-3xl p-6 md:p-10 border border-slate-700/60 shadow-xl">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            <div className="shrink-0 flex flex-col items-center">
              <img 
                src="/profile.jpg" 
                alt="هادی محمدی زرندینی مدرس ریاضی بین الملل" 
                className="w-48 h-60 object-cover rounded-2xl border-2 border-slate-600 shadow-lg mb-3" 
              />
              <span className="text-xs font-bold text-slate-200 bg-slate-700/80 px-3 py-1.5 rounded-xl border border-slate-600 text-center">
                {isFa ? 'هیات علمی دانشگاه ملی مهارت تهران' : 'Faculty Member at National Skills University of Tehran'}
              </span>
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-6 border-b border-slate-700/60 pb-4 mt-2 md:mt-0">
                <span className="text-3xl">👨‍🏫</span>
                <h3 className="text-2xl md:text-3xl font-black text-white leading-snug tracking-tight">
                  {isFa ? 'هادی محمدی زرندینی' : 'Hadi Mohammadi Zarandini'}
                </h3>
              </div>
              <div className="text-slate-200 leading-loose text-sm md:text-base space-y-4 text-justify font-normal">
                {isFa ? (
                  <>
                    <p>
                      دارای مدرک دکترای تخصصی ریاضی از دانشگاه صنعتی امیرکبیر هستم و به مدت <strong className="text-white font-black underline decoration-blue-400 underline-offset-4">۲۹ سال</strong> به طور مستمر در عرصه آموزش ریاضی در داخل و خارج از کشور فعالیت داشته‌ام.
                    </p>
                    <p>
                      هدف این مجموعه، ارائه خدمات تدریس تخصصی و هدفمند به ایرانیان عزیز مقیم خارج از کشور است تا بتوانند ریاضی را دقیقاً مطابق با کتاب‌های درسی و نظام آموزشی کشور محل سکونت خود بیاموزند و همچنین رفع اشکال روزانه به صورت کاملاً رایگان در پلتفرم‌های فضای مجازی انجام می‌شود.
                    </p>
                    <p>
                      من با تکیه بر تجربیات چندین دهه تدریس در نظام‌های آموزشی گوناگون، متعهد به ارائه دقیق‌ترین و کاربردی‌ترین آموزش ریاضی مطابق با استانداردهای مدارس خارج از ایران هستم و از شما دعوت می‌کنم که با پیوستن به این دوره، ریاضی را به شیوه‌ای صحیح، اصولی و متناسب با نیازهای تحصیلی خود فرا بگیرید.
                    </p>
                  </>
                ) : (
                  <>
                    <p>
                      Holder of a Ph.D. in Mathematics from Amirkabir University of Technology, with over <strong className="text-white font-black underline decoration-blue-400 underline-offset-4">29 years</strong> of continuous experience in teaching mathematics both nationally and internationally.
                    </p>
                    <p>
                      The goal of this program is to provide targeted, specialized math tutoring for students living abroad, aligning perfectly with their local school standard curricula, alongside free daily Q&A sessions on social media platforms.
                    </p>
                    <p>
                      Special summer prep classes are also offered to reinforce mathematical foundations and prepare students for the upcoming academic year.
                    </p>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* سوابق تدریس - اندازه عکس بسیار جمع‌وجورتر شد */}
      <section className="max-w-5xl mx-auto px-4 pt-6">
        <div className="bg-white text-gray-900 rounded-3xl p-6 md:p-8 border border-gray-200/90 shadow-md">
          <h4 className="text-xl md:text-2xl font-black text-slate-900 mb-4 flex items-center gap-3 border-b border-gray-100 pb-3 leading-snug">
            <span className="p-2 bg-blue-50 text-blue-700 rounded-xl">📖</span>
            <span>{isFa ? 'سوابق تدریس' : 'Teaching Experience'}</span>
          </h4>
          <p className="text-slate-700 leading-relaxed text-sm md:text-base font-normal mb-6">
            {isFa 
              ? 'تدریس دروس ریاضی مانند ریاضی عمومی ۱و۲، معادلات دیفرانسیل، محاسبات عددی، آمار و احتمالات مهندسی و ریاضی مهندسی در دانشگاه‌های ملی مهارت و دانشگاه الزهرا و علوم تحقیقات تهران و همچنین تدریس در دبیرستان‌های برتر تهران'
              : 'Teaching higher math courses including Calculus I & II, Differential Equations, Numerical Analysis, Engineering Statistics & Probability, and Engineering Mathematics at National Skills University, Alzahra University, and Science and Research Branch of Tehran, as well as teaching in top high schools in Tehran.'}
          </p>

          <div className="flex justify-center">
            <div className="w-full max-w-xs rounded-2xl overflow-hidden border border-gray-200 bg-gray-100 shadow-sm">
              <img 
                src="/teaching1.JPG" 
                alt="تدریس هادی محمدی زرندینی در دانشگاه" 
                className="w-full h-auto object-cover hover:scale-105 transition duration-300 block"
              />
            </div>
          </div>
        </div>
      </section>

      {/* سوابق تحصیلی */}
      <section className="max-w-5xl mx-auto px-4 pt-6">
        <div className="bg-white text-gray-900 rounded-3xl p-6 md:p-8 border border-gray-200/90 shadow-md">
          <h4 className="text-xl md:text-2xl font-black text-slate-900 mb-6 flex items-center gap-3 border-b border-gray-100 pb-3 leading-snug">
            <span className="p-2 bg-blue-50 text-blue-700 rounded-xl">🎓</span>
            <span>{isFa ? 'سوابق تحصیلی' : 'Education'}</span>
          </h4>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-center gap-4 bg-slate-50 p-4 rounded-2xl border border-gray-200/80 shadow-sm hover:shadow-md transition">
              <div className="w-12 h-12 shrink-0 bg-white border border-gray-200 rounded-xl p-1.5 flex items-center justify-center overflow-hidden shadow-sm">
                <img 
                  src="/amirkabir.jpg" 
                  alt="دانشگاه صنعتی امیرکبیر" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h5 className="font-bold text-slate-900 text-sm md:text-base leading-snug">
                  {isFa ? 'دکتری تخصصی ریاضی' : 'Ph.D. in Mathematics'}
                </h5>
                <p className="text-xs text-slate-500 font-normal mt-0.5">
                  {isFa ? 'گرایش بهینه سازی - دانشگاه صنعتی امیرکبیر' : 'Optimization - Amirkabir University'}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-slate-50 p-4 rounded-2xl border border-gray-200/80 shadow-sm hover:shadow-md transition">
              <div className="w-12 h-12 shrink-0 bg-white border border-gray-200 rounded-xl p-1.5 flex items-center justify-center overflow-hidden shadow-sm">
                <img 
                  src="/amirkabir.jpg" 
                  alt="دانشگاه صنعتی امیرکبیر" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h5 className="font-bold text-slate-900 text-sm md:text-base leading-snug">
                  {isFa ? 'کارشناسی ارشد' : 'M.Sc. in Applied Mathematics'}
                </h5>
                <p className="text-xs text-slate-500 font-normal mt-0.5">
                  {isFa ? 'گرایش ریاضی کاربردی - دانشگاه صنعتی امیرکبیر' : 'Amirkabir University of Technology'}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-slate-50 p-4 rounded-2xl border border-gray-200/80 shadow-sm hover:shadow-md transition">
              <div className="w-12 h-12 shrink-0 bg-white border border-gray-200 rounded-xl p-1.5 flex items-center justify-center overflow-hidden shadow-sm">
                <img 
                  src="/kharazmi.jpg" 
                  alt="دانشگاه خوارزمی" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h5 className="font-bold text-slate-900 text-sm md:text-base leading-snug">
                  {isFa ? 'کارشناسی ریاضی' : 'B.Sc. in Mathematics'}
                </h5>
                <p className="text-xs text-slate-500 font-normal mt-0.5">
                  {isFa ? 'دانشگاه خوارزمی' : 'Kharazmi University'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ارتباط با استاد */}
      <div id="contact" className="mt-8">
        <ContactButtons lang={lang} />
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
    </main>
  );
}
