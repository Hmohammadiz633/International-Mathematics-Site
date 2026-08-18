'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  // مقدار اولیه را امن می‌خوانیم تا روی سرور خطا ندهد
  const [language, setLanguage] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('site_lang') || 'fa';
    }
    return 'fa';
  });

  useEffect(() => {
    const savedLang = localStorage.getItem('site_lang');
    if (savedLang) {
      setLanguage(savedLang);
    }
  }, []);

  const changeLanguage = (newLang) => {
    setLanguage(newLang);
    if (typeof window !== 'undefined') {
      localStorage.setItem('site_lang', newLang);
    }
  };

  const toggleLanguage = () => {
    const nextLang = language === 'fa' ? 'en' : 'fa';
    changeLanguage(nextLang);
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: changeLanguage, toggleLanguage }}>
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
