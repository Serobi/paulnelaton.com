"use client";

import { useState } from "react";
import styles from "@/styles/CvControls.module.css";
import type { Lang, Mode } from "@/data/cv.types";

type Props = {
  lang: Lang;
  mode: Mode;
  onLangChange: (lang: Lang) => void;
  onModeChange: (mode: Mode) => void;
};

export function CvControls({ lang, mode, onLangChange, onModeChange }: Props) {
  const [isGenerating, setIsGenerating] = useState(false);

  const handleDownload = async () => {
    setIsGenerating(true);

    try {
      const response = await fetch("/api/generate-cv", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ lang, mode }),
      });

      if (!response.ok) {
        const text = await response.text();
        throw new Error(text || "Failed to generate PDF");
      }

      // Télécharge le PDF
      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      const year = new Date().getFullYear();
      a.href = url;
      a.download = `CV_Paul_NELATON_${mode}_${lang}_${year}.pdf`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error("PDF generation error:", error);
      alert("Erreur lors de la génération du PDF");
    } finally {
      setIsGenerating(false);
    }
  };

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
      {/*}
      <button
        onClick={handleDownload}
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
    </div>
  );
}
