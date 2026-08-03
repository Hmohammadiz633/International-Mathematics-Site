import './globals.css';
import { LanguageProvider } from '@/context/LanguageContext';

export const metadata = {
  title: 'Math Resources',
  description: 'Educational Math Websites Around the World',
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa">
      <body>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
