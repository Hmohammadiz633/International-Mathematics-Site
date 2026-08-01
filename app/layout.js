import { Vazirmatn } from 'next/font/google';
import './globals.css';

// تنظیم فونت وزیرمتن برای کل پروژه
const vazirmatn = Vazirmatn({ 
  subsets: ['arabic', 'latin'],
  display: 'swap',
});

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body className={vazirmatn.className}>
        {children}
      </body>
    </html>
  );
}
