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
