import { ArrowUp } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div className="footer-brand-group">
          <a href="#home" className="nav-brand">
            <span className="nav-brand-symbol" aria-hidden="true">
              &lt;/&gt;
            </span>
            <span>{PERSONAL_INFO.name}</span>
          </a>
          <p className="footer-copy">
            &copy; 2026 {PERSONAL_INFO.name}. {PERSONAL_INFO.collegeShort} · B.Tech CSE.
          </p>
        </div>

        <nav className="footer-links" aria-label="Footer Navigation">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#education">Education</a>
          <a href="#contact">Contact</a>
        </nav>

        <button
          type="button"
          className="back-to-top-btn"
          onClick={scrollToTop}
          aria-label="Scroll back to top"
        >
          <span>Top</span>
          <ArrowUp size={15} aria-hidden="true" />
        </button>
      </div>
    </footer>
  );
}
