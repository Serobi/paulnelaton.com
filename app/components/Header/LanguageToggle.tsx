"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import styles from "./LanguageToggle.module.css";

export function LanguageToggle() {
  const { lang, setLang } = useLanguage();

  return (
    <div className={styles.toggle}>
      <button
        onClick={() => setLang("fr")}
        className={`${styles.btn} ${lang === "fr" ? styles.active : ""}`}
        aria-label="Français"
        aria-pressed={lang === "fr"}
      >
        FR
      </button>
      <button
        onClick={() => setLang("en")}
        className={`${styles.btn} ${lang === "en" ? styles.active : ""}`}
        aria-label="English"
        aria-pressed={lang === "en"}
      >
        EN
      </button>
    </div>
  );
}
