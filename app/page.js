import ContactButtons from '../components/ContactButtons';

export default function Home() {
  return (
    <main style={{ minHeight: '100vh', backgroundColor: '#f8fafc', color: '#1e293b', fontFamily: 'sans-serif' }} dir="rtl">
      
      {/* هدر سایت */}
      <section style={{ backgroundColor: '#0f172a', color: '#ffffff', padding: '60px 16px', textAlign: 'center' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div style={{ width: '80px', height: '80px', backgroundColor: '#1e293b', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px auto', fontSize: '32px' }}>🎓</div>
          <h1 style={{ fontSize: '36px', fontWeight: 'bold', marginBottom: '16px' }}>دکتر هادی محمدی</h1>
          <p style={{ fontSize: '18px', color: '#cbd5e1', marginBottom: '8px' }}>عضو هیأت علمی دانشگاه و مدرس آنلاین ریاضی</p>
          <p style={{ fontSize: '14px', color: '#94a3b8', marginBottom: '32px' }}>ویژه ایرانیان خارج از کشور (آمریکا، کانادا، اروپا، استرالیا و انگلستان)</p>
        </div>
      </section>

      {/* سوابق علمی و پژوهشی */}
      <section style={{ maxWidth: '800px', margin: '40px auto', padding: '0 16px' }}>
        <div style={{ backgroundColor: '#ffffff', borderRadius: '20px', padding: '32px 24px', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
          <h2 style={{ fontSize: '24px', fontWeight: 'bold', textAlign: 'center', marginBottom: '24px', color: '#0f172a' }}>🎗️ سوابق علمی و پژوهشی</h2>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, lineHeight: '2.5', fontSize: '16px' }}>
            <li style={{ borderBottom: '1px solid #f1f5f9', display: 'flex', justifyContent: 'space-between' }}><span>دکتری تخصصی ریاضی از دانشگاه‌های برتر تهران</span> <strong style={{ color: '#2563eb' }}>✓</strong></li>
            <li style={{ borderBottom: '1px solid #f1f5f9', display: 'flex', justifyContent: 'space-between' }}><span>عضو هیأت علمی و مدرس دانشگاه</span> <strong style={{ color: '#2563eb' }}>✓</strong></li>
            <li style={{ borderBottom: '1px solid #f1f5f9', display: 'flex', justifyContent: 'space-between' }}><span>تألیف چندین مقاله علمی پژوهشی در ژورنال‌های معتبر بین‌المللی</span> <strong style={{ color: '#2563eb' }}>✓</strong></li>
            <li style={{ display: 'flex', justifyContent: 'space-between' }}><span>مدرس دوره‌های تخصصی ریاضیات دانشگاهی و دبیرستان</span> <strong style={{ color: '#2563eb' }}>✓</strong></li>
          </ul>
        </div>
      </section>

      {/* بخش ارتباط با استاد */}
      <section style={{ maxWidth: '800px', margin: '40px auto', padding: '0 16px', textAlign: 'center' }}>
        <h2 style={{ fontSize: '28px', fontWeight: 'bold', color: '#0f172a', marginBottom: '8px' }}>ارتباط با استاد</h2>
        <p style={{ color: '#64748b', fontSize: '15px' }}>جهت رزرو وقت مشاوره، کلاس‌های آنلاین و ارسال پیام می‌توانید از طریق راه‌های زیر در ارتباط باشید:</p>
        
        <ContactButtons />
      </section>

    </main>
  );
}
