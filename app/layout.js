import { LanguageProvider } from '@/context/LanguageContext';
import './globals.css';

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
