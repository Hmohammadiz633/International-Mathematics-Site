import React from 'react';

export default function ContactButtons() {
  return (
    <div style={styles.container}>
      <a
        href="https://t.me/International_Maths"
        target="_blank"
        rel="noopener noreferrer"
        style={{ ...styles.card, ...styles.telegram }}
      >
        <span style={styles.title}>ارتباط در تلگرام</span>
        <span style={styles.link}>@International_Maths</span>
      </a>

      <a
        href="https://instagram.com/hadi_mohammadi_zarandini"
        target="_blank"
        rel="noopener noreferrer"
        style={{ ...styles.card, ...styles.instagram }}
      >
        <span style={styles.title}>صفحه اینستاگرام</span>
        <span style={styles.link}>@hadi_mohammadi_zarandini</span>
      </a>

      <a
        href="mailto:hadi.mohammadi.zarandini@gmail.com"
        style={{ ...styles.card, ...styles.gmail }}
      >
        <span style={styles.title}>ارتباط از طریق ایمیل</span>
        <span style={styles.link}>hadi.mohammadi.zarandini@gmail.com</span>
      </a>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
    maxWidth: '450px',
    margin: '20px auto',
    direction: 'rtl',
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    padding: '12px 20px',
    borderRadius: '12px',
    textDecoration: 'none',
    color: '#ffffff',
    fontWeight: 'bold',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
  },
  title: {
    fontSize: '14px',
    opacity: 0.9,
  },
  link: {
    fontSize: '15px',
    direction: 'ltr',
    textAlign: 'right',
    marginTop: '4px',
  },
  telegram: { background: 'linear-gradient(135deg, #2AABEE, #229ED9)' },
  instagram: { background: 'linear-gradient(135deg, #833AB4, #FD1D1D, #FCB045)' },
  gmail: { background: 'linear-gradient(135deg, #EA4335, #BB001B)' },
};
