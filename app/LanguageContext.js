'use client';

import { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('fa');

  // دریافت زبان ذخیره‌شده از مرورگر
  useEffect(() => {
    const savedLang = localStorage.getItem('site_lang');
    if (savedLang) {
      setLang(savedLang);
    }
  }, []);

  // تغییر زبان و ذخیره آن در مرورگر
  const changeLanguage = (newLang) => {
    setLang(newLang);
    localStorage.setItem('site_lang', newLang);
  };

  const isFa = lang === 'fa';

  return (
    <LanguageContext.Provider value={{ lang, changeLanguage, isFa }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
