'use client';

import { useLanguage } from '@/context/LanguageContext';

export default function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    const newLang = language === 'fa' ? 'en' : 'fa';
    setLanguage(newLang);
  };

  return (
    <button 
      type="button"
      onClick={toggleLanguage}
      className="text-xs font-semibold px-3 py-1.5 rounded-full border border-slate-200 text-slate-700 bg-white hover:bg-slate-50 transition flex items-center gap-1 shadow-sm active:scale-95"
    >
      🌐 {language === 'fa' ? 'English' : 'فارسی'}
    </button>
  );
}
