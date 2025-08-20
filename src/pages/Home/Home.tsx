import React from "react";
import { useTranslation } from "../../context/TranslationContext";
import styles from "./Home.module.css";

const Home: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.container}>
      <img
        src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80"
        alt="Global Trade"
        className={styles.image}
      />
      <div className={styles.content}>
        <h1 className={styles.heading}>{t.home.heading}</h1>
        <p className={styles.paragraph}>{t.home.paragraph}</p>
        <button className={styles.button}>{t.home.button}</button>
      </div>
    </div>
  );
};

export default Home;
