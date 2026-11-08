import { services } from "../data/portfolio.js";

export default function Services() {
  return (
    <section id="services">
      <h2>Services</h2>
      <div className="skills">
        {services.map((s) => (
          <div key={s.title}><h3>{s.title}</h3><p>{s.text}</p></div>
        ))}
      </div>
    </section>
  );
}
