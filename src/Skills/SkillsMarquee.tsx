
const SKILLS = [
  "React",
  "TypeScript",
  "JavaScript (ES6+)",
  "HTML5",
  "CSS3",
  "Tailwind CSS",
  "Next.js",
  "Nuxt.js",
  "Vue",
  "Supabase (Auth/DB/Storage)",
  "REST APIs",
  "Node.js",
  "Express",
  "Git",
  "GitHub",
  "Vite",
  "npm",
  "pnpm",
  "Postman",
  "React Context",
  "TanStack Query",
  "Redux Toolkit",
  "Scrum/Agile",
  "Jira",
  "Confluence",
];

export const SkillsMarquee = () => {
  // dupliranje zbog “infinite” efekta
  const items = [...SKILLS, ...SKILLS];

  return (
    <div className="skillsMarquee" aria-label="Skills ticker">
      <div className="skillsMarquee__track">
        {items.map((s, i) => (
          <span className="skillsMarquee__item" key={`${s}-${i}`}>
            {s}
          </span>
        ))}
      </div>
    </div>
  );
};