import React from "react";
import styles from "./Contact.module.css";
import { useTranslation } from "../../context/TranslationContext";

const Contact: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.heading}>{t.contact.heading}</h1>
        <p className={styles.paragraph}>{t.contact.paragraph}</p>

        <form className={styles.form}>
          <input
            type="text"
            placeholder={t.contact.form.name}
            required
            className={styles.input}
          />
          <input
            type="email"
            placeholder={t.contact.form.email}
            required
            className={styles.input}
          />
          <textarea
            placeholder={t.contact.form.message}
            required
            rows={4}
            className={styles.textarea}
          />
          <button type="submit" className={styles.button}>
            {t.contact.form.button}
          </button>
        </form>

        <div className={styles.contactInfo}>
          <div>
            <strong>{t.contact.info.emailLabel}:</strong> {t.contact.info.email}
          </div>
          <div>
            <strong>{t.contact.info.phoneLabel}:</strong> {t.contact.info.phone}
          </div>
          <div>
            <strong>{t.contact.info.addressLabel}:</strong>{" "}
            {t.contact.info.address}
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
