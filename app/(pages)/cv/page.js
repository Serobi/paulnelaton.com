"use client";
import React, { useRef, useState, useEffect } from 'react';
import styles from '@/styles/cv.module.css';
import { CVData } from "@/data/cv.data";
import { usePathname } from "next/navigation";

function ScrollToTop() {
    const pathname = usePathname();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
}

const CvATS = React.forwardRef(({ data }, ref) => {
    return (
        <div className={styles.page} id='cv'>
            <div ref={ref} className={`${styles.cvContainer} ${styles.cvATS}`}>

                {/* HEADER SIMPLIFIÉ */}
                <header className={styles.header}>
                    <div className={styles.identityBlock}>
                        <h1 className={styles.name}>{data.identity.name}</h1>
                        <h2 className={styles.role}>{data.identity.role}</h2>
                        <p className={styles.target}>{data.identity.mobility}</p>
                        <p className={styles.summary}>{data.identity.summary}</p>
                    </div>

                    <div className={styles.rightHeader}>
                        <div className={styles.contactInfo}>
                            <img src="/profile2.png" alt="profile" className={styles.profilePic} />
                            <span>{data.identity.contact.email}</span>
                            <span>{data.identity.contact.phone}</span>
                            <span>{data.identity.contact.linkedin}</span>
                        </div>
                    </div>
                </header>

                {/* CONTENU MONO COLONNE */}
                <div className={styles.atsContent}>

                    {/* FORMATION */}
                    <section className={styles.section}>
                        <h3>{data.labels.education}</h3>

                        {data.formations.map((f, i) => (
                            <div key={i} className={styles.eduItem}>
                                <span className={styles.year}>{f.year}</span>
                                <div className={styles.eduDetail}>
                                    <strong>{f.title}</strong>
                                    <span>{f.school}</span>
                                </div>
                            </div>
                        ))}
                    </section>
                    {/* EXPERIENCE EN PREMIER */}
                    <main className={styles.content}>
                        <h3 className={styles.mainTitle}>{data.labels.experience}</h3>

                        <div className={styles.timeline}>
                            {data.experience.map((exp, i) => (
                                <div key={i} className={styles.expCard}>
                                    <div className={styles.expHeader}>
                                        <div className={styles.expTitleGroup}>
                                            <h4>{exp.role}</h4>
                                            <span className={styles.company}>{exp.company}</span>
                                        </div>
                                        <span className={styles.period}>{exp.period}</span>
                                    </div>

                                    <ul className={styles.expList}>
                                        {exp.desc.map((line, index) => (
                                            <li key={index}>{line}</li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </main>


                    {/* COMPÉTENCES */}
                    <section className={styles.section}>
                        <h3>{data.labels.technicalSkills}</h3>

                        {Object.entries(data.skillTrees).map(([key, skills]) => (
                            <div key={key} className={styles.skillGroup}>
                                <h4 className={styles.skillCategory}>
                                    {data.labels.skillCategories[key]}
                                </h4>

                                <div className={styles.tags}>
                                    {skills.map(skill => (
                                        <span key={skill} className={styles.tag}>
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </section>


                    {/* LANGUES */}
                    <section className={styles.section}>
                        <h3>{data.labels.languages}</h3>

                        <ul className={styles.langList}>
                            {data.languages.map(lang => (
                                <li key={lang.name}>
                                    <strong>{lang.name} :</strong> {lang.level}
                                </li>
                            ))}
                        </ul>
                    </section>

                </div>
            </div>
        </div>
    );
});

CvATS.displayName = "CvATS";

const CvDesign = React.forwardRef(({ data }, ref) => {
    return (
        <div ref={ref} className={styles.cvContainer}>
            <header className={styles.header}>
                <div className={styles.identityBlock}>
                    <h1 className={styles.name}>{data.identity.name}</h1>
                    <h2 className={styles.role}>{data.identity.role}</h2>
                    <p className={styles.target}>{data.identity.mobility}</p>
                    <p className={styles.summary}>{data.identity.summary}</p>
                </div>

                <div className={styles.rightHeader}>
                    <div className={styles.contactInfo}>
                        <img src="/profile2.png" alt="profile" className={styles.profilePic} />
                        <span>{data.identity.contact.email}</span>
                        <span>{data.identity.contact.phone}</span>
                        <span>
                            <a
                                href="https://www.linkedin.com/in/paul-nelaton-791721aa/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {data.identity.contact.linkedin}
                            </a>
                        </span>
                    </div>
                </div>
            </header>

            <div className={styles.mainGrid}>
                {/* --- LEFT: SKILLS & TECHNICAL --- */}
                <aside className={styles.sidebar}>

                    {/* Stats */}
                    <section className={styles.section}>
                        <h3>{data.labels.domains}</h3>
                        <div className={styles.statsContainer}>
                            {data.stats.map((stat, i) => (
                                <div key={i} className={styles.statItem}>
                                    <span className={styles.statLabel}>{stat.label}</span>
                                    <div className={styles.statBarBg}>
                                        <div
                                            className={styles.statBarFill}
                                            style={{ width: `${stat.value}%`, backgroundColor: stat.color }}
                                        ></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Hard Skills */}
                    <section className={styles.section}>
                        <h3>{data.labels.technicalSkills}</h3>
                        {Object.entries(data.skillTrees).map(([key, skills]) => (
                            <div key={key} className={styles.skillGroup}>
                                <h4 className={styles.skillCategory}>
                                    {data.labels.skillCategories[key]}
                                </h4>

                                <div className={styles.tags}>
                                    {skills.map(s => <span key={s} className={styles.tag}>{s}</span>)}
                                </div>
                            </div>
                        ))}
                    </section>
                    {/* Formations */}
                    <section className={styles.section}>
                        <h3>{data.labels.education}</h3>
                        <div className={styles.eduList}>
                            {data.formations.map((f, i) => (
                                <div key={i} className={styles.eduItem}>
                                    <span className={styles.year}>{f.year}</span>
                                    <div className={styles.eduDetail}>
                                        <strong>{f.title}</strong>
                                        <span>{f.school}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Langues */}
                    <section className={styles.section}>
                        <h3>{data.labels.languages}</h3>
                        <ul className={styles.langList}>
                            {data.languages.map(l => (
                                <li key={l.name}>
                                    <strong>{l.name} :</strong> {l.level}
                                </li>
                            ))}
                        </ul>
                    </section>
                </aside>

                {/* --- RIGHT: EXPERIENCE --- */}
                <main className={styles.content}>
                    <h3 className={styles.mainTitle}>{data.labels.experience}</h3>

                    <div className={styles.timeline}>
                        {data.experience.map((exp, i) => (
                            <div key={i} className={styles.expCard}>
                                <div className={styles.expHeader}>
                                    <div className={styles.expTitleGroup}>
                                        <h4>{exp.role}</h4>
                                        <span className={styles.company}>{exp.company}</span>
                                    </div>
                                    <span className={styles.period}>{exp.period}</span>
                                </div>

                                <ul className={styles.expList}>
                                    {exp.desc.map((line, index) => (
                                        <li key={index}>{line}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </main>
            </div>
        </div>
    );
});

CvDesign.displayName = "CvDesign";

export default function Cv() {

    const [lang, setLang] = useState("fr");
    const [mode, setMode] = useState("dev");

    const data = CVData[lang][mode];

    const designRef = useRef(null);
    const atsRef = useRef(null);

    return (
        <div className={styles.cvPageWrapper}>
            {/* Barre d’actions */}
            <div className={styles.cvActions}>
                <div className={styles.langWrapper}>
                    <span className={styles.langLabel}>
                        {lang === "fr" ? "Langue :" : "Language:"}
                    </span>

                    <div className={styles.langSwitch}>
                        <button
                            onClick={() => setLang("fr")}
                            className={`${styles.langButton} ${lang === "fr" ? styles.active : ""}`}
                            aria-label="Français"
                        >
                            FR
                        </button>

                        <button
                            onClick={() => setLang("en")}
                            className={`${styles.langButton} ${lang === "en" ? styles.active : ""}`}
                            aria-label="English"
                        >
                            EN
                        </button>
                    </div>
                </div>

                <div className={styles.modeWrapper}>
                    <span className={styles.modeLabel}>
                        {lang === "fr" ? "Profil :" : "Profile:"}
                    </span>

                    <div className={styles.modeSwitch}>
                        <button
                            onClick={() => setMode("dev")}
                            className={`${styles.modeButton} ${mode === "dev" ? styles.active : ""}`}
                        >
                            💻 {lang === "fr" ? "Dev" : "Dev"}
                        </button>

                        <button
                            onClick={() => setMode("security")}
                            className={`${styles.modeButton} ${mode === "security" ? styles.active : ""}`}
                        >
                            🔐 {lang === "fr" ? "Sec" : "Sec"}
                        </button>
                    </div>
                </div>
            </div>

            {/* Le CV */}
            <CvDesign ref={designRef} data={data} />

            {/* Caché mais présent dans le DOM */}
            <div style={{ display: "none" }}>
                <CvATS ref={atsRef} data={data} />
            </div>
        </div>
    );
}