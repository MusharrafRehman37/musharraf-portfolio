import { profile } from "../data/portfolio.js";

export default function Footer() {
  return (
    <footer>
      <span>© {new Date().getFullYear()} {profile.firstName} {profile.lastName}</span>
      <span className="soc">
        <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href={profile.github} target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href={profile.instagram} target="_blank" rel="noopener noreferrer">Instagram</a>
      </span>
    </footer>
  );
}
