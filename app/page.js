'use client';

import { useState } from 'react';
import BooksSection from '@/components/BooksSection';
import LanguageToggle from '@/components/LanguageToggle';
import ContactButtons from '@/components/ContactButtons';

export default function Home() {
  const [lang, setLang] = useState('fa');

  return (
    <main className="min-h-screen bg-sky-300 text-black p-4 md:p-8">
      {/* هدر و تغییر زبان */}
      <header className="max-w-6xl mx-auto flex justify-between items-center mb-8 bg-sky-400 p-4 rounded-2xl border-2 border-black shadow-lg">
        <h1 className="text-xl md:text-2xl font-black text-black">
          {lang === 'fa' ? 'آموزش بین‌المللی ریاضیات' : 'International Mathematics'}
        </h1>
        <LanguageToggle lang={lang} setLang={setLang} />
      </header>

      {/* بخش کتاب‌ها */}
      <BooksSection lang={lang} />

      {/* دکمه‌های ارتباطی */}
      <ContactButtons lang={lang} />
    </main>
  );
}
