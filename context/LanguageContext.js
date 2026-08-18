'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('fa'); // پیش‌فرض فارسی

  // خواندن زبان ذخیره‌شده از حافظه مرورگر هنگام بارگذاری اولیه
  useEffect(() => {
    const savedLang = localStorage.getItem('site_lang');
    if (savedLang) {
      setLanguage(savedLang);
    }
  }, []);

  const setAndSaveLanguage = (newLang) => {
    setLanguage(newLang);
    localStorage.setItem('site_lang', newLang);
  };

  const toggleLanguage = () => {
    const nextLang = language === 'fa' ? 'en' : 'fa';
    setAndSaveLanguage(nextLang);
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: setAndSaveLanguage, toggleLanguage }}>
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
