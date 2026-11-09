import { motion } from "framer-motion";
import { profile } from "../data/portfolio.js";

// Each letter slides up from behind a mask, one after another.
function Line({ text, start }) {
  return (
    <span className="ln">
      {text.split("").map((c, i) => (
        <motion.span
          key={i}
          className="ch"
          initial={{ y: "105%" }}
          animate={{ y: 0 }}
          transition={{ duration: 0.9, ease: [0.2, 0.8, 0.2, 1], delay: 0.2 + (start + i) * 0.045 }}
        >
          {c}
        </motion.span>
      ))}
    </span>
  );
}

export default function Hero() {
  const fade = (delay) => ({ initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { duration: 1, delay } });
  return (
    <main id="top" className="hero">
      <h1 aria-label={`${profile.firstName} ${profile.lastName}`}>
        <Line text={profile.firstName} start={0} />
        <Line text={profile.lastName} start={profile.firstName.length} />
      </h1>
      <motion.p className="lead" {...fade(1.5)}>{profile.tagline}</motion.p>
      <motion.div className="cta" {...fade(1.7)}>
        <a className="btn fill" href="#work">See my work</a>
        <a className="btn" href="#contact">Hire me</a>
       <a className="btn" href={profile.resume} target="_blank" rel="noopener noreferrer">Resume</a>
      </motion.div>
    </main>
  );
}
