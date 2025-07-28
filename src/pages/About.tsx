import React from 'react';
import styles from './About.module.css';

type Lang = 'en' | 'hi' | 'ru' | 'de';

type AboutProps = {
  lang: Lang;
};

const content: Record<Lang, { heading: string; paragraph: string; list: string[] }> = {
  en: {
    heading: 'About Us',
    paragraph:
      'Shiv Pujan Import Export was founded with a vision to bridge markets and cultures through global trade. Our mission is to provide reliable, transparent, and efficient import-export services, empowering businesses to grow beyond borders.',
    list: [
      'Over 10 years of experience in international trade',
      'Strong network of partners worldwide',
      'Commitment to quality and customer satisfaction',
    ],
  },
  hi: {
    heading: 'हमारे बारे में',
    paragraph:
      'शिव पूजन इम्पोर्ट एक्सपोर्ट की स्थापना वैश्विक व्यापार के माध्यम से बाजारों और संस्कृतियों को जोड़ने के उद्देश्य से की गई थी। हमारा मिशन विश्वसनीय, पारदर्शी और कुशल आयात-निर्यात सेवाएँ प्रदान करना है, जिससे व्यवसाय सीमाओं से परे बढ़ सकें।',
    list: [
      'अंतरराष्ट्रीय व्यापार में 10+ वर्षों का अनुभव',
      'दुनिया भर में मजबूत साझेदार नेटवर्क',
      'गुणवत्ता और ग्राहक संतुष्टि के लिए प्रतिबद्धता',
    ],
  },
  ru: {
    heading: 'О нас',
    paragraph:
      'Shiv Pujan Import Export был основан с целью объединения рынков и культур посредством глобальной торговли. Наша миссия — предоставлять надежные, прозрачные и эффективные услуги по импорту и экспорту, помогая бизнесу расти за пределами границ.',
    list: [
      'Более 10 лет опыта в международной торговле',
      'Сильная сеть партнеров по всему миру',
      'Приверженность качеству и удовлетворенности клиентов',
    ],
  },
  de: {
    heading: 'Über uns',
    paragraph:
      'Shiv Pujan Import Export wurde mit der Vision gegründet, Märkte und Kulturen durch globalen Handel zu verbinden. Unsere Mission ist es, zuverlässige, transparente und effiziente Import-Export-Dienstleistungen bereitzustellen und Unternehmen beim Wachstum über Grenzen hinweg zu unterstützen.',
    list: [
      'Über 10 Jahre Erfahrung im internationalen Handel',
      'Starkes Partnernetzwerk weltweit',
      'Engagement für Qualität und Kundenzufriedenheit',
    ],
  },
};

const About: React.FC<AboutProps> = ({ lang }) => {
  const t = content[lang] ?? content.en;

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.heading}>{t.heading}</h1>
        <p className={styles.paragraph}>{t.paragraph}</p>
        <ul className={styles.list}>
          {t.list.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </div>
      <img
        src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?auto=format&fit=crop&w=400&q=80"
        alt="Our Team"
        className={styles.image}
      />
    </div>
  );
};

export default About;
