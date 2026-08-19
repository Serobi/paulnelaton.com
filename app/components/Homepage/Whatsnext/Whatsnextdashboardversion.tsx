"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { whatsNextData } from "@/data/whatsnext.data";

import styles from "./WhatsNext.module.css";

export default function WhatsNext() {
    const { lang } = useLanguage();

    const content = whatsNextData[lang];

    return (
        <section
            id="next"
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
                    {/* ========================================
      ROW 1 — ROLES
  ======================================== */}

                    <section
                        className={[
                            styles.dashboardPanel,
                            styles.rolesPanel,
                        ].join(" ")}
                        data-part="roles"
                    >
                        <header className={styles.panelHeader}>
                            <div
                                className={styles.panelSectionIcon}
                                aria-hidden="true"
                            >
                                <span className={styles.iconPlaceholder}>
                                    01
                                </span>
                            </div>

                            <div className={styles.panelHeading}>
                                <h3 className={styles.partTitle}>
                                    {content.roles.title}
                                </h3>

                                <div
                                    className={styles.panelTitleLine}
                                    aria-hidden="true"
                                />
                            </div>
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
                    </section>

                    {/* ========================================
      ROW 1 — TECHNOLOGIES
  ======================================== */}

                    <section
                        className={[
                            styles.dashboardPanel,
                            styles.technologiesPanel,
                        ].join(" ")}
                        data-part="technologies"
                    >
                        <header className={styles.panelHeader}>
                            <div
                                className={styles.panelSectionIcon}
                                aria-hidden="true"
                            >
                                <span className={styles.iconPlaceholder}>
                                    02
                                </span>
                            </div>

                            <div className={styles.panelHeading}>
                                <h3 className={styles.partTitle}>
                                    {content.technologies.title}
                                </h3>

                                <div
                                    className={styles.panelTitleLine}
                                    aria-hidden="true"
                                />
                            </div>
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
                    </section>

                    {/* ========================================
      ROW 2 — WHAT I BRING
  ======================================== */}

                    <section
                        className={[
                            styles.dashboardPanel,
                            styles.bringPanel,
                        ].join(" ")}
                        data-part="bring"
                    >
                        <header className={styles.panelHeader}>
                            <div
                                className={styles.panelSectionIcon}
                                aria-hidden="true"
                            >
                                <span className={styles.iconPlaceholder}>
                                    03
                                </span>
                            </div>

                            <div className={styles.panelHeading}>
                                <h3 className={styles.partTitle}>
                                    {content.bring.title}
                                </h3>

                                <div
                                    className={styles.panelTitleLine}
                                    aria-hidden="true"
                                />
                            </div>
                        </header>

                        <div className={styles.capabilities}>
                            <article className={styles.capability}>
                                <span
                                    className={styles.capabilityIcon}
                                    aria-hidden="true"
                                />

                                <div className={styles.capabilityContent}>
                                    <h4 className={styles.capabilityTitle}>
                                        {content.bring.engineering.label}
                                    </h4>

                                    <p className={styles.capabilityText}>
                                        {content.bring.engineering.description}
                                    </p>
                                </div>
                            </article>

                            <article className={styles.capability}>
                                <span
                                    className={styles.capabilityIcon}
                                    aria-hidden="true"
                                />

                                <div className={styles.capabilityContent}>
                                    <h4 className={styles.capabilityTitle}>
                                        {content.bring.product.label}
                                    </h4>

                                    <p className={styles.capabilityText}>
                                        {content.bring.product.description}
                                    </p>
                                </div>
                            </article>

                            <article className={styles.capability}>
                                <span
                                    className={styles.capabilityIcon}
                                    aria-hidden="true"
                                />

                                <div className={styles.capabilityContent}>
                                    <h4 className={styles.capabilityTitle}>
                                        {content.bring.functional.label}
                                    </h4>

                                    <p className={styles.capabilityText}>
                                        {content.bring.functional.description}
                                    </p>
                                </div>
                            </article>

                            <article className={styles.capability}>
                                <span
                                    className={styles.capabilityIcon}
                                    aria-hidden="true"
                                />

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
                    </section>

                    {/* ========================================
      ROW 2 — MOBILITY
  ======================================== */}

                    <section
                        className={[
                            styles.dashboardPanel,
                            styles.mobilityPanel,
                        ].join(" ")}
                        data-part="mobility"
                    >
                        <header className={styles.panelHeader}>
                            <div
                                className={styles.panelSectionIcon}
                                aria-hidden="true"
                            >
                                <span className={styles.iconPlaceholder}>
                                    04
                                </span>
                            </div>

                            <div className={styles.panelHeading}>
                                <h3 className={styles.partTitle}>
                                    {content.mobility.title}
                                </h3>

                                <div
                                    className={styles.panelTitleLine}
                                    aria-hidden="true"
                                />
                            </div>
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
                    </section>

                    {/* ========================================
      ROW 3 — VALUES
  ======================================== */}

                    <section
                        className={[
                            styles.dashboardPanel,
                            styles.valuesPanel,
                        ].join(" ")}
                        data-part="values"
                    >
                        <header className={styles.panelHeader}>
                            <div
                                className={styles.panelSectionIcon}
                                aria-hidden="true"
                            >
                                <span className={styles.iconPlaceholder}>
                                    05
                                </span>
                            </div>

                            <div className={styles.panelHeading}>
                                <h3 className={styles.partTitle}>
                                    {content.values.title}
                                </h3>

                                <div
                                    className={styles.panelTitleLine}
                                    aria-hidden="true"
                                />
                            </div>
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
                    </section>
                </div>
            </div>
        </section>
    );
}