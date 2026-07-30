'use client';

import { useState } from 'react';
import BooksSection from '@/components/BooksSection';
import ContactButtons from '@/components/ContactButtons';

export default function Home() {
  const [lang, setLang] = useState('fa');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isEducationOpen, setIsEducationOpen] = useState(false);
  const [isFeedbackOpen, setIsFeedbackOpen] = useState(false);

  const isFa = lang === 'fa';

  const scrollToSection = (id) => {
    setIsMenuOpen(false);
    setIsEducationOpen(false);
    setIsFeedbackOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const closeAll = () => {
    setIsMenuOpen(false);
    setIsEducationOpen(false);
    setIsFeedbackOpen(false);
  };

  return (
    <main dir={isFa ? 'rtl' : 'ltr'} className="min-h-screen bg-white text-black font-sans pb-12">
      {/* هدر */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200 px-4 py-3 shadow-sm">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-black bg-gray-100 hover:bg-gray-200 rounded-lg border border-gray-300 transition"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
            <div className="flex items-center gap-2">
              <span className="text-2xl">📐</span>
              <h1 className="font-bold text-base md:text-lg text-black">
                {isFa ? 'آموزش بین‌المللی ریاضیات' : 'International Math'}
              </h1>
            </div>
          </div>

          <div className="flex items-center gap-2 bg-gray-100 px-3 py-1.5 rounded-lg border border-gray-300">
            <button
              onClick={() => setLang('fa')}
              className={`text-xs font-bold transition ${isFa ? 'text-black underline' : 'text-gray-500 hover:text-black'}`}
            >
              فارسی
            </button>
            <span className="text-gray-400 font-light">|</span>
            <button
              onClick={() => setLang('en')}
              className={`text-xs font-bold transition ${!isFa ? 'text-black underline' : 'text-gray-500 hover:text-black'}`}
            >
              English
            </button>
          </div>
        </div>

        {/* منوی کشویی */}
        {isMenuOpen && (
          <div className="max-w-6xl mx-auto mt-3 pt-3 border-t border-gray-200 flex flex-col gap-2">
            <div className="flex flex-col gap-1">
              <button
                onClick={() => setIsEducationOpen(!isEducationOpen)}
                className="w-full flex items-center justify-between px-4 py-2 text-sm font-bold text-black bg-gray-50 hover:bg-gray-100 rounded-lg border border-gray-200 transition"
              >
                <span>🌐 {isFa ? 'نظام آموزشی کشورها' : 'Educational Systems'}</span>
                <svg
                  className={`w-4 h-4 transition-transform duration-200 ${isEducationOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {isEducationOpen && (
                <div className="flex flex-col gap-1.5 pr-4 pl-2 py-1 border-r-2 border-gray-300 mr-2 my-1">
                  {[
                    { flag: '🇺🇸', fa: 'نظام آموزشی آمریکا', en: 'US Educational System' },
                    { flag: '🇬🇧', fa: 'نظام آموزشی انگلستان', en: 'UK Educational System' },
                    { flag: '🇩🇪', fa: 'نظام آموزشی آلمان', en: 'Germany Educational System' },
                    { flag: '🇦🇺', fa: 'نظام آموزشی استرالیا', en: 'Australia Educational System' },
                    { flag: '🇹🇷', fa: 'نظام آموزشی ترکیه', en: 'Turkey Educational System' },
                    { flag: '🇮🇹', fa: 'نظام آموزشی ایتالیا', en: 'Italy Educational System' },
                    { flag: '🇨🇦', fa: 'نظام آموزشی کانادا', en: 'Canada Educational System' },
                  ].map((item, idx) => (
                    <a
                      key={idx}
                      href="https://t.me/International_Maths"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={closeAll}
                      className="text-right px-3 py-1.5 text-xs font-semibold text-black bg-gray-100 hover:bg-gray-200 rounded-md border border-gray-200 transition flex items-center justify-between"
                    >
                      <span>{item.flag} {isFa ? item.fa : item.en}</span>
                      <span className="text-[10px] text-gray-500">Telegram ↗</span>
                    </a>
                  ))}
                </div>
              )}
            </div>

            <button
              onClick={() => scrollToSection('about')}
              className="text-right px-4 py-2 text-sm font-bold text-black bg-gray-50 hover:bg-gray-100 rounded-lg border border-gray-200 transition"
            >
              👤 {isFa ? 'درباره من' : 'About Me'}
            </button>

            <div className="flex flex-col gap-1">
              <button
                onClick={() => setIsFeedbackOpen(!isFeedbackOpen)}
                className="w-full flex items-center justify-between px-4 py-2 text-sm font-bold text-black bg-gray-50 hover:bg-gray-100 rounded-lg border border-gray-200 transition"
              >
                <span>💬 {isFa ? 'بازخورد تدریس' : 'Teaching Feedback'}</span>
                <svg
                  className={`w-4 h-4 transition-transform duration-200 ${isFeedbackOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {isFeedbackOpen && (
                <div className="flex flex-col gap-1.5 pr-4 pl-2 py-1 border-r-2 border-gray-300 mr-2 my-1">
                  {[1, 2].map((num) => (
                    <a
                      key={num}
                      href="https://t.me/International_Maths"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={closeAll}
                      className="text-right px-3 py-1.5 text-xs font-semibold text-black bg-gray-100 hover:bg-gray-200 rounded-md border border-gray-200 transition flex items-center justify-between"
                    >
                      <span>⭐ {isFa ? `بازخورد ${num}` : `Feedback ${num}`}</span>
                      <span className="text-[10px] text-gray-500">Telegram ↗</span>
                    </a>
                  ))}
                </div>
              )}
            </div>

            <button
              onClick={() => scrollToSection('books')}
              className="text-right px-4 py-2 text-sm font-bold text-black bg-gray-50 hover:bg-gray-100 rounded-lg border border-gray-200 transition"
            >
              📚 {isFa ? 'کتب آموزشی' : 'Books'}
            </button>

            <button
              onClick={() => scrollToSection('contact')}
              className="text-right px-4 py-2 text-sm font-bold text-black bg-gray-50 hover:bg-gray-100 rounded-lg border border-gray-200 transition"
            >
              📞 {isFa ? 'ارتباط با استاد' : 'Contact'}
            </button>
          </div>
        )}
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

        <div className="mt-6 flex justify-center">
          <a
            href="https://t.me/International_Maths"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-gray-200 hover:bg-gray-300 text-black font-bold rounded-xl border border-gray-400 shadow-sm transition"
          >
            {isFa ? 'درخواست کلاس و مشاوره' : 'Request Tutoring'}
          </a>
        </div>
      </section>

      {/* درباره من */}
      <section id="about" className="max-w-5xl mx-auto px-4 py-8">
        <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-300 shadow-sm">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
            <div className="shrink-0 flex flex-col items-center">
              <img
                src="/profile.jpg"
                alt="دکتر هادی محمدی"
                className="w-48 h-60 object-cover rounded-2xl border-2 border-gray-300 shadow-md mb-3"
              />
              <span className="text-xs font-bold text-gray-800 bg-gray-200 px-3 py-1.5 rounded-lg border border-gray-300 text-center">
                {isFa ? 'هیئت علمی بازنشسته دانشگاه' : 'Retired University Faculty Member'}
              </span>
            </div>

            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4 border-b border-gray-300 pb-3 mt-4 md:mt-0">
                <span className="text-3xl">👨‍🏫</span>
                <h3 className="text-2xl font-bold text-black">
                  {isFa ? 'درباره من' : 'About Me'}
                </h3>
              </div>

              <div className="text-black leading-loose text-sm md:text-base space-y-4 text-justify">
                {isFa ? (
                  <>
                    <p>
                      اینجانب <strong>هادی محمدی</strong>، دارنده مدرک دکترای تخصصی ریاضی از دانشگاه صنعتی امیرکبیر هستم و به مدت <strong>۲۹ سال</strong> به طور مستمر در عرصه آموزش ریاضی در داخل و خارج از کشور فعالیت داشته‌ام.
                    </p>
                    <p>
                      هدف از راه‌اندازی این وب‌سایت و گروه آموزشی مرتبط، ارائه خدمات تدریس تخصصی و هدفمند به ایرانیان عزیز مقیم خارج از کشور است تا بتوانند ریاضی را دقیقاً مطابق با کتاب‌های درسی و نظام آموزشی کشور محل سکونت خود بیاموزند.
                    </p>
                    <p>
                      در اینجا و به طور کامل‌تر در گروه تلگرامی این مجموعه، کتاب‌های ریاضی مدارس و دانشگاه‌های کشورهای مختلف از جمله آمریکا، کانادا، آلمان، انگلستان، استرالیا و ترکیه گردآوری شده و به صورت کاملاً رایگان در اختیار تمام اعضاء قرار می‌گیرد.
                    </p>
                    <p>
                      فرآیند آموزش به صورت تدریس زنده و تصویری و کاملاً منطبق با همان کتاب درسی دانش‌آموز یا دانشجو انجام می‌شود و برای درک بهتر مفاهیم، تدریس به صورت ترکیبی از زبان فارسی و انگلیسی همراه با توضیح دقیق اصطلاحات تخصصی ریاضی ارائه می‌گردد.
                    </p>
                    <p>
                      به منظور تضمین کیفیت یادگیری، جلسات رفع اشکال به صورت روزانه برگزار می‌شود تا ابهامات درسی به سرعت برطرف گردد و شهریه دوره‌ها نیز به صورت ترمیک و با قیمتی مناسب تعیین شده است.
                    </p>
                    <p>
                      من با تکیه بر تجربیات چندین دهه تدریس در نظام‌های آموزشی گوناگون، متعهد به ارائه دقیق‌ترین و کاربردی‌ترین آموزش ریاضی مطابق با استانداردهای مدارس خارج از ایران هستم و از شما دعوت می‌کنم که با پیوستن به این دوره، ریاضی را به شیوه‌ای صحیح، اصولی و متناسب با نیازهای تحصیلی خود فرا گیرید.
                    </p>
                  </>
                ) : (
                  <>
                    <p>
                      I am <strong>Dr. Hadi Mohammadi</strong>, holding a Ph.D. in Mathematics from Amirkabir University of Technology, with over <strong>29 years</strong> of continuous experience in teaching mathematics both nationally and internationally.
                    </p>
                    <p>
                      The goal of establishing this website and educational group is to provide targeted, specialized math tutoring for students living abroad, aligning perfectly with their local school standard curricula.
                    </p>
                    <p>
                      Mathematics textbooks for schools and universities across various countries—including the US, Canada, Germany, UK, Australia, and Turkey—are gathered and made available completely free in our Telegram channel.
                    </p>
                    <p>
                      Classes are delivered live and interactive, tailored directly to your textbook. Instruction utilizes a bilingual approach (English and Persian) to ensure maximum conceptual clarity and terminology mastery.
                    </p>
                    <p>
                      Daily Q&A sessions are held to quickly address any course doubts, ensuring high learning standards with reasonable tuition fees.
                    </p>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* بخش کتاب‌ها */}
      <div id="books" className="max-w-6xl mx-auto px-4 mt-4">
        <BooksSection lang={lang} />
      </div>

      {/* دکمه‌های ارتباط */}
      <div id="contact">
        <ContactButtons lang={lang} />
      </div>
    </main>
  );
}
