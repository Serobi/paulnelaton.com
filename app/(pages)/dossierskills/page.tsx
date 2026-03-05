"use client";

import { useState, useRef } from "react";
import styles from "./dossierskills.module.css";
import { CVData } from "@/data/cv.data";
import { Header } from "@/components/dossierskills/Header/Header";
import { Experiences } from "@/components/dossierskills/experiences/experiences";
import { Skills } from "@/components/dossierskills/skills/skills";
import { Formations } from "@/components/dossierskills/formations/formations";
import { Languages } from "@/components/dossierskills/languages/languages";

export default function Dossierskills() {
  const [lang, setLang] = useState<"fr" | "en">("fr");
  const [mode, setMode] = useState<"dev" | "sec">("dev");
  const [isGenerating, setIsGenerating] = useState(false);

  const webVersionRef = useRef<HTMLDivElement>(null);
  const pdfVersionRef = useRef<HTMLDivElement>(null);

  const profile = CVData[lang][mode];

  return (
    <div className={styles.cvPageWrapper}>
      <div ref={webVersionRef} className={styles.cvSheet}>
        <Header identity={profile.identity} />

        <div className={styles.cvBody}>
          {/* Grid 2 colonnes : Sidebar + Main */}
          <div className={styles.webGrid}>
            <section className={styles.section}>
              <Skills
                skills={profile.skillTrees}
                title={profile.labels.technicalSkills}
              />
            </section>
            <main className={styles.webMain}>
              <Experiences
                experiences={profile.experience}
                title={profile.labels.experience}
              />
            </main>
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
          </div>
        </div>
      </div>
    </div>
  );
}
