import { profile } from "../data/portfolio.js";

export default function About() {
  return (
    <section id="about">
      <h2>About</h2>
      <div className="about">
        <div className="facts">
          <img className="ph" src={profile.photo} alt={`Photo of ${profile.firstName} ${profile.lastName}`} />
          <div><b>1 year</b><small>building web and mobile apps</small></div>
          <div><b>2 roles</b><small>freelance developer and web manager</small></div>
        </div>
        <div>
          <p>I’m {profile.firstName}, a developer who works across the MERN stack: MongoDB, Express, React and Node.js. I build web and mobile apps for clients as a freelancer.</p>
          <p>
            I also work as a web manager on the backend at{" "}
            <a href={profile.company.url} target="_blank" rel="noopener noreferrer">{profile.company.name}</a>,
            where I look after APIs, databases and the reliability of live systems.
          </p>
        </div>
      </div>
    </section>
  );
}
