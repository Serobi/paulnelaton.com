"use client";

import { useRef } from "react";
import type { PointerEvent as ReactPointerEvent } from "react";

import { useLanguage } from "@/contexts/LanguageContext";
import styles from "./intro.module.css";

const LONG_PRESS_DELAY = 600;
const MOVE_TOLERANCE = 10;

export default function Intro() {
  const { t, tArray } = useLanguage();

  const longPressTimerRef =
    useRef<ReturnType<typeof setTimeout> | null>(null);

  const touchActiveRef = useRef(false);
  const activePointerIdRef = useRef<number | null>(null);

  const startPositionRef = useRef({
    x: 0,
    y: 0,
  });

  const updateCardsLight = (
    section: HTMLElement,
    clientX: number,
    clientY: number
  ) => {
    const cards =
      section.querySelectorAll<HTMLElement>("[data-light-card]");

    cards.forEach((card) => {
      const rect = card.getBoundingClientRect();

      card.style.setProperty(
        "--mouse-x",
        `${clientX - rect.left}px`
      );

      card.style.setProperty(
        "--mouse-y",
        `${clientY - rect.top}px`
      );
    });
  };

  const clearLongPressTimer = () => {
    if (!longPressTimerRef.current) {
      return;
    }

    clearTimeout(longPressTimerRef.current);
    longPressTimerRef.current = null;
  };

  const handlePointerDown = (
    event: ReactPointerEvent<HTMLElement>
  ) => {
    if (event.pointerType !== "touch") {
      return;
    }

    const section = event.currentTarget;

    startPositionRef.current = {
      x: event.clientX,
      y: event.clientY,
    };

    activePointerIdRef.current = event.pointerId;

    updateCardsLight(
      section,
      event.clientX,
      event.clientY
    );

    clearLongPressTimer();

    longPressTimerRef.current = setTimeout(() => {
      touchActiveRef.current = true;

      section.classList.add(styles.cardsSectionTouchActive);
      section.setPointerCapture(event.pointerId);

      navigator.vibrate?.(15);
    }, LONG_PRESS_DELAY);
  };

  const handlePointerMove = (
    event: ReactPointerEvent<HTMLElement>
  ) => {
    const section = event.currentTarget;

    if (event.pointerType === "mouse") {
      updateCardsLight(
        section,
        event.clientX,
        event.clientY
      );

      return;
    }

    if (event.pointerType !== "touch") {
      return;
    }

    if (!touchActiveRef.current) {
      const distanceX = Math.abs(
        event.clientX - startPositionRef.current.x
      );

      const distanceY = Math.abs(
        event.clientY - startPositionRef.current.y
      );

      /*
       * L'utilisateur commence à scroller :
       * on annule l'activation de la lumière.
       */
      if (
        distanceX > MOVE_TOLERANCE ||
        distanceY > MOVE_TOLERANCE
      ) {
        clearLongPressTimer();
      }

      return;
    }

    event.preventDefault();

    updateCardsLight(
      section,
      event.clientX,
      event.clientY
    );
  };

  const stopTouchInteraction = (
    event: ReactPointerEvent<HTMLElement>
  ) => {
    clearLongPressTimer();

    const section = event.currentTarget;
    const pointerId = activePointerIdRef.current;

    if (
      pointerId !== null &&
      section.hasPointerCapture(pointerId)
    ) {
      section.releasePointerCapture(pointerId);
    }

    touchActiveRef.current = false;
    activePointerIdRef.current = null;

    section.classList.remove(styles.cardsSectionTouchActive);
  };

  return (
    <section
      id="about"
      className={styles.cardsSection}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={stopTouchInteraction}
      onPointerCancel={stopTouchInteraction}
    >
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
              {tArray("Intro.card1.content").map(
                (paragraph, index) => (
                  <p
                    key={index}
                    className={styles.cardParagraph}
                  >
                    {paragraph}
                  </p>
                )
              )}
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
              {tArray("Intro.card2.content").map(
                (paragraph, index) => (
                  <p
                    key={index}
                    className={styles.cardParagraph}
                  >
                    {paragraph}
                  </p>
                )
              )}
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
              {tArray("Intro.card3.content").map(
                (paragraph, index) => (
                  <p
                    key={index}
                    className={styles.cardParagraph}
                  >
                    {paragraph}
                  </p>
                )
              )}
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}