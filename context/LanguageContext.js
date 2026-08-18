'use client';

import { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('fa');

  // خواندن زبان ذخیره‌شده از مرورگر هنگام لود اولیه
  useEffect(() => {
    const savedLang = localStorage.getItem('site_language');
    if (savedLang) {
      setLanguage(savedLang);
    }
  }, []);

  // ذخیره کردن تغییرات زبان در حافظه مرورگر
  const handleSetLanguage = (lang) => {
    setLanguage(lang);
    localStorage.setItem('site_language', lang);
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
