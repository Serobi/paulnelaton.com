"use client";

import { useMemo, useRef, useState } from "react";
import styles from "./ProjectRoadmap.module.css";
import {
  projectRoadmapSteps,
  type ProjectRoadmapStep,
} from "@/data/projectroadmap.data";

const currentStepIndex = projectRoadmapSteps.findIndex(
  (step) => step.status === "current",
);

const initialActiveStepId =
  projectRoadmapSteps[currentStepIndex]?.id ??
  projectRoadmapSteps[0]?.id ??
  "";

export default function ProjectRoadmap() {
  const [activeStepId, setActiveStepId] =
    useState(initialActiveStepId);

  const [clickedStepId, setClickedStepId] =
    useState<string | null>(null);

  const timelineRef = useRef<HTMLDivElement>(null);

  const nodeRefs = useRef<
    Record<string, HTMLButtonElement | null>
  >({});

  const activeStep = useMemo<ProjectRoadmapStep | undefined>(() => {
    return (
      projectRoadmapSteps.find(
        (step) => step.id === activeStepId,
      ) ?? projectRoadmapSteps[0]
    );
  }, [activeStepId]);

  const progress =
    projectRoadmapSteps.length > 1 && currentStepIndex >= 0
      ? (currentStepIndex /
          (projectRoadmapSteps.length - 1)) *
        100
      : 0;

  const centerNode = (
    stepId: string,
    behavior: ScrollBehavior = "smooth",
  ) => {
    const container = timelineRef.current;
    const node = nodeRefs.current[stepId];

    if (!container || !node) {
      return;
    }

    const left =
      node.offsetLeft -
      container.clientWidth / 2 +
      node.offsetWidth / 2;

    container.scrollTo({
      left,
      behavior,
    });
  };

  const handleStepClick = (stepId: string) => {
    setActiveStepId(stepId);
    setClickedStepId(stepId);
    centerNode(stepId);

    window.setTimeout(() => {
      setClickedStepId(null);
    }, 450);
  };

  if (!activeStep) {
    return null;
  }

  return (
    <section
      id="work"
      className={styles.projectRoadmap}
      aria-labelledby="project-roadmap-title"
    >
      <header className={styles.header}>
        <span className={styles.eyebrow}>
          Selected work
        </span>
      </header>

      <section className={styles.timelineSection}>
        <div ref={timelineRef} className={styles.timelineContainer}>
          <div className={styles.stepsWrapper}>
            <div
              className={styles.mainLine}
              aria-hidden="true"
            >
              <span
                className={styles.progressFill}
                style={{ width: `${progress}%` }}
              />
            </div>

            <span
              className={styles.progressEffect}
              style={{ width: `${progress}%` }}
              aria-hidden="true"
            />

            {projectRoadmapSteps.map((step, index) => {
              const isPast = index < currentStepIndex;
              const isCurrent = index === currentStepIndex;
              const isFuture = index > currentStepIndex;
              const isSelected = step.id === activeStepId;
              const isClicked = step.id === clickedStepId;

              return (
                <button
                  key={step.id}
                    ref={(element) => {
                        nodeRefs.current[step.id] = element;
                    }}
                  type="button"
                  className={[
                    styles.stepNode,
                    isPast && styles.past,
                    isCurrent && styles.current,
                    isFuture && styles.future,
                    isSelected && styles.selected,
                    isClicked && styles.clicked,
                  ]
                    .filter(Boolean)
                    .join(" ")}
                  onClick={() => handleStepClick(step.id)}
                  onDragStart={(event) =>
                    event.preventDefault()
                  }
                  aria-pressed={isSelected}
                  aria-label={`Open ${step.title}`}
                >
                  <span className={styles.nodeCircle}>
                    {isCurrent && (
                      <span
                        className={styles.currentPulse}
                        aria-hidden="true"
                      />
                    )}

                    <span className={styles.nodeIndex}>
                      {step.index}
                    </span>
                  </span>

                  <span className={styles.stepInfo}>
                    <span className={styles.stepTitle}>
                      {step.title}
                    </span>

                    <span className={styles.stepPeriod}>
                      {step.period}
                    </span>
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      <article
        key={activeStep.id}
        className={styles.projectPreview}
      >
        <div
          className={styles.previewGlow}
          aria-hidden="true"
        />

        <header className={styles.previewHeader}>
          <div>
            <span className={styles.projectCategory}>
              {activeStep.category}
            </span>

            <h3 className={styles.projectTitle}>
              {activeStep.title}
            </h3>
          </div>

          <span
            className={[
              styles.status,
              styles[`status_${activeStep.status}`],
            ].join(" ")}
          >
            {getStatusLabel(activeStep.status)}
          </span>
        </header>

        <p className={styles.projectSummary}>
          {activeStep.summary}
        </p>

        <div className={styles.previewPlaceholder}>
          <span>Project component coming next</span>
        </div>
      </article>
    </section>
  );
}

function getStatusLabel(
  status: ProjectRoadmapStep["status"],
) {
  switch (status) {
    case "completed":
      return "Completed";

    case "current":
      return "In progress";

    case "planned":
      return "Next";
  }
}