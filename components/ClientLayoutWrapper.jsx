'use client';

import { useEffect } from 'react';
import { useLanguage } from '@/context/LanguageContext';

export default function ClientLayoutWrapper({ children }) {
  const { language } = useLanguage();

  useEffect(() => {
    const root = document.documentElement;
    if (language === 'fa') {
      root.setAttribute('dir', 'rtl');
      root.setAttribute('lang', 'fa');
    } else {
      root.setAttribute('dir', 'ltr');
      root.setAttribute('lang', 'en');
    }
  }, [language]);

  return <>{children}</>;
}
