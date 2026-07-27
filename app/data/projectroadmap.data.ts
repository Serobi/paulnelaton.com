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
    id: "maty",
    index: "01",
    title: "Maty",
    period: "2026",
    category: "Software Engineering",
    status: "completed",
    summary:
      "Internal business applications designed and delivered from technical implementation to user experience.",
  },
  {
    id: "brain-eaters",
    index: "02",
    title: "Brain Eaters",
    period: "2024 — Today",
    category: "Game & Platform",
    status: "current",
    summary:
      "A complete survival game ecosystem combining gameplay systems, product design and backend development.",
  },
  {
    id: "portfolio",
    index: "03",
    title: "Paul Nelaton",
    period: "2026",
    category: "Web Experience",
    status: "current",
    summary:
      "A product-oriented portfolio built to present engineering work through an interactive web experience.",
  },
  {
    id: "next",
    index: "04",
    title: "Your Project",
    period: "Next",
    category: "New Collaboration",
    status: "planned",
    summary:
      "The next product, platform or experience could become part of this journey.",
  },
];