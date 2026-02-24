"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

type Language = "fr" | "en";

type LanguageContextType = {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: string) => string;
};

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
);

// Traductions
const translations = {
  fr: {
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
  },

  en: {
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
  },
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Language>("fr");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("lang") as Language | null;

    if (stored && (stored === "fr" || stored === "en")) {
      setLangState(stored);
    } else {
      // Détection navigateur si pas de préférence sauvegardée
      const browserLang = navigator.language.toLowerCase();
      const detectedLang = browserLang.startsWith("fr") ? "fr" : "en";
      setLangState(detectedLang);
      localStorage.setItem("lang", detectedLang); // 👈 Sauvegarde la détection
    }

    setMounted(true);
  }, []);

  // Charge la langue depuis localStorage au mount
  useEffect(() => {
    const stored = localStorage.getItem("lang") as Language | null;
    if (stored && (stored === "fr" || stored === "en")) {
      setLangState(stored);
    }
    setMounted(true);
  }, []);

  // Sauvegarde dans localStorage quand la langue change
  const setLang = (newLang: Language) => {
    setLangState(newLang);
    localStorage.setItem("lang", newLang);
  };

  // Fonction de traduction
  const t = (key: string): string => {
    return translations[lang][key as keyof typeof translations.fr] || key;
  };

  // Évite le flash de contenu non traduit
  if (!mounted) {
    return null;
  }

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
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
