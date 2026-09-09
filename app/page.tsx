"use client";

import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import styles from "@/styles/page.module.css";
import Hero from "@/components/Homepage/hero/hero";
import Intro from "@/components/Homepage/Intro/intro";
import Whatsnext from "@/components/Homepage/Whatsnext/Whatsnext";
import Contact from "@/components/Homepage/Contact/Contact";
// import ProjectRoadmap from "@/components/Homepage/ProjectRoadmap/ProjectRoadmap";
import Roadmap from "@/components/Homepage/ProjectRoadmap/Roadmap";

export default function Home() {
    const { t } = useLanguage();

    return (
        <main className={styles.page}>
            <section className={styles.heroSection}>
                <Hero />
            </section>
            <section id="about" className={styles.aboutSection}>
                <Intro />
            </section>
            <section id="work" className={styles.projectSection}>
                <Roadmap />
            </section>
            <section id="next" className={styles.nextSection}>
                <Whatsnext />
            </section>
            <Contact />
            
        </main>
    );
}
