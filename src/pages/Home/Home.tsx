import React from 'react';
import styles from './Home.module.css';

type HomeProps = { lang: 'en' | 'hi' | 'ru' | 'de' };

const content = {
  en: {
    heading: 'Welcome to Shiv Pujan Import Export',
    paragraph: 'Your trusted partner for seamless global trade. Shiv Pujan connects businesses worldwide, ensuring reliable import and export solutions for a variety of products.',
    button: 'Get Started',
  },
  hi: {
    heading: 'शिव पूजन इम्पोर्ट एक्सपोर्ट में आपका स्वागत है',
    paragraph: 'आपके वैश्विक व्यापार के लिए भरोसेमंद साथी। शिव पूजन विश्वभर के व्यवसायों को जोड़ता है, विभिन्न उत्पादों के लिए विश्वसनीय आयात-निर्यात समाधान सुनिश्चित करता है।',
    button: 'शुरू करें',
  },
  ru: {
    heading: 'Добро пожаловать в Shiv Pujan Import Export',
    paragraph: 'Ваш надежный партнер в международной торговле. Shiv Pujan соединяет бизнесы по всему миру, обеспечивая надежные решения для импорта и экспорта.',
    button: 'Начать',
  },
  de: {
    heading: 'Willkommen bei Shiv Pujan Import Export',
    paragraph: 'Ihr vertrauenswürdiger Partner für den weltweiten Handel. Shiv Pujan verbindet Unternehmen weltweit und bietet zuverlässige Import- und Exportlösungen.',
    button: 'Loslegen',
  },
};

const Home: React.FC<HomeProps> = ({ lang }) => (
  <div className={styles.container}>
    <img
      src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80"
      alt="Global Trade"
      className={styles.image}
    />
    <div className={styles.content}>
      <h1 className={styles.heading}>{content[lang].heading}</h1>
      <p className={styles.paragraph}>{content[lang].paragraph}</p>
      <button className={styles.button}>{content[lang].button}</button>
    </div>
  </div>
);

export default Home; 