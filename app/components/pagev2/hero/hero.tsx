"use client";

import { useLanguage } from "@/contexts/LanguageContext";

import styles from "./hero.module.css";

const navigationItems = [
  {
    index: "01",
    key: "about",
    href: "#about",
  },
  {
    index: "02",
    key: "process",
    href: "#process",
  },
  {
    index: "03",
    key: "projects",
    href: "#projects",
  },
  {
    index: "04",
    key: "contact",
    href: "#contact",
  },
] as const;

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className={styles.hero}>
      <div className={styles.heroGrid}>
        <div className={styles.heroContent}>
          <div className={styles.heroCopy}>
            <span className={styles.eyebrow}>
              {t("hero.eyebrow")}
            </span>

            <h1 className={styles.heroTitle}>
              {t("hero.title.line1")}
              <span>{t("hero.title.line2")}</span>
            </h1>

            <p className={styles.heroDescription}>
              {t("hero.description")}
            </p>

            <div className={styles.heroActions}>
              <a href="/cv" className={styles.primaryButton}>
                {t("hero.cta")}
              </a>
            </div>
          </div>
        </div>

        <nav
          className={styles.heroNavigation}
          aria-label={t("hero.navigation.ariaLabel")}
        >
          {navigationItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={styles.heroNavCard}
            >
              <span className={styles.heroNavIndex}>
                {item.index}
              </span>

              <span className={styles.heroNavLabel}>
                {t(`hero.nav.${item.key}.label`)}
              </span>

              <p className={styles.heroNavDescription}>
                {t(`hero.nav.${item.key}.description`)}
              </p>
            </a>
          ))}
        </nav>
      </div>
    </section>
  );
}