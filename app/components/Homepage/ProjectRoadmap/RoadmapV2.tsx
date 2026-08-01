"use client";

import {
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import { useLanguage } from "@/contexts/LanguageContext";
import {
  projectRoadmapData,
  type ProjectRoadmapState,
} from "@/data/projectroadmap.data";

import styles from "./RoadmapV2.module.css";

export default function RoadmapV2() {
  const { lang } = useLanguage();

  const roadmap = projectRoadmapData[lang];
  const steps = roadmap.nodes;

  const getStepId = (index: number) => index + 1;

  const initialActiveStepId = steps.length || 1;

  const [activeStepId, setActiveStepId] =
    useState<number>(initialActiveStepId);

  const [clickedStepId, setClickedStepId] =
    useState<number | null>(null);

  const timelineRef =
    useRef<HTMLDivElement | null>(null);

  const nodeRefs = useRef<
    Partial<Record<number, HTMLButtonElement | null>>
  >({});

  const clickTimerRef =
    useRef<ReturnType<typeof setTimeout> | null>(
      null,
    );

  const isMouseDownRef = useRef(false);
  const hasDraggedRef = useRef(false);
  const dragStartXRef = useRef(0);
  const dragStartScrollLeftRef = useRef(0);

  const currentStepIndex = useMemo(() => {
    return steps.findIndex(
      (step) => step.state === "next",
    );
  }, [steps]);

  const progress = useMemo(() => {
    if (
      steps.length <= 1 ||
      currentStepIndex < 0
    ) {
      return 0;
    }

    return (
      (currentStepIndex /
        (steps.length - 1)) *
      100
    );
  }, [currentStepIndex, steps.length]);

  const activeStep = useMemo(() => {
    return (
      steps[activeStepId - 1] ??
      steps[currentStepIndex] ??
      steps[0]
    );
  }, [
    activeStepId,
    currentStepIndex,
    steps,
  ]);

  const handleMouseDown = (
    event: React.MouseEvent<HTMLDivElement>,
  ) => {
    if (event.button !== 0) {
      return;
    }

    const container = timelineRef.current;

    if (!container) {
      return;
    }

    isMouseDownRef.current = true;
    hasDraggedRef.current = false;

    dragStartXRef.current = event.clientX;
    dragStartScrollLeftRef.current =
      container.scrollLeft;

    container.classList.add(styles.dragging);
  };

  const centerNode = (
    stepId: number,
    behavior: ScrollBehavior = "smooth",
  ) => {
    const container = timelineRef.current;
    const node = nodeRefs.current[stepId];

    if (!container || !node) {
      return;
    }

    const containerRect =
      container.getBoundingClientRect();

    const nodeRect =
      node.getBoundingClientRect();

    const nodeCenter =
      nodeRect.left -
      containerRect.left +
      container.scrollLeft +
      nodeRect.width / 2;

    const targetLeft =
      nodeCenter -
      container.clientWidth / 2;

    container.scrollTo({
      left: targetLeft,
      behavior,
    });
  };

  useEffect(() => {
    return () => {
      if (clickTimerRef.current) {
        clearTimeout(clickTimerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    setActiveStepId((currentId) => {
      if (steps.length === 0) {
        return 1;
      }

      return Math.min(
        Math.max(currentId, 1),
        steps.length,
      );
    });
  }, [steps.length]);

  useLayoutEffect(() => {
    centerNode(activeStepId, "auto");
  }, [lang]);

  const handleStepClick = (
    stepId: number,
  ) => {
    setActiveStepId(stepId);

    if (clickTimerRef.current) {
      clearTimeout(clickTimerRef.current);
      clickTimerRef.current = null;
    }

    setClickedStepId(null);

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setClickedStepId(stepId);

        clickTimerRef.current = setTimeout(
          () => {
            setClickedStepId(null);
            clickTimerRef.current = null;
          },
          450,
        );
      });
    });

    centerNode(stepId);
  };

  useEffect(() => {
    const handleMouseMove = (
      event: MouseEvent,
    ) => {
      const container =
        timelineRef.current;

      if (
        !container ||
        !isMouseDownRef.current
      ) {
        return;
      }

      const deltaX =
        event.clientX -
        dragStartXRef.current;

      if (!hasDraggedRef.current) {
        if (Math.abs(deltaX) < 6) {
          return;
        }

        hasDraggedRef.current = true;
      }

      event.preventDefault();

      container.scrollLeft =
        dragStartScrollLeftRef.current -
        deltaX;
    };

    const handleMouseUp = () => {
      const container =
        timelineRef.current;

      isMouseDownRef.current = false;

      container?.classList.remove(
        styles.dragging,
      );

      window.setTimeout(() => {
        hasDraggedRef.current = false;
      }, 0);
    };

    window.addEventListener(
      "mousemove",
      handleMouseMove,
    );

    window.addEventListener(
      "mouseup",
      handleMouseUp,
    );

    window.addEventListener(
      "blur",
      handleMouseUp,
    );

    return () => {
      window.removeEventListener(
        "mousemove",
        handleMouseMove,
      );

      window.removeEventListener(
        "mouseup",
        handleMouseUp,
      );

      window.removeEventListener(
        "blur",
        handleMouseUp,
      );
    };
  }, []);

  if (!activeStep) {
    return null;
  }

  return (
    <section
      className={styles.roadmapPage}
      aria-labelledby="project-roadmap-title"
    >
      <header className={styles.header}>
        <span
          id="project-roadmap-title"
          className={styles.eyebrow}
        >
          {roadmap.eyebrow}
        </span>
      </header>

      <div className={styles.timelineSection}>
        <div
          ref={timelineRef}
          className={
            styles.timelineContainer
          }
          onMouseDown={handleMouseDown}
        >
          <div className={styles.scrollTrack}>
            <div
              className={
                styles.stepsWrapper
              }
            >
              <div
                className={styles.mainLine}
                aria-hidden="true"
              >
                <span
                  className={
                    styles.progressFill
                  }
                  style={{
                    width: `${progress}%`,
                  }}
                />

                <span
                  className={
                    styles.progressEffect
                  }
                  style={{
                    width: `${progress}%`,
                  }}
                />
              </div>

              {steps.map((step, index) => {
                const stepId =
                  getStepId(index);

                const isPast =
                  index <
                  currentStepIndex;

                const isCurrent =
                  index ===
                  currentStepIndex;

                const isFuture =
                  index >
                  currentStepIndex;

                const isSelected =
                  stepId === activeStepId;

                const isClicked =
                  stepId === clickedStepId;

                const stepClassName = [
                  styles.stepNode,
                  isPast && styles.past,
                  isCurrent &&
                    styles.current,
                  isFuture &&
                    styles.future,
                  isSelected &&
                    styles.selected,
                  isClicked &&
                    styles.clicked,
                ]
                  .filter(Boolean)
                  .join(" ");

                return (
                  <button
                    key={stepId}
                    ref={(element) => {
                      nodeRefs.current[
                        stepId
                      ] = element;
                    }}
                    type="button"
                    className={
                      stepClassName
                    }
                    onClick={() => {
                      if (
                        hasDraggedRef.current
                      ) {
                        return;
                      }

                      handleStepClick(
                        stepId,
                      );
                    }}
                    onDragStart={(event) => {
                      event.preventDefault();
                    }}
                    aria-pressed={
                      isSelected
                    }
                    aria-label={`${roadmap.openStepLabel} ${step.label}`}
                  >
                    <span
                      className={
                        styles.nodeCircle
                      }
                    >
                      {isCurrent && (
                        <span
                          className={
                            styles.currentPulse
                          }
                          aria-hidden="true"
                        />
                      )}

                      <span
                        className={
                          styles.nodeNumber
                        }
                      >
                        {stepId}
                      </span>
                    </span>

                    <span
                      className={
                        styles.stepInfo
                      }
                    >
                      <span
                        className={
                          styles.stepTitle
                        }
                      >
                        {step.label}
                      </span>

                      <span
                        className={
                          styles.stepDate
                        }
                      >
                        {step.dates}
                      </span>
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <article
        key={activeStepId}
        className={[
          styles.contentSection,
          styles[activeStep.state],
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
                `status_${activeStep.state}`
              ],
            ]
              .filter(Boolean)
              .join(" ")}
          >
            {
              roadmap.statusLabels[
                activeStep.state
              ]
            }
          </span>

          <h2
            className={
              styles.contentTitle
            }
          >
            {activeStep.title}
          </h2>

          <p
            className={
              styles.contentSummary
            }
          >
            {activeStep.intro}
          </p>
        </header>

        <div
          className={styles.milestoneList}
        >
          {activeStep.content.map(
            (item, index) => {
              const itemState:
                ProjectRoadmapState =
                item.state ??
                activeStep.state;

              return (
                <div
                  key={`${activeStepId}-${index}`}
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
      </article>
    </section>
  );
}