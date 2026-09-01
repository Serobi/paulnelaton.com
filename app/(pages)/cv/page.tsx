"use client";

import { useState, useRef } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import styles from "@/styles/cv.module.css";
import { CVData } from "@/data/cv.data";
import { CvControls } from "@/components/cv/CvControls";
import { Header } from "@/components/cv/Header/Header";
import Stats from "@/components/cv/stats/stats";
import { Experiences } from "@/components/cv/experiences/experiences";
import { Experiencespdf } from "@/components/cv/experiences/experiences-pdf";
import { Skills } from "@/components/cv/skills/skills";
import { Formations } from "@/components/cv/formations/formations";
import { Languages } from "@/components/cv/languages/languages";
import type { Mode } from "@/data/cv.types";

const isLocalCvModeEnabled = process.env.NODE_ENV === "development";

export default function Cv() {
  const { lang } = useLanguage();
  const [mode, setMode] = useState<Mode>("dev");
  const [isGenerating, setIsGenerating] = useState(false);

  const webVersionRef = useRef<HTMLDivElement>(null);
  const pdfVersionRef = useRef<HTMLDivElement>(null);

  const activeMode: Mode = isLocalCvModeEnabled ? mode : "dev";
  const profile = CVData[lang][activeMode];

  const handleDownload = async () => {
    if (!pdfVersionRef.current) {
      alert("Erreur : Version PDF non trouvée");
      return;
    }

    setIsGenerating(true);

    try {
      const profilePicBase64 = await imageToBase64("/profile2.png");
      let cvHTML = pdfVersionRef.current.outerHTML;

      if (profilePicBase64) {
        cvHTML = cvHTML.replaceAll(
          'src="/profile2.png"',
          `src="${profilePicBase64}"`,
        );
        cvHTML = cvHTML.replaceAll(
          'src="profile2.png"',
          `src="${profilePicBase64}"`,
        );
      }

      let allCSS = "";
      for (const sheet of Array.from(document.styleSheets)) {
        try {
          const rules = Array.from(sheet.cssRules || sheet.rules);
          allCSS += rules.map((rule) => rule.cssText).join("\n");
        } catch (e) {
          console.warn("Cannot access stylesheet:", sheet.href, e);
        }
      }

      const computedStyles = window.getComputedStyle(pdfVersionRef.current);
      allCSS += `\n.cvSheet { font-family: ${computedStyles.fontFamily}; background: ${computedStyles.background}; }`;

      console.log("[Client] Sending HTML/CSS to API...");
      console.log("[Client] HTML length:", cvHTML.length);
      console.log("[Client] CSS length:", allCSS.length);
      console.log("[Client] Image embedded:", profilePicBase64 ? "✅" : "❌");

      const response = await fetch("/api/generate-cv", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          html: cvHTML,
          css: allCSS,
          lang,
          mode: activeMode,
        }),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.details || "Failed to generate PDF");
      }

      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `CV_Paul_NELATON_${activeMode}_${lang}.pdf`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);

      console.log("[Client] ✅ PDF downloaded successfully");
    } catch (error) {
      console.error("[Client] ❌ PDF generation error:", error);
      alert(
        `Erreur lors de la génération du PDF: ${error instanceof Error ? error.message : "Erreur inconnue"}`,
      );
    } finally {
      setIsGenerating(false);
    }
  };

  const imageToBase64 = async (url: string): Promise<string> => {
    try {
      const response = await fetch(url);
      const blob = await response.blob();
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onloadend = () => resolve(reader.result as string);
        reader.onerror = reject;
        reader.readAsDataURL(blob);
      });
    } catch (error) {
      console.error("Failed to load image:", error);
      return "";
    }
  };

  return (
    <main className={styles.page}>
      {isLocalCvModeEnabled && (
        <div className={styles.localModeSwitch} aria-label="Version du CV">
          <button
            type="button"
            className={activeMode === "dev" ? styles.localModeActive : ""}
            onClick={() => setMode("dev")}
            disabled={isGenerating}
            aria-pressed={activeMode === "dev"}
          >
            DEV
          </button>
          <button
            type="button"
            className={activeMode === "sec" ? styles.localModeActive : ""}
            onClick={() => setMode("sec")}
            disabled={isGenerating}
            aria-pressed={activeMode === "sec"}
          >
            SEC
          </button>
        </div>
      )}
      <div className={styles.cvPageWrapper}>
      <section className={styles.controlsSection}>
        <CvControls
          onDownload={handleDownload}
          isGenerating={isGenerating}
        />
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          VERSION WEB (AFFICHAGE ÉCRAN)
          ═══════════════════════════════════════════════════════════════ */}
      <div
        ref={webVersionRef}
        className={`${styles.cvSheet} ${styles.screenOnly}`}
      >
        <Header identity={profile.identity} />

        <div className={styles.cvBody}>
          {/* Grid 2 colonnes : Sidebar + Main */}
          <div className={styles.webGrid}>
            {/* Sidebar gauche */}
            <aside className={styles.webSidebar}>
              <section className={styles.section}>
                <Stats stats={profile.stats} title={profile.labels.domains} />
              </section>
              <section className={styles.section}>
                <Skills
                  skills={profile.skillTrees}
                  title={profile.labels.technicalSkills}
                />
              </section>
              <section className={styles.section}>
                <Formations
                  formations={profile.formations}
                  title={profile.labels.education}
                />
              </section>
              <section className={styles.section}>
                <Languages
                  languages={profile.languages}
                  title={profile.labels.languages}
                />
              </section>
            </aside>

            <div className={styles.webMain}>
              <Experiences
                experiences={profile.experience}
                title={profile.labels.experience}
              />
            </div>
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════════
          VERSION PDF (GÉNÉRATION PUPPETEER)
          ═══════════════════════════════════════════════════════════════ */}
      <div
        ref={pdfVersionRef}
        className={`${styles.cvSheet} ${styles.printOnly}`}
      >
        <Header identity={profile.identity} />

        <div className={styles.cvBody}>
          {/* ─────── PAGE 1 : Grid 2 colonnes ─────── */}
          <div className={styles.pdfPage1}>
            {/* Sidebar gauche */}
            <aside className={styles.pdfSidebar}>
              <section className={styles.section}>
                <Formations
                  formations={profile.formations}
                  title={profile.labels.education}
                />
              </section>
              <section className={styles.section}>
                <Skills
                  skills={profile.skillTrees}
                  title={profile.labels.technicalSkills}
                />
              </section>
              <section className={styles.section}>
                <Languages
                  languages={profile.languages}
                  title={profile.labels.languages}
                />
              </section>
            </aside>

            {/* Main droite */}
            <div className={styles.pdfMain}>
              <Experiencespdf
                experiences={profile.experience}
                title={profile.labels.experience}
              />
            </div>
          </div>
        </div>
      </div>
      </div>
    </main>
  );
}
