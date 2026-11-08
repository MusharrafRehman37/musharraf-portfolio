import { useEffect } from "react";
import Lenis from "lenis";
import useTheme from "./hooks/useTheme.js";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Marquee from "./components/Marquee.jsx";
import About from "./components/About.jsx";
import Services from "./components/Services.jsx";
import Work from "./components/Work.jsx";
import Skills from "./components/Skills.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  const [theme, toggleTheme] = useTheme();

  // Smooth scrolling
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const lenis = new Lenis();
    let id;
    const raf = (time) => {
      lenis.raf(time);
      id = requestAnimationFrame(raf);
    };
    id = requestAnimationFrame(raf);
    return () => {
      cancelAnimationFrame(id);
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <div className="wrap">
        <Header theme={theme} onToggle={toggleTheme} />
        <Hero />
      </div>
      <Marquee />
      <div className="wrap">
        <About />
        <Services />
        <Work />
        <Skills />
        <Contact />
        <Footer />
      </div>
    </>
  );
}
