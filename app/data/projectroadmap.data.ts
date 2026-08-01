export type ProjectRoadmapState =
  | "completed"
  | "next";

export type ProjectRoadmapContentItem = {
  label: string;
  state?: ProjectRoadmapState;
};

export type ProjectRoadmapNode = {
  label: string;
  dates: string;
  state: ProjectRoadmapState;
  title: string;
  intro: string;
  content: ProjectRoadmapContentItem[];
};

export type ProjectRoadmapLocaleData = {
  eyebrow: string;
  openStepLabel: string;
  statusLabels: Record<ProjectRoadmapState, string>;
  nodes: ProjectRoadmapNode[];
};

export const projectRoadmapData: Record<
  "fr" | "en",
  ProjectRoadmapLocaleData
> = {
  fr: {
    eyebrow: "Mon parcours",
    openStepLabel: "Ouvrir",
    statusLabels: {
      completed: "Terminé",
      next: "À venir",
    },
    nodes: [
      {
        label: "Cybersécurité",
        dates: "2015 - 2021",
        state: "completed",
        title: "Expériences en cybersécurité",
        intro:
          "6 années d'expérience en cybersécurité au sein d'Orange Cyberdefense, British Telecom et VINCI Autoroutes, couvrant la sécurité réseau, les opérations de sécurité (SecOps), la gestion des accès privilégiés et les infrastructures critiques.",
        content: [
          {
            label:
              "Sécurité réseau avec Check Point, Fortinet, Palo Alto et Cisco ASA",
          },
          {
            label:
              "Conception de processus de gestion des correctifs et de durcissement des systèmes",
          },
          {
            label:
              "Détection et réponse aux incidents avec ELK, TheHive et l'automatisation de la sécurité",
          },
          {
            label:
              "Gestion des identités et des accès privilégiés avec CyberArk",
          },
          {
            label:
              "Infrastructure, DevOps et ingénierie de la sécurité",
          },
          {
            label:
              "Automatisation des contrôles de sécurité, du reporting et des tableaux de bord opérationnels",
          },
        ],
      },
      {
        label: "Indépendant",
        dates: "2021 — 2024",
        state: "completed",
        title: "Projets indépendants",
        intro:
          "Une période consacrée aux projets indépendants, à l'expérimentation et au développement d'un profil davantage orienté produit.",
        content: [
          {
            label:
              "Projets techniques et entrepreneuriaux indépendants",
          },
          {
            label:
              "Stratégie produit et prise de décision autonome",
          },
          {
            label:
              "Analyse de marché et gestion du risque",
          },
          {
            label:
              "Développement d'un profil multidisciplinaire",
          },
        ],
      },
      {
        label: "Brain Eaters",
        dates: "2024 — 2026",
        state: "completed",
        title: "Brain Eaters",
        intro:
          "Conception et développement indépendant d'un jeu de stratégie et de survie, de l'architecture technique jusqu'à l'expérience utilisateur.",
        content: [
          {
            label:
              "Architecture gameplay sous Unity et C#",
          },
          {
            label:
              "Génération procédurale du monde et systèmes de biomes",
          },
          {
            label:
              "Inventaire, artisanat et gestion des objets",
          },
          {
            label:
              "Systèmes de construction et personnalisation de la ville",
          },
          {
            label:
              "Conception UI/UX et identité visuelle",
          },
          {
            label:
              "Pilotage complet du produit de bout en bout",
          },
        ],
      },
      {
        label: "Maty",
        dates: "2026",
        state: "completed",
        title: "Maty",
        intro:
          "Livraison d'applications métier internes centrées sur la fiabilité, l'efficacité opérationnelle et l'expérience utilisateur.",
        content: [
          {
            label:
              "Applications ASP.NET MVC, Web API et Razor",
          },
          {
            label:
              "Intégration de données SQL Server et DB2",
          },
          {
            label:
              "Outils de gestion des prix et des remises",
          },
          {
            label:
              "Génération d'étiquettes de stock et flux d'impression ZPL",
          },
          {
            label:
              "Flux produits, SEO et intégrations catalogue",
          },
          {
            label:
              "Amélioration de l'expérience utilisateur et des processus opérationnels",
          },
        ],
      },
      {
        label: "Votre projet",
        dates: "Maintenant",
        state: "next",
        title: "Votre projet",
        intro:
          "La prochaine étape associe ingénierie logicielle, vision produit et expériences utilisateur soignées.",
        content: [
          {
            label:
              "Produits full-stack modernes avec React, Next.js et .NET",
          },
          {
            label:
              "Ingénierie orientée produit et ownership technique",
          },
          {
            label:
              "Opportunités freelance et internationales",
          },
          {
            label:
              "Applications sécurisées, évolutives et centrées utilisateur",
          },
        ],
      },
    ],
  },

  en: {
    eyebrow: "My journey",
    openStepLabel: "Open",
    statusLabels: {
      completed: "Completed",
      next: "Next",
    },
    nodes: [
      {
        label: "Cybersecurity",
        dates: "2015 - 2021",
        state: "completed",
        title: "Cybersecurity Experiences",
        intro:
          "6 years of experience in cybersecurity through roles at Orange Cyberdefense, British Telecom and VINCI Autoroutes, covering network security, SecOps, privileged access management and critical infrastructure.",
        content: [
          {
            label:
              "Network security with Check Point, Fortinet, Palo Alto and Cisco ASA",
          },
          {
            label:
              "Design of patch management and system hardening processes",
          },
          {
            label:
              "Built detection and incident response workflows using ELK, TheHive and security automation",
          },
          {
            label:
              "Identity and privileged access management with CyberArk",
          },
          {
            label:
              "Infrastructure, DevOps and security engineering",
          },
          {
            label:
              "Automation of security controls, reporting and operational dashboards",
          },
        ],
      },
      {
        label: "Independent",
        dates: "2021 - 2024",
        state: "completed",
        title: "Independent Projects",
        intro:
          "A period focused on independent work, experimentation and the development of a broader product-oriented profile.",
        content: [
          {
            label:
              "Independent technical and entrepreneurial projects",
          },
          {
            label:
              "Product strategy and autonomous decision-making",
          },
          {
            label:
              "Market analysis and risk management",
          },
          {
            label:
              "Development of a multidisciplinary profile",
          },
        ],
      },
      {
        label: "Brain Eaters",
        dates: "2024 — 2026",
        state: "completed",
        title: "Brain Eaters",
        intro:
          "Design and development of a survival strategy game, built independently from technical architecture to user experience.",
        content: [
          {
            label:
              "Unity and C# gameplay architecture",
          },
          {
            label:
              "Procedural world generation and biome systems",
          },
          {
            label:
              "Inventory, crafting and item management",
          },
          {
            label:
              "Building systems and city customization",
          },
          {
            label:
              "UI/UX design and visual identity",
          },
          {
            label:
              "End-to-end product ownership",
          },
        ],
      },
      {
        label: "Maty",
        dates: "2026",
        state: "completed",
        title: "Maty",
        intro:
          "Delivery of internal business applications focused on reliability, operational efficiency and user experience.",
        content: [
          {
            label:
              "ASP.NET MVC, Web API and Razor applications",
          },
          {
            label:
              "SQL Server and DB2 data integration",
          },
          {
            label:
              "Pricing and discount management tools",
          },
          {
            label:
              "Stock label generation and ZPL printing workflows",
          },
          {
            label:
              "Product feeds, SEO and catalog integrations",
          },
          {
            label:
              "User experience and operational workflow improvements",
          },
        ],
      },
      {
        label: "Your project",
        dates: "Now",
        state: "next",
        title: "Your project",
        intro:
          "The next step combines software engineering, product thinking and polished user experiences.",
        content: [
          {
            label:
              "Modern full-stack products with React, Next.js and .NET",
          },
          {
            label:
              "Product-driven engineering and technical ownership",
          },
          {
            label:
              "Freelance and international opportunities",
          },
          {
            label:
              "Secure, scalable and user-focused applications",
          },
        ],
      },
    ],
  },
};