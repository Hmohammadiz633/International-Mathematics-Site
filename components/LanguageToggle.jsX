'use client';
import { useState } from 'react';

export default function LanguageToggle({ onLanguageChange }) {
  const [lang, setLang] = useState('fa');

  const toggleLanguage = () => {
    const newLang = lang === 'fa' ? 'en' : 'fa';
    setLang(newLang);
    if (onLanguageChange) {
      onLanguageChange(newLang);
    }
  };

  return (
    <button 
      onClick={toggleLanguage}
      className="text-xs font-semibold px-3 py-1.5 rounded-full border border-slate-200 text-slate-700 bg-white hover:bg-slate-50 transition flex items-center gap-1 shadow-sm active:scale-95"
    >
      🌐 {lang === 'fa' ? 'English' : 'فارسی'}
    </button>
  );
}
