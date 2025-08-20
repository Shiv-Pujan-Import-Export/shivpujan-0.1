import React, { useState } from "react";
import Home from "./pages/Home/Home";
import Products from "./pages/Product/Products";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import "./App.css";

import { TranslationProvider, useTranslation } from "./context/TranslationContext";

function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
  }
}

const Navbar: React.FC = () => {
  const { t, setLang, lang } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavClick = (id: string) => {
    scrollToSection(id);
    setMenuOpen(false);
  };

  return (
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
          onChange={(e) => setLang(e.target.value as any)}
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
  );
};

function App() {
  return (
    <TranslationProvider>
      <Navbar />
      <section id="home" className="section-flex">
        <Home />
      </section>
      <section id="products" className="section-flex">
        <Products />
      </section>
      <section id="about" className="section-flex">
        <About />
      </section>
      <section id="contact" className="section-flex">
        <Contact />
      </section>
    </TranslationProvider>
  );
}

export default App;
