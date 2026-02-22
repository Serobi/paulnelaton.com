"use client";

import React, { useEffect, useState } from "react";
import styles from "@/styles/cv.module.css";
import { usePathname } from "next/navigation";
import { CVData } from "@/data/cv.data";
import { CvControls } from "@/components/cv/CvControls";
import { Header } from "@/components/cv/header/Header";
import Stats from "@/components/cv/stats/stats";
import { CvGrid } from "@/components/cv/layout/grid/grid";
import { CvSidebar } from "@/components/cv/layout/sidebar/sidebar";
import { CvMain } from "@/components/cv/layout/main/main";
import { Experiences } from "@/components/cv/experiences/experiences";

function ScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function Cv() {
  const [lang, setLang] = useState("fr" as "fr" | "en");
  const [mode, setMode] = useState("dev" as "dev" | "sec");

  const profile = CVData[lang][mode];

  return (
    <>
      <ScrollToTop />

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
                  <Stats stats={profile.stats} />
                  {/* <Skills skills={profile.skills} /> */}
                  {/* <Languages languages={profile.languages} /> */}
                  {/* <Education education={profile.education} /> */}
                </CvSidebar>
              }
              secondary={
                <CvMain>
                  <Experiences experiences={profile.experience} />
                </CvMain>
              }
            />
          </div>
        </div>
      </div>
    </>
  );
}
