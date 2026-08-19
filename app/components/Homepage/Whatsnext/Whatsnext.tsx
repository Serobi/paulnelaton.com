"use client";

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

export default function WhatsNext() {
    const { lang } = useLanguage();

    const content = whatsNextData[lang];

    return (
        <section
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

                <div className={styles.sections}>
                    {/* Future animated gold structure */}
                    <div
                        className={styles.goldPath}
                        aria-hidden="true"
                    />

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
                            aria-hidden="true"
                        >
                            <BriefcaseBusiness
                                className={styles.sectionIcon}
                            />
                        </div>

                        <div className={styles.partBody}>
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
                            aria-hidden="true"
                        >
                            <Cpu
                                className={styles.sectionIcon}
                            />
                        </div>

                        <div className={styles.partBody}>
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
                            aria-hidden="true"
                        >
                            <Puzzle
                                className={styles.sectionIcon}
                            />
                        </div>

                        <div className={styles.partBody}>
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
                            aria-hidden="true"
                        >
                            <Globe2
                                className={styles.sectionIcon}
                            />
                        </div>

                        <div className={styles.partBody}>
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
                            aria-hidden="true"
                        >
                            <Target
                                className={styles.sectionIcon}
                            />
                        </div>

                        <div className={styles.partBody}>
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
