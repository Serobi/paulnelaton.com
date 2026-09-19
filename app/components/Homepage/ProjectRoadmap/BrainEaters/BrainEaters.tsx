"use client";

import { useEffect, useId, useRef, useState, type RefObject } from "react";
import Image from "next/image";
import { motion, useAnimationControls, useInView, useReducedMotion } from "framer-motion";
import { brainEatersData, brainEatersMedia, type BrainEatersLanguage, type BrainEatersSection } from "./BrainEaters.data";
import type { ChapterPhase } from "../Cybersecurity/useCybersecurityChapter";
import styles from "./BrainEaters.module.css";

type BrainEatersProps = {
  lang?: BrainEatersLanguage;
  stageRef?: RefObject<HTMLDivElement | null>;
  phase?: ChapterPhase;
  onBack?: () => void;
};

const sections = Object.keys(brainEatersMedia) as BrainEatersSection[];
const ease = [.22, .7, .25, 1] as const;
const settled = { opacity: 1, x: 0, y: 0, scale: 1 };
const incoming = { opacity: 0, x: -8, y: 14, scale: .985 };

export default function BrainEaters({ lang = "fr", stageRef, phase, onBack }: BrainEatersProps) {
  const localRef = useRef<HTMLDivElement | null>(null);
  const mobileNavigationRef = useRef<HTMLElement | null>(null);
  const rootRef = stageRef ?? localRef;
  const inView = useInView(rootRef, { once: true, amount: .15 });
  const revealed = phase ? phase === "revealing" || phase === "ready" : inView;
  const reduced = useReducedMotion();
  const [activeSection, setActiveSection] = useState<BrainEatersSection>("overview");
  const [displayedSection, setDisplayedSection] = useState<BrainEatersSection>("overview");
  const entered = useRef(false);
  const tiles = useAnimationControls();
  const title = useAnimationControls();
  const prefix = useId();
  const content = brainEatersData[lang];

  useEffect(() => {
    if (!revealed) return;
    const centerSelection = (smooth: boolean) => {
      const navigation = mobileNavigationRef.current;
      const selected = navigation?.querySelector<HTMLElement>('[aria-pressed="true"]');
      if (!navigation || !selected || navigation.clientWidth === 0 || navigation.scrollWidth <= navigation.clientWidth) return;
      const bar = navigation.getBoundingClientRect();
      const item = selected.getBoundingClientRect();
      const target = navigation.scrollLeft + item.left - bar.left - navigation.clientLeft
        - (navigation.clientWidth - item.width) / 2;
      navigation.scrollTo({
        left: Math.max(0, Math.min(target, navigation.scrollWidth - navigation.clientWidth)),
        behavior: smooth && !reduced ? "smooth" : "instant",
      });
    };
    centerSelection(true);
    const onResize = () => centerSelection(false);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [activeSection, revealed, reduced, lang]);

  // Await the outgoing tiles before replacing content. Cleanup cancels stale
  // selections, including fast clicks and leaving the Roadmap chapter.
  useEffect(() => {
    if (!revealed) return;
    let cancelled = false;
    const initialEntry = !entered.current;
    entered.current = true;
    async function compose() {
      if (initialEntry) {
        tiles.set({
          opacity: 0,
          x: -14,
          y: 18,
          scale: .955,
        });

        title.set({
          opacity: 1,
          x: 0,
          y: 0,
        });

        setDisplayedSection(activeSection);

        await tiles.start((index: number) => ({
          opacity: [0, 1, 1],
          x: [-14, 0, 0],
          y: [18, -3, 0],
          scale: [.955, 1.014, 1],
          boxShadow: [
            "0 10px 22px rgba(0,0,0,0)",
            "0 16px 32px rgba(0,0,0,.18)",
            "0 0 0 rgba(0,0,0,0)",
          ],
          transition: {
            duration: reduced ? 0 : .72,
            delay: reduced ? 0 : 1 + index * .12,
            times: [0, .78, 1],
            ease,
          },
        }));

        return;
      }
      else {
        await Promise.all([
          tiles.start((index: number) => ({
            ...(reduced
              ? { opacity: 0 }
              : {
                opacity: [1, 1, 0],
                x: [0, 0, 12],
                y: [0, -2, 16],
                scale: [1, 1.012, .96],
                boxShadow: [
                  "0 0 0 rgba(0,0,0,0)",
                  "0 12px 26px rgba(0,0,0,.16)",
                  "0 8px 18px rgba(0,0,0,0)",
                ],
              }),
            transition: {
              duration: reduced ? 0 : .48,
              delay: reduced ? 0 : index * .07,
              times: [0, .22, 1],
              ease,
            },
          })),

          title.start({
            opacity: 0,
            x: reduced ? 0 : 8,
            y: reduced ? 0 : 5,
            transition: {
              duration: reduced ? 0 : .28,
              ease,
            },
          }),
        ]);
        if (cancelled) return;
      }
      tiles.set(reduced ? settled : { ...incoming, x: initialEntry ? 0 : -8, y: initialEntry ? 12 : 14 });
      title.set({
        opacity: initialEntry ? 1 : 0,
        x: reduced || initialEntry ? 0 : -8,
        y: reduced || initialEntry ? 0 : 5,
      });
      setDisplayedSection(activeSection);
      void title.start({
        opacity: 1,
        x: 0,
        y: 0,
        transition: {
          duration: reduced ? 0 : .3,
          ease,
        },
      });
      await tiles.start((index: number) => ({
        ...(reduced || initialEntry
          ? settled
          : {
            opacity: [0, 1, 1],
            x: [-12, 0, 0],
            y: [16, -2, 0],
            scale: [.96, 1.012, 1],
            boxShadow: [
              "0 8px 18px rgba(0,0,0,0)",
              "0 12px 26px rgba(0,0,0,.16)",
              "0 0 0 rgba(0,0,0,0)",
            ],
          }),
        transition: {
          duration: reduced ? 0 : initialEntry ? .55 : .48,
          delay:
            reduced ? 0 : (initialEntry ? .1 : 0) + index * .07,
          times: [0, .78, 1],
          ease,
        },
      }));
    }
    void compose();
    return () => { cancelled = true; tiles.stop(); title.stop(); };
  }, [activeSection, revealed, reduced, tiles, title]);

  const entrance = (delay: number) => ({
    initial: {
      opacity: 0,
      x: -10,
      y: 16,
      scale: .97,
    },
    animate: revealed
      ? {
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
      }
      : {
        opacity: 0,
        x: -10,
        y: 16,
        scale: .97,
      },
    transition: {
      duration: reduced ? 0 : .65,
      delay: reduced ? 0 : delay,
      ease,
    },

  });

  const currentTitle =
    displayedSection === "overview"
      ? content.overviewLabel
      : content.navigation.find((item) => item.id === displayedSection)?.label;

  return (
    <section className={styles.root} aria-label="Brain Eaters" data-active-section={activeSection}
      aria-hidden={!revealed} inert={!revealed}>
      <motion.div ref={rootRef} className={styles.layout} style={{ visibility: revealed ? "visible" : "hidden" }}
        initial={{ opacity: 0 }} animate={{ opacity: revealed ? 1 : 0 }} transition={{ duration: reduced ? 0 : .3, ease }}>
        <div className={styles.content}>
          <motion.header className={styles.header} {...entrance(0)}>
            <div className={styles.eyebrow}>
              <button type="button" className={styles.brand} onClick={() => setActiveSection("overview")}
                aria-label={content.overview} aria-pressed={activeSection === "overview"}
                aria-controls={`${prefix}-overview`}>Brain Eaters</button>
              <span aria-hidden="true"> · </span><span>{content.projectContext}</span>
            </div>
            <motion.h2 id={`${prefix}-title`} animate={title}>
              {currentTitle}
            </motion.h2>
          </motion.header>

          <div className={styles.panels}>
            {sections.map((section) => {
              const view = content.sections[section];
              const media = brainEatersMedia[section];
              const active = section === displayedSection;
              const sectionTitle = section === "overview" ? content.overviewLabel : content.navigation.find((item) => item.id === section)?.label;
              return (
                <article key={section} id={`${prefix}-${section}`} className={styles.panel}
                  aria-labelledby={`${prefix}-title`} aria-hidden={!active} inert={!active}
                  style={{ visibility: active ? "visible" : "hidden" }}>
                  <motion.div className={styles.visualTile} data-fit={media.fit} custom={0}
                    initial={incoming} animate={tiles}>
                    <div className={styles.visualFrame}>
                    {media.src ? <Image src={media.src} alt={`${sectionTitle} — Brain Eaters`} fill
                      sizes="(max-width: 560px) 180px, (max-width: 900px) 26vw, 230px" className={styles.image} /> : (
                      <div className={styles.placeholder}><span>{media.placeholder}</span>
                        <small>{section === "overview" ? "Brain Eaters" : sectionTitle}</small></div>
                    )}
                    </div>
                  </motion.div>
                  <motion.aside className={styles.sideTile} custom={1} initial={incoming} animate={tiles}
                    aria-label={sectionTitle}>
                    <dl className={styles.highlights}>
                      {view.functional.map((item) => <div key={item.title}><dt>{item.title}</dt><dd>{item.description}</dd></div>)}
                    </dl>
                  </motion.aside>
                  <motion.div className={styles.mainTile} custom={2} initial={incoming} animate={tiles}>
                    <h3 className={styles.technicalTitle}>{view.technical.title}</h3>
                    <p className={styles.description}>{view.technical.description}</p>
                    <ul className={styles.metadata}>{view.technical.tags.map((item) => <li key={item}>{item}</li>)}</ul>
                  </motion.div>
                </article>
              );
            })}
          </div>
        </div>

        <nav className={styles.navigation} aria-label={content.explore}>
          <motion.p className={styles.navHeading} {...entrance(.31)}>{content.explore}</motion.p>
          {content.navigation.map((item, index) => (
            <motion.button key={item.id} type="button" className={styles.navItem}
              aria-pressed={activeSection === item.id} aria-controls={`${prefix}-${item.id}`}
              onClick={() => setActiveSection(item.id)} {...entrance(.38 + index * .07)}>
              <span className={styles.navCopy}><span className={styles.navTitle}>{item.label}</span>
                <span className={styles.navDetail}>{item.detail}</span></span>
            </motion.button>
          ))}
        </nav>
      </motion.div>
      <nav ref={mobileNavigationRef} className={styles.mobileNavigation} aria-label={content.explore}
        style={{ visibility: revealed ? "visible" : "hidden" }}>
        {[{ id: "overview" as const, label: content.overviewLabel }, ...content.navigation].map((item) => (
          <button key={item.id} type="button" className={styles.mobileNavItem}
            aria-pressed={activeSection === item.id} aria-controls={`${prefix}-${item.id}`}
            onClick={() => setActiveSection(item.id)}>
            {item.id === "uiux" ? "UI/UX" : item.label}
          </button>
        ))}
      </nav>
      {onBack && <motion.button type="button" className={styles.back} onClick={onBack}
        {...entrance(.66)}><span aria-hidden="true">← </span>{content.back}</motion.button>}
    </section>
  );
}
