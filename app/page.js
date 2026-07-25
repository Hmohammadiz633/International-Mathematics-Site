import ContactButtons from '../components/ContactButtons';

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans" dir="rtl">
      
      {/* منوی بالای سایت */}
      <header className="bg-white border-b border-slate-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="font-bold text-xl text-[#1e295d]">دکتر هادی محمدی</span>
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

      {/* ۱. بنر اصلی سرمه‌ای (Hero Section) */}
      <section className="bg-[#1e295d] text-white py-20 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="w-24 h-24 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6 border border-white/15">
            <span className="text-4xl">🎓</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">دکتر هادی محمدی</h1>
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

      {/* ۲. بخش درباره من */}
      <section id="about" className="max-w-5xl mx-auto my-12 px-4">
        <div className="bg-white rounded-3xl p-6 md:p-10 shadow-sm border border-slate-100">
          <h2 className="text-2xl font-bold text-[#1e295d] mb-4 flex items-center gap-2">
            <span>👤</span> درباره من
          </h2>
          <p className="text-slate-600 leading-relaxed text-justify text-base md:text-lg">
            اینجانب دکتر هادی محمدی، دارای مدرک دکتری تخصصی ریاضی و عضو هیأت علمی یکی از دانشگاه‌های تهران هستم. با سال‌ها تجربه در امر تدریس دانشگاهی و مدارس برتر، تخصصی ویژه‌ای در آموزش آنلاین ریاضیات (از مقطع دبیرستان تا دانشگاه، شامل سیستم‌های IB, AP, A-Level و دروس دانشگاهی) به دانش‌آموزان و دانشجویان ایرانی مقیم خارج از کشور دارم.
          </p>
        </div>
      </section>

      {/* ۳. بخش کتاب‌ها و جزوات آموزشی */}
      <section id="books" className="max-w-5xl mx-auto my-16 px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-[#1e295d] mb-2 flex items-center justify-center gap-2">
          <span>📖</span> کتاب‌ها و جزوات آموزشی
        </h2>
        <p className="text-slate-500 mb-8 text-sm md:text-base">دانلود فایل‌های PDF کتب و جزوات تألیفی و تدریس‌شده</p>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-slate-100 flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold text-[#1e295d] mb-3">ریاضیات پیشرفته دبیرستان و آزمون‌های بین‌المللی</h3>
              <p className="text-slate-500 text-sm mb-6">شامل درسنامه کامل، مثال‌های حل‌شده و تمرین‌های استاندارد.</p>
            </div>
            <a href="#contact" className="inline-flex items-center justify-center gap-2 text-blue-600 font-bold text-sm bg-blue-50 py-3 px-4 rounded-xl hover:bg-blue-100 transition">
              <span>📄</span> دانلود کتاب / جزوه نمونه (PDF)
            </a>
          </div>

          <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-slate-100 flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold text-[#1e295d] mb-3">جزوه اختصاصی ریاضی دانشگاهی (عمومی و پایه)</h3>
              <p className="text-slate-500 text-sm mb-6">مجموعه نکات و تست‌های تألیفی جهت آمادگی دانشجویان.</p>
            </div>
            <a href="#contact" className="inline-flex items-center justify-center gap-2 text-blue-600 font-bold text-sm bg-blue-50 py-3 px-4 rounded-xl hover:bg-blue-100 transition">
              <span>📄</span> دانلود کتاب / جزوه نمونه (PDF)
            </a>
          </div>
        </div>
      </section>

      {/* ۴. بخش خدمات تدریس آنلاین */}
      <section id="services" className="max-w-5xl mx-auto my-16 px-4">
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-100 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1e295d] mb-4">خدمات تدریس آنلاین</h2>
          <p className="text-slate-600 text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
            برگزاری کلاس‌های خصوصی و نیمه‌خصوصی ریاضی با متدهای نوین آموزشی و متناسب با سیستم آموزشی کشور محل اقامت شما.
          </p>
        </div>
      </section>

      {/* ۵. بخش سوابق علمی و پژوهشی */}
      <section id="resume" className="max-w-5xl mx-auto my-16 px-4">
        <div className="bg-white rounded-3xl p-6 md:p-10 shadow-sm border border-slate-100">
          <div className="flex items-center justify-center gap-2 mb-8 text-[#1e295d]">
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

      {/* ۶. بخش جدید ارتباط با استاد (۳ کادر اختصاصی) */}
      <section id="contact" className="max-w-5xl mx-auto my-16 px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-[#1e295d] mb-3">ارتباط با استاد</h2>
        <p className="text-slate-500 mb-6 text-sm md:text-base">
          جهت رزرو وقت مشاوره، کلاس‌های آنلاین و ارسال پیام می‌توانید از طریق راه‌های زیر در ارتباط باشید:
        </p>

        {/* فراخوانی ۳ کادر ارتباطی */}
        <ContactButtons />
      </section>

      {/* فوتر سایت */}
      <footer className="bg-[#0f172a] text-slate-400 text-center py-6 text-sm">
        <p>تمامی حقوق محفوظ است © 2026 دکتر هادی محمدی</p>
      </footer>

    </div>
  );
}
