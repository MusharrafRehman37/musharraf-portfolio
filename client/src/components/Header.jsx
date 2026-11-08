export default function Header({ theme, onToggle }) {
  return (
    <header>
      <a href="#top" aria-label="Home">MR</a>
      <nav>
        <a className="hide" href="#about">About</a>
        <a className="hide" href="#work">Work</a>
        <a className="hide" href="#skills">Skills</a>
        <a href="#contact">Contact</a>
        <button className="t" onClick={onToggle} aria-label="Switch between dark and light">
          {theme === "dark" ? "Light" : "Dark"}
        </button>
      </nav>
    </header>
  );
}
