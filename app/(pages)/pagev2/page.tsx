"use client";

import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import styles from "@/styles/pagev2.module.css";

export default function Home() {
  const { t } = useLanguage();

  return (
<main className={styles.page}>
  <section className={styles.hero}>
    <div className={styles.heroContent}>
      <span className={styles.eyebrow}>
        Software Engineer · Product Builder
      </span>

      <h1 className={styles.heroTitle}>
        Your clients
        <span> deserve more.</span>
      </h1>

      <p className={styles.heroDescription}>
        I design and build robust digital products, combining software
        engineering, user experience and a strong understanding of
        business needs.
      </p>

      <div className={styles.heroActions}>
        <Link href="/cv" className={styles.primaryButton}>
          View my CV
        </Link>
      </div>
    </div>

    <div className={styles.heroVisual}>
      <div className={styles.heroNavigation}>
        <a href="#about" className={styles.heroNavCard}>
  <span className={styles.heroNavIndex}>01</span>

  <span className={styles.heroNavLabel}>About me</span>

  <p className={styles.heroNavDescription}>
    Profile, experience and product mindset.
  </p>
</a>

        <a href="#how-i-work" className={styles.heroNavCard}>
          <span className={styles.heroNavIndex}>02</span>
            <span className={styles.heroNavLabel}>How I work</span>
            <p className={styles.heroNavDescription}>Understand, build and improve.</p>
        </a>

        <Link href="/projects" className={styles.heroNavCard}>
          <span className={styles.heroNavIndex}>03</span>
            <span className={styles.heroNavLabel}>Projects</span>
            <p className={styles.heroNavDescription}>Personal products and professional work.</p>
        </Link>

        <a href="#contact" className={styles.heroNavCard}>
          <span className={styles.heroNavIndex}>04</span>
            <span className={styles.heroNavLabel}>Contact</span>
            <p className={styles.heroNavDescription}>Let&apos;s talk about what comes next.</p>
        </a>
      </div>
    </div>
  </section>
      <section id="work" className={styles.workSection}>
        <div className={styles.sectionHeader}>
          <span>Selected work</span>
          <h2>Projects built around real needs.</h2>
        </div>

        <div className={styles.projectGrid}>
          <article className={styles.featuredProject}>
            <div className={styles.projectIndex}>01</div>

            <div className={styles.projectContent}>
              <span className={styles.projectType}>Game & Platform</span>
              <h3>Brain Eaters</h3>

              <p>
                A complete game project designed and developed independently,
                from architecture and gameplay systems to user interfaces,
                visual identity, website and server infrastructure.
              </p>

              <div className={styles.tags}>
                <span>Unity</span>
                <span>C#</span>
                <span>.NET</span>
                <span>React</span>
                <span>Next.js</span>
              </div>

              <a
                href="https://braineatersgame.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Discover the project
              </a>
            </div>

            <div className={styles.projectPreview}>
              <span>Brain Eaters</span>
            </div>
          </article>

          <article className={styles.projectCard}>
            <span className={styles.projectType}>Business application</span>
            <h3>Product labelling system</h3>
            <p>
              Redesign of an internal product labelling workflow, including
              preview, business data integration and Zebra printer communication.
            </p>

            <div className={styles.tags}>
              <span>C#</span>
              <span>.NET</span>
              <span>SQL</span>
              <span>ZPL</span>
            </div>
          </article>

          <article className={styles.projectCard}>
            <span className={styles.projectType}>Internal platform</span>
            <h3>Pricing management app</h3>
            <p>
              Full redesign of a complex business rules interface, with a focus
              on clarity, maintainability and user experience.
            </p>

            <div className={styles.tags}>
              <span>ASP.NET</span>
              <span>JavaScript</span>
              <span>jQuery</span>
              <span>SQL</span>
            </div>
          </article>
        </div>
      </section>

      <section id="profile" className={styles.profileSection}>
        <div className={styles.profileIntro}>
          <span>How I work</span>
          <h2>Engineering with a product mindset.</h2>
        </div>

        <div className={styles.profileGrid}>
          <article>
            <span>01</span>
            <h3>Understand the need</h3>
            <p>
              I start from the business problem and the user journey before
              choosing the technical solution.
            </p>
          </article>

          <article>
            <span>02</span>
            <h3>Build with clarity</h3>
            <p>
              Clean architecture, readable code and maintainable solutions are
              part of the product, not optional extras.
            </p>
          </article>

          <article>
            <span>03</span>
            <h3>Improve continuously</h3>
            <p>
              I iterate, test and refine each solution to deliver something
              useful, coherent and pleasant to use.
            </p>
          </article>
        </div>
      </section>

      <section id="contact" className={styles.contactSection}>
        <span>Let&apos;s build something useful.</span>

        <h2>
          Looking for a software engineer who can think beyond the ticket?
        </h2>

        <a href="mailto:contact@paulnelaton.com">
          contact@paulnelaton.com
        </a>
      </section>
    </main>
  );
}