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
        dates: "2021 - 2024",
        state: "completed",
        title: "Projets indépendants",
        intro:
          "Une période entrepreneuriale qui a élargi mon profil autour de trois axes complémentaires : les investissements et les marchés financiers, la communication, ainsi que le développement de projets logiciels et créatifs.",
        content: [
          {
            label:
              "Stratégies d'investissement, marchés financiers et gestion du risque",
          },
          {
            label:
              "Communication, évènements, partenariats et marketing",
          },
          {
            label:
              "Apprentissage du Portugais",
          },
          {
            label:
              "Développement de projets logiciels et entrepreneuriaux",
          },
          {
            label:
              "Construction d'un profil pluridisciplinaire orienté produit",
          },
        ],
      },
      {
        label: "Brain Eaters",
        dates: "2024 - 2026",
        state: "completed",
        title: "Brain Eaters",
        intro:
          "Un projet de grande envergure consacré à la conception et au développement complet d'un jeu de stratégie et de survie en coopération. Ce projet a été véritable terrain d'expérimentation pour maîtriser l'architecture logicielle, la vision produit, l'expérience utilisateur et la prise de décisions techniques à grande échelle.",
        content: [
          {
            label:
              "Architecture complète du jeu et des systèmes de gameplay avec Unity et C#",
          },
          {
            label:
              "Génération procédurale du monde avec biomes, systèmes d'IA et mécaniques de simulation",
          },
          {
            label:
              "Conception de fonctionnalités de gameplay : inventaire, artisanat, construction de ville, exploration et systèmes de progression",
          },
          {
            label:
              "Conception UI/UX, identité visuelle et expérience joueur",
          },
          {
            label:
              "Architecture technique, optimisation des performances et conception d'une base de code évolutive",
          },
          {
            label:
              "Pilotage complet du produit, de la conception à l'implémentation et à son amélioration continue",
          },
        ],
      },
      {
        label: "Maty",
        dates: "2026",
        state: "completed",
        title: "Maty",
        intro:
          "Conception et livraison de plusieurs applications métier couvrant des problématiques variées : gestion tarifaire, logistique, SEO, intégration de données et outils internes, avec un fort accent sur la fiabilité, l'expérience utilisateur et les besoins métiers.",
        content: [
          {
            label:
              "Conception d'un moteur de gestion des prix, remises et opérations commerciales",
          },
          {
            label:
              "Développement d'un système complet de génération et d'impression d'étiquettes logistiques (ZPL)",
          },
          {
            label:
              "Développement de flux produits, intégrations catalogue et optimisation SEO",
          },
          {
            label:
              "Applications métier en ASP.NET MVC, Web API, Razor, SQL Server et DB2",
          },
          {
            label:
              "Refonte d'interfaces et amélioration des processus opérationnels avec les utilisateurs métiers",
          },
          {
            label:
              "Renforcement des compétences en développement full-stack, architecture logicielle et vision produit en environnement industriel à fortes contraintes",
          },
          {
            label:
              "Prise en charge de projets de bout en bout, du cadrage fonctionnel jusqu'à la mise en production",
          },
        ],
      },
      {
        label: "Votre projet",
        dates: "Aujourd'hui",
        state: "next",
        title: "Votre projet",
        intro:
          "Aujourd'hui, je souhaite contribuer à des produits logiciels ambitieux où l'ingénierie, la vision produit et l'expérience utilisateur se rejoignent. Mon objectif est de concevoir des solutions fiables, évolutives et porteuses de sens, ayant un réel impact pour les utilisateurs et les entreprises.",
        content: [
          {
            label:
              "Concevoir des produits full-stack modernes avec React, Next.js et .NET",
          },
          {
            label:
              "Transformer les besoins métiers en logiciels intuitifs et de haute qualité",
          },
          {
            label:
              "Allier vision produit, architecture logicielle et gestion de projets de bout en bout",
          },
          {
            label:
              "Rejoindre des équipes collaboratives pour construire des produits ambitieux et durables",
          },
          {
            label:
              "Créer des applications sécurisées, évolutives et centrées sur l'utilisateur, avec un impact réel",
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
          "An entrepreneurial period that broadened my profile across three complementary areas: investment and financial markets, communication, and the development of software and creative projects.",
        content: [
          {
            label:
              "Investment strategies, financial markets and risk management",
          },
          {
            label:
              "Communication, events, partnerships and marketing",
          },
          {
            label:
              "Learning Portuguese",
          },
          {
            label:
              "Development of software and entrepreneurial projects",
          },
          {
            label:
              "Building a multidisciplinary product-oriented profile",
          },
        ],
      },
      {
        label: "Brain Eaters",
        dates: "2024 - 2026",
        state: "completed",
        title: "Brain Eaters",
        intro:
          "An ambitious long-term project involving the complete design and development of a survival strategy game. More than a game, it became a playground to master software architecture, product thinking, user experience and large-scale technical decision-making.",
        content: [
          {
            label:
              "Complete game architecture and gameplay systems with Unity and C#",
          },
          {
            label:
              "Procedural world generation, AI systems and simulation mechanics",
          },
          {
            label:
              "Design of gameplay features including inventory, crafting, city building, exploration and progression systems",
          },
          {
            label:
              "UI/UX design, visual identity and player experience",
          },
          {
            label:
              "Technical architecture, performance optimization and scalable codebase design",
          },
          {
            label:
              "End-to-end product ownership, from concept and design to implementation and continuous iteration",
          },
        ],
      },
      {
        label: "Maty",
        dates: "2026",
        state: "completed",
        title: "Maty",
        intro:
          "Designed and delivered several business applications addressing a wide range of challenges, including pricing management, logistics, SEO, data integration and internal tools, with a strong focus on reliability, user experience and business needs.",
        content: [
          {
            label:
              "Designed a pricing engine for discounts, promotions and commercial operations",
          },
          {
            label:
              "Developed a complete logistics label generation and ZPL printing system",
          },
          {
            label:
              "Developed product feeds, catalog integrations and SEO optimization",
          },
          {
            label:
              "Business applications built with ASP.NET MVC, Web API, Razor, SQL Server and DB2",
          },
          {
            label:
              "Redesigned user interfaces and improved operational workflows alongside business teams",
          },
          {
            label:
              "Strengthened full-stack engineering, software architecture and product thinking skills in a demanding industrial environment",
          },
          {
            label:
              "Delivered projects end-to-end, from functional requirements and solution design to production deployment",
          },
        ],
      },
      {
        label: "Your project",
        dates: "Now",
        state: "next",
        title: "Your project",
        intro:
          "Today, I am looking to contribute to ambitious software products where engineering, product thinking and user experience come together. My goal is to build reliable, scalable and meaningful solutions that have a real impact on users and businesses.",
        content: [
          {
            label:
              "Building modern full-stack products with React, Next.js and .NET",
          },
          {
            label:
              "Transforming business needs into intuitive, high-quality software",
          },
          {
            label:
              "Product thinking, software architecture and end-to-end project ownership",
          },
          {
            label:
              "Joining collaborative teams to build ambitious, long-term products",
          },
          {
            label:
              "Delivering secure, scalable and user-centered applications with real impact",
          },
        ],
      },
    ],
  },
};