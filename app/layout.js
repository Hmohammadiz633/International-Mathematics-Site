import './globals.css';
import Navbar from '@/components/Navbar';

export const metadata = {
  title: 'آموزش بین‌المللی ریاضی و تدریس خصوصی GCSE Maths',
  description: 'سایت تخصصی آموزش بین‌المللی ریاضی، تدریس خصوصی ریاضی و دوره‌های تخصصی GCSE Maths با بالاترین کیفیت.',
  keywords: [
    'آموزش بین المللی ریاضی',
    'GCSE Maths',
    'تدریس خصوصی ریاضی',
    'ریاضی بین‌الملل'
  ],
  authors: [{ name: 'International Math' }],
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    title: 'آموزش بین‌المللی ریاضی و تدریس خصوصی GCSE Maths',
    description: 'سایت تخصصی آموزش بین‌المللی ریاضی، تدریس خصوصی ریاضی و دوره‌های تخصصی GCSE Maths.',
    url: 'https://internationalmaths.ir',
    siteName: 'International Math',
    locale: 'fa_IR',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased">
        {/* اضافه شدن منوی هوشمند در بالای تمام صفحات */}
        <Navbar />
        
        <main>{children}</main>
      </body>
    </html>
  );
}
