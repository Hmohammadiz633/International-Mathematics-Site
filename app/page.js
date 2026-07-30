'use client';

import { useState } from 'react';
import BooksSection from '@/components/BooksSection';
import ContactButtons from '@/components/ContactButtons';

export default function Home() {
  const [lang, setLang] = useState('fa');
  const isFa = lang === 'fa';

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main dir={isFa ? 'rtl' : 'ltr'} className="min-h-screen bg-white text-black font-sans pb-12">
      {/* هدر */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200 px-4 py-3 shadow-sm">
        <div className="max-w-6xl mx-auto flex flex-col items-center gap-3">
          
          {/* ردیف اول: عنوان و دکمه تغییر زبان */}
          <div className="w-full flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-2xl">📐</span>
              <h1 className="font-bold text-base md:text-lg text-black">
                {isFa ? 'آموزش بین‌المللی ریاضیات' : 'International Math'}
              </h1>
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

          {/* ردیف دوم: منوی افقی در یک ردیف زیر زبان‌ها */}
          <div className="w-full flex items-center justify-center gap-2 md:gap-4 overflow-x-auto py-1 text-xs md:text-sm font-bold border-t border-gray-100 pt-2">
            <a
              href="https://t.me/International_Maths"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 bg-gray-100 hover:bg-gray-200 rounded-lg border border-gray-300 whitespace-nowrap transition"
            >
              🌐 {isFa ? 'نظام آموزشی کشورها' : 'Educational Systems'}
            </a>

            <button
              onClick={() => scrollToSection('books')}
              className="px-3 py-1.5 bg-gray-100 hover:bg-gray-200 rounded-lg border border-gray-300 whitespace-nowrap transition"
            >
              📚 {isFa ? 'کتب آموزشی' : 'Books'}
            </button>

            <a
              href="https://t.me/International_Maths/110"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 bg-gray-100 hover:bg-gray-200 rounded-lg border border-gray-300 whitespace-nowrap transition"
            >
              💬 {isFa ? 'بازخورد تدریس' : 'Feedback'}
            </a>

            <button
              onClick={() => scrollToSection('about')}
              className="px-3 py-1.5 bg-gray-100 hover:bg-gray-200 rounded-lg border border-gray-300 whitespace-nowrap transition"
            >
              👤 {isFa ? 'درباره من' : 'About Me'}
            </button>

            <button
              onClick={() => scrollToSection('contact')}
              className="px-3 py-1.5 bg-gray-100 hover:bg-gray-200 rounded-lg border border-gray-300 whitespace-nowrap transition"
            >
              📞 {isFa ? 'ارتباط با استاد' : 'Contact'}
            </button>
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
