'use client';

import { useState } from 'react';
import BooksSection from '@/components/BooksSection';
import ContactButtons from '@/components/ContactButtons';

export default function Home() {
  const [lang, setLang] = useState('fa');
  const [isEducationOpen, setIsEducationOpen] = useState(false);
  const [isFeedbackOpen, setIsFeedbackOpen] = useState(false);
  const [isMathSitesOpen, setIsMathSitesOpen] = useState(false);

  const isFa = lang === 'fa';

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const countries = [
    { flag: '🇺🇸', fa: 'نظام آموزشی آمریکا', en: 'US Educational System', link: 'https://t.me/International_Maths/379' },
    { flag: '🇬🇧', fa: 'نظام آموزشی انگلستان', en: 'UK Educational System', link: 'https://t.me/International_Maths/297' },
    { flag: '🇩🇪', fa: 'نظام آموزشی آلمان', en: 'Germany Educational System', link: 'https://t.me/International_Maths/375' },
    { flag: '🇦🇺', fa: 'نظام آموزشی استرالیا', en: 'Australia Educational System', link: 'https://t.me/International_Maths/299' },
    { flag: '🇹🇷', fa: 'نظام آموزشی ترکیه', en: 'Turkey Educational System', link: 'https://t.me/International_Maths/395' },
    { flag: '🇮🇹', fa: 'نظام آموزشی ایتالیا', en: 'Italy Educational System', link: 'https://t.me/International_Maths/389' },
    { flag: '🇨🇦', fa: 'نظام آموزشی کانادا', en: 'Canada Educational System', link: 'https://t.me/International_Maths/302' },
  ];

  const mathSites = [
    { flag: '🇺🇸', fa: 'آمریکا (Khan Academy)', en: 'USA (Khan Academy)', link: 'https://www.khanacademy.org/_render' },
    { flag: '🇨🇦', fa: 'کانادا (IXL Math)', en: 'Canada (IXL Math)', link: 'https://ca.ixl.com/math' },
    { flag: '🇬🇧', fa: 'انگلستان (Maths Genie)', en: 'UK (Maths Genie)', link: 'https://mathsgenie.co.uk/' },
    { flag: '🇦🇺', fa: 'استرالیا (Art of Smart)', en: 'Australia (Art of Smart)', link: 'https://artofsmart.com.au/maths/hsc-maths-past-papers/' },
  ];

  const feedbacks = [
    { fa: 'بازخورد ۱', en: 'Feedback 1', link: 'https://t.me/International_Maths/110' },
    { fa: 'بازخورد ۲', en: 'Feedback 2', link: 'https://t.me/International_Maths/111' },
    { fa: 'بازخورد ۳', en: 'Feedback 3', link: 'https://t.me/International_Maths/1352' },
  ];

  // آرم اختصاصی و برداری دانشگاه صنعتی امیرکبیر
  const AmirkabirLogo = () => (
    <svg className="w-full h-full text-blue-900" viewBox="0 0 100 100" fill="currentColor">
      <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="6"/>
      <path d="M50 15 L80 35 L80 65 L50 85 L20 65 L20 35 Z" fill="none" stroke="currentColor" strokeWidth="5"/>
      <path d="M35 45 L50 30 L65 45 L50 60 Z" fill="currentColor"/>
      <circle cx="50" cy="50" r="8" fill="#fff"/>
      <path d="M50 65 L50 80 M35 60 L25 70 M65 60 L75 70" stroke="currentColor" strokeWidth="4"/>
    </svg>
  );

  // آرم اختصاصی و برداری دانشگاه خوارزمی
  const KharazmiLogo = () => (
    <svg className="w-full h-full text-blue-900" viewBox="0 0 100 100" fill="currentColor">
      <circle cx="50" cy="50" r="44" fill="none" stroke="currentColor" strokeWidth="5"/>
      <path d="M50 20 L65 35 L50 50 L35 35 Z" fill="currentColor"/>
      <path d="M30 50 C30 70 70 70 70 50" fill="none" stroke="currentColor" strokeWidth="5"/>
      <path d="M50 50 L50 80" stroke="currentColor" strokeWidth="5"/>
      <circle cx="50" cy="35" r="4" fill="#fff"/>
    </svg>
  );

  return (
    <main dir={isFa ? 'rtl' : 'ltr'} className="min-h-screen bg-white text-black font-sans pb-12">
      {/* هدر */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200 px-4 py-3 shadow-sm">
        <div className="max-w-6xl mx-auto flex flex-col items-center gap-3">
          
          {/* لوگو و عنوان بالا سمت راست */}
          <div className="w-full flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              {/* آیکون استاد در حال تدریس پای تخته */}
              <div className="w-9 h-9 bg-blue-50 border border-blue-200 text-blue-700 rounded-xl flex items-center justify-center p-1.5 shadow-sm">
                <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2 3h20v14H2z" />
                  <path d="M8 21l4-4 4 4" />
                  <path d="M7 8h4" />
                  <path d="M7 12h2" />
                  <path d="M15 11l2 2 4-4" />
                </svg>
              </div>
              <h1 className="font-extrabold text-base md:text-lg text-black tracking-tight">
                {isFa ? 'آموزش بین‌المللی ریاضیات' : 'International Math'}
              </h1>
            </div>

            {/* سوییچ زبان */}
            <div className="flex items-center gap-2 bg-gray-100 px-3 py-1.5 rounded-lg border border-gray-300">
              <button 
                type="button"
                onClick={() => setLang('fa')} 
                className={`text-xs font-bold transition ${isFa ? 'text-black underline' : 'text-gray-500 hover:text-black'}`}
              >
                فارسی
              </button>
              <span className="text-gray-400 font-light">|</span>
              <button 
                type="button"
                onClick={() => setLang('en')} 
                className={`text-xs font-bold transition ${!isFa ? 'text-black underline' : 'text-gray-500 hover:text-black'}`}
              >
                English
              </button>
            </div>
          </div>

          {/* منوی بالا */}
          <div className="w-full flex flex-col items-center gap-2 border-t border-gray-100 pt-2">
            <div className="w-full flex items-center justify-center gap-2 md:gap-3 overflow-x-auto py-1 text-xs md:text-sm font-bold">
              
              <button 
                type="button"
                onClick={() => { 
                  setIsEducationOpen(!isEducationOpen); 
                  setIsFeedbackOpen(false); 
                  setIsMathSitesOpen(false); 
                }} 
                className="px-3 py-1.5 bg-gray-100 hover:bg-gray-200 text-black rounded-lg border border-gray-300 whitespace-nowrap transition flex items-center gap-1"
              >
                <span>🌐 {isFa ? 'نظام آموزشی کشورها' : 'Educational Systems'}</span>
                <span className="text-[10px]">{isEducationOpen ? '▲' : '▼'}</span>
              </button>

              <button 
                type="button"
                onClick={() => scrollToSection('books')} 
                className="px-3 py-1.5 bg-gray-100 hover:bg-gray-200 text-black rounded-lg border border-gray-300 whitespace-nowrap transition"
              >
                📚 {isFa ? 'کتب آموزشی' : 'Books'}
              </button>

              <button 
                type="button"
                onClick={() => { 
                  setIsMathSitesOpen(!isMathSitesOpen); 
                  setIsEducationOpen(false); 
                  setIsFeedbackOpen(false); 
                }} 
                className="px-3 py-1.5 bg-gray-100 hover:bg-gray-200 text-black rounded-lg border border-gray-300 whitespace-nowrap transition flex items-center gap-1"
              >
                <span>💻 {isFa ? 'سایت‌های ریاضی کشورها' : 'Math Websites'}</span>
                <span className="text-[10px]">{isMathSitesOpen ? '▲' : '▼'}</span>
              </button>

              <button 
                type="button"
                onClick={() => { 
                  setIsFeedbackOpen(!isFeedbackOpen); 
                  setIsEducationOpen(false); 
                  setIsMathSitesOpen(false); 
                }} 
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

            {/* کشویی‌ها */}
            {isEducationOpen && (
              <div className="w-full flex items-center justify-center gap-2 flex-wrap bg-gray-50 p-2.5 rounded-xl border border-gray-200 my-1 shadow-inner">
                {countries.map((item, idx) => (
                  <a key={idx} href={item.link} target="_blank" rel="noopener noreferrer" className="px-3 py-1.5 bg-white hover:bg-gray-100 text-xs font-semibold text-black rounded-lg border border-gray-300 shadow-sm transition flex items-center gap-1.5">
                    <span>{item.flag}</span>
                    <span>{isFa ? item.fa : item.en}</span>
                  </a>
                ))}
              </div>
            )}

            {isMathSitesOpen && (
              <div className="w-full flex items-center justify-center gap-2 flex-wrap bg-gray-50 p-2.5 rounded-xl border border-gray-200 my-1 shadow-inner">
                {mathSites.map((item, idx) => (
                  <a key={idx} href={item.link} target="_blank" rel="noopener noreferrer" className="px-3 py-1.5 bg-white hover:bg-gray-100 text-xs font-semibold text-black rounded-lg border border-gray-300 shadow-sm transition flex items-center gap-1.5">
                    <span>{item.flag}</span>
                    <span>{isFa ? item.fa : item.en}</span>
                    <span className="text-[10px] text-gray-400">↗</span>
                  </a>
                ))}
              </div>
            )}

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

      {/* بنر اصلی */}
      <section className="max-w-4xl mx-auto text-center px-4 pt-10 pb-6">
        <h2 className="text-3xl md:text-5xl font-extrabold text-black mb-4">
          {isFa ? 'آموزش بین‌المللی ریاضیات' : 'International Mathematics Tutoring'}
        </h2>
        <p className="text-black text-base md:text-lg leading-relaxed max-w-2xl mx-auto font-medium">
          {isFa 
            ? 'تدریس تخصصی و مفهومی ریاضیات نظام‌های آموزشی بین‌المللی (امریكا، كانادا، انگلیس، استرالیا، آلمان و تركیه)' 
            : 'Specialized math education for international curricula (USA, Canada, UK, Australia, Germany, Turkey).'}
        </p>
      </section>

      {/* بخش هادی محمدی */}
      <section id="about" className="max-w-5xl mx-auto px-4 py-8">
        <div className="bg-slate-800 text-white rounded-3xl p-6 md:p-10 border border-slate-700 shadow-2xl">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            <div className="shrink-0 flex flex-col items-center">
              <img 
                src="/profile.jpg" 
                alt="دکتر هادی محمدی" 
                className="w-48 h-60 object-cover rounded-2xl border-2 border-slate-600 shadow-lg mb-3" 
              />
              <span className="text-xs font-bold text-slate-100 bg-slate-700/80 px-3 py-1.5 rounded-xl border border-slate-600 text-center">
                {isFa ? 'هیات علمی دانشگاه ملی مهارت تهران' : 'Faculty Member at National Skills University of Tehran'}
              </span>
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-6 border-b border-slate-700 pb-4 mt-2 md:mt-0">
                <span className="text-3xl">👨‍🏫</span>
                <h3 className="text-2xl md:text-3xl font-extrabold text-white tracking-wide">
                  {isFa ? 'هادی محمدی' : 'Hadi Mohammadi'}
                </h3>
              </div>
              <div className="text-slate-100 leading-loose text-sm md:text-base space-y-4 text-justify font-light">
                {isFa ? (
                  <>
                    <p>
                      دارای مدرک دکترای تخصصی ریاضی از دانشگاه صنعتی امیرکبیر هستم و به مدت <strong className="text-white font-bold">۲۹ سال</strong> به طور مستمر در عرصه آموزش ریاضی در داخل و خارج از کشور فعالیت داشته‌ام.
                    </p>
                    <p>
                      هدف این مجموعه، ارائه خدمات تدریس تخصصی و هدفمند به ایرانیان عزیز مقیم خارج از کشور است تا بتوانند ریاضی را دقیقاً مطابق با کتاب‌های درسی و نظام آموزشی کشور محل سکونت خود بیاموزند و همچنین رفع اشکال روزانه به صورت کاملاً رایگان در پلتفرم‌های فضای مجازی انجام می‌شود.
                    </p>
                    <p>
                      من با تکیه بر تجربیات چندین دهه تدریس در نظام‌های آموزشی گوناگون، متعهد به ارائه دقیق‌ترین و کاربردی‌ترین آموزش ریاضی مطابق با استانداردهای مدارس خارج از ایران هستم و از شما دعوت می‌کنم که با پیوستن به این دوره، ریاضی را به شیوه‌ای صحیح، اصولی و متناسب با نیازهای تحصیلی خود فرا گیرید.
                    </p>

                    {/* بخش سوابق تحصیلی همراه با لوگوی کاملا شفاف و اختصاصی دانشگاه‌ها */}
                    <div className="mt-8 border-t border-slate-700 pt-6">
                      <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                        <span>🎓</span>
                        <span>سوابق تحصیلی</span>
                      </h4>
                      
                      <div className="space-y-4">
                        {/* دکتری امیرکبیر */}
                        <div className="flex items-center gap-4 bg-slate-700/60 p-3.5 rounded-2xl border border-slate-600">
                          <div className="w-12 h-12 shrink-0 bg-white rounded-xl p-2 flex items-center justify-center shadow-md">
                            <AmirkabirLogo />
                          </div>
                          <div>
                            <div className="font-bold text-white text-base">دکتری تخصصی ریاضی</div>
                            <div className="text-xs text-slate-300 font-normal mt-0.5">گرایش بهینه سازی - دانشگاه صنعتی امیرکبیر</div>
                          </div>
                        </div>

                        {/* کارشناسی ارشد امیرکبیر */}
                        <div className="flex items-center gap-4 bg-slate-700/60 p-3.5 rounded-2xl border border-slate-600">
                          <div className="w-12 h-12 shrink-0 bg-white rounded-xl p-2 flex items-center justify-center shadow-md">
                            <AmirkabirLogo />
                          </div>
                          <div>
                            <div className="font-bold text-white text-base">کارشناسی ارشد</div>
                            <div className="text-xs text-slate-300 font-normal mt-0.5">گرایش ریاضی کاربردی - دانشگاه صنعتی امیرکبیر</div>
                          </div>
                        </div>

                        {/* کارشناسی خوارزمی */}
                        <div className="flex items-center gap-4 bg-slate-700/60 p-3.5 rounded-2xl border border-slate-600">
                          <div className="w-12 h-12 shrink-0 bg-white rounded-xl p-2 flex items-center justify-center shadow-md">
                            <KharazmiLogo />
                          </div>
                          <div>
                            <div className="font-bold text-white text-base">کارشناسی ریاضی</div>
                            <div className="text-xs text-slate-300 font-normal mt-0.5">دانشگاه خوارزمی</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <p>
                      Holder of a Ph.D. in Mathematics from Amirkabir University of Technology, with over <strong className="text-white font-bold">29 years</strong> of continuous experience in teaching mathematics both nationally and internationally.
                    </p>
                    <p>
                      The goal of this program is to provide targeted, specialized math tutoring for students living abroad, aligning perfectly with their local school standard curricula, alongside free daily Q&A sessions on social media platforms.
                    </p>
                    <p>
                      Special summer prep classes are also offered to reinforce mathematical foundations and prepare students for the upcoming academic year.
                    </p>

                    {/* Education English */}
                    <div className="mt-8 border-t border-slate-700 pt-6">
                      <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                        <span>🎓</span>
                        <span>Education</span>
                      </h4>
                      <div className="space-y-4">
                        <div className="flex items-center gap-4 bg-slate-700/60 p-3.5 rounded-2xl border border-slate-600">
                          <div className="w-12 h-12 shrink-0 bg-white rounded-xl p-2 flex items-center justify-center shadow-md">
                            <AmirkabirLogo />
                          </div>
                          <div>
                            <div className="font-bold text-white text-base">Ph.D. in Mathematics</div>
                            <div className="text-xs text-slate-300 font-normal mt-0.5">Optimization - Amirkabir University of Technology</div>
                          </div>
                        </div>

                        <div className="flex items-center gap-4 bg-slate-700/60 p-3.5 rounded-2xl border border-slate-600">
                          <div className="w-12 h-12 shrink-0 bg-white rounded-xl p-2 flex items-center justify-center shadow-md">
                            <AmirkabirLogo />
                          </div>
                          <div>
                            <div className="font-bold text-white text-base">M.Sc. in Applied Mathematics</div>
                            <div className="text-xs text-slate-300 font-normal mt-0.5">Amirkabir University of Technology</div>
                          </div>
                        </div>

                        <div className="flex items-center gap-4 bg-slate-700/60 p-3.5 rounded-2xl border border-slate-600">
                          <div className="w-12 h-12 shrink-0 bg-white rounded-xl p-2 flex items-center justify-center shadow-md">
                            <KharazmiLogo />
                          </div>
                          <div>
                            <div className="font-bold text-white text-base">B.Sc. in Mathematics</div>
                            <div className="text-xs text-slate-300 font-normal mt-0.5">Kharazmi University</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* کتب آموزشی */}
      <div id="books" className="max-w-6xl mx-auto px-4 mt-4">
        <BooksSection lang={lang} />
      </div>

      {/* ارتباط با استاد */}
      <div id="contact">
        <ContactButtons lang={lang} />
      </div>
    </main>
  );
}
