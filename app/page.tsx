"use client";

import Link from "next/link";
import styles from "@/styles/page.module.css";

export default function Home() {
  const techStack = [
    "C#",
    ".NET",
    "React",
    "Next.js",
    "Unity",
    "PostgreSQL",
    "Docker",
  ];

  return (
    <div className={styles.container}>
      {/* Sidebar */}
      <aside className={styles.sidebar}>
        <div>
          <nav className={styles.sidebarNav}>
            <a href="#intro" className={styles.navLink}>
              Introduction
            </a>
            <a href="#projets" className={styles.navLink}>
              Projets
            </a>
            <Link href="/cv" className={styles.navLink}>
              CV interactif
            </Link>
          </nav>
        </div>
      </aside>

      {/* Main */}
      <main className={styles.main}>
        {/* HERO */}
        <section id="intro" className={styles.heroSection}>
          <h2 className={styles.role}>
            Ingénieur logiciel, Cybersécurité & DevOps
          </h2>

          <div className={styles.introText}>
            <p>
              Ingénieur issu de la cybersécurité avec 6+ ans d'expérience en
              infrastructures critiques (Vinci, BT, Orange Cyberdefense).
            </p>
            <p>
              Spécialisé en architecture système, automatisation et
              développement full-stack. Conception de systèmes modulaires,
              performants et évolutifs.
            </p>
          </div>
          <Link href="/cv" className={styles.btnPrimary}>
            Consulter mon CV
          </Link>
        </section>

        {/* PROJECTS */}
        <section id="projets" className={styles.projectsSection}>
          <h2>Projets</h2>

          <div className={styles.projectsList}>
            {/* CV Generator */}
            <article className={styles.projectCard}>
              <h3>Générateur de CV ATS Friendly</h3>
              <p>
                Application web permettant de générer des CV optimisés pour les
                systèmes de tracking (ATS), avec export PDF automatisé. <br />
                Work in progress ...
              </p>

              <div className={styles.projectTags}>
                <span className={styles.techBadge}>React</span>
                <span className={styles.techBadge}>Next.js</span>
                <span className={styles.techBadge}>Puppeteer</span>
                <span className={styles.techBadge}>Node.js</span>
              </div>

              <Link href="/cv" className={styles.projectLink}>
                Accéder à l'outil
              </Link>
            </article>

            {/* Brain Eaters */}
            <article className={styles.projectCard}>
              <h3>Brain Eaters — Jeu mobile de stratégie</h3>
              <p>
                Développement d'un jeu mobile / PC combinant stratégie, survie
                et coopération. <br />
                Le jeu a été entièrement développé par mes soins, du code aux
                designs, du gameplay aux UI, du site Web à la direction
                artistique. <br />
                Découvrez en plus sur le site officiel du projet !
              </p>

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
                Découvrir le projet
              </a>
            </article>
          </div>
        </section>
      </main>
    </div>
  );
}
