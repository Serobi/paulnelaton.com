"use client";

import styles from "@/styles/CvControls.module.css";
import type { Lang } from "@/data/cv.types";
import { useLanguage } from "@/contexts/LanguageContext";

type Props = {
  onDownload: () => void;
  isGenerating: boolean;
};

export function CvControls({
  onDownload,
  isGenerating,
}: Props) {
  const { lang } = useLanguage();
  const downloadCV = (lang: Lang) => {
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
      {process.env.NODE_ENV === "development" && (
        <button
          onClick={onDownload}
          disabled={isGenerating}
          className={styles.downloadBtn}
          aria-label={
            lang === "fr" ? "Générer le CV en PDF" : "Generate CV as PDF"
          }
        >
          {isGenerating ? (
            <>
              <span className={styles.spinner} />
              {lang === "fr" ? "Génération..." : "Generating..."}
            </>
          ) : lang === "fr" ? (
            <>Générer PDF</>
          ) : (
            <>Generate PDF</>
          )}
        </button>
      )}
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
