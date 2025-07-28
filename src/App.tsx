import React, { useState } from "react";
import Home from "./pages/Home";
import Products from "./pages/Products";
import About from "./pages/About";
import Contact from "./pages/Contact";
import "./App.css";

const translations = {
  en: {
    logo: "Shiv Pujan",
    nav: {
      home: "Home",
      products: "Products",
      about: "About",
      contact: "Contact",
    },
  },
  hi: {
    logo: "शिव पूजन",
    nav: {
      home: "होम",
      products: "उत्पाद",
      about: "हमारे बारे में",
      contact: "संपर्क करें",
    },
  },
  ru: {
    logo: "Шив Пуджан",
    nav: {
      home: "Главная",
      products: "Продукты",
      about: "О нас",
      contact: "Контакт",
    },
  },
  de: {
    logo: "Shiv Pujan",
    nav: {
      home: "Startseite",
      products: "Produkte",
      about: "Über uns",
      contact: "Kontakt",
    },
  },
};

function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
  }
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [lang, setLang] = useState<"en" | "hi" | "ru" | "de">("en");

  const handleNavClick = (id: string) => {
    scrollToSection(id);
    setMenuOpen(false);
  };

  const t = translations[lang];

  return (
    <div>
      <nav className="navbar">
        <div className="logo">{t.logo}</div>
        <div className={`nav-links${menuOpen ? " open" : ""}`}>
          <span className="nav-link" onClick={() => handleNavClick("home")}>
            {t.nav.home}
          </span>
          <span className="nav-link" onClick={() => handleNavClick("products")}>
            {t.nav.products}
          </span>
          <span className="nav-link" onClick={() => handleNavClick("about")}>
            {t.nav.about}
          </span>
          <span className="nav-link" onClick={() => handleNavClick("contact")}>
            {t.nav.contact}
          </span>
          <select
            className="lang-select"
            value={lang}
            onChange={(e) =>
              setLang(e.target.value as "en" | "hi" | "ru" | "de")
            }
            style={{
              marginLeft: "1.5rem",
              padding: "0.5rem",
              borderRadius: "0.5rem",
              border: "1px solid #ccc",
              fontWeight: "bold",
              cursor: "pointer",
            }}
            aria-label="Select language"
          >
            <option value="en">English</option>
            <option value="hi">हिन्दी</option>
            <option value="ru">Русский</option>
            <option value="de">Deutsch</option>
          </select>
        </div>
        <div className="hamburger" onClick={() => setMenuOpen((open) => !open)}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </nav>
      <section id="home" className="section-flex">
        <Home lang={lang} />
      </section>
      <section id="products" className="section-flex">
        <Products lang={lang} />
      </section>
      <section id="about" className="section-flex">
        <About lang={lang} />
      </section>
      <section id="contact" className="section-flex">
        <Contact lang={lang} />
      </section>
    </div>
  );
}

export default App;
