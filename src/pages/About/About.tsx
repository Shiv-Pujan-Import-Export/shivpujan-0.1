import React from "react";
import styles from "./About.module.css";
import { useTranslation } from "../../context/TranslationContext";

const About: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.heading}>{t.about.heading}</h1>
        <p className={styles.paragraph}>{t.about.paragraph}</p>
        <ul className={styles.list}>
          {t.about.list.map((item, idx) => (
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
