import './globals.css'

export const metadata = {
  title: 'Dr. Hadi Mohammadi | دکتر هادی محمدی',
  description: 'عضو هیأت علمی دانشگاه و مدرس آنلاین ریاضی برای ایرانیان خارج از کشور',
}

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body className="bg-slate-50 text-slate-800 antialiased font-vazir">
        {children}
      </body>
    </html>
  )
}
