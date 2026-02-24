"use client";

import { useState, useRef } from "react";
import styles from "@/styles/cv.module.css";
import { CVData } from "@/data/cv.data";
import { CvControls } from "@/components/cv/CvControls";
import { Header } from "@/components/cv/Header/Header";
import Stats from "@/components/cv/stats/stats";
import { CvGrid } from "@/components/cv/layout/grid/grid";
import { CvSidebar } from "@/components/cv/layout/sidebar/sidebar";
import { CvMain } from "@/components/cv/layout/main/main";
import { Experiences } from "@/components/cv/experiences/experiences";
import { Skills } from "@/components/cv/skills/skills";
import { Formations } from "@/components/cv/formations/formations";
import { Languages } from "@/components/cv/languages/languages";

export default function Cv() {
  const [lang, setLang] = useState<"fr" | "en">("fr");
  const [mode, setMode] = useState<"dev" | "sec">("dev");
  const [isGenerating, setIsGenerating] = useState(false);
  const cvSheetRef = useRef<HTMLDivElement>(null);
  const profile = CVData[lang][mode];

  const handleDownload = async () => {
    if (!cvSheetRef.current) {
      alert("Erreur : CV non trouvé");
      return;
    }

    setIsGenerating(true);

    try {
      const profilePicBase64 = await imageToBase64("/profile2.png");

      let cvHTML = cvSheetRef.current.outerHTML;

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

      const computedStyles = window.getComputedStyle(cvSheetRef.current);
      allCSS += `\n/* Computed fallback */\n`;
      allCSS += `.cvSheet { 
        font-family: ${computedStyles.fontFamily};
        background: ${computedStyles.background};
      }`;

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
          mode,
        }),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.details || "Failed to generate PDF");
      }

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

      console.log("[Client] ✅ PDF downloaded successfully");
    } catch (error) {
      console.error("[Client] ❌ PDF generation error:", error);
      alert(
        `Erreur lors de la génération du PDF: ${
          error instanceof Error ? error.message : "Erreur inconnue"
        }`,
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
    <div className={styles.cvPageWrapper}>
      <CvControls
        lang={lang}
        mode={mode}
        onLangChange={setLang}
        onModeChange={setMode}
        onDownload={handleDownload}
        isGenerating={isGenerating}
      />

      <div ref={cvSheetRef} className={styles.cvSheet}>
        <Header identity={profile.identity} />

        <div className={styles.cvBody}>
          {/* ───────────────── WEB (SCREEN) ───────────────── */}
          <div className={styles.screenOnly}>
            <CvGrid
              columns={2}
              primary={
                <CvSidebar>
                  <Stats stats={profile.stats} title={profile.labels.domains} />
                  <Skills
                    skills={profile.skillTrees}
                    title={profile.labels.technicalSkills}
                  />
                  <Formations
                    formations={profile.formations}
                    title={profile.labels.education}
                  />
                  <Languages
                    languages={profile.languages}
                    title={profile.labels.languages}
                  />
                </CvSidebar>
              }
              secondary={
                <CvMain>
                  <Experiences
                    experiences={profile.experience}
                    title={profile.labels.experience}
                  />
                </CvMain>
              }
            />
          </div>
          {/* ───────────────── PRINT - PAGE 1 ───────────────── */}
          <div className={styles.printOnly}>
            <CvGrid
              columns={2}
              primary={
                <CvSidebar>
                  <Stats stats={profile.stats} title={profile.labels.domains} />
                  <Formations
                    formations={profile.formations}
                    title={profile.labels.education}
                  />
                  <Languages
                    languages={profile.languages}
                    title={profile.labels.languages}
                  />
                </CvSidebar>
              }
              secondary={
                <CvMain>
                  <Experiences
                    experiences={profile.experience.slice(0, 2)} // Change if you can have more or less experiences page 1
                    title={profile.labels.experience}
                  />
                </CvMain>
              }
            />

            <div className={styles.pageBreak} />

            {/* ───────────────── PRINT – PAGE 2+ ───────────────── */}
            <CvGrid
              columns={1}
              primary={
                <CvMain>
                  <Experiences
                    experiences={profile.experience.slice(2)} // Change if you can have more or less experiences page 1
                    title=""
                  />
                  <Skills
                    skills={profile.skillTrees}
                    title={profile.labels.technicalSkills}
                  />
                </CvMain>
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
}
