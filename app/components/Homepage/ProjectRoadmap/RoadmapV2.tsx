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
    projectRoadmapContent,
    projectRoadmapSteps,
    type ProjectRoadmapStatus,
    type ProjectRoadmapStepId,
} from "@/data/projectroadmap.data";

import styles from "./RoadmapV2.module.css";

const CURRENT_STEP_INDEX =
    projectRoadmapSteps.findIndex(
        (step) => step.status === "current"
    );

const LAST_STEP =
    projectRoadmapSteps[projectRoadmapSteps.length - 1];

const INITIAL_ACTIVE_STEP_ID: ProjectRoadmapStepId =
    LAST_STEP?.id ??
    projectRoadmapSteps[0]?.id ??
    "cybersecurity";

const PROGRESS =
    projectRoadmapSteps.length > 1 &&
        CURRENT_STEP_INDEX >= 0
        ? (CURRENT_STEP_INDEX /
            (projectRoadmapSteps.length - 1)) *
        100
        : 0;

export default function RoadmapV2() {
    const { t } = useLanguage();

    const [activeStepId, setActiveStepId] =
        useState<ProjectRoadmapStepId>(
            INITIAL_ACTIVE_STEP_ID
        );

    const [clickedStepId, setClickedStepId] =
        useState<ProjectRoadmapStepId | null>(
            null
        );

    const timelineRef =
        useRef<HTMLDivElement | null>(null);

    const nodeRefs = useRef<
        Partial<
            Record<
                ProjectRoadmapStepId,
                HTMLButtonElement | null
            >
        >
    >({});

    const clickTimerRef =
        useRef<ReturnType<typeof setTimeout> | null>(
            null
        );

    const isMouseDownRef = useRef(false);
    const hasDraggedRef = useRef(false);
    const dragStartXRef = useRef(0);
    const dragStartScrollLeftRef = useRef(0);

    const handleMouseDown = (
        event: React.MouseEvent<HTMLDivElement>
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
        dragStartScrollLeftRef.current = container.scrollLeft;

        container.classList.add(styles.dragging);
    };

    const activeStep = useMemo(() => {
        return (
            projectRoadmapSteps.find(
                (step) => step.id === activeStepId
            ) ??
            projectRoadmapSteps[
            CURRENT_STEP_INDEX
            ] ??
            projectRoadmapSteps[0]
        );
    }, [activeStepId]);

    const activeContent =
        projectRoadmapContent[
        activeStep?.id ??
        INITIAL_ACTIVE_STEP_ID
        ] ??
        projectRoadmapContent[
        INITIAL_ACTIVE_STEP_ID
        ];

    useEffect(() => {
        return () => {
            if (clickTimerRef.current) {
                clearTimeout(
                    clickTimerRef.current
                );
            }
        };
    }, []);

    const centerNode = (
        stepId: ProjectRoadmapStepId,
        behavior: ScrollBehavior = "smooth"
    ) => {
        const container = timelineRef.current;
        const node = nodeRefs.current[stepId];

        if (!container || !node) {
            return;
        }

        const containerRect = container.getBoundingClientRect();
        const nodeRect = node.getBoundingClientRect();

        const nodeCenter =
            nodeRect.left -
            containerRect.left +
            container.scrollLeft +
            nodeRect.width / 2;

        const targetLeft =
            nodeCenter - container.clientWidth / 2;

        container.scrollTo({
            left: targetLeft,
            behavior,
        });
    };

    useLayoutEffect(() => {
        centerNode(INITIAL_ACTIVE_STEP_ID, "auto");
    }, []);

    const handleStepClick = (
        stepId: ProjectRoadmapStepId
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

                clickTimerRef.current = setTimeout(() => {
                    setClickedStepId(null);
                    clickTimerRef.current = null;
                }, 450);
            });
        });

        centerNode(stepId);
    };

    useEffect(() => {
        const handleMouseMove = (event: MouseEvent) => {
            const container = timelineRef.current;

            if (!container || !isMouseDownRef.current) {
                return;
            }

            const deltaX =
                event.clientX - dragStartXRef.current;

            /*
             * On ne déclenche réellement le drag
             * qu'après quelques pixels de déplacement.
             */
            if (!hasDraggedRef.current) {
                if (Math.abs(deltaX) < 6) {
                    return;
                }

                hasDraggedRef.current = true;
            }

            event.preventDefault();

            container.scrollLeft =
                dragStartScrollLeftRef.current - deltaX;
        };

        const handleMouseUp = () => {
            const container = timelineRef.current;

            isMouseDownRef.current = false;
            container?.classList.remove(styles.dragging);

            /*
             * On conserve brièvement l'information indiquant
             * qu'un drag vient d'avoir lieu, afin de bloquer
             * le click éventuellement émis juste après mouseup.
             */
            window.setTimeout(() => {
                hasDraggedRef.current = false;
            }, 0);
        };

        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("mouseup", handleMouseUp);
        window.addEventListener("blur", handleMouseUp);

        return () => {
            window.removeEventListener(
                "mousemove",
                handleMouseMove
            );

            window.removeEventListener(
                "mouseup",
                handleMouseUp
            );

            window.removeEventListener(
                "blur",
                handleMouseUp
            );
        };
    }, []);

    if (!activeStep || !activeContent) {
        return null;
    }

    return (
        <section
            id="work"
            className={styles.roadmapPage}
            aria-labelledby="project-roadmap-title"
        >
            <header className={styles.header}>
                <span
                    id="project-roadmap-title"
                    className={styles.eyebrow}
                >
                    {t("projects.eyebrow")}
                </span>
            </header>

            <div
                className={styles.timelineSection}
            >
                <div
                    ref={timelineRef}
                    className={styles.timelineContainer}
                    onMouseDown={handleMouseDown}
                >
                    <div className={styles.scrollTrack}>
                        <div
                            className={styles.stepsWrapper}
                        >
                            <div
                                className={styles.mainLine}
                                aria-hidden="true"
                            >
                                <span
                                    className={styles.progressFill}
                                    style={{
                                        width: `${PROGRESS}%`,
                                    }}
                                />

                                <span
                                    className={styles.progressEffect}
                                    style={{
                                        width: `${PROGRESS}%`,
                                    }}
                                />
                            </div>

                            {projectRoadmapSteps.map(
                                (step, index) => {
                                    const isPast =
                                        index <
                                        CURRENT_STEP_INDEX;

                                    const isCurrent =
                                        index ===
                                        CURRENT_STEP_INDEX;

                                    const isFuture =
                                        index >
                                        CURRENT_STEP_INDEX;

                                    const isSelected =
                                        step.id === activeStepId;

                                    const isClicked =
                                        step.id === clickedStepId;

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
                                            key={step.id}
                                            ref={(element) => {
                                                nodeRefs.current[step.id] = element;
                                            }}
                                            type="button"
                                            className={stepClassName}
                                            onClick={() => {
                                                if (hasDraggedRef.current) {
                                                    return;
                                                }

                                                handleStepClick(step.id);
                                            }}
                                            onDragStart={(event) => {
                                                event.preventDefault();
                                            }}
                                            aria-pressed={isSelected}
                                            aria-label={`Open ${step.title}`}
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
                                                    {step.index}
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
                                                    {step.title}
                                                </span>

                                                <span
                                                    className={
                                                        styles.stepDate
                                                    }
                                                >
                                                    {step.period}
                                                </span>
                                            </span>
                                        </button>
                                    );
                                }
                            )}
                        </div>
                    </div>
                </div>
            </div>

            <article
                key={activeStep.id}
                className={[
                    styles.contentSection,
                    styles[activeContent.status],
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
                            `status_${activeContent.status}`
                            ],
                        ]
                            .filter(Boolean)
                            .join(" ")}
                    >
                        {getStatusLabel(
                            activeContent.status
                        )}
                    </span>

                    <h2
                        className={
                            styles.contentTitle
                        }
                    >
                        {activeContent.title}
                    </h2>

                    <p
                        className={
                            styles.contentSummary
                        }
                    >
                        {activeContent.summary}
                    </p>
                </header>

                <div
                    className={styles.milestoneList}
                >
                    {activeContent.items.map(
                        (item, index) => {
                            const itemStatus =
                                item.status ??
                                activeContent.status;

                            return (
                                <div
                                    key={`${activeStep.id}-${index}`}
                                    className={[
                                        styles.milestoneItem,
                                        styles[
                                        `item_${itemStatus}`
                                        ],
                                    ]
                                        .filter(Boolean)
                                        .join(" ")}
                                    style={{
                                        animationDelay: `${index * 90
                                            }ms`,
                                    }}
                                >
                                    <span
                                        className={[
                                            styles.itemDot,
                                            styles[
                                            `dot_${itemStatus}`
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
                        }
                    )}
                </div>
            </article>
        </section>
    );
}

function getStatusLabel(
    status: ProjectRoadmapStatus
) {
    switch (status) {
        case "completed":
            return "Completed";

        case "current":
            return "Current";

        case "next":
            return "Next";
    }
}