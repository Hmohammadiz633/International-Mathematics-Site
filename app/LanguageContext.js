'use client';

import { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('fa');

  // خواندن زبان ذخیره‌شده از مرورگر
  useEffect(() => {
    const savedLang = localStorage.getItem('site_lang');
    if (savedLang) {
      setLang(savedLang);
    }
  }, []);

  // تغییر زبان و ذخیره آن در localStorage
  const changeLanguage = (newLang) => {
    setLang(newLang);
    localStorage.setItem('site_lang', newLang);
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang: changeLanguage, isFa: lang === 'fa' }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
