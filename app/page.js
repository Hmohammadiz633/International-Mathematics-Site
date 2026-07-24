'use client';
import { useState } from 'react';
import { BookOpen, GraduationCap, Globe, FileText, User, Award, CheckCircle } from 'lucide-react';

export default function Home() {
  const [lang, setLang] = useState('fa');

  const content = {
    fa: {
      name: 'دکتر هادی محمدی',
      title: 'عضو هیأت علمی دانشگاه و مدرس آنلاین ریاضی',
      subtitle: 'ویژه ایرانیان خارج از کشور (آمریکا، کانادا، اروپا و انگلستان)',
      aboutTitle: 'درباره من',
      aboutText: 'اینجانب دکتر هادی محمدی، دارای مدرک دکتری تخصصی ریاضی و عضو هیأت علمی یکی از دانشگاه‌های تهران هستم. با سال‌ها تجربه در امر تدریس دانشگاهی و مدارس برتر، تخصصی ویژه‌ای در آموزش آنلاین ریاضیات (از مقطع دبیرستان تا دانشگاه، شامل سیستم‌های IB, AP, A-Level و دروس دانشگاهی) به دانش‌آموزان و دانشجویان ایرانی مقیم خارج از کشور دارم.',
      booksTitle: 'کتاب‌ها و جزوات آموزشی',
      booksSub: 'دانلود فایل‌های PDF کتب و جزوات تألیفی و تدریس‌شده',
      classesTitle: 'خدمات تدریس آنلاین',
      classesDesc: 'برگزاری کلاس‌های خصوصی و نیمه‌خصوصی ریاضی با متدهای نوین آموزشی و متناسب با سیستم آموزشی کشور محل اقامت شما.',
      cvTitle: 'سوابق علمی و پژوهشی',
      cvList: [
        'دکتری تخصصی ریاضی از دانشگاه‌های برتر تهران',
        'عضو هیأت علمی و مدرس دانشگاه',
        'تألیف چندین مقاله علمی پژوهشی در ژورنال‌های معتبر بین‌المللی',
        'مدرس دوره‌های تخصصی ریاضیات دانشگاهی و دبیرستان'
      ],
      contactTitle: 'ارتباط با استاد',
      contactText: 'جهت رزرو وقت مشاوره و کلاس‌های آنلاین، می‌توانید از طریق ایمیل دانشگاهی با من در ارتباط باشید.',
      email: 'ایمیل دانشگاهی: h.mohammadi@university.ac.ir',
      footer: 'تمامی حقوق محفوظ است © 2026 دکتر هادی محمدی',
      menu: {
        about: 'درباره من',
        books: 'کتاب‌ها و جزوات',
        classes: 'خدمات تدریس',
        cv: 'رزومه',
        contact: 'تماس با ما'
      },
      sampleBook: 'دانلود کتاب / جزوه نمونه (PDF)'
    },
    en: {
      name: 'Dr. Hadi Mohammadi',
      title: 'University Faculty Member & Online Math Tutor',
      subtitle: 'Specialized for Iranian Students Abroad (USA, Canada, Europe, UK)',
      aboutTitle: 'About Me',
      aboutText: 'I am Dr. Hadi Mohammadi, holding a Ph.D. in Mathematics and serving as a faculty member at a university in Tehran. With years of experience in academic and advanced teaching, I specialize in online mathematics education (from high school to university, including IB, AP, A-Level, and college-level courses) for Iranian students living abroad.',
      booksTitle: 'Books & Resources',
      booksSub: 'Download PDF files of authored and taught textbooks and handouts',
      classesTitle: 'Online Tutoring Services',
      classesDesc: 'Private and semi-private online math classes using modern teaching methods tailored to the educational system of your country of residence.',
      cvTitle: 'Academic & Research Background',
      cvList: [
        'Ph.D. in Mathematics from top universities in Tehran',
        'University Faculty Member & Lecturer',
        'Author of multiple research papers in international journals',
        'Instructor of specialized university and high school mathematics'
      ],
      contactTitle: 'Contact Me',
      contactText: 'To book a consultation session and online classes, you can contact me via institutional email.',
      email: 'Academic Email: h.mohammadi@university.ac.ir',
      footer: 'All rights reserved © 2026 Dr. Hadi Mohammadi',
      menu: {
        about: 'About Me',
        books: 'Books & PDFs',
        classes: 'Classes',
        cv: 'CV',
        contact: 'Contact'
      },
      sampleBook: 'Download Sample Book / PDF'
    }
  };

  const t = content[lang];

  return (
    <div className={`min-h-screen bg-slate-50 text-slate-800 ${lang === 'fa' ? 'rtl' : 'ltr'}`} dir={lang === 'fa' ? 'rtl' : 'ltr'}>
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="font-bold text-lg text-blue-900">
            {lang === 'fa' ? 'دکتر هادی محمدی' : 'Dr. Hadi Mohammadi'}
          </div>
          
          <nav className="hidden md:flex gap-6 text-sm font-medium text-slate-600">
            <a href="#about" className="hover:text-blue-600 transition">{t.menu.about}</a>
            <a href="#books" className="hover:text-blue-600 transition">{t.menu.books}</a>
            <a href="#classes" className="hover:text-blue-600 transition">{t.menu.classes}</a>
            <a href="#cv" className="hover:text-blue-600 transition">{t.menu.cv}</a>
            <a href="#contact" className="hover:text-blue-600 transition">{t.menu.contact}</a>
          </nav>

          <button 
            onClick={() => setLang(lang === 'fa' ? 'en' : 'fa')}
            className="flex items-center gap-1 bg-blue-50 text-blue-700 px-3 py-1.5 rounded-full text-sm font-semibold hover:bg-blue-100 transition"
          >
            <Globe size={16} />
            {lang === 'fa' ? 'English' : 'فارسی'}
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-950 to-indigo-900 text-white py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="w-32 h-32 bg-white/10 rounded-full mx-auto mb-6 flex items-center justify-center border-2 border-white/20 shadow-inner">
            <GraduationCap size={64} className="text-blue-200" />
          </div>
          <h1 className="text-4xl md:text-5xl font-black mb-4">{t.name}</h1>
          <p className="text-xl md:text-2xl text-blue-200 font-medium mb-2">{t.title}</p>
          <p className="text-slate-300 max-w-2xl mx-auto mb-8">{t.subtitle}</p>
          <div className="flex justify-center gap-4">
            <a href="#contact" className="bg-white text-blue-950 font-bold px-6 py-3 rounded-lg shadow hover:bg-blue-50 transition">
              {lang === 'fa' ? 'رزرو مشاوره و کلاس' : 'Book a Session'}
            </a>
            <a href="#books" className="bg-blue-600 text-white font-bold px-6 py-3 rounded-lg shadow hover:bg-blue-500 transition">
              {t.menu.books}
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 max-w-4xl mx-auto">
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
          <h2 className="text-2xl font-bold text-blue-950 mb-4 flex items-center gap-2">
            <User className="text-blue-600" /> {t.aboutTitle}
          </h2>
          <p className="text-slate-700 leading-relaxed text-lg">{t.aboutText}</p>
        </div>
      </section>

      {/* Books & PDFs Section */}
      <section id="books" className="py-16 px-4 bg-slate-100">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-blue-950 mb-2 flex items-center justify-center gap-2">
              <BookOpen className="text-blue-600" /> {t.booksTitle}
            </h2>
            <p className="text-slate-600">{t.booksSub}</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 flex flex-col justify-between">
              <div>
                <h3 className="font-bold text-lg text-slate-900 mb-2">ریاضیات پیشرفته دبیرستان و آزمون‌های بین‌المللی</h3>
                <p className="text-slate-600 text-sm mb-4">شامل درسنامه کامل، مثال‌های حل‌شده و تمرین‌های استاندارد.</p>
              </div>
              <a href="#" className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-800 text-sm">
                <FileText size={16} /> {t.sampleBook} (PDF)
              </a>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 flex flex-col justify-between">
              <div>
                <h3 className="font-bold text-lg text-slate-900 mb-2">جزوه اختصاصی ریاضی دانشگاهی (عمومی و پایه)</h3>
                <p className="text-slate-600 text-sm mb-4">مجموعه نکات و تست‌های تالیفی جهت آمادگی دانشجویان.</p>
              </div>
              <a href="#" className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-800 text-sm">
                <FileText size={16} /> {t.sampleBook} (PDF)
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Classes Section */}
      <section id="classes" className="py-16 px-4 max-w-4xl mx-auto">
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 text-center">
          <h2 className="text-2xl font-bold text-blue-950 mb-4">{t.classesTitle}</h2>
          <p className="text-slate-700 text-lg max-w-2xl mx-auto">{t.classesDesc}</p>
        </div>
      </section>

      {/* CV Section */}
      <section id="cv" className="py-16 px-4 bg-slate-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-blue-950 mb-6 flex items-center gap-2">
            <Award className="text-blue-600" /> {t.cvTitle}
          </h2>
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
            <ul className="space-y-3">
              {t.cvList.map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-slate-700">
                  <CheckCircle className="text-blue-600 shrink-0 mt-1" size={18} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 max-w-4xl mx-auto text-center">
        <h2 className="text-2xl font-bold text-blue-950 mb-4">{t.contactTitle}</h2>
        <p className="text-slate-600 mb-6">{t.contactText}</p>
        <div className="bg-blue-950 text-white p-6 rounded-2xl inline-block shadow-md">
          <p className="font-medium text-lg">{t.email}</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-6 text-center text-sm">
        <p>{t.footer}</p>
      </footer>
    </div>
  );
}
