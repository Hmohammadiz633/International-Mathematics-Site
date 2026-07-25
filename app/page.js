import React from 'react';

export default function Home() {
  return (
    <main>
      {/* سوابق علمی و پژوهشی */}
      <section style={{ padding: '20px', textAlign: 'center' }}>
        <h2 style={{ fontSize: '24px', fontWeight: 'bold' }}>سوابق علمی و پژوهشی</h2>
        <ul style={{ listStyle: 'none', padding: 0, marginTop: '15px' }}>
          <li>✓ دکتری تخصصی ریاضی از دانشگاه‌های برتر تهران</li>
          <li>✓ عضو هیأت علمی و مدرس دانشگاه</li>
          <li>✓ تألیف چندین مقاله علمی پژوهشی در ژورنال‌های معتبر بین‌المللی</li>
          <li>✓ مدرس دوره‌های تخصصی ریاضیات دانشگاهی و دبیرستان</li>
        </ul>
      </section>

      {/* ارتباط با استاد */}
      <section style={{ padding: '40px 20px', textAlign: 'center' }}>
        <h2 style={{ fontSize: '28px', fontWeight: 'bold', marginBottom: '10px' }}>ارتباط با استاد</h2>
        <p style={{ color: '#666', marginBottom: '25px' }}>
          جهت رزرو وقت مشاوره، کلاس‌های آنلاین و ارسال پیام می‌توانید از طریق راه‌های زیر در ارتباط باشید:
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', maxWidth: '450px', margin: '0 auto', direction: 'rtl' }}>
          
          {/* تلگرام */}
          <a 
            href="https://t.me/International_Maths" 
            target="_blank" 
            rel="noopener noreferrer" 
            style={{ display: 'flex', flexDirection: 'column', padding: '12px 20px', borderRadius: '12px', textDecoration: 'none', color: '#fff', fontWeight: 'bold', background: 'linear-gradient(135deg, #2AABEE, #229ED9)' }}
          >
            <span style={{ fontSize: '14px', opacity: 0.9 }}>ارتباط در تلگرام</span>
            <span style={{ fontSize: '15px', direction: 'ltr', textAlign: 'right', marginTop: '4px' }}>@International_Maths</span>
          </a>

          {/* اینستاگرام */}
          <a 
            href="https://instagram.com/hadi_mohammadi_zarandini" 
            target="_blank" 
            rel="noopener noreferrer" 
            style={{ display: 'flex', flexDirection: 'column', padding: '12px 20px', borderRadius: '12px', textDecoration: 'none', color: '#fff', fontWeight: 'bold', background: 'linear-gradient(135deg, #833AB4, #FD1D1D, #FCB045)' }}
          >
            <span style={{ fontSize: '14px', opacity: 0.9 }}>صفحه اینستاگرام</span>
            <span style={{ fontSize: '15px', direction: 'ltr', textAlign: 'right', marginTop: '4px' }}>@hadi_mohammadi_zarandini</span>
          </a>

          {/* جیمیل */}
          <a 
            href="mailto:hadi.mohammadi.zarandini@gmail.com" 
            style={{ display: 'flex', flexDirection: 'column', padding: '12px 20px', borderRadius: '12px', textDecoration: 'none', color: '#fff', fontWeight: 'bold', background: 'linear-gradient(135deg, #EA4335, #BB001B)' }}
          >
            <span style={{ fontSize: '14px', opacity: 0.9 }}>ارتباط از طریق ایمیل</span>
            <span style={{ fontSize: '15px', direction: 'ltr', textAlign: 'right', marginTop: '4px' }}>hadi.mohammadi.zarandini@gmail.com</span>
          </a>

        </div>
      </section>
    </main>
  );
}
