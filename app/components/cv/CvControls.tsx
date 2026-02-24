"use client";

import { useState } from "react";
import styles from "@/styles/CvControls.module.css";
import type { Lang, Mode } from "@/data/cv.types";

type Props = {
  lang: Lang;
  mode: Mode;
  onLangChange: (lang: Lang) => void;
  onModeChange: (mode: Mode) => void;
  onDownload: () => void;
  isGenerating: boolean;
};

export function CvControls({
  lang,
  mode,
  onLangChange,
  onModeChange,
  onDownload,
  isGenerating,
}: Props) {
  const downloadCV = (mode: Mode, lang: Lang) => {
    const year = new Date().getFullYear();
    const filename = `CV_Paul_NELATON_${mode}_${lang}_${year}.pdf`;

    const link = document.createElement("a");
    link.href = `/cv/${filename}`;
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

      {/* MODE */}
      <div className={styles.group}>
        <button
          className={`${styles.button} ${mode === "dev" ? styles.active : ""}`}
          onClick={() => onModeChange("dev")}
          disabled={isGenerating}
          aria-label="Développeur"
          aria-pressed={mode === "dev"}
        >
          DEV
        </button>
        <button
          className={`${styles.button} ${mode === "sec" ? styles.active : ""}`}
          onClick={() => onModeChange("sec")}
          disabled={isGenerating}
          aria-label="Sécurité"
          aria-pressed={mode === "sec"}
        >
          SEC
        </button>
      </div>
      {/*}
      <button
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
          <>Télécharger PDF</>
        )}
      </button>
      */}
      <button
        onClick={() => downloadCV(mode, lang)}
        className={styles.downloadBtn}
        aria-label="Télécharger le CV en PDF"
      >
        Télécharger le CV
      </button>
    </div>
  );
}
