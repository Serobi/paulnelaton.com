"use client";

import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import styles from "@/styles/page.module.css";

export default function Home() {
  const { t } = useLanguage();

  return (
    <div className={styles.container}>
      {/* Sidebar */}
      <aside className={styles.sidebar}>
        <div>
          <nav className={styles.sidebarNav}>
            <a href="/#" className={styles.navLink}>
              {t("nav.intro")}
            </a>
            <a href="#projets" className={styles.navLink}>
              {t("nav.projects")}
            </a>
            <Link href="/cv" className={styles.navLink}>
              {t("nav.cv")}
            </Link>
          </nav>
        </div>
      </aside>

      {/* Main */}
      <main className={styles.main}>
        {/* HERO */}
        <section className={styles.heroSection}>
          <h2 className={styles.role}>{t("home.title")}</h2>

          <div className={styles.introText}>
            <p>{t("home.intro1")}</p>
            <p>{t("home.intro2")}</p>
          </div>

          <Link href="/cv" className={styles.btnPrimary}>
            {t("home.cta")}
          </Link>
        </section>

        {/* PROJECTS */}
        <section id="projets" className={styles.projectsSection}>
          <h2>{t("projects.title")}</h2>

          <div className={styles.projectsList}>
            {/* CV Generator */}
            <article className={styles.projectCard}>
              <h3>{t("projects.cv.title")}</h3>
              <p>
                {t("projects.cv.desc")} <br />
                {t("projects.cv.wip")}
              </p>

              <div className={styles.projectTags}>
                <span className={styles.techBadge}>React</span>
                <span className={styles.techBadge}>Next.js</span>
                <span className={styles.techBadge}>Puppeteer</span>
                <span className={styles.techBadge}>Node.js</span>
              </div>

              <Link href="/cv" className={styles.projectLink}>
                {t("projects.cv.link")}
              </Link>
            </article>

            {/* Brain Eaters */}
            <article className={styles.projectCard}>
              <h3>{t("projects.brain.title")}</h3>
              <p>{t("projects.brain.desc")}</p>

              <div className={styles.projectTags}>
                <span className={styles.techBadge}>C#</span>
                <span className={styles.techBadge}>Unity</span>
                <span className={styles.techBadge}>React</span>
                <span className={styles.techBadge}>Next.js</span>
              </div>

              <a
                href="https://braineatersgame.com"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.projectLink}
              >
                {t("projects.brain.cta")}
              </a>
            </article>
          </div>
        </section>
      </main>
    </div>
  );
}
