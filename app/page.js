import ContactButtons from '../components/ContactButtons';

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800" dir="rtl">
      
      {/* منوی بالای سایت (Header) */}
      <header className="bg-white border-b border-slate-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="font-bold text-xl text-slate-900">دکتر هادی محمدی</span>
          </div>
          
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600">
            <a href="#about" className="hover:text-blue-600 transition">درباره من</a>
            <a href="#books" className="hover:text-blue-600 transition">کتاب‌ها و جزوات</a>
            <a href="#services" className="hover:text-blue-600 transition">خدمات تدریس</a>
            <a href="#resume" className="hover:text-blue-600 transition">رزومه</a>
            <a href="#contact" className="hover:text-blue-600 transition">تماس با ما</a>
          </nav>

          <button className="text-xs font-semibold px-3 py-1.5 rounded-full border border-slate-200 text-slate-600 hover:bg-slate-50 transition">
            English 🌐
          </button>
        </div>
      </header>

      {/* بنر اصلی سرمه‌ای (Hero Section) */}
      <section className="bg-[#1e295d] text-white py-20 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="w-24 h-24 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6 border border-white/15 shadow-inner">
            <span className="text-4xl">🎓</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">دکتر هادی محمدی</h1>
          <p className="text-xl md:text-2xl text-slate-200 font-medium mb-3">عضو هیأت علمی دانشگاه و مدرس آنلاین ریاضی</p>
          <p className="text-sm md:text-base text-slate-300 opacity-90 mb-8">ویژه ایرانیان خارج از کشور (آمریکا، کانادا، اروپا، استرالیا و انگلستان)</p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#contact" className="bg-white text-slate-900 font-bold px-6 py-3.5 rounded-xl hover:bg-slate-100 transition shadow-lg">
              رزرو مشاوره و کلاس
            </a>
            <a href="#books" className="bg-[#3b82f6] text-white font-bold px-6 py-3.5 rounded-xl hover:bg-blue-600 transition shadow-lg">
              کتاب‌ها و جزوات
            </a>
          </div>
        </div>
      </section>

      {/* بخش درباره من */}
      <section id="about" className="max-w-5xl mx-auto my-12 px-4">
        <div className="bg-white rounded-3xl p-6 md:p-10 shadow-sm border border-slate-100">
          <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
            <span>👤</span> درباره من
          </h2>
          <p className="text-slate-600 leading-relaxed text-justify">
            دکتر هادی محمدی، با سال‌ها تجربه در تدریس مقاطع مختلف دانشگاهی و دبیرستان، آماده ارائه خدمات آموزشی و مشاوره تخصصی به دانشجویان و دانش‌آموزان عزیز به ویژه ایرانیان مقیم خارج از کشور است.
          </p>
        </div>
      </section>

      {/* بخش سوابق علمی و پژوهشی */}
      <section id="resume" className="max-w-5xl mx-auto my-12 px-4">
        <div className="bg-white rounded-3xl p-6 md:p-10 shadow-sm border border-slate-100">
          <div className="flex items-center justify-center gap-2 mb-8 text-slate-900">
            <span className="text-2xl text-amber-500">🎗️</span>
            <h2 className="text-2xl md:text-3xl font-bold">سوابق علمی و پژوهشی</h2>
          </div>
          
          <ul className="space-y-4 max-w-2xl mx-auto text-right">
            <li className="flex items-center justify-between text-base md:text-lg text-slate-700 border-b border-slate-100 pb-3">
              <span>دکتری تخصصی ریاضی از دانشگاه‌های برتر تهران</span>
              <span className="text-blue-600 font-bold">✓</span>
            </li>
            <li className="flex items-center justify-between text-base md:text-lg text-slate-700 border-b border-slate-100 pb-3">
              <span>عضو هیأت علمی و مدرس دانشگاه</span>
              <span className="text-blue-600 font-bold">✓</span>
            </li>
            <li className="flex items-center justify-between text-base md:text-lg text-slate-700 border-b border-slate-100 pb-3">
              <span>تألیف چندین مقاله علمی پژوهشی در ژورنال‌های معتبر بین‌المللی</span>
              <span className="text-blue-600 font-bold">✓</span>
            </li>
            <li className="flex items-center justify-between text-base md:text-lg text-slate-700">
              <span>مدرس دوره‌های تخصصی ریاضیات دانشگاهی و دبیرستان</span>
              <span className="text-blue-600 font-bold">✓</span>
            </li>
          </ul>
        </div>
      </section>

      {/* بخش ارتباط با استاد (همان بخش جدید۳تایی) */}
      <section id="contact" className="max-w-5xl mx-auto my-16 px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">ارتباط با استاد</h2>
        <p className="text-slate-500 mb-6 text-sm md:text-base">
          جهت رزرو وقت مشاوره، کلاس‌های آنلاین و ارسال پیام می‌توانید از طریق راه‌های زیر در ارتباط باشید:
        </p>

        <ContactButtons />
      </section>

      {/* فوتر سایت */}
      <footer className="bg-slate-900 text-slate-400 text-center py-6 text-sm border-t border-slate-800">
        <p>تمامی حقوق محفوظ است © 2026 دکتر هادی محمدی</p>
      </footer>

    </div>
  );
}
