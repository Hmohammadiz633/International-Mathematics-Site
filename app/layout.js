import { LanguageProvider } from '@/context/LanguageContext';
import './globals.css';

export const metadata = {
  title: 'International Mathematics Site',
  description: 'سایت مرجع ریاضیات بین‌الملل',
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
