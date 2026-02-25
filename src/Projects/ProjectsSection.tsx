
import { useMemo, useState } from "react";
import { projects } from "../projectsData";

export const ProjectsSection = () => {
  const [openId, setOpenId] = useState<string | null>(null);

  const sortedProjects = useMemo(() => projects, []); // already ordered in data

  const handleToggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  const stopToggle = (e: React.SyntheticEvent) => {
    e.stopPropagation();
  };

  return (
    <section className="projects" id="projects">
      <h2 className="sectionTitle">Projects</h2>

      <div className="projects__list">
        {sortedProjects.map((p) => {
          const isOpen = openId === p.id;

          return (
            <article
              key={p.id}
              className={`projectCard ${isOpen ? "isOpen" : ""}`}
            >
              <button
                type="button"
                className="projectCard__toggle"
                onClick={() => handleToggle(p.id)}
                aria-expanded={isOpen}
              >
                <div className="projectCard__top">
                  <div className="projectCard__meta">
                    <h3 className="projectCard__name">{p.name}</h3>
                    <p className="projectCard__short">{p.short}</p>
                  </div>

                  <span className="projectCard__arrow" aria-hidden="true">
                    →
                  </span>
                </div>

                <div className="projectCard__links" onClick={stopToggle}>
                  <a
                    className="pill"
                    href={p.demoUrl}
                    target="_blank"
                    rel="noreferrer"
                    onClick={stopToggle}
                    onKeyDown={stopToggle}
                  >
                    Live Demo
                  </a>

                  <a
                    className="iconLink"
                    href={p.repoUrl}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${p.name} GitHub repo`}
                    title="GitHub"
                    onClick={stopToggle}
                    onKeyDown={stopToggle}
                  >
                    <svg
                      viewBox="0 0 24 24"
                      width="20"
                      height="20"
                      aria-hidden="true"
                    >
                      <path
                        fill="currentColor"
                        d="M12 .5C5.73.5.75 5.62.75 12.02c0 5.13 3.29 9.48 7.86 11.02.58.11.79-.26.79-.57v-2.1c-3.2.71-3.88-1.58-3.88-1.58-.52-1.37-1.28-1.73-1.28-1.73-1.04-.73.08-.72.08-.72 1.15.08 1.75 1.22 1.75 1.22 1.02 1.79 2.68 1.27 3.33.97.1-.76.4-1.27.72-1.56-2.55-.3-5.23-1.3-5.23-5.8 0-1.28.44-2.33 1.16-3.15-.12-.3-.5-1.52.11-3.17 0 0 .95-.31 3.12 1.2a10.5 10.5 0 0 1 2.84-.39c.96 0 1.93.13 2.84.39 2.17-1.51 3.12-1.2 3.12-1.2.61 1.65.23 2.87.11 3.17.72.82 1.16 1.87 1.16 3.15 0 4.51-2.69 5.5-5.25 5.79.41.37.78 1.1.78 2.22v3.29c0 .31.21.69.8.57 4.56-1.54 7.85-5.89 7.85-11.02C23.25 5.62 18.27.5 12 .5Z"
                      />
                    </svg>
                  </a>
                </div>
              </button>

              <div className="projectCard__expand" data-open={isOpen}>
                <div className="projectCard__expandInner">
                  <p className="projectCard__descTitle">What’s inside:</p>
                  <ul className="projectCard__bullets">
                    {p.details.map((d, idx) => (
                      <li key={`${p.id}-${idx}`}>{d}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          );
        })}
      </div>
      <div className="projects__more">
  <a
    href="https://github.com/luidji95"
    target="_blank"
    rel="noreferrer"
    className="projects__moreLink"
  >
    View more projects on GitHub →
  </a>
</div>
    </section>
  );
};