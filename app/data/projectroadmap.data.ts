export type ProjectRoadmapStatus =
  | "completed"
  | "current"
  | "planned";

export type ProjectRoadmapStep = {
  id: string;
  index: string;
  title: string;
  period: string;
  category: string;
  status: ProjectRoadmapStatus;
  summary: string;
};

export const projectRoadmapSteps: ProjectRoadmapStep[] = [
  {
    id: "brain-eaters",
    index: "01",
    title: "Brain Eaters",
    period: "2024 - 2026",
    category: "Game & Platform",
    status: "completed",
    summary:
      "A complete survival game ecosystem combining gameplay systems, product design and backend development.",
  },
    {
    id: "brain-eaters-io",
    index: "01",
    title: "braineaters.io",
    period: "2024 - 2026",
    category: "Web Platform",
    status: "completed",
    summary:
      "A game-oriented web platform designed to introduce my project Brain Eaters to players and investors.",
  },
  {
    id: "paulnelaton",
    index: "03",
    title: "paulnelaton.com",
    period: "2026",
    category: "Web Experience",
    status: "completed",
    summary:
      "A product-oriented portfolio built to present engineering work through an interactive web experience.",
  },
    {
    id: "maty",
    index: "04",
    title: "Maty",
    period: "2026",
    category: "Software Engineering",
    status: "current",
    summary:
      "Internal business applications designed and delivered from technical implementation to user experience.",
  },
  {
    id: "next",
    index: "05",
    title: "Your Project",
    period: "Next",
    category: "New Collaboration",
    status: "planned",
    summary:
      "The next product, platform or experience could become part of this journey.",
  },
];