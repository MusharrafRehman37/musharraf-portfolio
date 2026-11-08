import { skills } from "../data/portfolio.js";

export default function Skills() {
  return (
    <section id="skills">
      <h2>Skills</h2>
      <div className="skills">
        {skills.map((s) => (
          <div key={s.title}><h3>{s.title}</h3><p>{s.text}</p></div>
        ))}
      </div>
    </section>
  );
}
