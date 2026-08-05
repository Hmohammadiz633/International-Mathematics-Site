// app/layout.js
import './globals.css';

export const metadata = {
  title: 'آموزش بین‌المللی ریاضیات | International Math',
  description: 'سایت تخصصی آموزش ریاضیات بین‌الملل',
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
