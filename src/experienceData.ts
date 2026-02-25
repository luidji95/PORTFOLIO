// src/experienceData.ts
export type ExperienceItem = {
  id: string;
  company: string;
  role: string;
  team?: string;
  period: string;
  bullets: string[];
};

export const experience: ExperienceItem[] = [
  {
    id: "telesign",
    company: "Telesign",
    role: "Frontend/UI Development",
    team: "Internal Tools & Dashboards",
    period: "Nov 2023 - Present",
    bullets: [
      "Designed and implemented frontend architecture for internal monitoring and testing dashboards used by technical and operational teams.",
      "Developed reusable UI components for visualizing SMS traffic metrics, delivery rates, failure patterns, and performance indicators.",
      "Built data-driven dashboards that improved visibility of system behavior and operational decision-making.",
      "Integrated REST APIs and asynchronous data flows to display real-time and historical monitoring data.",
      "Collaborated with backend engineers and operations teams to translate complex monitoring requirements into scalable UI solutions.",
      "Improved usability, clarity, and consistency of internal tools, reducing friction for non-technical users.",
    ],
  },
  {
    id: "monite",
    company: "Monite",
    role: "Frontend Developer",
    period: "May 2022 - Nov 2023",
    bullets: [
      "Developed responsive and modular UI components using HTML, CSS, JavaScript, and React.",
      "Implemented reusable React components and page layouts for internal and small-scale web applications.",
      "Integrated REST APIs and implemented data-driven UI features.",
      "Applied state management patterns and conditional rendering to improve application logic and user experience.",
      "Refactored legacy components to improve readability, maintainability, and structure.",
    ],
  },
];