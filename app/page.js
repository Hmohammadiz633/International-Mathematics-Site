import ContactButtons from '../components/ContactButtons';

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-800 font-sans" dir="rtl">
      
      {/* بخش هدر / بنر اصلی */}
      <section className="bg-slate-900 text-white py-16 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="w-20 h-20 bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-6 border border-slate-700">
            <span className="text-3xl">🎓</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mb-4">دکتر هادی محمدی</h1>
          <p className="text-lg md:text-xl text-slate-300 mb-2">عضو هیأت علمی دانشگاه و مدرس آنلاین ریاضی</p>
          <p className="text-sm md:text-base text-slate-400 mb-8">ویژه ایرانیان خارج از کشور (آمریکا، کانادا، اروپا، استرالیا و انگلستان)</p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#contact" className="bg-white text-slate-900 font-bold px-6 py-3 rounded-xl hover:bg-slate-100 transition">
              رزرو مشاوره و کلاس
            </a>
            <a href="#books" className="bg-blue-600 text-white font-bold px-6 py-3 rounded-xl hover:bg-blue-700 transition">
              کتاب‌ها و جزوات
            </a>
          </div>
        </div>
      </section>

      {/* بخش سوابق علمی و پژوهشی */}
      <section className="max-w-4xl mx-auto my-12 px-4">
        <div className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-slate-200">
          <div className="flex items-center justify-center gap-2 mb-6">
            <span className="text-blue-600 text-2xl">🎗️</span>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">سوابق علمی و پژوهشی</h2>
          </div>
          
          <ul className="space-y-4 max-w-2xl mx-auto text-right">
            <li className="flex items-center justify-between text-base md:text-lg text-slate-700 border-b border-slate-100 pb-3">
              <span>دکتری تخصصی ریاضی از دانشگاه‌های برتر تهران</span>
              <span className="text-blue-600 font-bold mr-2">✓</span>
            </li>
            <li className="flex items-center justify-between text-base md:text-lg text-slate-700 border-b border-slate-100 pb-3">
              <span>عضو هیأت علمی و مدرس دانشگاه</span>
              <span className="text-blue-600 font-bold mr-2">✓</span>
            </li>
            <li className="flex items-center justify-between text-base md:text-lg text-slate-700 border-b border-slate-100 pb-3">
              <span>تألیف چندین مقاله علمی پژوهشی در ژورنال‌های معتبر بین‌المللی</span>
              <span className="text-blue-600 font-bold mr-2">✓</span>
            </li>
            <li className="flex items-center justify-between text-base md:text-lg text-slate-700">
              <span>مدرس دوره‌های تخصصی ریاضیات دانشگاهی و دبیرستان</span>
              <span className="text-blue-600 font-bold mr-2">✓</span>
            </li>
          </ul>
        </div>
      </section>

      {/* بخش ارتباط با استاد */}
      <section id="contact" className="max-w-4xl mx-auto my-12 px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">ارتباط با استاد</h2>
        <p className="text-slate-500 mb-8 text-sm md:text-base">
          جهت رزرو وقت مشاوره، کلاس‌های آنلاین و ارسال پیام می‌توانید از طریق راه‌های زیر در ارتباط باشید:
        </p>

        {/* فراخوانی کامپوننت دکمه‌ها */}
        <ContactButtons />
      </section>

    </main>
  );
}
