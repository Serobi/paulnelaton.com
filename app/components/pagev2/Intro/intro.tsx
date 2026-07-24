"use client";

import type { MouseEvent } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import styles from "./intro.module.css";

export default function Intro() {
  const { t } = useLanguage();

const handleCardsMouseMove = (
  event: React.MouseEvent<HTMLElement>
) => {
  const cards =
    event.currentTarget.querySelectorAll<HTMLElement>(
      "[data-light-card]"
    );

  cards.forEach((card) => {
    const rect = card.getBoundingClientRect();

    card.style.setProperty(
      "--mouse-x",
      `${event.clientX - rect.left}px`
    );

    card.style.setProperty(
      "--mouse-y",
      `${event.clientY - rect.top}px`
    );
  });
};

  return (
    <section id="about" className={styles.cardsSection} onMouseMove={handleCardsMouseMove}>
      <span className={styles.eyebrow}>
        {t("Intro.eyebrow")}
      </span>

      <div className={styles.cardsContainer}>
        <article
          className={`${styles.cardsColumn} ${styles.cardsColumnFirst}`}
        >
          <div
            className={styles.cardsCard}
            data-light-card
          >
            <header className={styles.cardsHeader}>
              <h3 className={styles.cardsTitle}>
                {t("Intro.card1.title")}
              </h3>

              <div className={styles.cardsSeparator} />
            </header>

            <div className={styles.cardsContent}>
              Content
            </div>
          </div>
        </article>

        <article
          className={`${styles.cardsColumn} ${styles.cardsColumnSecond}`}
        >
          <div
            className={styles.cardsCard}
            data-light-card
          >
            <header className={styles.cardsHeader}>
              <h3 className={styles.cardsTitle}>
                {t("Intro.card2.title")}
              </h3>

              <div className={styles.cardsSeparator} />
            </header>

            <div className={styles.cardsContent}>
              Content
            </div>
          </div>
        </article>

        <article
          className={`${styles.cardsColumn} ${styles.cardsColumnThird}`}
        >
          <div
            className={styles.cardsCard}
            data-light-card
          >
            <header className={styles.cardsHeader}>
              <h3 className={styles.cardsTitle}>
                {t("Intro.card3.title")}
              </h3>

              <div className={styles.cardsSeparator} />
            </header>

            <div className={styles.cardsContent}>
              Content
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}