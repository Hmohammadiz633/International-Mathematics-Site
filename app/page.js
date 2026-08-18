'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLanguage } from '@/context/LanguageContext'; // اتصال به کانتکست مرکزی زبان

// انتقال متغیرهای ثابت به بیرون از کامپوننت جهت جلوگیری از رندر مجدد
const FEEDBACKS = [
  { fa: 'بازخورد ۱', en: 'Feedback 1', link: 'https://t.me/International_Maths/110' },
  { fa: 'بازخورد ۲', en: 'Feedback 2', link: 'https://t.me/International_Maths/111' },
  { fa: 'بازخورد ۳', en: 'Feedback 3', link: 'https://t.me/International_Maths/1352' },
];

const SCHEMA_DATA = {
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

// کامپوننت داخلی ContactButtons فقط با تلگرام، اینستاگرام و جیمیل اختصاصی
function IntegratedContactButtons({ lang }) {
  const isFa = lang === 'fa';

  return (
    <section className="max-w-5xl mx-auto px-4 pt-6">
      <div className="bg-white text-gray-900 rounded-3xl p-6 md:p-8 border border-gray-200/90 shadow-md">
        <h4 className="text-xl md:text-2xl font-black text-slate-900 mb-6 flex items-center gap-3 border-b border-gray-100 pb-3 leading-snug">
          <span className="p-2 bg-blue-50 text-blue-700 rounded-xl">📞</span>
          <span>{isFa ? 'ارتباط با استاد' : 'Contact Professor'}</span>
        </h4>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* تلگرام */}
          <a
            href="https://t.me/International_Maths"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-4 bg-blue-50/50 hover:bg-blue-100/60 border border-blue-200 rounded-2xl transition group shadow-sm"
          >
            <div className="flex items-center gap-3">
              <svg className="w-8 h-8 text-blue-600 fill-current shrink-0" viewBox="0 0 24 24">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.161c-.18 1.897-.962 6.502-1.359 8.627-.168.9-.5 1.201-.82 1.23-.697.064-1.228-.461-1.901-.903-1.056-.693-1.653-1.124-2.678-1.8-1.185-.781-.417-1.21.258-1.911.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635.099-.002.321.023.465.14.12.098.153.228.166.331.012.095.029.311.011.479z"/>
              </svg>
              <div>
                <div className="font-bold text-slate-900 text-sm md:text-base">
                  {isFa ? 'کانال تلگرام' : 'Telegram Channel'}
                </div>
                <div className="text-xs text-slate-500" dir="ltr">@International_Maths</div>
              </div>
            </div>
            <span className="text-blue-600 font-bold group-hover:translate-x-1 transition-transform">↗</span>
          </a>

          {/* اینستاگرام */}
          <a
            href="https://instagram.com/Hadi_mohammadi_zarandini"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-4 bg-blue-50/50 hover:bg-blue-100/60 border border-blue-200 rounded-2xl transition group shadow-sm"
          >
            <div className="flex items-center gap-3">
              <svg className="w-8 h-8 text-blue-600 fill-current shrink-0" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              <div>
                <div className="font-bold text-slate-900 text-sm md:text-base">
                  {isFa ? 'صفحه اینستاگرام' : 'Instagram Page'}
                </div>
                <div className="text-xs text-slate-500" dir="ltr">@Hadi_mohammadi_zarandini</div>
              </div>
            </div>
            <span className="text-blue-600 font-bold group-hover:translate-x-1 transition-transform">↗</span>
          </a>

          {/* جیمیل */}
          <a
            href="mailto:Hadi.mohammadi.zarandini@gmail.com"
            className="flex items-center justify-between p-4 bg-blue-50/50 hover:bg-blue-100/60 border border-blue-200 rounded-2xl transition group shadow-sm"
          >
            <div className="flex items-center gap-3 overflow-hidden">
              <svg className="w-8 h-8 text-blue-600 fill-current shrink-0" viewBox="0 0 24 24">
                <path d="M12 12.713l-11.985-9.713h23.97l-11.985 9.713zm0 2.574l-12-9.713v13.856h24v-13.856l-12 9.713z"/>
              </svg>
              <div className="truncate">
                <div className="font-bold text-slate-900 text-sm md:text-base">
                  {isFa ? 'ارسال ایمیل (جیمیل)' : 'Gmail'}
                </div>
                <div className="text-xs text-slate-500 truncate" dir="ltr">Hadi.mohammadi.zarandini@gmail.com</div>
              </div>
            </div>
            <span className="text-blue-600 font-bold group-hover:translate-x-1 transition-transform shrink-0">↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const { language, setLanguage } = useLanguage();
  const [isFeedbackOpen, setIsFeedbackOpen] = useState(false);
  const pathname = usePathname();

  const isFa = language === 'fa';

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main dir={isFa ? 'rtl' : 'ltr'} className="min-h-screen bg-slate-50 text-slate-900 font-sans pb-12 antialiased">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA_DATA) }}
      />

      {/* هدر */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200/80 px-4 py-3 shadow-sm">
        <div className="max-w-6xl mx-auto flex flex-col items-center gap-3">
          <div className="w-full flex items-center justify-between">
            <div className="flex items-center gap-3">
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
            </div>

            <div className="flex items-center gap-2 bg-gray-100 px-3 py-1.5 rounded-lg border border-gray-300 shadow-inner">
              <button 
                type="button"
                onClick={() => setLanguage('fa')} 
                className={`text-xs font-bold transition ${isFa ? 'text-blue-700 underline font-black' : 'text-gray-500 hover:text-black'}`}
              >
                فارسی
              </button>
              <span className="text-gray-400 font-light">|</span>
              <button 
                type="button"
                onClick={() => setLanguage('en')} 
                className={`text-xs font-bold transition ${!isFa ? 'text-blue-700 underline font-black' : 'text-gray-500 hover:text-black'}`}
              >
                English
              </button>
            </div>
          </div>

          <div className="w-full flex flex-col items-center gap-2 border-t border-gray-100 pt-3">
            <div className="w-full flex items-center justify-center gap-4 md:gap-6 overflow-x-auto py-2 text-xs md:text-sm font-medium text-gray-700">
              <Link 
                href="/" 
                className={`whitespace-nowrap transition-colors font-bold ${
                  pathname === '/' 
                    ? 'text-blue-700' 
                    : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                {isFa ? 'خانه' : 'Home'}
              </Link>

              <Link 
                href="/educational-systems" 
                className="hover:text-blue-600 whitespace-nowrap transition-colors"
              >
                {isFa ? 'نظام آموزشی کشورها' : 'Educational Systems'}
              </Link>

              <Link 
                href="/books" 
                className="hover:text-blue-600 whitespace-nowrap transition-colors"
              >
                {isFa ? 'کتب و منابع آموزشی' : 'Books & Resources'}
              </Link>

              <Link 
                href="/math-sites" 
                className="hover:text-blue-600 whitespace-nowrap transition-colors"
              >
                {isFa ? 'سایت‌های ریاضی کشورها' : 'Math Websites'}
              </Link>

              <button 
                type="button"
                aria-expanded={isFeedbackOpen}
                onClick={() => setIsFeedbackOpen(!isFeedbackOpen)} 
                className="hover:text-blue-600 whitespace-nowrap transition-colors flex items-center gap-1"
              >
                <span>{isFa ? 'بازخورد کلاس‌ها' : 'Class Feedback'}</span>
                <span className="text-[10px]">{isFeedbackOpen ? '▲' : '▼'}</span>
              </button>

              <button 
                type="button"
                onClick={() => scrollToSection('contact')} 
                className="hover:text-blue-600 whitespace-nowrap transition-colors"
              >
                {isFa ? 'ارتباط با استاد' : 'Contact'}
              </button>
            </div>

            {/* منوی کشویی بازخورد کلاس‌ها */}
            {isFeedbackOpen && (
              <div className="w-full flex items-center justify-center gap-2 flex-wrap bg-blue-50/60 p-3 rounded-2xl border border-blue-200 my-1 shadow-inner">
                {FEEDBACKS.map((item, idx) => (
                  <a 
                    key={idx} 
                    href={item.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="px-3 py-1.5 bg-white hover:bg-blue-50 text-xs font-semibold text-blue-900 rounded-lg border border-blue-200 shadow-sm transition-all flex items-center gap-1.5"
                  >
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
                loading="eager"
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
                    هدف از راه اندازی این وبسایت و گروه آموزشی مرتبط، ارائه خدمات تدریس تخصصی و هدفمند به ایرانیان عزیز مقیم خارج از کشور است تا بتوانند ریاضی را دقیقاً مطابق با کتابهای درسی و نظام آموزشی کشور محل سکونت خود بیاموزند. در اینجا و به طور کامل تر در گروه تلگرامی این مجموعه، کتابهای مدارس و دانشگاههای کشورهای مختلف از جمله آمریکا، کانادا، آلمان، انگلستان، استرالیا و ترکیه گردآوری شده و به صورت کاملاً رایگان در اختیار تمام اعضاء قرار می گیرد.
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

      {/* سوابق تدریس */}
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
            <div className="w-full max-w-md rounded-2xl overflow-hidden border border-gray-200 bg-gray-100 shadow-sm">
              <img 
                src="/teaching1.JPG" 
                alt="تدریس هادی محمدی زرندینی در دانشگاه" 
                className="w-full h-48 md:h-64 object-cover hover:scale-105 transition duration-300 block"
                loading="lazy"
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
                  loading="lazy"
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
                  loading="lazy"
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
                  loading="lazy"
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

      {/* بخش ارتباط با استاد */}
      <div id="contact" className="mt-8">
        <IntegratedContactButtons lang={language} />
      </div>
    </main>
  );
}
