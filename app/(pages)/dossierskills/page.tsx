"use client";

import styles from "./dossierskills.module.css";
import { CVData } from "./data";
import { Header } from "@/components/dossierskills/Header/Header";
import { Experiences } from "@/components/dossierskills/experiences/experiences";
import { Skills } from "@/components/dossierskills/skills/skills";
import { Formations } from "@/components/dossierskills/formations/formations";
import { Languages } from "@/components/dossierskills/languages/languages";

export default function Dossierskills() {
  const profile = CVData;

  return (
    <div className={styles.cvPageWrapper}>
      <div className={styles.cvSheet}>
        <Header header={profile.header} />

        <div className={styles.cvBody}>
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
