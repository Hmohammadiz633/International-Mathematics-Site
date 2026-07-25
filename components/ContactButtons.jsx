import React from 'react';

export default function ContactButtons() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '500px', margin: '24px auto 0 auto', direction: 'rtl' }}>
      
      {/* تلگرام */}
      <a href="https://t.me/International_Maths" target="_blank" rel="noopener noreferrer" 
         style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px', backgroundColor: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '16px', textDecoration: 'none', color: '#1e293b', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <span style={{ fontSize: '24px', backgroundColor: '#e0f2fe', padding: '8px', borderRadius: '12px' }}>✈️</span>
          <div style={{ textAlign: 'right' }}>
            <span style={{ display: 'block', fontSize: '12px', color: '#64748b' }}>آدرس تلگرام</span>
            <strong style={{ fontSize: '15px' }}>آموزش بین‌المللی ریاضیات</strong>
          </div>
        </div>
        <span style={{ fontSize: '12px', color: '#0284c7', backgroundColor: '#f0f9ff', padding: '6px 12px', borderRadius: '8px', fontFamily: 'monospace', direction: 'ltr' }}>@International_Maths</span>
      </a>

      {/* اینستاگرام */}
      <a href="https://instagram.com/Hadi_mohammadi_zarandini" target="_blank" rel="noopener noreferrer" 
         style={{ display: 'flex', alignItems: 'center', justifyBetween: 'space-between', padding: '16px', backgroundColor: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '16px', textDecoration: 'none', color: '#1e293b', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <span style={{ fontSize: '24px', backgroundColor: '#fce7f3', padding: '8px', borderRadius: '12px' }}>📸</span>
          <div style={{ textAlign: 'right' }}>
            <span style={{ display: 'block', fontSize: '12px', color: '#64748b' }}>آدرس اینستاگرام</span>
            <strong style={{ fontSize: '15px' }}>Hadi_mohammadi_zarandini</strong>
          </div>
        </div>
        <span style={{ fontSize: '12px', color: '#db2777', backgroundColor: '#fdf2f8', padding: '6px 12px', borderRadius: '8px', fontFamily: 'monospace', direction: 'ltr' }}>@Hadi_mohammadi_zarandini</span>
      </a>

      {/* جیمیل */}
      <a href="mailto:Hadi.mohammadi.zarandini@gmail.com" 
         style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px', backgroundColor: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '16px', textDecoration: 'none', color: '#1e293b', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <span style={{ fontSize: '24px', backgroundColor: '#fee2e2', padding: '8px', borderRadius: '12px' }}>✉️</span>
          <div style={{ textAlign: 'right' }}>
            <span style={{ display: 'block', fontSize: '12px', color: '#64748b' }}>آدرس جیمیل</span>
            <strong style={{ fontSize: '15px' }}>ارسال ایمیل به استاد</strong>
          </div>
        </div>
        <span style={{ fontSize: '11px', color: '#dc2626', backgroundColor: '#fef2f2', padding: '6px 10px', borderRadius: '8px', fontFamily: 'monospace', direction: 'ltr', wordBreak: 'break-all' }}>Hadi.mohammadi.zarandini@gmail.com</span>
      </a>

    </div>
  );
}
