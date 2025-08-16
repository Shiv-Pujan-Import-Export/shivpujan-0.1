import React from 'react';
import styles from './Contact.module.css';

type Lang = 'en' | 'hi' | 'ru' | 'de';

type ContactProps = {
  lang: Lang;
};

const content: Record<
  Lang,
  {
    heading: string;
    paragraph: string;
    name: string;
    email: string;
    message: string;
    button: string;
    info: {
      email: string;
      phone: string;
      address: string;
      emailLabel: string;
      phoneLabel: string;
      addressLabel: string;
    };
  }
> = {
  en: {
    heading: 'Contact Us',
    paragraph:
      'We’d love to hear from you! Reach out for business inquiries or partnership opportunities.',
    name: 'Your Name',
    email: 'Your Email',
    message: 'Your Message',
    button: 'Send Message',
    info: {
      email: 'info@shippujan.com',
      phone: '+91 98765 43210',
      address: '123, Trade Avenue, Mumbai, India',
      emailLabel: 'Email',
      phoneLabel: 'Phone',
      addressLabel: 'Address',
    },
  },
  hi: {
    heading: 'संपर्क करें',
    paragraph:
      'हम आपसे सुनना पसंद करेंगे! व्यापारिक पूछताछ या साझेदारी के लिए संपर्क करें।',
    name: 'आपका नाम',
    email: 'आपका ईमेल',
    message: 'आपका संदेश',
    button: 'संदेश भेजें',
    info: {
      email: 'info@shippujan.com',
      phone: '+91 98765 43210',
      address: '123, ट्रेड एवेन्यू, मुंबई, भारत',
      emailLabel: 'ईमेल',
      phoneLabel: 'फ़ोन',
      addressLabel: 'पता',
    },
  },
  ru: {
    heading: 'Свяжитесь с нами',
    paragraph:
      'Мы будем рады услышать от вас! Свяжитесь с нами по вопросам сотрудничества или деловых предложений.',
    name: 'Ваше имя',
    email: 'Ваш email',
    message: 'Ваше сообщение',
    button: 'Отправить сообщение',
    info: {
      email: 'info@shippujan.com',
      phone: '+91 98765 43210',
      address: '123, Trade Avenue, Мумбаи, Индия',
      emailLabel: 'Эл. почта',
      phoneLabel: 'Телефон',
      addressLabel: 'Адрес',
    },
  },
  de: {
    heading: 'Kontaktieren Sie uns',
    paragraph:
      'Wir würden uns freuen, von Ihnen zu hören! Kontaktieren Sie uns für geschäftliche Anfragen oder Partnerschaften.',
    name: 'Ihr Name',
    email: 'Ihre E-Mail',
    message: 'Ihre Nachricht',
    button: 'Nachricht senden',
    info: {
      email: 'info@shippujan.com',
      phone: '+91 98765 43210',
      address: '123, Trade Avenue, Mumbai, Indien',
      emailLabel: 'E-Mail',
      phoneLabel: 'Telefon',
      addressLabel: 'Adresse',
    },
  },
};

const Contact: React.FC<ContactProps> = ({ lang }) => {
  const t = content[lang] ?? content.en;

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.heading}>{t.heading}</h1>
        <p className={styles.paragraph}>{t.paragraph}</p>
        <form className={styles.form}>
          <input type="text" placeholder={t.name} required className={styles.input} />
          <input type="email" placeholder={t.email} required className={styles.input} />
          <textarea placeholder={t.message} required rows={4} className={styles.textarea} />
          <button type="submit" className={styles.button}>
            {t.button}
          </button>
        </form>
        <div className={styles.contactInfo}>
          <div>
            <strong>{t.info.emailLabel}:</strong> {t.info.email}
          </div>
          <div>
            <strong>{t.info.phoneLabel}:</strong> {t.info.phone}
          </div>
          <div>
            <strong>{t.info.addressLabel}:</strong> {t.info.address}
          </div>
        </div>
      </div>
      <img
        src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80"
        alt="Contact"
        className={styles.image}
      />
    </div>
  );
};

export default Contact;
