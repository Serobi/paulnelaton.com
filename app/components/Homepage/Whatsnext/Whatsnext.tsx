"use client";

import { useEffect, useRef } from "react";
import {
    BriefcaseBusiness,
    Layers3,
    Cpu,
    Globe2,
    Target,
    Settings,
    Workflow,
    Bot,
    Puzzle,
} from "lucide-react";

import { useLanguage } from "@/contexts/LanguageContext";
import { whatsNextData } from "@/data/whatsnext.data";

import styles from "./WhatsNext.module.css";

const STEP_DURATION = 500;
const MOBILE_LAYOUT_QUERY = "(max-width: 600px)";

export default function WhatsNext() {
    const { lang } = useLanguage();
    const sectionRef = useRef<HTMLElement>(null);
    const sectionsRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const section = sectionRef.current;
        const sections = sectionsRef.current;

        if (!section || !sections) {
            return;
        }

        const path = sections.querySelector<HTMLElement>("[data-gold-path]");
        const trail = sections.querySelector<HTMLElement>("[data-gold-trail]");
        const head = sections.querySelector<HTMLElement>("[data-gold-head]");
        const icons = Array.from(
            sections.querySelectorAll<HTMLElement>("[data-gold-icon]"),
        );
        const contents = Array.from(
            sections.querySelectorAll<HTMLElement>("[data-gold-content]"),
        );

        if (!path || !trail || !head || icons.length === 0) {
            return;
        }

        const reducedMotionQuery = window.matchMedia(
            "(prefers-reduced-motion: reduce)",
        );
        const mobileLayoutQuery = window.matchMedia(MOBILE_LAYOUT_QUERY);

        let iconPositions: number[] = [];
        let animationFrame: number | null = null;
        let animationStartedAt: number | null = null;
        let hasStarted = false;

        const measureIconPositions = () => {
            const sectionsRect = sections.getBoundingClientRect();

            iconPositions = icons.map((icon) => {
                const iconRect = icon.getBoundingClientRect();

                return iconRect.top - sectionsRect.top + iconRect.height / 2;
            });
        };

        const setPathPosition = (position: number) => {
            const startPosition = iconPositions[0] ?? 0;

            trail.style.top = `${startPosition}px`;
            trail.style.height = `${Math.max(0, position - startPosition)}px`;
            head.style.top = `${position}px`;
        };

        const revealIconsThrough = (lastVisibleIndex: number) => {
            icons.forEach((icon, index) => {
                if (index <= lastVisibleIndex) {
                    icon.classList.add(styles.iconRevealed);
                }
            });
        };

        const revealContentsThrough = (lastVisibleIndex: number) => {
            contents.forEach((content, index) => {
                if (index <= lastVisibleIndex) {
                    content.classList.add(styles.contentRevealed);
                }
            });

        };

        const cancelProgression = () => {
            if (animationFrame !== null) {
                window.cancelAnimationFrame(animationFrame);
                animationFrame = null;
            }
        };

        const showFinalState = () => {
            cancelProgression();
            measureIconPositions();
            revealIconsThrough(icons.length - 1);
            revealContentsThrough(contents.length - 1);
            setPathPosition(iconPositions.at(-1) ?? 0);
            sections.classList.add(styles.timelineStatic);
            sections.classList.add(styles.timelineComplete);
        };

        const animateProgression = (timestamp: number) => {
            if (animationStartedAt === null) {
                animationStartedAt = timestamp;
            }

            const elapsed = timestamp - animationStartedAt;

            if (mobileLayoutQuery.matches) {
                const pairCount = Math.max(icons.length, contents.length);
                const mobileEventCount = pairCount * 2;
                const mobileDuration = Math.max(0, mobileEventCount - 1) * STEP_DURATION;

                if (elapsed >= mobileDuration) {
                    revealIconsThrough(icons.length - 1);
                    revealContentsThrough(contents.length - 1);
                    sections.classList.add(styles.timelineComplete);
                    animationFrame = null;
                    return;
                }

                const eventIndex = Math.floor(elapsed / STEP_DURATION);
                const visibleIconIndex = Math.floor(eventIndex / 2);
                const visibleContentIndex = Math.floor((eventIndex - 1) / 2);

                revealIconsThrough(visibleIconIndex);
                revealContentsThrough(visibleContentIndex);
                animationFrame = window.requestAnimationFrame(animateProgression);
                return;
            }

            const segmentCount = iconPositions.length - 1;
            const lineDuration = segmentCount * STEP_DURATION;
            const contentDuration = Math.max(0, contents.length - 1) * STEP_DURATION;
            const totalDuration = lineDuration + contentDuration;

            if (elapsed >= totalDuration) {
                revealIconsThrough(icons.length - 1);
                revealContentsThrough(contents.length - 1);
                setPathPosition(iconPositions.at(-1) ?? 0);
                sections.classList.add(styles.timelineComplete);
                animationFrame = null;
                return;
            }

            if (elapsed < lineDuration && segmentCount > 0) {
                const completedSegments = Math.floor(elapsed / STEP_DURATION);
                const segmentProgress = (elapsed % STEP_DURATION) / STEP_DURATION;
                const segmentStart = iconPositions[completedSegments];
                const segmentEnd = iconPositions[completedSegments + 1];
                const currentPosition =
                    segmentStart + (segmentEnd - segmentStart) * segmentProgress;

                revealIconsThrough(completedSegments);
                setPathPosition(currentPosition);
            } else {
                revealIconsThrough(icons.length - 1);
                setPathPosition(iconPositions.at(-1) ?? 0);
                sections.classList.add(styles.timelineComplete);

                const contentElapsed = elapsed - lineDuration;
                const visibleContentIndex = Math.floor(
                    contentElapsed / STEP_DURATION,
                );

                revealContentsThrough(visibleContentIndex);
            }
            animationFrame = window.requestAnimationFrame(animateProgression);
        };

        const startProgression = () => {
            cancelProgression();
            measureIconPositions();

            sections.classList.remove(styles.timelineStatic);
            sections.classList.remove(styles.timelineComplete);
            icons.forEach((icon) => icon.classList.remove(styles.iconRevealed));
            contents.forEach((content) =>
                content.classList.remove(styles.contentRevealed),
            );

            animationStartedAt = null;
            revealIconsThrough(0);
            setPathPosition(iconPositions[0] ?? 0);
            animationFrame = window.requestAnimationFrame(animateProgression);
        };

        const prepareProgression = () => {
            cancelProgression();
            measureIconPositions();

            sections.classList.remove(styles.timelineStatic);
            sections.classList.remove(styles.timelineComplete);
            icons.forEach((icon) => icon.classList.remove(styles.iconRevealed));
            contents.forEach((content) =>
                content.classList.remove(styles.contentRevealed),
            );
            setPathPosition(iconPositions[0] ?? 0);
        };

        const sectionIsVisible = () => {
            const sectionRect = section.getBoundingClientRect();
            const visibleHeight = Math.max(
                0,
                Math.min(sectionRect.bottom, window.innerHeight) -
                    Math.max(sectionRect.top, 0),
            );

            return visibleHeight / sectionRect.height >= 0.2;
        };

        const applyMotionMode = () => {
            if (reducedMotionQuery.matches) {
                showFinalState();
                return;
            }

            if (hasStarted) {
                if (animationFrame !== null) {
                    startProgression();
                }
                return;
            }

            prepareProgression();

            if (sectionIsVisible()) {
                hasStarted = true;
                startProgression();
            }
        };

        const resizeObserver = new ResizeObserver(() => {
            measureIconPositions();

            if (sections.classList.contains(styles.timelineStatic)) {
                setPathPosition(iconPositions.at(-1) ?? 0);
            }
        });

        const intersectionObserver = new IntersectionObserver(
            ([entry]) => {
                if (
                    !entry.isIntersecting ||
                    hasStarted ||
                    reducedMotionQuery.matches
                ) {
                    return;
                }

                hasStarted = true;
                startProgression();
                intersectionObserver.disconnect();
            },
            {
                threshold: 0.2,
            },
        );

        resizeObserver.observe(sections);
        intersectionObserver.observe(section);
        reducedMotionQuery.addEventListener("change", applyMotionMode);
        mobileLayoutQuery.addEventListener("change", applyMotionMode);
        applyMotionMode();

        return () => {
            cancelProgression();
            resizeObserver.disconnect();
            intersectionObserver.disconnect();
            reducedMotionQuery.removeEventListener("change", applyMotionMode);
            mobileLayoutQuery.removeEventListener("change", applyMotionMode);
        };
    }, []);

    const content = whatsNextData[lang];

    return (
        <section
            ref={sectionRef}
            id="whatsnext"
            className={styles.whatsNext}
            aria-labelledby="whats-next-title"
        >
            <div
                className={styles.backgroundGlow}
                aria-hidden="true"
            />

            <div className={styles.container}>
                {/* ========================================
            INTRO
        ======================================== */}

                <header className={styles.header}>
                    <span className={styles.eyebrow}>
                        {content.eyebrow}
                    </span>

                    <div className={styles.titleBlock}>
                        <h2
                            id="whats-next-title"
                            className={styles.title}
                        >
                            {content.title}
                        </h2>

                        <div
                            className={styles.titleLine}
                            aria-hidden="true"
                        >
                            <span className={styles.titleLineGlow} />
                        </div>
                    </div>

                    {content.intro && (
                        <div className={styles.introBlock}>
                            <span
                                className={styles.introAccent}
                                aria-hidden="true"
                            />

                            <p className={styles.intro}>
                                {content.intro}
                            </p>
                        </div>
                    )}
                </header>

                {/* ========================================
            CONTENT
        ======================================== */}

                <div ref={sectionsRef} className={styles.sections}>
                    <div
                        className={styles.goldPath}
                        data-gold-path
                        aria-hidden="true"
                    >
                        <span className={styles.goldTrail} data-gold-trail />
                        <span className={styles.goldHead} data-gold-head />
                    </div>

                    {/* ========================================
              ROLES
          ======================================== */}

                    <section
                        className={[
                            styles.part,
                            styles.rolesPart,
                        ].join(" ")}
                        data-part="roles"
                    >
                        <div
                            className={styles.partConnector}
                            aria-hidden="true"
                        />

                        <div
                            className={styles.partIcon}
                            data-gold-icon
                            aria-hidden="true"
                        >
                            <BriefcaseBusiness
                                className={styles.sectionIcon}
                            />
                        </div>

                        <div className={styles.partBody} data-gold-content>
                            <header className={styles.partHeader}>
                                <h3 className={styles.partTitle}>
                                    {content.roles.title}
                                </h3>
                            </header>

                            <div className={styles.roleList}>
                                {content.roles.items.map((role) => (
                                    <span
                                        key={role}
                                        className={styles.role}
                                    >
                                        {role}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* ========================================
    TECHNOLOGIES
======================================== */}

                    <section
                        className={[
                            styles.part,
                            styles.technologiesPart,
                        ].join(" ")}
                        data-part="technologies"
                    >
                        <div
                            className={styles.partConnector}
                            aria-hidden="true"
                        />

                        <div
                            className={styles.partIcon}
                            data-gold-icon
                            aria-hidden="true"
                        >
                            <Cpu
                                className={styles.sectionIcon}
                            />
                        </div>

                        <div className={styles.partBody} data-gold-content>
                            <header className={styles.partHeader}>
                                <h3 className={styles.partTitle}>
                                    {content.technologies.title}
                                </h3>
                            </header>

                            <div className={styles.technologyList}>
                                {content.technologies.items.map(
                                    (technology) => (
                                        <span
                                            key={technology}
                                            className={styles.technology}
                                        >
                                            {technology}
                                        </span>
                                    ),
                                )}
                            </div>
                        </div>
                    </section>

                    {/* ========================================
              WHAT I BRING
          ======================================== */}

                    <section
                        className={[
                            styles.part,
                            styles.bringPart,
                        ].join(" ")}
                        data-part="bring"
                    >
                        <div
                            className={styles.partConnector}
                            aria-hidden="true"
                        />

                        <div
                            className={styles.partIcon}
                            data-gold-icon
                            aria-hidden="true"
                        >
                            <Puzzle
                                className={styles.sectionIcon}
                            />
                        </div>

                        <div className={styles.partBody} data-gold-content>
                            <header className={styles.partHeader}>
                                <h3 className={styles.partTitle}>
                                    {content.bring.title}
                                </h3>
                            </header>

                            <div className={styles.capabilities}>
                                <article className={styles.capability}>
                                    <span
                                        className={styles.capabilityIcon}
                                        aria-hidden="true"
                                    >
                                        <Settings className={styles.capabilitySvg} />
                                    </span>

                                    <div className={styles.capabilityContent}>
                                        <h4 className={styles.capabilityTitle}>
                                            {content.bring.engineering.label}
                                        </h4>

                                        <p className={styles.capabilityText}>
                                            {
                                                content.bring.engineering
                                                    .description
                                            }
                                        </p>
                                    </div>
                                </article>

                                <article className={styles.capability}>
                                    <span
                                        className={styles.capabilityIcon}
                                        aria-hidden="true"
                                    >
                                        <Layers3 className={styles.capabilitySvg} />
                                    </span>

                                    <div className={styles.capabilityContent}>
                                        <h4 className={styles.capabilityTitle}>
                                            {content.bring.product.label}
                                        </h4>

                                        <p className={styles.capabilityText}>
                                            {
                                                content.bring.product
                                                    .description
                                            }
                                        </p>
                                    </div>
                                </article>

                                <article className={styles.capability}>
                                    <span
                                        className={styles.capabilityIcon}
                                        aria-hidden="true"
                                    >
                                        <Workflow className={styles.capabilitySvg} />
                                    </span>

                                    <div className={styles.capabilityContent}>
                                        <h4 className={styles.capabilityTitle}>
                                            {content.bring.functional.label}
                                        </h4>

                                        <p className={styles.capabilityText}>
                                            {
                                                content.bring.functional
                                                    .description
                                            }
                                        </p>
                                    </div>
                                </article>

                                <article className={styles.capability}>
                                    <span
                                        className={styles.capabilityIcon}
                                        aria-hidden="true"
                                    >
                                        <Bot className={styles.capabilitySvg} />
                                    </span>

                                    <div className={styles.capabilityContent}>
                                        <h4 className={styles.capabilityTitle}>
                                            {content.bring.ai.label}
                                        </h4>

                                        <p className={styles.capabilityText}>
                                            {content.bring.ai.description}
                                        </p>
                                    </div>
                                </article>
                            </div>
                        </div>
                    </section>

                    {/* ========================================
              MOBILITY
          ======================================== */}

                    <section
                        className={[
                            styles.part,
                            styles.mobilityPart,
                        ].join(" ")}
                        data-part="mobility"
                    >
                        <div
                            className={styles.partConnector}
                            aria-hidden="true"
                        />

                        <div
                            className={styles.partIcon}
                            data-gold-icon
                            aria-hidden="true"
                        >
                            <Globe2
                                className={styles.sectionIcon}
                            />
                        </div>

                        <div className={styles.partBody} data-gold-content>
                            <header className={styles.partHeader}>
                                <h3 className={styles.partTitle}>
                                    {content.mobility.title}
                                </h3>
                            </header>

                            <div className={styles.locationList}>
                                {content.mobility.locations.map(
                                    (location) => (
                                        <span
                                            key={location}
                                            className={styles.location}
                                        >
                                            {location}
                                        </span>
                                    ),
                                )}
                            </div>
                        </div>
                    </section>

                    {/* ========================================
              VALUES
          ======================================== */}

                    <section
                        className={[
                            styles.part,
                            styles.valuesPart,
                        ].join(" ")}
                        data-part="values"
                    >
                        <div
                            className={styles.partConnector}
                            aria-hidden="true"
                        />

                        <div
                            className={styles.partIcon}
                            data-gold-icon
                            aria-hidden="true"
                        >
                            <Target
                                className={styles.sectionIcon}
                            />
                        </div>

                        <div className={styles.partBody} data-gold-content>
                            <header className={styles.partHeader}>
                                <h3 className={styles.partTitle}>
                                    {content.values.title}
                                </h3>
                            </header>

                            <div className={styles.values}>
                                {content.values.items.map((value) => (
                                    <article
                                        key={value.label}
                                        className={styles.value}
                                    >
                                        <span
                                            className={styles.valueIcon}
                                            aria-hidden="true"
                                        />

                                        <div className={styles.valueContent}>
                                            <h4 className={styles.valueTitle}>
                                                {value.label}
                                            </h4>

                                            <p className={styles.valueDescription}>
                                                {value.description}
                                            </p>
                                        </div>
                                    </article>
                                ))}
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </section>
    );
}
