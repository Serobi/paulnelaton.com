"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import styles from "./LanguageToggle.module.css";

export function LanguageToggle() {
  const { lang, setLang } = useLanguage();

  return (
    <div className={styles.toggle} aria-label="Choix de la langue">
      <button
        type="button"
        onClick={() => setLang("fr")}
        className={`${styles.btn} ${lang === "fr" ? styles.active : ""}`}
        aria-label="Afficher le site en français"
        aria-pressed={lang === "fr"}
      >
        FR
      </button>

      <button
        type="button"
        onClick={() => setLang("en")}
        className={`${styles.btn} ${lang === "en" ? styles.active : ""}`}
        aria-label="Display the website in English"
        aria-pressed={lang === "en"}
      >
        EN
      </button>
    </div>
  );
}