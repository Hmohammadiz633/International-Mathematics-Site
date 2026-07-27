'use client';

import { useState } from 'react';

// لینک‌های اختصاصی مقاطع کمبریج (از ۱۴۰۰ تا ۱۴۰۵ در انتها)
const COUNTRY_GRADE_LINKS = {
  cambridge: {
    g7: "https://t.me/International_Maths/1400",
    g8: "https://t.me/International_Maths/1401",
    g9: "https://t.me/International_Maths/1402",
    g10: "https://t.me/International_Maths/1403",
    g11: "https://t.me/International_Maths/1404",
    g12: "https://t.me/International_Maths/1405",
  },
  australia: {
    g7: "https://t.me/International_Maths",
    g8: "https://t.me/International_Maths",
    g9: "https://t.me/International_Maths",
    g10: "https://t.me/International_Maths",
    g11: "https://t.me/International_Maths",
    g12: "https://t.me/International_Maths",
  },
  canada: {
    g7: "https://t.me/International_Maths",
    g8: "https://t.me/International_Maths",
    g9: "https://t.me/International_Maths",
    g10: "https://t.me/International_Maths",
    g11: "https://t.me/International_Maths",
    g12: "https://t.me/International_Maths",
  },
  uk: {
    g7: "https://t.me/International_Maths",
    g8: "https://t.me/International_Maths",
    g9: "https://t.me/International_Maths",
    g10: "https://t.me/International_Maths",
    g11: "https://t.me/International_Maths",
    g12: "https://t.me/International_Maths",
  },
  germany: {
    g7: "https://t.me/International_Maths",
    g8: "https://t.me/International_Maths",
    g9: "https://t.me/International_Maths",
    g10: "https://t.me/International_Maths",
    g11: "https://t.me/International_Maths",
    g12: "https://t.me/International_Maths",
  },
  california: {
    g7: "https://t.me/International_Maths",
    g8: "https://t.me/International_Maths",
    g9: "https://t.me/International_Maths",
    g10: "https://t.me/International_Maths",
    g11: "https://t.me/International_Maths",
    g12: "https://t.me/International_Maths",
  },
  turkey: {
    g7: "https://t.me/International_Maths",
    g8: "https://t.me/International_Maths",
    g9: "https://t.me/International_Maths",
    g10: "https://t.me/International_Maths",
    g11: "https://t.me/International_Maths",
    g12: "https://t.me/International_Maths",
  },
};

// ۱۱ کتاب دانشگاهی دقیقاً با لینک‌های ارسالی شما در گیت‌هاب
const UNIVERSITY_BOOKS = [
  { id: 'thomas', titleFa: 'ریاضی عمومی توماس', titleEn: "Thomas' Calculus", subFa: 'جلد ۱ و ۲', icon: '📘', link: 'https://t.me/International_Maths/88' },
  { id: 'stewart', titleFa: 'ریاضی عمومی استوارت', titleEn: "Stewart Calculus", subFa: 'مرجع کامل', icon: '📙', link: 'https://t.me/International_Maths/33' },
  { id: 'stewart_sol', titleFa: 'حل تمرین استوارت', titleEn: 'Stewart Solutions', subFa: 'پاسخ‌نامه تشریحی', icon: '📗', link: 'https://t.me/International_Maths/37' },
  { id: 'adams', titleFa: 'ریاضی عمومی آدامز', titleEn: 'Adams Calculus', subFa: 'مرجع آدامز', icon: '📕', link: 'https://t.me/International_Maths/1786' },
  { id: 'adams_sol', titleFa: 'حل تمرین آدامز', titleEn: 'Adams Solutions', subFa: 'حل تشریحی مسائل', icon: '📓', link: 'https://t.me/International_Maths/1787' },
  { id: 'math2', titleFa: 'ریاضی عمومی ۲', titleEn: 'General Math 2', subFa: 'چند متغیره و برداری', icon: '📚', link: 'https://t.me/International_Maths/64' },
  { id: 'numerical', titleFa: 'محاسبات عددی', titleEn: 'Numerical Analysis', subFa: 'روش‌ها و الگوریتم‌ها', icon: '💻', link: 'https://t.me/International_Maths/100' },
  { id: 'complex', titleFa: 'اعداد مختلط', titleEn: 'Complex Variables', subFa: 'آنالیز مختلط', icon: '🌀', link: 'https://t.me/International_Maths/92' },
  { id: 'linear_alg', titleFa: 'جبر خطی', titleEn: 'Linear Algebra', subFa: 'ماتریس و فضاهای برداری', icon: '📐', link: 'https://t.me/International_Maths/94' },
  { id: 'applied_math', titleFa: 'ریاضی کاربردی', titleEn: 'Applied Math', subFa: 'ویژه مهندسی', icon: '⚙️', link: 'https://t.me/International_Maths/103' },
  { id: 'stat_prob', titleFa: 'آمار و احتمالات مهندسی', titleEn: 'Engineering Statistics', subFa: 'تحلیل داده و احتمال', icon: '📊', link: 'https://t.me/International_Maths/86' },
];

const categories = [
  { id: 'cambridge', titleFa: 'کمبریج', titleEn: 'Cambridge', subtitleFa: 'سیستم آموزشی کمبریج', icon: '🎓', flag: '🇬🇧' },
  { id: 'australia', titleFa: 'استرالیا', titleEn: 'Australia', subtitleFa: 'ریاضیات استرالیا', icon: '🦘', flag: '🇦🇺' },
  { id: 'canada', titleFa: 'کانادا', titleEn: 'Canada', subtitleFa: 'ریاضیات کانادا', icon: '🍁', flag: '🇨🇦' },
  { id: 'uk', titleFa: 'انگلستان', titleEn: 'UK', subtitleFa: 'GCSE / A-Level', icon: '👑', flag: '🇬🇧' },
  { id: 'germany', titleFa: 'آلمان', titleEn: 'Germany', subtitleFa: 'Abitur / Gymnasium', icon: '🦅', flag: '🇩🇪' },
  { id: 'california', titleFa: 'کالیفرنیا', titleEn: 'California', subtitleFa: 'ریاضیات آمریکا', icon: '🐻', flag: '🇺🇸' },
  { id: 'turkey', titleFa: 'ترکیه', titleEn: 'Turkey', subtitleFa: 'YÖS / MEB', icon: '🌙', flag: '🇹🇷' },
  { id: 'university', titleFa: 'کتاب‌های دانشگاهی', titleEn: 'University Textbooks', subtitleFa: 'مرجع کتب دانشگاهی', icon: '🏛️', flag: '🎓' },
];

const schoolGrades = [
  { id: 'g7', titleFa: 'سال هفتم', titleEn: 'Grade 7', subFa: 'Year 7', icon: '📘' },
  { id: 'g8', titleFa: 'سال هشتم', titleEn: 'Grade 8', subFa: 'Year 8', icon: '📘' },
  { id: 'g9', titleFa: 'سال نهم', titleEn: 'Grade 9', subFa: 'Year 9', icon: '📘' },
  { id: 'g10', titleFa: 'سال دهم', titleEn: 'Grade 10', subFa: 'Year 10 / IGCSE', icon: '📚' },
  { id: 'g11', titleFa: 'سال یازدهم', titleEn: 'Grade 11', subFa: 'Year 11 / AS Level', icon: '📙' },
  { id: 'g12', titleFa: 'سال دوازدهم', titleEn: 'Grade 12', subFa: 'Year 12 / A Level', icon: '📗' },
];

export default function BooksSection({ lang = 'fa' }) {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const isFa = lang === 'fa';
  const active
