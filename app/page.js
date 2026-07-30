'use client';

import { useState } from 'react';
import BooksSection from '@/components/BooksSection';
import ContactButtons from '@/components/ContactButtons';

export default function Home() {
  const [lang, setLang] = useState('fa');
  const [isEducationOpen, setIsEducationOpen] = useState(false);
  const [isFeedbackOpen, setIsFeedbackOpen] = useState(false);

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

  const feedbacks = [
    { fa: 'بازخورد ۱', en: 'Feedback 1', link: 'https://t.me/International_Maths/110' },
    { fa: 'بازخورد ۲', en: 'Feedback 2', link: 'https://t.me/International_Maths/111' },
    { fa: 'بازخورد ۳', en: 'Feedback 3', link: 'https://t.me/International_Maths/1352' },
  ];

  return (
    <main dir={isFa ? 'rtl' : 'ltr'} className="min-h-screen bg-white text-black font-sans pb-12">
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200 px-4 py-3 shadow-sm">
        <div className="max-w-6xl mx-auto flex flex-col items-center gap-3">
          
          <div className="w-full flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-2xl">📐</span>
              <h1 className="font-bold text-base md:text-lg text-black">
                {isFa ? 'آموزش بین‌المللی ریاضیات' : 'International Math'}
              </h1>
            </div>

            <div className="flex items-center gap-2 bg-gray-100 px-3 py-1.5 rounded-lg border border-gray-300">
              <button onClick={() => setLang('fa')} className={`text-xs font-bold transition ${isFa ? 'text-black underline' : 'text-gray-500 hover:text-black'}`}>فارسی</button>
              <span className="text-gray-400 font-light">|</span>
              <button onClick={() => setLang('en')} className={`text-xs font-bold transition ${!isFa ? 'text-black underline' : 'text-gray-500 hover:text-black'}`}>English</button>
            </div>
          </div>

          <div className="w-full flex flex-col items-center gap-2 border-t border-gray-100 pt-2">
            <div className="w-full flex items-center justify-center gap-2 md:gap-3 overflow-x-auto py-1 text-xs md:text-sm font-bold">
              
              <button onClick={() => { setIsEducationOpen(!isEducationOpen); setIsFeedbackOpen(false); }} className="px-3 py-1.5 bg-gray-100 hover:bg-gray-200 text-black rounded-lg border border-gray-300 whitespace-nowrap transition flex items-center gap-1">
                <span>🌐 {isFa ? 'نظام آموزشی کشورها' : 'Educational Systems'}</span>
                <span className="text-[10px]">{isEducationOpen ? '▲' : '▼'}</span>
              </button>

              <button onClick={() => scrollToSection('books')} className="px-3 py-1.5 bg-gray-100 hover:bg-gray-200 rounded-lg border border-gray-300 whitespace-nowrap transition">📚 {isFa ? 'کتب آموزشی' : 'Books'}</button>

              <button onClick={() => { setIsFeedbackOpen(!isFeedbackOpen); setIsEducationOpen(false); }} className="px-3 py-1.5 bg-gray-100 hover:bg-gray-200 text-black rounded-lg border border-gray-300 whitespace-nowrap transition flex items-center gap-1">
                <span>💬 {isFa ? 'بازخورد کلاس‌ها' : 'Class Feedback'}</span>
                <span className="text-[10px]">{isFeedbackOpen ? '▲' : '▼'}</span>
              </button>

              <button onClick={() => scrollToSection('about')} className="px-3 py-1.5 bg-gray-100 hover:bg-gray-200 rounded-lg border border-gray-300 whitespace-nowrap transition">👤 {isFa ? 'هادی محمدی' : 'Hadi Mohammadi'}</button>
              <button onClick={() => scrollToSection('contact')} className="px-3 py-1.5 bg-gray-100 hover:bg-gray-200 rounded-lg border border-gray-300 whitespace-nowrap transition">📞 {isFa ? 'ارتباط با استاد' : 'Contact'}</button>
            </div>

            {isEducationOpen && (
              <div className="w-full flex items-center justify-center gap-2 flex-wrap bg-gray-50 p-2.5 rounded-xl border border-gray-200 my-1 shadow-inner animate-in fade-in zoom-in duration-200">
                {countries.map((item, idx) => (
                  <a key={idx} href={item.link} target="_blank" rel="noopener noreferrer" className="px-3 py-1.5 bg-white hover:bg-gray-100 text-xs font-semibold text-black rounded-lg border border-gray-300 shadow-sm transition flex items-center gap-1.5">
                    <span>{item.flag}</span><span>{isFa ? item.fa : item.en}</span>
                  </a>
                ))}
              </div>
            )}

            {isFeedbackOpen && (
              <div className="w-full flex items-center justify-center gap-2 flex-wrap bg-gray-50 p-2.5 rounded-xl border border-gray-200 my-1 shadow-inner animate-in fade-in zoom-in duration-200">
                {feedbacks.map((item, idx) => (
                  <a key={idx} href={item.link} target="_blank" rel="noopener noreferrer" className="px-3 py-1.5 bg-white hover:bg-gray-100 text-xs font-semibold text-black rounded-lg border border-gray-300 shadow-sm transition flex items-center gap-1.5">
                    <span>⭐</span><span>{isFa ? item.fa : item.en}</span>
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      </header>

      <section className="max-w-4xl mx-auto text-center px-4 pt-10 pb-6">
        <h2 className="text-3xl md:text-5xl font-extrabold text-black mb-4">{isFa ? 'آموزش بین‌المللی ریاضیات' : 'International Mathematics Tutoring'}</h2>
        <p className="text-black text-base md:text-lg leading-relaxed max-w-2xl mx-auto font-medium">
          {isFa ? 'تدریس تخصصی و مفهومی ریاضیات نظام‌های آموزشی بین‌المللی (امریكا، كانادا، انگلیس، استرالیا، آلمان و تركیه)' : 'Specialized math education for international curricula (USA, Canada, UK, Australia, Germany, Turkey).'}
        </p>
      </section>

      {/* بخش درباره استاد (هادی محمدی) */}
      <section id="about" className="max-w-5xl mx-auto px-4 py-8">
        <div className="bg-slate-800 text-white rounded-3xl p-6 md:p-10 border border-slate-700 shadow-2xl">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            <div className="shrink-0 flex flex-col items-center">
              <img src="/profile.jpg" alt="دکتر هادی محمدی" className="w-48 h-60 object-cover rounded-2xl border-2 border-slate-600 shadow-lg mb-3" />
              <span className="text-xs font-bold text-slate-100 bg-slate-700/80 px-3 py-1.5 rounded-xl border border-slate-600 text-center">{isFa ? 'هیئت علمی بازنشسته دانشگاه' : 'Retired University Faculty'}</span>
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-6 border-b border-slate-700 pb-4 mt-2 md:mt-0">
                <span className="text-3xl">👨‍🏫</span>
                <h3 className="text-2xl md:text-3xl font-extrabold text-white tracking-wide">{isFa ? 'هادی محمدی' : 'Hadi Mohammadi'}</h3>
              </div>
              <div className="text-slate-100 leading-loose text-sm md:text-base space-y-4 text-justify font-light">
                {isFa ? (
                  <>
                    <p>
                      دارنده مدرک دکترای تخصصی ریاضی از دانشگاه صنعتی امیرکبیر هستم و به مدت <strong className="text-white font-bold">۲۹ سال</strong> به طور مستمر در عرصه آموزش ریاضی در داخل و خارج از کشور فعالیت داشته‌ام.
                    </p>
                    <p>
                      هدف این مجموعه، ارائه خدمات تدریس تخصصی و هدفمند به ایرانیان عزیز مقیم خارج از کشور است تا بتوانند ریاضی را دقیقاً مطابق با کتاب‌های درسی و نظام آموزشی کشور محل سکونت خود بیاموزند و همچنین رفع اشکال روزانه به صورت کاملاً رایگان در پلتفرم‌های فضای مجازی انجام می‌شود.
                    </p>
                    <p>
                      در اینجا و به طور کامل‌تر در گروه تلگرامی این مجموعه، کتاب‌های ریاضی مدارس و دانشگاه‌های کشورهای مختلف از جمله آمریکا، کانادا، آلمان، انگلستان، استرالیا و ترکیه گردآوری شده و به صورت کاملاً رایگان در اختیار تمام اعضاء قرار می‌گیرد.
                    </p>
                    <p>
                      فرآیند آموزش به صورت تدریس زنده و تصویری و کاملاً منطبق با همان کتاب درسی دانش‌آموز یا دانشجو انجام می‌شود و برای درک بهتر مفاهیم، تدریس به صورت ترکیبی از زبان فارسی و انگلیسی همراه با توضیح دقیق اصطلاحات تخصصی ریاضی ارائه می‌گردد.
                    </p>
                    <p>
                      همچنین کلاس‌های تقویتی ویژه تابستان برای تثبیت پایه ریاضی و آمادگی برای سال جدید تحصیلی با شهریه دوره‌ها به صورت ترمیک و با قیمتی مناسب برگزار می‌شود.
                    </p>
                    <p>
                      من با تکیه بر تجربیات چندین دهه تدریس در نظام‌های آموزشی گوناگون، متعهد به ارائه دقیق‌ترین و کاربردی‌ترین آموزش ریاضی مطابق با استانداردهای مدارس خارج از ایران هستم و از شما دعوت می‌کنم که با پیوستن به این دوره، ریاضی را به شیوه‌ای صحیح، اصولی و متناسب با نیازهای تحصیلی خود فرا گیرید.
                    </p>
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
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div id="books" className="max-w-6xl mx-auto px-4 mt-4">
        <BooksSection lang={lang} />
      </div>

      <div id="contact">
        <ContactButtons lang={lang} />
      </div>
    </main>
  );
}
