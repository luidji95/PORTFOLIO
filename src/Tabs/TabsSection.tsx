
import { useState } from "react";
import { ProjectsSection } from "../Projects/ProjectsSection";
import { ExperienceSection } from "../Experience/ExperienceSection";

type TabKey = "projects" | "experience";

export const TabsSection = () => {
  const [tab, setTab] = useState<TabKey>("projects");

  return (
    <section className="tabs" aria-label="Main content">
      <div className="tabs__inner">
        <div className="tabs__header">
          <button
            type="button"
            className={`tab ${tab === "projects" ? "tab--active" : ""}`}
            onClick={() => setTab("projects")}
            aria-pressed={tab === "projects"}
          >
            Projects
          </button>

          <button
            type="button"
            className={`tab ${tab === "experience" ? "tab--active" : ""}`}
            onClick={() => setTab("experience")}
            aria-pressed={tab === "experience"}
          >
            Experience
          </button>
        </div>

        <div className="tabs__content">
          {tab === "projects" ? <ProjectsSection /> : <ExperienceSection />}
        </div>
      </div>
    </section>
  );
};