"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { projectRoadmapData, type ProjectRoadmapNode, type ProjectRoadmapState } from "@/data/projectroadmap.data";
import styles from "./Roadmap_test.module.css";
import Cybersecurity from "./Cybersecurity/Cybersecurity";
import { CHAPTER_CHARGE_MS, useCybersecurityChapter } from "./Cybersecurity/useCybersecurityChapter";
import { useRoadmapSelection } from "./useRoadmapSelection";

type StepId = ProjectRoadmapNode["id"];

export default function RoadmapTest() {
  const { lang } = useLanguage();
  const chapter = useCybersecurityChapter();
  const selection = useRoadmapSelection();
  const roadmap = projectRoadmapData[lang];
  const steps = roadmap.nodes.filter((step) => step.id !== "independent");
  const [activeStepId, setActiveStepId] = useState<StepId>("cybersecurity");
  const [renderedId, setRenderedId] = useState<StepId | null>(null);
  const [clickedId, setClickedId] = useState<StepId | null>(null);
  const timelineRef = useRef<HTMLDivElement | null>(null);
  const slotRefs = useRef<Partial<Record<StepId, HTMLDivElement | null>>>({});
  const nodeRefs = useRef<Partial<Record<StepId, HTMLButtonElement | null>>>({});
  const clickTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const selectionBusy = selection.phase !== "idle";
  const chapterAnimating = chapter.phase !== "idle" && chapter.phase !== "ready";
  const busy = selectionBusy || chapterAnimating;
  const currentStepIndex = steps.findIndex((step) => step.state === "next");
  const progress = currentStepIndex < 0 ? 0 : currentStepIndex / (steps.length - 1) * 100;
  const renderedStep = steps.find((step) => step.id === renderedId);
  const cyberVisible = activeStepId === "cybersecurity" && (selectionBusy || chapter.phase !== "idle");
  const cyberPhase = chapter.phase !== "idle" ? chapter.phase : selection.phase === "centering" ? "centering" : "isolating";

  useEffect(() => () => {
    if (clickTimerRef.current) clearTimeout(clickTimerRef.current);
  }, []);

  function returnToRoadmap() {
    selection.reset();
    chapter.reset();
    const node = nodeRefs.current[activeStepId];
    node?.focus({ preventScroll: true });
    timelineRef.current?.scrollIntoView({ block: "center", behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" });
  }

  function handleStepClick(stepId: StepId) {
    if (busy) return;
    if (stepId === "cybersecurity" && chapter.phase === "ready") {
      chapter.stageRef.current?.scrollIntoView({ block: "start", behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" });
      return;
    }
    const container = timelineRef.current;
    const slot = slotRefs.current[stepId];
    if (!container || !slot) return;
    chapter.reset();
    setActiveStepId(stepId);
    setRenderedId(null);
    setClickedId(null);
    if (clickTimerRef.current) clearTimeout(clickTimerRef.current);
    void selection.open(container, slot, async () => {
      if (stepId === "cybersecurity") {
        await chapter.open();
      } else {
        setRenderedId(stepId);
        setClickedId(stepId);
        clickTimerRef.current = setTimeout(() => setClickedId(null), 450);
      }
    });
  }

  return (
    <section className={styles.roadmapPage} data-chapter={chapter.phase}
      data-selection={selection.phase}
      style={{ "--chapter-charge-duration": `${CHAPTER_CHARGE_MS}ms`, "--node-offset": `${selection.offset}px` } as CSSProperties}
      aria-labelledby="project-roadmap-title">
      <header className={styles.header}>
        <span id="project-roadmap-title" className={styles.eyebrow}>{roadmap.eyebrow}</span>
      </header>
      <div className={styles.timelineSection}>
        <div ref={timelineRef} className={styles.timelineContainer}>
          <div className={styles.stepsWrapper}>
            <div className={styles.mainLine} aria-hidden="true">
              <span className={styles.progressFill} style={{ width: `${progress}%` }} />
              <span className={styles.progressEffect} style={{ width: `${progress}%` }} />
            </div>
            {steps.map((step, index) => {
              const isSelected = step.id === activeStepId;
              const stepClassName = [styles.stepNode,
                index < currentStepIndex && styles.past,
                index === currentStepIndex && styles.current,
                index > currentStepIndex && styles.future,
                isSelected && styles.selected,
                clickedId === step.id && styles.clicked,
              ].filter(Boolean).join(" ");
              return (
                <div key={step.id} className={styles.nodeSlot} data-active={isSelected}
                  ref={(element) => { slotRefs.current[step.id] = element; }}>
                  <button type="button" className={stepClassName}
                    ref={(element) => { nodeRefs.current[step.id] = element; }}
                    data-cyber={step.id === "cybersecurity" ? "true" : undefined}
                    tabIndex={busy ? -1 : 0} aria-hidden={busy && !isSelected ? true : undefined}
                    aria-pressed={isSelected} aria-label={`${roadmap.openStepLabel} ${step.label}`}
                    onClick={() => handleStepClick(step.id)}>
                    <span className={styles.nodeCircle}>
                      {index === currentStepIndex && <span className={styles.currentPulse} aria-hidden="true" />}
                      <span className={styles.nodeNumber}>{index + 1}</span>
                    </span>
                    <span className={styles.stepInfo}>
                      <span className={styles.stepTitle}>{step.label}</span>
                      <span className={styles.stepDate}>{step.dates}</span>
                    </span>
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {cyberVisible && <Cybersecurity lang={lang} phase={cyberPhase} stageRef={chapter.stageRef} onBack={returnToRoadmap} />}
      {renderedStep && <article
        key={renderedStep.id}
        className={[
          styles.contentSection,
          styles[renderedStep.state],
        ]
          .filter(Boolean)
          .join(" ")}
      >
        <div
          className={styles.contentGlow}
          aria-hidden="true"
        />

        <header
          className={styles.contentHeader}
        >
          <span
            className={[
              styles.statusBadge,
              styles[
                `status_${renderedStep.state}`
              ],
            ]
              .filter(Boolean)
              .join(" ")}
          >
            {
              roadmap.statusLabels[
                renderedStep.state
              ]
            }
          </span>

          <h2
            className={
              styles.contentTitle
            }
          >
            {renderedStep.title}
          </h2>

          <p
            className={
              styles.contentSummary
            }
          >
            {renderedStep.intro}
          </p>
        </header>

        <div
          className={styles.milestoneList}
        >
          {renderedStep.content.map(
            (item, index) => {
              const itemState:
                ProjectRoadmapState =
                item.state ??
                renderedStep.state;

              return (
                <div
                  key={`${renderedStep.id}-${index}`}
                  className={[
                    styles.milestoneItem,
                    styles[
                      `item_${itemState}`
                    ],
                  ]
                    .filter(Boolean)
                    .join(" ")}
                  style={{
                    animationDelay: `${
                      index * 90
                    }ms`,
                  }}
                >
                  <span
                    className={[
                      styles.itemDot,
                      styles[
                        `dot_${itemState}`
                      ],
                    ]
                      .filter(Boolean)
                      .join(" ")}
                    aria-hidden="true"
                  />

                  <span
                    className={
                      styles.itemText
                    }
                  >
                    {item.label}
                  </span>
                </div>
              );
            },
          )}
        </div>
      </article>}
    </section>
  );
}