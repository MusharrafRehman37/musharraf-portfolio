import { projects } from "../data/portfolio.js";

export default function Work() {
  return (
    <section id="work">
      <h2>Selected work</h2>
      {projects.map((p) => (
        <a key={p.title} className="row" href={p.link} target="_blank" rel="noopener noreferrer">
          <h3>{p.title}</h3>
          <p>{p.text}</p>
          <em>View live</em>
        </a>
      ))}
    </section>
  );
}
