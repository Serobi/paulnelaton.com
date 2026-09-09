"use client";

import { useId, useRef, useState, type KeyboardEvent, type Ref, type CSSProperties } from "react";
import type { ChapterPhase } from "./useCybersecurityChapter";
import { cybersecurityData, type CybersecurityLanguage } from "./Cybersecurity.data";
import styles from "./Cybersecurity.module.css";

type CybersecurityProps = {
  lang?: CybersecurityLanguage;
  phase?: ChapterPhase;
  introRef?: Ref<HTMLElement>;
  stageRef?: Ref<HTMLDivElement>;
  onBack?: () => void;
};

export default function Cybersecurity({ lang = "fr", phase, introRef, stageRef, onBack }: CybersecurityProps) {
  const content = cybersecurityData[lang];
  const [activeId, setActiveId] = useState(content.experiences[0].id);
  const [hasNavigated, setHasNavigated] = useState(false);
  const prefix = useId();
  const buttons = useRef<(HTMLButtonElement | null)[]>([]);
  const activeIndex = content.experiences.findIndex((experience) => experience.id === activeId);
  const active = content.experiences[activeIndex];

  function selectExperience(id: string) {
    if (id === activeId) return;
    setHasNavigated(true);
    setActiveId(id);
  }

  function handleKeyDown(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    let next = index;
    if (event.key === "ArrowRight") next = (index + 1) % content.experiences.length;
    else if (event.key === "ArrowLeft") next = (index - 1 + content.experiences.length) % content.experiences.length;
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = content.experiences.length - 1;
    else return;
    event.preventDefault();
    selectExperience(content.experiences[next].id);
    buttons.current[next]?.focus({ preventScroll: true });
  }

  return (
    <section className={`${styles.root} ${phase ? styles.chapter : ""}`} data-phase={phase} aria-labelledby={`${prefix}-title`}>
      <header ref={introRef} className={styles.header} aria-hidden={phase === "centering" || phase === "isolating" || phase === "charging"}>
        <span className={styles.eyebrow}>Infrastructure / Security / Automation</span>
        <h2 id={`${prefix}-title`}>{content.title}</h2>
        <p>{content.intro}</p>
      </header>

      <div ref={stageRef} className={styles.stage} inert={!!phase && phase !== "ready"} aria-hidden={!!phase && !["revealing", "ready"].includes(phase)}>
      <div className={styles.tabs} role="tablist" aria-label={content.navigation}>
        {content.experiences.map((experience, index) => (
          <button
            key={experience.id}
            ref={(element) => { buttons.current[index] = element; }}
            type="button"
            role="tab"
            id={`${prefix}-tab-${experience.id}`}
            aria-controls={`${prefix}-panel-${experience.id}`}
            aria-selected={experience.id === activeId}
            tabIndex={experience.id === activeId ? 0 : -1}
            className={styles.tab}
            style={{ "--node-delay": `${180 + index * 110}ms` } as CSSProperties}
            onClick={() => selectExperience(experience.id)}
            onKeyDown={(event) => handleKeyDown(event, index)}
          >
            <span className={styles.node} aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
            <span className={styles.company}>{experience.company}</span>
            <span className={styles.period}>{experience.period}</span>
          </button>
        ))}
      </div>

      {content.experiences.map((experience) => (
        <div key={experience.id} role="tabpanel" id={`${prefix}-panel-${experience.id}`}
          aria-labelledby={`${prefix}-tab-${experience.id}`} hidden={experience.id !== activeId}
          tabIndex={0} className={styles.panel}>
          {experience.id === activeId && (
            <div key={active.id} className={`${styles.panelContent} ${hasNavigated ? styles.experienceSwitch : ""}`}>
              <header className={styles.experienceHeader}>
                <div>
                  <span className={styles.eyebrow}>{active.company} <span className={styles.separator}>/</span> {active.period}</span>
                  <h3>{active.role}</h3>
                </div>
                <span className={styles.focus}>{active.focus}</span>
              </header>
              <p className={styles.context}>{active.context}</p>
              <div className={styles.details}>
                <section>
                  <h4>{content.responsibilities}</h4>
                  <ul className={styles.responsibilities}>
                    {active.responsibilities.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                </section>
                <aside className={styles.highlight}>
                  <span className={styles.signal} aria-hidden="true">↗</span>
                  <h4>{content.highlight}</h4>
                  <p>{active.highlight}</p>
                </aside>
              </div>
              <footer className={styles.technologies}>
                <h4>{content.technologies}</h4>
                <ul>{active.technologies.map((technology) => <li key={technology}>{technology}</li>)}</ul>
              </footer>
            </div>
          )}
        </div>
      ))}
      {onBack && <button type="button" className={styles.back} onClick={onBack}>{lang === "fr" ? "← Revenir au parcours" : "← Back to the journey"}</button>}
      </div>
    </section>
  );
}
