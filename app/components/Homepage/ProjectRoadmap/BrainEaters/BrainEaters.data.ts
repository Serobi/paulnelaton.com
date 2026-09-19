export type BrainEatersSection = "overview" | "gameplay" | "cityBuilder" | "procedural" | "uiux";
export type BrainEatersLanguage = "fr" | "en";

type ProductAspect = { title: string; description: string };

export type BrainEatersView = {
  functional: [ProductAspect, ProductAspect, ProductAspect];
  technical: {
    title: string;
    description: string;
    tags: string[];
  };
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
  back: string;
  explore: string;
  navigation: {
    id: BrainEatersSection;
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
    back: "Revenir au parcours",
    explore: "Explorer le projet",
    navigation: [
      {
        id: "overview",
        label: "Présentation",
        detail: "Le projet"
      },
      {
        id: "gameplay",
        label: "Gameplay",
        detail: "Survie & coopération"
      },
      {
        id: "cityBuilder",
        label: "City Builder",
        detail: "Construction & gestion"
      },
      {
        id: "procedural",
        label: "Map & Procedural",
        detail: "Monde & exploration"
      },
      {
        id: "uiux",
        label: "UI / UX & Design",
        detail: "Interfaces & expérience"
      },
    ],
    sections: {
      overview: {
        functional: [
          {
            title: "Survie & stratégie",
            description:
              "Exploration, construction, gestion et survie dans un univers post-apocalyptique."
          },
          {
            title: "PC & Mobile",
            description:
              "Une expérience pensée pour ordinateur et mobile, avec des interactions adaptées à chaque support."
          },
          {
            title: "Coopération en ligne",
            description:
              "Les joueurs explorent, construisent et font progresser leur communauté ensemble."
          },
        ],
        technical: {
          title: "Conception & développement",
          description:
            "Développé sous Unity en C#, Brain Eaters est un projet conçu de bout en bout : architecture, systèmes de gameplay, multijoueur, génération du monde et interfaces. Son développement implique de faire évoluer des systèmes interdépendants tout en conservant une architecture cohérente et extensible.",
          tags: ["Unity", "C#", ".NET", "Architecture", "Multiplayer", "PC / Mobile"],
        },
      },
      gameplay: {
        functional: [
          {
            title: "Explorer & survivre",
            description:
              "Explorer le monde, collecter des ressources et s'équiper pour survivre dans un environnement hostile."
          },
          {
            title: "Construire & développer",
            description:
              "Construire la ville, gérer ses ressources et développer les infrastructures nécessaires à la communauté."
          },
          {
            title: "Coopérer & progresser",
            description:
              "Agir seul ou en groupe pour faire progresser les survivants, la ville et débloquer de nouvelles possibilités."
          },
        ],
        technical: {
          title: "Des systèmes de gameplay interconnectés",
          description:
            "Le gameplay repose sur plusieurs systèmes qui évoluent ensemble : joueur, inventaire, ressources, construction, monde et progression. Le développement consiste autant à construire chaque système qu’à gérer leurs interactions au sein d’une même boucle de jeu.",
          tags: ["Unity", "C#", "Gameplay Systems", "Architecture", "Game Design"],
        },
      },
      cityBuilder: {
        functional: [
          {
            title: "Construire la ville",
            description:
              "Placer et construire les bâtiments qui permettent à la communauté de se développer."
          },
          {
            title: "Gérer les ressources",
            description:
              "Produire, stocker et répartir les ressources nécessaires au fonctionnement et à l'expansion de la ville."
          },
          {
            title: "Défendre",
            description:
              "Chaque nuit, la ville subit une attaque. Les survivants doivent progresser rapidement pour renforcer leurs défenses et survivre."
          },
        ],
        technical: {
          title: "Un système de construction & de gestion",
          description:
            "Le City Builder combine placement des bâtiments, décorations, règles de construction, coûts et gestion des ressources. Son développement consiste à offrir aux joueurs un maximum de liberté dans la personnalisation et la progression de la ville.",
          tags: ["Unity", "C#", "Building System", "Resource Management", "Game Design"],
        },
      },
      procedural: {
        functional: [
          {
            title: "Générer le monde",
            description:
              "Chaque partie génère un nouveau monde composé de différents environnements, ressources et zones à explorer."
          },
          {
            title: "Explorer",
            description:
              "Les survivants explorent la carte à la recherche de ressources, de lieux et d'opportunités utiles au développement de la ville."
          },
          {
            title: "Renouveler les parties",
            description:
              "La génération procédurale renouvelle la carte et les situations rencontrées pour rendre chaque partie différente."
          },
        ],
        technical: {
          title: "Génération procédurale du monde",
          description:
            "Le monde est généré dynamiquement à partir d'un ensemble de règles définissant sa structure, ses environnements et la répartition de ses éléments. L’objectif est de produire des cartes variées et cohérentes tout en conservant suffisamment de contrôle sur la génération pour servir le gameplay.",
          tags: ["Unity", "C#", "Procedural Generation", "Algorithms", "World Design"],
        },
      },
      uiux: {
        functional: [
          {
            title: "Informer",
            description:
              "Présenter clairement les ressources, états et informations nécessaires aux décisions du joueur."
          },
          {
            title: "Interagir",
            description:
              "Permettre d'agir rapidement sur les différents systèmes, de l'inventaire à la gestion de la ville."
          },
          {
            title: "Guider",
            description:
              "Donner un retour clair sur les actions du joueur et rendre les mécaniques du jeu faciles à comprendre."
          },
        ],
        technical: {
          title: "Conception des interfaces & expérience utilisateur",
          description:
            "Les interfaces relient le joueur aux différents systèmes de Brain Eaters : inventaire, ressources, construction, progression et gestion de la ville. Leur conception vise à rendre cette quantité d’informations accessible et intuitive, tout en conservant une identité visuelle cohérente sur PC et mobile.",
          tags: ["UI / UX", "Unity", "PC / Mobile", "Interaction Design", "Visual Design"],
        },
      },
    },
  },
  en: {
    category: "Independent project · 2024 — 2026",
    projectContext: "Survival · Strategy · Cooperation",
    overview: "Back to the Brain Eaters overview",
    back: "Back to the journey",
    explore: "Explore the project",
    navigation: [
      {
        id: "overview",
        label: "Overview",
        detail: "The project"
      },
      { id: "gameplay", label: "Gameplay", detail: "Survival & cooperation" },
      { id: "cityBuilder", label: "City Builder", detail: "Building & management" },
      { id: "procedural", label: "Map & Procedural", detail: "World & exploration" },
      { id: "uiux", label: "UI / UX & Design", detail: "Interfaces & experience" },
    ],
    sections: {
      overview: {
        functional: [
          { title: "Survival & strategy game", description: "An experience combining exploration, building, management and survival in a post-apocalyptic world." },
          { title: "PC & Mobile", description: "An experience designed for desktop and mobile, with interfaces and interaction methods tailored to each platform." },
          { title: "Online cooperation", description: "A multiplayer experience in which players explore, build and develop their community together." },
        ],
        technical: {
          title: "Design & development",
          description: "Brain Eaters is developed in C# with Unity and spans multiple aspects of a software product: game design, gameplay systems, multiplayer, building, world generation and interfaces. The project requires many systems to evolve and communicate within a shared architecture.",
          tags: ["Unity", "C#", "PC / Mobile", "Multiplayer", "Architecture"],
        },
      },
      gameplay: {
        functional: [
          { title: "Exploration & gathering", description: "Explore the world, discover resources and gather the materials needed for survival and development." },
          { title: "Survival & crafting", description: "Manage inventory and equipment, use gathered resources and craft the items needed to progress." },
          { title: "Shared progression", description: "Individual actions contribute to the development of the city and the progression of the group." },
        ],
        technical: {
          title: "Gameplay systems development",
          description: "Development connects exploration, gathering, inventory and crafting to player and group progression. This section covers the interactions between these mechanics, from game design to their implementation in C# with Unity.",
          tags: ["Unity", "C#", "Gameplay Systems", "Game design"],
        },
      },
      cityBuilder: {
        functional: [
          { title: "Building", description: "Place buildings and organise the development of the city to support the community." },
          { title: "Resources", description: "Consider the costs, production and needs associated with the development of the city." },
          { title: "Management & growth", description: "Develop the city while accounting for the links between buildings, resources and community needs." },
        ],
        technical: {
          title: "Building & management systems",
          description: "The work focuses on the links between buildings, resource management and progression. Building integrates with the other game mechanics to make city development choices meaningful.",
          tags: ["City building", "Game design", "Management systems"],
        },
      },
      procedural: {
        functional: [
          { title: "World generation", description: "Compose the explorable world and its biomes to provide a setting for survival and development." },
          { title: "Exploration", description: "Discover the environment and its resources to guide the decisions of players and their group." },
          { title: "Variety across playthroughs", description: "World generation aims to offer different exploration situations and development choices from one playthrough to the next." },
        ],
        technical: {
          title: "Procedural world generation",
          description: "Procedural generation structures the world and its biomes. The work combines world design and Unity development to connect environment generation with the exploration experience.",
          tags: ["Procedural generation", "Unity", "World design"],
        },
      },
      uiux: {
        functional: [
          { title: "Information", description: "Make resources, states and the data needed for player decisions easy to read." },
          { title: "Interaction", description: "Let players act quickly on game systems, from inventory to management interfaces." },
          { title: "Feedback", description: "Make the consequences of actions understandable through visual hierarchy and clear feedback." },
        ],
        technical: {
          title: "Interface design",
          description: "Interfaces support the mechanics of the game: checking inventory, understanding an action and navigating systems. UI, UX and visual identity are designed together to create a consistent, readable player experience.",
          tags: ["UI / UX", "Visual design", "Player experience"],
        },
      },
    },
  },
};
