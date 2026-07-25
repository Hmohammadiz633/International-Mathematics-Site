import React from 'react';

export default function ContactButtons() {
  return (
    <div className="flex flex-col gap-4 w-full max-w-lg mx-auto mt-6" dir="rtl">
      
      {/* کادر ۱: تلگرام */}
      <a
        href="https://t.me/International_Maths"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-between p-4 bg-white border border-slate-200 rounded-2xl shadow-sm hover:shadow-md transition-all duration-200 group"
      >
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-sky-100 flex items-center justify-center text-sky-600 font-bold text-xl">
            ✈️
          </div>
          <div className="text-right">
            <span className="block text-xs text-slate-500 font-medium mb-0.5">آدرس تلگرام</span>
            <span className="text-sm md:text-base font-bold text-slate-800">آموزش بین‌المللی ریاضیات</span>
          </div>
        </div>
        <span className="text-xs font-mono text-sky-600 bg-sky-50 px-3 py-1.5 rounded-lg ltr">
          @International_Maths
        </span>
      </a>

      {/* کادر ۲: اینستاگرام */}
      <a
        href="https://instagram.com/Hadi_mohammadi_zarandini"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-between p-4 bg-white border border-slate-200 rounded-2xl shadow-sm hover:shadow-md transition-all duration-200 group"
      >
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-pink-100 flex items-center justify-center text-pink-600 font-bold text-xl">
            📸
          </div>
          <div className="text-right">
            <span className="block text-xs text-slate-500 font-medium mb-0.5">آدرس اینستاگرام</span>
            <span className="text-sm md:text-base font-bold text-slate-800">Hadi_mohammadi_zarandini</span>
          </div>
        </div>
        <span className="text-xs font-mono text-pink-600 bg-pink-50 px-3 py-1.5 rounded-lg ltr">
          @Hadi_mohammadi_zarandini
        </span>
      </a>

      {/* کادر ۳: جیمیل */}
      <a
        href="mailto:Hadi.mohammadi.zarandini@gmail.com"
        className="flex items-center justify-between p-4 bg-white border border-slate-200 rounded-2xl shadow-sm hover:shadow-md transition-all duration-200 group"
      >
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-red-100 flex items-center justify-center text-red-600 font-bold text-xl">
            ✉️
          </div>
          <div className="text-right">
            <span className="block text-xs text-slate-500 font-medium mb-0.5">آدرس جیمیل</span>
            <span className="text-sm md:text-base font-bold text-slate-800">ارسال ایمیل به استاد</span>
          </div>
        </div>
        <span className="text-xs font-mono text-red-600 bg-red-50 px-2.5 py-1.5 rounded-lg ltr break-all">
          Hadi.mohammadi.zarandini@gmail.com
        </span>
      </a>

    </div>
  );
}
