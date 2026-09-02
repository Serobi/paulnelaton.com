"use client";

import { ArrowUpRight, Mail, Phone } from "lucide-react";

import { useLanguage } from "@/contexts/LanguageContext";

import styles from "./Contact.module.css";

const contactContent = {
    fr: {
        eyebrow: "Contact",
        title: ["Construisons", "l’avenir", "ensemble"],
        description:
            "Une opportunité, un projet ou simplement une envie d’échanger ? Contactez-moi directement.",
        email: "E-mail",
        phone: "Téléphone",
        linkedin: "LinkedIn",
    },
    en: {
        eyebrow: "Contact",
        title: ["Building", "tomorrow", "together"],
        description:
            "An opportunity, a project or simply a conversation? Feel free to contact me directly.",
        email: "Email",
        phone: "Phone",
        linkedin: "LinkedIn",
    },
} as const;

export default function Contact() {
    const { lang } = useLanguage();
    const content = contactContent[lang];

    return (
        <section
            id="contact"
            className={styles.contact}
            aria-labelledby="contact-title"
        >
            <div className={styles.glow} aria-hidden="true" />

            <div className={styles.container}>
                <header className={styles.intro}>
                    <span className={styles.eyebrow}>{content.eyebrow}</span>
                    <h2 id="contact-title" className={styles.title}>
                        {content.title.map((word) => (
                            <span key={word}>{word}</span>
                        ))}
                    </h2>
                    <p className={styles.description}>{content.description}</p>
                </header>

                <address className={styles.links}>
                    <div className={styles.contactItem}>
                        <span className={styles.icon} aria-hidden="true">
                            <Mail />
                        </span>
                        <span className={styles.linkContent}>
                            <span className={styles.label}>{content.email}</span>
                            <span className={styles.value}>paul.nelaton@gmail.com</span>
                        </span>
                    </div>

                    <div className={styles.contactItem}>
                        <span className={styles.icon} aria-hidden="true">
                            <Phone />
                        </span>
                        <span className={styles.linkContent}>
                            <span className={styles.label}>{content.phone}</span>
                            <span className={styles.value}>+33 6 85 58 93 64</span>
                        </span>
                    </div>

                    <a
                        href="https://www.linkedin.com/in/paul-nelaton-791721aa/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${styles.contactItem} ${styles.contactAction}`}
                    >
                        <span className={styles.icon} aria-hidden="true">
                            <span className={styles.linkedinMark}>in</span>
                        </span>
                        <span className={styles.linkContent}>
                            <span className={styles.label}>{content.linkedin}</span>
                            <span className={styles.value}>Paul Nelaton</span>
                        </span>
                        <ArrowUpRight className={styles.arrow} aria-hidden="true" />
                    </a>
                </address>
            </div>
        </section>
    );
}
