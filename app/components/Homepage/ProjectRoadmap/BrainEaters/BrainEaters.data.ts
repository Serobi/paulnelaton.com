export type BrainEatersSection = "overview" | "gameplay" | "cityBuilder" | "procedural" | "uiux";
export type BrainEatersLanguage = "fr" | "en";

export type BrainEatersView = {
  eyebrow: string;
  description: string;
  highlights: { label: string; detail: string }[];
  metadata: string[];
};

// Add a public asset path to src. The overview contains the logo; the other views contain screenshots.
export const brainEatersMedia: Record<BrainEatersSection, {
  src?: string;
  placeholder: string;
  fit: "contain" | "cover";
}> = {
    overview: {
    src: "/brain-eaters/brain-eaters-1.webp",
    placeholder: "Brain Eaters",
    fit: "cover",
  },
  gameplay: { 
    src: "/brain-eaters/brain-eaters-2.webp",
    placeholder: "Image 2", 
    fit: "cover" 
  },
  cityBuilder: { src: "/brain-eaters/brain-eaters-3.webp", placeholder: "Image 3", fit: "cover" },
  procedural: { src: "/brain-eaters/brain-eaters-4.webp", placeholder: "Image 4", fit: "cover" },
  uiux: { src: "/brain-eaters/brain-eaters-5.webp", placeholder: "Image 5", fit: "cover" },
};

type Content = {
  category: string;
  projectContext: string;
  overview: string;
  overviewLabel: string;
  back: string;
  explore: string;
  navigation: {
    id: Exclude<BrainEatersSection, "overview">;
    label: string;
    detail: string;
  }[];
  sections: Record<BrainEatersSection, BrainEatersView>;
};

