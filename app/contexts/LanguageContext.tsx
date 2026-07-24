"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

type Language = "fr" | "en";

type TranslationValue = string | string[];

type LanguageContextType = {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: string) => string;
  tArray: (key: string) => string[];
};

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
);

const translations: Record<Language,Record<string, TranslationValue>> = {
  fr: {
    "hero.eyebrow": "Ingénieur logiciel · Créateur de produits",
    "hero.title.line1": "Le client",
    "hero.title.line2": "au centre.",
    "hero.description":
      "Je conçois et développe des produits numériques robustes, en combinant ingénierie logicielle, expérience utilisateur et compréhension approfondie des besoins métier.",
    "hero.cta": "Voir mon CV",

    "hero.nav.about.label": "À propos",
    "hero.nav.about.description":
      "Profil, expérience et vision produit.",

    "hero.nav.process.label": "Mon approche",
    "hero.nav.process.description":
      "Comprendre, construire et améliorer.",

    "hero.nav.projects.label": "Projets",
    "hero.nav.projects.description":
      "Produits personnels et réalisations professionnelles.",

    "hero.nav.contact.label": "Contact",
    "hero.nav.contact.description":
      "Discutons de la suite.",
      
    // Header
    "nav.intro": "Intro",
    "nav.projects": "Projets",
    "nav.cv": "CV Interactif",

    // Homepage
    "home.title": "Ingénieur logiciel & Cybersécurité",
    "home.intro1":
      "Ingénieur issu de la cybersécurité avec 6+ ans d'expérience en infrastructures critiques (Vinci, BT, Orange Cyberdefense).",
    "home.intro2":
      "Spécialisé en architecture système, automatisation et développement full-stack. Conception de systèmes modulaires, performants et évolutifs.",
    "home.cta": "Consulter mon CV",

    "projects.title": "Projets",
    "projects.cv.title": "Générateur de CV ATS Friendly",
    "projects.cv.desc":
      "Application web permettant de générer des CV optimisés pour les systèmes de tracking (ATS), avec export PDF automatisé.",
    "projects.cv.wip": "Work in progress...",
    "projects.cv.link": "Accéder à l'outil",

    "projects.brain.title": "Brain Eaters — Jeu mobile de stratégie",
    "projects.brain.desc":
      "Développement d'un jeu mobile / PC combinant stratégie, survie et coopération. Le jeu a été entièrement développé par mes soins, du code aux designs, du gameplay aux UI, du site Web à la direction artistique.",
    "projects.brain.cta": "Découvrir le projet",

    // Footer
    "footer.built": "Construit avec Next.js, React & TypeScript",
    "footer.status": "SYSTEM STATUS:",
    "footer.online": "ONLINE",
    "footer.contact": "Contact",

    //intro
    "Intro.eyebrow": "Mon approche",
    "Intro.card1.title": "Ingénieur logiciel",
    "Intro.card2.title": "Créateur de produits",
    "Intro.card3.title": "Expérience utilisateur",
    "Intro.card1.content": [
      "Je conçois des applications full-stack robustes et évolutives, avec la même aisance côté front-end que côté back-end.",
      "J'interviens de la conception des interfaces et des parcours utilisateurs jusqu'au développement d'API REST, de services métier et de solutions .NET maintenables.",
      "J'accorde une attention particulière à la qualité du code, à la clarté de l'architecture et à la capacité des applications à évoluer dans le temps.",
    ],
"Intro.card2.content": [
  "Je contribue à l'ensemble du cycle de vie d'un produit, de la définition des besoins jusqu'à la livraison en production.",
  "J'aime transformer des problématiques métier en solutions concrètes, en participant à la conception fonctionnelle, à la structuration des fonctionnalités et à l'amélioration continue du produit.",
  "Mon objectif est de livrer des solutions cohérentes, pérennes et créatrices de valeur, en conciliant enjeux métier, vision produit et excellence technique."
],
"Intro.card3.content": [
  "Ma démarche de conception commence toujours par la compréhension des utilisateurs, de leurs besoins et des problématiques métier qu'ils rencontrent au quotidien.",
  "À partir de cette analyse, je conçois une solution adaptée, en réfléchissant à l'interface, aux fonctionnalités, à l'architecture et aux choix techniques les plus pertinents.",
  "Chaque décision est guidée par un objectif : créer des outils utiles, intuitifs et durables, réellement pensés pour les personnes qui les utiliseront."
],
  },
  en: {
        // Hero
    "hero.eyebrow": "Software Engineer · Product Builder",
    "hero.title.line1": "Your clients",
    "hero.title.line2": "deserve more.",
    "hero.description":
      "I design and build robust digital products, combining software engineering, user experience and a strong understanding of business needs.",
    "hero.cta": "View my CV",

    "hero.nav.about.label": "About me",
    "hero.nav.about.description":
      "Profile, experience and product mindset.",

    "hero.nav.process.label": "How I work",
    "hero.nav.process.description":
      "Understand, build and improve.",

    "hero.nav.projects.label": "Projects",
    "hero.nav.projects.description":
      "Personal products and professional work.",

    "hero.nav.contact.label": "Contact",
    "hero.nav.contact.description":
      "Let's talk about what comes next.",
    // Header
    "nav.intro": "Intro",
    "nav.projects": "Projects",
    "nav.cv": "Interactive CV",

    // Homepage
    "home.title": "Software Engineer & Cybersecurity",
    "home.intro1":
      "Engineer from cybersecurity with 6+ years of experience in critical infrastructures (Vinci, BT, Orange Cyberdefense).",
    "home.intro2":
      "Specialized in system architecture, automation, and full-stack development. Designing modular, performant, and scalable systems.",
    "home.cta": "View my CV",

    "projects.title": "Projects",
    "projects.cv.title": "ATS-Friendly CV Generator",
    "projects.cv.desc":
      "Web application for generating CVs optimized for Applicant Tracking Systems (ATS), with automated PDF export.",
    "projects.cv.wip": "Work in progress...",
    "projects.cv.link": "Access the tool",

    "projects.brain.title": "Brain Eaters — Mobile Strategy Game",
    "projects.brain.desc":
      "Development of a mobile / PC game combining strategy, survival, and cooperation. The game was entirely developed by me, from code to designs, from gameplay to UI, from website to art direction.",
    "projects.brain.cta": "Discover the project",

    // Footer
    "footer.built": "Built with Next.js, React & TypeScript",
    "footer.status": "SYSTEM STATUS:",
    "footer.online": "ONLINE",
    "footer.contact": "Contact",

    // Intro
    "Intro.eyebrow": "About me",
    "Intro.card1.title": "Software Engineer",
    "Intro.card2.title": "Product Builder",
    "Intro.card3.title": "User Experience",
    "Intro.card1.content": [
      "I design robust and scalable full-stack applications, working confidently across both front-end and back-end development.",
      "From crafting intuitive user interfaces and user journeys to building REST APIs, business services, and maintainable .NET solutions, I deliver software built to last.",
      "I place strong emphasis on code quality, clear architecture, and building applications that remain easy to maintain and evolve over time."
    ],
    "Intro.card2.content": [
      "I contribute across the entire product lifecycle, from defining business requirements to delivering production-ready solutions.",
      "I enjoy turning business challenges into practical solutions by contributing to functional design, feature definition, and continuous product improvement.",
      "My goal is to deliver consistent, scalable, and valuable products by combining business needs, product vision, and technical excellence."
    ],
    "Intro.card3.content": [
      "My design approach always starts with understanding users, their needs, and the business challenges they face every day.",
      "From there, I design solutions by carefully considering the interface, features, architecture, and the technical choices best suited to the problem.",
      "Every decision is driven by a simple goal: creating tools that are useful, intuitive, and built around the people who will use them."
    ],
  },
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Language>("fr");
  const [mounted, setMounted] = useState(false);

useEffect(() => {
  const stored = localStorage.getItem("lang") as Language | null;

  if (stored === "fr" || stored === "en") {
    setLangState(stored);
  } else {
    const browserLang = navigator.language.toLowerCase();
    const detectedLang: Language = browserLang.startsWith("fr")
      ? "fr"
      : "en";

    setLangState(detectedLang);
    localStorage.setItem("lang", detectedLang);
  }

  setMounted(true);
}, []);

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    localStorage.setItem("lang", newLang);
  };

  const t = (key: string): string => {
  const value = translations[lang][key];

  return typeof value === "string" ? value : key;
};

const tArray = (key: string): string[] => {
  const value = translations[lang][key];

  return Array.isArray(value) ? value : [];
};

  if (!mounted) {
    return null;
  }

  return (
  <LanguageContext.Provider value={{ lang, setLang, t, tArray }}>
    {children}
  </LanguageContext.Provider>
);
}

// Hook pour utiliser le contexte
export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
}
