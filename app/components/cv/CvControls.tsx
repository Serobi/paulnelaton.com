"use client";

import { useState } from "react";
import styles from "@/styles/CvControls.module.css";
import type { Lang } from "@/data/cv.types";

type Props = {
  lang: Lang;
  onLangChange: (lang: Lang) => void;
  onDownload: () => void;
  isGenerating: boolean;
};

export function CvControls({
  lang,
  onLangChange,
  onDownload,
  isGenerating,
}: Props) {
  const downloadCV = (lang: Lang) => {
    const year = new Date().getFullYear();
    const filename = `CV_Paul_NELATON_${lang}.pdf`;

    const link = document.createElement("a");
    link.href = `/cv-pdf/${filename}`;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className={styles.controls}>
      {/* LANG */}
      <div className={styles.group}>
        <button
          className={`${styles.button} ${lang === "fr" ? styles.active : ""}`}
          onClick={() => onLangChange("fr")}
          disabled={isGenerating}
          aria-label="Français"
          aria-pressed={lang === "fr"}
        >
          FR
        </button>
        <button
          className={`${styles.button} ${lang === "en" ? styles.active : ""}`}
          onClick={() => onLangChange("en")}
          disabled={isGenerating}
          aria-label="English"
          aria-pressed={lang === "en"}
        >
          EN
        </button>
      </div>

      {/* <button
        onClick={onDownload}
        disabled={isGenerating}
        className={styles.downloadBtn}
        aria-label="Télécharger le CV en PDF"
      >
        {isGenerating ? (
          <>
            <span className={styles.spinner} />
            Génération...
          </>
        ) : (
          <>Génerer PDF</>
        )}
      </button> */}
      <button
        onClick={() => downloadCV(lang)}
        className={styles.downloadBtn}
        aria-label={lang === "fr" ? "Télécharger le CV" : "Download CV"}
      >
        {lang === "fr" ? "Télécharger le CV" : "Download CV"}
      </button>
    </div>
  );
}