export const brainEatersData: Record<BrainEatersLanguage, Content> = {
  fr: {
    category: "Projet indépendant · 2024 — 2026",
    projectContext: "Survie · Stratégie · Coopération",
    overview: "Revenir à la présentation de Brain Eaters",
    overviewLabel: "Présentation",
    back: "Revenir au parcours",
    explore: "Explorer le projet",
    navigation: [
      { id: "gameplay", label: "Gameplay", detail: "Survie & coopération" },
      { id: "cityBuilder", label: "City Builder", detail: "Construction & gestion" },
      { id: "procedural", label: "Map & Procedural", detail: "Monde & exploration" },
      { id: "uiux", label: "UI / UX & Design", detail: "Interfaces & expérience" },
    ],
    sections: {
      overview: {
        eyebrow: "Stratégie · Survie · Coopération",
        description: "Brain Eaters est un jeu de stratégie et de survie en coopération, où exploration, construction et gestion se rencontrent. Un produit conçu de bout en bout, de la vision de jeu aux systèmes logiciels et à l’expérience joueur.",
        highlights: [
          { label: "Vision", detail: "Game design & mécaniques" },
          { label: "Développement", detail: "Architecture & systèmes" },
          { label: "Expérience", detail: "Interfaces & identité visuelle" },
        ],
        metadata: ["Unity", "C#", "Conception produit"],
      },
      gameplay: {
        eyebrow: "Gameplay",
        description: "L'exploration et la collecte de ressources alimentent la construction et la progression. Inventaire, artisanat et coopération relient les décisions du joueur aux systèmes du monde, pour une expérience de survie pensée dans son ensemble.",
        highlights: [
          { label: "Exploration", detail: "Découvrir & collecter" },
          { label: "Survie", detail: "Inventaire & artisanat" },
          { label: "Progression", detail: "Décisions & coopération" },
        ],
        metadata: ["Gameplay systems", "C#", "Game design"],
      },
      cityBuilder: {
        eyebrow: "City Builder",
        description: "La construction prolonge la survie : organiser sa base, utiliser les ressources et faire évoluer la ville. Le travail porte sur les liens entre bâtiments, gestion et progression, pour donner du sens aux choix de développement.",
        highlights: [
          { label: "Construction", detail: "Bâtiments & organisation" },
          { label: "Gestion", detail: "Ressources & arbitrages" },
          { label: "Développement", detail: "Expansion & progression" },
        ],
        metadata: ["City building", "Simulation", "Systèmes de gestion"],
      },
      procedural: {
        eyebrow: "Map & Procedural",
        description: "La génération procédurale structure le monde et ses biomes. Derrière l’exploration, des systèmes de génération, d’IA et de simulation composent un environnement dont la cohérence repose autant sur le design que sur l’architecture technique.",
        highlights: [
          { label: "Génération", detail: "Monde & biomes" },
          { label: "Exploration", detail: "Structure & découverte" },
          { label: "Technique", detail: "IA & simulation" },
        ],
        metadata: ["Génération procédurale", "Unity", "Architecture"],
      },
      uiux: {
        eyebrow: "UI / UX & Design",
        description: "Les interfaces accompagnent les mécaniques du jeu : consulter un inventaire, comprendre une action, naviguer dans les systèmes. UI, UX et identité visuelle sont travaillées ensemble pour construire une expérience cohérente et faciliter la lecture du jeu.",
        highlights: [
          { label: "Interfaces", detail: "HUD, menus & inventaire" },
          { label: "Lisibilité", detail: "Hiérarchie & feedbacks" },
          { label: "Identité", detail: "Cohérence visuelle" },
        ],
        metadata: ["UI / UX", "Design visuel", "Expérience joueur"],
      },
    },
  },
  en: {
    category: "Independent project · 2024 — 2026",
    projectContext: "Survival · Strategy · Cooperation",
    overview: "Back to the Brain Eaters overview",
    overviewLabel: "Overview",
    back: "Back to the journey",
    explore: "Explore the project",
    navigation: [
      { id: "gameplay", label: "Gameplay", detail: "Survival & cooperation" },
      { id: "cityBuilder", label: "City Builder", detail: "Building & management" },
      { id: "procedural", label: "Map & Procedural", detail: "World & exploration" },
      { id: "uiux", label: "UI / UX & Design", detail: "Interfaces & experience" },
    ],
    sections: {
      overview: {
        eyebrow: "Strategy · Survival · Cooperation",
        description: "Brain Eaters is a cooperative strategy and survival game, bringing together exploration, building and management. A product designed end to end, from the game vision to software systems and the player experience.",
        highlights: [
          { label: "Vision", detail: "Game design & mechanics" },
          { label: "Development", detail: "Architecture & systems" },
          { label: "Experience", detail: "Interfaces & visual identity" },
        ],
        metadata: ["Unity", "C#", "Product design"],
      },
      gameplay: {
        eyebrow: "Gameplay",
        description: "Exploration and resource gathering feed into building and progression. Inventory, crafting and cooperation connect player decisions to the systems of the world, shaping a cohesive survival experience.",
        highlights: [
          { label: "Exploration", detail: "Discover & gather" },
          { label: "Survival", detail: "Inventory & crafting" },
          { label: "Progression", detail: "Decisions & cooperation" },
        ],
        metadata: ["Gameplay systems", "C#", "Game design"],
      },
      cityBuilder: {
        eyebrow: "City Builder",
        description: "Building extends the survival experience: organise a base, use resources and develop the city. The focus is on connecting buildings, management and progression to make development choices meaningful.",
        highlights: [
          { label: "Building", detail: "Structures & organisation" },
          { label: "Management", detail: "Resources & trade-offs" },
          { label: "Development", detail: "Expansion & progression" },
        ],
        metadata: ["City building", "Simulation", "Management systems"],
      },
      procedural: {
        eyebrow: "Map & Procedural",
        description: "Procedural generation structures the world and its biomes. Behind exploration, generation, AI and simulation systems compose an environment whose coherence depends on both design and technical architecture.",
        highlights: [
          { label: "Generation", detail: "World & biomes" },
          { label: "Exploration", detail: "Structure & discovery" },
          { label: "Technology", detail: "AI & simulation" },
        ],
        metadata: ["Procedural generation", "Unity", "Architecture"],
      },
      uiux: {
        eyebrow: "UI / UX & Design",
        description: "Interfaces support the mechanics of the game: checking inventory, understanding an action and navigating systems. UI, UX and visual identity are designed together to create a consistent, readable player experience.",
        highlights: [
          { label: "Interfaces", detail: "HUD, menus & inventory" },
          { label: "Clarity", detail: "Hierarchy & feedback" },
          { label: "Identity", detail: "Visual consistency" },
        ],
        metadata: ["UI / UX", "Visual design", "Player experience"],
      },
    },
  },
};
