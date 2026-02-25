
import { experience } from "../experienceData";

export const ExperienceSection = () => {
  return (
    <section className="experience">
      <h2 className="sectionTitle">Experience</h2>

      <div className="experienceBox">
        {experience.map((item) => (
          <article className="expItem" key={item.id}>
            <div className="expItem__header">
              <h3 className="expItem__company">{item.company}</h3>

              <div className="expItem__meta">
                <p className="expItem__role">
                  {item.role}
                  {item.team ? <span className="expItem__team"> · {item.team}</span> : null}
                </p>
                <p className="expItem__period">{item.period}</p>
              </div>
            </div>

            <ul className="expItem__bullets">
              {item.bullets.map((b, idx) => (
                <li key={`${item.id}-${idx}`}>{b}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
};