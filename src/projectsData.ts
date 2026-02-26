
export type Project = {
  id: string;
  name: string;
  demoUrl: string;
  repoUrl: string;
  short: string;
  details: string[];
};

export const projects: Project[] = [
  
  {
    id: "hps",
    name: "Hiring Pipeline Simulator",
    demoUrl: "https://hiring-pipeline-simulator.vercel.app/", 
    repoUrl: "https://github.com/luidji95/hiring-pipeline-simulator",
    short:
      "Enterprise-grade recruitment workflow engine with persistent state and advanced pipeline analytics.",
    details: [
      "Advanced Workflow Engine: Dynamic multi-stage Kanban (Applied → HR → Technical → Offer → Hired/Rejected) with drag-and-drop transitions and transactional consistency.",
      "Candidate Lifecycle Timeline: Full historical tracking of stage changes, notes, feedback, and rejection reasons with chronological audit rendering.",
      "State Restoration System: Intelligent rollback that restores rejected candidates to their previous stage without corrupting metrics.",
      "Workspace Architecture: Multi-workspace environment with isolated pipelines and persistent instance indexing.",
      "Real-Time Persistence Layer: Local-first storage abstraction ensuring deterministic state recovery.",
      "Advanced Filtering & Search: Instant candidate search with stage-aware filtering and jump-to-card navigation.",
      "Recruitment Analytics Dashboard: Live metrics including stage distribution, conversion rates, drop-off analysis, and time-in-stage performance.",
      "Robust Data Modeling: Normalized candidate schema with defensive parsing to prevent UI corruption.",
      "Scalable Component Architecture: Modular system (TopBar, Filters, StageColumn, CandidateCard, TimelinePanel, AnalyticsView).",
      "Type-Safe Core: TypeScript-driven domain modeling with compile-time protection against invalid workflow mutations.",
    ],
  },


  {
    id: "jaap",
    name: "Job Application Analytics Platform",
    demoUrl: "https://jobflowtracker.com",
    repoUrl: "https://github.com/luidji95/job-application-tracker",
    short:
      "Data-driven recruitment tracker with real-time persistence and advanced UI state management.",
    details: [
      "Advanced UI State & Logic: Kanban dashboard + custom State Restoration engine (revert rejected apps to previous stage with consistent state).",
      "Robust Data Normalization: Utility layer for sanitization & status normalization to prevent UI/runtime issues from inconsistent payloads.",
      "Full-Stack Integration: Supabase auth + real-time database for persistent, user-scoped data storage.",
      "Engineered Guest Access: Guest Demo mode via Supabase Edge Functions (instant isolated workspace without signup).",
      "Optimized Navigation: Search + jump-to-result engine with smooth scroll-to-view for large datasets.",
      "Type-Safe Development: TypeScript + Zod for end-to-end type safety, schema validation, and reliable form handling.",
    ],
  },
 
{
  id: "fit",
  name: "Feature Impact Tracker - Product Analytics Tool",
  demoUrl: "https://your-fit.vercel.app", 
  repoUrl: "https://github.com/yourname/featureimpact-tracker", 
  short:
    "Product-oriented analytics app for tracking feature effectiveness from release to evaluation.",
  details: [
    "Feature Lifecycle Tracking: Planned → Released → Evaluated flow with clear state transitions.",
    "Metrics Visualization: Engagement, adoption rate, and performance indicators with dashboard-style overview.",
    "Impact Comparison Over Time: Compare feature performance across time windows and releases.",
    "Insights Dashboard: Product & engineering view focused on decision-making signals.",
    "Data Modeling & Business Logic: Emphasis on clean domain modeling and realistic workflow simulation.",
  ],
},
];