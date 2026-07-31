import './globals.css';

export const metadata = {
  title: 'تدریس بین‌المللی ریاضیات | دکتر هادی محمدی',
  description: 'تدریس تخصصی و مفهومی ریاضیات نظام‌های آموزشی آمریکا، کانادا، انگلیس، استرالیا، آلمان و ترکیه توسط دکتر هادی محمدی عضو هیات علمی دانشگاه.',
  keywords: [
    'تدریس ریاضی بین الملل',
    'تدریس آنلاین ریاضی خارج از کشور',
    'ریاضی آمریکا',
    'ریاضی کانادا',
    'ریاضی انگلیس A Level GCSE',
    'دکتر هادی محمدی',
    'استاد ریاضی بین المللی'
  ],
  authors: [{ name: 'دکتر هادی محمدی' }],
  metadataBase: new URL('https://your-domain.com'), // آدرس دامنه واقعی خود را بگذارید
  openGraph: {
    title: 'تدریس بین‌المللی ریاضیات | دکتر هادی محمدی',
    description: 'آموزش تخصصی ریاضیات مدارس و دانشگاه‌های خارج از کشور',
    url: 'https://your-domain.com',
    siteName: 'International Math Tutoring',
    images: [
      {
        url: '/profile.jpg',
        width: 800,
        height: 600,
        alt: 'دکتر هادی محمدی مدرس ریاضیات بین‌الملل',
      },
    ],
    locale: 'fa_IR',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
