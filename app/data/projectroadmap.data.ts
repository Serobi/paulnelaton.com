export type ProjectRoadmapStepId =
  | "cybersecurity"
  | "independent"
  | "brainEaters"
  | "maty"
  | "future";

export type ProjectRoadmapStatus =
  | "completed"
  | "current"
  | "next";

export type ProjectRoadmapItem = {
  label: string;
  status?: ProjectRoadmapStatus;
};

export type ProjectRoadmapStep = {
  id: ProjectRoadmapStepId;
  index: number;
  title: string;
  period: string;
  status: ProjectRoadmapStatus;
};

export type ProjectRoadmapContentItem = {
  status: ProjectRoadmapStatus;
  title: string;
  summary: string;
  items: ProjectRoadmapItem[];
};

export type ProjectRoadmapContent = Record<
  ProjectRoadmapStepId,
  ProjectRoadmapContentItem
>;

export const projectRoadmapSteps: ProjectRoadmapStep[] = [
  {
    id: "cybersecurity",
    index: 1,
    title: "Cybersecurity",
    period: "2015 — 2021",
    status: "completed",
  },
  {
    id: "independent",
    index: 2,
    title: "Independent",
    period: "2021 — 2024",
    status: "completed",
  },
  {
    id: "brainEaters",
    index: 3,
    title: "Brain Eaters",
    period: "2024 — 2026",
    status: "completed",
  },
  {
    id: "maty",
    index: 4,
    title: "Maty",
    period: "2026",
    status: "completed",
  },
  {
    id: "future",
    index: 5,
    title: "Your project",
    period: "Now",
    status: "current",
  },
];

export const projectRoadmapContent: ProjectRoadmapContent = {
  cybersecurity: {
    status: "completed",
    title: "Cybersecurity Experiences",
    summary:
      "Several years working across network security, incident response, privileged access management and security operations.",
    items: [
      {
        label:
          "Network security with Check Point, Fortinet, Palo Alto and Cisco ASA",
      },
      {
        label:
          "Security operations and incident response workflows",
      },
      {
        label:
          "SIEM, ELK, TheHive and security automation",
      },
      {
        label:
          "Privileged access management with CyberArk",
      },
      {
        label:
          "Infrastructure, DevOps and security engineering",
      },
    ],
  },

  independent: {
    status: "completed",
    title: "Independent Projects",
    summary:
      "A period focused on independent work, experimentation and the development of a broader product-oriented profile.",
    items: [
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

  brainEaters: {
    status: "completed",
    title: "Brain Eaters",
    summary:
      "Design and development of a survival strategy game, built independently from technical architecture to user experience.",
    items: [
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

  maty: {
    status: "current",
    title: "Maty",
    summary:
      "Delivery of internal business applications focused on reliability, operational efficiency and user experience.",
    items: [
      {
        label:
          "ASP.NET MVC, Web API and Razor applications",
        status: "completed",
      },
      {
        label:
          "SQL Server and DB2 data integration",
        status: "completed",
      },
      {
        label:
          "Pricing and discount management tools",
        status: "completed",
      },
      {
        label:
          "Stock label generation and ZPL printing workflows",
        status: "completed",
      },
      {
        label:
          "Product feeds, SEO and catalog integrations",
        status: "completed",
      },
      {
        label:
          "User experience and operational workflow improvements",
        status: "completed",
      },
    ],
  },

  future: {
    status: "next",
    title: "Your project",
    summary:
      "The next step combines software engineering, product thinking and polished user experiences.",
    items: [
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
};