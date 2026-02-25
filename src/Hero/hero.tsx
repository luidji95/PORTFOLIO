
import { SkillsMarquee } from "../Skills/SkillsMarquee";

export const Hero = () => {
  return (
    <section className="hero" id="top">
      <div className="hero__content">
        <h1 className="hero__name">Miloš Petrović</h1>
        <p className="hero__title">Frontend Developer | React & TypeScript</p>

        <p className="hero__subtitle">
          Building production-ready React applications with clean architecture,
          strong UX, and reliable state management.
        </p>

        <SkillsMarquee />

        <div className="hero__links">
          <a
            href="https://github.com/luidji95"
            target="_blank"
            rel="noreferrer"
            className="hero__pill"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
            className="hero__pill hero__pill--secondary"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
};