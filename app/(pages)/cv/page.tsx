"use client";

import { useState } from "react";
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

  const profile = CVData[lang][mode];

  return (
    <>
      <div className={styles.cvPageWrapper}>
        <CvControls
          lang={lang}
          mode={mode}
          onLangChange={setLang}
          onModeChange={setMode}
        />
        <div className={styles.cvSheet}>
          <Header identity={profile.identity} />

          <div className={styles.cvBody}>
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
        </div>
      </div>
    </>
  );
}
