"use client";

import styles from "@/styles/CvControls.module.css";
import type { Lang, Mode } from "@/data/cv.types";

type Props = {
  lang: Lang;
  mode: Mode;
  onLangChange: (lang: Lang) => void;
  onModeChange: (mode: Mode) => void;
};

export function CvControls({ lang, mode, onLangChange, onModeChange }: Props) {
  return (
    <div className={styles.controls}>
      {/* LANG */}
      <div className={styles.group}>
        <button
          className={`${styles.button} ${lang === "fr" ? styles.active : ""}`}
          onClick={() => onLangChange("fr")}
        >
          FR
        </button>
        <button
          className={`${styles.button} ${lang === "en" ? styles.active : ""}`}
          onClick={() => onLangChange("en")}
        >
          EN
        </button>
      </div>

      {/* MODE */}
      <div className={styles.group}>
        <button
          className={`${styles.button} ${mode === "dev" ? styles.active : ""}`}
          onClick={() => onModeChange("dev")}
        >
          DEV
        </button>
        <button
          className={`${styles.button} ${mode === "sec" ? styles.active : ""}`}
          onClick={() => onModeChange("sec")}
        >
          SEC
        </button>
      </div>
    </div>
  );
}
