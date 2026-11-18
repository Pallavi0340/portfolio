import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const NAV_LINKS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' }
];

export default function Navbar({ onHireClick }) {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const scrollPosition = window.scrollY + 140;
      for (let i = NAV_LINKS.length - 1; i >= 0; i -= 1) {
        const sectionEl = document.getElementById(NAV_LINKS[i].id);
        if (sectionEl && sectionEl.offsetTop <= scrollPosition) {
          setActiveSection(NAV_LINKS[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (event, targetId) => {
    event.preventDefault();
    setMobileMenuOpen(false);
    const targetEl = document.getElementById(targetId);
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header className={`site-header ${isScrolled ? 'site-header--scrolled' : ''}`}>
      <div className="container nav-inner">
        <a
          href="#home"
          className="nav-brand"
          onClick={(event) => handleNavClick(event, 'home')}
          aria-label="Pallavi Portfolio Home"
        >
          <span className="nav-brand-symbol" aria-hidden="true">
            &lt;/&gt;
          </span>
          <span>Pallavi</span>
        </a>

        <nav className="nav-links" aria-label="Primary Navigation">
          {NAV_LINKS.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={(event) => handleNavClick(event, link.id)}
              className={`nav-link ${activeSection === link.id ? 'nav-link--active' : ''}`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="nav-actions">
          <button
            type="button"
            className="btn-primary btn-nav-cta"
            onClick={() => {
              setMobileMenuOpen(false);
              onHireClick();
            }}
          >
            Let&apos;s Connect
          </button>

          <button
            type="button"
            className="mobile-menu-toggle"
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen((prev) => !prev)}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="mobile-drawer" role="dialog" aria-label="Mobile Navigation">
          <div className="container mobile-drawer-inner">
            {NAV_LINKS.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(event) => handleNavClick(event, link.id)}
                className={`mobile-nav-link ${
                  activeSection === link.id ? 'mobile-nav-link--active' : ''
                }`}
              >
                {link.label}
              </a>
            ))}
            <button
              type="button"
              className="btn-primary mobile-drawer-cta"
              onClick={() => {
                setMobileMenuOpen(false);
                onHireClick();
              }}
            >
              Let&apos;s Connect
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
