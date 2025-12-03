"use client";

import { useEffect, useState } from "react";

const translations = {
  fr: {
    title: "Bonjour",
    contactLabel: "Vous pouvez me contacter par email :",
  },
  en: {
    title: "Hello",
    contactLabel: "You can contact me by email:",
  },
};

export default function Home() {
  const [lang, setLang] = useState<"fr" | "en">("fr");

  useEffect(() => {
    // Détecter la langue préférée du navigateur
    const browserLang = navigator.language.split("-")[0];
    if (browserLang === "en") {
      setLang("en");
    }
  }, []);

  const t = translations[lang];

  return (
    <div className="container">
      <main className="card">
        <div className="language-selector">
          <button
            type="button"
            className={`lang-btn ${lang === "fr" ? "active" : ""}`}
            onClick={() => setLang("fr")}
            aria-label="Français"
          >
            FR
          </button>
          <button
            type="button"
            className={`lang-btn ${lang === "en" ? "active" : ""}`}
            onClick={() => setLang("en")}
            aria-label="English"
          >
            EN
          </button>
        </div>
        <header className="header">
          <h1 className="title">{t.title}</h1>
        </header>
        <section className="contact">
          <p className="contact-label">{t.contactLabel}</p>
          <a href="mailto:vingt-douze@protonmail.com" className="email">
            vingt-douze@protonmail.com
          </a>
        </section>
      </main>
    </div>
  );
}
